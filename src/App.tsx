import React, { useEffect, useState } from 'react';
import styles from './styles.module.css'; 
import TopBar from './components/TopBar'
import SideNav from './components/SideNav'
import MovieCard from './components/MovieCard'

const OMDAPI_URL = 'http://www.omdbapi.com/?apikey=a4d98298'

const App = () => {
  const [movies, setMovies] = useState([]);
  const [isSideNavOpen, setIsSideNavOpen] = useState(false);

  useEffect(() => {
    fetchMovies();
  }, [])

  async function fetchMovies() {
    try {
      const results = await fetch(`${OMDAPI_URL}&s=super`);
      const body = await results.json();

      setMovies(body.Search);
    } catch(err) {
      console.error(err);
    }
  }

  function toggleSideNav() {
    setIsSideNavOpen(!isSideNavOpen);
  }

  return (
    <div className={styles.app}>
      <TopBar toggleSideNav={toggleSideNav} isSideNavOpen={isSideNavOpen} />
      <div className={styles.container}>
        <SideNav isOpen={isSideNavOpen} />
        <div className={styles.main}>
          <div className={styles.header}>Movie List</div>
          <div className={styles.movieListContainer}>
            {movies.map(movie => <MovieCard movie={movie} url={OMDAPI_URL}/>)}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;

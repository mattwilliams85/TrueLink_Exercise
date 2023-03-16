import React, { useState } from 'react';
import styles from './styles.module.css';
import Modal from 'react-modal';
import { ReactComponent as CloseIcon } from '../../images/close-icon.svg';
interface Props {
  movie: Movie;
  url: string;
}

interface Movie {
  Poster?: string;
  Title?: string;
  Type?: string;
  Year?: string;
  imdbID?: string;
  Rated?: string;
  Released?: string,
  Runtime?: string,
  Genre?: string,
  Director?: string,
  Writer?: string,
  Actors?: string[],
  Plot?: string,
  Language?: string,
  Country?: string,
}

Modal.setAppElement('#root');

const MovieCard:React.FC<Props> = ({movie, url}) => {
  const [modalIsOpen, setIsOpen] = useState(false);
  const [details, setDetails] = useState<Movie>({});

  async function fetchMovie() {
    try {
      const results = await fetch(`${url}&i=${movie.imdbID}`);
      const body = await results.json();

      setDetails(body);
    } catch(err) {
      console.error(err);
    }
  }

  function handleOnClick() {
    fetchMovie();
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }
  
  return (
    <>
    <div className={styles.card} onClick={handleOnClick}>
      <div className={styles.title}>{movie.Title}</div>
      <div className={styles.year}>{movie.Year}</div>
      <img src={movie.Poster} />
    </div>
    <Modal 
      isOpen={modalIsOpen} 
      onRequestClose={closeModal} 
      id='modal' 
      style={
        {content: {maxWidth: '500px', maxHeight: '500px', margin: '0 auto'}}}>
      <CloseIcon className={styles.close} onClick={closeModal}/>
      <ul>
        <li><b>Title:</b> {details.Title}</li>
        <li><b>Year::</b> {details.Year}</li>
        <li><b>Rated::</b> {details.Rated}</li>
        <li><b>Released:</b> {details.Released}</li>
        <li><b>Runtime:</b> {details.Runtime}</li>
        <li><b>Genre:</b> {details.Genre}</li>
        <li><b>Director:</b> {details.Director}</li>
        <li><b>Writer:</b> {details.Writer}</li>
        <li><b>Actors:</b> {details.Actors}</li>
        <li><b>Plot:</b> {details.Plot}</li>
        <li><b>Language:</b> {details.Language}</li>
        <li><b>Country:</b> {details.Country}</li>
        <li>
          <b>Poster:</b> 
          <a href={details.Poster}>
            <span className={styles.poster}>{details.Poster}</span>
          </a>
        </li>
      </ul>
    </Modal>
    </>
  )
}

export default MovieCard;

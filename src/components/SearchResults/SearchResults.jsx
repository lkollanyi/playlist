import React from 'react';
import TrackList from '../TrackList/TrackList';
import styles from './SearchResults.module.css';

export default function SearchResults({results, onAddTrack, playlist}) {
  return (
    <div className={styles.container}>
        <h2 className={styles.title}>Results</h2>
        <TrackList tracks={results}  onButtonClick={onAddTrack} action="add" playlist={playlist}/>
    </div>
  )
}

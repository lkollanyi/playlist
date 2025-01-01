import React from 'react';
import TrackList from '../TrackList/TrackList';
import styles from './Playlist.module.css'

export default function Playlist() {
  return (
    <div className={styles.container}>
        <h2 className={styles.title}>Playlist name (editable)</h2>
        <TrackList/>
        <button className={styles.btn}>Save Playlist</button>
    </div>
  )
}

import React from 'react';
import TrackList from '../TrackList/TrackList';
import styles from './Playlist.module.css'

export default function Playlist({playlist, name}) {
  return (
    <div className={styles.container}>
        <h2 className={styles.title}>{name} (not yet editable)</h2>
        <TrackList tracks={playlist}/>
        <button className={styles.btn}>Save Playlist</button>
    </div>
  )
}

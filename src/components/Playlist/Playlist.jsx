import React from 'react';
import TrackList from '../TrackList/TrackList';
import styles from './Playlist.module.css'

export default function Playlist({playlist}) {
  return (
    <div className={styles.container}>
        <h2 className={styles.title}>{playlist.name} (not yet editable)</h2>
        <TrackList tracks={playlist.tracks}/>
        <button className={styles.btn}>Save Playlist</button>
    </div>
  )
}

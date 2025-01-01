import React from 'react';
import Track from '../Track/Track';
import styles from './TrackList.module.css'

export default function TrackList() {
  return (
    <div className={styles.trackList}>
        <div className={styles.track}><Track/></div>
        <div className={styles.track}><Track/></div>
        <div className={styles.track}><Track/></div>
        <div className={styles.track}><Track/></div>
        <div className={styles.track}><Track/></div>
    </div>
  )
}

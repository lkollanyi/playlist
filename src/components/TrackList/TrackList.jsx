import React from 'react';
import Track from '../Track/Track';
import styles from './TrackList.module.css'

export default function TrackList({tracks}) {
  return (
    <div className={styles.trackList}>
       {tracks.map((track) => 
        <div className={styles.track} key={track.id}>
          <Track 
            track={track} 
            action={''}/>
        </div>)}

    </div>
  )
}


// 
//
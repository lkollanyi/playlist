import React from 'react';
import Track from '../Track/Track';
import styles from './TrackList.module.css'

export default function TrackList({tracks, onButtonClick, action, playlist=[]}) {

  
  return (
    <div className={styles.trackList}>
       {tracks.map((track) => {
        if (playlist.filter(t => t.id === track.id).length > 0) {
          action = "done";
        }
        return (
        <div className={styles.track} key={track.id}>
          <Track 
            track={track} 
            action={action}
            onButtonClick={onButtonClick}
          />
        </div>
        )}
      )}

    </div>
  )
}


// 
//
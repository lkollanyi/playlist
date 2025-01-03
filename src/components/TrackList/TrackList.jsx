import React from 'react';
import Track from '../Track/Track';
import styles from './TrackList.module.css'

export default function TrackList({tracks, onButtonClick, action, playlist=[]}) {

  
  return (
    <div className={styles.trackList}>
       {tracks.map((track) => {
        const isInPlaylist = playlist.some(t => t.id === track.id);
        const trackAction = isInPlaylist ? "done" : action;

        return (
        <div className={styles.track} key={track.id}>
          <Track 
            track={track} 
            action={trackAction}
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
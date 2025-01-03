import React from 'react'
import styles from './Track.module.css'

export default function Track({track, action, onButtonClick}) {
  const button_text = {
    add: "⊕",
    remove: "×",
    done: "✓"
  }

  function handleClick(e) {
    e.preventDefault();
    onButtonClick(track)
  }

  return (
    <div className={styles.trackContainer}>
      <div className={styles.trackInfo}>
        <span className={styles.title}>{track.title}</span>
        <span className={styles.artist}>{track.artist}</span>
      </div>
      <button className={styles.button} onClick={handleClick}>{button_text[action] || "?"}</button>
    </div>
  )
}

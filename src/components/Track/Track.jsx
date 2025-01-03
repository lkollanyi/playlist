import React from 'react'
import styles from './Track.module.css'

export default function Track({track, action}) {
  const button_text = {
    add: "⊕",
    remove: "×"
  }
  return (
    <div className={styles.trackContainer}>
      <div className={styles.trackInfo}>
        <span className={styles.title}>{track.title}</span>
        <span className={styles.artist}>{track.artist}</span>
      </div>
      <button className={styles.button}>{button_text[action] || "?"}</button>
    </div>
  )
}

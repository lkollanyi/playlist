import React from 'react'
import styles from './Track.module.css'

export default function Track({title='Track name', artist='Sample Artist', action=''}) {
  const button_text = {
    add: "⊕",
    remove: "×"
  }
  return (
    <div className={styles.trackContainer}>
      <div className={styles.trackInfo}>
        <span className={styles.title}>{title}</span>
        <span className={styles.artist}>{artist}</span>
      </div>
      <button className={styles.button}>{button_text[action] || "?"}</button>
    </div>
  )
}

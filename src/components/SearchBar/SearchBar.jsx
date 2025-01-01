import React from 'react';
import styles from './SearchBar.module.css'

export default function SearchBar() {
  return (
    <div >
        <form action="" className={styles.searchForm}>
            <label htmlFor="">
                <input 
                    className={styles.searchBox}
                    type="text" 
                />
            </label>
            <button>Search</button>
        </form>
    </div>
  )
}

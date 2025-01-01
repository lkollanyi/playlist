import { useState } from 'react'
import './App.css'
import SearchResultsContainer from './components/SearchResultsContainer'
import PlaylistContainer from './components/PlaylistContainer'
import SearchBar from './components/SearchBar/SearchBar'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='app'>
      <div className="banner">
        <h1 className='center'>Spotify Playlist Builder</h1>
      </div>
      <main>
        <div className="searchContainer center">
          <SearchBar />
        </div>
        <div className="listsContainer">
          <SearchResultsContainer/>
          <PlaylistContainer/>
        </div>
      </main>
    </div>
  )
}

export default App

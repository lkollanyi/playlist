import { useState } from 'react'
import './App.css'
import SearchResultsContainer from './components/SearchResultsContainer'
import PlaylistContainer from './components/PlaylistContainer'
import SearchBar from './components/SearchBar'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='app'>
      <h1 className='banner center'>Spotify Playlist Maker</h1>
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

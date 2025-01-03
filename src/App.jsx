import { useState } from 'react'
import './App.css'
import SearchResultsContainer from './components/SearchResultsContainer'
import PlaylistContainer from './components/PlaylistContainer'
import SearchBar from './components/SearchBar/SearchBar'

//This is a mockup of the data that would be returned from the API
const mockData = [
  {
    title: 'Track 1',
    artist: 'Artist 1',
    album: 'Album 1',
    id: 1,
    songId: 23,
  },
  {
    title: 'Track 2',
    artist: 'Artist 2',
    album: 'Album 2',
    id: 2,
    songId: 983,
  },
  {
    title: 'Track 3',
    artist: 'Artist 3',
    album: 'Album 3',
    id: 3,
    songId: 973,
  },
  {
    title: 'Track 3',
    artist: 'Artist 3',
    album: 'Album 3',
    id: 4,
    songId: 231,
  }
];

const mockPlaylist = {
  name: "no name",
  tracks: [
    {
      title: 'Track 3',
      artist: 'Artist 3',
      album: 'Album 3',
      id: 3,
      songId: 973,
    },
    {
      title: 'Track 3',
      artist: 'Artist 3',
      album: 'Album 3',
      id: 4,
      songId: 231,
    }
  ],
}

function App() {
  const [results, setResults] = useState(mockData);
  const [playlist, setPlaylist] = useState(mockPlaylist);
  


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
          <SearchResultsContainer results={results}/>
          <PlaylistContainer playlist={playlist}/>
        </div>
      </main>
    </div>
  )
}

export default App

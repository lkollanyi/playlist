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
    title: 'Track 4',
    artist: 'Artist 4',
    album: 'Album 4',
    id: 4,
    songId: 231,
  }
];

const mockPlaylist = [
    {
      title: 'Track 3',
      artist: 'Artist 3',
      album: 'Album 3',
      id: 3,
      songId: 973,
    },
    {
      title: 'Track 4',
      artist: 'Artist 4',
      album: 'Album 4',
      id: 4,
      songId: 231,
    }
  ]

const mockName = 'no name';

function App() {
  const [results, setResults] = useState(mockData);
  const [playlist, setPlaylist] = useState(mockPlaylist);
  const [name, setName] = useState(mockName);

  function handleAddTrack(track) {
    if (playlist.filter((t) => t.id === track.id).length > 0) {
      return;
    } else {
      setPlaylist([...playlist, track]);
    };
  };

  function handleRemoveTrack(track) {
    setPlaylist(playlist.filter((t) => t.id !== track.id));
  }
  


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
          <SearchResultsContainer results={results}  onAddTrack={handleAddTrack} playlist={playlist}/>
          <PlaylistContainer playlist={playlist} name={name} onRemoveTrack={handleRemoveTrack}/>
        </div>
      </main>
    </div>
  )
}

export default App

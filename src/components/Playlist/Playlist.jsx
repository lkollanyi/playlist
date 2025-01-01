import React from 'react';
import TrackList from '../TrackList/TrackList';

export default function Playlist() {
  return (
    <div>
        <h2>Playlist name (editable)</h2>
        <TrackList/>
        <button>Save Playlist</button>
    </div>
  )
}

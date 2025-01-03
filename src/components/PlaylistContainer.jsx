import React from 'react';
import Playlist from './Playlist/Playlist';

export default function PlaylistContainer({playlist, name, onRemoveTrack}) {
  return (
    <div>
        <Playlist playlist={playlist} name={name} onRemoveTrack={onRemoveTrack}/>
    </div>
  )
}

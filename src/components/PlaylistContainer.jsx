import React from 'react';
import Playlist from './Playlist/Playlist';

export default function PlaylistContainer({playlist}) {
  return (
    <div>
        <Playlist playlist={playlist}/>
    </div>
  )
}

import React from 'react';
import SearchResults from './SearchResults/SearchResults';

export default function SearchResultsContainer({results, onAddTrack, playlist}) {
  return (
    <div>
        <SearchResults results={results}  onAddTrack={onAddTrack} playlist={playlist}/>
    </div>
  )
}

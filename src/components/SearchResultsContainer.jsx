import React from 'react';
import SearchResults from './SearchResults/SearchResults';

export default function SearchResultsContainer({results}) {
  return (
    <div>
        <SearchResults results={results}/>
    </div>
  )
}

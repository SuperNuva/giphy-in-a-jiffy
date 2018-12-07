import React from 'react'
import Gif from './Gif.js'
import Buttons from './Buttons.js'
import { getSorted, getFiltered } from './utils'


const SearchResult = (props) => {
  const { message, sortData, onSortClick, filterType, onFilterClick, clearFilter  } = props
    const results = sortData ? getSorted(props.results) : props.results
    
  return (
    <div>
      <p className="message">{message}</p>
      <Buttons onSortClick={onSortClick} onFilterClick={onFilterClick} clearFilter={clearFilter}/>
      <div className="result">
        {
          filterType
          ? (
              getFiltered(filterType, results).length !== 0 
              ? getFiltered(filterType, results).map(result => <Gif result={result} key={result.id}/>) : <p>Sorry! There's no gif matching your criteria.</p>
            )
          : results.map(result => <Gif result={result} key={result.id}/>)
        }
      </div>
    </div>
  )
}

export default SearchResult;
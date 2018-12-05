import React from 'react'
import Gif from './Gif.js'

const SearchResult = (props) => {
  const { message, results } = props
  return (
    <div>
      <p>{message}</p>
      <div className='result'>
          {results.map(result => <Gif result={result} key={result.id}/>)}
      </div>
      }
    </div>
  )
}

export default SearchResult;
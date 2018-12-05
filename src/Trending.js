import React from 'react'
import Gif from './Gif.js'

const Trending = (props) => {
  return (
    <div>
      <p>Trending Gifs</p>
      <div className='result'>
        {props.results.map(result => <Gif result={result} key={result.id}/>)}
      </div>
    </div>
  )
}

export default Trending;
import React from 'react';

const Gif = (props) => {
  const result = props.result;
  const imgSrc = result.images.fixed_width.url;
  return (
    <div>
    {
      result
      ? <li className='gif'>
          <img src={imgSrc} alt={result.title}/>
          <p>{result.title}</p>
        </li>
      : <span>There's no gif matching your search criteria</span>
    }
    </div>
  )
}

export default Gif
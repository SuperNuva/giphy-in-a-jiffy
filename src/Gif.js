import React from 'react';

const Gif = (props) => {
  const result = props.result;
  const imgSrc = result.images.fixed_width.url;
  return (
    <li className='gif'>
      <img src={imgSrc} alt={result.title}/>
    </li>
  )
}

export default Gif
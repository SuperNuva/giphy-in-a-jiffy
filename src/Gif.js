import React from 'react';

const Gif = (props) => {
  const result = props.result;
  const imgSrc = result.images.fixed_width.url;
  return (
    <li>
      <img src={imgSrc} alt={result.title}/>
      <p>{result.import_datetime}</p>
    </li>
  )
}

export default Gif
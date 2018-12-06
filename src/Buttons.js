import React from 'react'

const Buttons = (props) => {
  return (
    <div>
      <button className='btn' onClick={props.onSortClick}>Newest to Oldest</button>
      <button className='btn' onClick={() => props.onFilterClick('pg-13')}>Rated PG-13</button>
      <button className='btn' onClick={() => props.onFilterClick('g')}>Rated G</button>
      <button className='btn' onClick={props.clearFilter}>Clear Filter</button>
    </div>
  )
}

export default Buttons;
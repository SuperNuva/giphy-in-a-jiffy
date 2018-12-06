import React from 'react'

const Buttons = (props) => {
  return (
    <div>
      <button className='Btn' onClick={props.onSortClick}>Newest to Oldest</button>
      <button className='Btn' onClick={() => props.onFilterClick('pg-13')}>Rated PG-13</button>
      <button className='Btn' onClick={() => props.onFilterClick('g')}>Rated G</button>
      <button className='Btn' onClick={props.clearFilter}>Clear Filter</button>
    </div>
  )
}

export default Buttons;
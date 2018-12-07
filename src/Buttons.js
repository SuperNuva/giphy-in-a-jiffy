import React from 'react'

const Buttons = (props) => {
  return (
    <div>
      <button className="btn filterBtn" id="sort-Btn" onClick={props.onSortClick}>Newest to Oldest</button>
      <button className="btn filterBtn" id="pg-13-Btn" onClick={() => props.onFilterClick('pg-13')}>Rated PG-13</button>
      <button className="btn filterBtn" id="g-Btn" onClick={() => props.onFilterClick('g')}>Rated G</button>
      <button className="btn filterBtn" id="clear-Btn" onClick={props.clearFilter}>Clear Filter</button>
    </div>
  )
}

export default Buttons;
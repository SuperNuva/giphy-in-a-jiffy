import React, { Component } from 'react'
import Gif from './Gif.js'
import Buttons from './Buttons.js'
import { getSorted, getFiltered } from './utils'


class SearchResult extends Component {
  constructor(props) {
    super(props);
    this.state = {
      filterType: null,
    }
    this.onFilterClick = this.onFilterClick.bind(this)
    this.clearFilter = this.clearFilter.bind(this)
  }

  onFilterClick(type) {
    this.setState({filterType: type})
  }

  clearFilter() {
    this.setState({filterType: null})
  }

  render() {
    const { message, sortData, onSortClick } = this.props
    const results = sortData ? getSorted(this.props.results) : this.props.results
    
    return (
      <div>
        <p className="message">{message}</p>
        <Buttons onSortClick={onSortClick} onFilterClick={this.onFilterClick} clearFilter={this.clearFilter}/>
        <div className="result">
          {
            this.state.filterType
            ? getFiltered(this.state.filterType, results).map(result => <Gif result={result} key={result.id}/>)
            : results.map(result => <Gif result={result} key={result.id}/>)
          }
        </div>
      </div>
    )
  }
}

export default SearchResult;
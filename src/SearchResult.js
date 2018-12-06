import React, { Component } from 'react'
import Gif from './Gif.js'
import Buttons from './Buttons.js'


class SearchResult extends Component {
  constructor(props) {
    super(props);
    this.state = {
      filterType: null,
    }
    this.onFilterClick = this.onFilterClick.bind(this)
    this.clearFilter = this.clearFilter.bind(this)
  }

  //sorts the results from newst import date to oldest import date
  getSorted(array) {
    return array.sort((a,b) => {
      var c = new Date(a.import_datetime);
      var d = new Date(b.import_datetime);
      return d-c
    });
  }

  //filter the results based on rating
  getFiltered(filterType, results) {
    return filterType !== null ? results.filter(result => result.rating === filterType) : results
  }

  onFilterClick(type) {
    this.setState({filterType: type})
  }

  clearFilter() {
    this.setState({filterType: null})
  }

  render() {
    const { message, sortData, onSortClick } = this.props
    const results = sortData ? this.getSorted(this.props.results) : this.props.results
    
    return (
      <div>
        <p className="message">{message}</p>
        <Buttons onSortClick={onSortClick} onFilterClick={this.onFilterClick} clearFilter={this.clearFilter}/>
        <div className="result">
          {
            this.state.filterType
            ? this.getFiltered(this.state.filterType, results).map(result => <Gif result={result} key={result.id}/>)
            : results.map(result => <Gif result={result} key={result.id}/>)
          }
        </div>
      </div>
    )
  }
}

export default SearchResult;
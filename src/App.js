import React, { Component } from 'react';
import './App.css';
import axios from 'axios'
import Gif from './Gif.js';

class App extends Component {
  constructor() {
    super();
    this.state = {
      query: '',
      results: [],
      message: '',
      rating: '',
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleSelect = this.handleSelect.bind(this);
  }

  handleChange(evt) {
    this.setState({query: evt.target.value})
  }

  async handleSubmit(evt) {
    evt.preventDefault();
    const http = 'https://api.giphy.com/v1/gifs/search?';
    const query = `q=${this.state.query}`;
    const key = '&api_key=BQStT8BRsgsqlIugTI8fRI5k6wZzgp3H';
    const url = http + query + key;
    try {
      const { data } = await axios.get(url);
      this.setState({results: data.data, message: `Search results for ${this.state.query}` })
    } catch(err) {
      console.error(err);
    }
    this.setState({query: ''})
  }

  handleSelect(evt) {
    this.setState({rating: evt.target.value})
  }

  render() {
    let results = this.state.results
    return (
      <div className="App">
        <h1>Giphy in a Jiffy!</h1>
        <form  className='searchBar' onSubmit={this.handleSubmit}>
          <input type='text' value={this.state.query} onChange={this.handleChange}/>
          <button type='submit'>Search</button>
        </form>
        <p>{this.state.message}</p>
        <select value={this.state.rating} onChange={this.handleSelect}>
          <option>Filter by Rating</option>
          <option value='y'>Y</option>
          <option value='g'>G</option>
          <option value='pg'>PG</option>
          <option value='pg-13'>PG-13</option>
          <option value='r'>R</option>
        </select>
        {
          this.state.rating
          ? <div className='result'>
            {results = results.filter(result => result.rating === this.state.rating).map(result => <Gif result={result} key={result.id}/>)}
            </div>
          : <div className='result'>
            {results.map(result => <Gif result={result} key={result.id}/>)}
            </div>
        }
      </div>
    );
  }
}

export default App;

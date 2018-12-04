import React, { Component } from 'react';
import './App.css';
import axios from 'axios'

class App extends Component {
  constructor() {
    super();
    this.state = {
      query: '',
      results: []
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(evt) {
    this.setState({query : evt.target.value})
  }

  async handleSubmit(evt) {
    evt.preventDefault();
    const http = 'http://api.giphy.com/v1/gifs/search?';
    const query = `q=${this.state.query}`;
    const key = '&api_key=BQStT8BRsgsqlIugTI8fRI5k6wZzgp3H';
    const url = http + query + key;
    try {
      const { data } = await axios.get(url);
      this.setState({results: data.data})
    } catch(err) {
      console.error(err);
    }
  }

  render() {
    const results = this.state.results
    return (
      <div className="App">
        <header className="App-header">
         <h1>Hello World!</h1>
         <form  onSubmit={this.handleSubmit}>
           <input type='text' name='query' value={this.state.query} onChange={this.handleChange}/>
           <button type='submit'>Search</button>
           <div>
           {
            results.map(result => {
              return(
                <li key={result.id}>
                <img src={result.images.fixed_width.url} alt={result.title}/>
                <p>{result.title}</p>
                </li>
              )
            })
           }
           </div>
         </form>
        </header>
      </div>
    );
  }
}

// http://api.giphy.com/v1/gifs/search?q=ryan+gosling&api_key=BQStT8BRsgsqlIugTI8fRI5k6wZzgp3H&limit=5

// key = BQStT8BRsgsqlIugTI8fRI5k6wZzgp3H

export default App;

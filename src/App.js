import React, {Component} from 'react';
import './App.css';
import ShoeList from './ShoeList';

class App extends Component{
  constructor(props) {
    super(props)
  
    this.state = {
       
    }
  }
  render() {
    return (
      <div className="App">
        <div className="filters">
          <h4>Filters</h4>
          <h5>PRICE</h5>
          <h5>BRAND</h5>
          <ul><h5>COLOR</h5>
            <li>Black</li>
            <li>Brown</li>
            <li>White</li>
            <li>Blue</li>
            <li>Grey</li>
            <li>Bronze</li>
          </ul>  
          <ul><h4>Sort By:</h4>
            <li className="sort">Relevance</li>
            <li className="sort">Price: Low-High</li>
            <li className="sort">Price: High-Low</li>
          </ul>
        </div>
      </div>
    );
  }
}

export default App;

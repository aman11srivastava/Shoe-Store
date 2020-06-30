import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import ShoeList from './ShoeList' 

class Home extends Component {
    constructor(props) {
        super(props)
      
        this.state = {
           search: '',
           orderLow: [],
        }
    
        this.handleSearch = this.handleSearch.bind(this);
        this.sortByLow = this.sortByLow.bind(this);
        this.sortByHigh = this.sortByHigh.bind(this);
        this.sortByRelevance = this.sortByRelevance.bind(this);
      }

      sortByLow = (e) => {
        // this.setState({
        //     orderLow: list.sort((a,b) => a.discountedPrice < b.discountedPrice )
        // })
      }

      sortByHigh = (e) => {

      }

      sortByRelevance = (e) => {

      }
    
      handleSearch = (e) => {
        this.setState({
        })
      }
    
    render() {
        return (
            <div className="App">
                <div className="row">
                    <div className="col-6">
                    <div className="card" style={{width: '24%'}}>
                    <h4 style={{textDecoration: 'underline'}}>Filters</h4>
                    <h5>PRICE</h5>
                    <h5>BRAND</h5>
                    <input 
                        style= {{width: '65%', marginLeft:'50px'}}
                        type="text" 
                        className="form-control"
                        onChange={this.handleSearch} 
                        placeholder="Search Brand" 
                        value={this.state.search}
                    />
                    <ul><h5>COLOR</h5>
                        <li>
                        <input className="form-check-input" type="checkbox"/>
                        <label className="form-check-label">
                            Black
                        </label>
                        </li>
                        <li>
                        <input className="form-check-input" type="checkbox"/>
                        <label className="form-check-label">
                            White
                        </label>
                        </li>
                        <li>
                        <input className="form-check-input" type="checkbox"/>
                        <label className="form-check-label">
                            Grey
                        </label>
                        </li>
                        <li>
                        <input className="form-check-input" type="checkbox"/>
                        <label className="form-check-label">
                            Brown
                        </label>
                        </li>
                        <li>
                        <input className="form-check-input" type="checkbox"/>
                        <label className="form-check-label">
                            Blue
                        </label>
                        </li>
                        <li>
                        <input className="form-check-input" type="checkbox"/>
                        <label className="form-check-label">
                            Bronze
                        </label>
                        </li>
                    </ul>
                    </div>

                    <ul><h4>Sort By:</h4>
                        <li onClick={this.sortByRelevance} className="sort">Relevance</li>
                        <li onClick={this.sortByLow} className="sort">Price: Low-High</li>
                        <li onClick={this.sortByHigh} className="sort">Price: High-Low</li>
                    </ul>
                    <div className="col-6"> 
                    <ShoeList/>
                    </div>  
                    </div>
                </div>
                </div>
        )
    }
}

export default Home

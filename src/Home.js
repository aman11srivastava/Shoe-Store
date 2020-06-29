import React, { Component } from 'react'
import { Link } from 'react-router-dom';

class Home extends Component {
    constructor(props) {
        super(props)
      
        this.state = {
           search: ''
        }
    
        this.handleSearch = this.handleSearch.bind(this);
      }
    
      handleSearch = (e) => {
        this.setState({
        })
      }
    
    render() {
        return (
            <div>
                <div className="App">
                   <div className="row">
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
                    <div>  
                    <ul><h4>Sort By:</h4>
                        <li className="sort">Relevance</li>
                        <li className="sort">Price: Low-High</li>
                        <li className="sort">Price: High-Low</li>
                    </ul>
                    </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Home

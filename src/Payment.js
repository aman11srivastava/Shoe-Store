import React, { Component } from 'react'

class Payment extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             
        }

        this.handlePayment = this.handlePayment.bind(this);
    }

    handlePayment = (e) => {
        alert("Payment successful")
        // alert("You will be redirected to Home page")
    }
    
    render() {
        return (
            <div className="card">
                <form>
                    <h1>Payment page</h1>
                  <div className="form-row">
                    <div className="form-group col-md-6">
                    <label>First Name</label>
                    <input
                        type="text"
                        placeholder="Enter your First Name" 
                        className="form-control"
                    />
                    </div>
                    <div className="form-group col-md-6">
                    <label>Last Name </label>
                    <input 
                        type="text" 
                        className="form-control"
                        placeholder="Enter your Last Name"
                    />
                    </div>
                </div>
                <div className="form-group">
                    <label>Card Number</label>
                    <input 
                        type="text" 
                        className="form-control" 
                        placeholder="Enter your 16-digit card number"
                    />
                </div>
                <div className="form-row">
                    <div className="form-group col-md-4">
                    <label>Month</label>
                    <select className="form-control">
                        <option selected>Jan</option>
                        <option>Feb</option>
                        <option>Mar</option>
                        <option>April</option>
                        <option>May</option>
                        <option>June</option>
                        <option>Jul</option>
                        <option>Aug</option>
                        <option>Sept</option>
                        <option>Oct</option>
                        <option>Nov</option>
                        <option>Dec</option>
                    </select>
                    </div>  
                    <div className="form-group col-md-2">
                    <label>Year</label>
                    <input 
                        type="text" 
                        className="form-control" 
                        placeholder="Enter Expiration Year"/>
                    </div>
                    <div className="form-group col-md-2">
                    <label>CVV</label>
                    <input 
                        type="password" 
                        placeholder="Enter your 3-digit CVV" 
                        className="form-control"
                    />
                    </div>
                </div>
                <div className="form-group">
                </div>
                <button 
                    type="submit" 
                    onClick={this.handlePayment}
                    className="btn btn-success"
                    style= {{
                        alignSelf: 'centre',
                        width: '35%'
                    }}
                >
                    Complete Payment
                </button>
                </form>
            </div>
        )
    }
}

export default Payment

import React, { Component } from 'react'

class Payment extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            fname: '',
            lname: '',
            cno: '',
            month: '',
            year: '',
            cvv: ''

        }

        this.handlePayment = this.handlePayment.bind(this);
        this.fnameChange = this.fnameChange.bind(this);
        this.lnameChange = this.lnameChange.bind(this);
        this.cnoChange = this.cnoChange.bind(this);
        this.monthChange = this.monthChange.bind(this);
        this.yearChange = this.yearChange.bind(this);
        this.cvvChange = this.cvvChange.bind(this);
    }


    fnameChange = (e) => {
        this.setState({
            fname: e.target.value
        })
    }

    lnameChange = (e) => {
        this.setState({
            lname: e.target.value
        })
    }

    cnoChange = (e) => {
        this.setState({
            cno: e.target.value.substr(0,16)
        })
    }

    monthChange = (e) =>{
        this.setState({
            month: e.target.value.substr(0,3)
        })
    }

    yearChange = (e) => {
        this.setState({
            year: e.target.value.substr(0,4)
        })
    }

    cvvChange = (e) => {
        this.setState({
            cvv: e.target.value.substr(0,3)
        })
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
                        value={this.state.fname}
                        name="fname"
                        onChange={this.fnameChange}
                    />
                    </div>
                    <div className="form-group col-md-6">
                    <label>Last Name </label>
                    <input 
                        type="text" 
                        name="lname"
                        value={this.state.lname}
                        onChange={this.lnameChange}
                        className="form-control"
                        placeholder="Enter your Last Name"
                    />
                    </div>
                </div>
                <div className="form-group">
                    <label>Card Number</label>
                    <input 
                        value={this.state.cno}
                        onChange={this.cnoChange}
                        type="text"
                        name="cno" 
                        className="form-control" 
                        placeholder="Enter your 16-digit card number"
                    />
                </div>
                <div className="form-row">
                    <div className="form-group col-md-4">
                    <label>Month</label>
                        <input
                            type="text"
                            value={this.state.month}
                            name="month"
                            onChange={this.monthChange}
                            placeholder="Enter first 3 characters of Expiration Month"
                            className="form-control"
                        />
                    </div>  
                    <div className="form-group col-md-2">
                    <label>Year</label>
                    <input 
                        type="text" 
                        value={this.state.year}
                        onChange={this.yearChange}
                        className="form-control"
                        name="year" 
                        placeholder="Enter Expiration Year"/>
                    </div>
                    <div className="form-group col-md-2">
                    <label>CVV</label>
                    <input 
                        type="password"
                        name="cvv" 
                        value={this.state.cvv}
                        onChange={this.cvvChange}
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

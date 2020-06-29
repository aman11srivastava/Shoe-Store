import React from 'react'
import { Link } from 'react-router-dom'

const Shoe = ({r}) => {

    const {id, model, brand, img, price, color} = r

    return (
        <div>
            <div className="card">
                <img src={img} className="card-img-top"/>
                <Link to={{ pathname: "/Payment" }}>
                    <button 
                        style={{width: '24%'}}
                        className="btn btn-outline-success"
                    >   
                        Buy
                    </button>
                </Link>
                <h4>{model}</h4>
                <div className="card-body">
                <p className="card-text">{brand} {color}</p>
                <h6>{price}</h6>
                </div>
            </div>
        </div>
    )
}

export default Shoe

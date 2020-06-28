import React from 'react'

const Shoe = ({r}) => {

    const {id, model, brand, img, price, color} = r

    return (
        <div>
            <div className="card">
                <img src={img} className="card-img-top"/>
                <button className="btn btn-success">Buy</button>
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

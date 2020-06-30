import React from "react";
import { Link } from "react-router-dom";
import './Shoe.css'

const Shoe = ({ list }) => {
  const { model, brand, image, price, color, discountedPrice, rating } = list;
  return (
      <div className="card shop-card">
        <img src={image} className="card-img-top card-image" alt="something" />
        <Link to={{ pathname: "/Payment" }}>
          <button style={{ width: "24%", alignSelf:'left' }} className="btn btn-outline-success">
            Buy
          </button>
        </Link>
        <h4>{model}</h4>
        <div className="card-body">
          <p className="card-text">
            {brand} {color}
          </p>
          <h6 className="price">{discountedPrice}</h6>
          <p className="price" style={{ textDecoration: "line-through", color: " #96a99a" }}>
            {price}
          </p>
          <p style={{backgroundColor: '#00ff00', marginRight: '47%', marginLeft: '42%'}}>{rating}</p>
        </div>
      </div>
  );
};

export default Shoe;




// import React from 'react'
// import { Link } from 'react-router-dom'

// const Shoe = ({r}) => {

//     const { id, model, brand, img, price, color, discountedPrice } = r

//     return (
//         <div>
//             <div className="card">
//                 <img src={img} className="card-img-top"/>
//                 <Link to={{ pathname: "/Payment" }}>
//                     <button 
//                         style={{width: '24%'}}
//                         className="btn btn-outline-success"
//                     >   
//                         Buy
//                     </button>
//                 </Link>
//                 <h4>{model}</h4>
//                 <div className="card-body">
//                 <p className="card-text">{brand} {color}</p>
//                 <h6>{discountedPrice}</h6>
//                 <p style={{textDecoration:'line-through', color: '#E5E4E2'}}>{price}</p>
//                 </div>
//             </div>
//         </div>
//     )
// }

// export default Shoe

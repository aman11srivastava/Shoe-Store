import React, { Component } from "react";
import Shoe from "./Shoe";
class ShoeList extends Component {
  constructor() {
    super();
    this.state = {
      list: [
        {
          id: 1,
          model: "Shoe A",
          brand: "Nike",
          color: "Black",
          price: "Rs 2999",
          discountedPrice: "Rs 1999",
          image: "A.jpg",
          rating: '4.7'
        },
        {
          id: 2,
          model: "Shoe B",
          brand: "Puma",
          color: "Grey",
          image: "nike a.jpg",
          price: "Rs 1999",
          discountedPrice: "Rs 1499",
          rating: '4.4'
        },
        {
          id: 3,
          model: "Shoe C",
          brand: "Adidas",
          rating: '4.8',
          color: "Brown",
          image: "nike a.jpg",
          discountedPrice: "1999",
          price: "Rs 2499",
        },
        {
          id: 4,
          model: "Shoe D",
          brand: "Adidas",
          color: "Black",
          image: "nike a.jpg",
          price: "Rs 3999",
          discountedPrice: "Rs 2499",
          rating: '4.9'
        },
        {
          id: 5,
          model: "Shoe E",
          brand: "Nike",
          color: "White",
          image: "nike a.jpg",
          price: "Rs 1999",
          discountedPrice: "Rs 999",
          rating: '4.1'
        },
        {
          id: 6,
          model: "Shoe F",
          brand: "Nike",
          color: "White",
          image: "nike a.jpg",
          price: "Rs 1599",
          discountedPrice: "Rs 1099",
          rating: '4.3'
        },
        {
          id: 7,
          model: "Shoe G",
          brand: "Puma",
          color: "Blue",
          image: "nike a.jpg",
          price: "Rs 2999",
          discountedPrice: "Rs 1899",
          rating: '4.4'
        },
        {
          id: 8,
          model: "Shoe H",
          brand: "Adidas",
          color: "Blue",
          image: "nike a.jpg",
          price: "Rs 1999",
          discountedPrice: "Rs 1299",
          rating: '4.3'
        },
        {
          id: 9,
          model: "Shoe I",
          brand: "Adidas",
          color: "Brown",
          image: "nike a.jpg",
          price: "Rs 2599",
          discountedPrice: "Rs 1999",
          rating: '4.5'
        },
        {
          id: 10,
          model: "Shoe J",
          brand: "Puma",
          color: "White",
          image: "nike a.jpg",
          price: "Rs 1499",
          discountedPrice: "Rs 999",
          rating: '4.0'
        },
        {
          id: 11,
          model: "Shoe K",
          brand: "Nike",
          color: "Blue",
          image: "nike a.jpg",
          price: "Rs 3599",
          discountedPrice: "Rs 2499",
          rating: '4.9'
        },
        {
          id: 12,
          model: "Shoe L",
          brand: "Puma",
          color: "Grey",
          image: "A.jpg",
          price: "Rs 2999",
          discountedPrice: "Rs 1999",
          rating: '4.6'
        },
      ],
    };
  }
  render() {
    return (
      <div>
        {this.state.list.map((c, i) => {
          return <Shoe list={c} />;
        })}
      </div>
    );
  }
}

export default ShoeList;
import React, { Component } from 'react'

class ShoeList extends Component {
constructor(props) {
    super(props)

    this.state = {
        list : [
            {
                id: 1,
                model: 'Shoe A',
                brand: 'Nike',
                color: 'Black',
                img: 'nike a.jpg',
                price: 'Rs 2999'
            },
            {
                id: 2,
                model: 'Shoe B',
                brand: 'Puma',
                color: 'Grey',
                img: 'nike a.jpg',
                price: 'Rs 1999'
            },
            {
                id: 3,
                model: 'Shoe C',
                brand: 'Adidas',
                color: 'Brown',
                img: 'nike a.jpg',
                price: 'Rs 2499'
            },
            {
                id: 4,
                model: 'Shoe D',
                brand: 'Adidas',
                color: 'Black',
                img: 'nike a.jpg',
                price: 'Rs 3999'
            },
            {
                id: 5,
                model: 'Shoe E',
                brand: 'Nike',
                color: 'White',
                img: 'nike a.jpg',
                price: 'Rs 1999'
            },
            {
                id: 6,
                model: 'Shoe F',
                brand: 'Nike',
                color: 'White',
                img: 'nike a.jpg',
                price: 'Rs 1599'
            },
            {
                id: 7,
                model: 'Shoe G',
                brand: 'Puma',
                color: 'Blue',
                img: 'nike a.jpg',
                price: 'Rs 2999'
            },
            {
                id: 8,
                model: 'Shoe H',
                brand: 'Adidas',
                color: 'Blue',
                img: 'nike a.jpg',
                price: 'Rs 1999'
            },
            {
                id: 9,
                model: 'Shoe I',
                brand: 'Adidas',
                color: 'Brown',
                img: 'nike a.jpg',
                price: 'Rs 2599'
            },
            {
                id: 10,
                model: 'Shoe J',
                brand: 'Puma',
                color: 'White',
                img: 'nike a.jpg',
                price: 'Rs 1499'
            },
            {
                id: 11,
                model: 'Shoe K',
                brand: 'Nike',
                color: 'Blue',
                img: 'nike a.jpg',
                price: 'Rs 3599'
            },
            {
                id: 12,
                model: 'Shoe L',
                brand: 'Puma',
                color: 'Grey',
                img: 'nike a.jpg',
                price: 'Rs 2999'
            }
        ]        
    }
}

    render() {
        return (
            <div>
                
            </div>
        )
    }
}

export default ShoeList

import React from 'react';

var ProductPage = require("./product.css")
export default class Product extends React.Component {
    render() {
        console.log(this.props.product)
        return (
            <div className={ProductPage.product}>
                <p>{this.props.product.name}</p>
                <p>{this.props.product.price}</p>
                <p>{this.props.product.describe}</p>
            </div>
        )
    }
}
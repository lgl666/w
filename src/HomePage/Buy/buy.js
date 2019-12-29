import React from 'react';
import ProductPage from '../../Product/product';
import {Button} from 'antd'

var BuyCss = require('./buy.css')
export default class BuyPage extends React.Component {

	getProductList() {
		let dateList = [{
			id: 1,
			name: "电饭煲",
			price: "21",
			describe: "格力电饭煲"
		},
		]
		return dateList;
	}
	render() {
		let dateList = this.getProductList();
		return (
			dateList.map((item, i) => (
				<ProductPage product={item}></ProductPage>	
			))
		

		)
	}
}
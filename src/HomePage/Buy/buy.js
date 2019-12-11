import React from 'react';
import ProductPage from '../../Product/product';

export default class BuyPage extends React.Component {

	getProductList() {
		let dateList = [{
			id: 1,
			name: "电饭煲",
			price: "21",
			describe: "格力电饭煲"
		}, {
			id: 2,
			name: "电脑",
			price: "55",
			describe: "华硕"
		}, {
			id: 3,
			name: "智能机",
			price: "123",
			describe: "小度"
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
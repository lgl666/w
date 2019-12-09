import React from 'react';

var SalePageCss = require("./sale.css")
export default class SalePage extends React.Component{
	render(){
		return(
			<div className={SalePageCss.sale}>
				这里是出售页面 
			</div>
		)
	}
}
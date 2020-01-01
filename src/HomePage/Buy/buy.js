import React from 'react';
import ProductPage from '../../Product/product';
import {Button,Carousel} from 'antd'

var BuyCss = require('./buy.css')
export default class BuyPage extends React.Component {

	
	render() {
		return (
			<div className={BuyCss.buy}>
				<div className={BuyCss.slideshow}>
                    <Carousel autoplay>
                        <div className={BuyCss.slideshow1}>
                        </div>
                        <div className={BuyCss.slideshow2}>
                        </div>
                        <div className={BuyCss.slideshow3}>
                        </div>
                    </Carousel>
                </div>
			</div>
		)
	}
}
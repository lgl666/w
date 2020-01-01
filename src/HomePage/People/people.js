import React from 'react';
import {Button,Carousel} from 'antd'



var PeoplePageCss = require("./people.css")
export default class PeoplePage extends React.Component{
	render(){
		return(
			<div className={PeoplePageCss.people}>
				
				<div className={PeoplePageCss.slideshow}>
                    <Carousel autoplay>
                        <div className={PeoplePageCss.slideshow1}>
                        </div>
                        <div className={PeoplePageCss.slideshow2}>
                        </div>
                        <div className={PeoplePageCss.slideshow3}>
                        </div>
                        <div className={PeoplePageCss.slideshow4}>
                        </div>
						<div className={PeoplePageCss.slideshow5}>
                        </div>
                    </Carousel>
				</div>
			</div>
		)
	}
}
import React from 'react';
import {Link} from 'react-router-dom'

var HeaderCss = require('./header.css');

export default class Header extends React.Component{
	render(){
		return(
			<div className={HeaderCss.header}>
				<Link to="/homepage">二手网系统</Link>
                <Link to="/login">登陆</Link>
			</div>
		)
	}
}
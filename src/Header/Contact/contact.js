import React from 'react';
import {Link} from 'react-router-dom'

var ContactPageCss = require('./contact.css');

export default class ContactPage extends React.Component{
	render(){
		return(
			<div className={ContactPageCss.header}>
				<Link to="/homepage">二手网系统</Link>
				<Link to="/register">注册</Link>
                <Link to="/login">登陆</Link>
                <h1>登陆界面</h1>
                <p>用户名：</p>
                <p>密码：</p>
			</div>
		)
	}
}
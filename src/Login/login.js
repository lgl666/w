import React from 'react';

var LoginCss = require("./login.css")
export default class LoginPage extends React.Component{
	render(){
		return(
			<div className={LoginCss.login}>
				<h1>登陆界面</h1>
                <p>用户名：</p>
                <p>密码：</p>
			</div>
		)
	}
}
import React from 'react';

var LoginCss = require("./login.css")

export default class LoginPage extends React.Component{
	render(){
		return(
			<div className={LoginCss.login}>
				<div className={LoginCss.back}>
				
				<p className={LoginCss.title}>希望二手交易平台</p>

				<p className={LoginCss.username}>用户名：</p>
				<div className={LoginCss.userinput}>
				<input  className={LoginCss.input}></input>
				</div>

                <p className={LoginCss.password}>密码：</p>
				<div className={LoginCss.passinput}>
				<input className={LoginCss.input}></input>
				</div>
				<div className={LoginCss.buttonbox}>
				<button className={LoginCss.button} placeholder="登录" ></button>
				</div>
				</div>
                
			</div>
		)
	}
}
import React from 'react';
import {Link} from 'react-router-dom'
var LoginCss = require("./login.css")


export default class LoginPage extends React.Component{
	render(){
		return(
			<div className={LoginCss.login}>
				<div className={LoginCss.back}>
				<div className={LoginCss.titleplace}>
				<a href="/homepage" className={LoginCss.title}> 希望二手交易平台</a>
				</div>	
				<p className={LoginCss.username}>用户名：</p>
				<div className={LoginCss.userinput}>
				<input  className={LoginCss.input}></input>
				</div>

                <p className={LoginCss.password}>密码：</p>
				<div className={LoginCss.passinput}>
				<input className={LoginCss.input}></input>
				</div>
				<div className={LoginCss.buttonbox}>
				<button className={LoginCss.button}>登陆</button>
				</div>
				<div className={LoginCss.registerbox}>
					<Link to="/register"><button className={LoginCss.button}>注册</button></Link>
				</div>
				</div>
                
			</div>
		)
	}
}
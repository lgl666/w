import React from 'react';
import {Link} from 'react-router-dom'
import {Input,Button,message} from 'antd';
import Axios from 'axios';
var LoginCss = require("./login.css")

export default class LoginPage extends React.Component{
	constructor(props){
		super(props);
		this.state={}
	}
	changeValue=(e)=>{
		this.setState({
			[e.target.name]:e.target.value
		})
	}
	upload=()=>{
		var data ={
			"username":this.state.username,
			"password":this.state.password,
		}
		Axios.post
		  ({
			url:"",
			data:JSON.stringify(data)
			}).then(result=>{
				if(result.state==2){
					message.info("用户名或密码错误")
				}else if(result.state==1){
					message.info("登陆成功")
				}
			})

	}
	render(){
		return(
			<div className={LoginCss.login}>
				<div className={LoginCss.back}>
				<div className={LoginCss.titleplace}>
				<a href="/homepage" className={LoginCss.title}> 希望二手交易平台</a>
				</div>	
				<p className={LoginCss.username}>用户名：</p>
				<div className={LoginCss.userinput}>
				<Input  className={LoginCss.input} name="username" value={this.state.username} onChange={e=>this.changeValue(e)}/>
				</div>

                <p className={LoginCss.password}>密码：</p>
				<div className={LoginCss.passinput}>
				<Input className={LoginCss.input} name="password" value={this.state.password} onChange={e=>this.changeValue(e)}/>
				</div>
				<div className={LoginCss.buttonbox}>
					<Link to="/gerenpage">
				<button className={LoginCss.button}>登陆</button>
				</Link>
				</div>
				<div className={LoginCss.registerbox}>
					<Link to="/register"><button className={LoginCss.button}>注册</button></Link>
				</div>
				</div>  
			</div>
		)
	}
}
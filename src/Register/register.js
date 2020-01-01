import React,{Component } from 'react';
import {Input,Button,message} from 'antd';
import {Link} from 'react-router-dom';
import Axios from 'axios';
var RegisterCss = require('./register.css');
export default class RegisterPage extends React.Component{
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
			"tel":this.state.tel,
			"emli":this.state.emli,
			
		}
		Axios.post
		  ({
			url:"",
			data:JSON.stringify(data)
			}).then(result=>{
				if(result.state==2){
					message.info("用户名已存在")
				}else if(result.state==1){
					message.info("注册成功")
				}
			})

	}
	render(){
		return(

			<div className={RegisterCss.header}>
				<div className={RegisterCss.back}>
				<p className={RegisterCss.title}>用  户  注  册</p>
                <p className={RegisterCss.username}>用户名：</p>
				<div className={RegisterCss.usernamebox}>
					<Input  name="username" value={this.state.username} onChange={e=>this.changeValue(e)}/>
				</div>
                <p className={RegisterCss.password}>密码：</p>
				<div className={RegisterCss.passwordbox}>
				<Input name="password" value={this.state.password} onChange={e=>this.changeValue(e)}/>
				</div>
				<p className={RegisterCss.tel}>电话：</p>
				<div className={RegisterCss.telbox}>
				<Input  name="tel" value={this.state.tel} onChange={e=>this.changeValue(e)}/>
				</div>
				<p className={RegisterCss.emil}>邮箱：</p>
				<div className={RegisterCss.emilbox}>
				<Input name="emli" value={this.state.emli} onChange={e=>this.changeValue(e)}/>
				</div>

				<div className={RegisterCss.surebutton}>
					
					<Button className={RegisterCss.button} onClick={this.upload}>确定</Button>
					
				</div>

				<div className={RegisterCss.cancelbutton}>
					<Link  to="login">
					<Button className={RegisterCss.button}>取消</Button>
					</Link>
				</div>
				</div>
			</div>
		)
	}
}
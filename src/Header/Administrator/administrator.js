import React from 'react';
import {Link} from 'react-router-dom'

var AdministratorCss = require('./administrator.css')
export default class AdministratorPage extends React.Component {
    render() {
        return (
			<div className={AdministratorCss.login}>
				<div className={AdministratorCss.back}>
				<div className={AdministratorCss.titleplace}>
				<a href="/homepage" className={AdministratorCss.title}> 希望二手交易平台管理员登陆</a>
				</div>	
				<p className={AdministratorCss.username}>用户名：</p>
				<div className={AdministratorCss.userinput}>
				<input  className={AdministratorCss.input}></input>
				</div>

                <p className={AdministratorCss.password}>密码：</p>
				<div className={AdministratorCss.passinput}>
				<input className={AdministratorCss.input}></input>
				</div>
				<div className={AdministratorCss.buttonbox}>
				<button className={AdministratorCss.button}>登陆</button>
				</div>
				</div>
                
			</div>
		)
	}
}
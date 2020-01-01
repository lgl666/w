import React from 'react';
import { Link } from 'react-router-dom'
import { Modal, Button, Menu, Icon } from 'antd';
import Image from './Image/img'

const { SubMenu } = Menu;
var HeaderCss = require('./header.css');



function warning1() {
	Modal.warning({
		title: '公告',
		content: (
			<div>
			  <p>跳蚤官方公众号:********</p>
			  <p>买卖消息提醒、交易问题反馈</p>
			</div>
		  ),
	});
}

function success() {
	Modal.success({
		title: '更新',
		content: '最近跳蚤市场的相关更新',
	});
}

function warning() {
	Modal.warning({
		title: '联系方式',
		content: (
			<div>
			  <p>跳蚤官方公众号:********</p>
			  <p>跳蚤官方微信：*******</p>
			  <p>跳蚤官方QQ：********</p>
			</div>
		  ),
	});
}


export default class Header extends React.Component {
	render() {
		return (
			<div className={HeaderCss.header}>


				<div className={HeaderCss.menu}>
					<Menu
						onClick={this.handleClick}
						style={{ width: 210, height: 500 }}
						mode="inline"
						className={HeaderCss.menu1}
					>
						<SubMenu
							key="sub2"
							title={
								<span>
									<Icon type="appstore" />
									<span>客服电话</span>
								</span>
							}
						>
							<Menu.Item key="5">121313412</Menu.Item>
							<Menu.Item key="6">341234123</Menu.Item>
						</SubMenu>

						<SubMenu
							key="sub1"
							title={
								<span>
									<Icon type="mail" />
									<span>客户评价</span>
								</span>
							}
						>
							<Menu.Item key="1">好评</Menu.Item>
							<Menu.Item key="2">差评</Menu.Item>
						</SubMenu>

						<SubMenu
							key="sub4"
							title={
								<span>
									<Icon type="setting" />
									<span>基础设置</span>
								</span>
							}
						>
							<Menu.Item key="9">修改界面颜色</Menu.Item>
							<Menu.Item key="10">修改文字样式</Menu.Item>
							<Menu.Item key="11">调节亮度</Menu.Item>
						</SubMenu>
					</Menu>
				</div>
				<div className={HeaderCss.title1}>
					<Link to="/homepage" className={HeaderCss.title}>校园二手网</Link>

					<Image className={HeaderCss.img} />
				</div>

				<div className={HeaderCss.login1}>
					<div className={HeaderCss.home}><Link to="/homepage"><Button type="primary">首页</Button></Link></div>
					<div className={HeaderCss.user}> <Button type="primary" onClick={warning1}>公众号</Button></div>
					<div className={HeaderCss.massage}> <Button type="primary" onClick={success}>公告消息</Button></div>
					<div className={HeaderCss.contact}> <Button type="primary" onClick={warning}>联系我们</Button></div>
				</div>

				<Link to="/register" className={HeaderCss.register}>注册</Link>
				<Link to="/login" className={HeaderCss.login}>登陆</Link>
			</div>
		)
	}
}
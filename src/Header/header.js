import React from 'react';
import { Link } from 'react-router-dom'
import { Menu, Icon } from 'antd';
import { Carousel } from 'antd';

const { SubMenu } = Menu;
var HeaderCss = require('./header.css');

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
				<div className={HeaderCss.slideshow}>
					<Carousel autoplay>
						<div className={HeaderCss.slideshow1}>
							<h3><img src="img/1.jpg" alt="1" /></h3>
						</div>
						<div className={HeaderCss.slideshow2}>
							<h3><img src="img/2.jpg" alt="2" /></h3>
						</div>
						<div className={HeaderCss.slideshow3}>
							<h3><img src="img/3.jpg" alt="3" /></h3>
						</div>
						<div className={HeaderCss.slideshow4}>
							<h3><img src="img/4.jpg" alt="4" /></h3>
						</div>
					</Carousel>
				</div>
				<div className={HeaderCss.title1}>
					<Link to="/homepage" className={HeaderCss.title}>校园二手网</Link>
					<Link to="/homepage" className={HeaderCss.home}>首页</Link>
					<Link to="/register" className={HeaderCss.user}>用户注册</Link>
					<Link to="/massage" className={HeaderCss.massage}>公告消息</Link>
					<Link to="/contact" className={HeaderCss.contact}>联系我们</Link>


				</div>
				<div className={HeaderCss.login1}>
					<Link to="/register" className={HeaderCss.register}>注册</Link>
					<Link to="/login" className={HeaderCss.login}>登陆</Link>
				</div>
			</div>
		)
	}
}
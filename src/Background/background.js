import React from 'react';
import { Drawer, Layout, Menu, Breadcrumb, Icon ,Button} from 'antd';
import {Link} from 'react-router-dom'
const { SubMenu } = Menu;
const { Header, Content, Sider } = Layout

var BackgroundrCss = require("./background.css")


export default class Background extends React.Component {
	state = { visible: false };

	showDrawer = () => {
	  this.setState({
		visible: true,
	  });
	};
  
	onClose = () => {
	  this.setState({
		visible: false,
	  });
	};

	render() {
		return (
			<div className={BackgroundrCss.footer}>
				<Layout>
			<Header className="header">
			  <div className="logo" />
			  <Menu
				theme="dark"
				mode="horizontal"
				defaultSelectedKeys={['2']}
				style={{ lineHeight: '64px' }}
			  >
				<Menu.Item key="2">我的个人主页</Menu.Item>
				<Menu.Item key="3"><Link to="homepage">希望二手交易平台</Link></Menu.Item>
				
			  </Menu>
					
		
		
			</Header>

			
			<Button type="primary" onClick={this.showDrawer}>
          个人信息
        </Button>
        <Drawer
          title="用户名"
          placement="right"
          closable={false}
          onClose={this.onClose}
          visible={this.state.visible}
        >
          <p>出生日期：*******</p>
          <p>性别：男</p>
          <p>电话：********</p>
        </Drawer>
			
			<Layout>
			  <Sider width={200} style={{ background: '#fff' }}>
				<Menu
				  mode="inline"
				  defaultSelectedKeys={['1']}
				  defaultOpenKeys={['sub1']}
				  style={{ height: '100%', borderRight: 0 }}
				>
				  <SubMenu
					key="sub1"
					title={
					  <span>
						<Icon type="user" />
						已有用户
					  </span>
					}
				  >
					<Menu.Item key="1"><Button>警告</Button></Menu.Item>
					<Menu.Item key="2"><Button>删除用户</Button></Menu.Item>
					<Menu.Item key="3"><Button>冻结用户</Button></Menu.Item>
				   
				  </SubMenu>
				  <SubMenu
					key="sub2"
					title={
					  <span>
						<Icon type="laptop" />
						正在出售的商品
					  </span>
					}
				  >
					<Menu.Item key="5"><Button>修改商品种类</Button></Menu.Item>
					<Menu.Item key="6"><Button>删除商品</Button></Menu.Item>
					<Menu.Item key="7"><Button>评论</Button></Menu.Item>
					<Menu.Item key="8"><Button>增加新商品</Button></Menu.Item>
					<Menu.Item key="11"><Button>查询商品</Button></Menu.Item>
				  </SubMenu>
				  <SubMenu
					key="sub3"
					title={
					  <span>
						<Icon type="notification" />
						历史订单
					  </span>
					}
				  >
					<Menu.Item key="9"><Button>取消订单</Button></Menu.Item>
            <Menu.Item key="10"><Button>查看订单</Button></Menu.Item>
            <Menu.Item key="11"><Button>已售商品评论</Button></Menu.Item>
				  </SubMenu>
				  <SubMenu
					key="sub4"
					title={
					  <span>
						<Icon type="user" />
						公告
					  </span>
					}
				  >
					<Menu.Item key="12"><Button>发布公告</Button></Menu.Item>
					<Menu.Item key="13"><Button>删除公告</Button></Menu.Item>
					
				   
				  </SubMenu>
				</Menu>
			  </Sider>
			  <Layout style={{ padding: '0 24px 24px' }}>
				<Breadcrumb style={{ margin: '16px 0' }}>
				  <Breadcrumb.Item>Home</Breadcrumb.Item>
				  <Breadcrumb.Item>List</Breadcrumb.Item>
				  <Breadcrumb.Item>App</Breadcrumb.Item>
				</Breadcrumb>
				<Content
				  style={{
					background: '#fff',
					padding: 24,
					margin: 0,
					minHeight: 280,
				  }}
				>
				  大大大大大大大大大大大大大大大大大
				</Content>
				<Content
				  style={{
					background: '#fff',
					padding: 24,
					margin: 0,
					minHeight: 280,
				  }}
				>
				  撒大苏打大苏打实打实大苏打
				</Content>
				<Content
				  style={{
					background: '#fff',
					padding: 24,
					margin: 0,
					minHeight: 280,
				  }}
				>
				  犬瘟热犬瘟热犬瘟热犬瘟热犬瘟热请问
				</Content>
			  </Layout>
			</Layout>
		  </Layout>
				</div>
				)
			}
}
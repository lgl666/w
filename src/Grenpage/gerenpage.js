import React from "react";
import { Layout, Menu, Breadcrumb, Icon ,Avatar ,Button} from 'antd';
import {Link} from 'react-router-dom'
const { SubMenu } = Menu;
const { Header, Content, Sider } = Layout
var gerenpageCss = require("./gerenpage.css")
export default class GERENpage extends React.Component{
	// constructor(props) {
	// 	super(props);
	// 	this.state = {
	// 	  error: null,
	// 	  isLoaded: false,
	// 	  items: []
	// 	};
	//   }
	
	//   componentDidMount() {
	// 	fetch("")
	// 	  .then(res => res.json())
	// 	  .then(
	// 		(result) => {
	// 		  this.setState({
	// 			isLoaded: true,
	// 			items: result.items
	// 		  });
	// 		},
	// 		// 注意：需要在此处处理错误
	// 		// 而不是使用 catch() 去捕获错误
	// 		// 因为使用 catch 去捕获异常会掩盖掉组件本身可能产生的 bug
	// 		(error) => {
	// 		  this.setState({
	// 			isLoaded: true,
	// 			error
	// 		  });
	// 		}
	// 	  )
	//   }


	render(){
	// 	const { error, isLoaded, items } = this.state;
    // if (error) {
    //   return <div>Error: {error.message}</div>;
    // } else if (!isLoaded) {
    //   return <div>Loading...</div>;
    // } else {
    //   return (
    //     <ul>
    //       {items.map(item => (
    //         <li key={item.name}>
    //           {item.name} {item.price}
    //         </li>
    //       ))}
    //     </ul>
    //   );
    // }
  
		return(
			

			<Layout>
    <Header className="header">
      <div className="logo" />
      <Menu
        theme="dark"
        mode="horizontal"
        defaultSelectedKeys={['2']}
        style={{ lineHeight: '64px' }}
      >
        <Menu.Item key="1">
		
			用户名
    
		</Menu.Item>
        <Menu.Item key="2">我的个人主页</Menu.Item>
        <Menu.Item key="3"><Link to="homepage">希望二手交易平台</Link></Menu.Item>
		
      </Menu>
			


    </Header>
	
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
                购买的商品
              </span>
            }
          >
            <Menu.Item key="1"><Button>评论</Button></Menu.Item>
            <Menu.Item key="2"><Button>放弃购买</Button></Menu.Item>
            <Menu.Item key="3"><Button>订单信息</Button></Menu.Item>
           
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
            <Menu.Item key="5"><Button>修改商品信息</Button></Menu.Item>
            <Menu.Item key="6"><Button>删除商品</Button></Menu.Item>
            <Menu.Item key="7"><Button>评论</Button></Menu.Item>
            <Menu.Item key="8"><Button>增加新商品</Button></Menu.Item>
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
            <Menu.Item key="10"><Button>已售商品评论</Button></Menu.Item>
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
          Content
        </Content>
      </Layout>
    </Layout>
  </Layout>



		)		
}
}
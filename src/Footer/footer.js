import React from 'react';
import { BrowserRouter, Link } from 'react-router-dom'
import { Button, notification } from 'antd';

var FooterCss = require("./footer.css")

const openNotification = () => {
	notification.open({
		message: '抱歉',
		description:
			'暂时没有开放这个功能',
		onClick: () => {
			console.log('Notification Clicked!');
		},
	});
};    //设置弹窗

export default class Footer extends React.Component {
	render() {
		return (
			<div className={FooterCss.footer}>
				<div className={FooterCss.explain}>
					<div className={FooterCss.imag}>
					</div>
					<div className={FooterCss.explain01}>
						校园二手网--是一个帮助你赚钱的网站
					</div>
				</div>
				<div className={FooterCss.company}>
					<div className={FooterCss.company01}>成都转手科技有限责任公司
						联系我们 微信服务号：校园Copyright
						2019- xiaoyuan.com All Right Reserved
					</div>
				</div>
				<div className={FooterCss.download}>
						<div className={FooterCss.iPhone}>
							<Button type="denger" shape="round" icon="download" onClick={openNotification}>
								iPhone下载
  </Button>
						</div>
						<div className={FooterCss.Android}>
							<Button type="denger" shape="round" icon="download" onClick={openNotification}>
								Android下载
  </Button>
						</div>
				</div>
				</div>
				)
			}
}
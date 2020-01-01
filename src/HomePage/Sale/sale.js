import React from 'react';
import { Divider, Comment, Icon, Tooltip, Avatar } from 'antd';
import moment from 'moment';


var SalePageCss = require("./sale.css")
export default class SalePage extends React.Component {

	state = {
		likes: 0,
		dislikes: 0,
		action: null,
	};

	like = () => {
		this.setState({
			likes: 1,
			dislikes: 0,
			action: 'liked',
		});
	};

	dislike = () => {
		this.setState({
			likes: 0,
			dislikes: 1,
			action: 'disliked',
		});
	};


	render() {

		const { likes, dislikes, action } = this.state;

		const actions = [
			<span key="comment-basic-like">
				<Tooltip title="Like">
					<Icon
						type="like"
						theme={action === 'liked' ? 'filled' : 'outlined'}
						onClick={this.like}
					/>
				</Tooltip>
				<span style={{ paddingLeft: 8, cursor: 'auto' }}>{likes}</span>
			</span>,
			<span key=' key="comment-basic-dislike"'>
				<Tooltip title="Dislike">
					<Icon
						type="dislike"
						theme={action === 'disliked' ? 'filled' : 'outlined'}
						onClick={this.dislike}
					/>
				</Tooltip>
				<span style={{ paddingLeft: 8, cursor: 'auto' }}>{dislikes}</span>
			</span>,
			<span key="comment-basic-reply-to">Reply to</span>,
		];


		return (
			<div className={SalePageCss.sale}>


				<div className={SalePageCss.sale1}>
					<Comment
						actions={actions}
						author={<a>A</a>}
						avatar={
							<Avatar
								src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
								alt="A"
							/>
						}
						content={
							<p>
								RTHGCBT
         					</p>
						}
						datetime={
							<Tooltip title={moment().format('YYYY-MM-DD HH:mm:ss')}>
								<span>{moment().fromNow()}</span>
							</Tooltip>
						}
					/></div>
				<div className={SalePageCss.sale2}>
					<Comment
						actions={actions}
						author={<a>B</a>}
						avatar={
							<Avatar
								src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
								alt="B"
							/>
						}
						content={
							<p>
								qwsdasdsda
		</p>
						}
						datetime={
							<Tooltip title={moment().format('YYYY-MM-DD HH:mm:ss')}>
								<span>{moment().fromNow()}</span>
							</Tooltip>
						}
					/></div>
					<div className={SalePageCss.sale3}>
					<Comment
						actions={actions}
						author={<a>C</a>}
						avatar={
							<Avatar
								src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
								alt="C"
							/>
						}
						content={
							<p>
								UJMYJNH
		</p>
						}
						datetime={
							<Tooltip title={moment().format('YYYY-MM-DD HH:mm:ss')}>
								<span>{moment().fromNow()}</span>
							</Tooltip>
						}
					/></div>
					<div className={SalePageCss.sale4}>
					<Comment
						actions={actions}
						author={<a>D</a>}
						avatar={
							<Avatar
								src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
								alt="D"
							/>
						}
						content={
							<p>
								RQWERQ
		</p>
						}
						datetime={
							<Tooltip title={moment().format('YYYY-MM-DD HH:mm:ss')}>
								<span>{moment().fromNow()}</span>
							</Tooltip>
						}
					/></div>
			</div>
		)
	}
}
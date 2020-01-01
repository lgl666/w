import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import HomePage from './HomePage/homepage';
import { BrowserRouter, Route, Switch, Redirect, Link } from 'react-router-dom'
import LoginPage from './Login/login';
import RegisterPage from './Register/register';
import GERENpage from './Grenpage/gerenpage';
//Redirect   网址不存在  就跳转到你指定的界面
//exact   从左到右网址一模一样才跳转

class IndexPage extends React.Component {
    render() {
        return (
            <div>
                <div>这是一个广告，不参与路由管理</div>
                <BrowserRouter>
                    <Switch>
                    <Route path="/" exact component={HomePage}></Route>
                    <Route path="/register" exact component={RegisterPage}></Route>
                        <Route path="/homepage" exact component={HomePage}></Route>
                        <Route path="/login" exact component={LoginPage}></Route>
                        <Route path="/gerenpage" exact component={GERENpage}></Route>
                        <Redirect to="/"></Redirect>
                    </Switch>
                </BrowserRouter>
            </div>
        )
    }
}

ReactDOM.render(<IndexPage />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

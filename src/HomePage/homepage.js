import React from 'react';
import Header from '../Header/header';
import Footer from '../Footer/footer';
import { Button } from 'antd';
import { BrowserRouter, Route, Link } from 'react-router-dom'
import BuyPage from './Buy/buy';
import SalePage from './Sale/sale';


var HomePageCss = require('./homepage.css')
export default class HomePage extends React.Component {
    render() {
        return (
            <div>
                <Header />
                <div>
                    <Button shape="round" type="danger" icon="forward">前进按钮</Button>
                </div>
                <BrowserRouter basename="homepage">
                <br></br>
                <Link to="/buy" className={HomePageCss.buy}>我要买</Link>
                <br></br>
                <Link to="/sale" className={HomePageCss.sale}>我要卖</Link>
                <br></br>
                <a href="/login">登陆</a>
                <Route path="/buy"  component={BuyPage}></Route>
                <Route path="/sale"  component={SalePage}></Route>
                </BrowserRouter>
                <Footer />
            </div>
        )
    }
}
import React from 'react';
import Header from '../Header/header';
import Footer from '../Footer/footer';
import { BrowserRouter, Route, Link } from 'react-router-dom'
import BuyPage from './Buy/buy';
import SalePage from './Sale/sale';
import { Divider } from 'antd';
import PeoplePage from './People/people'


var HomePageCss = require('./homepage.css')
export default class HomePage extends React.Component {
    render() {
        return (
            <div>
                <Header />

                <Divider dashed />
                <div className={HomePageCss.bady}>
                    <BrowserRouter basename="homepage">
                        <Link to='/people' className={HomePageCss.people}>最近在使用校园跳蚤的人</Link>
                        <Divider dashed />

                        <Link to="/buy" className={HomePageCss.buy}>我要买</Link>

                        <Divider dashed />

                        <Link to="/sale" className={HomePageCss.sale}>我要卖</Link>

                        <Divider dashed />

                        <Route path="/buy" component={BuyPage}></Route>
                        <Route path="/sale" component={SalePage}></Route>
                        <Route path='/people' component={PeoplePage}></Route>
                    </BrowserRouter>
                </div>

                <Footer />
            </div>
        )
    }
}
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

                <div className={HomePageCss.bady}>
                    <BrowserRouter basename="homepage">

                        <Divider dashed />

                        <div className={HomePageCss.people}> 最近在使用校园跳蚤的人 </div>

                        <Divider dashed />

                        <PeoplePage />

                        <Divider dashed />
                        <div className={HomePageCss.user}> 用户给予的评价 </div>

                        <Divider dashed />

                        <SalePage />

                        <Divider dashed />

                        <div className={HomePageCss.buy}> 闲置的二手货物 </div>

                        <Divider dashed />

                        <BuyPage />

                        <Divider dashed />

                    </BrowserRouter>
                </div>

                <Footer />
            </div>
        )
    }
}
import React from 'react';
import Header from '../Header/header';
import Footer from '../Footer/footer';
import { BrowserRouter, Route, Link } from 'react-router-dom'
import BuyPage from './Buy/buy';
import SalePage from './Sale/sale';


var HomePageCss = require('./homepage.css')
export default class HomePage extends React.Component {
    render() {
        return (
            <div>
                <Header />
                <BrowserRouter basename="homepage">
                <br></br>
                <Link to="/buy" className={HomePageCss.buy}>我要买</Link>
                <br></br>
                <Link to="/sale" className={HomePageCss.sale}>我要卖</Link>
                <br></br>
                <Route path="/buy"  component={BuyPage}></Route>
                <Route path="/sale"  component={SalePage}></Route>
                </BrowserRouter>
                <Footer />
            </div>
        )
    }
}
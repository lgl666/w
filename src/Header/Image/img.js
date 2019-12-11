import React from 'react';
import { Carousel } from 'antd';

var ImagePageCss = require('./img.css')
export default class Image extends React.Component {
    render() {
        return (
            <div>

                <div className={ImagePageCss.slideshow}>
                    <Carousel autoplay>
                        <div className={ImagePageCss.slideshow1}>
                        </div>
                        <div className={ImagePageCss.slideshow2}>
                        </div>
                        <div className={ImagePageCss.slideshow3}>
                        </div>
                        <div className={ImagePageCss.slideshow4}>
                        </div>
                    </Carousel>
                </div>
            </div>
        )
    }
}
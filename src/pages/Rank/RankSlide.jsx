import React , {useState, useRef} from 'react';
import { Carousel, Col, Row } from 'antd';
import '../Home/Content.scss';
import Slider from "react-slick";
import './style.css';
import { PlayCircleOutlined } from '@ant-design/icons';

function RankSlide() {

    const settings_partner = {
        dots: false,
        infinite: false,
        slidesToShow: 5,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000
    };

    

    const arrData = [{imgsrc: '/images/vng.jpg',text: 'Top 1'},
                    {imgsrc: '/images/mtp.jpg',text: 'Top 2'},
                    {imgsrc: '/images/pnc.jpg',text: 'Top 3'},
                    {imgsrc: '/images/vcpmc.jpg',text: 'Top 4'},
                    {imgsrc: '/images/universal.jpg',text: 'Top 5'},
                    {imgsrc: '/images/thang_long.jpg',text: 'Top 6'},
                    {imgsrc: '/images/ht.jpg',text: 'Top 7'},];


    return (
        <div className="partner-slide">
            <h1>Việt Nam</h1>
            <div>
                <Slider {...settings_partner}>
                    {
                        arrData.map((item, index) => {
                            return (
                                <div key={index}>
                                    <a><img  src={item.imgsrc}></img></a>
                                    <p>{item.text}</p>
                                </div>
                            )
                        })
                    }

                </Slider>
            </div>
        </div>
    )
}


export default RankSlide;
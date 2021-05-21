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
        autoplay: false,
        autoplaySpeed: 0
    };

    

    const arrData = [{imgsrc: '/images/vng.jpg',top: 'Top 1', name: ''},
                    {imgsrc: '/images/mtp.jpg',top: 'Top 2', name: ''},
                    {imgsrc: '/images/pnc.jpg',top: 'Top 3', name: ''},
                    {imgsrc: '/images/vcpmc.jpg',top: 'Top 4', name: ''},
                    {imgsrc: '/images/universal.jpg',top: 'Top 5', name: ''},
                    {imgsrc: '/images/thang_long.jpg',top: 'Top 6', name: ''},
                    {imgsrc: '/images/ht.jpg',top: 'Top 7', name: ''},
                    ];


    return (
        <div className="partner-slide">
            <div className="K1">
                <h1 className="region">Việt Nam</h1>
                <div>
                    <Slider {...settings_partner}>
                        {
                            arrData.map((item, index) => {
                                return (
                                    <div key={index}>
                                        <p>{item.top}</p>
                                        <a><img  src={item.imgsrc}></img></a>
                                        <p>{item.name}</p>
                                    </div>
                                )
                            })
                        }

                    </Slider>
                </div>
            </div>
            <div className="K1">
                <h1 className="region">Châu Âu</h1>
                <div>
                    <Slider {...settings_partner}>
                        {
                            arrData.map((item, index) => {
                                return (
                                    <div key={index}>
                                        <p>{item.top}</p>
                                        <a><img  src={item.imgsrc}></img></a>
                                        <p>{item.name}</p>
                                    </div>
                                )
                            })
                        }

                    </Slider>
                </div>
            </div>
            <div className="K1">
                <h1 className="region">Hàn Quốc</h1>
                <div>
                    <Slider {...settings_partner}>
                        {
                            arrData.map((item, index) => {
                                return (
                                    <div key={index}>
                                        <p>{item.top}</p>
                                        <a><img  src={item.imgsrc}></img></a>
                                        <p>{item.name}</p>
                                    </div>
                                )
                            })
                        }

                    </Slider>
                </div>
            </div>
        </div>
    )
}


export default RankSlide;
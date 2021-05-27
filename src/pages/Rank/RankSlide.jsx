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

    

    const arrData1 = [{imgsrc: '/images/Vi/top1.jpg',top: 'Top 1', name: 'Trốn Tìm', author:'Đen,MTV'},
                    {imgsrc: '/images/Vi/top2.jpg',top: 'Top 2', name: 'The Playah', author:'Soobin,SlimV'},
                    {imgsrc: '/images/Vi/top3.jpg',top: 'Top 3', name: 'Bao Nhiêu', author:'Chillies'},
                    {imgsrc: '/images/Vi/top4.jpg',top: 'Top 4', name: 'LaylaLay', author:'Jack'},
                    {imgsrc: '/images/Vi/top5.jpg',top: 'Top 5', name: 'Trả Người Về Tự Do', author:'Tăng Phúc,Minh Tuyết'},
                    {imgsrc: '/images/Vi/top6.jpg',top: 'Top 6', name: 'Muộn rồi mà sao còn', author:'Sơn Tùng M-TP'},
                    {imgsrc: '/images/Vi/top7.jpg',top: 'Top 7', name: 'Hiện Đại', author:'Khắc Việt'},
                    ];
    const arrData2 = [{imgsrc:'/images/Eu/top1.jpg',top: 'Top 1', name: 'Sour Candy', author:'BLACKPINK, Lady Gaga'},
                    {imgsrc: '/images/Eu/top2.jpg',top: 'Top 2', name: 'Funny', author:'Zedd'},
                    {imgsrc: '/images/Eu/top3.jpg',top: 'Top 3', name: 'WAP', author:'Cardi B,Megan thee stallion'},
                    {imgsrc: '/images/Eu/top4.jpg',top: 'Top 4', name: 'cardigan', author:'Taylor Swift'},
                    {imgsrc: '/images/Eu/top5.jpg',top: 'Top 5', name: 'Black Parade', author:'Beyonce'},
                    {imgsrc: '/images/Eu/top6.jpg',top: 'Top 6', name: 'Stuck with U', author:'Ariana Grande,Justin Bieber'},
                    {imgsrc: '/images/Eu/top7.jpg',top: 'Top 7', name: 'Binding Lights', author:'The weekend'},
                    ];
    const arrData3 = [{imgsrc: '/images/Kr/top1.jpg',top: 'Top 1', name: 'On The Ground', author:'Rose(BlackPink)'},
                    {imgsrc: '/images/Kr/top2.jpg',top: 'Top 2', name: 'Life goes on', author:'BTS'},
                    {imgsrc: '/images/Kr/top3.jpg',top: 'Top 3', name: 'Dynamite', author:'BTS'},
                    {imgsrc: '/images/Kr/top4.jpg',top: 'Top 4', name: 'Lovesick Girls', author:'BLACKPINK'},
                    {imgsrc: '/images/Kr/top5.jpg',top: 'Top 5', name: 'Ice Cream', author:'Selena Gomez,BLACKPINK'},
                    {imgsrc: '/images/Kr/top6.jpg',top: 'Top 6', name: 'pporappippam', author:'Sunmi'},
                    {imgsrc: '/images/Kr/top7.jpg',top: 'Top 7', name: 'Summer Hate', author:'Zico,Bi Rain'},
                    ];


    return (
        <div className="partner-slide">
            <div className="K1">
                <h1 className="region">Việt Nam<PlayCircleOutlined className="iconcircle"></PlayCircleOutlined></h1>
                <div>
                    <Slider {...settings_partner}>
                        {
                            arrData1.map((item, index) => {
                                return (
                                    <div key={index} className="in">
                                        <p className="top">{item.top}</p>
                                        <a><img  src={item.imgsrc} className="imgthumb"></img></a>
                                        <p className="txtname">{item.name}</p>
                                        <p className="txtauthor">{item.author}</p>
                                    </div>
                                )
                            })
                        }

                    </Slider>
                </div>
            </div>
            <div className="K1">
                <h1 className="region">Châu Âu<PlayCircleOutlined className="iconcircle"></PlayCircleOutlined></h1>
                <div>
                    <Slider {...settings_partner}>
                        {
                            arrData2.map((item, index) => {
                                return (
                                    <div key={index} className="in">
                                        <p className="top">{item.top}</p>
                                        <a><img  src={item.imgsrc} className="imgthumb"></img></a>
                                        <p className="txtname">{item.name}</p>
                                        <p className="txtauthor">{item.author}</p>
                                    </div>
                                )
                            })
                        }

                    </Slider>
                </div>
            </div>
            <div className="K1">
                <h1 className="region">Hàn Quốc<PlayCircleOutlined className="iconcircle"></PlayCircleOutlined></h1>
                <div>
                    <Slider {...settings_partner}>
                        {
                            arrData3.map((item, index) => {
                                return (
                                    <div key={index} className="in">
                                        <p className="top">{item.top}</p>
                                        <a><img  src={item.imgsrc} className="imgthumb"></img></a>
                                        <p className="txtname">{item.name}</p>
                                        <p className="txtauthor">{item.author}</p>
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
import React from 'react';
import { Col, Row } from 'antd';
import './Content.scss';
import Slider from "react-slick";

export default function TopContent(props) {

    const settings_top_content = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        adaptiveHeight: true,
        centerMode: true
    };

    const arrData = ["images/2909.jpg", "images/3981.jpg", "images/3972.jpg", "images/3984.jpg", "images/3981.jpg", "images/3984.jpg"]

    return (
        <div class='top-content-slide'>
            <Row gutter={24}>
                <Col xs={20} sm={20} md={20} lg={20} xl={20}>
                    <Slider {...settings_top_content}>
                        {
                            arrData.map((item, index) => {
                                return (
                                    <div>
                                        <a href='#'><img alt='#' key={index} src={item}></img></a>
                                    </div>
                                );
                            })
                        }
                    </Slider>
                </Col>
                <Col xs={4} sm={4} md={4} lg={4} xl={4}>

                </Col>
            </Row>
        </div>
    );
}


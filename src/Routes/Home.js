import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

import Product from '../component/Product';
import { useState } from 'react';
import logi from '../logi';

import Slider from 'react-slick';
import 'slick-carousel/slick/slick.scss';
import 'slick-carousel/slick/slick-theme.scss';

function Home(props) {

    let [logi1] = useState(logi);
    console.log(logi1[0].imgUrl)
    // 메인 슬라이드 셋팅 값
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        fade: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        // autoplay: true,
        autoplaySpeed: 2000,
        centerPadding: '0px',
        arrow: false,

    };

    const settings1 = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        // autoplay: true,
        autoplaySpeed: 2000,
        centerPadding: '0px',
        arrow: false,
        variableWidth: true
    };

    return (

        // 메인 슬라이드 이미지
        <div className='head_img'>

            <Slider {...settings}>

                <div>
                    <img src={props.head[0].imgUrl} alt="item1" width="80%" height="650px" style={{ margin: "0 auto" }} />
                </div>

                <div>
                    <img src={props.head[1].imgUrl} alt="item2" width="80%" height="650px" style={{ margin: "0 auto" }} />
                </div>

                <div>
                    <img src={props.head[2].imgUrl} alt="item3" width="80%" height="650px" style={{ margin: "0 auto" }} />
                </div>

                <div>
                    <img src={props.head[3].imgUrl} alt="item4" width="80%" height="650px" style={{ margin: "0 auto" }} />
                </div>

            </Slider>


            {/* 나만의 공간 만들기 */}
            <Container className='con1'>
                <Row>
                    {
                        props.dlist.map((v, i) => {
                            return (
                                <Product dlist={props.dlist[i]} i={i} res={props.res} setRes={props.setRes} />
                            )
                        })
                    }
                </Row>
            </Container>



            {/* 전자 기기들 */}
            <Slider {...settings1}>

                {/* 슬라이드 첫 번째 */}

                <Container className="con2">
                    <Row>
                        <Col md={8}>

                            <Row>

                                <img src={logi1[0].imgUrl} alt="item0" />

                            </Row>

                            <Row>
                                <Col md={6}>
                                    <img src={logi1[1].imgUrl} alt="item1" />

                                </Col>

                                <Col md={6}>
                                    <img src={logi1[2].imgUrl} alt="item2" />
                                </Col>
                            </Row>

                        </Col>


                        <Col md={4}>
                            <img src={logi1[3].imgUrl} alt="item3" />
                        </Col>

                    </Row>

                </Container>


                {/* 슬라이드 두 번째 */}

                <Container className="con2">
                    <Row>

                        <Col md={4}>
                            <img src={logi1[4].imgUrl} alt="item4" />

                        </Col>

                        <Col md={4}>

                            <img src={logi1[5].imgUrl} alt="item5" />
                        </Col>

                        <Col md={4}>
                            <Row className='row1'>
                                <img src={logi1[6].imgUrl} alt="item6" />
                            </Row>

                            <Row className='row2'>
                                <img src={logi1[7].imgUrl} alt="item7" />
                            </Row>
                        </Col>

                    </Row>

                </Container>

                {/* 슬라이드 세 번째 */}
                <Container className="con2">
                    <Row>

                        <Col md={4}>
                            <Row className='row1_1'>
                                <img src={logi1[8].imgUrl} alt="item8" />
                            </Row>

                            <Row className='row2'>
                                <img src={logi1[9].imgUrl} alt="item9" />
                            </Row>
                        </Col>

                        <Col md = {8}>
                            <Row className='row4'>
                                <img src={logi1[10].imgUrl} alt="item10" />
                            </Row>

                            <Row className='row3'>
                                <Col>
                                    <img src={logi1[11].imgUrl} alt="item11" />
                                </Col>

                                <Col>
                                    <img src={logi1[12].imgUrl} alt="item12" />
                                </Col>
                            </Row>

                        </Col>

                    </Row>
                </Container>

            </Slider>

        </div>
    );
}


export default Home;
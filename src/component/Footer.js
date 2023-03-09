// 폰트어썸
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faSquareTwitter, faSquareInstagram } from "@fortawesome/free-brands-svg-icons";

import { faCirclePlay } from '@fortawesome/free-regular-svg-icons'

import { faEarthAmerica } from "@fortawesome/free-solid-svg-icons";
// export default () => <FontAwesomeIcon icon={faCamera} />;

function Footer() {

    return (
        <>

            <div className="Footer">

                <div className="Foot_1">

                    <ul className="foot1">
                        <li className="first">정보</li>
                        <li>로지텍 스토리</li>
                        <li>채용</li>
                        <li>투자자</li>
                        <li>블로그</li>
                        <li>프레스</li>
                        <li>연락처</li>
                    </ul>

                    <ul className="foot1">
                        <li className="first">가치</li>
                        <li>사회 공현</li>
                        <li>지속 가능성</li>
                        <li>재활용</li>
                    </ul>

                    <ul className="foot1">
                        <li className="first">고객</li>
                        <li>이메일 설정</li>
                    </ul>

                </div>

                <div className="Foot_2">

                    <ul className="Img">
                        <li><FontAwesomeIcon icon={faFacebook} className='ficon' /></li>
                        <li><FontAwesomeIcon icon={faSquareTwitter} className='ficon' /></li>
                        <li><FontAwesomeIcon icon={faSquareInstagram} className='ficon' /></li>
                    </ul>


                    <div className="textbox">

                        <div className="put_1">

                            <input type="text" placeholder="이메일을 입력하세요." />

                            <button className="btn">
                                <FontAwesomeIcon icon={faCirclePlay} />
                            </button>

                        </div>

                        <div className="put_2">

                            <input type="checkbox" />
                            <span>예, 뉴스와 제품 관련 이메일을 받고 싶습니다. 로지텍 <b>개인정보 보호정책</b>을 확인하세요.</span>

                        </div>

                    </div>


                </div>


                <div className="List">
                    <div className="list">

                        <div><b>©2023 로지텍. All rights reserved</b></div>
                        <ul>
                            <li><a href="#">이용약관</a></li>
                            <li><a href="#">웹 개인정보 보호정책</a></li>
                            <li><a href="#">제품 개인정보 보호정책</a></li>
                            <li><a href="#">쿠키 설정</a></li>
                            <li><a href="#">사이트맵</a></li>
                        </ul>

                    </div>

                    <div className="kr">
                        <FontAwesomeIcon icon={faEarthAmerica} />

                        <span>대한민국</span>
                    </div>
                </div>

            </div>


        </>
    )
}

export default Footer;
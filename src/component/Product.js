import { useNavigate } from "react-router-dom";
import { Nav, Col } from 'react-bootstrap';

function Product(props) {
    // 콘솔 찍을 땐 여기다가 ㄱㄱ
    let navigate = useNavigate();

    return (

        <Col md={4}>

            <img src={props.dlist.imgUrl} width="80%" alt='item' />

            <div className="productinfo">
                <h4>{props.dlist.title}</h4>

                <p>{props.dlist.content}</p>

                <p>{props.dlist.info}</p>
            </div>

        </Col>

    )
}

export default Product;
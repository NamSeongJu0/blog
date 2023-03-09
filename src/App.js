import './App.scss';
import {useState} from "react";
import data from './data';
import data1 from './data1';
import Home from './Routes/Home';


// 풋터
import Footer from './component/Footer';

import { Button, Container, Form, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import {Routes, Route, useNavigate} from 'react-router-dom';






function App() {
  // let [logo, setLogo] = useState('');
  let navigate = useNavigate();
  let [head, setHead] = useState(data);
  let [dlist, setDlist] = useState(data1);
  let [res, setRes] = useState([0, 1, 2]);
  

  return (
    
    <>

      <Navbar bg="light" expand="lg" className='bar'>
        <Container fluid>
          <Navbar.Brand href="#home"><img src="img/logi_logo.webp" alt="#" className='logo' onClick={() => {
            navigate('/')
          }}/>....</Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: '100px' }}
              navbarScroll
            >
              <Nav.Link href="#action1">제품</Nav.Link>
              <Nav.Link href="#action2">스토리</Nav.Link>
              <NavDropdown title="비즈니스" id="navbarScrollingDropdown">
                <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action4">
                  Another action
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action5">
                  Something else here
                </NavDropdown.Item>
              </NavDropdown>
              <Nav.Link href="#" disabled>
                지원
              </Nav.Link>
            </Nav>
            <Form className="d-flex">
              <Form.Control
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
              />
              <Button variant="outline-success">Search</Button>
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>


    <Routes>
      <Route path = '/' element = {<Home head = {head} setHead = {setHead} res = {res} setRes = {setRes} dlist = {dlist} setDlist = {setDlist}/>}></Route>
    </Routes>

      
    <Footer/>

    
    </>


  );
}

export default App;

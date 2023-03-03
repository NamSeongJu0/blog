import './App.scss';
// import {useState} from "react";

import { Button, Container, Form, Nav, Navbar, NavDropdown } from 'react-bootstrap'
// import { Routes, Route, Link } from 'react-router-dom'

// 폰트어썸
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faApple } from "@fortawesome/free-brands-svg-icons";
// export default () => <FontAwesomeIcon icon={faCamera} />;




function App() {
  // let [apple, setApple] = useState(data);


  return (


    <>

      <Navbar bg="light" expand="lg" className='bar'>
        <Container fluid>
          <Navbar.Brand href="#"><FontAwesomeIcon icon={ faApple } className = "Apple" /></Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: '100px' }}
              navbarScroll
            >
              <Nav.Link href="#action1">Home</Nav.Link>
              <Nav.Link href="#action2">Link</Nav.Link>
              <NavDropdown title="Link" id="navbarScrollingDropdown">
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
                Link
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

      

    </>


  );
}

export default App;

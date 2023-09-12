import logo from "./logo.svg";
import "./App.css";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import bg from "./img/domino-164_6wVEHfI-unsplash.jpg";
import { useState } from "react";
import 작명 from "./data";

function App() {
  let [shoes] = useState();
  return (
    <div className="App">
      {작명}
      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home">ShoeShop</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Cart</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      <div
        className="main-bg"
        style={{ backgroundImage: "url(" + bg + ")" }}
      ></div>
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <img
              src="
https://codingapple1.github.io/shop/shoes1.jpg"
              width="80%"
            ></img>
            <h4>상품명</h4>
            <p>상품설명</p>
          </div>
          <div className="col-md-4">
            {" "}
            <img
              src="
https://codingapple1.github.io/shop/shoes2.jpg"
              width="80%"
            ></img>
            <h4>상품명</h4>
            <p>상품설명</p>
          </div>
          <div className="col-md-4">
            {" "}
            <img
              src="
https://codingapple1.github.io/shop/shoes3.jpg"
              width="80%"
            ></img>
            <h4>상품명</h4>
            <p>상품설명</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;

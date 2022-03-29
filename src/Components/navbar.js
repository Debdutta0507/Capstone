import React, { useState } from "react";
import { Navbar, Container, Nav, NavDropdown } from "react-bootstrap";
import { Link } from "react-router-dom";
import '../../node_modules/font-awesome/css/font-awesome.min.css';
import './style.css';
import { useHistory } from "react-router-dom";
export default function Navbar1() {
  const [expanded, setExp] = useState(false);//For navbar hide after link click
  const history = useHistory();


  let user = JSON.parse(localStorage.getItem("user"));

  let login = JSON.parse(localStorage.getItem("login"));

  function logout() {

    localStorage.clear();

    history.push("/signup");

  }
  return (<div  >
    {localStorage.getItem("user") || localStorage.getItem("login") ? (

      <Navbar collapseOnSelect expand="md" bg="primary" variant="dark" fixed="top" className="unique" expanded={expanded}>
        <Container>
          <Navbar.Brand>Products Inventory App</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" onClick={() => setExp(expanded ? false : 'expanded')} />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
            </Nav>
            <Nav>

              <Nav.Link as={Link} to="/" onClick={() => setExp(false)}><i className="fa fa-home" style={{ fontSize: '20px' }}></i> Home</Nav.Link>
              <Nav.Link as={Link} to="/about" onClick={() => setExp(false)}><i className="fa fa-id-badge" style={{ fontSize: '20px' }}></i> About-Us</Nav.Link>


              <Nav.Link as={Link} to="/prodLog" onClick={() => setExp(false)}><i className="fa fa-user-circle" style={{ fontSize: '20px' }}></i> ProdLog</Nav.Link>
              <NavDropdown title="Dropdown"

              >

                <NavDropdown.Item style={{ backgroundColor: "purple" }}><Nav.Link as={Link} to="/profile" onClick={() => setExp(false)}><i className="fa fa-sign-in" style={{ fontSize: '20px' }}></i> Profile</Nav.Link></NavDropdown.Item>
                <NavDropdown.Item style={{ backgroundColor: "purple" }} ><Nav.Link as={Link} to="/cust" onClick={() => setExp(false)}><i className="fa fa-pie-chart" style={{ fontSize: '20px', background: "aqua" }}></i>Chartis</Nav.Link></NavDropdown.Item>

              </NavDropdown>



            </Nav>
            <Nav>

              <NavDropdown

                style={{ fontSize: "20px", textTransform: "uppercase" }}

                title={(login && login.fullname) || (user && user.fullname)}

              >

                <NavDropdown.Item onClick={logout}>Logout</NavDropdown.Item>

              </NavDropdown>

            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    ) : (

      <Navbar collapseOnSelect expand="md" bg="primary" variant="dark" fixed="top" className="unique" expanded={expanded}>
        <Container>
          <Navbar.Brand>Products Inventory App</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" onClick={() => setExp(expanded ? false : 'expanded')} />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
            </Nav>
            <Nav>

              <Nav.Link as={Link} to="/" onClick={() => setExp(false)}><i className="fa fa-home" style={{ fontSize: '20px' }}></i> Home</Nav.Link>
              <Nav.Link as={Link} to="/about" onClick={() => setExp(false)}><i className="fa fa-id-badge" style={{ fontSize: '20px' }}></i> About-Us</Nav.Link>
              <Nav.Link as={Link} to="/signup" onClick={() => setExp(false)}><i className="fa fa-user-plus" style={{ fontSize: '20px' }}></i> Sign-Up</Nav.Link>


            </Nav>
            <Nav>
              <NavDropdown title="Dropdown"

              >

                <NavDropdown.Item style={{ backgroundColor: "purple" }}><Nav.Link as={Link} to="/prodLog" onClick={() => setExp(false)}><i className="fa fa-user-circle" style={{ fontSize: '20px' }}></i> ProdLog</Nav.Link></NavDropdown.Item>
                <NavDropdown.Item style={{ backgroundColor: "purple" }} ><Nav.Link as={Link} to="/cust" onClick={() => setExp(false)}><i className="fa fa-pie-chart" style={{ fontSize: '20px' }}></i>Charts</Nav.Link></NavDropdown.Item>

              </NavDropdown>
            </Nav>

          </Navbar.Collapse>

        </Container>
      </Navbar>
    )
    }

    <br /><br />
  </div >
  )
}
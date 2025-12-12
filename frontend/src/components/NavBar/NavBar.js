// import React from 'react';
import './NavBar.css'; // Assuming you'll create a CSS file for styling

import Logo from "./SirRocPromotions_logo_trans.png"
import HamMenu from "./ham_menu.png"

import {Row, Col, Card, Button } from 'react-bootstrap';


const Navbar = () => {

  return (
    <div className="container-fluid" style={{backgroundColor:"black", height:"100%"}}>

          {/* Nav Bar */}
          <Row className="" style={{ backgroundColor:"", top:"", left:"", width:"100vw", height:"100px"}}>
            {/* Logo + Title */}
            <Col xs={2} sm={2} md={2} lg={2} style={{backgroundColor:"", width:"", height:"100%", display: "flex", justifyContent: "center"}}>
              <Row style={{alignItems: "center"}}>
                <img src={HamMenu} style={{height:"80%"}} />
              </Row>
            </Col>

            <Col xs={1} sm={1} md={1} lg={1} >
            
            </Col>

            <Col xs={2} sm={2} md={2} lg={2} style={{backgroundColor:"", width:"", height:"100%", display: "flex", justifyContent: "center"}}>
              <Row style={{alignItems: "center"}}>
                <img src={Logo} style={{height:"100%"}} />
              </Row>
            </Col>


            <Col xs={6} sm={6} md={6} lg={6} style={{display:"flex"}} >
              <Row style={{backgroundColor:"", color:"white", display: "flex", alignItems: "center", textAlign:"center", fontSize:"150%"}}>
                  SirRoc Promotions
              </Row>
            </Col>

            
          </Row>
    </div>
  );
};    
  //   {/* <nav className="navbar" role="navigation">
  //     <ul className="nav-links">
  //       <li>
  //         <a href="/">Home</a>
  //       </li>
  //       <li>
  //         <a href="/events">Events</a>
  //       </li>
  //       <li>
  //         <a href="/fighters">Fighters</a>
  //       </li>
  //       <li>
  //         <a href="https://form.jotform.com/251378223496059" style={{color:"gold"}}>Register</a>
  //       </li>
  //     </ul>
  //   </nav>
  //  */}

export default Navbar;

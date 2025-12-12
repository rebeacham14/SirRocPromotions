import React from 'react';

import 'bootstrap/dist/css/bootstrap.min.css'; // bootstrap capability

import { useNavigate } from 'react-router-dom';

import {useEffect, useState, useRef} from 'react';

import { useLayoutEffect } from "react";
import { useLocation } from "react-router-dom"; // If using React Router
import {Row, Col, Card, Button} from 'react-bootstrap';

const OurCrew = () => {


const location = useLocation(); // Get current location from React Router

  useLayoutEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "instant" }); 
  }, [location.pathname]); // Re-run effect when the path changes


  const [isMobile, setIsMobile] = useState(false);

  // allow page navigation

  const navigate = useNavigate();

  const goToBuyTicket = () => {

    navigate('/buyaticket'); // Navigate to the '/about' path

  };

  // device size detection || const isMobile = window.innerWidth <= 768;

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    handleResize();
  }, 
  []
  );

  const DesktopNav = () => {

    return(

      <div style={{background:""}}>

      </div>

    );

  };

  const MobileNav = () => {

  };

  return (

    <div className="container-fluid" style={{backgroundColor:"black", height:"800vh"}}>

      <Row>
        Our Crew
      </Row>

    </div>    

  );

};

export default OurCrew;

import React from 'react';

import 'bootstrap/dist/css/bootstrap.min.css'; // bootstrap capability

import './Home.css'; 

import Video from "./vid1.mp4"
import Event1_Banner from "./MID_banner.jpeg"
import TermsPopUp from '../../components/HomeComponents/TermsPopUp/TermsPopUp.js';


import { useNavigate } from 'react-router-dom';

import {useEffect, useState, useRef} from 'react';
import {Row, Col, Card, Button} from 'react-bootstrap';





const Home = () => {

// Terms and agreements pop up 
  const [showTermsPopUp, setShowTermsPopUp] = useState(false);

  useEffect(() => {
    // Check localStorage if the user has already agreed
    const hasAgreed = localStorage.getItem('termsAgreed');
    // localStorage.removeItem('termsAgreed') // clear termsAgreed tracked   
    if (!hasAgreed) {
      setShowTermsPopUp(true); // Show modal if not agreed
    }
  }, []);

  const handleAcceptTerms = () => {
    localStorage.setItem('termsAgreed', 'true'); // Set flag in localStorage
    setShowTermsPopUp(false); // Hide modal
  };


  
  // allow page navigation
  const navigate = useNavigate();
  
  const goToBuyTicket = () => {
    navigate('/buyaticket'); // Navigate to the '/about' path
  };

  const goToMoreEvents = () => {
    navigate('/events'); // Navigate to the '/about' path
  };

    const goToFighters = () => {
    navigate('/fighters'); // Navigate to the '/about' path
  };

    const goToOurCrew = () => {
    navigate('/our-crew'); // Navigate to the '/about' path
  };


  
  // device size detection || const isMobile = window.innerWidth <= 768;
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    handleResize();
  }, 
  []
  );


  // Scroll to element (on "learn more" click)
  const targetRef = useRef(null);
  const scrollToElement = () => {
    targetRef.current.scrollIntoView({ behavior: 'smooth' }); // Smooth scrolling
  };


  // Sponsor Wheel -- not finished
  const sponsors = [
    // { id: 1, logo: {Logo}, name: 'Sponsor A', link: 'https://sponsorA.com' },
    // { id: 2, logo: {Logo}, name: 'Sponsor B', link: 'https://sponsorB.com' },
    // { id: 3, logo: {Logo}, name: 'Sponsor C', link: 'https://sponsorC.com' },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const currentSponsor = sponsors[currentIndex];





  const DesktopNav = () => {

    return(

      <div style={{background:""}}>
        

        {/* Quick Nav */}
        <Row style={{backgroundColor:"", height:"20vh", width:"100vw", marginBottom:"50px"}}>

          {/* Nav Buttons */}
          <Col xs={12} sm={12} md={12} lg={12}  style={{backgroundColor:"", display:"flex", justifyContent:"center", alignItems:"center", margin:"0px 0 0 0"}}>
            
            <Row style={{fontSize:"1em"}}>
              <Col>
                <Button variant="outline-warning" onClick={goToBuyTicket} style={{height:""}}>
                  Buy Tickets
                </Button>
              </Col>

              <Col style={{ margin:"0 0 20px 0", display:"flex", justifyContent:"center", alignItems:"center", width:""}}>
                <Button id="mainButton" variant="outline-warning" onClick={() => window.open("https://form.jotform.com/251378223496059", '_blank')}>
                  Register
                </Button>
              </Col>  

              <Col style={{}}>
                <Button id="mainButton" variant="outline-warning" onClick={scrollToElement}>
                  Learn More
                </Button>
              </Col>

            </Row>

          </Col>

        </Row>



        {/* Home Page Content */}
        
        {/* Recent Events */}
        <Row ref={targetRef} style={{padding:"20px 0 0 10px", marginBottom:"40px"}}>
          <Col>
            {/* Header */}
            <Row style={{margin:"0 0 20px 50px"}}>
              <h1 style={{color:"white"}}>
                Recent Events
              </h1>
            </Row>

            {/* Pic & Text */}
            <Row style={{border:"1px, gold, solid", borderRadius:"15px", margin:"0 10px", padding:"15px"}}>
              <Col xs={1} sm={1} md={1} lg={1}>
              </Col>

              {/* Pic */}
              <Col xs={3} sm={3} md={3} lg={3} style={{backgroundColor:"", width:"", height:"100%", display: "flex", justifyContent: "center"}}>
                <Row style={{alignItems: "center"}}>
                  <img src={Event1_Banner} style={{height:"100%"}} />
                </Row>
              </Col>

              {/* Text */}
              <Col xs={7} sm={7} md={7} lg={7} style={{paddingLeft:"30px"}}>
                <Row>
                  <p id='descriptionText'>
                    Our most recent event was "Mexico Independence Day," on September 12, 2025.
                    <br></br>
                    <br></br>
                    Stay tuned for future events!

                  </p>
                </Row>

                {/* Button */}
                <Row style={{marginTop:"50px"}}>
                  <Button variant="outline-warning" onClick={goToMoreEvents} style={{width:"50%"}}>
                    More Events
                  </Button>
                </Row>
              
              </Col>

            </Row>
          </Col>
        </Row>

        {/* Fighters */}
        <Row style={{padding:"20px 0 0 10px", marginBottom:"40px"}}>
          <Col>
            {/* Header */}
            <Row style={{margin:"0 0 20px 50px"}}>
              <h1 style={{color:"white"}}>
                Fighters
              </h1>
            </Row>

            {/* Pic & Text */}
            <Row style={{border:"1px, gold, solid", borderRadius:"15px", margin:"0 10px", padding:"15px"}}>
              <Col xs={1} sm={1} md={1} lg={1}>
              </Col>

              {/* Pic */}
              <Col xs={3} sm={3} md={3} lg={3} style={{backgroundColor:"", width:"", height:"100%", display: "flex", justifyContent: "center"}}>
                <Row style={{alignItems: "center"}}>
                  <img src={Event1_Banner} style={{height:"100%"}} />
                </Row>
              </Col>

              {/* Text */}
              <Col xs={7} sm={7} md={7} lg={7} style={{paddingLeft:"30px"}}>
                <Row>
                  <p id='descriptionText'>
                    Our fighters are skilled, trained, and fierce!
                    <br></br>
                    <br></br>
                    Click the button below to learn more about them.

                  </p>
                </Row>

                {/* Button */}
                <Row style={{marginTop:"50px"}}>
                  <Button variant="outline-warning" onClick={goToFighters} style={{width:"50%"}}>
                    Our Fighters
                  </Button>
                </Row>
                
              
              </Col>

            </Row>
          </Col>
        </Row>


        {/* Our Crew */}
        <Row style={{padding:"20px 0 0 10px", marginBottom:"40px"}}>
          <Col>
            {/* Header */}
            <Row style={{margin:"0 0 20px 50px"}}>
              <h1 style={{color:"white"}}>
                Meet The Crew
              </h1>
            </Row>

            {/* Pic & Text */}
            <Row style={{border:"1px, gold, solid", borderRadius:"15px", margin:"0 10px", padding:"15px"}}>
              <Col xs={1} sm={1} md={1} lg={1}>
              </Col>

              {/* Pic */}
              <Col xs={3} sm={3} md={3} lg={3} style={{backgroundColor:"", width:"", height:"100%", display: "flex", justifyContent: "center"}}>
                <Row style={{alignItems: "center"}}>
                  <img src={Event1_Banner} style={{height:"100%"}} />
                </Row>
              </Col>

              {/* Text */}
              <Col xs={7} sm={7} md={7} lg={7} style={{paddingLeft:"30px"}}>
                <Row>
                  <p id='descriptionText'>
                    Without a great team, great things can't be done!
                    <br></br>
                    <br></br>
                    Click the button to learn more about the people here at SirRoc Promotions.

                  </p>
                </Row>

                {/* Button */}
                <Row style={{marginTop:"50px"}}>
                  <Button variant="outline-warning" onClick={goToOurCrew} style={{width:"50%"}}>
                    Our Crew
                  </Button>
                </Row>
              
              </Col>

            </Row>
          </Col>
        </Row>

      </div>

    );
  };


  const MobileNav = () => {
      return(
        <div style={{backgroundColor:"", height:"", width:"", alignContent:"center"}}>

        {/* Pop Up */}
        <Row style={{ position:"absolute", color:"white"}}>
          <div>
            <h1>Website is currently under construction.</h1>
            {/* <button onClick={handleOpenPopUp}>Open Popup</button> */}

            {/* <PopUp showPopUp={showPopUp} closePopUp={handleClosePopUp}>
              <h2>Welcome to the Popup!</h2>
              <p>
                LOST, STOLEN, OR DAMAGED TICKETS. It is the ticket holder's responsibility to keep this ticket safe. This ticket will not be replaced, or reissued if it is lost, stolen, damaged, or otherwise rendered inaccessible for any reason.
                TICKET SALES ARE FINAL AND NON-REFUNDABLE. This ticket is a limited, revocable license and its purchase constitutes an agreement to all terms and conditions. All sales are final, and no refunds, credits, or exchanges will be provided, even in cases of a lost, stolen, or destroyed ticket.
              </p>
            </PopUp> */}
          </div>

        </Row>



        {/* Desktop Bottom Row -- Nav */}
        <Row>
          
          {/* <Col xs={12} sm={12} md={3} lg={3} style={{ margin:"0 0 20px 0", display:"flex", justifyContent:"center", alignItems:"center", height:""}}>
            <Button id='nav-button' value={1} onClick={(e) => toggleMainDiv(e.target.value)} style={{width:"50%"}}>
              Events
            </Button>
          </Col> */}

          {/* <Col xs={12} sm={12} md={3} lg={3} style={{ margin:"0 0 20px 0", display:"flex", justifyContent:"center", alignItems:"center", height:""}}>
            <Button id='nav-button' value={2} onClick={(e) => toggleMainDiv(e.target.value)} style={{width:"50%"}}>
              Fighters
            </Button>
          </Col> */}



          {/* <Col xs={12} sm={12} md={3} lg={3} style={{ margin:"0 0 0 0", display:"flex", justifyContent:"center", alignItems:"center", height:""}}>
            <Button id='nav-button' value={3} onClick={(e) => toggleMainDiv(e.target.value)} style={{width:"50%"}}>
              Contact Us
            </Button>
          </Col> */}


        </Row>


        </div>
      )
  };



  return (
    
    <div className="container-fluid" style={{backgroundColor:"black", height:"400vh"}}>
      


      
      <Row>

        <TermsPopUp show={showTermsPopUp} onAccept={handleAcceptTerms}/>


        <Col>

          {/* Video Container */}
          <Row style={{backgroundColor:"", }}>

            <Col xs={12} sm={12} md={12} lg={12}>
              
              <Row style={{display:"flex", justifyContent:"center", position:"", margin:"10px", height:"", width:"", padding:""}}>
                  {/* Video Overlay */}
                  {/* <div className="video-overlay" style={{position:"absolute", top:"", left:"", width:"75%", height:"50%", backgroundColor:"rgba(0, 0, 0, 0.7)"}}></div> */}

                  {/* Video */}
                  <video autoPlay loop muted playsInline style={{width:"60%", height:"30%", objectFit:"contain", border:"2px, gold, solid", padding:"10px"}}>
                    <source src={Video} type="video/mp4" />
                  </video>
              </Row>
            </Col>
          </Row>



          {/* Contents */}
          <Row>
            {isMobile ? <MobileNav /> : <DesktopNav />}
          </Row>


          {/* Footer */}
          <Row style={{backgroundColor:"", display:"flex", justifyContent:"", alignItems:"center", margin:"150px 0 0 0", height:"", width:"100%", color:"white"}}>
            
            {/* Socials */}
            {/* Col-col-col */}
            {/* about us, contact us, sign up */}
            <Col>

              <Row>
                
                
              </Row>
            
              <Row>
                <div style={{textAlign:"center", fontSize:"80%"}}>
                  Fighters, fights, dates, and locations are subject to change.
                </div>

                <div style={{textAlign:"center", fontSize:"80%"}}>
                ----------------------
                </div>
                
                <div style={{textAlign:"center", fontSize:"80%"}}>
                  LOST, STOLEN, OR DAMAGED TICKETS. It is the ticket holder's responsibility to keep this ticket safe. This ticket will not be replaced, or reissued if it is lost, stolen, damaged, or otherwise rendered inaccessible for any reason.
                  TICKET SALES ARE FINAL AND NON-REFUNDABLE. This ticket is a limited, revocable license and its purchase constitutes an agreement to all terms and conditions. All sales are final, and no refunds, credits, or exchanges will be provided, even in cases of a lost, stolen, or destroyed ticket.
                </div>
              </Row>
            </Col>




            {/* Sponsor Wheel */}
            {/* 
            <Col xs={12} sm={12} md={12} lg={12} style={{display:"flex", justifyContent:"center", alignItems:"center", height:""}}>
                <Row>
                  <Col>
                    <div>
                      <img src={currentSponsor.logo} alt={currentSponsor.name} />
                      <h3 style={{color:"white"}}>{currentSponsor.name}</h3>
                    </div>
                  </Col>
                  <Col>
                    <div>
                      <img src={currentSponsor.logo} alt={currentSponsor.name} />
                      <h3 style={{color:"white"}}>{currentSponsor.name}</h3>
                    </div>
                  </Col>
                  <Col>
                    <div>
                      <img src={currentSponsor.logo} alt={currentSponsor.name} />
                      <h3 style={{color:"white"}}>{currentSponsor.name}</h3>
                    </div>
                  </Col>
                </Row>
            </Col>
              */}

            {/* Disclaimer */}



          </Row>

        </Col>
      
      </Row>

    </div>    
        
  );

};

export default Home;

import 'bootstrap/dist/css/bootstrap.min.css'; // bootstrap capability

import './Home.css'; 

import Video from "./vid1.mp4"
import Logo from "./SirRocPromotions_logo_trans.png"


import {useEffect, useState} from 'react';
import {Row, Col, Card, Button} from 'react-bootstrap';

import EventsView from '../../components/HomeComponents/EventsView/EventsView.js';
import ContactUsView from '../../components/HomeComponents/ContactUsView/ContactUsView.js';
import FightersView from '../../components/HomeComponents/FightersView/FightersView.js';





const Home = () => {

  const [showEvents, setShowEvents] = useState(false);
  const [showFighters, setShowFighters] = useState(false);
  const [showContactUs, setShowContactUs] = useState(false);

  const sponsors = [
    { id: 1, logo: {Logo}, name: 'Sponsor A', link: 'https://sponsorA.com' },
    { id: 2, logo: {Logo}, name: 'Sponsor B', link: 'https://sponsorB.com' },
    { id: 3, logo: {Logo}, name: 'Sponsor C', link: 'https://sponsorC.com' },
  ];


  const [currentIndex, setCurrentIndex] = useState(0);
  const currentSponsor = sponsors[currentIndex];


  const [isMobile, setIsMobile] = useState(false);


  
  
  
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    handleResize();
  }, 
  []
  );


  
  // const isMobile = window.innerWidth <= 768;

  function toggleMainDiv (val){
    clearMainView();

    switch(val){
      case "1" :
        setShowEvents(!showEvents);
        break;
      case "2" :
        setShowFighters(!showFighters);
        break;
      case "3" :
        setShowContactUs(!showContactUs);
        break;

      }
  };

  function clearMainView(){
    setShowEvents(false);
    setShowFighters(false);
    setShowContactUs(false);
  };




  const DesktopNav = () => {

    return(

      <div>

        <Row style={{backgroundColor:"", position:"", width:"100%", height:"", marginTop:"",  textAlign:""}}>
          <Col style={{width:"", height:""}}>


            {/* Bottom Nav */}
            <Row style={{  backgroundColor:"", height:"20vh", width:"", alignContent:"center"}}>

              {/* Nav Buttons */}
              <Col xs={12} sm={12} md={12} lg={12}  style={{backgroundColor:"", display:"flex", justifyContent:"center", alignItems:"center", margin:"20px 0"}}>

                <Row>
                  <Col>
                    <Button id="mainButton" variant="outline-warning" value={1} onClick={(e) => {toggleMainDiv(e.target.value)}}>
                      Events
                    </Button>
                  </Col>

                  <Col style={{height:"", overflow:""}}>
                    <Button id="mainButton" variant="outline-warning" value={2} onClick={(e) => {toggleMainDiv(e.target.value)}}>
                      Fighters
                    </Button>
                  </Col>


                  <Col style={{height:"", overflow:""}}>
                    <Button id="mainButton" variant="outline-warning" onClick={()=> {window.open("https://form.jotform.com/251378223496059", '_blank')}}>
                      Register
                    </Button>
                  </Col>

                  <Col style={{height:"", overflow:""}}>
                    <Button id="mainButton" variant="outline-warning" value={3} onClick={(e) => {toggleMainDiv(e.target.value)}}>
                      Contact Us
                    </Button>
                  </Col>
                </Row>
               



                {/* Insert MainView based on selection */}
                {/* {(showHome) ? <HomeView /> :""}
                {(showEvents) ? <EventsView /> :""}
                {(showFighters) ? <FightersView /> :""} */}
                {/* {(showContactUs) ? <ContactUsView /> :""} */}


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


            </Row>

          </Col>

        </Row>

      </div>

    );
  };


  const MobileNav = () => {
      return(
          <div style={{backgroundColor:"", height:"", width:"", alignContent:"center"}}>

        {/* Desktop Bottom Row -- Nav */}
        <Row>
          
          <Col xs={12} sm={12} md={3} lg={3} style={{ margin:"0 0 20px 0", display:"flex", justifyContent:"center", alignItems:"center", height:""}}>
            <Button id='nav-button' value={1} onClick={(e) => toggleMainDiv(e.target.value)} style={{width:"50%"}}>
              Events
            </Button>
          </Col>

          <Col xs={12} sm={12} md={3} lg={3} style={{ margin:"0 0 20px 0", display:"flex", justifyContent:"center", alignItems:"center", height:""}}>
            <Button id='nav-button' value={2} onClick={(e) => toggleMainDiv(e.target.value)} style={{width:"50%"}}>
              Fighters
            </Button>
          </Col>

          <Col xs={12} sm={12} md={3} lg={3} style={{ margin:"0 0 20px 0", display:"flex", justifyContent:"center", alignItems:"center", width:""}}>
            <Button id='nav-button' onClick={() => window.open("https://form.jotform.com/251378223496059", '_blank')} style={{width:"50%"}}>
              Register
            </Button>
          </Col>

          <Col xs={12} sm={12} md={3} lg={3} style={{ margin:"0 0 0 0", display:"flex", justifyContent:"center", alignItems:"center", height:""}}>
            <Button id='nav-button' value={3} onClick={(e) => toggleMainDiv(e.target.value)} style={{width:"50%"}}>
              Contact Us
            </Button>
          </Col>


        </Row>


          </div>
      )
  };



  return (
    
    <div className="container-fluid" style={{backgroundColor:"black", height:"100%"}}>
      
      
      <Row>

        <Col>
          
          

          
          
          {/* Container */}
          <div style={{overflow:""}}>
            
            {/* Video Overlay */}
            <div className="video-overlay" style={{position:"absolute", top:0, left:0, width:"100%", height:"100%", backgroundColor:"rgba(0, 0, 0, 0.8)"}}></div>

            {/* Video */}
            <video autoPlay loop muted playsInline style={{width:"100%", height:"100vh", objectFit:"cover"}}>
              <source src={Video} type="video/mp4" />
            </video>

            {/* Nav Bar Image */}
            <Row className="" style={{ backgroundColor:"",position:"absolute", top:0, left:"", width:"100%", height:"80px"}}>
              <img src={Logo} style={{height:"100%", objectFit:"contain"}} />
            </Row>





            {/* Top Row */}
            <Row style={{backgroundColor:"", position:"absolute", top:"100px", left:"0", height:"30vh", width:"100%", paddingTop:""}}>
              <Col xs={12} sm={12} md={12} lg={12} style={{ backgroundColor:"", height:"60vh"}}>
                {/* Bottom Row -- Nav */}
                {showEvents ? <EventsView isMobile={isMobile} /> : ""}
                {showFighters ? <FightersView isMobile={isMobile}/> : ""}
                {showContactUs ? <ContactUsView isMobile={isMobile}/> : ""}

              </Col>

              <Col xs={12} sm={12} md={12} lg={12}>


                {/* Contents */}
                {isMobile ? <MobileNav /> : <DesktopNav />}


                {/* footer */}
                <Row style={{backgroundColor:"black", display:"flex", justifyContent:"", alignItems:"center", margin:"20px 0 0 0", height:"", width:"100%", color:"white"}}>
                  
                  
                  
                  {/* Sponsor Wheel */}

                  {/* Disclaimer */}
                  <Col xs={12} sm={12} md={12} lg={12} style={{backgroundColor:"", display:"", justifyContent:"", alignItems:"", height:""}}>
                    <div style={{textAlign:"center", fontSize:"80%"}}>
                      Fighters, fights, date(s), and location are subject to change.
                    </div>
                  </Col>



                </Row>


              </Col>



            </Row>


          </div>
        </Col>
      
      </Row>
      
      
    </div>    
        
  );

};

export default Home;

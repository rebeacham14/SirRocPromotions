import 'bootstrap/dist/css/bootstrap.min.css'; // bootstrap capability

import { Link } from 'react-router-dom';
import { useState} from 'react';

import {Row, Col, Button, Card, Carousel} from 'react-bootstrap';



import ApocalyptoPoster from './Apacalyto_Poster_1.JPG';
import MIDPoster from './image0.jpeg';
import SingerPic from "./SingerPic.png"

function EventsView ({isMobile}){    


    
    const DesktopView = () => {
        return(
            <div>
                {/* scrollable window for all events */}
                <Row style={{backgroundColor:"rgba(100, 90, 90, 0.2)", height:"50vh", width:"100%", margin:"0 0 0 2vh", overflowY:"scroll", border:"2px solid #ffc107", borderRadius:"10px"}}>
                    
                    
                    <Col style={{backgroundColor:"", paddingTop:"2vh" }}>
                        
                        {/* upcoming event LABEL*/}
                        <Row style={{marginBottom:"30px"}}>
                            <Col xs={12} sm={12} md={12} lg={12} style={{display:"flex", justifyContent:"center", color:"white"}}>
                                <h1> Upcoming Event</h1>
                            </Col>
                        </Row>

                        {/* event */}
                        <Row style={{marginBottom:"50px"}}>   
                            <Col xs={12} sm={12} md={12} lg={12} style={{display:""}}>
                                <Row>
                                    <Col xs={4} sm={4} md={4} lg={4} style={{display:"flex", justifyContent:"center"}}>
                                        <Card style={{width:"30vh"}}>
                                            <Card.Img variant="" src={MIDPoster} style={{width:""}}/>
                                        </Card>
                                    </Col>

                                    <Col xs={8} sm={8} md={8} lg={8} style={{display:"flex", alignItems:"center"}}>
                                        <Card style={{ backgroundColor:"rgba(38, 34, 34, 1)", width:"", padding:"20px", width:"100%", color:"white", border:"2px solid #ffc107"}}>
                                            <Card.Title style={{color:"#ffc107"}}>Mexico Independence Day</Card.Title>
                                            <Card.Text>
                                                September 12, 2025. 
                                                <br/> 
                                                First Bell @ 5pm. 
                                                <br/> 
                                                <br/> 
                                                <a href='https://www.google.com/maps/place/900+Martin+Luther+King+Jr+Way,+Merced,+CA+95341/@37.2916376,-120.4874358,16z/data=!3m1!4b1!4m6!3m5!1s0x809142e3b323dd3f:0xf61f7c5436593595!8m2!3d37.2916376!4d-120.4848555!16s%2Fg%2F11bw40h9_z?entry=ttu&g_ep=EgoyMDI1MDcyMy4wIKXMDSoASAFQAw%3D%3D'>
                                                    Merced County Fair
                                                    <br/> 
                                                    900 Martin Luther King Jr. Way
                                                    <br/> 
                                                    Merced, CA 95341
                                                </a>

                                            </Card.Text> 
                                            <center>
                                            <Link to="/buyATicket">
                                            <Button variant="warning" style={{width:"30%", margin:"0 10px"}}>
                                                Buy A Ticket
                                            </Button>
                                            </Link>
                                            
                                            <Button variant="outline-warning" style={{width:"30%", margin:"0 10px"}}>
                                                Read More
                                            </Button>
                                            </center>

                                        </Card>
                                    </Col>
                                </Row>
                            </Col>
                        </Row>

                        {/*   */}
                        <Row>

                            {/* Picture */}
                            <Col>
                                <Row>
                                    <Col style={{display:"flex", justifyContent:"center", alignItems:"center"}}>   


                                        <Card style={{width:"30vh", marginRight:"50px"}}>
                                            <Card.Img variant="" src={SingerPic} style={{width:""}}/>
                                        </Card>



                                        <Card style={{backgroundColor:"rgba(38, 34, 34, 1)", width:"40%", height:"",  padding:"20px",display:"flex", justifyContent:"center", border:"2px solid #ffc107"}}>
                                            <Card.Title style={{color:"#ffc107"}}>
                                                Salma Parra
                                            </Card.Title>

                                            <Card.Text style={{fontSize:"0.8rem", color:"white"}}>
                                                Join us as her powerful voice honors the rich heritage and unity of two nations through music — <b><i> U.S. and Mexico National Anthems. </i></b> 
                                                <br/>
                                                <br/>
                                                More than a performance, this is a celebration of culture, pride, and connection. 
                                                <br/>
                                                Don’t miss this unforgettable moment!
                                            </Card.Text>
                                        </Card>



                                        
                                    </Col>

                                </Row>
                            </Col>
                        </Row>




                        {/* past event LABEL*/}
                        <Row style={{margin:"20px 0"}}>
                            <Col xs={12} sm={12} md={12} lg={12} style={{display:"flex", justifyContent:"center", color:"white"}}>
                                <h1 > Past Events</h1>
                            </Col>
                        </Row>

                        {/* all events */}
                        <Row style={{display:"flex", justifyContent:"", margin:"20px 0"}}>
                            <Col xs={4} sm={4} md={4} lg={4}>
                                <Card style={{width:"30vh"}}>
                                    <Card.Img variant="top" src={ApocalyptoPoster} />
                                    {/* <Card.Body>
                                        <center>
                                        <Button variant="warning">
                                            Highlights
                                        </Button>
                                        </center>
                                    </Card.Body> */}
                                </Card>
                            </Col>
                        </Row>

                    </Col>
                    
                    

                </Row>

            </div>


        )

        
    };



    const MobileView = () => {
        return(

            <div>
                {/* scrollable window for all events */}
                <Row style={{backgroundColor:"rgba(100, 90, 90, 0.2)", height:"50vh", width:"100%", margin:"0 0 0 2vh", overflowY:"scroll", border:"2px solid #ffc107", borderRadius:"10px"}}>
                    
                    
                    <Col style={{backgroundColor:"", paddingTop:"2vh" }}>
                        
                        {/* upcoming event LABEL*/}
                        <Row style={{marginBottom:"30px"}}>
                            <Col xs={12} sm={12} md={12} lg={12} style={{display:"flex", justifyContent:"center", color:"white"}}>
                                <h1> Upcoming Event</h1>
                            </Col>
                        </Row>

                        {/* event */}
                        <Row style={{marginBottom:"50px"}}>   
                            <Col xs={12} sm={12} md={12} lg={12} style={{display:""}}>
                                <Row>
                                    <Col xs={7} sm={7} md={7} lg={7} style={{display:"flex", justifyContent:"center"}}>
                                        <Card style={{width:"20vh", marginBottom:"20px"}}>
                                            <Card.Img variant="" src={MIDPoster} style={{width:""}}/>
                                        </Card>
                                    </Col>

                                    <Col xs={5} sm={5} md={5} lg={5} style={{backgroundColor:"", display:"flex", alignItems:"center"}}>
                                        <center>
                                        <Link to="/buyATicket">
                                        <Button variant="warning" style={{width:"100%", margin:"0 10px"}}>
                                            Buy A Ticket
                                        </Button>
                                        </Link>
                                        </center>
                                    
                                    </Col>

                                    <Col xs={12} sm={12} md={8} lg={8} style={{display:"flex", alignItems:"center"}}>
                                        <Card style={{ backgroundColor:"rgba(38, 34, 34, 1)", width:"", padding:"20px", width:"100%", color:"white", border:"2px solid #ffc107"}}>
                                            <Card.Title style={{color:"#ffc107"}}>Mexico Independence Day</Card.Title>
                                            <Card.Text>
                                                September 12, 2025. 
                                                <br/> 
                                                First Bell @ 5pm. 
                                                <br/> 
                                                <br/> 
                                                <a href='https://www.google.com/maps/place/900+Martin+Luther+King+Jr+Way,+Merced,+CA+95341/@37.2916376,-120.4874358,16z/data=!3m1!4b1!4m6!3m5!1s0x809142e3b323dd3f:0xf61f7c5436593595!8m2!3d37.2916376!4d-120.4848555!16s%2Fg%2F11bw40h9_z?entry=ttu&g_ep=EgoyMDI1MDcyMy4wIKXMDSoASAFQAw%3D%3D'>
                                                    Merced County Fair
                                                    <br/> 
                                                    900 Martin Luther King Jr. Way
                                                    <br/> 
                                                    Merced, CA 95341
                                                </a>

                                            </Card.Text> 
                                            <center>                                           
                                            <Button variant="outline-warning" style={{width:"30%", margin:"0 10px"}}>
                                                Read More
                                            </Button>
                                            </center>

                                        </Card>
                                    </Col>
                                </Row>
                            </Col>
                        </Row>




                        {/* Event Highlight */}
                        <Row>

                            {/* Picture */}
                            <Col>
                                <Row style={{marginBottom:"20px"}}>
                                    <Col style={{display:"flex", justifyContent:"center", alignItems:""}}>   


                                        <Card style={{width:"30vh", marginRight:"50px"}}>
                                            <Card.Img variant="" src={SingerPic} style={{width:""}}/>
                                        </Card>

                                    </Col>

                                </Row>



                                <Row>

                                        <Card style={{backgroundColor:"rgba(38, 34, 34, 1)", width:"", height:"",  padding:"20px",display:"flex", justifyContent:"center", border:"2px solid #ffc107"}}>
                                            <Card.Title style={{color:"#ffc107"}}>
                                                Salma Parra
                                            </Card.Title>

                                            <Card.Text style={{fontSize:"0.8rem", color:"white"}}>
                                                Join us as her powerful voice honors the rich heritage and unity of two nations through music — <b><i> U.S. and Mexico National Anthems. </i></b> 
                                                <br/>
                                                <br/>
                                                More than a performance, this is a celebration of culture, pride, and connection. 
                                                <br/>
                                                Don’t miss this unforgettable moment!
                                            </Card.Text>
                                        </Card>



                                </Row>




                            </Col>
                        </Row>










                        {/* past event LABEL*/}
                        <Row style={{margin:"20px 0"}}>
                            <Col xs={12} sm={12} md={12} lg={12} style={{display:"flex", justifyContent:"center", color:"white"}}>
                                <h1 > Past Events</h1>
                            </Col>
                        </Row>

                        {/* all events */}
                        <Row style={{display:"flex", justifyContent:"", margin:"20px 0"}}>
                            <Col xs={4} sm={4} md={4} lg={4}>
                                <Card style={{width:"30vh"}}>
                                    <Card.Img variant="top" src={ApocalyptoPoster} />
                                    {/* <Card.Body>
                                        <center>
                                        <Button variant="warning">
                                            Highlights
                                        </Button>
                                        </center>
                                    </Card.Body> */}
                                </Card>
                            </Col>
                        </Row>

                    </Col>
                    
                    

                </Row>

            </div>

            
        )


    };




    return (
        
        <div className='container-fluid' >


            {/* Contents */}
            {isMobile ? <MobileView /> : <DesktopView />}




        </div>

    );

}

export default EventsView;         

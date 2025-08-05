import 'bootstrap/dist/css/bootstrap.min.css'; // bootstrap capability

import { useEffect, useState} from 'react';

import {Row, Col, Button, Card, Carousel} from 'react-bootstrap';

import image1 from './image2.jpeg';
import image2 from './image0.jpeg';


function HomeView ({ }){    

    // const [currentImage, changePic] = useState(placeholderPic);

    // const handleFighterChange = (e) => {

    // };

    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex) => {
        setIndex(selectedIndex);
    };


    return (

        <div className='container-fluid' >

        <Row style={{backgroundColor:"", height:""}}>
            

            
            
            <Col style={{display:"flex", justifyContent:"center", alignItems:"", height:""}}>
                <Carousel activeIndex={index} onSelect={handleSelect} style={{ width: "500px" }}>
                                        
                    <Carousel.Item>
                        
                        <center>
                        <img src={image1} alt="" style={{ width: "100%", }} />
                        </center>

                        <Carousel.Caption style={{backgroundColor:"rgba(0, 0, 0, 0.5)"}}>
                        <h3>Salma Parra</h3>
                        <p>National Anthem singer for our upcoming event</p>
                        </Carousel.Caption>
                    </Carousel.Item>


                </Carousel>
            </Col>

        </Row>


        </div>

    );

}

export default HomeView;         

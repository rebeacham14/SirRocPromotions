import 'bootstrap/dist/css/bootstrap.min.css'; // bootstrap capability


import emailjs from 'emailjs-com';

import JsBarcode from 'jsbarcode';




import { useRef, useEffect, useState} from 'react';
import { Button, Card, Col, Row } from 'react-bootstrap';
import { useParams } from 'react-router-dom';


function Scanner () {



    return (

        <div className="container-fluid" style={{backgroundColor:"black", height:"230vh", width:"", paddingTop:"20vh"}}>

            <Row>

                <Col>
                
                    {/* input bar */}
                    <Row>


                    </Row>




                    {/* input bar */}
                    <Row>

                    </Row>
                
                
                </Col>


            </Row>

        </div>

    );

};


export default Scanner;

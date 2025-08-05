import 'bootstrap/dist/css/bootstrap.min.css'; // bootstrap capability


import emailjs from 'emailjs-com';

import JsBarcode from 'jsbarcode';




import { useRef, useEffect, useState} from 'react';
import { Button, Card, Col, Row } from 'react-bootstrap';
import { useParams } from 'react-router-dom';


function PaymentSuccess () {


    const canvasRef = useRef(null);  

    const [isDisabled, setIsDisabled] = useState(false); 
    const [error, setError] = useState("");

    let urlInfo, orderInfo, user, section, seat, price;




    // sets barcode
    useEffect(() => {


        if (window.location.href.includes("?")){


            // get variables from url
            urlInfo = window.location.href.split("?"); 
            orderInfo = urlInfo[1].split("_");
            
            user = orderInfo[0]
            section = orderInfo[1]
            seat = orderInfo[2].replaceAll("!-",",")
            price = orderInfo[3]


            if (canvasRef.current) {
                JsBarcode(canvasRef.current, seat, {
                format: "CODE128", // Or other desired format
                displayValue: false,
                fontSize: 18,
                height: 30,
                width: 2,
                });
            }

        }

    }, []);




    function sendEmailRecipt (){

        setIsDisabled(true)

        // get barcode

        const barcode_image = canvasRef.current.toDataURL("image/png");

        
        let params ={
            user: user,
            section: section,
            seat: seat,
            barcode_image: barcode_image,
            price: price
        }

        // let params ={
        //     user: "tooprogrammed@gmail.com",
        //     section: "D",
        //     seat: "DA10,DA9,DA8,DA7",
        //     barcode_image: barcode_image,
        //     price: "374.00"
        // }




        emailjs.send("service_id3", "template_n8gz3mx", params, "oVHMastnvXVZjrQTA")
        .then((response) => {
            console.log("Email sent successfully:", response);
        })
        .catch((error) => {
            console.error("Error sending email:", error);
        });            
        
        setError("Email sent successfully! Might be in spam? Reload page to send again.");

        return;

    };




    return (
        <div className="container-fluid" style={{backgroundColor:"black", height:"230vh", width:"", paddingTop:"20vh"}}>
            <Row>
                <Col xs="12"sm="12"md="12"lg="12" style={{justifyItems:"center"}}>
                
                
                    <h2 style={{color:"green"}}>
                        Payment successful.
                    </h2>

                    <Button style={{backgroundColor:"transparent", width:"100%"}} disabled>
                    </Button>
                
                </Col>



            </Row>

            <Row>
                <Col xs="12"sm="12"md="12"lg="12" style={{justifyItems:"center"}}>
                    
                    <Button onClick={()=> {sendEmailRecipt()}} style={{width:"50%", margin:"40px 0 0 25%"}} disabled={isDisabled}>
                        Click for email recipt!
                    </Button>

                    <Row>
                        <p style={{color:"white"}}>
                            Show this barcode when entering the event.
                        </p>
                    </Row>
                    
                    <Card style={{width:"100%"}}>
                        <canvas id="myCanvas" ref={canvasRef} />
                    </Card>

                    <Row>
                        <p style={{color:"white", width:"", marginTop:"20px"}}>
                            {error}
                        </p>
                    </Row>


                </Col>

            </Row>



            {/* Contents */}
            {/* {isMobile ? <MobileView /> : <DesktopView />} */}
            
        </div>
    );
};

export default PaymentSuccess;

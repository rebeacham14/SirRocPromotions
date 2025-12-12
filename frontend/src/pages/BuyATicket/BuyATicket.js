import 'bootstrap/dist/css/bootstrap.min.css'; // bootstrap capability
import './BuyATicket.css';


import '@stripe/stripe-js'
import { loadStripe } from '@stripe/stripe-js';


import { useEffect, useState, useRef} from 'react';
import {Row, Col, Card, Button, CloseButton, } from 'react-bootstrap';
import { Link, useNavigate } from "react-router-dom";


import TicketFighterSelection from '../../components/BuyATicketComponents/TicketFighterSelection/TicketFighterSelection.js';
import TicketSeatSelector from '../../components/BuyATicketComponents/TicketSeatSelector/TicketSeatSelector.js';

function BuyATicket () {

    // info gathered from database
    const [allTickets, setAllTickets] = useState("")
    const [takenSeats, setTakenSeats] = useState("")

    // is user ready to purchase?
    const [isAtEnd, setAtEnd] = useState(false);

    // user info (input)
    const [user, setUser] = useState("")
    const [checkUser1, setCheckUser1] = useState("")
    const [checkUser2, setCheckUser2] = useState("")

    // info about user selection (ticket info)
    const [section, setSection] = useState("");
    const [seats, setSelectedSeats] = useState("");
    const [price, setPrice] = useState(0);
    const [fighter, setFighter] = useState("");
    
    // price based on business-exec standards
    const [seatPriceData, setSeatPriceData] = useState("");
    
    // errors/alerts to user on screen
    const [error, setError] = useState("");
    
    // is User on mobile device?
    const [isMobile, setIsMobile] = useState(false);


    // allow page navigation
    const navigate = useNavigate();
    
    const goToHome = () => {
        navigate('/'); // Navigate to the '/about' path
    };

    
    // check if user device is mobile (screen width <=1024)
    useEffect(() => {

        const handleResize = () => {

            setIsMobile(window.innerWidth <=1024 );
        };

        handleResize();

    }, []);


    // get all seats already bought (database query)

    // render API
    // useEffect(() => {
                
    //     const fetchSeatAvailability = async () => {

    //         const response = await fetch('https://sirrocpromotions.onrender.com/api/ticket');
            
    //         const json = await response.json()
            
    //         if(response.ok){

    //             setAllTickets(json);

    //         } else {
    //             setError("Error fetching all tickets");
    //         }

    //     }
    //     fetchSeatAvailability();


    // }, []);

    // local API
    useEffect(() => {
                
        const fetchSeatAvailability = async () => {
            const response = await fetch('http://localhost:4000/api/ticket');
            const json = await response.json()
            
            if(response.ok){
                setAllTickets(json);
            } else {
                setError("Error fetching all tickets");
            }
        }
        fetchSeatAvailability();

    }, []);


    // when user selects fighter...
    const handleFighter = (val) => {
        setError(null)

        setFighter(val)

        setAtEnd(true);
        
    };


    // email input fields
    const inputRef1 = useRef(null);
    const inputRef2 = useRef(null);

    useEffect(() => {
        // Focus the input when the component mounts
        if (inputRef1.current) {
            inputRef1.current.focus();
        }
    }, []);   

    useEffect(() => {
        // Focus the input when the component mounts
        if (inputRef2.current) {
            inputRef2.current.focus();
        }
    }, []);   


    // verify email input 
    function onSetEmail(){


        // check if emails match
        let user1 = inputRef1.current.value;
        let user2 = inputRef2.current.value;


        if(user1!=="" && user1 === user2 && user2.includes('@') && (user1.includes('.com') || user1.includes('.net'))|| user1.includes('.org')) {
            setError(null)

            setCheckUser1(user1)
            setCheckUser2(user2)
            setUser(user1)
            



            // -----set seats

            let recordedSeats = allTickets.map(ticket => ticket.seat)
            let newSeats = [];
            
            
            recordedSeats.forEach(s => {
                
                
                // if seat has multiple seats...
                if(s.includes("!-")){

                    // break it up by the separator
                    const idvSeat = s.split("!-")

                    newSeats.push(...idvSeat)

                    

                    
                    
                }
                else{
                    newSeats.push(s)


                }

                setTakenSeats(newSeats)
            });

            // setTakenSeats(allTickets.map(ticket => ticket.seat))
                        
        }
        else{setError("check the email for errors")}        

    }


    // verify if user can continue with purchase
    function onBuyClick() {

        // with email input
        if(fighter!="" && checkUser1!="" && checkUser1 == checkUser2){
            setError(null)
            handleBuy();

        } else{setError("complete your selections")}

        // without email input
        // if(fighter!=""){
        //     setError(null)
        //     handleBuy();

        // } else{setError("complete your selections")}


    }
        


    // call stripe, send mongo db request
    const handleBuy = async () => {
    
        // create mongo db record
        const purchaseSeat = {
            //req.body sent to back-end
            "user":user,
            "section":section, 
            "seats":seats,
            "price":price, 
            "seatPriceData":seatPriceData,
            "fighter":fighter,
        }

        console.log(purchaseSeat);


        // send post request to back end (mongo db & stripe)
        try{


            // ---------------------send request----------------------//

            // render API
            // const stripeResponse = await fetch('https://sirrocpromotions.onrender.com/api/ticket/create-checkout-session', {
            //     method:"POST",
            //     headers:{"Content-Type": "application/json"},
            //     body: JSON.stringify(purchaseSeat),
            // });
            
            // local API
            const stripeResponse = await fetch('http://localhost:4000/api/ticket/create-checkout-session', {
                method:"POST",
                headers:{"Content-Type": "application/json"},
                body: JSON.stringify(purchaseSeat),
            });

            

            // ---------------------recieve response----------------------//

            // store session from backend response
            const session = await stripeResponse.json();
            console.log(session)


            // load stripe
            console.log("starting stripe session...");
            const stripe = window.Stripe(process.env.REACT_APP_STRIPE_PUBLIC);


            // if theres a session, redirect page to stripe buy-order-UI
            if (session.id) {

                console.log("starting stripe session...");

                const result = await stripe.redirectToCheckout({
                    sessionId: session.id,
                });

                if (result.error) {
                    alert(result.error.message);
                }else{

                    alert('An error occurred during checkout.');
                    

                    // const mongoResponse = await fetch('https://sirrocpromotions.onrender.com/api/ticket/', {
                    //     method:"POST",
                    //     headers:{"Content-Type": "application/json"},
                    //     body: JSON.stringify(purchaseSeat),
                    // });

                    
                    // const response = await fetch('api/ticket', {
                    //     method:"POST",
                    //     headers:{"Content-Type": "application/json"},
                    //     body: JSON.stringify(purchaseSeat),
                    // });

                }

            } else {
                alert('Failed to create checkout session.');
            }


        }catch (error){
            console.error("Error during checkout:", error);
            // alert('An error occurred during checkout.');
            
        }

    };



    function handleClear() {
        window.location.reload()

    };



    const DesktopView = () => {
        return(

            <Row style={{backgroundColor:"", height:""}}>


                {/* Side Bar - Abs. Sticky */}
                <Col xs="3"sm="3" md="3" lg="3" style={{backgroundColor:"", height:"100vh", paddingTop:"5vh"}}>

                    {/* Nav Buttons */}
                    <Row style={{backgroundColor:"", height:"20vh", marginBottom:"5vh", position:"relative", left:"-8vw", display:"flex", flexDirection:"column", justifyContent:"space-evenly"}}>
                        <Col>
                            <Link to="/">
                            <Button id="navButton" onClick={goToHome}>
                                Home
                            </Button>
                            </Link>
                        </Col>
                    </Row>
                        
                                        
                    {/* Selectoin Tracker */}
                    <center>
                    <Row style={{ backgroundColor:"", height:"40vh" }}> 
                        <Col>
                            
                            {/* Price */}
                            <Row style={{color:"white"}}>
                                <Col>
                                    <h5>
                                        Price:
                                    </h5>
                                </Col>
                            </Row>

                            <Card style={{backgroundColor:"rgba(100, 90, 90, 0.2)", width:"80%", padding:"10px", marginBottom:"10px", border:"2px solid #ffc107"}}>
                                <Row style={{ color:"white"}}>
                                    <Col md="" className='' >
                                        <h5>${price}</h5>
                                    </Col>
                                </Row>
                            </Card>
                            



                            {/* seats */}
                            <Row style={{color:"white", textAlign:"center"}}>
                                <Col>
                                    <h5>
                                        Seats:
                                    </h5>
                                </Col>
                            </Row>

                            <Card style={{backgroundColor:"rgba(100, 90, 90, 0.2)", color:"white", width:"80%", padding:"10px", marginBottom:"10px", border:"2px solid #ffc107"}}>
                                <Row style={{padding:"10px", just:"center"}}>
                                    <Col xs="12"sm="12"md="4"lg="4" >
                                        <h5 style={{fontSize:"1em"}}> {seats} </h5>
                                    </Col>

                                </Row>
                            </Card>



                            {/* Fighter */}
                            <Row style={{color:"white"}}>
                                <Col>
                                    <h5>
                                        Fighter:
                                    </h5>
                                </Col>
                            </Row>

                            <Card style={{backgroundColor:"rgba(100, 90, 90, 0.2)", width:"80%", padding:"10px", marginBottom:"10px", border:"2px solid #ffc107"}}>
                                <Row style={{textAlign:"left", paddingLeft:"20%", color:"white"}}>
                                    <Col md="" className='fighterTracker' >
                                        <h5 style={{color:"#ffc107"}}>{fighter}</h5>
                                    </Col>
                                </Row>
                            </Card>
                        </Col>
                    </Row>
                    </center>

                </Col>


                {/* Main View */}
                <Col xs="3"sm="8"md="8"lg="8" style={{backgroundColor:""}}>

                    {/* Price / Buy Button / BAT Label */}
                    <center>
                    <Row style={{backgroundColor:"", marginTop:"50px"}}>

                        <Col xs="12"s="12"md="12" style={{paddingBottom:"", marginTop:""}}>
                            <center>
                                <h1 style={{color: "white"}}>
                                    Buy A Ticket
                                </h1>
                            </center>
                        </Col>
                    </Row>
                    <Row style={{margin:"30px 0 30px 0 "}}>
                        <Col style={{}}>

                            <Button variant={((isAtEnd))? "warning" : "outline-warning"} disabled={(isAtEnd)?false:true} style={{width:"20%", margin:"0 20px 0 0"}} onClick={() => onBuyClick()}>
                                Buy
                            </Button>
                            <Button variant='outline-danger' onClick={handleClear} >
                                Clear
                            </Button>
                        </Col>
                        { error!="" ? <p style={{color:"red"}}>{error}</p> : ""}
                    </Row>                    
                    </center>
                


                    {/* Insert Ticket Fighter Selection */}
                    {(seats !="") ? <TicketFighterSelection isMobile={isMobile} fighter={fighter} onFighterChange={handleFighter}/> :""}


                    {/* show TicketSeatSelector if area picked */}
                    <TicketSeatSelector isMobile={isMobile} seatsTaken={takenSeats} setSeats={setSelectedSeats} setSection={setSection} setTotalPrice={setPrice} setSeatPriceData={setSeatPriceData} />




                </Col>
            </Row>
        );
    };




    const MobileView = () => {
        return(

            <Row style={{backgroundColor:"black", height:""}}>

                <Col style={{backgroundColor:"", height:"", paddingTop:"5vh"}}>

                    {/* Nav Buttons */}
                    <Row style={{backgroundColor:"", height:"", marginBottom:"5vh"}}>
                        <Col>
                            <Link to="/">
                            <Button id="navButton_mobile">
                                Home
                            </Button>
                            </Link>
                        </Col>
                    </Row>

                    
                    {/* BAT Label */}
                    <center>
                    <Row style={{backgroundColor:"", margin:"20px 0 10px 0"}}>
                        <Col xs="12"s="12"md="12" style={{ backgroundColor:"", paddingBottom:"", marginTop:""}}>
                            <h1 style={{color: "gold"}}>
                                Buy A Ticket
                            </h1>
                        </Col>
                    </Row>
                    </center>



                    {/* Buy / Clear */}
                    <center>
                    <Row style={{ backgroundColor:"", height:"" }}> 

                        <Col xs="12"s="12"md="12">
                            <Row style={{margin:"30px 0 0 0 "}}>
                                
                                <Col xs="2"s="2"md="2"></Col>
                                
                                <Col xs="4"s="4"md="4" style={{}}>
                                    <Button variant={((isAtEnd))? "warning" : "outline-warning"} disabled={(isAtEnd)?false:true} onClick={() => onBuyClick()} style={{width:"100%", height:"100%"}}>
                                        Buy
                                    </Button>
                                </Col>

                                <Col xs="4"s="4"md="4">
                                    {/* <h1 style={{color:"white"}}>
                                        ${price}
                                    </h1> */}
                                    <Button variant='outline-danger' onClick={handleClear} >
                                        Clear
                                    </Button>
                                </Col>
                            </Row>


                            <Row style={{margin:"10px 0 20px 0 "}}>
                                
                                {/* price */}
                                <Col xs="5"s="5"md="5">
                                    {/* Price */}
                                    <Row style={{color:"white"}}>
                                        <Col>
                                            <h6>
                                                Price:
                                            </h6>
                                        </Col>
                                    </Row>

                                    <Card style={{backgroundColor:"rgba(100, 90, 90, 0.2)", width:"80%", paddingTop:"10px", marginBottom:"", border:"2px solid #ffc107"}}>
                                        <Row style={{ color:"white"}}>
                                            <Col md="" className='' >
                                                <h5>${price}</h5>
                                            </Col>
                                        </Row>
                                    </Card>
                                
                                </Col>


                                {/* seats */}
                                <Col xs="7"s="7"md="7">
                                    {/* Seats */}
                                    <Row style={{color:"white"}}>
                                        <Col>
                                            <h6>
                                                Seats:
                                            </h6>
                                        </Col>
                                    </Row>

                                    <Card style={{backgroundColor:"rgba(100, 90, 90, 0.2)", height:"60%", paddingTop:"10px", marginBottom:"", border:"2px solid #ffc107"}}>
                                        <Row style={{ color:"white"}}>
                                            <Col md="" className='' >
                                                <h5>{seats}</h5>
                                            </Col>
                                        </Row>
                                    </Card>
                                
                                </Col>



                                {/* seats */}
                                
                                
                                
                            </Row>
                        </Col>

                    </Row>
                    </center>



                    {/* Insert Ticket Fighter Selection */}
                    {(seats !="") ? <TicketFighterSelection isMobile={isMobile} fighter={fighter} onFighterChange={handleFighter}/> :""}


                    {/* show TicketSeatSelector if area picked */}
                    {(user != "") ? <TicketSeatSelector isMobile={isMobile} seatsTaken={takenSeats} setSeats={setSelectedSeats} setSection={setSection} setTotalPrice={setPrice} setSeatPriceData={setSeatPriceData} /> : ""}


                    {/* Email input box */}
                    <Row style={{backgroundColor:"rgba(100, 90, 90, 0.2)", padding:"20px", margin:"20px", border:"2px solid #ffc107", borderRadius:"10px"}}>

                        <center>
                        <Col>
                            <Row style={{marginBottom:"20px"}}>


                                <Col xs=""sm=""md=""lg="" style={{ backgroundColor:"", marginTop:""}}>
                                    <input ref={inputRef1} type="email" placeholder="Enter email"  style={{backgroundColor:"", paddingLeft:"10px", border:"2px solid black", borderRadius:"5px"}}>

                                    </input>
                                </Col>
                                
                                <Col xs=""sm=""md=""lg="" style={{ backgroundColor:"", marginTop:""}}>
                                    <input ref={inputRef2} type="email" placeholder="Re-type email" style={{backgroundColor:"", paddingLeft:"10px", border:"2px solid black", borderRadius:"5px"}}>
                                        
                                    </input>
                                </Col>
                            </Row>

                            <Row style={{marginBottom:"20px"}}>
                                <Col>
                                    <center>
                                    <Button variant="outline-warning" onClick={onSetEmail} style={{width:"50%"}}>
                                        Set email
                                    </Button>
                                    </center>
                                </Col>
                            </Row>

                        </Col>
                        </center>

                        
                        <Col xs="12"sm="12"md="12"lg="12" style={{ backgroundColor:"", paddingBottom:"", marginTop:""}}>
                            
                            <div style={{display:"block"}}>
                                <p style={{color:"white"}}>
                                    Email: {user}
                                </p>
                            </div>
                        </Col>
                        
                    </Row>


                </Col>
            
            </Row>
        )
    };



    return (
        <div className="container-fluid" style={{backgroundColor:"black", height:"230vh"}}>

            {/* Contents */}
            {isMobile ? <MobileView /> : <DesktopView />}
            
        </div>
    );


};

export default BuyATicket;




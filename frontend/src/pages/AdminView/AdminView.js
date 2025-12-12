import 'bootstrap/dist/css/bootstrap.min.css'; // bootstrap capability


import { useEffect, useState, useRef} from 'react';
import {Row, Col, Card, Button } from 'react-bootstrap';
import { Link } from "react-router-dom";


function AdminView () {

    const [allTickets, setAllTickets] = useState("")
    const [takenSeats, setTakenSeats] = useState("")

    const [error, setError] = useState("");

    const [isMobile, setIsMobile] = useState(false);




    const fighterNames = [
        'Jesus "Chiquito" Haro',
        'Angel Chavez "Firme" Cavazos',
        'Brian "Gallo" Giro Ramos',
        'Cruz Becerra Monteon',
        'Sandra Magallon',
        'Karanveer "Shikari" Singh',
        'Christian Palacios',
        'Isaiah "Pantera" Oresco',
        'Danny "Manitas De Piedra" Haro',
        'Jessie James "Outlaw" Guerrero'
    ]

    const [fighterScore, setFighterScore] = useState([]);
    const [fighterValue, setFighterValue] = useState([]);

    const [totalSeats, setTotalSeats] = useState("");
    const [totalTickets, setTotalTickets] = useState("");
    const [totalRevenue, setTotalRevenue] = useState("");


    // get all seats already bought
    useEffect(() => {
                
        const fetchSeatAvailability = async () => {

            // const response = await fetch('https://sirrocpromotions.onrender.com/api/ticket');
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

    

    // for each transaction, a fighter gets a point
    const findFighterSales = () => {

        let JesusCount=0;
        let AngelCount=0;
        let BrianCount=0;
        let CruzCount=0;
        let SandraCount=0;
        let KaranveerCount=0;
        let ChristianCount=0;
        let IsaiahCount=0;
        let DannyCount=0;
        let JessieCount=0;


        let JesusValue=0;
        let AngelValue=0;
        let BrianValue=0;
        let CruzValue=0;
        let SandraValue=0;
        let KaranveerValue=0;
        let ChristianValue=0;
        let IsaiahValue=0;
        let DannyValue=0;
        let JessieValue=0;


        let totalRev = 0;
        let soldCount = 0;
        let purchaseCount = 0;
    


        for (let i = 0; i < allTickets.length; i++) {

            const ticket = allTickets[i];
            // Check if the 'section' is not "scanned" AND the 'user' includes "@"
            if (ticket.section !== "scanned" && ticket.user.includes("@")) {
                
                purchaseCount++;

                // console.log(ticket.price);
                totalRev = totalRev + ticket.price

                if(ticket.seat.includes("!-")){
                    let seats = ticket.seat.split('!-')
                    
                    seats.forEach(() => {
                        soldCount++;
                    });
                }
                else{
                    soldCount++;
                }
                
            }
        };
        

        console.log(soldCount + "count");
        console.log(totalRev + "rev");

        setTotalSeats(soldCount);
        setTotalRevenue(totalRev);
        setTotalTickets(purchaseCount);



        
        for (let i = 0; i < allTickets.length; i++) {
            const ftr = allTickets[i].fighter;

            switch(ftr){
                case 'Jesus "Chiquito" Haro':
                    JesusCount+=1;
                    JesusValue+= parseFloat(allTickets[i].price)
                    break;

                case 'Angel Chavez "Firme" Cavazos':
                    AngelCount+=1;
                    AngelValue+= parseFloat(allTickets[i].price)
                    break;

                case 'Brian "Gallo" Giro Ramos':
                    BrianCount+=1;
                    BrianValue+= parseFloat(allTickets[i].price)
                    break;

                case 'Cruz Becerra Monteon':
                    CruzCount+=1;
                    CruzValue+= parseFloat(allTickets[i].price)
                    break;

                case 'Sandra Magallon':
                    SandraCount+=1;
                    SandraValue+= parseFloat(allTickets[i].price)
                    break;

                case 'Karanveer "Shikari" Singh':
                    KaranveerCount+=1;
                    KaranveerValue+= parseFloat(allTickets[i].price)
                    break;

                case 'Christian Palacios':
                    ChristianCount+=1;
                    ChristianValue+= parseFloat(allTickets[i].price)
                    break;

                case 'Isaiah "Pantera" Oresco':
                    IsaiahCount+=1;
                    IsaiahValue+= parseFloat(allTickets[i].price)
                    break;

                case 'Danny "Manitas De Piedra" Haro':
                    DannyCount+=1;
                    DannyValue+= parseFloat(allTickets[i].price)
                    break;

                case 'Jessie James "Outlaw" Guerrero':
                    JessieCount+=1;
                    JessieValue+= parseFloat(allTickets[i].price)
                    break;
            }


        }



        const fighterScores = [
            JesusCount, 
            AngelCount, 
            BrianCount, 
            CruzCount, 
            SandraCount, 
            KaranveerCount, 
            ChristianCount, 
            IsaiahCount, 
            DannyCount, 
            JessieCount
        ]

        setFighterScore(fighterScores)



        const fighterValues = [
            JesusValue, 
            AngelValue, 
            BrianValue, 
            CruzValue, 
            SandraValue, 
            KaranveerValue, 
            ChristianValue, 
            IsaiahValue, 
            DannyValue, 
            JessieValue
        ]

        setFighterValue(fighterValues)        

    };



    const DesktopView = () => {
        return(

            <Row style={{backgroundColor:"black", height:"", padding:"20px"}}>

                <Col>

                    <Row style={{height:"20vh", alignItems:"center", textAlign:"center"}}>   
                        <Col>   
                            <h1 style={{color:"#ffc107"}}>
                                Fighter Ticket Sales
                            </h1>
                        </Col>
                    </Row>



                    <Row>
                        <Col>
                            <Button onClick={()=>{findFighterSales()}}>
                                Refresh
                            </Button>
                        </Col>
                    </Row>


                    <Row style={{color:"white", fontSize:""}}>   
                        
                        
                        <Col xs=""sm=""md=""lg="" >

                            {/* totals */}
                            <Row style={{margin:"30px 0"}}>
                                <Col xs="4"sm="4"md="4"lg="4" >
                                
                                </Col>
                                
                                <Col xs="4"sm="4"md="4"lg="4" >
                                    Total seats: {totalSeats}
                                    <br></br>
                                    Total tickets: {totalTickets}
                                </Col>
                                
                                <Col xs="4"sm="4"md="4"lg="4" >
                                    Total revenue: ${totalRevenue}
                                </Col>
                                
                            </Row>

                            {/* Fighter data */}
                            {fighterNames.map((ftr, idx) => (
                            <Row key={idx} style={{backgroundColor:"", height:"", textAlign:"right"}}>
                                {/* fighter name */}
                                <Col style={{backgroundColor:"", height:""}}>
                                    <p>
                                        {ftr}
                                    </p>
                                </Col>
                                
                                
                                
                                
                                {/* fighter score */}
                                <Col>
                                
                                    <p>
                                        {fighterScore[idx]}
                                    </p>
                                
                                </Col>




                                {/* fighter value */}
                                <Col>
                                    <p>
                                        ${fighterValue[idx]}
                                    </p>
                                </Col>



                            </Row>
                            ))}
                     
                        </Col>

                    </Row>
                
                
                </Col>

            </Row>
            
        )
    };

    const MobileView = () => {
        return(

            <Row style={{backgroundColor:"black", height:""}}>

                <Col>

                    <Row style={{height:"20vh", alignItems:"center", textAlign:"center"}}>   
                        <Col>   
                            <h1 style={{color:"#ffc107"}}>
                                Fighter Ticket Sales
                            </h1>
                        
                        
                        </Col>

                    </Row>

                    <Row>
                        <Col>
                            <Button onClick={()=>{findFighterSales()}}>
                                Refresh
                            </Button>
                        </Col>
                    </Row>


                    <Row style={{color:"white"}}>   
                        {/* left side view */}
                        <Col xs="12"sm="12"md="6"lg="6" >
                            
                            {fighterNames.map((ftr, idx) => (
                            <Row key={idx} style={{backgroundColor:"", height:"", textAlign:"right"}}>
                                <Col style={{backgroundColor:"", height:""}}>
                                    <p>
                                        {ftr}
                                    </p>
                                </Col>
                            </Row>
                            ))}
                     
                        </Col>

                        {/* right side view */}
                        <Col xs="12"sm="12"md="6"lg="6">


                            {fighterScore.map((score, idx) => (
                            <Row key={idx} style={{backgroundColor:"", height:"", textAlign:""}}>
                                <Col style={{backgroundColor:"", height:""}}>
                                    <p>
                                        {score}
                                    </p>
                                </Col>
                            </Row>
                            ))}

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

export default AdminView;

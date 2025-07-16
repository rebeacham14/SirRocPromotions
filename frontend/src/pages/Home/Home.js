import 'bootstrap/dist/css/bootstrap.min.css'; // bootstrap capability


import Hero from '../../components/Hero/Hero.js';

import {Row, Card} from 'react-bootstrap';




const Home = () => {


  return (
    
    <div className="container-fluid" style={{backgroundColor:"black", height:"100vw"}}>
      
      {/* Hero section */}
      <Hero/>

      {/* Highlight Label + Button */}
      <Row style={{display:"flex", justifyContent:"center", padding:"5%"}}>
        <Card className='Our-camp-card' style={{width:"40vw" }}>
          
          <Card.Body style={{textAlign: 'center'}}>
            <Card.Title>More Content coming soon! </Card.Title>
            <Card.Text>
            </Card.Text>
            
            
            <div className='carousel-container'>
              <div className='carousel-item'>
                <p>
                  
                </p>
              </div>
            </div>

          </Card.Body>

        </Card>
      </Row>

      {/*
      <Row>


        <Col style={{display:"flex", justifyContent:"center"}} >
         
          <Card className='highlight-carousel-card' style={{margin:"5vw", width:"20vw"}}>
            
            <Card.Body>
              <center>
              <Card.Title>Highlights</Card.Title>
              </center>
              <Card.Text>
              </Card.Text>

              <div>
              </div>

              <center>
              <Button variant="primary">See All</Button>
              </center>

            </Card.Body>     

          </Card>

        </Col>

      </Row>
      */}

      {/* Highlight Carousel */}
      {/*
      <Row xs={1} md={3} className="g-4">
        {Array.from({ length: 9 }).map((_, idx) => (
          
          
          
          <Col key={idx}>
            <Card>
              <Card.Img variant="top" src="holder.js/100px160" />
              <Card.Body>
                <Card.Title>Card title</Card.Title>
                <Card.Text>
                  This is a longer card with supporting text below as a natural
                  lead-in to additional content. This content is a little bit
                  longer.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          
          
          
        ))}
      </Row>
      */}


      {/* Our Camp Section */}
      {/*
      <Card className='Our-camp-card'>
        
        <Card.Body style={{textAlign: 'center'}}>
          <Card.Title>Our Camp </Card.Title>
          <Card.Text>
          </Card.Text>
          
          <Row>
            <Col>
              Sponsors
            </Col>
            <Col>
              Fighters
            </Col>
            <Col>
              Staff
            </Col>
            
          </Row>
          
          <div className='carousel-container'>
            <div className='carousel-item'>
              <p>
                
              </p>
            </div>
          </div>

        </Card.Body>

      </Card>
      */}
      
      
      
    </div>    
    
    
    // <div>
    //   <h1>Welcome to the Home Page</h1>
    // </div>
  );
};

export default Home;

import 'bootstrap/dist/css/bootstrap.min.css';
import './BuyATicket.css';
import { useEffect, useState } from 'react';
import { Row, Col, Card, Button, Form, Container, ProgressBar } from 'react-bootstrap';
import TicketSectionSelection from '../../components/TicketSectionSelection/TicketSectionSelection.js';
import TicketFullSeatSelection from '../../components/TicketFullSeatSelection/TicketFullSeatSelection.js';
import TicketSingleSeatSelection from '../../components/TicketSingleSeatSelection/TicketSingleSeatSelection.js';
import TicketFighterSelection from '../../components/TicketFighterSelection/TicketFighterSelection.js';

function BuyATicket() {
  const [availableTickets, setSeatAvailability] = useState(null);
  const [rowType, setRowType] = useState('');
  const [isAtEnd, setAtEnd] = useState(false);
  const [user, setUser] = useState('');
  const [checkUser1, setCheckUser1] = useState('');
  const [checkUser2, setCheckUser2] = useState('');
  const [section, setSection] = useState('');
  const [seat, setSeatNumber] = useState('');
  const [price, setPrice] = useState(0);
  const [fighter, setFighter] = useState('');
  const [error, setError] = useState(null);
  const [step, setStep] = useState(1);
  const [needInfo, setNeedInfo] = useState(true);


  const progressValue = (step / 5) * 100;

  useEffect(() => {
    const fetchSeatAvailability = async () => {
      const response = await fetch('/api/ticket');
      const json = await response.json();
      if (response.ok) setSeatAvailability(json);
    };
    fetchSeatAvailability();
  }, []);

  const handleSeatChange = (e) => {
    const seatX = e.target.value;
    const row = seatX.charAt(0);
    setSeatNumber(seatX);
    if (['A', 'B', 'C', 'D', 'E'].includes(section.charAt(0))) {
      setPrice(row === 'A' || row === 'B' ? 92.5 : 67.5);
    } else if (section.charAt(0) === 'F') {
      setPrice(92.5);
    } else if (section.charAt(0) === 'G') {
      setPrice(115);
    }
    setAtEnd(true);
  };

  const onSetEmail = () => {
    if (
      checkUser1 &&
      checkUser1 === checkUser2 &&
      checkUser1.includes('@') &&
      checkUser1.includes('.')
    ) {
      setUser(checkUser1);
      setError(null);
      setStep(2);
    } else {
      setError('Emails must match and be valid.');
    }
  };

  const onBuyClick = () => {
    if (fighter && user && section && seat) {
      setError(null);
      handleBuy();
    } else {
      setError('Please complete all selections.');
    }
  };

  const handleBuy = () => {
    alert(`Purchasing ticket for ${fighter} at ${section} ${seat} - $${price}`);
  };

  const handleClear = () => {
    window.location.reload();
  };

  return (
    <div style={{ backgroundColor: '#000', minHeight: '100vh', color: '#fff' }}>
      {/* Header */}
      <div
        style={{
          background: 'linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.9)), url("/ticket-bg.jpg") center/cover',
          padding: '4rem 2rem',
          textAlign: 'center',
        }}
      >
        <h1 style={{ fontSize: '3rem', fontWeight: 'bold', color: '#ffc107' }}>Buy a Ticket</h1>
        <p style={{ color: '#ccc' }}>Select your seat, fighter, and checkout securely.</p>
      </div>

      <Container fluid className="py-4">
        <Row>
          {/* Main Area */}
          <Col lg={8} className="px-4">
            <ProgressBar
              now={progressValue}
              variant="warning"
              className="mb-4"
              style={{ height: '10px', borderRadius: '5px' }}
            />

            {/* Step 1: Email */}
            {step === 1 && (
              <Card className="glass-card mb-4">
                <Card.Body>
                  <h4 className="text-warning mb-3">Step 1: Enter Your Email</h4>
                  <Form.Control
                    type="email"
                    placeholder="Enter email"
                    className="mb-3"
                    value={checkUser1}
                    onChange={(e) => setCheckUser1(e.target.value)}
                  />
                  <Form.Control
                    type="email"
                    placeholder="Re-type email"
                    className="mb-3"
                    value={checkUser2}
                    onChange={(e) => setCheckUser2(e.target.value)}
                  />
                  <Button variant="warning" onClick={onSetEmail} className="w-100">
                    Continue
                  </Button>
                  {error && <p className="text-danger mt-2">{error}</p>}
                </Card.Body>
              </Card>
            )}

            {/* Step 2: Section */}
            {step === 2 && (
              <Card className="glass-card mb-4">
                <Card.Body>
                  <h4 className="text-warning mb-3">Step 2: Select Section</h4>
                  <TicketSectionSelection
                    onSectionChange={(sec) => {
                        setSection(sec);
                        setStep(3);
                    }}
                    setSeat={setSeatNumber}
                    rowType={setRowType}
                    isAtEnd={setAtEnd}     // ✅ setter function
                    needInfo={setNeedInfo}
                    setPrice={setPrice}
                    />

                </Card.Body>
              </Card>
            )}

            {/* Step 3: Seat */}
            {step === 3 && rowType && (
              <Card className="glass-card mb-4">
                <Card.Body>
                  <h4 className="text-warning mb-3">Step 3: Choose Seat</h4>
                  {rowType === 'full' && (
                    <TicketFullSeatSelection onSeatChange={handleSeatChange} isAtEnd={setAtEnd} />
                  )}
                  {rowType === 'single' && (
                    <TicketSingleSeatSelection onSeatChange={handleSeatChange} isAtEnd={setAtEnd} />
                  )}
                  {isAtEnd && setStep(4)}
                </Card.Body>
              </Card>
            )}

            {/* Step 4: Fighter */}
            {step === 4 && (
              <Card className="glass-card mb-4">
                <Card.Body>
                  <h4 className="text-warning mb-3">Step 4: Choose Fighter</h4>
                  <TicketFighterSelection
                   isAtEnd={setAtEnd}
                    onFighterChange={(f) => {
                        setFighter(f);
                    }}
                    
                    setFighter={(f) => {
                      setFighter(f);
                    }}
                    
                  />
            
                </Card.Body>
              </Card>
            )}

            {/* Step 5: Confirm */}
            {step === 5 && (
              <Card className="glass-card">
                <Card.Body className="text-center">
                  <h4 className="text-warning mb-3">Step 5: Confirm & Pay</h4>
                  <Button variant="warning" size="lg" className="w-100" onClick={onBuyClick}>
                    Buy Now - ${price.toFixed(2)}
                  </Button>
                  {error && <p className="text-danger mt-2">{error}</p>}
                </Card.Body>
              </Card>
            )}
          </Col>

          {/* Sidebar */}
          <Col lg={4} className="px-4 mt-4 mt-lg-0">
            <Card className="glass-card border-warning">
              <Card.Body>
                <h5 className="text-warning">Order Summary</h5>
                <hr className="border-warning" />
                <p><strong>Email:</strong> {user || '-'}</p>
                <p><strong>Section:</strong> {section || '-'}</p>
                <p><strong>Seat:</strong> {seat || '-'}</p>
                <p><strong>Fighter:</strong> {fighter || '-'}</p>
                <p className="h5 text-warning"><strong>Total:</strong> ${price.toFixed(2)}</p>
                <Button variant="outline-danger" size="sm" onClick={handleClear}>
                  Clear
                </Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default BuyATicket;





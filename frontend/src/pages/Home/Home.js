import 'bootstrap/dist/css/bootstrap.min.css';
import { Row, Col, Card, Button, Container } from 'react-bootstrap';
import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';
import logo from './SirRocPromotions_logo_trans.png';

const Home = () => {
  return (
    <div style={{ backgroundColor: "#000", minHeight: "100vh", color: "#fff" }}>

      {/* Hero Section */}
      <section
        style={{
          background: "linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.85)), url('/ticket-bg.jpg') center/cover",
          minHeight: "90vh",
          display: "flex",
          alignItems: "center",
        }}
      >
        <Container>
          <Row className="align-items-center">
            <Col lg={6}>
              <Card className="glass-card border-warning p-4">
                <Card.Body>
                  <Card.Title className="fw-bold fs-4 text-warning">Next Event</Card.Title>
                  <h1 className="display-4 fw-bold">
                    Apocalypto: The New Beginning
                    <span style={{ display: "block", color: "gold", fontSize: "1.5rem" }}>
                      May 24th
                    </span>
                  </h1>
                  <p className="mt-3 mb-4 lead text-light">
                    Doors Open <strong>6pm</strong> · First Bell <strong>7pm</strong>
                  </p>
                  <div className="d-flex gap-3 flex-wrap">
                    <Button variant="outline-light" size="lg" className="btn-hover">
                      Read More
                    </Button>
                    <Link to="/buyaticket">
                      <Button variant="warning" size="lg" className="btn-hover">
                        Buy a Ticket
                      </Button>
                    </Link>
                  </div>
                </Card.Body>
              </Card>
            </Col>
            <Col lg={6} className="text-center mt-4 mt-lg-0">
              <img
                src={logo}
                style={{ maxHeight: "350px", width: "auto", filter: "drop-shadow(0 0 10px gold)" }}
                alt="Sir Roc Promotions Logo"
              />
            </Col>
          </Row>
        </Container>
      </section>

      {/* Intro Section */}
      <Container className="text-center py-5">
        <h2 className="fw-bold mb-3">Welcome to Our Event</h2>
        <p className="lead text-muted mb-4">
          Experience the thrill, energy, and passion — more exciting content is coming soon!
        </p>
        <Button variant="outline-warning" size="lg" as={Link} to="/buyaticket" className="btn-hover">
          Buy a Ticket
        </Button>
      </Container>

      {/* Stay Tuned Card */}
      <Container className="pb-5">
        <Row className="justify-content-center">
          <Col md={6} lg={5}>
            <Card className="glass-card text-center shadow-lg border-warning p-4">
              <Card.Body>
                <Card.Title className="fw-bold fs-4 text-warning">Stay Tuned!</Card.Title>
                <Card.Text className="text-muted mb-4">
                  We're working hard to bring you exciting updates. Keep an eye on this space for
                  event highlights, fighter announcements, and behind-the-scenes footage.
                </Card.Text>
                <Button variant="outline-warning" size="sm" className="btn-hover">
                  See Highlights
                </Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>

      {/* Highlights */}
      <Container className="pb-5">
        <h3 className="fw-bold text-center mb-4">Event Highlights</h3>
        <Row xs={1} md={3} className="g-4">
          {[1, 2, 3].map((idx) => (
            <Col key={idx}>
              <Card className="highlight-card shadow-sm border-0">
                <div className="highlight-img-wrapper">
                  <Card.Img
                    variant="top"
                    src={`https://via.placeholder.com/400x200?text=Highlight+${idx}`}
                  />
                </div>
                <Card.Body>
                  <Card.Title>Highlight {idx}</Card.Title>
                  <Card.Text className="text-muted">
                    A glimpse into the excitement and energy of our last event.
                  </Card.Text>
                  <Button variant="outline-warning" size="sm" className="btn-hover">
                    View More
                  </Button>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default Home;


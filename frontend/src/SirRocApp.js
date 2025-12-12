import {BrowserRouter, Routes, Route} from 'react-router-dom';

// pages and components
import Home from './pages/Home/Home.js';
import Events from './pages/Events/Events.js';
import Fighters from './pages/Fighters/Fighters.js';
import OurCrew from './pages/OurCrew/OurCrew.js';
import BuyATicket from './pages/BuyATicket/BuyATicket.js';
import PaymentSuccess from './pages/PaymentSuccess/PaymentSuccess.js';
import Scanner from './pages/Scanner/Scanner.js';
import AdminView from './pages/AdminView/AdminView.js';
import NavBar from './components/NavBar/NavBar.js';


// import Footer from './components/Footer/Hero';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar /> 

        <div className="pages">
          <Routes>
            
            {/* <Route path="/" element={<Login /> } /> */}
            <Route path="/" element={<Home /> } />

            <Route path="/events" element={<Events /> } />
            <Route path="/fighters" element={<Fighters /> } />
            <Route path="/our-crew" element={<OurCrew /> } />
            <Route path="/buyaticket" element={<BuyATicket /> } />
            <Route path="/payment-success/" element={<PaymentSuccess /> } />
            <Route path="/admin-view/" element={<AdminView /> } />
            <Route path="/scanner/" element={<Scanner /> } />
            </Routes>
        </div>
        {/* <Footer /> */}
      </BrowserRouter>
    </div>
  );
}

export default App;

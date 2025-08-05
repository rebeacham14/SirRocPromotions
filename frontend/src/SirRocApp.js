import {BrowserRouter, Routes, Route} from 'react-router-dom';

// pages and components
import Home from './pages/Home/Home.js';
import BuyATicket from './pages/BuyATicket/BuyATicket.js';
import PaymentSuccess from './pages/PaymentSuccess/PaymentSuccess.js';
import AdminView from './pages/AdminView/AdminView.js';

import NavBar from './components/NavBar/NavBar.js';


// import Footer from './components/Footer/Hero';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        {/* <NavBar />  */}

        <div className="pages">
          <Routes>
            
            {/* <Route path="/" element={<Login /> } /> */}
            <Route path="/" element={<Home /> } />
            <Route path="/buyaticket" element={<BuyATicket /> } />
            <Route path="/payment-success/" element={<PaymentSuccess /> } />
            <Route path="/admin-view/" element={<AdminView /> } />
            
            </Routes>
        </div>
        {/* <Footer /> */}
      </BrowserRouter>
    </div>
  );
}

export default App;

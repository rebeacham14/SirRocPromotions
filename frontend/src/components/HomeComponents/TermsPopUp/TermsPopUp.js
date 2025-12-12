import './TermsPopUp.css';

import React from 'react';

const TermsPopUp = ({ show, onClose, onAccept }) => {
  if (!show) {
    return null;
  }

  return (
    <div className="popup-overlay">
      <div className="popup-content">
        <h2>Terms and Agreements</h2>
        <p>Please read and agree to our terms and conditions...</p>
        {/* Full terms and conditions content */}
        <p>
            Fighters, fights, dates, and locations are subject to change.
            <br></br>
            --------------------------------------------
            <br></br>

            LOST, STOLEN, OR DAMAGED TICKETS. It is the ticket holder's responsibility to keep this ticket safe. This ticket will not be replaced, or reissued if it is lost, stolen, damaged, or otherwise rendered inaccessible for any reason.
            <br></br>
            --------------------------------------------
            <br></br>
            TICKET SALES ARE FINAL AND NON-REFUNDABLE. This ticket is a limited, revocable license and its purchase constitutes an agreement to all terms and conditions. All sales are final, and no refunds, credits, or exchanges will be provided, even in cases of a lost, stolen, or destroyed ticket.
        </p>
        <button onClick={onAccept}>I Agree</button>
      </div>
    </div>
  );
};

export default TermsPopUp;

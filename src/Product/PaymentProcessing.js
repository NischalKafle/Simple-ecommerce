import React from 'react'
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { Link } from 'react-router-dom';
const PaymentProcessing = () => {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const cost = searchParams.get('cost');
  useEffect(() => {
    const modal = new window.bootstrap.Modal(document.getElementById('myModal'));
    modal.show();

    return () => {
      modal.dispose();
    };
  }, []);
  return (
    <div id="myModal" className="modal" tabIndex="-1">
    <div className="modal-dialog">
      <div className="modal-content">
        <div className="modal-header">
          <h5 className="modal-title">Congratulations</h5>
          <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div className="modal-body">
          <p>Your order is completed and total cost is:{cost}</p>
        </div>
        <div className="modal-footer">
          <Link to={`/thankyou`}>
            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Complete Order</button>
          </Link>
        
        </div>
      </div>
    </div>
  </div>
  )
}

export default PaymentProcessing
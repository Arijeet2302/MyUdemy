import React from 'react';
import '../admin/adminpage.css'; 

const AdminPage = () => {
  return (
    <div className="coming-soon-container">
      <h1>Coming Soon</h1>
      <p>We're working on something awesome. Stay tuned!</p>
      <div className="countdown-timer">
        <div>
          <span>00</span>
          <span>Days</span>
        </div>
        <div>
          <span>00</span>
          <span>Hours</span>
        </div>
        <div>
          <span>00</span>
          <span>Minutes</span>
        </div>
        <div>
          <span>00</span>
          <span>Seconds</span>
        </div>
      </div>
    </div>
  );
};

export default AdminPage;

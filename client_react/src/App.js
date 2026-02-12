import { useState } from 'react';
import "./App.css";

function App() {

  return (
    <div className="main-container">
      <div style={{ display: "flex", flexDirection: "column", margin: "auto" }}>
        <span>display: flex</span>
        <span>flex-direction: column</span>
      </div>


      <div className="header-container">
      </div>

      <div className="body-container">
        <div className="left-box">

          <span className="text-sample">Left Box</span>

        </div>

        <div className="right-box">

        </div>
      </div>

    </div>
  );
};

export default App;
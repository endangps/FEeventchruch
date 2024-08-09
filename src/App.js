import React from "react";
import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="schedule">
        <div className="schedule-header">
          <h1>JADWAL AGUSTUS 2024</h1>
          <h2>10 AGUSTUS 2024</h2>
        </div>
        <div className="schedule-body">
        <div className="schedule-item">
            <div className="schedule-title">
              <h3>YOUTH QUAKE WITH JEREMY MANTOFA</h3>
              <span className="location">AOG 1</span>
            </div>
            <div className="event-details">
              <p className="Mainhall">Mainhall</p>
              <div className="right-details">
                <p className="floor">3A<sup>FL</sup></p>
                <p className="time">17.00 - 18.45 <span className="wib">WIB</span></p>
              </div>
            </div>
          </div>
          <div className="schedule-item">
            <div className="schedule-title">
              <h3>YOUTH QUAKE WITH JEREMY MANTOFA</h3>
              <span className="location">AOG 2</span>
            </div>
            <div className="event-details">
              <p className="Mainhall">Mainhall</p>
              <div className="right-details">
                <p className="floor">3A<sup>FL</sup></p>
                <p className="time">17.00 - 18.45 <span className="wib">WIB</span></p>
              </div>
            </div>
          </div>
          <div className="schedule-item">
            <div className="schedule-title">
              <h3>SPECIAL SERVICE WITH PS. PHILIP MANTOFA</h3>
              <span className="location">UMUM 1</span>
            </div>
            <div className="event-details">
              <p className="trans-convention-center">Trans Convention Center</p>
              <div className="right-details">
                <p className="floor">3<sup>FL</sup></p>
                <p className="time">17.00 - 18.45 <span className="wib">WIB</span></p>
              </div>
            </div>
          </div>
          <div className="schedule-item">
            <div className="schedule-title">
              <h3>SPECIAL SERVICE WITH PS. PHILIP MANTOFA</h3>
              <span className="location">UMUM 2</span>
            </div>
            <div className="event-details">
              <p className="trans-convention-center">Trans Convention Center</p>
              <div className="right-details">
                <p className="floor">3<sup>FL</sup></p>
                <p className="time">13.00 - 13.45 <span className="wib">WIB</span></p>
              </div>
            </div>
          </div>
          <div className="schedule-item">
            <div className="schedule-title">
              <h3>SPECIAL SERVICE WITH PS. PHILIP MANTOFA</h3>
              <span className="location">UMUM 3</span>
            </div>
            <div className="event-details">
              <p className="trans-convention-center">Trans Convention Center</p>
              <div className="right-details">
                <p className="floor">3<sup>FL</sup></p>
                <p className="time">17.00 - 18.45 <span className="wib">WIB</span></p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="event-poster">
        <img
          src={`${process.env.PUBLIC_URL}/ppm.jpeg`}
          alt="The End Times Poster"
        />
      </div>
    </div>
  );
}

export default App;

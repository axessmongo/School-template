import React from 'react';

function Banner() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light"> 
      <div className="container">
       
        <a className="navbar-brand" href="#">
          Your Logo
        </a>

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <a className="nav-link" href="#">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#"  >
                About Us
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Classes
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Teachers
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Contact Us
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Banner;

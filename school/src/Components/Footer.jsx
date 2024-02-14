import React from 'react';

function Footer() {
  return (
    <footer className="footer bg-dark text-light py-4">
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <h5 className='fs-5 fw-5'>Quick Links</h5>
            <ul className="list-unstyled p-4 align-items-start">
              <li>About</li>
              <li>Courses</li>
              <li>Shop</li>
              <li>Contact</li>
              <li>Blog</li>
            </ul>
          </div>
          <div className="col-md-4">
            <h5>Customer Service</h5>
            <ul className="list-unstyled">
              <li>Recently Viewed</li>
              <li>New Products</li>
              <li>Shipping & Returns</li>
              <li>Senior Kg</li>
              <li>Become a Seller</li>
            </ul>
          </div>
          <div className="col-md-4">
            <h5>Contact Us</h5>
            <p>14/A, Kilix Home Tower, NYC</p>
            <p>Phone: 907-200-3462</p>
            <p>Email: Support@kindedo.com</p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;

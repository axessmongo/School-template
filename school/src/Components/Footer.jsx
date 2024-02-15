import React from 'react';

function Footer() {
  return (

    <div>
      {/* schoolfoot */}
      <section className='school-bg'>
        <div className='container pt-4'>
          <div className='row pt-5'>
            <div className='col-md-3' data-aos="fade-up" data-aos-duration="800">
              <div>
                <h1 className='display-5 fw-normal'>Schools</h1>
                <p className='fs-1' style={{ color: 'crimson' }}>6+</p>
              </div>
            </div>
            <div className='col-md-3' data-aos="fade-up" data-aos-duration="900">
              <div>
                <h1 className='display-5 fw-normal' >Students</h1>
                <p className='fs-1' style={{ color: 'crimson' }}>2300+</p>
              </div>
            </div>
            <div className='col-md-3' data-aos="fade-up" data-aos-duration="1000">
              <div>
                <h1 className='display-5 fw-normal'>Educators</h1>
                <p className='fs-1' style={{ color: 'crimson' }}>1200+</p>
              </div>
            </div>
            <div className='col-md-3' data-aos="fade-up" data-aos-duration="1100">
              <div>
                <h1 className='display-5 fw-normal'>Years</h1>
                <p className='fs-1' style={{ color: 'crimson' }}>15+</p>
              </div>
            </div>
          </div>
        </div>
      </section>



      <footer className="footer bg-dark text-light py-4">
        <div className="">
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
    </div>
  );
}

export default Footer;

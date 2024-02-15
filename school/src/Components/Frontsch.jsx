import React, { useEffect } from 'react';
import boy from '../Assets/image/boy.jpg'
import schoolimg from '../Assets/image/schoolimg.webp'
import schoolbg from '../Assets/image/school-bg-1.png'
import AOS from 'aos';
import 'aos/dist/aos.css';
export default function Frontsch() {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div>

      {/* about sec */}
      <section className='container'>
        <div className='row py-5'>
          <div className='col-md-5' data-aos="flip-left"
                                    data-aos-easing="ease-out-cubic"
                                    data-aos-duration="2000">
            <div>
              <img src={boy} alt="" className='img-fluid' />
            </div>
          </div>
          <div className='col-md-7'>
            <h1 className='display-2 pt-5' data-aos="zoom-in" data-aos-duration="800">About</h1>
            <p className='fs-5 pt-3' data-aos="fade-left"
                                     data-aos-duration="1500">Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque repellendus veniam dolor suscipit assumenda! Consequatur similique libero quaerat, vitae, impedit ut nostrum odit tempora doloribus animi unde sapiente harum hic.
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim, cupiditate repellat? Alias, expedita, cum inventore ut quis nostrum sed tempore sit, fugiat possimus repellat aliquid sunt totam nesciunt animi perspiciatis?Lorem ipsum
              dolor sit, amet consectetur adipisicing elit. Minus recusandae exercitationem est vel modi, unde nesciunt laboriosam numquam. Error accusamus vitae aperiam odit quis architecto aliquam tenetur a minus consequatur?
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore nesciunt, enim omnis libero asperiores minus numquam, voluptate dolorem in velit nulla iure reprehenderit, sint a. Quaerat alias eveniet atque cum.</p>
          </div>
        </div>
      </section>

      {/* bg sec */}
      <section>
        <div data-aos="zoom-in" data-aos-duration="1000">
          <img src={schoolbg} alt="" className='img-fluid' />
        </div>
      </section>
       
       {/* child sec */}
      <section className='container'>
        <div className='row py-3'>
          <div className='col-md-6'>
            <h1 className='display-3 fw-bold pt-4' data-aos="fade-right" data-aos-duration="1000">Unleashing Your Child's Fullest Potential!</h1>
            <p className='pt-2' data-aos="fade-right" data-aos-duration="1000"> American World provides a globalized education following Finnish, American and international standards. An entrepreneurial approach to learning that prepares children for success and promotes overall happiness.
            </p>
            <p className='pt-2' data-aos="fade-right" data-aos-duration="1000">At AWS, students learn entrepreneurship whether it’s through starting their own businesses or thinking like an entrepreneur. The end results are the acquired 21st Century skills and heightened awareness of how the world works so they thrive when they’re out there.
            </p>
          </div>
          <div className='col-md-6'>
            <div data-aos="zoom-in-up" data-aos-duration="1000">
              <img src={schoolimg} alt="" className='img-fluid' />
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}

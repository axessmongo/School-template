import React from 'react';
import scholar from '../Assets/image/scholarship.png'
import education from '../Assets/image/education.png'
import teacher from '../Assets/image/teacher.png'
import yellow from '../Assets/image/yellowdress.jpg'
import teach from '../Assets/image/teach.jpg'

export default function Footprints() {
    return (
        <div className='container'>
            {/* <div className="row">
                <div className="col-md-3 mb-4">
                    <div className="card bg-primary text-white">
                        <div className="card-body">
                            <img src={teacher} alt="" />
                            <h5 className="card-title">Expert teachers</h5>
                            <p className="card-text">Receive unparalleled guidance and knowledge from our team of expert teachers.</p>
                        </div>
                    </div>
                </div>
                <div className="col-md-3 mb-4">
                    <div className="card bg-secondary text-white">
                        <div className="card-body">
                            <img src={education} alt="" />
                            <img src="" alt="" />
                            <h5 className="card-title">Quality Education</h5>
                            <p className="card-text">Experience the transformative power of quality education, shaping minds and shaping futures.</p>
                        </div>
                    </div>
                </div>
                <div className="col-md-3 mb-4">
                    <div className="card bg-success text-white">
                        <div className="card-body">
                            <img src={supports} alt=""  />
                            <h5 className="card-title">Life Time Support</h5>
                            <p className="card-text">Benefit from our lifetime support, ensuring assistance and guidance whenever you need it.</p>
                        </div>
                    </div>
                </div>
                <div className="col-md-3 mb-4">
                    <div className="card bg-warning text-white">
                        <div className="card-body">
                            <img src={scholar} alt="" />
                            <h5 className="card-title">Scholarship News</h5>
                            <p className="card-text">Stay updated with the latest scholarship news to seize opportunities for education.</p>
                        </div>
                    </div>
                </div>
            </div> */}

            {/* cardsec */}
            <div className='row py-5'>
                <div className='col-md-3' data-aos="fade-down-right" data-aos-duration="1000">
                    <div className='cards p-3' >
                        <div>
                            <img src={scholar} alt="" className='img-fluid' />
                        </div>
                        <div>
                            <h5>Global Certificate</h5>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti, esse tempore. Fuga aspernatur Fuga Fuga</p>
                        </div>
                    </div>
                </div>
                <div className='col-md-3' data-aos="fade-down-left" data-aos-duration="1000">
                    <div className='cards p-3' >
                        <div>
                            <img src={education} alt="" className='img-fluid' />
                        </div>
                        <div>
                            <h5>Quality Education</h5>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti, esse tempore. Fuga aspernatur Fuga Fuga</p>
                        </div>
                    </div>
                </div>
                <div className='col-md-3' data-aos="fade-down-right" data-aos-duration="1000">
                    <div className='cards p-3'>
                        <div>
                            <img src={teacher} alt="" className='img-fluid' />
                        </div>
                        <div>
                            <h5>Awesome Teacher</h5>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti, esse tempore. Fuga aspernatur Fuga Fuga</p>
                        </div>
                    </div>
                </div>
                <div className='col-md-3' data-aos="fade-down-left" data-aos-duration="1000">
                    <div className='cards p-3'>
                        <div>
                            <img src={scholar} alt="" className='img-fluid' />
                        </div>
                        <div>
                            <h5>Global Certificate</h5>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti, esse tempore. Fuga aspernatur Fuga Fuga</p>
                        </div>
                    </div>
                </div>
            </div>
 
           {/* learning sec */}
            <section className='container'>
               <div className='row py-3'>
                <div className='col-md-4' data-aos="flip-left" data-aos-duration="1300">
                    <div>
                        <img src={yellow} alt="" className='img-fluid' />
                    </div>
                </div>
                <div className='col-md-4' >
                    <h1 data-aos="flip-up" data-aos-duration="800">Learning</h1>
                    <p data-aos="flip-up" data-aos-duration="800">Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis, deleniti ad temporibus quidem vero tempora a ut architecto quasi, eum facilis</p>
                    <h1 data-aos="flip-up" data-aos-duration="800">Speaking</h1>
                    <p data-aos="flip-up" data-aos-duration="800">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis perferendis, eius consequuntur quia molestiae repellat assumenda, quae, explicabo</p>
                </div>
                <div className='col-md-4' data-aos="flip-right" data-aos-duration="1300">
                    <div>
                        <img src={teach} alt="" className='img-fluid' />
                    </div>
                </div>
               </div>
            </section>


            {/* <div className='container mt-2'>
                <h2>SCHOOL FOOTPRINTS</h2>
                <div className='row mt-5'>
                    <div className='col-md-3'>
                        <div className='card p-3 bg-primary text-white'>
                            <h5 className="card-title">SCHOOLS</h5>
                            <h2 className="card-number">34</h2>
                        </div>
                    </div>
                    <div className='col-md-3'>
                        <div className='card p-3 bg-secondary text-white'>
                            <h5 className="card-title">STUDENTS</h5>
                            <h2 className="card-number">13,000</h2>
                        </div>
                    </div>
                    <div className='col-md-3'>
                        <div className='card p-3 bg-success text-white'>
                            <h5 className="card-title">EDUCATORS</h5>
                            <h2 className="card-number">1,200</h2>
                        </div>
                    </div>
                    <div className='col-md-3'>
                        <div className='card p-3 bg-info text-white'>
                            <h5 className="card-title">YEARS</h5>
                            <h2 className="card-number">11</h2>
                        </div>
                    </div>
                </div>
            </div> */}

        </div>

    );
}


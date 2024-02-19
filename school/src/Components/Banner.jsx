import carousel1 from '../Assets/image/carousel1.jpg'
// import carousel2 from '../Assets/image/carousel2.jpg'
import carousel2 from '../Assets/image/carousel-2.jpg'
import carousel3 from '../Assets/image/carousel-3.jpg'
import React, { useEffect, useState } from 'react';
import boy from '../Assets/image/boy.jpg'
import schoolimg from '../Assets/image/schoolimg.webp'
import schoolbg from '../Assets/image/school-bg-1.png'
import scholar from '../Assets/image/scholarship.png'
import education from '../Assets/image/education.png'
import teacher from '../Assets/image/teacher.png'
import yellow from '../Assets/image/yellowdress.jpg'
import teach from '../Assets/image/teach.jpg'
import sports from '../Assets/image/sports.jpg';
import reading from '../Assets/image/reading.jpg'
import dance from '../Assets/image/dance.jpg';
import singing from '../Assets/image/singing.jpg';
import art from '../Assets/image/art.jpg';
import craft from '../Assets/image/craft.jpg';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Link } from 'react-router-dom';

function Banner() {
    const [isZoomed, setIsZoomed] = useState(false);
    let gotoTop = (secID) => {
        const element = document.getElementById(secID);
        const navbarElement = document.querySelector('.navbar>.container-fluid');

        if (navbarElement) {
            var navHeight = navbarElement.clientHeight;
        }
        console.log(element)
        if (element) {
            const topPosition = element.getBoundingClientRect().top + window.scrollY;
            window.scrollTo({ top: topPosition - navHeight, behavior: 'smooth' });
        }
    }
    const handleZoom = () => {
        setIsZoomed(!isZoomed);
    };
    gotoTop();

    useEffect(() => {
        AOS.init();
    }, []);
    return (
        <div className=' overflow-hidden'>
            {/* nav sec */}
            <section className='nav-school'>
                <nav class="navbar navbar-expand-lg" id=''>
                    <div class="container-fluid">
                        <a class="navbar-brand text-light fs-1" href="#">Logo<span style={{ color: "lightgreen" }}> School</span></a>
                        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span class="navbar-toggler-icon"></span>
                        </button>
                        <div class="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul class="navbar-nav ms-auto mb-4  p-4 mb-lg-0 text-center ">

                                <li class="nav-item">
                                    <a class="nav-link active px-3" aria-current="page" id='name-nav' onClick={() => gotoTop('home')} >Home</a>
                                </li>

                                <li class="nav-item ">
                                    <a class="nav-link active px-3" aria-current="page" id='name-nav' onClick={() => gotoTop('about')}>About</a>
                                </li>

                                <li class="nav-item">
                                    <a class="nav-link active px-3" aria-current="page" id='name-nav' onClick={() => gotoTop('education')}>Education</a>
                                </li>

                                <li class="nav-item">
                                    <a class="nav-link active px-3" aria-current="page" id='name-nav' onClick={() => gotoTop('extra')}>Extra Activities</a>
                                </li>

                                <li class="nav-item border-end">
                                    <a class="nav-link active px-3" aria-current="page" id='name-nav' onClick={() => gotoTop('contact')}>Contact</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </section>
 
            <div className='buy-now d-flex justify-content-center align-items-center rounded-2'>
                <a href="https://axesstechnology.in/contact" target='_blank'>
                <button className='buy-now-bt'>BuyNow</button></a>
            </div>

            {/* carousel sec */}
             <section className='' id='home'>
                <div id="carouselExampleAutoplaying" class="carousel slide" data-bs-ride="carousel">
                    <div class="carousel-inner">
                        <div class="carousel-item active">
                            <img src={carousel1} class="d-block w-100 carousel-img" alt="..." />
                        </div>
                        <div class="carousel-item">
                            <img src={carousel2} class="d-block w-100 carousel-img" alt="..." />
                        </div>
                        <div class="carousel-item">
                            <img src={carousel3} class="d-block w-100 carousel-img" alt="..." />
                        </div>
                    </div>
                    <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
                        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span class="visually-hidden">Previous</span>
                    </button>
                    <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
                        <span class="carousel-control-next-icon" aria-hidden="true"></span>
                        <span class="visually-hidden">Next</span>
                    </button>
                </div>
            </section>

            {/* about sec */}
            <section className='container' id='about'>
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

            {/* cardsec */}
            <section className='container' id='education'>
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
            </section>

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

            {/* Extra sec */}
            <section className='container' id='extra'>
                <div className='row py-5'>
                    <h2>EXTRA CURRICULAR ACTIVITIES </h2>
                    <div className='col-md-4 mt-5' data-aos="zoom-in" data-aos-duration="800">
                        <div className='card zoom-out'>
                            <img src={art} alt="Art" className="img-fluid" />
                            <p className="fs-5 p-3 fw-bold">Art</p>
                        </div>
                    </div>
                    <div className='col-md-4 mt-5' data-aos="zoom-in" data-aos-duration="800">
                        <div className='card zoom-out'>
                            <img src={sports} alt="Sports" className="img-fluid" />
                            <p className="fs-5 p-3 fw-bold">Sports</p>
                        </div>
                    </div>
                    <div className='col-md-4 mt-5' data-aos="zoom-in" data-aos-duration="800">
                        <div className='card zoom-out'>
                            <img src={singing} alt="Singing" className="img-fluid" />
                            <p className="fs-5 p-3 fw-bold">Singing</p>
                        </div>
                    </div>
                    <div className='col-md-4 mt-5' data-aos="zoom-in" data-aos-duration="800">
                        <div className='card zoom-out'>
                            <img src={craft} alt="Craft" className="img-fluid" />
                            <p className="fs-5 p-3 fw-bold">Craft</p>
                        </div>
                    </div>
                    <div className='col-md-4 mt-5' data-aos="zoom-in" data-aos-duration="800">
                        <div className='card zoom-out'>
                            <img src={dance} alt="Dance" className="img-fluid" />
                            <p className='fs-5 p-3 fw-bold'>Dance</p>
                        </div>
                    </div>
                    <div className='col-md-4 mt-5' data-aos="zoom-in" data-aos-duration="800">
                        <div className='card zoom-out'>
                            <img src={reading} alt="Yoga" className="img-fluid" />
                            <p className="fs-5 p-3 fw-bold">Reading </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* schoolfoot */}
            <section className='school-bg' id='contact'>
                <div className='container py-5'>
                    <div className='row pt-3'>
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

export default Banner;

import React from 'react';
import sports from '../Assets/image/sports.jpg';
import reading from '../Assets/image/reading.jpg'
import dance from '../Assets/image/dance.jpg';
import singing from '../Assets/image/singing.jpg';
import art from '../Assets/image/art.jpg';
import craft from '../Assets/image/craft.jpg';

export default function Extra() {
    return (
        <div className='container'>
            <h2>EXTRA CURRICULAR ACTIVITIES </h2>
            <div className='row mt-4'>
                <div className='col-md-4 mt-5'>
                    <div className='card zoom-out'>
                        <img src={art} alt="Art" className="img-fluid" />
                        <p className="fs-5 p-3 fw-bold">Art</p>
                    </div>
                </div>
                <div className='col-md-4 mt-5'>
                    <div className='card zoom-out'>
                        <img src={sports} alt="Sports" className="img-fluid" />
                        <p className="fs-5 p-3 fw-bold">Sports</p>
                    </div>
                </div>
                <div className='col-md-4 mt-5'>
                    <div className='card zoom-out'>
                        <img src={singing} alt="Singing" className="img-fluid" />
                        <p className="fs-5 p-3 fw-bold">Singing</p>
                    </div>
                </div>
                <div className='col-md-4 mt-5'>
                    <div className='card zoom-out'>
                        <img src={craft} alt="Craft" className="img-fluid" />
                        <p className="fs-5 p-3 fw-bold">Craft</p>
                    </div>
                </div>
                <div className='col-md-4 mt-5'>
                    <div className='card zoom-out'>
                        <img src={dance} alt="Dance" className="img-fluid" />
                        <p className='fs-5 p-3 fw-bold'>Dance</p>
                    </div>
                </div>
                <div className='col-md-4 mt-5'>
                    <div className='card zoom-out'>
                        <img src={reading} alt="Yoga" className="img-fluid" />
                        <p className="fs-5 p-3 fw-bold">Reading </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

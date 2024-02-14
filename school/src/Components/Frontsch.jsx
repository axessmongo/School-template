import React from 'react';
import school from "../Assets/image/schoolF.jpg"
export default function Frontsch() {
  return (
    <div className='container-fluid'>
      <div className='background'>
       
        <div
          className='background-image'
          style={{
            backgroundImage: `url(${school})`,
          }}
        ></div>

        <div className='content text-center'>
          <h2>Welcome to our school</h2>
          <p>This is a paragraph with some content.</p>
        </div>
      </div>
    </div>
  );
}

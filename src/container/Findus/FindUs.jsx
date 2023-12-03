import React from 'react';

import { SubHeading } from '../../components';
import { images } from '../../constants';

const FindUs = () => (
  <div className="app__bg  section__padding" id="contact">


<div className="w-full z-2 flex__center flex-col lg:flex-row">
      <div className=" flex-one  flex-col ">
        <h1 className="headtext__cormorant" style={{ marginBottom: '3rem' }}>Find Us</h1>
        <div className="app__wrapper-content">
          <p className="p__opensans">Near Qatar Islamic Bank, 47576 Salwa Rd, Doha, Qatar</p>
          <p className="p__cormorant" style={{ color: '#DCCA87', margin: '2rem 0' }}>Opening Hours</p>
          <p className="p__opensans">Mon - Fri: 10:00 am - 02:00 am</p>
          <p className="p__opensans">Sat - Sun: 10:00 am - 03:00 am</p>
        </div>
      </div>

      <div className=" flex-one flex justify-start items-start flex-col text-left">
        <img src={images.aalishan3} alt="finus_img" className='md:w-5/6' />
      </div>
    </div>






    <div className="flex-row mt-20">
      <div className=" text-center">
        <h1 className="headtext__cormorant">We are also available on</h1>
      </div>
      <div className="flex-row mt-7 flex__center">
        <div className="avatar mx-5" >
          <div className="w-32 rounded-full">
            <img src={images.talibat} />
          </div>
        </div>
        <div className="avatar mx-5">
          <div className="w-32 rounded-full">
            <img src={images.deliveroo} />
          </div>
        </div>
        <div className="avatar mx-5">
          <div className="w-32 rounded-full">
            <img src={images.talibat} />
          </div>
        </div>
        <div className="avatar mx-5">
          <div className="w-32 rounded-full">
            <img src={images.deliveroo} />
          </div>
        </div>
        <div className="avatar mx-5 h-">
          <div className="w-32 rounded-full">
            <img src={images.talibat} />
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default FindUs;

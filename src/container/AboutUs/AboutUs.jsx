import React from 'react';
import { BsFillPlayFill, BsPauseFill } from 'react-icons/bs';
import { meal } from '../../constants';
import { images } from '../../constants';
import './AboutUs.css';

const AboutUs = () => {
  const vidRef = React.useRef();
  return (
  <div className="relative app__bg flex__center section__padding" id="about">
   
    <div className="w-full z-2 flex__center flex-col lg:flex-row">
      <div className=" flex-one flex justify-end items-end flex-col text-right">
        <h1 className="headtext__cormorant">About Us</h1>
        <img src={images.spoon} alt="about_spoon" className="spoon__img" />
        <p className="p__opensans mx-0 my-6 text-primary-gray">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis pharetra adipiscing ultrices vulputate posuere tristique. In sed odio nec aliquet eu proin mauris et. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis pharetra adipiscing ultrices vulputate posuere tristique. In sed odio nec aliquet eu proin mauris et.</p>
        
      </div>

      <div className="my-1 mx-2 lg:my-8 lg:mx-16 lg:rotate-0 rotate-90 flex__center">
      </div> 

      <div className=" flex-one flex justify-start items-start flex-col text-left">
      <video
        ref={vidRef}
        src={meal}
        type="video/mp4"
        loop
        controls={false}
        muted
        autoPlay
        className='w-full h-full object-cover'
      />
      
      </div>
    </div>
  </div>
);
};

export default AboutUs;

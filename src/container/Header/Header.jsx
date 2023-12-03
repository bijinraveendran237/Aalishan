import React from 'react';
import { Carousel } from "@material-tailwind/react";

import { SubHeading } from '../../components';
import { images } from '../../constants';
import './Header.css';

const Header = () => (
  <div className="app__bg m-auto flex flex-col justify-center items-center">
  <div className="mb-8 m-auto flex flex-col justify-center items-center">
  <SubHeading title=" "/>
      <h1 className="headtext__cormorant">Aalishan Celebrations</h1>
    </div>
  <div className="w-4/6 rounded-box mt-4 mb-12  h-[420px]" >
  <Carousel className="rounded-xl" loop= "false" autoplay= "true" autoplayDelay= "6000">
      <img
        src={images.poster1}
        alt="image 1"
        className="h-full w-full object-cover"
      />
      <img
        src={images.poster2}
        alt="image 2"
        className="h-full w-full object-cover"
      />
      <img
        src={images.poster3}
        alt="image 3"
        className="h-full w-full object-cover"
      />
    </Carousel>
</div>
</div>
);

export default Header;

import React from 'react';
import { Carousel, Typography, Card, CardHeader, CardBody, } from "@material-tailwind/react";

import { data, images } from '../../constants';
import './SpecialMenu.css';

const SpecialMenu = () => (
  <div className="flex-col bg-primary-black flex__center section__padding " id="menu" >
    <div>
      <div className="w-full z-2 flex__center flex-col lg:flex-row mt-10">
        <div className=" flex-one flex justify-end items-end flex-col text-right">
          <div className=" w-5/6 rounded-box mt-4 mb-12  h-[320px]" >
            <Carousel className="rounded-xl" >
              <img
                src={images.aalishan1}
                alt="image 1"
                className="h-full w-full object-cover"
              />
              <img
                src={images.aalishan1}
                alt="image 2"
                className="h-full w-full object-cover"
              />
              <img
                src={images.aalishan1}
                alt="image 3"
                className="h-full w-full object-cover"
              />
            </Carousel>
          </div>
        </div>

        <div className="my-1 mx-2 lg:my-4 lg:mx-8 lg:rotate-0 rotate-90 flex__center">
        </div>

        <div className=" flex-one flex justify-start items-start flex-col text-left">
          <h1 className="headtext__cormorant">First time here ?</h1>
          <img src={images.spoon} alt="about_spoon" className="spoon__img" />
          <p className="p__opensans mx-0 my-6 text-primary-gray">Adipiscing tempus ullamcorper lobortis odio tellus arcu volutpat. Risus placerat morbi volutpat habitasse interdum mi aliquam In sed odio nec aliquet. Adipiscing tempus ullamcorper lobortis odio tellus arcu volutpat. Risus placerat morbi volutpat habitasse interdum mi aliquam In sed odio nec aliquet.</p>

        </div>
      </div>
    </div>
    <div className="flex-row mt-20">
      <div className=" text-center">
        <h1 className="headtext__cormorant">What's in Store ?</h1>
      </div>
      <div className="flex-row mt-5">
        <div className="avatar mx-5" >
          <div className="w-32 rounded-full">
            <img src={images.store1} />
          </div>
        </div>
        <div className="avatar mx-5">
          <div className="w-32 rounded-full">
            <img src={images.store2} />
          </div>
        </div>
        <div className="avatar mx-5">
          <div className="w-32 rounded-full">
            <img src={images.store3} />
          </div>
        </div>
        <div className="avatar mx-5">
          <div className="w-32 rounded-full">
            <img src={images.store4} />
          </div>
        </div>
        <div className="avatar mx-5">
          <div className="w-32 rounded-full">
            <img src={images.store5} />
          </div>
        </div>
      </div>
    </div>


    <div className="flex-row mt-20 h-3/6 w-5/6">
      <div className="relative h-full w-full">
        <Card className="w-full max-w-5/6 flex-row h-[420px]">
          <CardBody>
            <h1 className="headtext__cormorant">Planning to gift your loved ones ?</h1>
            <Typography color="gray" className="mb-8 font-normal">
              Like so many organizations these days, Autodesk is a company in
              transition. It was until recently a traditional boxed software company
              selling licenses. Yet its own business model disruption is only part
              of the story
            </Typography>
          </CardBody>
          <CardHeader
            shadow={false}
            floated={false}
            className="m-0 w-3/5 shrink-0 rounded-r-none"
          >
            <img
              src={images.intro1}
              alt="card-image"
              className="h-full w-full object-cover"
            />
          </CardHeader>
        </Card>
      </div>
    </div>


    <div className="flex-row mt-20 h-[420px] w-5/6">
      <div className=" text-center">
        <h1 className="headtext__cormorant">All time favourites ?</h1>
      </div>
      <Carousel transition={{ type: 'tween', duration: 1 }} className="rounded-xl mt-10" loop="true" autoplay="true" autoplayDelay="5000">
        <div className="relative h-full w-full">
          <img
            src={images.poster1}
            alt="image 1"
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 grid h-full w-full place-items-center bg-black/75">
            <div className="w-3/4 text-center md:w-2/4">
              <Typography
                variant="h1"
                color="white"
                className="mb-4 text-3xl md:text-4xl lg:text-5xl"
              >
                The Beauty of Nature
              </Typography>
              <Typography
                variant="lead"
                color="white"
                className="mb-12 opacity-80"
              >
                It is not so much for its beauty that the forest makes a claim
                upon men&apos;s hearts, as for that subtle something, that quality
                of air that emanation from old trees, that so wonderfully changes
                and renews a weary spirit.
              </Typography>
            </div>
          </div>
        </div>
        <div className="relative h-full w-full">
          <img
            src={images.poster2}
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 grid h-full w-full place-items-center bg-black/75">
            <div className="w-3/4 text-center md:w-2/4">
              <Typography
                variant="h1"
                color="white"
                className="mb-4 text-3xl md:text-4xl lg:text-5xl"
              >
                The Beauty of Nature
              </Typography>
              <Typography
                variant="lead"
                color="white"
                className="mb-12 opacity-80"
              >
                It is not so much for its beauty that the forest makes a claim
                upon men&apos;s hearts, as for that subtle something, that quality
                of air that emanation from old trees, that so wonderfully changes
                and renews a weary spirit.
              </Typography>
            </div>
          </div>
        </div>
        <div className="relative h-full w-full">
          <img
            src={images.poster3}
            alt="image 3"
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 grid h-full w-full place-items-center bg-black/75">
            <div className="w-3/4 text-center md:w-2/4">
              <Typography
                variant="h1"
                color="white"
                className="mb-4 text-3xl md:text-4xl lg:text-5xl"
              >
                The Beauty of Nature
              </Typography>
              <Typography
                variant="lead"
                color="white"
                className="mb-12 opacity-80"
              >
                It is not so much for its beauty that the forest makes a claim
                upon men&apos;s hearts, as for that subtle something, that quality
                of air that emanation from old trees, that so wonderfully changes
                and renews a weary spirit.
              </Typography>
            </div>
          </div>
        </div>
      </Carousel>
    </div>
  </div>
);

export default SpecialMenu;

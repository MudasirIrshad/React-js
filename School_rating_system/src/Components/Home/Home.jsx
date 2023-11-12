import React from 'react'
import Footer from '../Footer'
import { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import './Home.css';
import Schools from './School Images/Schools.jsx'
// import required modules
import { Pagination, Navigation } from 'swiper/modules';
export default function Home() {
  return (
    <div className='homeMain'>
    
<Swiper
        pagination={{
          type: 'progressbar',
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >

        
        <SwiperSlide>
          <Schools name="Pakturk International School"
          description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam iure excepturi eaque, totam incidunt ab animi aperiam nesciunt voluptate vel praesentium labore rerum, ipsum natus?"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Schools name="Pakturk International School"
          description="Provide best quality education to every one"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Schools name="Pakturk International School"
          description="Provide best quality education to every one"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Schools name="Pakturk International School"
          description="Provide best quality education to every one"
          />
        </SwiperSlide>
       
      </Swiper>
       
      <Footer/>
    </div>
  )
}

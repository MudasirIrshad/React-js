import React from 'react'
import Footer from '../Footer'

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
import RunningLine from './School Images/RunningLine/RunningLine.jsx';
import OurSurvay from './School Images/OurSurvay/OurSurvay.jsx';
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
       <div className='bg-gray-400 rounded-xl w-50 flex flex-column items-center m-2 pr-3 pl-3 pt-1 pb-1'>
       <RunningLine/>
       <RunningLine/>
       </div>


      <OurSurvay/>
      <Footer/>
    </div>
  )
}

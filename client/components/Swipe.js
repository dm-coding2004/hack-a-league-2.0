'use client'
import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';



// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';



// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

export default function Swipe() {
  return (
<div className='bg-gradient-to-r from-orange-300 via-red-500 to-yellow-500 h-[100vh] w-full pt-16 items-center justify-center flex '>
        
      <Swiper 
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={false}
        modules={[Autoplay, Pagination, Navigation]}
        className="w-[1000px] h-[500px] inset-0 backdrop-filter backdrop-blur-lg shadow-2xl bg-[conic-gradient(at_left,_var(--tw-gradient-stops))] from-yellow-500 via-purple-500 to-blue-500"
      >
        <SwiperSlide className='text-center text-lg  flex justify-center items-center  ' ><div className='flex text-white font-semibold text-[30px] items-center justify-center mt-[238px]'><h1>Vilas -
            "Trial feedback"</h1></div></SwiperSlide>
        <SwiperSlide className='flex justify-center items-center  ' ><div className='flex text-white font-semibold items-center justify-center mt-[238px] '>Slide 2</div></SwiperSlide>
        <SwiperSlide className='text-center text-lg  flex justify-center items-center  ' ><div className='flex text-white font-semibold items-center text-center text-[30px]   justify-center mt-[238px] '>Slide 3</div></SwiperSlide>
        <SwiperSlide className='text-center text-lg  flex justify-center items-center  ' ><div className='flex text-white font-semibold items-center justify-center text-[30px] mt-[238px] '>Slide 4</div></SwiperSlide>
        <SwiperSlide className='text-center text-lg  flex justify-center items-center '   ><div className='flex text-white font-semibold items-center justify-center text-[30px] mt-[238px] '>Slide 5</div></SwiperSlide>
        <SwiperSlide className='text-center text-lg  flex justify-center items-center  ' ><div className='flex text-white font-semibold items-center justify-center text-[30px] mt-[238px] '>Slide 6</div></SwiperSlide>
        <SwiperSlide className='text-center text-lg  flex justify-center items-center ' ><div className='flex text-white font-semibold items-center justify-center text-[30px] mt-[238px]'>Slide 7</div></SwiperSlide>
        <SwiperSlide className='text-center text-lg  flex justify-center items-center ' ><div className='flex text-white  font-semibold items-center justify-center text-[30px] mt-[238px]'>Slide 9</div></SwiperSlide>
      </Swiper>
    </div>
  );
}
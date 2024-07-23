import React, { useRef, useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore from 'swiper';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import rightArrow from '../assets/right-arrow.jpg';
import leftArrow from '../assets/left-arrow.jpg';
import Image from 'next/image';
import Polygon1 from '../assets/Polygon 1.png';
import Polygon2 from '../assets/Polygon 2.jpg';
import { testimonialData } from '../utils/testimonialData';

import 'swiper/css';
import 'swiper/css/navigation';

SwiperCore.use([Navigation, A11y]);

const testimonials = testimonialData;

export default function MySwiperComponent() {
  const commonSlideStyle = {
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    width: '100vw',
    borderRadius: '20px',
  };

  const swiperRef = useRef(null);
  const [activeSlideIndex, setActiveSlideIndex] = useState(0);

  useEffect(() => {
    if (swiperRef.current && !swiperRef.current.swiper) {
      swiperRef.current.swiper = new SwiperCore(swiperRef.current, {
        spaceBetween: 250,
        centeredSlides: true,
        loop: true,
        breakpoints: {
          640: {
            slidesPerView: 1,
            spaceBetween: 250
          },
          1024: {
            slidesPerView: 1.9,
            spaceBetween: 250
          },
        },
        navigation: {
          nextEl: '.custom-next',
          prevEl: '.custom-prev',
        },
        on: {
          slideChange: () => {
            if (swiperRef.current && swiperRef.current.swiper) {
              setActiveSlideIndex(swiperRef.current.swiper.realIndex);
            }
          },
        },
        transition: {
          duration: 1500,
          ease: 'easeInOut',
        },
      });
    }
  }, []);

  const goNext = () => {
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.slideNext();
    }
  };

  const goPrev = () => {
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.slidePrev();
    }
  };

  return (
    <div className='p-4 pt-[40px] md:pt-[40px] pb-[48px] md:pb-0  lg:p-20 md:p-16 w-full relative overflow-hidden'>
      <p className="text-black text-[24px] md:text-[50px] font-bold font-ssp text-center pb-[30px] md:pb-20">What our users say</p>
      <div ref={swiperRef} className="swiper-container">
        <div className="swiper-wrapper md:min-w-[60vw]">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className={`swiper-slide z-10 min-w-[70vw] md:min-w-[70vw] lg:min-w-[40vw] lg:max-w-[50vw] relative before:content=['']`}
              style={{ ...commonSlideStyle, zIndex: 10 }}
            >
              <div style={{
                width: '100%',
                height: '100%',
                backdropFilter: 'blur(50px)',
                background: 'rgba(255, 255, 255, 0.7)', 
                border: '2px solid #36DBB3',
                padding: '20px',
                borderRadius: '20px'
              }}>
                <div style={{
                  width: '100%',
                  fontStyle: "normal",
                  fontWeight: 400,
                  lineHeight: "160%",
                }}
                  className='text-[14px] md:text-[20px] lg:text-[18px]'>
                  {testimonial.text}
                </div>
                <div className='flex items-center py-10'>
                  <Image src={testimonial.image} alt={testimonial.name} className='w-12 h-12 rounded-full' />
                  <div className='ml-4'>
                    <h4 className='text-sm md:text-lg font-bold'>{testimonial.name}</h4>
                  </div>
                </div>
              </div>
              {activeSlideIndex === index &&
                <>
                  <Image src={Polygon1} className='absolute -bottom-14 md:-bottom-40 -right-8 md:-right-40 w-[120px] md:w-[400px] -z-10' />
                  <Image src={Polygon2} className='absolute -top-6 md:-top-20 -left-10 md:-left-40 w-[100px] md:w-[400px] -z-10' />
                </>
              }
            </div>
          ))}
        </div>
        <div className='flex justify-center md:mt-6 gap-4 z-50 md:pt-14'>
          <div className="custom-prev" onClick={goPrev}>
            <Image src={leftArrow} alt="left arrow" className="w-10 h-10 md:w-16 md:h-16" />
          </div>
          <div className="custom-next" onClick={goNext}>
            <Image src={rightArrow} alt="right arrow" className="w-10 h-10 md:w-16 md:h-16" />
          </div>
        </div>
      </div>
    </div>
  );
}

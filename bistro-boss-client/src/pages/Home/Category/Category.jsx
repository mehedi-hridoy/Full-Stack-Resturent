import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
// import required modules
import { Pagination } from 'swiper/modules';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

import image1 from '../../../assets/home/slide1.jpg'
import image2 from '../../../assets/home/slide2.jpg'
import image3 from '../../../assets/home/slide3.jpg'
import image4 from '../../../assets/home/slide4.jpg'
import image5 from '../../../assets/home/slide5.jpg'
import image6 from '../../../assets/home/slide6.jpg'

import image8 from '../../../assets/home/slide8.jpg'
import image9 from '../../../assets/home/slide9.jpg'
import image10 from '../../../assets/home/slide10.jpg'
import image11 from '../../../assets/home/slide11.jpg'
import image12 from '../../../assets/home/slide12.jpg'

import image15 from '../../../assets/home/slide15.jpg'
import SectionTitle from '../../../components/SectionTitle/SectionTitle';

const Category = () => {
    return (
       <section>
        <SectionTitle
        subHeading={"From 11.00am to 10.00pm"}
        heading={"Order Online"}
        >

        </SectionTitle>
         <Swiper
        slidesPerView={5}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper mb-24"
      >
        <SwiperSlide>
            <img src={image1} alt="" />
            <h3 className='text-4xl uppercase text-center -mt-16 text-white'>Salad</h3>
        </SwiperSlide>
         <SwiperSlide>
            <img src={image2} alt="" />
            <h3 className='text-4xl uppercase text-center -mt-16 text-white'>Pizza</h3>
        </SwiperSlide>
         <SwiperSlide>
            <img src={image3} alt="" />
            <h3 className='text-4xl uppercase text-center -mt-16 text-white'>Soup</h3>
        </SwiperSlide>
         <SwiperSlide>
            <img src={image4} alt="" />
            <h3 className='text-4xl uppercase text-center -mt-16 text-white'>Pestry</h3>
        </SwiperSlide>
         <SwiperSlide>
            <img src={image5} alt="" />
            <h3 className='text-4xl uppercase text-center -mt-16 text-white'>Healty</h3>
        </SwiperSlide>
         <SwiperSlide>
            <img src={image6} alt="" />
            <h3 className='text-4xl uppercase text-center -mt-16 text-white'>Noodles</h3>
        </SwiperSlide>
      
         <SwiperSlide>
            <img src={image8} alt="" />
            <h3 className='text-4xl uppercase text-center -mt-16 text-white'>Burger</h3>
        </SwiperSlide>
         <SwiperSlide>
            <img src={image9} alt="" />
            <h3 className='text-4xl uppercase text-center -mt-16 text-white'>Fried Rice</h3>
        </SwiperSlide>
         <SwiperSlide>
            <img src={image10} alt="" />
            <h3 className='text-4xl uppercase text-center -mt-16 text-white'>Ramen</h3>
        </SwiperSlide>
         <SwiperSlide>
            <img src={image11} alt="" />
            <h3 className='text-4xl uppercase text-center -mt-16 text-white'>Cake</h3>
        </SwiperSlide>
         <SwiperSlide>
            <img src={image12} alt="" />
            <h3 className='text-4xl uppercase text-center -mt-16 text-white'>Kababs</h3>
        </SwiperSlide>
     
        <SwiperSlide>
            <img src={image15} alt="" />
            <h3 className='text-4xl uppercase text-center -mt-16 text-white'>Chicken</h3>
        </SwiperSlide>

        
      </Swiper>
       </section>
    );
};

export default Category;
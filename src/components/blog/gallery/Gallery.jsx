import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation, Autoplay, EffectFade } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

function Gallery() {
  return (
    <div>
       
    <div className="second-details-title">
             <div className="second-details-title-img"> <img src="" alt="" /></div>
             <h3> Gallery </h3>
           </div>
     
     < Swiper 
                slidesPerView={3}
                effect
                spaceBetween={30}
                loop={true}
                pagination={{
                  clickable: true
                }}
                  navigation={true}
                  autoplay={{delay: 3000, disableOnInteraction: false}}
                  
                  modules={[Pagination, Navigation , Autoplay , EffectFade]}
                  className="admission-swiper-container"
                  >

                      <SwiperSlide> 
                         <div className="swiper-image">
                         <img src="/high1.jpg" alt="" />
                         </div>
                      </SwiperSlide>

                      <SwiperSlide> 
                         <div className="swiper-image">
                         <img src="/high2.jpg" alt="" />
                         </div>
                      </SwiperSlide>

                      <SwiperSlide> 
                         <div className="swiper-image">
                         <img src="/high3.jpg" alt="" />
                         </div>
                      </SwiperSlide>

                      <SwiperSlide> 
                         <div className="swiper-image">
                         <img src="/high4.jpg" alt="" />
                         </div>
                      </SwiperSlide>
                      <SwiperSlide> 
                         <div className="swiper-image">
                         <img src="/high6.jpg" alt="" />
                         </div>
                      </SwiperSlide>
                      <SwiperSlide> 
                         <div className="swiper-image">
                         <img src="/high7.jpg" alt="" />
                         </div>
                      </SwiperSlide>
                      <SwiperSlide> 
                         <div className="swiper-image">
                         <img src="/high8.jpg" alt="" />
                         </div>
                      </SwiperSlide>
                      <SwiperSlide> 
                         <div className="swiper-image">
                         <img src="/high9.jpg" alt="" />
                         </div>
                      </SwiperSlide>

               </Swiper>
             {/* the image swiper end  */}
          

 </div>

  )
}

export default Gallery
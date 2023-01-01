import React from "react";
import "./Home.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation, Autoplay, EffectFade } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import Statistic from "../statistics/Statistic";
import Highlight from "./highlight/Highlight";
import Footer from "../../footer/Footer";
function Home() {
  return (
    <div className="Home">
      <div className="admission-container">
        {/* the image swiper start  */}
        <Swiper
          slidesPerView={1}
          effect
          // spaceBetween={30}
          loop={true}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          autoplay={{ delay: 2000, disableOnInteraction: false }}
          modules={[Pagination, Navigation, Autoplay, EffectFade]}
          className="admission-swiper-container"
        >
          <SwiperSlide>
            <div className="swiper-image">
             
                <img src="/back1.jpg" className="image" alt="" />
             
              
              
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="swiper-image">
           
                <img src="/back5.jpg" className="image" alt="" />
              
              
              
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="swiper-image">
           
                <img src="/back4.jpg" className="image" alt="" />
            
            </div>
          </SwiperSlide>
        </Swiper>
        <div className="container1">
                <h1>Apeki-Amizero</h1>
                {/* <h2>Primary and nursery school</h2> */}
                {/* <button className="ab-button">Read more</button> */}
                <div className="container1-desc">Get to know more about <span>APEKI</span>Amizero</div>

                {/* <div className="buttons">
            <button className="ab-button">About Ongeera</button>
            <button className="wa-button" > <span><img className="watch" src="/watch.png" alt="" /></span> Watch Video</button>
        </div> */}
              </div>
      </div>
      
      <div>
        <div className='upper-lines'><img  src="" alt =""/></div>
        {/* <div className='title-foreword'>
        <img  src={dots} alt =""/>
        <div className='foreword'>
        <h3>Principal's Foreword</h3>
        <p>Edward Munyaburanga,HIghland School</p>
        </div>
        </div> */}

<div className="second-details-title">
                {/* <div className="second-details-title-img"> <img src="/hdtchr2.jpg" alt="" /></div> */}
                <div className="second-details-title-text">Principal’s Foreword  </div>
              </div>

        <div className='center-lan' >
            <div className='word-of'>
           <div className="word-of-container">
           <p>
                "Education in Apeki-Amizero will always reflect the confidence we have in our
                student's ability and our aim to prepare students for the challenges of the future"</p>
                <br/>
                 <p>"We continually blaze new trials for our students to discover new learning opportunities
                 that will enable them to be wholesome individuals who believe in themselves and what the future can offer
                 the.At APEKI-AMIZERO,there is a healthy emphasis on both curicular and co-curricular programmes".
              </p>
           </div>
            </div>
            <div className='image-of'>
            <img  src="/hdtchr.jpg" alt =""/>
              <h3>Principal's foreword</h3>
              <p>Mutumwinka Awunnick  </p>
            </div>

        </div>
        <div className='down-lines'><img  src="" alt =""/></div>



        

        
        
    
    </div>
    <Statistic/>
    <Highlight/>
    <Footer/>
    
    </div>
  );
}

export default Home;

import React from "react";
import "./About.css";
// import Video from './wok.mp4';
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation, Autoplay, EffectFade } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import Navbar from "../navbar/Navbar";
import Footer from "../footer/Footer";
import News from "./news/News";
import Values from "./Value";
import Testimony2 from "./testimonials/Testimony";
function About() {
  return (
    <div>
      
      <div className="about-video">
        
        <video src="/apeki.mp4" autoPlay={true} loop={true} muted />
      </div>
      <div className="about-desc">
        <h1>ABOUT US</h1>
        <div className="a-words">
          Get to know more About Apeki-Amizero school
        </div>

       
      </div>
      <div   id="about" >
      <News />
      </div>
     
      <h3 style={{textAlign:"center"}}  > Our Values</h3>
      <div className="values-container">
       
      {
        Values.map((value,id)=>{
          return(
            <div className="values" key={id}>
            <div className="value-img">
            <img src={value.img} alt="" />
            </div>
            <div className="value-text">
              {value.text}
            </div>
          </div>
          )
        })
      }
      </div>
     
   
      <Testimony2/>
      <Footer />
    </div>
  );
}

export default About;

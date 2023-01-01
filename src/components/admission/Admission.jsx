import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation, Autoplay, EffectFade } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import Level from "./Levels";
import "./Admission.css";
import Heads from "./info";
import Footer from "../footer/Footer";

function Admission() {
  return (
    <div>
      <div className="about-video">
        {/* <video src="/apeki.mp4" autoPlay={true} loop={true} muted /> */}
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
                <img src="/contact1.jpg" className="image" alt="" />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="swiper-image">
                <img src="/contact2.jpg" className="image" alt="" />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="swiper-image">
                <img src="/contact3.jpg" className="image" alt="" />
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
      <div className="about-desc">
        <h1>ADMISSION</h1>
        <div className="a-words">
          {/* Get to know more About Apeki-Amizero school */}
          Study in Apeki-Amizero to have a bright future
        </div>
        <button className="ab-button">
          {" "}
          <a href="#admission" style={{ textDecoration: "none", color: "white" }}>
            Details
          </a>{" "}
        </button>
      </div>
      
      <h3 style={{ textAlign: "center" }} id="admission">Fees structures</h3>
      
      <div className="levels-container">
        {Level.map((level) => {
          return (
            <div className="level-card" key={level.id}>
              <div className="level-image">
                <img src={level.photo} className="l-img" alt="" />
              </div>
              <h2>{level.level}</h2>
              <h4>{level.desc}</h4>
              <button className="ab-button" ><a style={{ textDecoration: "none", color: "white" }} href="https://drive.google.com/file/d/108YkcXUZUQmT6pieW18wjrv3opmpMAed/view?usp=sharing">VIEW PDF</a> </button>
            </div>
          );
        })}
      </div>
      <h3 style={{ textAlign: "center" }} >How to Apply</h3>
      <div className="apply">
        We are delighted that you have chosen to apply to Apeki Amizero School.
        Apeki utilizes the SchoolAdmin application and enrollment portal. The
        general process consists of the following steps.
      </div>
      <h3 style={{ textAlign: "center" }}>Application process</h3>
      <div className="process-container">
        <div className="process-card">
          <div className="p-number">1</div>
          <h4>Choose Level</h4>
          <p>
            Choose which level you want to enroll your child in and then follow
            to the next part of the procedure.
          </p>
        </div>
        <div className="process-card">
          <div className="p-number">2</div>
          <h4>Requirements</h4>
          <p>
            In order to fulfill the procedure , you have to have all the
            requirements
          </p>
        </div>
        <div className="process-card">
          <div className="p-number">3</div>
          <h4>Registration fees</h4>
          <p>
            For the procedure to take place, there is a ceratin amount of fee
            you pay. View
            the requirements to see the amount.
          </p>
        </div>
        
       

          
        
      </div>
      <div className="info">
        <h3 style={{ textAlign: "center",marginTop:"20px" }}>For more information...</h3>
        <div className="infos-container">
            { Heads.map((info)=>{
              return(
                <div className="infos-card">
                <div className="infos-image">
                  <img src={info.photo} className="i-image" alt="" />
                  
                </div>
                <h3>{info.name}</h3>
                <h4>{info.role}</h4>
                <h5>{info.contact}</h5>
              </div>
              )
             
            })}
          </div>
          <Footer/>
      </div>
    </div>
  );
}

export default Admission;

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation, Autoplay, EffectFade } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import Form from "./form/Form";
import "./Contact.css";
import Footer from "../footer/Footer";

function Contact() {
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
        <h1 >Our Contact</h1>
        <div className="a-words">
          {/* Get to know more About Apeki-Amizero school */}
          On more information Contact Apeki-Amizero
        </div>
        <button className="ab-button"> <a href="#contact" style={{textDecoration:"none",color:"white"}}>Details</a> </button>
      </div>
      <h3 style={{ textAlign: "center" }} id="contact">Our Contacts</h3>
      <div className="contact-container" >
        <div className="map">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2261.8281088639765!2d30.668470911067892!3d-2.276470416428902!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x19c4c56e5ce1d51d%3A0x8024facc94a7601b!2sAPEKI%20-%20Amizero%20Primary%20School!5e0!3m2!1sen!2srw!4v1662579704550!5m2!1sen!2srw"
            width="600"
            height="350"
            style={{ border: "0" }}
            allowFullScreen
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
        <div className="form">
          <Form />
        </div>
      </div>
      <div className="c-btm-container">
        <div className="c-btm">
        <div className="c-image">
          <img src="/call.svg" alt="" />
        </div>
        <h4>Call</h4> 
        
        <h4>0788876362</h4>
        </div>
        <div className="c-btm">
        <div className="c-image">
          <img src="/message.svg" alt="" />
        </div>
        <h4>Email</h4> 
        
        <h4>info@appeki@gmail.com</h4>
        </div>
        <div className="c-btm">
        <div className="c-image">
          <a href="https://web.facebook.com/profile.php?id=100085223874430"><img src="/facebook.svg" alt="" /></a>
          
        </div>
        <h4>Facebook</h4> 
        
        <h4> <a href="https://web.facebook.com/profile.php?id=100085223874430" style={{color:"black",textDecoration:"none",cursor:"pointer"}}>Apeki-Amizero school</a></h4>
        </div>
       
        
      </div>
      <Footer/>
    </div>
  );
}

export default Contact;

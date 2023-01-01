import React from "react";
import "./testimonials.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation, Autoplay, EffectFade } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
function Testimony() {
  return (
    <div>
      <div className="about-details-testiomony-description">
        <Swiper
          slidesPerView={1}
          effect
          // spaceBetween={30}
          loop={true}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          autoplay={{ delay: 5000, disableOnInteraction: true }}
          modules={[Pagination, Navigation, Autoplay, EffectFade]}
          className="mySwiper"
        >
          <SwiperSlide>
            <div className="about-details-testiomony-description-container">
              <div className="about-details-testimony-description-container-img">
                <img src="/baptiste.jpg" alt="" className="image-details" />
              </div>
              <div className="about-details-testimony-description-container-message">
                <div className="about-details-testimony-description-container-tilte">
                  {" "}
                  Munyemana J.Baptiste{" "}
                </div>
                <div className="about-details-testimony-description-container-role">
                  Legal Representative
                </div>
                <div className="about-details-testimony-description-container-message">
                  {" "}
                  Parents serve as the first teachers of their kids during the
                  early years. The responsibility of teaching doesn't end when a
                  child starts going to school. Often, children will need help
                  in their assignments – in math, science, and social studies.
                  It is the parent's job to show how exciting and useful
                  learning can be
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="about-details-testiomony-description-container">
              <div className="about-details-testimony-description-container-img">
                <img src="/bosco.jpg" alt="" className="image-details" />
              </div>
              <div className="about-details-testimony-description-container-message">
                <div className="about-details-testimony-description-container-tilte">
                  {" "}
                  Rurangwa Bosco{" "}
                </div>
                <div className="about-details-testimony-description-container-role">
                  Vice Legal Representative
                </div>
                <div className="about-details-testimony-description-container-message">
                  
                  Parents serve as the first teachers of their kids during the
                  early years. The responsibility of teaching doesn't end when a
                  child starts going to school. Often, children will need help
                  in their assignments – in math, science, and social studies.
                  It is the parent's job to show how exciting and useful
                  learning can be
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="about-details-testiomony-description-container">
              <div className="about-details-testimony-description-container-img">
                <img src="/bosco.jpg" alt="" className="image-details" />
              </div>
              <div className="about-details-testimony-description-container-message">
                <div className="about-details-testimony-description-container-tilte">
                  {" "}
                  Murangwa Alfred{" "}
                </div>
                <div className="about-details-testimony-description-container-role">
                  Treasure{" "}
                </div>
                <div className="about-details-testimony-description-container-message">
                  {" "}
                  Parents serve as the first teachers of their kids during the
                  early years. The responsibility of teaching doesn't end when a
                  child starts going to school. Often, children will need help
                  in their assignments – in math, science, and social studies.
                  It is the parent's job to show how exciting and useful
                  learning can be
                </div>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
}

export default Testimony;

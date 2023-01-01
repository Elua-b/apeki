import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation, Autoplay, EffectFade } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./Blog.css";
import Gallery from "./gallery/Gallery";
import Footer from "../footer/Footer";
function Blog() {
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
                <img src="/blog1.jpg" className="image" alt="" />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="swiper-image">
                <img src="/intr.jpg" className="image" alt="" />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="swiper-image">
                <img src="/blog3.jpg" className="image" alt="" />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="swiper-image">
                <img src="/intr2.jpg" className="image" alt="" />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="swiper-image">
                <img src="/intr3.jpg" className="image" alt="" />
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
      <div className="about-desc">
        <h1>Our Blog</h1>
        <div className="a-words">
          {/* Get to know more About Apeki-Amizero school */}
          Apeki Amizero's News and events
        </div>
        <button className="ab-button">
          <a href="#blog" style={{ textDecoration: "none", color: "white" }}>
            Details
          </a>{" "}
        </button>
      </div>
      <h3 style={{ textAlign: "center" }} id="blog">
        OUR BLOG
      </h3>
      <div className="blog-container">
        <div className="blog-card">
          <div className="blog-image">
            <img src="/hdtchr.jpg" width="500" alt="" />
          </div>
          <div className="blog-head">
            <h4>Head-teacher</h4>
            <p className="blog-sents">
              Welcome to Apeki-Amizero Primary School’s website. We hope you
              enjoy looking around our site and getting to know our school. We
              want our children to have a love for learning and the chance to
              experience activities across the whole curriculum. Our recent
              curriculum review has ensured we not only cover the requirements
              of the national curriculum, but after consultation with the whole
              school community, the children develop personally to help them
              grow into responsible citizens and have as many experiences as
              possible during their time with us.
            </p>
          </div>
          <button className="ab-button" style={{ width: "30%" }}>
            Read more
          </button>
        </div>
        <div className="blog-card">
          <div className="blog-image">
            <img src="/mugonyi.png" width="400" height={500} alt="" />
          </div>
          <div className="blog-head">
            <h4>Director of studies</h4>
            <p className="blog-sents">
              It will be cheating to embark on educative issues in Apeki-Amizero
              primary school without passing a word of appreciation to the
              proprietor who has kept to the vision of this institution and
              seeing to it that the institution strives to greater heights.
              Madam Awunnick thank you for this vision which answers the
              government’s strategy of reducing illiteracy and also creating
              employment opportunities to Rwandans. The senior Administrator who
              ensures that all academic and non-academic affairs are well
              handled in this institution. The head teacher and the staff for
              the academic Excellency reached as we educate to build the nation.
            </p>
          </div>
          <button className="ab-button" style={{ width: "30%" }}>
            Read more
          </button>
        </div>
        <div className="blog-card">
          <div className="blog-image">
            <img src="/abra.jpg" width="500" alt="" />
          </div>
          <div className="blog-head">
            <h4>Head of English Department</h4>
            <p className="blog-sents">
              While some people think it’s easy, the role of a teacher is very
              challenging and equally important. It is their responsibility to
              impart the correct knowledge and in the right manner. They have to
              teach methodically for which they prepare their lessons
              beforehand. Thus, they are able to motivate their students through
              the use of accurate techniques. A good teacher gives homework to
              their students also checks it regularly for a better practice.
              Further, they plan meticulously for a better teaching pattern. At
              the beginning of the year, they plan the whole syllabus out for a
              smooth teaching experience.
            </p>
          </div>
          <button className="ab-button" style={{ width: "30%" }}>
            Read more
          </button>
        </div>
        <div className="blog-card">
          <div className="blog-image">
            <img src="/musafiri.jpg" width="500" height="500" alt="" />
          </div>
          <div className="blog-head">
            <h4>Head of Mathematics Department</h4>
            <p className="blog-sents">
              Teachers play a very important role in shaping the future of their
              students. Right from kindergarten to university, they are the ones
              who impart knowledge and teach us about everything important.
              Moreover, they also teach us about ethical values and imbibe in
              our moral values. Thus, we can say that teachers shape our
              personality into something very strong and wonderful. A world
              without teachers would be definitely chaotic. There are only a few
              people in our lives who impact our world, and teachers are
              definitely one of them.
            </p>
          </div>
          <button className="ab-button" style={{ width: "30%" }}>
            Read more
          </button>
        </div>
      </div>

      <Gallery />
      <Footer />
    </div>
  );
}

export default Blog;

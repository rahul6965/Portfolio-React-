import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import Frame1 from "../assets/images/Frame1.png"
import Frame3 from "../assets/images/Frame3.png"
import techsagaae from "../assets/images/techsaga-ae.png"
import techsagaus from "../assets/images/techsaga-us.png"
import zolazwebsite from "../assets/images/zolaz-website.png"
import popconimg from "../assets/images/popcon (2).png"
import maitwebsite from "../assets/images/maitwebsite.png"
import clinicimg from "../assets/images/clinicimg.png"
import Frame from "../assets/images/3Frame.png"
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// import "./ImageSlider.css"; // custom styling

export default function ImageSlider({SwiperRef}) {
const images = [
  {
    img: Frame1,
    link: "https://www.mait.com/aisummit2025/",
  },
  {
    img: Frame3,
    link: "https://ridnova.com/",
  },
  {
    img: Frame,
    link: "https://www.amiohio.edu/home",
  },
  {
    img: clinicimg,
    link: "http://174.138.76.229/clinic-crm",
  },
  {
    img: techsagaae,
    link: "https://techsaga.ae/",
  },
  {
    img: techsagaus,
    link: "https://www.techsaga.us/",
  },
  {
    img: zolazwebsite,
    link: "http://174.138.76.229/sci-lms/parent/demo1/index.html",
  },
  {
    img: popconimg,
    link: "http://174.138.76.229/popcon/",
  },
  {
    img: maitwebsite,
    link: "https://mait.com/",
  },

];


  return (
    <div ref={SwiperRef} className="slider-container py-5 my-5">

      {/* <div class="timeline-header"><h1>My Project</h1></div> */}
        <div class="contact-title"><div class="contact-bg-text">Project</div><div class="contact-main-title"><h2>My Project</h2></div></div>
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={20}
        navigation={{
          nextEl: ".custom-next",
          prevEl: ".custom-prev",
        }}
        pagination={{
          el: ".custom-pagination",
          clickable: true,
        }}
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
        }}
        breakpoints={{
          320: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 4 },
        }}
      >
       {images.map((item, index) => (
  <SwiperSlide key={index}>
    <a className="swiperimg" href={item.link} target="_blank" rel="noopener noreferrer">
      <img src={item.img} alt="" />
    </a>
  </SwiperSlide>
))}
      </Swiper>

      {/* Custom Buttons */}
      <button className="custom-prev">❮</button>
      <button className="custom-next">❯</button>

      {/* Custom Pagination */}
      <div className="custom-pagination"></div>
    </div>
  );
}

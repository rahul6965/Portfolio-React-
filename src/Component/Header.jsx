import React, { useEffect, useState } from 'react'

export default function Header({
  scrollToSection,
  ExprinceRef,

  SkillRef,
  SwiperRef,
  ContactRef
}) {
    const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className={isSticky ? "header cussticky" : "header"}>
      <nav className="navbar navbar-expand-lg">
    <div className="container">
          
  <a className="navbar-brand" href="#">Rahul</a>
  
  <button
    className="navbar-toggler"
    type="button"
    data-bs-toggle="collapse"
    data-bs-target="#navbarNav"
  >
    <span className="navbar-toggler-icon"></span>
  </button>

  <div className="collapse navbar-collapse justify-content-center" id="navbarNav">
    <ul className="navbar-nav">

      <li className="nav-item">
        <span
          className="nav-link"
          style={{ cursor: "pointer" }}
          onClick={() => scrollToSection(ExprinceRef)}
        >
          Experience
        </span>
      </li>

      {/* <li className="nav-item">
        <span
          className="nav-link"
          style={{ cursor: "pointer" }}
          onClick={() => scrollToSection(AboutmeRef)}
        >
          About Me
        </span>
      </li> */}

      <li className="nav-item">
        <span
          className="nav-link"
          style={{ cursor: "pointer" }}
          onClick={() => scrollToSection(SkillRef)}
        >
          Technical
        </span>
      </li>

      <li className="nav-item">
        <span
          className="nav-link"
          style={{ cursor: "pointer" }}
          onClick={() => scrollToSection(SwiperRef)}
        >
          My Project
        </span>
      </li>

      <li className="nav-item">
        <span
          className="nav-link"
          style={{ cursor: "pointer" }}
          onClick={() => scrollToSection(ContactRef)}
        >
          Contact Us
        </span>
      </li>

    </ul>
  </div>

  <div className="contact-info d-none d-lg-flex align-items-center justify-content-center">
    <svg className="phone-icon" viewBox="0 0 24 24" fill="currentColor">
      <path d="M20.01 15.38c-1.23 0-2.42-.2-3.53-.56-.35-.12-.74-.03-1.01.24l-1.57 1.97c-2.83-1.35-5.48-3.9-6.89-6.83l1.95-1.66c.27-.28.35-.67.24-1.02-.37-1.11-.56-2.3-.56-3.53 0-.54-.45-.99-.99-.99H4.19C3.65 3 3 3.24 3 3.99 3 13.28 10.73 21 20.01 21c.71 0 .99-.63.99-1.18v-3.45c0-.54-.45-.99-.99-.99z"/>
    </svg>
    <span>+91 8467053050</span>
  </div>

</div>

      </nav>
    </div>
  )
}

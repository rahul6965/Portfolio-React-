import React from 'react'
import Websitedesigner from "../assets/images/websitedesign.png"
import UIUXDesign  from "../assets/images/ui-ux.png"
import FrontendDevelopment from "../assets/images/fronted.png"
export default function Aboutme({ExprinceRef}) {
  return (
    
   <section ref={ExprinceRef}  className="why"> <div className="container">
        <div className="services-section">
             <div class="contact-title"><div class="contact-bg-text">Experience</div><div class="contact-main-title"><h2>Work Experience
</h2></div></div>
            <div className="row">
            
                <div className="col-lg-5 col-md-12">
                    <div className="service-card">
                        <div className="service-icon icon-teal">
                            <img width="50%"  src={Websitedesigner} alt=""/>
                        </div>
                        <div className="service-content">
                            <h3>Website Design</h3>
                          
                        </div>
                    </div>

                 
                    <div className="service-card">
                        <div className="service-icon icon-yellow">
                             <img width="50%"  src={UIUXDesign} alt=""/>
                        </div>
                        <div className="service-content">
                            <h3>UI/UX Design (Web Only)</h3>
                      
                        </div>
                    </div>

                    <div className="service-card">
                        <div className="service-icon icon-orange">
                               <img width="50%"  src={FrontendDevelopment} alt=""/>
                        </div>
                        <div className="service-content">
                            <h3>Frontend Development (React)</h3>
                           
                        </div>
                    </div>
                </div>

              
                <div className="col-lg-7 col-md-12">
                    <section className="experience-section">
    

      <div className="experience-card">
        <h3 className="role-title">
          Frontend Developer | Techsaga Corporations
          <span className="duration">(July 2024 - Present)</span>
        </h3>

        <ul className="experience-list">
          <li>Designed and developed responsive, visually appealing web applications using React.js, Redux Toolkit, and Bootstrap.</li>
          <li>Implemented reusable components and managed application state for scalable architecture.</li>
          <li>Integrated REST APIs with Axios and ensured smooth data rendering.</li>
          <li>Optimized frontend performance and page load speed for better user experience.</li>
        </ul>
      </div>
    </section>
                </div>
            </div>
        </div>
    </div>
</section>
  )
}

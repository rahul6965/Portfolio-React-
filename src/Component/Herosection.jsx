import bannerbg from "../assets/images/bg-effect.png"
import profileimg from "../assets/images/profile3.png"
// import cvPDF from "pdf/rahul-cv7.pdf";

export default function Herosection() {
  return (
 <section className="hero-section pb-lg-0">
        <div className="container">
            <div className="row align-items-center">
               
                <div className="col-lg-4 col-md-12 mb-4 mb-lg-0">
                    <h1 className="hero-title">
                        Hey There,<br/>
                        I'm <span className="hero-name">Rahul</span>
                    </h1>
                    <a target="blank" href="rahulsrivastav6965@gmail.com" className="email-link">rahulsrivastav6965@gmail.com</a>
                    
                    <div className="experience-badge">
                        <div className="experience-number">2</div>
                        <div className="experience-text">Years<br/>Experience</div>
                    </div>
                </div>

            
                <div className="col-lg-4 col-md-12 mb-4 mb-lg-0">
                    <div className="image-container">
                        <div className="paint-stroke">
                            <img width="100%" src={bannerbg} alt=""/>
                          
                        </div>
                        <img width="90%" src={profileimg} alt=""/>
                    </div>
                </div>

             
                <div className="col-lg-4 col-md-12">
                    <p className="tagline">
                        I design beautifully simple things, And I love what I do.
                    </p>
                    
                    <div className="certification-badge">
                        <div className="badge-icon">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="m9 12.75 3 3m0 0 3-3m-3 3v-7.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
</svg>

                        </div>
                        <div className="badge-text">
                            <a href= "/Rahul(frontedcv).pdf" download className="btn ">
  Download Resume
</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

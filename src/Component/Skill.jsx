import React from 'react'

export default function Skill({SkillRef}) {
  return (
    <section ref={SkillRef} className="skill">
     <div className="container">
        {/* <div className="timeline-header">
            <h1>Technical Skills</h1>
        </div> */}
        <div class="contact-title"><div class="contact-bg-text">Technical</div><div class="contact-main-title"><h2>Technical Skills</h2></div></div>

        <div className="timeline">

     
            <div className="timeline-item">
                <div className="timeline-left">
                    <div className="company-name">Frontend Development</div>
                    <div className="date-range">Core Skills</div>
                </div>
                <div className="timeline-marker">
                    <div className="marker-dot blue"></div>
                    <div className="timeline-line"></div>
                </div>
                <div className="timeline-right">
                    <div className="position-title">Technologies I Use</div>
                    <div className="position-description">
                        <span>React.js</span> <span>Redux Toolkit</span> <span>JavaScript (ES6+)</span> <span>Bootstrap 5</span> <span> HTML5</span> <span>CSS3</span> <span>SCSS</span> <span>Responsive Design</span> 
                    </div>
                </div>
            </div>

     
            <div className="timeline-item">
                <div className="timeline-left">
                    <div className="company-name">API & Tools</div>
                    <div className="date-range">Working Tools</div>
                </div>
                <div className="timeline-marker">
                    <div className="marker-dot red"></div>
                    <div className="timeline-line"></div>
                </div>
                <div className="timeline-right cus_tool">
                    <div className="position-title">Tools & Integrations</div>
                    <div className="position-description">
                        <span>REST API</span> <span>Axios</span> <span>Postman</span> <span className="me-1">Git </span><span>GitHub</span>
                        <span>VS Code</span>
                    </div>
                </div>
            </div>

     
            <div className="timeline-item">
                <div className="timeline-left">
                    <div className="company-name">Design Tools</div>
                    <div className="date-range">UI/UX Skills</div>
                </div>
                <div className="timeline-marker">
                    <div className="marker-dot yellow"></div>
                </div>
                <div className="timeline-right cus-design">
                    <div className="position-title">Design Expertise</div>
                    <div className="position-description">
                        <span>Figma</span> <span>Photoshop</span> – UI designing, mockups, landing pages, responsive layouts.
                    </div>
                </div>
            </div>

        </div>
    </div>
</section>

  )
}

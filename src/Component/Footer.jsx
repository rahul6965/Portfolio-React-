import React, { useState } from "react";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { IoMdMailUnread } from "react-icons/io";
export default function Footer({ContactRef}) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  // Handle input change
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Validation
  const validateForm = () => {
    if (!formData.name.trim()) return "Name is required!";
    if (!formData.email.trim()) return "Email is required!";
    if (!/^\S+@\S+\.\S+$/.test(formData.email))
      return "Enter a valid email!";
    if (!formData.message.trim()) return "Message is required!";
    return "";
  };

  // Submit form
  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setSuccess("");

    // Validate input
    const validationError = validateForm();
    if (validationError) {
      setError(validationError);
      return;
    }

    try {
      const response = await fetch("http://localhost:5000/api/contacts", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData), // NO SUBJECT HERE
      });

      const data = await response.json();

      if (data.success) {
        setSuccess("Your message has been sent successfully!");
        setFormData({ name: "", email: "", message: "" });
      } else {
        setError(data.error || "Something went wrong!");
      }
    } catch (err) {
      setError("Server error! Please try again later.");
    }
  };

  return (
    <footer ref={ContactRef} className="cus_footer">
      <div className="container">
        <div className="contact-title">
          <div className="contact-bg-text">CONTACT</div>
          <div className="contact-main-title">
            <h2>CONTACT US</h2>
          </div>
        </div>

        <div className="contact-content">
          <div className="contact-info">
            <div className="info-item">
              <h5>Email</h5>
              <p>
                rahulsrivastav6965@gmail.com<br />
                8467rahulsrivastav@gmai.com
              </p>
            </div>

            <div className="info-item">
              <h5>Phone</h5>
              <p>+91 8467053050</p>
            </div>

            <div className="info-item">
              <div className="social-icons">
                <a target="blank" href="https://www.linkedin.com/in/rahul-kumar-srivastav-080bb4280"><FaLinkedin size={20} /></a>
                <a target="blank" href="https://github.com/rahul6965"><FaGithub size={20} /></a>
                <a target="blank"  href="rahulsrivastav6965@gmail.com"><IoMdMailUnread size={20} /></a>
                {/* <a href="#"><i className="fab fa-twitter"></i></a>
                <a href="#"><i className="fab fa-youtube"></i></a>
                <a href="#"><i className="fab fa-linkedin-in"></i></a> */}
              </div>
            </div>
          </div>

          {/* Contact Form */}
        
          <div className="contact-form-wrapper">
            <h3>Get In Touch</h3>

            {error && <p style={{ color: "red" }}>{error}</p>}
            {success && <p style={{ color: "green" }}>{success}</p>}

            <form onSubmit={handleSubmit}>
              <div className="row">
                <div className="col-md-6">
                  <input
                    type="text"
                    className="form-control"
                    name="name"
                    placeholder="Your Name *"
                    value={formData.name}
                    onChange={handleChange}
                    // required
                  />
                </div>

                <div className="col-md-6">
                  <input
                    type="email"
                    className="form-control"
                    name="email"
                    placeholder="Your Email *"
                    value={formData.email}
                    onChange={handleChange}
                    // required
                  />
                </div>
              </div>

              {/* Subject Removed Completely */}

              <textarea
                className="form-control"
                name="message"
                placeholder="Your Message *"
                value={formData.message}
                onChange={handleChange}
                // required
                style={{ marginTop: "15px" }}
              ></textarea>

              <button
                type="submit"
                className="btn-contact"
                style={{ marginTop: "15px" }}
              >
                Contact Us
              </button>
            </form>
          </div>
        </div>

        <div className="footer">
          <div className="brand-name">Rahul Srivastav</div>
          <div className="copyright">©2025. All Rights Reserved</div>
          <div className="design-credit">
            Design by <a href="#">Rahul Srivastav</a>
          </div>
        </div>
      </div>
    </footer>
  );
}





// import React from 'react'

// export default function Footer() {
//   return (
//     <footer className='cus_footer'>
//        <div className="container">
//            <div className="">
//         <div className="contact-title">
//             <div className="contact-bg-text">CONTACT</div>
//             <div className="contact-main-title">
//                 <h2>CONTACT US</h2>
//             </div>
//         </div>
        
//         <div className="contact-content">
//             <div className="contact-info">
//                 <div className="info-item">
//                     <h5>Email</h5>
//                     <p>rahulsrivastav6965@gmail.com<br/>8467rahulsrivastav@gmai.com</p>
//                 </div>
                
//                 {/* <div className="info-item">
//                     <h5>Visit My Studio</h5>
//                     <p>Warnwe Park Streetperrine,<br/>FL 33157 New York City</p>
//                 </div>
//                  */}
//                 <div className="info-item">
//                     <h5>Phone</h5>
//                     <p>+91 8467053050</p>
//                 </div>
                
//                 <div className="info-item">
//                     <div className="social-icons">
//                         <a href="#" aria-label="Dribbble"><i className="fab fa-dribbble"></i></a>
//                         <a href="#" aria-label="Facebook"><i className="fab fa-facebook-f"></i></a>
//                         <a href="#" aria-label="Instagram"><i className="fab fa-instagram"></i></a>
//                         <a href="#" aria-label="Twitter"><i className="fab fa-twitter"></i></a>
//                         <a href="#" aria-label="YouTube"><i className="fab fa-youtube"></i></a>
//                         <a href="#" aria-label="LinkedIn"><i className="fab fa-linkedin-in"></i></a>
//                     </div>
//                 </div>
//             </div>
            
//             <div className="contact-form-wrapper">
//                 <h3>Get In Touch</h3>
//                 <form id="contactForm">
//                     <div className="row">
//                         <div className="col-md-6">
//                             <div className="form-group">
//                                 <input type="text" className="form-control" placeholder="Your Name *" required/>
//                             </div>
//                         </div>
//                         <div className="col-md-6">
//                             <div className="form-group">
//                                 <input type="email" className="form-control" placeholder="Your Email *" required/>
//                             </div>
//                         </div>
//                     </div>
//                     <div className="form-group">
//                         <input type="text" className="form-control" placeholder="Your Subject *" required/>
//                     </div>
//                     <div className="form-group">
//                         <textarea className="form-control" placeholder="Your Message *" required></textarea>
//                     </div>
//                     <button type="submit" className="btn-contact">Contact Us</button>
//                 </form>
//             </div>
//         </div>
//     </div>
        
//         <div className="footer">
//             <div className="brand-name">Rahul Srivastav</div>
//             <div className="copyright">©2025. All Rights Reserved</div>
//             <div className="design-credit">
//                 Design by <a href="#">Rahul Srivastav</a>
//             </div>
//         </div>
//     </div></footer>

//   )
// }
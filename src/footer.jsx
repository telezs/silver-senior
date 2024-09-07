import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram} from '@fortawesome/free-brands-svg-icons'
export default function Footer() {
  return (
    <footer>
      <div className="container-fluid footer" style={{marginTop:"2rem", }}>
        <div className="container">
          <div className="row">
            <div style={{padding:' 0.2rem', margin: '1rem 0rem 1rem 0rem'}}>
              <h3 className="footer-link fw-bold">
                Contact Us
              </h3>
              <div className="icon-container" style={{marginTop:"0.5rem"}}>
              <a href="mailto:silversseniors@gmail.com" className="footer-link">silversseniors@gmail.com</a>
              <a href="https://www.facebook.com/profile.php?id=61564030856021&mibextid=LQQJ4d" className="footer-link">
              <FontAwesomeIcon icon={faFacebook}></FontAwesomeIcon>
               Silver Seniors</a>
              <a href="https://www.instagram.com/silverseniors?igsh=MTNwbWxmdXQ1a2V5Yg==" className="footer-link">
              <FontAwesomeIcon icon={faInstagram}></FontAwesomeIcon> @silverseniors</a>
              <div className="copyright-footer row text-center">
                <p className="fs-6 fst-italic text-center">
                  @ Silver Senior 2024
                </p>
              </div>
              </div>

            </div>
          </div>
        </div>

      </div>
    </footer>
  )
}

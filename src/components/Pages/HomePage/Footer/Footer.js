import React from "react";
import "./Footer.scoped.scss";
import ProfilePic from "./../../../assets/Images/profile-picture.png";
import IoIcons from "react-icons";
const Footer = () => {
  return (
    <footer className="footer container" id="contact">
      {/* <h2 className="heading-primary">Contact</h2> */}
      <div className="footer-inner">
        <div className="footer-inner-inner">
          <h4>Get in touch</h4>
          <div className="footer-links">
            <div className="links">
              <a href="linkedin.com" target="_blank">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  x="0px"
                  y="0px"
                  viewBox="0 0 48 48"
                >
                  <path
                    fill="#4caf50"
                    d="M45,16.2l-5,2.75l-5,4.75L35,40h7c1.657,0,3-1.343,3-3V16.2z"
                  ></path>
                  <path
                    fill="#1e88e5"
                    d="M3,16.2l3.614,1.71L13,23.7V40H6c-1.657,0-3-1.343-3-3V16.2z"
                  ></path>
                  <polygon
                    fill="#e53935"
                    points="35,11.2 24,19.45 13,11.2 12,17 13,23.7 24,31.95 35,23.7 36,17"
                  ></polygon>
                  <path
                    fill="#c62828"
                    d="M3,12.298V16.2l10,7.5V11.2L9.876,8.859C9.132,8.301,8.228,8,7.298,8h0C4.924,8,3,9.924,3,12.298z"
                  ></path>
                  <path
                    fill="#fbc02d"
                    d="M45,12.298V16.2l-10,7.5V11.2l3.124-2.341C38.868,8.301,39.772,8,40.702,8h0 C43.076,8,45,9.924,45,12.298z"
                  ></path>
                </svg>
              </a>
              <a href="linkedin.com" target="_blank">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  x="0px"
                  y="0px"
                  viewBox="0 0 48 48"
                  style={{ transform: "scale(1.2)" }}
                >
                  <path
                    fill="#0288d1"
                    d="M24,4C13,4,4,13,4,24s9,20,20,20s20-9,20-20S35,4,24,4z"
                  ></path>
                  <rect width="4" height="15" x="14" y="19" fill="#fff"></rect>
                  <path
                    fill="#fff"
                    d="M16,17L16,17c-1.2,0-2-0.9-2-2c0-1.1,0.8-2,2-2c1.2,0,2,0.9,2,2C18,16.1,17.2,17,16,17z"
                  ></path>
                  <path
                    fill="#fff"
                    d="M35,24.5c0-3-2.5-5.5-5.5-5.5c-1.9,0-3.5,0.9-4.5,2.3V19h-4v15h4v-8c0-1.7,1.3-3,3-3s3,1.3,3,3v8h4	C35,34,35,24.9,35,24.5z"
                  ></path>
                </svg>
              </a>
              <a href="linkedin.com" target="_blank">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  x="0px"
                  y="0px"
                  viewBox="0 0 48 48"
                  style={{ transform: "scale(1.15)" }}
                >
                  <path
                    fill="#03a9f4"
                    d="M24,4C12.954,4,4,12.954,4,24s8.954,20,20,20s20-8.954,20-20S35.046,4,24,4z"
                  ></path>
                  <path
                    fill="#fff"
                    d="M36,17.12c-0.882,0.391-1.999,0.758-3,0.88c1.018-0.604,2.633-1.862,3-3	c-0.951,0.559-2.671,1.156-3.793,1.372C29.789,13.808,24,14.755,24,20v2c-4,0-7.9-3.047-10.327-6c-2.254,3.807,1.858,6.689,2.327,7	c-0.807-0.025-2.335-0.641-3-1c0,0.016,0,0.036,0,0.057c0,2.367,1.661,3.974,3.912,4.422C16.501,26.592,16,27,14.072,27	c0.626,1.935,3.773,2.958,5.928,3c-2.617,2.029-7.126,2.079-8,1.977c8.989,5.289,22.669,0.513,21.982-12.477	C34.95,18.818,35.342,18.104,36,17.12"
                  ></path>
                </svg>{" "}
              </a>
              <a href="linkedin.com" target="_blank">
                <img
                  style={{ transform: "scale(1.15)" }}
                  src="https://img.icons8.com/3d-fluency/94/null/github.png"
                  alt="Github logo"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

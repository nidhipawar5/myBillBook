import React from "react";
import "../footer/footer.css";
import { Container, Row, Col } from "react-bootstrap";
import whatsapplogo from "../../resources/whatsapp-1.svg";
import chatlogo from "../../resources/chat-icon.svg";
import youtube from "../../resources/youtube.svg";
import fb from "../../resources/facebook_Icon.svg";
import instagram from "../../resources/instagram.svg";
import linkedin from "../../resources/linkedin-icon.svg";
import twitter from "../../resources/twitter-icon.svg";

export default function footer() {
  return (
    <div className="container d-flex ">
      <div className="main-footer d-flex w-100 justify-content-between py-5">
        <div>
          <div className="footer-title">Get in touch</div>
          <div className="footer-content ">help@flobiz.in</div>
          <div style={{ fontSize: "23px" }}>+91 7400417400</div>
          <div className="d-flex " style={{ gap: "9px" }}>
            <div className="whatsapp justify-content-around ">
              <div>
                <a
                  href="https://api.whatsapp.com/send?phone=917400417400"
                  target="_blank"
                >
                  <img src={whatsapplogo} alt="whatsapp logo" />
                </a>
              </div>

              <div className="b">WhatsApp Us</div>
            </div>
            <div className="chat justify-content-around ">
              <div>
                <img src={chatlogo} alt="chat logo" />
              </div>
              <div className="b">Chat with us</div>
            </div>
          </div>
        </div>
        <div>
          <div className="footer-title">Information</div>
          <div className="footer-content ">Refund Policy</div>
          <div className="footer-content ">Privacy Policy</div>
          <div className="footer-content ">Terms & Conditions</div>
        </div>
        <div>
          <div className="footer-title">&nbsp;</div>
          <div className="footer-content ">FAQ's</div>
          <div className="footer-content ">Pricing</div>
          <div className="footer-content ">FloBiz Business Group</div>
          <div className="footer-content ">Blogs</div>
        </div>
        <div>
          <div className="footer-title">Follow Us</div>
          <div className="links d-flex">
            <div className="flag">
              <a
                href="https://www.youtube.com/channel/UCSGJlHTQCdQS_OGxCk6xJsw"
                target="_blank"
              >
                <img src={youtube} alt="youtube logo" />
              </a>
            </div>
            <div className="flag">
              <a href="https://www.facebook.com/mybillbook.in" target="_blank">
                <img src={fb} alt="fb logo" />
              </a>
            </div>
            <div className="flag">
              <a
                href="https://www.instagram.com/mybillbookofficial/"
                target="_blank"
              >
                <img src={instagram} alt="instagram logo" />
              </a>
            </div>
            <div className="flag">
              <a href="https://twitter.com/FloBizOfficial" target="_blank">
                <img src={twitter} alt="twitter logo" />
              </a>
            </div>
            <div className="flag">
              <a
                href="https://www.linkedin.com/company/flobiz/"
                target="_blank"
              >
                <img src={linkedin} alt="linkedin logo" />
              </a>
            </div>
          </div>
          <div className="py-3" style={{ fontWeight: "800" }}>
            FloBooks is a product of{" "}
            <a href="https://flobiz.in/" target="_blank">
              FloBiz
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

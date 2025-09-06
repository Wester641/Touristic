import React from "react";

const textMessage = "Hello, I want to book a tour!";
const whatsappLink =
  "https://wa.me/996555551340?text=Hello%2C%20I%20want%20to%20book%20a%20tour!";

function PopupLinks({ close }) {
  return (
    <div>
      <div className="popup">
        <div className="popup-content">
          <span className="close" onClick={close}>
            &times;
          </span>
          <div className="popup-content-text">
            <p>
              <img
                className="popup-logo"
                src="assets/images/logo/logo-black.png"
                alt=""
              />
              <div className="popup-text">
                Please choose your preferred <br /> way to contact us.
              </div>
            </p>
            <ul className="popup-links">
              <a href={whatsappLink}>
                <li className="popup-link">
                  <i className="fab fa-whatsapp"></i>
                  WhatsApp
                </li>
              </a>
              <a href={`https://t.me/zakharhhh?text=${textMessage}`}>
                <li className="popup-link">
                  <i className="fab fa-telegram"></i>
                  Telegram
                </li>
              </a>
              <a href="https://www.instagram.com/almastravel.kg?igsh=a3F1YmF2OHZ2bnF5">
                <li className="popup-link">
                  <i className="fab fa-instagram"></i>
                  Instagram
                </li>
              </a>
              <a href="tel:+996555551340">
                <li className="popup-link">
                  <i className="fas fa-phone"></i>
                  Just Call <br />{" "}
                  <span className="popup-phone">+996555551340</span>
                </li>
              </a>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PopupLinks;

const travelServices = [
  { title: "Individual, group & family tour arrangements" },
  { title: "City & regional sightseeing in Kyrgyzstan" },
  { title: "Hunting, photography & outdoor tours" },
  { title: "Hotel & yurt camp bookings at best rates" },
  { title: "Transfers, transport & professional guides" },
  { title: "VIP travel & shopping trips" },
  { title: "Visa, insurance & legal support" },
];

const Footer = ({ bg, extraClass }) => {
  return (
    <footer className="main-footer black-bg pt-100">
      <div className="container">
        {/*=== Footer Top ===*/}
        <div className="footer-top pt-40 wow fadeInUp">
          <div className="row">
            <div className="col-lg-3 col-sm-6">
              {/*=== Single Info Item ===*/}
              <div className="single-info-item mb-40">
                <div className="icon">
                  <i className="far fa-map-marker-alt" />
                </div>
                <div className="info">
                  <span className="title">Location</span>
                  <p>Baitik Baatyr Street 73, Bishkek, Kyrgyzstan</p>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-sm-6">
              {/*=== Single Info Item ===*/}
              <div className="single-info-item mb-40">
                <div className="icon">
                  <i className="far fa-envelope-open" />
                </div>
                <div className="info">
                  <span className="title">Email</span>
                  <p>
                    <a
                      href="mailto:almas.travels@hotmail.com
"
                    >
                      Almas.travels@hotmail.com
                    </a>
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-sm-6">
              {/*=== Single Info Item ===*/}
              <div className="single-info-item mb-40">
                <div className="icon">
                  <i className="far fa-map-marker-alt" />
                </div>
                <div className="info">
                  <span className="title">Hotline</span>
                  <p>
                    <a
                      href="tel:+996555551340
"
                    >
                      +996 (555) 55 13 40
                    </a>
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-sm-6">
              {/*=== Social Box ===*/}
              <div className="social-box mb-40 float-lg-end">
                <ul className="social-link ">
                  <li className="m-2">
                    <a href="https://wa.link/dwvf6z">
                      <i className="fab fa-whatsapp" />
                    </a>
                  </li>
                  <li className="m-2">
                    <a href="https://www.instagram.com/almastravel.kg?igsh=a3F1YmF2OHZ2bnF5">
                      <i className="fab fa-instagram" />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/*=== Footer Widget ===*/}
        <div className="footer-widget-area pt-75 pb-30">
          <div className="row">
            <div className="col-lg-3 col-md-6">
              {/*=== Footer Widget ===*/}
              <div className="footer-widget about-company-widget mb-40 wow fadeInUp">
                <h4 className="widget-title">About Us — Almas Travel</h4>
                <div className="footer-content">
                  <p>
                    At Almas Travel, we believe that every journey should be
                    more than just a trip — it should be an experience to
                    remember. Founded with a passion for discovery and
                    adventure, we create travel opportunities that inspire,
                    connect, and excite.
                  </p>
                  <a href="#" className="footer-logo">
                    <img
                      src="assets/images/logo/logo-white.png"
                      alt="Site Logo"
                    />
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-5 col-md-6">
              {/*=== Footer Widget ===*/}
              <div className="footer-widget service-nav-widget mb-40 pl-lg-70 wow fadeInDown">
                <h4 className="widget-title">Services</h4>
                <div className="footer-content">
                  {travelServices.map((service) => (
                    <ul className="footer-widget-nav">
                      <li>
                        <a href="#">{service.title}</a>
                      </li>
                    </ul>
                  ))}
                  {/* <ul className="footer-widget-nav">
                      <li>
                        <a href="#">Need a Career ?</a>
                      </li>
                      <li>
                        <a href="#">Latest News &amp; Blog</a>
                      </li>
                      <li>
                        <a href="#">Core Features</a>
                      </li>
                      <li>
                        <a href="#">Meet Our teams</a>
                      </li>
                    </ul> */}
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              {/*=== Footer Widget ===*/}
              <div className="footer-widget footer-newsletter-widget mb-40 pl-lg-100 wow fadeInUp">
                <h4 className="widget-title">Newsletter</h4>
                <div className="footer-content">
                  <p>
                    Which of us ever undertake laborious physical exercise
                    except obtain
                  </p>
                  <form>
                    <div className="form_group">
                      <label>
                        <i className="far fa-paper-plane" />
                      </label>
                      <input
                        disabled
                        type="email"
                        className="form_control"
                        placeholder="Email Address"
                        name="email"
                        required
                      />
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/*=== Footer Copyright ===*/}
        <div className="footer-copyright">
          <div className="row">
            <div className="col-lg-6">
              {/*=== Footer Text ===*/}
              <div className="footer-text">
                <p>
                  © 2025 <span style={{ color: "#F7921E" }}>Almas Travel</span>,
                  All Right Reserved
                </p>
              </div>
            </div>
            <div className="col-lg-6">
              {/*=== Footer Nav ===*/}
              <div className="footer-nav float-lg-end">
                <ul>
                  <li>
                    <a href="/privacy-policy">Privacy Policy</a>
                  </li>
                  <li>
                    <a href="/terms-and-conditions">Terms &amp; conditions</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
export default Footer;

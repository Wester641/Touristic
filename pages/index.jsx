import GallerySection from "@/src/components/GallerySection";
import Layout from "@/src/layout/Layout";
import {
  home2Slider,
  sliderActive3Item,
  sliderActive4Item,
  testimonialSliderOne,
} from "@/src/sliderProps";
import dynamic from "next/dynamic";
import Link from "next/link";
import { Nav, Tab } from "react-bootstrap";
import Slider from "react-slick";
const Counter = dynamic(() => import("@/src/components/Counter"), {
  ssr: false,
});

const services = [
  {
    title: "RV Caravan Trailer",
    description: "Kyrgyzstan - Tian Shan Mountains - 4 days",
    image: "assets/images/place/place-1.jpg",
    link: "/",
    rate: "4.9",
    meta: [{}],
    days: "5",
  },
  {
    title: "Lenin Peak Base Camp Trek",
    description: "Kyrgyzstan - Tian Shan Mountains - 4 days",
    image: "assets/images/place/place-2.jpg",
    link: "/",
    rate: "4.9",
    meta: [{}],
    days: "5",
  },
  {
    title: "Lenin Peak Base Camp Trek",
    description: "Kyrgyzstan - Tian Shan Mountains - 4 days",
    image: "assets/images/place/place-3.jpg",
    link: "/",
    rate: "4.9",
    meta: [{}],
    days: "5",
  },
  {
    title: "Lenin Peak Base Camp Trek",
    description: "Kyrgyzstan - Tian Shan Mountains - 4 days",
    image: "assets/images/place/place-4.jpg",
    link: "/",
    rate: "4.9",
    meta: [{}],
    days: "5",
  },
  {
    title: "Lenin Peak Base Camp Trek",
    description: "Kyrgyzstan - Tian Shan Mountains - 4 days",
    image: "assets/images/place/place-4.jpg",
    link: "/",
    rate: "4.9",
    meta: [{}],
    days: "5",
  },
  {
    title: "Lenin Peak Base Camp Trek",
    description: "Kyrgyzstan - Tian Shan Mountains - 4 days",
    image: "assets/images/place/place-4.jpg",
    link: "/",
    rate: "4.9",
    meta: [{}],
    days: "5",
  },
  {
    title: "Lenin Peak Base Camp Trek",
    description: "Kyrgyzstan - Tian Shan Mountains - 4 days",
    image: "assets/images/place/place-4.jpg",
    link: "/",
    rate: "4.9",
    meta: [{}],
    days: "5",
  },
  {
    title: "Lenin Peak Base Camp Trek",
    description: "Kyrgyzstan - Tian Shan Mountains - 4 days",
    image: "assets/images/place/place-4.jpg",
    link: "/",
    rate: "4.9",
    meta: [{}],
    days: "5",
  },
];

const ServiceTypes = [
  {
    title: "Man and Woman Walks on Dock",
    description: "Maldives",
    location: "Maldives",
    price: "93.65",
    image: "assets/images/place/place-4.jpg",
    link: "/",
    days: "5",
  },

  {
    title: "Man and Woman Walks on Dock",
    description: "Maldives",
    location: "Maldives",
    price: "93.65",
    image: "assets/images/place/place-3.jpg",
    link: "/",
    days: "5",
  },
  {
    title: "Man and Woman Walks on Dock",
    description: "Maldives",
    location: "Maldives",
    price: "93.65",
    image: "assets/images/place/place-4.jpg",
    link: "/",
    days: "5",
  },
  {
    title: "Man and Woman Walks on Dock",
    description: "Maldives",
    location: "Maldives",
    price: "93.65",
    image: "assets/images/place/place-2.jpg",
    link: "/",
    days: "5",
  },
  {
    title: "Man and Woman Walks on Dock",
    description: "Maldives",
    location: "Maldives",
    price: "93.65",
    image: "assets/images/place/place-3.jpg",
    link: "/",
    days: "5",
  },
  {
    title: "Man and Woman Walks on Dock",
    description: "Maldives",
    location: "Maldives",
    price: "93.65",
    image: "assets/images/place/place-4.jpg",
    link: "/",
    days: "5",
  },
];

const Index = () => {
  return (
    <Layout header={1} noFooter>
      {/*====== Start Hero Section ======*/}
      <section className="hero-section">
        {/*=== Hero Wrapper ===*/}
        <div className="hero-wrapper-two">
          {/*=== Hero Slider ===*/}
          <Slider {...home2Slider} className="hero-slider-two">
            {/*=== Single Slider ===*/}
            <div className="single-slider">
              <div
                className="image-layer bg_cover"
                style={{
                  backgroundImage: "url(assets/images/hero/hero-two_img-4.jpg)",
                }}
              />
              <div className="container-fluid">
                <div className="row justify-content-center">
                  <div className="col-xl-9">
                    {/*=== Hero Content ===*/}
                    <div className="hero-content text-white text-center">
                      <span className="ribbon">Tour &amp; Travels</span>
                      <h1 data-animation="fadeInDown" data-delay=".4s">
                        Explore Kyrgyzstan and Central Asia
                      </h1>
                      <div
                        className="hero-button"
                        data-animation="fadeInRight"
                        data-delay=".6s"
                      >
                        <Link legacyBehavior href="/about">
                          <a className="main-btn primary-btn">
                            More
                            <i className="fas fa-paper-plane" />
                          </a>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/*=== Single Slider ===*/}
            <div className="single-slider">
              <div
                className="image-layer bg_cover"
                style={{
                  backgroundImage: "url(assets/images/hero/hero-two_img-4.jpg)",
                }}
              />
              <div className="container-fluid">
                <div className="row justify-content-center">
                  <div className="col-xl-9">
                    {/*=== Hero Content ===*/}
                    <div className="hero-content text-white text-center">
                      <span className="ribbon">Find Your Adventure</span>
                      <h1 data-animation="fadeInDown" data-delay=".4s">
                        Crafting Trips for Every Travel Style
                      </h1>
                      <div
                        className="hero-button"
                        data-animation="fadeInRight"
                        data-delay=".6s"
                      >
                        <Link legacyBehavior href="/about">
                          <a className="main-btn primary-btn">
                            More
                            <i className="fas fa-paper-plane" />
                          </a>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/*=== Single Slider ===*/}
            <div className="single-slider">
              <div
                className="image-layer bg_cover"
                style={{
                  backgroundImage: "url(assets/images/hero/hero-two_img-4.jpg)",
                }}
              />
              <div className="container-fluid">
                <div className="row justify-content-center">
                  <div className="col-xl-9">
                    {/*=== Hero Content ===*/}
                    <div className="hero-content text-white text-center">
                      <span className="ribbon">Tour &amp; Travels</span>
                      <h1 data-animation="fadeInDown" data-delay=".4s">
                        Authentic Travel Experiences
                      </h1>
                      <div
                        className="hero-button"
                        data-animation="fadeInRight"
                        data-delay=".6s"
                      >
                        <Link legacyBehavior href="/about">
                          <a className="main-btn primary-btn">
                            Explore More
                            <i className="fas fa-paper-plane" />
                          </a>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/*=== Single Slider ===*/}
            <div className="single-slider">
              <div
                className="image-layer bg_cover"
                style={{
                  backgroundImage: "url(assets/images/hero/hero-two_img-4.jpg)",
                }}
              />
              <div className="container-fluid">
                <div className="row justify-content-center">
                  <div className="col-xl-9">
                    {/*=== Hero Content ===*/}
                    <div className="hero-content text-white text-center">
                      <span className="ribbon">Tour &amp; Travels</span>
                      <h1 data-animation="fadeInDown" data-delay=".4s">
                        For Every Adventurous Spirit
                      </h1>
                      <div
                        className="hero-button"
                        data-animation="fadeInRight"
                        data-delay=".6s"
                      >
                        <Link legacyBehavior href="/about">
                          <a className="main-btn primary-btn">
                            Explore More
                            <i className="fas fa-paper-plane" />
                          </a>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Slider>
        </div>
      </section>
      {/*====== End Hero Section ======*/}
      {/*====== Start About Section ======*/}
      {/*====== Start Team Section ======*/}
      <section className="team-section pt-100 pb-70">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-7">
              {/*====== Section Title ======*/}
              <div className="section-title text-center mb-50 wow fadeInDown">
                <span className="sub-title">Find Your Trip</span>
                <h2>Popular Kyrgyzstan Trekking and Hiking Tours</h2>
              </div>
            </div>
          </div>
          {/* <div className="row"></div> */}
        </div>
      </section>
      {/*====== End Team Section ======*/}
      {/*====== Start Activity Section ======*/}
      <section className="activity-section pb-60">
        <div className="container-fluid">
          {/*=== Slider Active Item ===*/}
          <Slider
            {...sliderActive3Item}
            className="slider-active-3-item wow fadeInUp"
          >
            {/*====== Activity Item ======*/}
            {services.map((service) => (
              <div className="single-activity-item mb-40">
                <div className="img-holder">
                  <img src={service.image} alt="Image" />
                </div>
                <div className="content">
                  <div className="meta">
                    <ul>
                      <li>
                        <span className="icon">
                          <i className="flaticon-blanket" />
                        </span>
                      </li>
                      <li>
                        <span className="icon">
                          <i className="flaticon-cat" />
                        </span>
                      </li>
                      <li>
                        <span className="icon">
                          <i className="flaticon-tent" />
                        </span>
                      </li>
                      <li>
                        <span className="icon">
                          <i className="flaticon-fire" />
                        </span>
                      </li>
                    </ul>
                    <div className="rate">
                      <i className="fas fa-star" />
                      4.9
                    </div>
                  </div>
                  <h3 className="title">{service.title}</h3>
                  <p>{service.description}</p>
                  <a href={service.link} className="main-btn filled-btn">
                    Check Now
                    <i className="fas fa-paper-plane" />
                  </a>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </section>
      {/*====== End Activity Section ======*/}
      {/*====== Start Places Section ======*/}
      <section className="places-section pb-100">
        <div className="container">
          <div className="row justify-content-center">
            {ServiceTypes.map((serviceType) => (
              <div className="col-xl-4 col-md-6 col-sm-12 places-column">
                {/*=== Single Place Item ===*/}
                <div className="single-place-item mb-60 wow fadeInUp">
                  <div className="place-img">
                    <img src={serviceType.image} alt="Place Image" />
                  </div>
                  <div className="place-content">
                    <div className="info">
                      <h4 className="title">
                        <Link legacyBehavior href="/tour-details">
                          <a>{serviceType.title}</a>
                        </Link>
                      </h4>
                      <p className="location">
                        <i className="far fa-map-marker-alt" />
                        {serviceType.location}
                      </p>
                      <p className="price">
                        <i className="fas fa-usd-circle" />
                        Price
                        <span className="currency"> </span> {serviceType.price}
                      </p>
                      <div className="meta">
                        <span>
                          <i className="far fa-clock" />
                          {serviceType.days} Days
                        </span>
                        <span></span>
                        <span>
                          <Link legacyBehavior href="/tour-details">
                            <a>
                              Details
                              <i className="far fa-long-arrow-right" />
                            </a>
                          </Link>
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/*====== End Places Section ======*/}
      {/*====== Start Activity Section ======*/}
      <section className="activity-section">
        <div className="activity-wrapper-bgc  text-white black-bg">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-xl-7">
                <div className="section-title text-center mb-50 wow fadeInDown">
                  <span className="sub-title">Popular Activity</span>
                  <h2>Talk to an Expert</h2>
                </div>
              </div>
            </div>
            <p className="col-xl-12">
              Sed ut perspiciatis unde omniste natus error sit voluptatem
              accusantium doloremque laudantium totam rem aperiam, eaque ip quae
              abillo inventore veritatis et quasi architecto beatae vitae dicta
              sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
              aspernatur aut odit aut fugit sed quia consequuntur magni dolores
              eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam
              est, qui dolorem ipsum quia dolor si amet consectetur adipisci
              velit sed quian numquam eius modi tempora incidunt ut labore
              dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam
              qunostrum exercitationem ullam corporis suscipit laboriosaey nisi
              ut aliquid ex ea commodi consequatur? Quis autem vel eum iure
              reprehenderit qui in ea voluptate velit esse quam nihil molestiae
              consequatur veillum qui dolorem voluptas nulla pariatur
            </p>

            <div className="col-xl-12 text-center mt-5">
              <div
                className="hero-button"
                data-animation="fadeInRight"
                data-delay=".6s"
              >
                <Link legacyBehavior href="/about">
                  <a className="main-btn primary-btn">
                    Contact Us
                    <i className="fas fa-paper-plane" />
                  </a>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*====== End Activity Section ======*/}
      {/* <GallerySection /> */}
      {/*====== End Gallery Section ======*/}
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
                    <p>55 Main Street, Australia</p>
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
                      <a href="mailto:support@gmail.com">support@gmail.com</a>
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
                      <a href="tel:+000(123)456898">+000 (123) 456 898</a>
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-sm-6">
                {/*=== Social Box ===*/}
                <div className="social-box mb-40 float-lg-end">
                  <ul className="social-link">
                    <li>
                      <a href="#">
                        <i className="fab fa-facebook-f" />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fab fa-twitter" />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fab fa-instagram" />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fab fa-linkedin-in" />
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
                  <h4 className="widget-title">About</h4>
                  <div className="footer-content">
                    <p>
                      To take trivial example which us ever undertakes laborious
                      physica exercise except obsome
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
                    <ul className="footer-widget-nav">
                      <li>
                        <a href="#">Caravan Soler Tent</a>
                      </li>
                      <li>
                        <a href="#">Family Tent Camping</a>
                      </li>
                      <li>
                        <a href="#">Classic Tent Camping</a>
                      </li>
                      <li>
                        <a href="#">Wild Tent Camping</a>
                      </li>
                      <li>
                        <a href="#">Small Cabin Wood</a>
                      </li>
                    </ul>
                    <ul className="footer-widget-nav">
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
                    </ul>
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
                    Copy@ 2023{" "}
                    <span style={{ color: "#F7921E" }}>Almas Travel</span>, All
                    Right Reserved
                  </p>
                </div>
              </div>
              <div className="col-lg-6">
                {/*=== Footer Nav ===*/}
                <div className="footer-nav float-lg-end">
                  <ul>
                    <li>
                      <a href="#">Setting &amp; privacy</a>
                    </li>
                    <li>
                      <a href="#">Faqs</a>
                    </li>
                    <li>
                      <a href="#">Support</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </Layout>
  );
};
export default Index;

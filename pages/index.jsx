import GallerySection from "@/src/components/GallerySection";
import PopupLinks from "@/src/components/PopupLinks";
import { TestimonialData } from "@/src/constance";
import Layout from "@/src/layout/Layout";
import {
  home2Slider,
  sliderActive3Item,
  sliderActive4Item,
  testimonialSliderOne,
} from "@/src/sliderProps";
import dynamic from "next/dynamic";
import Link from "next/link";
import { useState } from "react";
// import { Nav, Tab } from "react-bootstrap";
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
    description: "Ala-Archa",
    location: "Ala-Archa",
    price: "93.65",
    image: "assets/images/place/place-4.jpg",
    link: "/",
    days: "5",
  },

  {
    title: "Man and Woman Walks on Dock",
    description: "Ala-Archa",
    location: "Ala-Archa",
    price: "93.65",
    image: "assets/images/place/place-3.jpg",
    link: "/",
    days: "5",
  },
  {
    title: "Man and Woman Walks on Dock",
    description: "Ala-Archa",
    location: "Ala-Archa",
    price: "93.65",
    image: "assets/images/place/place-4.jpg",
    link: "/",
    days: "5",
  },
  {
    title: "Man and Woman Walks on Dock",
    description: "Ala-Archa",
    location: "Ala-Archa",
    price: "93.65",
    image: "assets/images/place/place-2.jpg",
    link: "/",
    days: "5",
  },
  {
    title: "Man and Woman Walks on Dock",
    description: "Ala-Archa",
    location: "Ala-Archa",
    price: "93.65",
    image: "assets/images/place/place-3.jpg",
    link: "/",
    days: "5",
  },
  {
    title: "Man and Woman Walks on Dock",
    description: "Ala-Archa",
    location: "Ala-Archa",
    price: "93.65",
    image: "assets/images/place/place-4.jpg",
    link: "/",
    days: "5",
  },
];

const Index = () => {
  const [close, setClose] = useState(false);
  const handleClose = () => {
    setClose(!close);
  };
  return (
    <Layout header={1} noFooter>
      {close && <PopupLinks close={handleClose} />}

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
                        <Link legacyBehavior href="/">
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
                        <Link legacyBehavior href="/">
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
                        <Link legacyBehavior href="/">
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
                        <Link legacyBehavior href="/">
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
                <span className="sub-title ">Find Your Trip</span>
                <h2 className="darkblue-text">
                  Popular Kyrgyzstan Trekking and Hiking Tours
                </h2>
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
                      <h4 className="title darkblue-text">
                        <Link legacyBehavior href="/">
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
                        <span className="">
                          <i className="far fa-clock" />
                          {serviceType.days} Days
                        </span>
                        <span></span>
                        <span className="darkblue-text">
                          <Link legacyBehavior href="/">
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
      {/*====== Start CTA Section ======*/}
      <section
        className="cta-bg overlay bg_cover pt-150 pb-150"
        style={{ backgroundImage: "url(assets/images/bg/cta-bg2.jpg)" }}
      >
        <div className="container">
          <div className="row align-items-center">
            <div className="col-xl-7 col-lg-8">
              {/*=== CTA Content Box ===*/}
              <div className="cta-content-box text-white wow fadeInLeft">
                <h2 className="mb-35">
                  Discover Untouched Nature in the Heart of Kyrgyz Mountains{" "}
                </h2>
                <Link legacyBehavior href="/">
                  <a className="main-btn primary-btn">
                    Check Availability
                    <i className="far fa-paper-plane" />
                  </a>
                </Link>
              </div>
            </div>
            <div className="col-xl-5 col-lg-4">
              {/*=== Play Box ===*/}
              <div className="play-box text-lg-end text-center wow fadeInRight">
                <a
                  href="https://www.youtube.com/watch?v=i5CBuOXaKXo&list=RDi5CBuOXaKXo&start_radio=1v=i5CBuOXaKXo&list=RDi5CBuOXaKXo&start_radio=1"
                  className="video-popup"
                >
                  <i className="fas fa-play" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*====== End CTA Section ======*/}
      {/*====== Start Fact Section ======*/}
      <section className="fact-section pt-100">
        <div className="container">
          <div className="row">
            <div className="col-lg-3 col-sm-6">
              {/*=== Counter Item ===*/}
              <div className="single-counter-item text-center mb-40 wow fadeInUp">
                <div className="icon">
                  <i className="flaticon-journey" />
                </div>
                <h2 className="number">
                  <Counter end={2390} />+
                </h2>
                <p>Happy Traveler</p>
              </div>
            </div>
            <div className="col-lg-3 col-sm-6">
              {/*=== Counter Item ===*/}
              <div className="single-counter-item text-center mb-40 wow fadeInDown">
                <div className="icon">
                  <i className="flaticon-tent-1" />
                </div>
                <h2 className="number">
                  <Counter end={768} />+
                </h2>
                <p>Tent Sites</p>
              </div>
            </div>
            <div className="col-lg-3 col-sm-6">
              {/*=== Counter Item ===*/}
              <div className="single-counter-item text-center mb-40 wow fadeInUp">
                <div className="icon">
                  <i className="flaticon-reviews" />
                </div>
                <h2 className="number">
                  <Counter end={99.3} decimals={1} />%
                </h2>
                <p>Positive Reviews</p>
              </div>
            </div>
            <div className="col-lg-3 col-sm-6">
              {/*=== Counter Item ===*/}
              <div className="single-counter-item text-center mb-40 wow fadeInDown">
                <div className="icon">
                  <i className="flaticon-award" />
                </div>
                <h2 className="number">
                  <Counter end={12} />K
                </h2>
                <p>Awards Winning</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*====== End Fact Section ======*/}
      {/*====== Start Testimonial Section ======*/}
      <section className="testimonial-section pt-60">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-8">
              {/*=== Section Title ===*/}
              <div className="section-title text-center mb-50 wow fadeInDown">
                <span className="sub-title">Testimonials</span>
                <h2 className="darkblue-text">
                  What Our Traveler Say About Our Tour Services
                </h2>
              </div>
            </div>
          </div>
          <div className="row align-items-xl-center">
            <div className="col-xl-5 col-lg-12 order-2 order-xl-1">
              {/*=== Testimonial Image ===*/}
              <div className="testimonial-one_image-box mb-40 wow fadeInLeft">
                <img
                  src="assets/images/testimonial/testimonial-1.jpg"
                  alt="Testimonial Image"
                />
              </div>
            </div>
            <div className="col-xl-7 col-lg-12 order-1 order-xl-2">
              {/*=== Testimonial Slider ===*/}
              <Slider
                {...testimonialSliderOne}
                className="testimonial-slider-one pl-lg-55 mb-40 wow fadeInRight"
              >
                {/*=== Testimonial Item ===*/}

                {TestimonialData.map((item, index) => (
                  <div className="gw-testimonial-item">
                    <div className="testimonial-inner-content">
                      <div className="quote-rating-box">
                        <div className="icon">
                          <img
                            src="assets/images/testimonial/quote.png"
                            alt="quote icon"
                          />
                        </div>
                        <div className="ratings-box">
                          <h4 className="darkblue-text">
                            {item.qualityServices}
                          </h4>
                          <ul className="ratings">
                            <li>
                              <i className="fas fa-star" />
                            </li>
                            <li>
                              <i className="fas fa-star" />
                            </li>
                            <li>
                              <i className="fas fa-star" />
                            </li>
                            <li>
                              <i className="fas fa-star" />
                            </li>
                            <li>
                              <i className="fas fa-star" />
                            </li>
                          </ul>
                        </div>
                      </div>
                      <p className="darkblue-text">{item.quote}</p>
                      <div className="author-thumb-title">
                        <div className="author-thumb">
                          <img src={item.image} alt="Author Image" />
                        </div>
                        <div className="author-title">
                          <h3 className="title darkblue-text">{item.name}</h3>
                          <p className="position darkblue-text">
                            {item.position}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </Slider>
            </div>
          </div>
        </div>
      </section>
      {/*====== End Testimonial Section ======*/}
      {/*====== Start Activity Section ======*/}
      <section className="activity-section">
        <div className="activity-wrapper-bgc text-white">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-xl-7">
                <div className="section-title text-center mb-50 wow fadeInDown">
                  <span className="sub-title">Popular Activity</span>
                  <h2 className="darkblue-text">Talk to an Expert</h2>
                </div>
              </div>
            </div>
            <p className="col-xl-12 black-text">
              Discover the best ways to experience the beauty of Kyrgyzstan.
              From breathtaking hikes in the Tian Shan mountains to horseback
              riding across wide valleys and camping under starry skies — every
              adventure brings you closer to untouched nature and local
              traditions. Our travel experts are ready to guide you, answer your
              questions, and help you choose the perfect route for your journey.
              Whether you’re seeking adrenaline, cultural discovery, or peaceful
              escapes, we’ll make sure your trip is unforgettable.
            </p>

            <div className="col-xl-12 text-center mt-5">
              <div
                className="hero-button"
                data-animation="fadeInRight"
                data-delay=".6s"
              >
                {/* <Link legacyBehavior href="/#" > */}
                <a className="main-btn primary-btn" onClick={handleClose}>
                  Contact Us
                  <i className="fas fa-paper-plane" />
                </a>
                {/* </Link> */}
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
                    <p>Ayni 85, Bishkek, Kyrgyzstan</p>
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

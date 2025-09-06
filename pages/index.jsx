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

const travelServices = [
  { title: "Individual, group & family tour arrangements" },
  { title: "City & regional sightseeing in Kyrgyzstan" },
  { title: "Hunting, photography & outdoor tours" },
  { title: "Hotel & yurt camp bookings at best rates" },
  { title: "Transfers, transport & professional guides" },
  { title: "VIP travel & shopping trips" },
  { title: "Visa, insurance & legal support" },
];

// const travelServices = [
//   // Services
//   { title: "Tour arrangements for individuals, groups, and families" },
//   { title: "Regional and city sightseeing tours in Kyrgyzstan" },
//   { title: "Hunting tours" },
//   { title: "Hotel reservations in Kyrgyzstan at competitive rates" },
//   { title: "Accommodation bookings: hotels, guesthouses, and yurt camps" },
//   { title: "Transfers and transportation services" },
//   { title: "Male and female professional guide-translators" },
//   { title: "VIP travel services" },
//   { title: "Shopping trips" },
//   { title: "Photography tours" },
//   { title: "Picnic and outdoor tours" },
//   { title: "Visa support services" },
//   { title: "Travel insurance arrangements" },
//   { title: "Legal assistance" },

//   // Tours
//   { title: "Chon Kemin tour" },
//   { title: "Kegety tour" },
//   { title: "Bishkek city tour" },
//   { title: "Shopping tour" },
//   { title: "Ala Archa NP tour" },
//   { title: "Alamedin Gorge tour" },
//   { title: "Chunkurchak tour" },
//   { title: "Karakol Gorge tour" },
//   { title: "Suusamyr tour" },
//   { title: "Jeti Oguz tour" },
//   { title: "Kyrchyn tour" },
//   { title: "Chon Ak Suu tour" },
//   { title: "Fairytale Canyon tour" },
//   { title: "Song Kol tour" },
//   { title: "Suusamyr tour" },
// ];

const popularTours = [
  {
    title: "Adventure in Chon Kemin",
    description:
      "Explore the wild beauty of Chon Kemin Valley with its rivers, forests, and mountain views.",
    location: "Chon Kemin",
    image:
      "https://res.cloudinary.com/dmdmkphey/image/upload/v1757002291/2025-09-04_22.08.44_v4ptfp.jpg",
    link: "/",
    rate: "3.1",
    meta: [{}],
    days: "5",
  },
  {
    title: "Kegety Gorge Escape",
    description:
      "A refreshing getaway into Kegety Gorge — waterfalls, alpine meadows, and fresh mountain air.",
    location: "Kegety",
    image:
      "https://res.cloudinary.com/dmdmkphey/image/upload/v1757002291/2025-09-04_22.08.48_nyhizj.jpg",
    link: "/",
    rate: "5",
    meta: [{}],
    days: "5",
  },
  {
    title: "Discover Bishkek",
    description:
      "City vibes, local bazaars, Soviet architecture and green parks of Bishkek in one tour.",
    location: "Bishkek",
    image:
      "https://res.cloudinary.com/dmdmkphey/image/upload/v1757002291/2025-09-04_22.08.41_zoysgd.jpg",
    link: "/",
    rate: "4.2",
    meta: [{}],
    days: "5",
  },
  {
    title: "Shopping in Bishkek",
    description:
      "Spend a day exploring bazaars and shopping centers for souvenirs and local treasures.",
    location: "Bishkek",
    image:
      "https://res.cloudinary.com/dmdmkphey/image/upload/v1757002291/2025-09-04_22.09.21_moe6s9.jpg",
    link: "/",
    rate: "4.5",
    meta: [{}],
    days: "5",
  },
  {
    title: "Ala Archa National Park",
    description:
      "Hike through dramatic gorges, snowy peaks, and pine forests just outside Bishkek.",
    location: "Ala Archa",
    image:
      "https://res.cloudinary.com/dmdmkphey/image/upload/v1757002290/2025-09-04_22.09.15_iy07rh.jpg",
    link: "/",
    rate: "4.9",
    meta: [{}],
    days: "5",
  },
];

const ServiceTypes = [
  {
    title: "Tour arrangements for individuals, groups, and families",
    description: "Ala-Archa",
    location: "Ala-Archa",
    image:
      "https://res.cloudinary.com/dmdmkphey/image/upload/v1757002295/2025-09-04_22.10.25_vni9qh.jpg",
    link: "/",
  },

  {
    title: "Regional and city sightseeing tours in Kyrgyzstan",
    description: "Ala-Archa",
    location: "Ala-Archa",
    image:
      "https://res.cloudinary.com/dmdmkphey/image/upload/v1757002295/2025-09-04_22.10.19_ebzoch.jpg",
    link: "/",
  },
  {
    title: "Hunting tours",
    description: "Ala-Archa",
    location: "Ala-Archa",
    image:
      "https://res.cloudinary.com/dmdmkphey/image/upload/v1757148646/GoldenEagle-Hunters_xzprrx.jpg",
    link: "/",
  },
  {
    title: "Hotel reservations in Kyrgyzstan at competitive rates",
    description: "Ala-Archa",
    location: "Ala-Archa",
    image:
      "https://res.cloudinary.com/dmdmkphey/image/upload/v1757148580/676832937_ogah5p.webp",
    link: "/",
  },
  {
    title: "Visa support services",
    description: "Ala-Archa",
    location: "Ala-Archa",
    image:
      "https://res.cloudinary.com/dmdmkphey/image/upload/v1757048997/image_011_jlspuz.jpg",
    link: "/",
  },
  {
    title: "Accommodation bookings: hotels, guesthouses, and yurt camps",
    description: "Ala-Archa",
    location: "Ala-Archa",
    image:
      "https://res.cloudinary.com/dmdmkphey/image/upload/v1757002292/2025-09-04_22.08.56_quhrfu.jpg",
    link: "/",
  },
  {
    title: "Transfers and transportation services",
    description: "Ala-Archa",
    location: "Ala-Archa",
    image:
      "https://res.cloudinary.com/dmdmkphey/image/upload/v1757050043/07_ucbcpk.jpg",
    link: "/",
  },
  {
    title: "Male and female professional guide-translators",
    description: "Ala-Archa",
    location: "Ala-Archa",
    image:
      "https://res.cloudinary.com/dmdmkphey/image/upload/v1757049962/istockphoto-512155303-612x612_xlwoae.jpg",
    link: "/",
  },
  {
    title: "VIP travel services",
    description: "Ala-Archa",
    location: "Ala-Archa",
    image:
      "https://res.cloudinary.com/dmdmkphey/image/upload/v1757049884/exploremarmaris-transfer_excq8r.jpg",
    link: "/",
  },
  {
    title: "Shopping trips",
    description: "Ala-Archa",
    location: "Ala-Archa",
    image:
      "https://res.cloudinary.com/dmdmkphey/image/upload/v1757050223/P1190573_yjskzt.jpg",
    link: "/",
  },
  {
    title: "Photography tours",
    description: "Ala-Archa",
    location: "Ala-Archa",
    image:
      "https://res.cloudinary.com/dmdmkphey/image/upload/v1757050121/travel-photography_ryhq6k.avif",
    link: "/",
  },
  {
    title: "Picnic and outdoor tours",
    description: "Ala-Archa",
    location: "Ala-Archa",
    image:
      "https://res.cloudinary.com/dmdmkphey/image/upload/v1757148509/Horse-Trek-Ines-8_jjjqke.jpg",
    link: "/",
  },
  {
    title: "Travel insurance arrangements",
    description: "Ala-Archa",
    location: "Ala-Archa",
    image:
      "https://res.cloudinary.com/dmdmkphey/image/upload/v1757050361/h1-travel-delay-insurance-for-business-trips-1715755414_irsyin.jpg",
    link: "/",
  },
  {
    title: "Legal assistance",
    description: "Ala-Archa",
    location: "Ala-Archa",
    image:
      "https://res.cloudinary.com/dmdmkphey/image/upload/v1757050296/row79_hero_h7l7gy.jpg",
    link: "/",
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
        <div className="hero-wrapper-two ">
          {/*=== Hero Slider ===*/}
          <Slider {...home2Slider} className="hero-slider-two">
            {/*=== Single Slider ===*/}
            <div className="single-slider min-height-vh">
              <div
                className="image-layer bg_cover"
                style={{
                  backgroundImage:
                    "url(https://res.cloudinary.com/dmdmkphey/image/upload/v1757050906/febc0977-eade-4a90-8cc9-56862555e467-istock-1027045006_addfyp.jpg)",
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
                        {/* <Link legacyBehavior href="/">
                          <a className="main-btn primary-btn">
                            More
                            <i className="fas fa-paper-plane" />
                          </a>
                        </Link> */}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/*=== Single Slider ===*/}
            <div className="single-slider min-height-vh">
              <div
                className="image-layer bg_cover"
                style={{
                  backgroundImage:
                    "url(https://res.cloudinary.com/dmdmkphey/image/upload/v1757002295/2025-09-04_22.10.19_ebzoch.jpg)",
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
                        {/* <Link legacyBehavior href="/">
                          <a className="main-btn primary-btn">
                            More
                            <i className="fas fa-paper-plane" />
                          </a>
                        </Link> */}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/*=== Single Slider ===*/}
            <div className="single-slider min-height-vh">
              <div
                className="image-layer bg_cover"
                style={{
                  backgroundImage:
                    "url(https://res.cloudinary.com/dmdmkphey/image/upload/v1757002293/2025-09-04_22.10.01_bkwwlj.jpg)",
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
                        {/* <Link legacyBehavior href="/">
                          <a className="main-btn primary-btn">
                            Explore More
                            <i className="fas fa-paper-plane" />
                          </a>
                        </Link> */}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/*=== Single Slider ===*/}
            <div className="single-slider min-height-vh">
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
                        {/* <Link legacyBehavior href="/">
                          <a className="main-btn primary-btn">
                            Explore More
                            <i className="fas fa-paper-plane" />
                          </a>
                        </Link> */}
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
                <span className="sub-title ">Packages</span>
                <h2 className="darkblue-text">Popular Kyrgyzstan Tours</h2>
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
            {popularTours.map((service) => (
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
                      {service.rate}
                    </div>
                  </div>
                  <h3 className="title darkblue-text">{service.title}</h3>
                  <p className="darkblue-text">{service.description}</p>
                  <p className="location darkblue-text">
                    <i className="far fa-map-marker-alt orange-text" />{" "}
                    <span className="darkblue-text">{service.location}</span>
                  </p>
                  {/* <a href={service.link} className="main-btn filled-btn">
                    Check Now
                    <i className="fas fa-paper-plane" />
                  </a> */}
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </section>
      {/*====== End Activity Section ======*/}

      {/*====== Start CTA Section ======*/}
      <section
        className="cta-bg overlay bg_cover pt-150 pb-150"
        style={{
          backgroundImage:
            "url(https://res.cloudinary.com/dmdmkphey/image/upload/v1757050544/DSC_7006_aizkjg.jpg)",
        }}
      >
        <div className="container">
          <div className="row align-items-center">
            <div className="col-xl-7 col-lg-8">
              {/*=== CTA Content Box ===*/}
              <div className="cta-content-box text-white wow fadeInLeft">
                <h2 className="mb-35">
                  Discover Untouched Nature in the Heart of Kyrgyz Mountains{" "}
                </h2>

                <a className="main-btn primary-btn" onClick={handleClose}>
                  Check Availability
                  <i className="far fa-paper-plane darkblue-text" />
                </a>
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
      {/*====== Start What We Section ======*/}
      <section className="we-section pt-100 pb-50">
        <div className="container">
          <div className="row align-items-xl-center darkblue-text">
            <div className="col-xl-6 ">
              <div className="we-content-box mb-10 wow fadeInLeft">
                <div className="section-title">
                  <span className="sub-title">Who We Are</span>
                  <h2 className="mb-50 darkblue-text">
                    Great Opportunity For Adventure &amp; Travels
                  </h2>
                </div>
                <div className="features-list_one">
                  <div className="single-features-list mb-40">
                    <div className="icon-inner d-flex align-items-center">
                      <div className="icon-check">
                        <i className="fas fa-badge-check" />
                      </div>
                      <div className="icon">
                        <i className="flaticon-helmet" />
                      </div>
                    </div>
                    <div className="content">
                      <h4 className="darkblue-text">Safety First Always</h4>
                      <p>
                        Your safety is our top priority. Professional guides,
                        carefully planned routes, and attention to detail ensure
                        a worry-free experience.
                      </p>
                    </div>
                  </div>
                  <div className="single-features-list mb-40">
                    <div className="icon-inner d-flex align-items-center">
                      <div className="icon-check">
                        <i className="fas fa-badge-check" />
                      </div>
                      <div className="icon">
                        <i className="flaticon-best-price" />
                      </div>
                    </div>
                    <div className="content">
                      <h4 className="darkblue-text">
                        Low Price &amp; Friendly
                      </h4>
                      <p>
                        Travel doesn’t have to be expensive. We offer affordable
                        packages and friendly service so everyone can enjoy
                        their dream trip.
                      </p>
                    </div>
                  </div>
                  <div className="single-features-list mb-40">
                    <div className="icon-inner d-flex align-items-center">
                      <div className="icon-check">
                        <i className="fas fa-badge-check" />
                      </div>
                      <div className="icon">
                        <i className="flaticon-travel" />
                      </div>
                    </div>
                    <div className="content">
                      <h4 className="darkblue-text">Trusted Travel Guide</h4>
                      <p>
                        Count on us to make your journey effortless and
                        memorable. Our experienced guides and well-organized
                        tours guarantee you’ll enjoy every moment.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-6">
              <div className="we-two_image-box mb-20">
                <div className="row align-items-end">
                  <div className="col-md-6">
                    <div className="we-image mb-30 wow fadeInLeft">
                      <img
                        src="https://res.cloudinary.com/dmdmkphey/image/upload/v1757002291/2025-09-04_22.08.28_zfaikh.jpg"
                        alt="we Image"
                      />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="we-image mb-30 wow fadeInRight">
                      <img
                        src="https://res.cloudinary.com/dmdmkphey/image/upload/v1757002289/2025-09-04_22.09.12_oz6nuk.jpg"
                        alt="we Image"
                      />
                    </div>
                  </div>
                  <div className="col-md-12">
                    <div className="we-image mb-30 pr-lg-30 text-md-end wow fadeInDown">
                      <img
                        src="https://res.cloudinary.com/dmdmkphey/image/upload/v1757002289/2025-09-04_22.08.16_tyew8c.jpg"
                        alt="we Image"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*====== End What We Section ======*/}
      {/*====== Start Fact Section ======*/}
      <section className="fact-section">
        <div className="container">
          <div className="row">
            <div className="section-title text-center mb-50 wow fadeInDown">
              {/* <span className="sub-title">Services</span> */}
              <h2 className="darkblue-text">Our Journey in Numbers</h2>
            </div>
            <div className="col-lg-3 col-sm-6">
              {/*=== Counter Item ===*/}
              <div className="single-counter-item text-center mb-40 wow fadeInUp">
                <div className="icon">
                  <i className="flaticon-journey" />
                </div>
                <h2 className="number darkblue-text">
                  <Counter end={124} />+
                </h2>
                <p className="darkblue-text">Happy Traveler</p>
              </div>
            </div>
            <div className="col-lg-3 col-sm-6">
              {/*=== Counter Item ===*/}
              <div className="single-counter-item text-center mb-40 wow fadeInDown">
                <div className="icon">
                  <i className="flaticon-tent-1" />
                </div>
                <h2 className="number darkblue-text">
                  <Counter end={50} />+
                </h2>
                <p className="darkblue-text">Tour Packages</p>
              </div>
            </div>
            <div className="col-lg-3 col-sm-6">
              {/*=== Counter Item ===*/}
              <div className="single-counter-item text-center mb-40 wow fadeInUp">
                <div className="icon">
                  <i className="flaticon-reviews" />
                </div>
                <h2 className="number darkblue-text">
                  <Counter end={99.3} decimals={1} />%
                </h2>
                <p className="darkblue-text">Positive Reviews</p>
              </div>
            </div>
            <div className="col-lg-3 col-sm-6">
              {/*=== Counter Item ===*/}
              <div className="single-counter-item text-center mb-40 wow fadeInDown">
                <div className="icon">
                  <i className="flaticon-award" />
                </div>
                <h2 className="number darkblue-text">
                  <Counter end={30} />+
                </h2>
                <p className="darkblue-text">Awards & Recognitions</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*====== End Fact Section ======*/}
      {/*====== Start Places Section ======*/}
      <section className="testimonial-section pt-60">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-8">
              {/*=== Section Title ===*/}
              <div className="section-title text-center mb-50 wow fadeInDown">
                <span className="sub-title">Services</span>
                <h2 className="darkblue-text">Our Services</h2>
              </div>
            </div>
          </div>
          <section className="places-section ">
            <div className="container">
              <div className="row justify-content-center">
                {ServiceTypes.map((serviceType) => (
                  <div className="col-xl-4 col-md-6 col-sm-12 places-column">
                    {/*=== Single Place Item ===*/}
                    <div className="single-place-item  wow fadeInUp">
                      <div className="place-img">
                        <img src={serviceType.image} alt="Place Image" />
                      </div>
                      <div className="place-content">
                        <div className="info">
                          <h4 className="title darkblue-text">
                            {serviceType.title}
                          </h4>
                          {/* <p className="location">
                            <i className="far fa-map-marker-alt" />
                            {serviceType.location}
                          </p> */}
                          {/* <p className="price">
                            <i className="fas fa-usd-circle" />
                            Price
                            <span className="currency"> </span>{" "}
                            {serviceType.price}
                          </p> */}
                          {/* <div className="meta">
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
                          </div> */}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        </div>
      </section>
      {/*====== End Places Section ======*/}
      {/*====== Start Activity Section ======*/}
      <section className="activity-section">
        <div className="activity-wrapper-bgc text-white">
          <div className="container mb-100">
            <div className="row justify-content-center">
              <div className="col-xl-7">
                <div className="section-title text-center mb-50 wow fadeInDown">
                  <span className="sub-title">Contact</span>
                  <h2 className="darkblue-text">Talk to an Expert</h2>
                </div>
              </div>
            </div>
            <p className="col-xl-12 darkblue-text">
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
                      <a
                        href="https://wa.me/996555551340?text=Hello%2C%20I%20want%20to%20book%20a%20tour!"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
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
                    © 2025{" "}
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
                      <a href="/privacy-policy">Privacy Policy</a>
                    </li>
                    <li>
                      <a href="/terms-and-conditions">Terms & Conditions</a>
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

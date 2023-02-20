import React, { useState, useEffect } from "react";
import { Col, Container, Row } from "react-bootstrap";
import AOS from "aos";
import "aos/dist/aos.css";
import search from "../assets/img/png/search.png";
import trolly from "../assets/img/png/trolly.png";
import gift from "../assets/img/png/gift.png";
import panda from "../assets/img/png/logo.png";
import panda1 from "../assets/img/webp/panda 1.webp";
import mushroom from "../assets/img/png/mushroom.png";
import extract from "../assets/img/png/extract.png";
import vapes from "../assets/img/png/vaps.png";
import cbd from "../assets/img/png/cbd.png";
import edibles from "../assets/img/png/edibles.png";
import cannabis from "../assets/img/png/cannabie.png";
import bulk from "../assets/img/png/bulk.png";
import close from "../assets/img/webp/close.webp";
import { Link } from "react-router-dom";

function Header() {
  const [navShow, setNavShow] = useState(false);
  if (navShow) {
    document.body.style.overflow = "hidden";
  } else {
    document.body.style.overflow = "initial";
  }

  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <>
      <section className=" hearder_bg_img overflow-hidden">
        <div className="bg_brangil py-3">
          <h2
            data-aos="fade-left"
            data-aos-delay="500"
            className="ff_montserrat fw_300 fs_16 text-center text-white mb-0"
          >
            <img className="pe-2" src={gift} alt="" />
            <span className=" ff_montserrat fw_800 fs_16 text-white">
              Black Friday
            </span>{" "}
            savings are here ,save up to 10% off on coupon code
            <span className="ps-4 ff_montserrat fw_800 fs_16 text_gradiant">
              Shop Now
            </span>
          </h2>
        </div>
        <nav className=" pt-3">
          <Container>
            <div
              data-aos="fade-down"
              data-aos-delay="500"
              className=" d-flex justify-content-between align-items-center w-100 "
            >
              <a
                className="ff_inter fw-semibold fs_18 text-white  z_index1"
                href="#"
              >
                <img src={panda} alt="panda-img" />
              </a>{" "}
              <ul className="d-flex gap-3 gap-xl-5 py-3 list-unstyled d-none d-lg-flex align-items-center mb-0 justify-content-end">
                <li>
                  <a
                    class="   ff_montserrat fw-normal fs_16 text-white z_index text_stroke "
                    href="#"
                  >
                    Home
                  </a>
                </li>
                <li>
                  <a
                    class="  ff_montserrat fw-normal fs_16 text-white z_index text_stroke "
                    href="#shop"
                  >
                    SHOP
                  </a>
                </li>
                <li>
                  <a
                    class="  ff_montserrat fw-normal fs_16 text-white z_index text_stroke "
                    href="#about"
                  >
                    ABOUT
                  </a>
                </li>
                <Link to="/Contact">
                  <li>
                    <a
                      class=" ff_montserrat fw-normal fs_16 text-white z_index text_stroke "
                      href="#"
                    >
                      CONTACT
                    </a>
                  </li>
                </Link>
                <li>
                  <a
                    class=" ff_montserrat fw-normal fs_16 text-white z_index text_stroke "
                    href="#"
                  >
                    FAQ
                  </a>
                </li>
                <span className=" search_icon d-flex align-items-center position-relative w-100">
                  <input
                    type="search"
                    placeholder="Search here.."
                    className="w-100 bg-transparent border-0 py-1 pb-2 px-3 Montserrat"
                  />

                  <a href="#">
                    <img className="pe-3 pb-1 " src={search} alt="icon" />
                  </a>
                </span>
                <span>
                  <a href="#">
                    <img src={trolly} alt="trolly" />
                  </a>
                </span>{" "}
                <span className="">
                  <a
                    className="white_space btn px-4 py-2 fw-bold fs_20 ff_montserrat "
                    href="#"
                  >
                    SIGN IN
                  </a>
                </span>{" "}
              </ul>
              <label
                className="menu_formatting d-flex justify-content-end d-lg-none"
                for="check"
              >
                <input
                  onClick={() => setNavShow(true)}
                  className="menu bg-black "
                  type="checkbox"
                  id="check"
                />
                <span className="span_nav1"></span>
                <span className="span_nav2"></span>
                <span className="span_nav3"></span>
              </label>{" "}
            </div>
            <div className="d-lg-none d-flex ">
              <div className={` ${navShow ? "nav-fix " : "fix-navbar"}`}>
                <ul class="ps-0 mb-0 d-flex flex-column py-5 align-items-center  list-unstyled gap-3 gap-md-5 pt-3 transition">
                  <li>
                    <a
                      class=" ff_montserrat fw-normal fs_16 text-white z_index text_stroke "
                      href="#"
                    >
                      Home
                    </a>
                  </li>
                  <li>
                    <a
                      class=" ff_montserrat fw-normal fs_16 text-white z_index text_stroke "
                      href="#"
                    >
                      SHOP
                    </a>
                  </li>
                  <li>
                    <a
                      class=" ff_montserrat fw-normal fs_16 text-white z_index text_stroke "
                      href="#"
                    >
                      ABOUT
                    </a>
                  </li>
                  <li>
                    <a
                      class=" ff_montserrat fw-normal fs_16 text-white z_index text_stroke "
                      href="#"
                    >
                      CONTACT
                    </a>
                  </li>
                  <li>
                    <a
                      class=" ff_montserrat fw-normal fs_16 text-white z_index text_stroke "
                      href="#"
                    >
                      FAQ
                    </a>
                  </li>{" "}
                  <span>
                    <a href="#">
                      {" "}
                      <img
                        onClick={() => setNavShow(false)}
                        className="close_size"
                        src={close}
                        alt="close"
                      />
                    </a>
                  </span>
                </ul>
              </div>
            </div>
          </Container>
        </nav>
        <Container>
          <Row className="mt-5">
            <div
              data-aos="fade-right"
              data-aos-offset="200"
              data-aos-delay="300"
              className="col-md-6"
            >
              <article className=" d-flex flex-column justify-content-center h-100">
                <h1 className=" ff_philosopher fw-bold fs_80 text-white">
                  Setting a <span className="text_gradiant">‘High’</span>{" "}
                  Standard
                </h1>
                <p className=" ff_montserrat fw-normal fs_16 text-white pt-2 mb-5">
                  We at Purple Panda are passionate about becoming the best
                  <span className=" d-xl-block">
                    {" "}
                    online weed dispensary Canada has ever seen. We believe in
                  </span>
                  good products, fair pricing, and top-notch customer service
                </p>
                <span className="mb-5">
                  <a
                    className="transition_500 white_space btn px-4 py-2 fw-bold fs_20 ff_montserrat "
                    href="#"
                  >
                    SIGN IN
                  </a>
                </span>{" "}
              </article>
            </div>
            <div className="col-md-6">
              <article>
                <img className="w-100" src={panda1} alt="panda" />
              </article>
            </div>
          </Row>
        </Container>
      </section>
      <section className="bg_dark overflow-hidden py-5">
        <Container className="overflow-auto">
          <div className=" d-flex justify-content-between  w_12">
            <span className="d-flex flex-column align-items-center ff_philosopher fw-bold fs_24 text-white">
              <img className="mb-3" src={mushroom} alt="IMG" />
              Mushrooms
            </span>
            <span className="d-flex flex-column align-items-center ff_philosopher fw-bold fs_24 text-white">
              <img className="mb-3" src={extract} alt="IMG" />
              Extracts
            </span>
            <span className="text-center d-flex flex-column align-items-center justify-content-center ff_philosopher fw-bold fs_24 text-white">
              <img className="mb-3" src={vapes} alt="IMG" />
              Vapes &
              <br />
              Accessories
            </span>
            <span className="d-flex flex-column align-items-center ff_philosopher fw-bold fs_24 text-white">
              <img className="mb-3" src={cbd} alt="IMG" />
              CBD
            </span>
            <span className="d-flex flex-column align-items-center ff_philosopher fw-bold fs_24 text-white">
              <img className="mb-3" src={edibles} alt="IMG" />
              Edibles
            </span>
            <span className="d-flex flex-column align-items-center ff_philosopher fw-bold fs_24 text-white">
              <img className="mb-3" src={cannabis} alt="IMG" />
              Cannabis
            </span>
            <span className="d-flex flex-column align-items-center ff_philosopher fw-bold fs_24 text-white">
              <img className="mb-3" src={bulk} alt="IMG" />
              Bulk Orders
            </span>
          </div>
        </Container>
      </section>
    </>
  );
}

export default Header;

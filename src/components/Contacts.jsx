import React, { useState } from "react";
import leaves from "../assets/img/png/leaves.png";
import dailer from "../assets/img/webp/dailer.png";
import msg from "../assets/img/webp/msg.png";
import { Container, Row } from "react-bootstrap";
import search from "../assets/img/png/search.png";
import trolly from "../assets/img/png/trolly.png";
import panda from "../assets/img/png/logo.png";
import close from "../assets/img/webp/close.webp";
import { Link } from "react-router-dom";

function Contacts() {
  const [navShow, setNavShow] = useState(false);
  if (navShow) {
    document.body.style.overflow = "hidden";
  } else {
    document.body.style.overflow = "initial";
  }
  return (
    <>
      {" "}
      <section className="contect_bg_img">
        <nav className=" pt-3 pb-5 mb-5">
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
                <Link to="/">
                  {" "}
                  <li>
                    <a
                      class=" ff_montserrat fw-normal fs_16 text-white z_index text_stroke "
                      href="#"
                    >
                      Home
                    </a>
                  </li>
                </Link>
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
        <div className="py-5">
          {" "}
          <h2 className="ff_philosopher fw-normal fs_48 text-white text-center">
            Contact
          </h2>
          <p className="pb-5 mb-5 ff_montserrat fw-normal fs_16 text-white text-center">
            Home Contact
          </p>
        </div>
      </section>
      <section className="pb-4">
        {" "}
        <Container>
          <Row className=" align-items-center">
            {" "}
            <div className="col-xl-6 col-lg-5">
              <img className="w-100" src={leaves} alt="leaf" />
            </div>
            <div className="col-xl-6 col-lg-7 ">
              {" "}
              <article className="about_blur px-3 py-4">
                <h2 className=" ff_philosopher  fw-bold fs_32 text-white">
                  Feel free to
                  <span className="text_gradiant"> contact us </span> anytime
                  you need our help.
                </h2>
                <p className=" ff_montserrat fw-normal fs_16 text-white">
                  We usually reply in 24 hours, if there is an urgent need to
                  reach us. please give us a call at the number below
                </p>
                <article className="flex-column flex-sm-row gap-3 d-flex justify-content-between py-4 mb-2">
                  <span className="">
                    <a
                      className="white_space ff_montserrat fw-semibold fs_16
                    text-white"
                      href="#"
                    >
                      <img className="pe-2" src={dailer} alt="icon" />{" "}
                      1-888-726-3219
                    </a>
                  </span>
                  <span className="">
                    <a
                      className="white_space ff_montserrat fw-semibold fs_16
                    text-white"
                    >
                      <img className="pe-2" src={msg} alt="icon" />
                      purplepandagta.info@proton.me
                    </a>
                  </span>
                </article>
                <form className="" action="">
                  <label
                    className="w-100 d-flex flex-row justify-content-between"
                    htmlFor=""
                  >
                    <input
                      className="w_49 blur_bg_range rounded-2 px-4 py-2"
                      type="text"
                      placeholder="First name"
                    />
                    <input
                      className="w_49 blur_bg_range rounded-2 px-4 py-2"
                      type="text"
                      placeholder="Last name"
                    />
                  </label>

                  <label
                    className="w-100 d-flex flex-row justify-content-between mt-2 py-1"
                    htmlFor=""
                  >
                    {" "}
                    <input
                      className="w_49 blur_bg_range rounded-2 px-4 py-2"
                      type="text"
                      placeholder="Email address"
                    />
                    <input
                      className="w_49 blur_bg_range rounded-2 px-4 py-2"
                      type="text"
                      placeholder="Phone number"
                    />
                  </label>

                  <textarea
                    name=""
                    id=""
                    cols="5"
                    rows="3"
                    placeholder="Message..."
                    className="mt-2 resize_none w-100 blur_bg_range px-4 py-2 mb-5"
                  ></textarea>
                  <span className="">
                    <a
                      className="transition_500 white_space btn px-4 py-2 fw-bold fs_20 ff_montserrat "
                      href="#"
                    >
                      SUBMIT
                    </a>
                  </span>
                </form>
              </article>
            </div>
          </Row>
        </Container>
      </section>
    </>
  );
}

export default Contacts;

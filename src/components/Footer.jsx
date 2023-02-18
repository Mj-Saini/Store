import React from "react";
import { Container, Row } from "react-bootstrap";
import logo from "../assets/img/png/logo.png";

function Footer() {
  return (
    <>
      <section className="footer_bg_img pt-5">
        <Container className="">
          <Row className=" justify-content-center ">
            <div className="col-md-8 mx-auto">
              <article className="d-flex flex-column align-items-center ">
                <span>
                  <a href="#">
                    {" "}
                    <img src={logo} alt="logo" />
                  </a>
                </span>
                <p className="text-center ff_montserrat fw-normal fs_16 text-white mt-4">
                  Tempor cras et scelerisque bibendum. Sapien proin pharetra
                  iaculis cras massa{" "}
                  <span className=" d-lg-block">
                    auctor turpis. Eget massa imperdiet sit massa. Hac sit nec.
                  </span>
                </p>{" "}
                <ul className="d-flex gap-5 mt-4 pb-5 ps-0">
                  <li>
                    <a
                      class="  ff_montserrat fw-normal fs_16 text-white z_index text_stroke "
                      href="#"
                    >
                      SHOP
                    </a>
                  </li>
                  <li>
                    <a
                      class="  ff_montserrat fw-normal fs_16 text-white z_index text_stroke "
                      href="#"
                    >
                      ABOUT
                    </a>
                  </li>{" "}
                  <li>
                    <a
                      class="   ff_montserrat fw-normal fs_16 text-white z_index text_stroke "
                      href="#"
                    >
                      CONTACT
                    </a>
                  </li>
                </ul>
              </article>
            </div>
          </Row>
        </Container>
        <div className="bottom_border_footer w-100"></div>
        <p className=" ff_montserrat fw-normal fs_12 text-white text-center mt-3 pb-4 mb-0">
          &#169;copyright2022purplepanda
        </p>
      </section>
    </>
  );
}

export default Footer;

import React from "react";
import { Carousel, Container, Row } from "react-bootstrap";
import leaf from "../assets/img/png/leaf.png";
import group from "../assets/img/png/group.png";
import manding from "../assets/img/png/manding.png";
import spray from "../assets/img/png/spray.png";
import last from "../assets/img/png/last.png";

function About() {
  return (
    <>
      <section
        id="about"
        className="py-4 py-md-5 about_bg_img about_gradiant overflow-hidden"
      >
        <Container>
          <Row className=" align-items-center justify-content-center">
            <div className="col-xl-7 col-lg-6 ">
              <article className="about_blur py-md-5 py-4 px-md-5 px-2 border_left position-relative">
                <h2 className=" ff_philosopher fw-normal fs_48 text-white px-2">
                  About <span className="text_gradiant">Us</span>
                </h2>
                <p className=" ff_montserrat fw-normal fs_16 text-white mt-3 mb-5 px-2">
                  Purple Panda is a Canadian online cannabis dispensary with a
                  passion for good weed and even better customer service. We all
                  remember the days of waiting for scary strangers on street
                  corners, but thankfully those days are over. Now, we’re proud
                  of how we provide an easy, convenient, and user-friendly
                  experience to our clients.{" "}
                  <span className="d-block">
                    {" "}
                    We specialize in high-quality cannabis for both recreational
                    and medical purposes, while also making sure that you’re
                    getting the best bud for your buck! Along with all the
                    different strains of cannabis that we stock, you can also
                    get your fill of edibles, vapes, CBD, extracts, and even buy
                    magic mushrooms online from our store.
                  </span>
                </p>
                <span className="">
                  <a
                    className="transition_500 white_space btn px-4 py-2 fw-bold fs_20 ff_montserrat "
                    href="#"
                  >
                    READ MORE
                  </a>
                </span>{" "}
              </article>
            </div>
            <div className="col-xl-5 col-lg-6 col-12 d-none d-sm-flex ps-lg-5">
              <Row className=" justify-content-center justify-content-lg-end mt-5 mt-lg-0 w-100">
                <div className="col-sm-7 ">
                  <article className=" d-flex justify-content-end">
                    <img className="leaf_img" src={leaf} alt="img" />
                  </article>
                  <article className=" d-flex justify-content-end mt-2">
                    <img className="group_img" src={group} alt="img" />
                  </article>
                  <article className=" d-flex justify-content-end mt-2">
                    <img className="leaf_img" src={manding} alt="img" />
                  </article>
                </div>
                <div className="col-sm-5 ps-0">
                  <article>
                    <img className="spray_img" src={spray} alt="btl" />
                  </article>
                  <article className="mt-2">
                    <img className="leaf_img" src={last} alt="btl" />
                  </article>
                </div>
              </Row>
            </div>
            <Carousel className="d-flex d-sm-none mt-5">
              <Carousel.Item>
                {" "}
                <article className=" d-flex justify-content-center">
                  <img className="img_size" src={leaf} alt="img" />{" "}
                </article>
              </Carousel.Item>
              <Carousel.Item>
                {" "}
                <article className=" d-flex justify-content-center">
                  <img className="img_size" src={group} alt="img" />
                </article>
              </Carousel.Item>

              <Carousel.Item>
                <article className=" d-flex justify-content-center">
                  <img className="img_size" src={manding} alt="img" />
                </article>
              </Carousel.Item>
              <Carousel.Item>
                <article className=" d-flex justify-content-center">
                  <img className="img_size" src={last} alt="btl" />
                </article>
              </Carousel.Item>
              <Carousel.Item>
                {" "}
                <article className=" d-flex justify-content-center">
                  <img className="img_size" src={spray} alt="btl" />
                </article>
              </Carousel.Item>
            </Carousel>
          </Row>
        </Container>
      </section>
    </>
  );
}

export default About;

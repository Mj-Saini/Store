import React from "react";
import { Carousel, Container, Row } from "react-bootstrap";
import flower from "../assets/img/png/flower.png";
import linear from "../assets/img/png/linear.png";
import micro from "../assets/img/png/micro.png";
import blackdog from "../assets/img/png/black dog.png";
import madical from "../assets/img/png/madical.png";

function Mail() {
  return (
    <>
      <section className="py-4 py-md-5 about_bg_img about_gradiant">
        <Container>
          <h2 className="ff_philosopher fw-bold fs_48 text-white text-center">
            Cannabis
          </h2>
          <p className="ff_montserrat fw-normal fs_16 text-white text-center ">
            While we stock all sorts of products to make you feel great, we’re
            experts and lovers of cannabis at heart. We offer a wide range of
            buds each with different highs, flavors, and aromas, so you can find
            the perfect joint-filler, bowl-packer, or pipe clearer to suit your
            tastes
          </p>
          <Row className="mt-5 align-items-center justify-content-center">
            <div className="col-xl-7 col-lg-6 ">
              <article className="about_blur py-md-5 py-4 px-md-5 px-3 border_left position-relative">
                <h2 className=" ff_philosopher fw-normal fs_48 text-white">
                  Strain <span className="text_gradiant">Families</span>
                </h2>
                <p className=" ff_montserrat fw-normal fs_16 text-white mt-3 mb-5">
                  We stock the three main families of cannabis at Purple Panda,
                  each of which has its own qualities.
                </p>
                <article className="d-flex mt-4">
                  <h3 className=" ff_montserrat fw-semibold fs_24 text-white">
                    Indica:
                  </h3>
                  <p className=" ff_montserrat fw-normal fs_16 text-white ps-3">
                    These are your bedtime buds, great for relaxing at the end
                    of the day and for treating stress and anxiety.
                  </p>
                </article>
                <article className="d-flex mt-4">
                  <h3 className=" ff_montserrat fw-semibold fs_24 text-white">
                    Sativa:
                  </h3>
                  <p className=" ff_montserrat fw-normal fs_16 text-white ps-3">
                    Smoke up some Sativa for a boost of energy and creativity,
                    perfect for a sunny summer’s day with friends!
                  </p>
                </article>
                <article className="d-flex mt-4">
                  <h3 className=" ff_montserrat fw-semibold fs_24 text-white">
                    Hybrid:
                  </h3>
                  <p className=" ff_montserrat fw-normal fs_16 text-white ps-3">
                    Get the best of both worlds with our Hybrid range, bringing
                    together the sensations and flavors of Indica and Sativa for
                    something totally unique.
                  </p>
                </article>
              </article>
            </div>
            <div className="col-xl-5 col-lg-6 col-12 d-none d-sm-flex ps-lg-5 ">
              <Row className=" justify-content-center justify-content-lg-end mt-5 mt-lg-0 w-100">
                <div className="col-sm-7 ">
                  <article className=" d-flex justify-content-end">
                    <img className="leaf_img" src={flower} alt="img" />
                  </article>
                  <article className=" d-flex justify-content-end mt-2">
                    <img className="group_img" src={linear} alt="img" />
                  </article>
                  <article className=" d-flex justify-content-end mt-2">
                    <img className="leaf_img" src={micro} alt="img" />
                  </article>
                </div>
                <div className="col-sm-5 ps-0">
                  <article>
                    <img className="spray_img" src={blackdog} alt="btl" />
                  </article>
                  <article className="mt-2">
                    <img className="leaf_img" src={madical} alt="btl" />
                  </article>
                </div>
              </Row>
            </div>
            <Carousel className="d-flex d-sm-none mt-5">
              <Carousel.Item>
                {" "}
                <article className=" d-flex justify-content-center">
                  <img className="img_size" src={flower} alt="img" />{" "}
                </article>
              </Carousel.Item>
              <Carousel.Item>
                {" "}
                <article className=" d-flex justify-content-center">
                  <img className="img_size" src={linear} alt="img" />
                </article>
              </Carousel.Item>

              <Carousel.Item>
                <article className=" d-flex justify-content-center">
                  <img className="img_size" src={micro} alt="img" />
                </article>
              </Carousel.Item>
              <Carousel.Item>
                <article className=" d-flex justify-content-center">
                  <img className="img_size" src={blackdog} alt="btl" />
                </article>
              </Carousel.Item>
              <Carousel.Item>
                {" "}
                <article className=" d-flex justify-content-center">
                  <img className="img_size" src={madical} alt="btl" />
                </article>
              </Carousel.Item>
            </Carousel>
          </Row>
        </Container>
      </section>
    </>
  );
}

export default Mail;

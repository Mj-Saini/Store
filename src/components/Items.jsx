import React from "react";
import { Carousel, Container, Row } from "react-bootstrap";
import patch from "../assets/img/png/patch.png";
import atomic from "../assets/img/png/atomic.png";
import sticks from "../assets/img/png/sticks.png";

function Items() {
  return (
    <>
      <section className="sec_panda_bgimg py-5">
        <Container>
          <h2 className=" ff_philosopher fw-bold fs_48 text-center text-white">
            Most <span className="text_gradiant">Popular</span> Items
          </h2>
          <p className=" ff_montserrat fw-normal fs_16 text-white text-center mt-3 mb-5">
            Pellentesque tincidunt fermentum mauris dignissim quam{" "}
            <span className=" d-sm-block">
              arcu. A netus natoque urna vivamus faucibus. Sollicitudin et nisl.
            </span>
          </p>
          <Row className=" d-none d-sm-flex">
            <div className="col-lg-3 col-sm-6">
              <article className="about_blur px-2 pb-4 pt-2">
                <img className="w-100" src={patch} alt="itmes-img" />
                <p className=" ff_montserrat fw-normal fs_24 text-white mt-3 mb-0">
                  Stoner Patch(500mg)
                </p>
                <h2 className="ff_montserrat fw-bold fs_24 text_gradiant mb-4 pb-3">
                  $20.00
                </h2>
                <span className="">
                  <a
                    className="transition_500 white_space btn fw-bold fs_20 ff_montserrat "
                    href="#"
                  >
                    ADD TO CART
                  </a>
                </span>
              </article>
            </div>
            <div className="col-lg-3 col-sm-6">
              <article className="about_blur  px-2 pb-4 pt-2">
                <img className="w-100" src={atomic} alt="itmes-img" />
                <p className=" ff_montserrat fw-normal fs_24 text-white mt-3 mb-0">
                  Stoner Patch(500mg)
                </p>
                <h2 className="ff_montserrat fw-bold fs_24 text_gradiant mb-4 pb-3">
                  $20.00
                </h2>
                <span className="">
                  <a
                    className="transition_500 white_space btn fw-bold fs_20 ff_montserrat "
                    href="#"
                  >
                    ADD TO CART
                  </a>
                </span>
              </article>
            </div>
            <div className="col-lg-3 col-sm-6">
              <article className="about_blur px-2 pb-4 pt-2 mt-4 mt-lg-0">
                <img className="w-100" src={sticks} alt="itmes-img" />
                <p className=" ff_montserrat fw-normal fs_24 text-white mt-3 mb-0">
                  Stoner Patch(500mg)
                </p>
                <h2 className="ff_montserrat fw-bold fs_24 text_gradiant mb-4 pb-3">
                  $20.00
                </h2>
                <span className="">
                  <a
                    className="transition_500 white_space btn fw-bold fs_20 ff_montserrat "
                    href="#"
                  >
                    ADD TO CART
                  </a>
                </span>
              </article>
            </div>
            <div className="col-lg-3 col-sm-6">
              <article className="about_blur px-2 pb-4 pt-2 mt-4 mt-lg-0">
                <img className="w-100" src={sticks} alt="itmes-img" />
                <p className=" ff_montserrat fw-normal fs_24 text-white mt-3 mb-0">
                  Stoner Patch(500mg)
                </p>
                <h2 className="ff_montserrat fw-bold fs_24 text_gradiant mb-4 pb-3">
                  $20.00
                </h2>
                <span className="">
                  <a
                    className="transition_500 white_space btn fw-bold fs_20 ff_montserrat "
                    href="#"
                  >
                    ADD TO CART
                  </a>
                </span>
              </article>
            </div>
          </Row>
          <Carousel className=" d-sm-none">
            <Carousel.Item>
              {" "}
              <div className="col-lg-3 col-sm-6">
                <article className="about_blur  px-2 pb-4 pt-2 mt-4 mt-lg-0">
                  <img className="w-100" src={patch} alt="itmes-img" />
                  <p className=" ff_montserrat fw-normal fs_24 text-white mt-3 mb-0">
                    Stoner Patch(500mg)
                  </p>
                  <h2 className="ff_montserrat fw-bold fs_24 text_gradiant mb-4 pb-3">
                    $20.00
                  </h2>
                  <span className="">
                    <a
                      className="transition_500 white_space btn fw-bold fs_20 ff_montserrat "
                      href="#"
                    >
                      ADD TO CART
                    </a>
                  </span>
                </article>
              </div>
            </Carousel.Item>
            <Carousel.Item>
              {" "}
              <div className="col-lg-3 col-sm-6">
                <article className="about_blur  px-2 pb-4 pt-2 mt-4 mt-lg-0">
                  <img className="w-100" src={atomic} alt="itmes-img" />
                  <p className=" ff_montserrat fw-normal fs_24 text-white mt-3 mb-0">
                    Stoner Patch(500mg)
                  </p>
                  <h2 className="ff_montserrat fw-bold fs_24 text_gradiant mb-4 pb-3">
                    $20.00
                  </h2>
                  <span className="">
                    <a
                      className="transition_500 white_space btn fw-bold fs_20 ff_montserrat "
                      href="#"
                    >
                      ADD TO CART
                    </a>
                  </span>
                </article>
              </div>
            </Carousel.Item>
            <Carousel.Item>
              {" "}
              <div className="col-lg-3 col-sm-6">
                <article className="about_blur px-2 pb-4 pt-2 mt-4 mt-lg-0">
                  <img className="w-100" src={sticks} alt="itmes-img" />
                  <p className=" ff_montserrat fw-normal fs_24 text-white mt-3 mb-0">
                    Stoner Patch(500mg)
                  </p>
                  <h2 className="ff_montserrat fw-bold fs_24 text_gradiant mb-4 pb-3">
                    $20.00
                  </h2>
                  <span className="">
                    <a
                      className="transition_500 white_space btn fw-bold fs_20 ff_montserrat "
                      href="#"
                    >
                      ADD TO CART
                    </a>
                  </span>
                </article>
              </div>
            </Carousel.Item>
            <Carousel.Item>
              {" "}
              <div className="col-lg-3 col-sm-6">
                <article className="about_blur px-2 pb-4 pt-2 mt-4 mt-lg-0">
                  <img className="w-100" src={sticks} alt="itmes-img" />
                  <p className=" ff_montserrat fw-normal fs_24 text-white mt-3 mb-0">
                    Stoner Patch(500mg)
                  </p>
                  <h2 className="ff_montserrat fw-bold fs_24 text_gradiant mb-4 pb-3">
                    $20.00
                  </h2>
                  <span className="">
                    <a
                      className="transition_500 white_space btn fw-bold fs_20 ff_montserrat "
                      href="#"
                    >
                      ADD TO CART
                    </a>
                  </span>
                </article>
              </div>
            </Carousel.Item>
          </Carousel>
        </Container>
      </section>
    </>
  );
}

export default Items;

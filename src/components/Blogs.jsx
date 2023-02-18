import React from "react";
import { Carousel, Container, Row } from "react-bootstrap";
import stoner from "../assets/img/png/stoner.png";
import lectus from "../assets/img/png/lectus.png";
import odio from "../assets/img/png/odio.png";

function Items() {
  return (
    <>
      <section className="bg_img_order py-5">
        <Container>
          <h2 className=" ff_philosopher fw-bold fs_48 text-center text-white">
            Latest <span className="text_gradiant">Blogs</span> And
            <span className="text_gradiant"> News</span>
          </h2>

          <Row className=" d-none d-md-flex mt-5 justify-content-center">
            <div className="col-lg-4 col-sm-6">
              <article className="about_blur p-2 h-100">
                <img className="w-100" src={stoner} alt="itmes-img" />
                <article className="px-3">
                  {" "}
                  <p className=" ff_montserrat fw-normal fs_12 text-white mb-0 mt-2">
                    12 Dec 2022
                  </p>
                  <h2 className="ff_montserrat fw-semibold fs_24 text-white pt-3">
                    Integer vulputate
                  </h2>
                  <p className=" ff_montserrat fw-normal fs_16 text-white mb-5">
                    Nulla vitae imperdiet molestie pulvinar neque. Urna senectus
                    pharetra odio sed senectus sed morbi suspendisse convallis.{" "}
                  </p>
                  <span className="">
                    <a
                      className="transition_500 white_space fw-bold text_gradiant fs_20 ff_montserrat "
                      href="#"
                    >
                      READ MORE....
                    </a>
                  </span>
                </article>
              </article>
            </div>
            <div className="col-lg-4 col-sm-6">
              <article className="about_blur p-2 h-100">
                <img className="w-100" src={lectus} alt="itmes-img" />
                <article className="px-3">
                  {" "}
                  <p className=" ff_montserrat fw-normal fs_12 text-white mb-0 mt-2">
                    12 Dec 2022
                  </p>
                  <h2 className="ff_montserrat fw-semibold fs_24 text-white pt-3">
                    Lectus aenean
                  </h2>
                  <p className=" ff_montserrat fw-normal fs_16 text-white mb-5">
                    Tempor cras et scelerisque bibendum. Sapien proin pharetra
                    iaculis cras massa auctor turpis. Eget massa imperdiet sit
                    massa. Hac sit nec.
                  </p>
                  <span className="">
                    <a
                      className="transition_500 white_space fw-bold text_gradiant fs_20 ff_montserrat "
                      href="#"
                    >
                      READ MORE....
                    </a>
                  </span>
                </article>
              </article>
            </div>
            <div className="col-lg-4 col-sm-6 mt-4 mt-lg-0">
              <article className="about_blur p-2 h-100">
                <img className="w-100" src={odio} alt="itmes-img" />
                <article className="px-3">
                  {" "}
                  <p className=" ff_montserrat fw-normal fs_12 text-white mb-0 mt-2">
                    12 Dec 2022
                  </p>
                  <h2 className="ff_montserrat fw-semibold fs_24 text-white pt-3">
                    Egestas odio
                  </h2>
                  <p className=" ff_montserrat fw-normal fs_16 text-white mb-5">
                    Viverra sit volutpat pulvinar vulputate accumsan sapien.
                    Amet urna etiam curabitur ac in viverra tortor proin. Dui
                    viverra eu tristique in eget ut purus.
                  </p>
                  <span className="">
                    <a
                      className="transition_500 white_space fw-bold text_gradiant fs_20 ff_montserrat "
                      href="#"
                    >
                      READ MORE....
                    </a>
                  </span>
                </article>
              </article>
            </div>
          </Row>
          <Carousel className=" d-md-none">
            {/* <Carousel.Item>
              <article className="about_blur p-2 h-100">
                <img className="w-100" src={stoner} alt="itmes-img" />
                <article className="px-3">
                  {" "}
                  <p className=" ff_montserrat fw-normal fs_12 text-white mb-0 mt-2">
                    12 Dec 2022
                  </p>
                  <h2 className="ff_montserrat fw-semibold fs_24 text-white pt-3">
                    Integer vulputate
                  </h2>
                  <p className=" ff_montserrat fw-normal fs_16 text-white mb-5">
                    Nulla vitae imperdiet molestie pulvinar neque. Urna senectus
                    pharetra odio sed senectus sed morbi suspendisse convallis.{" "}
                  </p>
                  <span className="">
                    <a
                      className="transition_500 white_space fw-bold text_gradiant fs_20 ff_montserrat "
                      href="#"
                    >
                      READ MORE....
                    </a>
                  </span>
                </article>
              </article>
            </Carousel.Item> */}
            <Carousel.Item>
              <article className="about_blur p-2 h-100">
                <img className="w-100" src={stoner} alt="itmes-img" />
                <article className="px-3">
                  {" "}
                  <p className=" ff_montserrat fw-normal fs_12 text-white mb-0 mt-2">
                    12 Dec 2022
                  </p>
                  <h2 className="ff_montserrat fw-semibold fs_24 text-white pt-3">
                    Integer vulputate
                  </h2>
                  <p className=" ff_montserrat fw-normal fs_16 text-white mb-5">
                    Tempor cras et scelerisque bibendum. Sapien proin pharetra
                    iaculis cras massa auctor turpis. Eget massa imperdiet sit
                    massa. Hac sit nec.
                  </p>
                  <span className="">
                    <a
                      className="transition_500 white_space fw-bold text_gradiant fs_20 ff_montserrat "
                      href="#"
                    >
                      READ MORE....
                    </a>
                  </span>
                </article>
              </article>
            </Carousel.Item>
            <Carousel.Item>
              <article className="about_blur p-2 h-100">
                <img className="w-100" src={lectus} alt="itmes-img" />
                <article className="px-3">
                  {" "}
                  <p className=" ff_montserrat fw-normal fs_12 text-white mb-0 mt-2">
                    12 Dec 2022
                  </p>
                  <h2 className="ff_montserrat fw-semibold fs_24 text-white pt-3">
                    Lectus aenean
                  </h2>
                  <p className=" ff_montserrat fw-normal fs_16 text-white mb-5">
                    Tempor cras et scelerisque bibendum. Sapien proin pharetra
                    iaculis cras massa auctor turpis. Eget massa imperdiet sit
                    massa. Hac sit nec.
                  </p>
                  <span className="">
                    <a
                      className="transition_500 white_space fw-bold text_gradiant fs_20 ff_montserrat "
                      href="#"
                    >
                      READ MORE....
                    </a>
                  </span>
                </article>
              </article>
            </Carousel.Item>
            <Carousel.Item>
              <article className="about_blur p-2 h-100">
                <img className="w-100" src={odio} alt="itmes-img" />
                <article className="px-3">
                  {" "}
                  <p className=" ff_montserrat fw-normal fs_12 text-white mb-0 mt-2">
                    12 Dec 2022
                  </p>
                  <h2 className="ff_montserrat fw-semibold fs_24 text-white pt-3">
                    Egestas odio
                  </h2>
                  <p className=" ff_montserrat fw-normal fs_16 text-white mb-5">
                    Viverra sit volutpat pulvinar vulputate accumsan sapien.
                    Amet urna etiam curabitur ac in viverra tortor proin. Dui
                    viverra eu tristique in eget ut purus.
                  </p>
                  <span className="">
                    <a
                      className="transition_500 white_space fw-bold text_gradiant fs_20 ff_montserrat "
                      href="#"
                    >
                      READ MORE....
                    </a>
                  </span>
                </article>
              </article>
            </Carousel.Item>
          </Carousel>
        </Container>
      </section>
    </>
  );
}

export default Items;

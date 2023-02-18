import React from "react";
import { Container, Row } from "react-bootstrap";
import star from "../assets/img/png/star.png";
import mask from "../assets/img/png/mask1.png";

function Classification() {
  return (
    <>
      <section className="classification_bg_img py-5 ">
        <Container className="pt-5">
          <Row>
            <div className="col-lg-6 mb-5 position-relative">
              <img
                className=" position-absolute top-50 translate-middle-y mb-5 end-0"
                src={mask}
                alt="img"
              />
              <article className="blur_bg_range p-sm-5 p-3">
                <h2 className="stroke_purpal ff_philosopher fw-bold fs_48 text-white">
                  Our <span className=" text_gradiant"> Classifications</span>
                </h2>
                <p className=" ff_montserrat fw-normal fs_16 text-white stroke _purpal pt-3">
                  We’re proud of all our weed, but we still classify it based on
                  quality and price, with our levels classed at:
                </p>
                <article className="mt-4 pt-3">
                  {" "}
                  <img className="star_size" src={star} alt="star" />
                  <img className="star_size" src={star} alt="star" />
                  <h3 className="mt-2 ff_montserrat fw-semibold fs_24 text-white stroke _purpal">
                    2- Star
                  </h3>
                  <p className=" ff_montserrat fw-normal fs_16 text-white stroke _purpal">
                    Very affordable , entry level quality
                  </p>
                </article>
                <article className="mt-4">
                  {" "}
                  <img className="star_size" src={star} alt="star" />
                  <img className="star_size" src={star} alt="star" />
                  <img className="star_size" src={star} alt="star" />
                  <h3 className="mt-2 ff_montserrat fw-semibold fs_24 text-white stroke_purpal">
                    3- Star
                  </h3>
                  <p className=" ff_montserrat fw-normal fs_16 text-white stroke _purpal">
                    Tried, tested, and affordable.
                  </p>
                </article>
                <article className="mt-4 mb-5">
                  {" "}
                  <img className="star_size" src={star} alt="star" />
                  <img className="star_size" src={star} alt="star" />
                  <img className="star_size" src={star} alt="star" />
                  <img className="star_size" src={star} alt="star" />
                  <img className="star_size" src={star} alt="star" />
                  <h3 className="mt-2 ff_montserrat fw-semibold fs_24 text-white stroke _purpal">
                    5- Star
                  </h3>
                  <p className=" ff_montserrat fw-normal fs_16 text-white stroke _purpal">
                    Top-shelf buds for those special occasions.
                  </p>{" "}
                </article>{" "}
                <span className="">
                  <a
                    className=" btn ff_montserrat fw-bold fs_20  white_space transition_500"
                    href="#"
                  >
                    Take me to space cannabis
                  </a>
                </span>{" "}
              </article>
            </div>
          </Row>
        </Container>
      </section>
    </>
  );
}

export default Classification;

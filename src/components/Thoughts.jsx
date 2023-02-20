import React from "react";
import { Container, Row } from "react-bootstrap";
import shodow from "../assets/img/png/shodow.png";
import tree from "../assets/img/png/purpal tree.png";

function Thoughts() {
  return (
    <>
      <section className="py-lg-5 pt-4 overflow-hidden z_index">
        <img className="blur_body1" src={shodow} alt="" />{" "}
        <Container className="my-5 py-5 z_index">
          <Row className="about_blur justify-content-between z_index">
            <div className="col-xl-7 col-lg-6">
              <article className="px-sm-4 px-3 py-4 h-100 d-flex justify-content-center flex-column z_index">
                <h2 className=" ff_philosopher fw-bold fs_48 text-white">
                  High
                  <span className="text_gradiant fw-bold">
                    {" "}
                    Thoughts,
                  </span> Low{" "}
                  <span className="text_gradiant fw-bold">Prices</span>
                </h2>
                <p className="ff_montserrat fw-normal fs_16 text-white mt-3 pe-sm-4">
                  We pride ourselves on supplying premium, top-shelf weed
                  without the top-shelf markups. Some dispensaries will charge
                  an arm and a leg for the newest “flavors”, but we believe in
                  fair, affordable prices for good products at every level of
                  quality and breed.
                </p>
                <span className="mt-sm-5 mt-4">
                  <a
                    className="transition_500 white_space btn px-4 py-3 fw-bold fs_20 ff_montserrat "
                    href="#"
                  >
                    GIVE PURPLE PANDA A GO
                  </a>
                </span>{" "}
              </article>
            </div>
            <div className="col-xl-4 col-lg-6 ">
              <img className="w-100 scale pe-5 pb-2 " src={tree} alt="img" />
            </div>
          </Row>
        </Container>
      </section>
    </>
  );
}

export default Thoughts;

import React from "react";
import { Container, Row } from "react-bootstrap";
import mask from "../assets/img/png/mask.png";
import mask1 from "../assets/img/png/mask1.png";

function Range() {
  return (
    <>
      <section className="py-4 pt-lg-5">
        <Container className="my-lg-5 position-relative px-4 mt-4">
          <img
            className=" position-absolute z_index0 bottom-0"
            src={mask}
            alt="tree"
          />
          <img
            className="position-absolute z_index0 end-0"
            src={mask1}
            alt="tree"
          />
          <Row className=" blur_bg_range">
            <div className="col-lg-8 mx-auto ">
              <article className=" py-5 px-3">
                <h2 className=" ff_philosopher fw-bold fs_48 text-white text-center mt-lg-3">
                  Our <span className="text_gradiant">Range</span>
                </h2>
                <p className="text-center ff_montserrat fw-normal fs_16 text-center text-white mt-lg-5 mt-4">
                  We have a variety of different recreational and medicinal
                  items in our range, including cannabis, vapes, edibles, magic
                  mushrooms, extracts, and CBD products, to help you unwind,
                  have fun, and even do some valuable soul searching.
                  <span className="mt-3 d-block">
                    {" "}
                    Whether you’re looking to order edibles online or browse for
                    your new favorite strain, Purple Panda has got you covered.
                  </span>
                </p>
              </article>
            </div>
          </Row>
        </Container>
      </section>
    </>
  );
}

export default Range;

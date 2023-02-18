import React from "react";
import { Container, Row } from "react-bootstrap";
import weed from "../assets/img/png/weed.png";
import mask1 from "../assets/img/png/weed1.png";

function Services() {
  return (
    <section className="py-5 overflow-hidden">
      <Container>
        <h2 className="mt-4 ff_montserrat fw-semibold fs_24 text-center text-white">
          We’re based in both the{" "}
          <span className="text_gradiant"> Greater Toronto Area</span>, with{" "}
          <span className="d-lg-block">our delivery service covering:</span>
        </h2>
        <p className="mt-3 ff_montserrat fw-normal fw_16 text-white text-center opacity-75">
          If you’re in any of these cities and need a little pick me up, you
          know where to go!
        </p>
        <Row className="mt-5">
          <div className="col-lg-6 position-relative">
            {" "}
            <img
              className="pb-4 pe-4 position-absolute z_index0 bottom-0 end-0"
              src={weed}
              alt="tree"
            />
            <ul
              id="img"
              className="blur_bg_range d-flex  justify-content-center py-5 z_index"
            >
              <span className=" d-flex flex-column gap-4 py-3">
                {" "}
                <li className="ps-4 ff_montserrat fw-normal fs_32 text-white">
                  Mississauga
                </li>
                <li className="ps-4 ff_montserrat fw-normal fs_32 text-white">
                  Oakville
                </li>
                <li className="ps-4 ff_montserrat fw-normal fs_32 text-white">
                  Brampton
                </li>
                <li className="ps-4 ff_montserrat fw-normal fs_32 text-white">
                  Etobicoke
                </li>
              </span>
            </ul>
          </div>
          <div className="col-lg-6 position-relative ">
            {" "}
            <img
              className="position-absolute  z_index0 weed_tree_posi"
              src={mask1}
              alt="tree"
            />
            <ul
              id="img"
              className="blur_bg_range d-flex justify-content-center py-5 z_index"
            >
              <span className=" d-flex flex-column gap-4 py-3">
                {" "}
                <li className="ps-4 ff_montserrat fw-normal fs_32 text-white">
                  Toronto
                </li>
                <li className="ps-4 ff_montserrat fw-normal fs_32 text-white">
                  Vaughan
                </li>
                <li className="ps-4 ff_montserrat fw-normal fs_32 text-white">
                  Markham
                </li>
                <li className="ps-4 ff_montserrat fw-normal fs_32 text-white">
                  Richmond
                </li>
              </span>
            </ul>
          </div>
        </Row>
      </Container>
    </section>
  );
}

export default Services;

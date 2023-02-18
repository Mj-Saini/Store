import React from "react";
import { Container, Row } from "react-bootstrap";
import product from "../assets/img/png/product.png";
import atime from "../assets/img/png/Subtract.png";
import subtract2 from "../assets/img/png/subtract2.png";
import subtract3 from "../assets/img/png/subtract3.png";
import reward from "../assets/img/png/reward.png";
import wide from "../assets/img/png/wide.png";
import male from "../assets/img/png/male.png";
import secure from "../assets/img/png/secure.png";

function Popularty() {
  return (
    <>
      <section className="py-5 ">
        <Container className="py-5">
          <Row className="">
            <div className="col-lg-5">
              <img className="w-100" src={product} alt="img" />
            </div>
            <div className="col-lg-4 col-sm-6 mt-3 mt-lg-0">
              <ul className="ps-0 d-flex flex-column ps-lg-5 h-100 mb-0 gap-4 pt-sm-4 pb-0 pb-sm-4 mt-xl-4">
                <li className="d-flex align-items-center">
                  <span className=" d-block">
                    {" "}
                    <img className="pe-4" src={atime} alt="img" />
                  </span>

                  <span className=" ff_montserrat fw-semibold fs_16 text-white">
                    Same Day Delivery
                  </span>
                </li>
                <li className="d-flex align-items-center">
                  <span className=" d-block">
                    {" "}
                    <img className="pe-4" src={subtract2} alt="img" />
                  </span>

                  <span className=" ff_montserrat fw-semibold fs_16 text-white">
                    {" "}
                    Discreet packaging
                  </span>
                </li>
                <li className="d-flex align-items-center">
                  <span className=" d-block">
                    {" "}
                    <img className="pe-4" src={wide} alt="img" />
                  </span>

                  <span className=" ff_montserrat fw-semibold fs_16 text-white">
                    {" "}
                    Canada Wide Mail Orders
                  </span>
                </li>
                <li className="d-flex align-items-center">
                  <span className=" d-block">
                    {" "}
                    <img className="pe-4" src={reward} alt="img" />
                  </span>

                  <span className=" ff_montserrat fw-semibold fs_16 text-white">
                    {" "}
                    Collect Rewards
                  </span>
                </li>
              </ul>
            </div>
            <div className="col-lg-3 col-sm-6 mt-3 mt-lg-0">
              {" "}
              <ul className="ps-0 d-flex flex-column ps-5h-100 mb-0 gap-4  pb-4 pt-sm-4 mt-xl-4">
                <li className="d-flex align-items-center">
                  <span className=" d-block">
                    {" "}
                    <img className="pe-4" src={wide} alt="img" />
                  </span>

                  <span className=" ff_montserrat fw-semibold fs_16 text-white">
                    {" "}
                    Canada Wide Mail Orders
                  </span>
                </li>
                <li className="d-flex align-items-center">
                  <span className=" d-block">
                    {" "}
                    <img className="pe-4" src={male} alt="img" />
                  </span>

                  <span className=" ff_montserrat fw-semibold fs_16 text-white">
                    19+{" "}
                  </span>
                </li>

                <li className="d-flex align-items-center">
                  <span className=" d-block">
                    {" "}
                    <img className="pe-4" src={secure} alt="img" />
                  </span>

                  <span className=" ff_montserrat fw-semibold fs_16 text-white">
                    Secure Transactions{" "}
                  </span>
                </li>
              </ul>
            </div>
          </Row>
        </Container>
      </section>

      <section>
        <div className="order_sec_linear position-absolute bottom-0 start-0"></div>
      </section>
    </>
  );
}

export default Popularty;

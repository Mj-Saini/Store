import React from "react";
import { Carousel, Container, Row } from "react-bootstrap";
import board from "../assets/img/png/board.png";
import trolly2 from "../assets/img/png/trolly2.png";
import pay from "../assets/img/png/pay.png";

function Order() {
  return (
    <>
      <section className="bg_img_order py-4 py-md-5 position-relative overflow-hidden">
        <div className="gradiant_order"></div>
        <Container className="pt-lg-5">
          <h2 className=" ff_philosopher fw-bold fs_48 text-white text-center mt-5 mt-lg-0 pt-5 pt-lg-0">
            Canada Wide Mail Orders
          </h2>
          <p className=" ff_montserrat fw-normal fs_16 text-center text-white text-opacity-75 mb-0">
            Purple Panda offers discreet mail orders to all provinces in Canada,
            we have new list of products everyday to serve your needs whether
            its recreational or medinical use. We ship the next business day
            from Monday-Thursdays, EMT payment is required for all mail orders
          </p>
          <Row className="mt-5 pt-md-5 pt-4 justify-content-center d-md-flex d-none">
            <div className="col-lg-4 col-md-6 z_index">
              <article
                data-aos="fade-zoom-in"
                data-aos-easing="ease-in-back"
                data-aos-delay="300"
                className="mail_order_blur p-4 position-relative z_index "
              >
                <span className="overlay z_index0"></span>
                <span className="white_oval ff_montserrat fw-semibold fs_35 text_secondary translate-middle overflow-hidden">
                  01 <span className="overlay"></span>
                </span>
                <span className="position-absolute start-0 top-0 outblur w-100 h-100"></span>
                <img className="ps-3 pt-5 mt-4" src={board} alt="text-board" />
                <p className="ps-3 mt-4 ff_montserrat fw-normal fs_16 text-white text-opacity-75 z_index1">
                  Register for an account first, then head on other to our shop
                  selection
                </p>
              </article>
            </div>
            <div className="col-lg-4 col-md-6 z_index mt-5 mt-md-0 pt-4 pt-md-0">
              <article
                data-aos="fade-zoom-in"
                data-aos-easing="ease-in-back"
                data-aos-delay="300"
                className="mail_order_blur p-4 position-relative z_index"
              >
                <span className="overlay z_index0"></span>
                <span className="white_oval ff_montserrat fw-semibold fs_35 text_secondary translate-middle py-4 overflow-hidden">
                  02 <span className="overlay z_index0"></span>
                </span>{" "}
                <span className="position-absolute start-0 top-0 outblur w-100 h-100"></span>
                <img
                  className="ps-3 pt-5 mt-4"
                  src={trolly2}
                  alt="text-board"
                />
                <p className="ps-3 mt-4 ff_montserrat fw-normal fs_16 text-white text-opacity-75 z_index1">
                  Register for an account first, then head on other to our shop
                  selection
                </p>
              </article>
            </div>
            <div className="col-lg-4 col-md-6 mt-5 mt-lg-0 pt-4 pt-lg-0 z_index">
              <article
                data-aos="fade-zoom-in"
                data-aos-easing="ease-in-back"
                data-aos-delay="300"
                className="mail_order_blur p-4 position-relative z_index"
              >
                <span className="overlay z_index0"></span>
                <span className="white_oval ff_montserrat fw-semibold fs_35 text_secondary translate-middle py-4 overflow-hidden">
                  03 <span className="overlay"></span>
                </span>{" "}
                <span className="position-absolute start-0 top-0 outblur w-100 h-100"></span>
                <img className="ps-3 pt-5 mt-4" src={pay} alt="text-board" />
                <p className="ps-3 mt-4 ff_montserrat fw-normal fs_16 text-white text-opacity-75 z_index1">
                  Register for an account first, then head on other to our shop
                  selection
                </p>
              </article>
            </div>
          </Row>
          <Carousel className="d-flex d-md-none mt-5 mail_order_blur">
            {" "}
            <Carousel.Item className="pt-5 mt-3">
              <article className=" p-4 position-relative z_index">
                <span className="white_oval ff_montserrat fw-semibold fs_35 text_secondary translate-middle">
                  01
                </span>
                <span className="position-absolute start-0 top-0 outblur w-100 h-100"></span>
                <img className="ps-3 pt-5 mt-4" src={board} alt="text-board" />
                <p className="ps-3 mt-4 ff_montserrat fw-normal fs_16 text-white text-opacity-75 z_index1">
                  Register for an account first, then head on other to our shop
                  selection
                </p>
              </article>
            </Carousel.Item>
            <Carousel.Item className="pt-5 mt-3">
              {" "}
              <article className=" p-4 position-relative z_index">
                <span className="white_oval ff_montserrat fw-semibold fs_35 text_secondary translate-middle py-4">
                  02
                </span>
                <span className="position-absolute start-0 top-0 outblur w-100 h-100"></span>
                <img
                  className="ps-3 pt-5 mt-4"
                  src={trolly2}
                  alt="text-board"
                />
                <p className="ps-3 mt-4 ff_montserrat fw-normal fs_16 text-white text-opacity-75 z_index1">
                  Register for an account first, then head on other to our shop
                  selection
                </p>
              </article>
            </Carousel.Item>
            <Carousel.Item className="">
              <div className="pt-5 mt-3">
                {" "}
                <article className=" p-4 position-relative z_index">
                  <span className="white_oval ff_montserrat fw-semibold fs_35 text_secondary translate-middle py-4">
                    03
                  </span>
                  <span className="position-absolute start-0 top-0 outblur w-100 h-100"></span>
                  <img className="ps-3 pt-5 mt-4" src={pay} alt="text-board" />
                  <p className="ps-3 mt-4 ff_montserrat fw-normal fs_16 text-white text-opacity-75 z_index1">
                    Register for an account first, then head on other to our
                    shop selection
                  </p>
                </article>
              </div>
            </Carousel.Item>
          </Carousel>
        </Container>
      </section>
    </>
  );
}

export default Order;

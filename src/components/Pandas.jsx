import React from "react";
import { Carousel, Container, Row } from "react-bootstrap";
import panda1 from "../assets/img/webp/panda1.webp";
import panda2 from "../assets/img/webp/panda2.webp";
import panda3 from "../assets/img/webp/panda3.webp";

function Pandas() {
  return (
    <>
      <section className="py-5 sec_panda_bgimg">
        <Container className="py-5">
          <Row className=" justify-content-center d-none d-md-flex py-5">
            <div className="col-lg-4 col-md-6">
              <article className="h-100">
                <img className="w-100" src={panda1} alt="panda" />
                <h2 className=" ff_philosopher fw-bold fs_32 text-center text-white mt-4 pt-2">
                  <span className="text_gradiant"> 20% Off</span> For First Time
                  Customers
                </h2>
              </article>
            </div>
            <div className="col-lg-4 col-md-6">
              <article className="h-100">
                <img className="w-100" src={panda2} alt="panda" />
                <h2 className=" ff_philosopher fw-bold fs_32 text-center text-white mt-4 pt-2">
                  Purple Panda’s{" "}
                  <span className="text_gradiant"> Picks Of The week</span>{" "}
                </h2>
              </article>
            </div>
            <div className="col-lg-4 col-md-6 mt-4 mt-lg-0">
              <article className="h-100">
                <img className="w-100" src={panda3} alt="panda" />
                <h2 className=" ff_philosopher fw-bold fs_32 text-center text-white mt-4 pt-2">
                  <span className="text_gradiant">Collect rewards </span>
                  points every time you purchase
                </h2>
              </article>
            </div>
          </Row>
          <Carousel className=" d-md-none">
            <Carousel.Item>
              <article>
                <img className="w-100" src={panda1} alt="panda" />
                <h2 className=" ff_philosopher fw-bold fs_32 text-center text-white mt-4 pt-2">
                  <span className="text_gradiant"> 20% Off</span> For First Time
                  Customers
                </h2>
              </article>
            </Carousel.Item>
            <Carousel.Item>
              {" "}
              <article>
                <img className="w-100" src={panda2} alt="panda" />
                <h2 className=" ff_philosopher fw-bold fs_32 text-center text-white mt-4 pt-2">
                  Purple Panda’s{" "}
                  <span className="text_gradiant"> Picks Of The week</span>{" "}
                </h2>
              </article>
            </Carousel.Item>
            <Carousel.Item>
              <article>
                <img className="w-100" src={panda3} alt="panda" />
                <h2 className=" ff_philosopher fw-bold fs_32 text-center text-white mt-4 pt-2">
                  <span className="text_gradiant">Collect rewards </span>
                  points every time you purchase
                </h2>
              </article>
            </Carousel.Item>
          </Carousel>
        </Container>
      </section>
    </>
  );
}

export default Pandas;

import React from "react";
import { Container, Row } from "react-bootstrap";

function openTime() {
  return (
    <>
      <section className="py-lg-5 my-lg-5">
        <Container>
          <h2 className=" ff_philosopher fw-normal fs_48 text-white text-center">
            Store <span className="text_gradiant"> Hours</span>
          </h2>
          <Row className=" justify-content-center">
            <div className="col-sm-6 pe-sm-4">
              <article className=" d-flex flex-column align-items-center align-items-sm-end">
                <span className=" bottom_line">
                  {" "}
                  <p className="ps-4 ps-sm-5 pe-sm-3 ms-sm-2 pb-2 mt-4 w-100 ff_montserrat fw-semibold fs_24 text-white">
                    Mon : 10am-8pm
                  </p>{" "}
                </span>
                <span className="bottom_line">
                  <p className="ps-4 ps-sm-5 pe-sm-3 ms-sm-2 pb-2 mt-4 w-100 ff_montserrat fw-semibold fs_24 text-white ">
                    Wed : 10am-8pm
                  </p>
                </span>
                <span className="bottom_line">
                  {" "}
                  <p className="ps-4 ps-sm-5 pe-sm-3 ms-sm-2 pb-2 mt-4 w-100 ff_montserrat fw-semibold fs_24 text-white text-start ">
                    Fri : 10am-8pm
                  </p>
                </span>
              </article>
            </div>
            <div className="col-sm-6 ps-sm-4">
              <article className=" d-flex flex-column align-items-center align-items-sm-start">
                <span className="bottom_line">
                  <p className="ps-4 ps-sm-5 pe-sm-3 ms-sm-2 pb-2 mt-4 w-100 ff_montserrat fw-semibold fs_24 text-white ">
                    Tue : 10am-8pm
                  </p>{" "}
                </span>
                <span className="bottom_line">
                  <p className="ps-4 ps-sm-5 pe-sm-3 ms-sm-2 pb-2 mt-4 w-100 ff_montserrat fw-semibold fs_24 text-white ">
                    Thu : 10am-8pm
                  </p>
                </span>
                <span className="bottom_line">
                  {" "}
                  <p className="ps-4 ps-sm-5 pe-sm-3 ms-sm-2 pb-2 mt-4 w-100 ff_montserrat fw-semibold fs_24 text-white ">
                    Sat : 10am-8pm
                  </p>
                </span>
              </article>
            </div>
          </Row>{" "}
          <div className=" d-flex justify-content-center">
            {" "}
            <span className="ps-sm-5 ">
              <p className="ps-sm-5 ps-4 pe-sm-3 ms-sm-2  pb-2 mt-4 d-inline-block ff_montserrat fw-semibold fs_24 text-white bottom_line">
                Sun : 10am-8pm
              </p>
            </span>
          </div>
        </Container>
      </section>
    </>
  );
}

export default openTime;

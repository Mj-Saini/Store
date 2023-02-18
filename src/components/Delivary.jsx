import React from "react";
import { Container, Row } from "react-bootstrap";
import leaves from "../assets/img/png/leaves.png";

function Delivary() {
  return (
    <>
      <section>
        <Container>
          <Row className=" align-items-center">
            <div className="col-xl-7 col-lg-6">
              <img className="w-100" src={leaves} alt="leaf" />
            </div>
            <div className="col-xl-5 col-lg-6">
              {" "}
              <article className="about_blur border_left px-sm-5 px-3 py-4">
                <h2 className=" ff_philosopher fw-normal fs_48 text-white">
                  <span className="text_gradiant">Express</span> Cannabis
                  Delivery
                </h2>
                <p className=" ff_montserrat fw-normal fs_16 text-white mt-3">
                  One of the ways that we set ourselves apart from your average
                  dispensary is through our express delivery service. We’ve all
                  been there – work has finished early and you’ve gotten home,
                  but your jar is empty and the nearest dispensary is miles
                  away. With our service, you could have a box of premium
                  pre-rolls, a bag of bodacious buds, or a package of enticing
                  edibles at your door in just three hours!
                </p>
              </article>
            </div>
          </Row>
        </Container>
      </section>
    </>
  );
}

export default Delivary;

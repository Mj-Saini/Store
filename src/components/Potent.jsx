import React from "react";
import { Container } from "react-bootstrap";
import potent from "../assets/img/png/potent.png";
import cloud from "../assets/img/png/cloud.png";
function Potent() {
  return (
    <>
      <section className="overflow-hidden py-5 mt-5">
        <Container>
          <div>
            <h2 className=" ff_philosopher fw-bold fs_48 text-white text-center">
              Potent Cannabis <span className="text_gradiant">Alert</span>
            </h2>
            <p className=" ff_montserrat fw-normal fs_16 text-white text-center">
              click here to try our most potent hand picked craft cannabis
            </p>
          </div>
        </Container>
      </section>
      <section className="space_counter_bg overflow-hidden position-relative pb-5 ">
        <div className="position-absolute w-100 z_index0">
          {" "}
          <marquee className="w-100 " behavior="smooth" direction="rigth">
            <img className=" opacity-0" src={cloud} alt="cloud" />
            <img className=" opacity-0" src={cloud} alt="cloud" />
            <img className=" opacity-0" src={cloud} alt="cloud" />
            <img className=" opacity-0" src={cloud} alt="cloud" />
            <img className="" src={cloud} alt="cloud" />
          </marquee>
          <marquee className="w-100 mt-4" behavior="smooth" direction="rigth">
            <img className=" opacity-0" src={cloud} alt="cloud" />
            <img className=" opacity-0" src={cloud} alt="cloud" />
            <img className="" src={cloud} alt="cloud" />
            <img className=" opacity-0" src={cloud} alt="cloud" />
            <img className=" opacity-0" src={cloud} alt="cloud" />
            <img className=" opacity-0" src={cloud} alt="cloud" />
            <img className=" opacity-0" src={cloud} alt="cloud" />
            <img className=" opacity-0" src={cloud} alt="cloud" />
            <img className="" src={cloud} alt="cloud" />
          </marquee>
          <marquee className="w-100 mt-5" behavior="smooth" direction="rigth">
            <img className="" src={cloud} alt="cloud" />
            <img className=" opacity-0" src={cloud} alt="cloud" />
            <img className=" opacity-0" src={cloud} alt="cloud" />
            <img className=" opacity-0" src={cloud} alt="cloud" />
            <img className=" opacity-0" src={cloud} alt="cloud" />
            <img className=" opacity-0" src={cloud} alt="cloud" />
            <img className="" src={cloud} alt="cloud" />
            <img className=" opacity-0" src={cloud} alt="cloud" />
            <img className=" opacity-0" src={cloud} alt="cloud" />
            <img className=" opacity-0" src={cloud} alt="cloud" />
            <img className=" opacity-0" src={cloud} alt="cloud" />
            <img className="" src={cloud} alt="cloud" />
          </marquee>
        </div>
        <div className="flex-column d-flex justify-content-center align-items-center ps-3 ps-sm-0 z_index">
          {" "}
          <img className="potent_img" src={potent} alt="img" />
          <span className="translate-middle-y pe-3 mt_50">
            <a
              className="transition_500 white_space btn fw-bold fs_20 ff_montserrat "
              href="#"
            >
              Take me to space cannabis
            </a>
          </span>{" "}
        </div>
      </section>
    </>
  );
}

export default Potent;

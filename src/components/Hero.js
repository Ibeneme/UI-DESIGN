import React from "react";
import "./Hero.css";
import { SiBuymeacoffee } from "react-icons/si";
import { IoLogoWhatsapp } from "react-icons/io";
import { MdEmail } from "react-icons/md";
import {  BsLinkedin } from "react-icons/bs";
import { BsFillArrowUpRightCircleFill } from "react-icons/bs";
import { ImBehance2 } from "react-icons/im";
import { AiFillTwitterCircle } from "react-icons/ai";


import { FiArrowDownCircle } from "react-icons/fi";
import Figma from "./images/Figma.png";
import { FaLocationArrow } from "react-icons/fa";
import profile from "./images/newwww.png";
import xd from "./images/Adobe XD.png";
import { useNavigate } from "react-router-dom";

const Heroo = () => {

  return (
    <section className="first-section">
      <nav
        className="navbar-div"
        style={{
          zIndex: "2",
        }}
      >
        <h4 className="ikenna">Product Designer </h4>

      </nav>
      <div className="hero-section-div">
        <div
          className="left-flex-hero"
          data-aos="zoom-in"
          data-aos-duration="500"
        >
          <div className="curves">
            <span>Creative & Problem Solving</span>
          </div>
          <div
            style={{
              marginTop: "-9em",
            }}
            className="name"
          >
            <h1>IBENEME IKENNA</h1>
            <p>
              A Creative Product Designer, make best of Designs to tailor users
              needs to business goals, Endlessly helping companies around the
              world grow their business.
            </p>
            <a href="Mailto:Ibenemeikenna2021@gmail.com">
              <button
                style={{
                  height: "50px",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  borderRadius: "43em",
                  textAlign: "left",
                }}
                className="button-resume"
              >
                SEND ME A MAIL
              </button>
            </a>
          </div>
        </div>

       
      </div>
      <br />
      <div className="works-on" data-aos="zoom-in" data-aos-duration="500">
        <span className="works-on-span">
          <p>Mastery at</p>
          <FaLocationArrow style={{ color: "#80139B" }} />
        </span>
       

        <img className="hero-img" src={Figma} alt="xd" />
        <img className="hero-img" src={xd} alt="xd" />

      </div>
      <br />

      <div className="section-featured-works">
        <br />

        <div
          className="section-featured-works-div"
          style={{
            backgroundColor: "purple",
          }}
        >
          <h3>
            SELECTED PROJECTS 2023
            <FiArrowDownCircle
              style={{ fontSize: "1.3em", marginLeft: "0.3em" }}
            />
          </h3>
        </div>
        <div
          style={{
            marginTop: "2em",
            gap: "px",
          }}
          className="coding-div"
        >
          <h1>FINTECH SNAPSHOTS</h1>
          <p style={{ marginTop: "-1em" }}>
            <br />A Creative and user-friendly design for a fintech app,
            financial tasks become a breeze, wrapped in a stunning visual
            experience. Navigating numbers feels like a walk in the park. From
            colors to layouts, every detail is speaks creativity and clean
            designs. Say hello to finance made easy.
          </p>
          <br />
          <br />
          <div
            style={{
              width: "100%",
              display: "flex",
              flexDirection: "column",
              gap: "16px",
            }}
          >
            <img
              className="img-auto"
              data-aos="zoom-in"
              data-aos-duration="500"
              style={{
                borderRadius: "8px",
                display: "flex",
              }}
              src="https://res.cloudinary.com/dqa2jr535/image/upload/v1691514152/Frame_14423_f3xbha.png"
              alt="portfolio"
            />
            <img
              className="img-auto"
              data-aos="zoom-in"
              data-aos-duration="500"
              style={{
                borderRadius: "8px",
              }}
              src="https://res.cloudinary.com/dqa2jr535/image/upload/v1691514152/Frame_14417_mz4tbl.png"
              alt="portfolio"
            />
            <img
              className="img-auto"
              data-aos="zoom-in"
              data-aos-duration="500"
              style={{
                borderRadius: "8px",
              }}
              src="https://res.cloudinary.com/dqa2jr535/image/upload/v1691514152/Frame_14420_hzlr68.png"
              alt="portfolio"
            />
            <img
              className="img-auto"
              data-aos="zoom-in"
              data-aos-duration="500"
              style={{
                borderRadius: "8px",
              }}
              src="https://res.cloudinary.com/dqa2jr535/image/upload/v1691514153/Frame_14424_eeouub.png"
              alt="portfolio"
            />
            <img
              className="img-auto"
              data-aos="zoom-in"
              data-aos-duration="500"
              style={{
                borderRadius: "8px",
              }}
              src="https://res.cloudinary.com/dqa2jr535/image/upload/v1691514151/Frame_14421_iuqgcc.png"
              alt="portfolio"
            />
            <img
              className="img-auto"
              data-aos="zoom-in"
              data-aos-duration="500"
              style={{
                borderRadius: "8px",
              }}
              src="https://res.cloudinary.com/dqa2jr535/image/upload/v1691514150/Frame_14418_rnqmsj.png"
              alt="portfolio"
            />
            <img
              className="img-auto"
              data-aos="zoom-in"
              data-aos-duration="500"
              style={{
                borderRadius: "8px",
              }}
              src="https://res.cloudinary.com/dqa2jr535/image/upload/v1691514157/Frame_14425_j7orhb.png"
              alt="portfolio"
            />
            <img
              className="img-auto"
              data-aos="zoom-in"
              data-aos-duration="500"
              style={{
                borderRadius: "8px",
              }}
              src="https://res.cloudinary.com/dqa2jr535/image/upload/v1691514158/Frame_14419_sofg7n.png"
              alt="portfolio"
            />
          </div>
        </div>
        <div
          style={{
            marginTop: "2em",
            gap: "px",
          }}
          className="coding-div"
        >
          <h1>RIDE BOOKING SNAPSHOTS</h1>
          <p style={{ marginTop: "-1em" }}>
            <br />
            Say goodbye to hassles with our user-friendly interface that lets
            you book rides in a flash, a fine-tuned the app for efficiency, so
            you can get from your location to your choice of destination with
            ease. Whether it's choosing your ride, tracking your driver, or
            making secure payments, everything's been polished for peak
            performance. <br /> <br />
          </p>
          <div
            style={{
              width: "100%",
              display: "flex",
              flexDirection: "column",
              gap: "16px",
            }}
          >
            <img
              className="img-auto"
              data-aos="zoom-in"
              data-aos-duration="500"
              style={{
                borderRadius: "8px",
                display: "flex",
              }}
              src="https://res.cloudinary.com/dqa2jr535/image/upload/v1691514161/Frame_14429_ifighg.png"
              alt="portfolio"
            />
            <img
              className="img-auto"
              data-aos="zoom-in"
              data-aos-duration="500"
              style={{
                borderRadius: "8px",
              }}
              src="https://res.cloudinary.com/dqa2jr535/image/upload/v1691514163/Frame_14435_jcktij.png"
              alt="portfolio"
            />
            <img
              className="img-auto"
              data-aos="zoom-in"
              data-aos-duration="500"
              style={{
                borderRadius: "8px",
              }}
              src="https://res.cloudinary.com/dqa2jr535/image/upload/v1691514163/Frame_14436_kyjwjl.png"
              alt="portfolio"
            />
            <img
              className="img-auto"
              data-aos="zoom-in"
              data-aos-duration="500"
              style={{
                borderRadius: "8px",
              }}
              src="https://res.cloudinary.com/dqa2jr535/image/upload/v1691514161/Frame_14429_ifighg.png"
              alt="portfolio"
            />
            <img
              className="img-auto"
              data-aos="zoom-in"
              data-aos-duration="500"
              style={{
                borderRadius: "8px",
              }}
              src="https://res.cloudinary.com/dqa2jr535/image/upload/v1691514163/Frame_14431_islm9u.png"
              alt="portfolio"
            />
            <img
              className="img-auto"
              data-aos="zoom-in"
              data-aos-duration="500"
              style={{
                borderRadius: "8px",
              }}
              src="https://res.cloudinary.com/dqa2jr535/image/upload/v1691514171/Frame_14458_tivnyd.png"
              alt="portfolio"
            />

            <img
              className="img-auto"
              data-aos="zoom-in"
              data-aos-duration="500"
              style={{
                borderRadius: "8px",
              }}
              src="https://res.cloudinary.com/dqa2jr535/image/upload/v1691514163/Frame_14435_jcktij.png"
              alt="portfolio"
            />
            <img
              className="img-auto"
              data-aos="zoom-in"
              data-aos-duration="500"
              style={{
                borderRadius: "8px",
              }}
              src="https://res.cloudinary.com/dqa2jr535/image/upload/v1691514163/Frame_14431_islm9u.png"
              alt="portfolio"
            />
            <img
              className="img-auto"
              data-aos="zoom-in"
              data-aos-duration="500"
              style={{
                borderRadius: "8px",
              }}
              src="https://res.cloudinary.com/dqa2jr535/image/upload/v1691514164/Frame_14434_mb0zti.png"
              alt="portfolio"
            />
          </div>
        </div>
        <div
          style={{
            marginTop: "2em",
            gap: "px",
          }}
          className="coding-div"
        >
          <h1>E-COMMERCE</h1>
          <p style={{ marginTop: "-1em" }}>
            <br />
            Discover a modern design for top-notch hair products, all wrapped up
            in a sleek and intuitive interface. Explore the luxurious eCommerce
            shop for hairs and treat your hair to the love it deserve
          </p>
          <br />
          <br />
          <div
            style={{
              width: "100%",
              display: "flex",
              flexDirection: "column",
              gap: "16px",
            }}
          >
            <img
              className="img-auto"
              data-aos="zoom-in"
              data-aos-duration="500"
              style={{
                borderRadius: "8px",
                display: "flex",
              }}
              src="https://res.cloudinary.com/dqa2jr535/image/upload/v1691514190/Frame_14474_mnwtwr.png"
              alt="portfolio"
            />
            <img
              className="img-auto"
              data-aos="zoom-in"
              data-aos-duration="500"
              style={{
                borderRadius: "8px",
              }}
              src="https://res.cloudinary.com/dqa2jr535/image/upload/v1691514195/Frame_14481_o43gcd.png"
              alt="portfolio"
            />
            <img
              className="img-auto"
              data-aos="zoom-in"
              data-aos-duration="500"
              style={{
                borderRadius: "8px",
              }}
              src="https://res.cloudinary.com/dqa2jr535/image/upload/v1691514190/Frame_14475_evmnrt.png"
              alt="portfolio"
            />
            <img
              className="img-auto"
              data-aos="zoom-in"
              data-aos-duration="500"
              style={{
                borderRadius: "8px",
              }}
              src="https://res.cloudinary.com/dqa2jr535/image/upload/v1691514195/Frame_14477_o3cyvq.png"
              alt="portfolio"
            />
            <img
              className="img-auto"
              data-aos="zoom-in"
              data-aos-duration="500"
              style={{
                borderRadius: "8px",
              }}
              src="https://res.cloudinary.com/dqa2jr535/image/upload/v1691514199/Frame_14482_zos57b.png"
              alt="portfolio"
            />
            <img
              className="img-auto"
              data-aos="zoom-in"
              data-aos-duration="500"
              style={{
                borderRadius: "8px",
              }}
              src="https://res.cloudinary.com/dqa2jr535/image/upload/v1691514200/Frame_14483_nmj7ai.png"
              alt="portfolio"
            />
            <img
              className="img-auto"
              data-aos="zoom-in"
              data-aos-duration="500"
              style={{
                borderRadius: "8px",
              }}
              src="https://res.cloudinary.com/dqa2jr535/image/upload/v1691514197/Frame_14480_keqrcy.png"
              alt="portfolio"
            />
            <img
              className="img-auto"
              data-aos="zoom-in"
              data-aos-duration="500"
              style={{
                borderRadius: "8px",
              }}
              src="https://res.cloudinary.com/dqa2jr535/image/upload/v1691514210/Frame_14484_bfjjnj.png"
              alt="portfolio"
            />
            <img
              className="img-auto"
              data-aos="zoom-in"
              data-aos-duration="500"
              style={{
                borderRadius: "8px",
              }}
              src="https://res.cloudinary.com/dqa2jr535/image/upload/v1691514198/Frame_14485_fpor90.png"
              alt="portfolio"
            />
          </div>
        </div>

        <div
          style={{
            marginTop: "2em",
            gap: "px",
          }}
          className="coding-div"
        >
          <h1>BITMAMA SNAPSHOTS - CRYPTO</h1>
          <p style={{ marginTop: "-1em" }}>
            <br />
            Step into the future with our revamped Bitmama Crypto Wallet – your
            passport to secure and seamless digital asset management! redesigned
            every detail to ensure your crypto experience is unparalleled.{" "}
            <br /> <br />
          </p>
          <div
            style={{
              width: "100%",
              display: "flex",
              flexDirection: "column",
              gap: "16px",
            }}
          >
            <img
              className="img-auto"
              data-aos="zoom-in"
              data-aos-duration="500"
              style={{
                borderRadius: "8px",
                display: "flex",
              }}
              src="https://res.cloudinary.com/dqa2jr535/image/upload/v1691514168/Frame_14441_inpwzk.png"
              alt="portfolio"
            />
            <img
              className="img-auto"
              data-aos="zoom-in"
              data-aos-duration="500"
              style={{
                borderRadius: "8px",
              }}
              src="https://res.cloudinary.com/dqa2jr535/image/upload/v1691514167/Frame_14443_wcfqdu.png"
              alt="portfolio"
            />
            <img
              className="img-auto"
              data-aos="zoom-in"
              data-aos-duration="500"
              style={{
                borderRadius: "8px",
              }}
              src="https://res.cloudinary.com/dqa2jr535/image/upload/v1691514166/Frame_14438_ce9kbl.png"
              alt="portfolio"
            />
            <img
              className="img-auto"
              data-aos="zoom-in"
              data-aos-duration="500"
              style={{
                borderRadius: "8px",
              }}
              src="https://res.cloudinary.com/dqa2jr535/image/upload/v1691514165/Frame_14442_xm63mt.png"
              alt="portfolio"
            />
            <img
              className="img-auto"
              data-aos="zoom-in"
              data-aos-duration="500"
              style={{
                borderRadius: "8px",
              }}
              src="https://res.cloudinary.com/dqa2jr535/image/upload/v1691514166/Frame_14440_d5r8py.png"
              alt="portfolio"
            />
            <img
              className="img-auto"
              data-aos="zoom-in"
              data-aos-duration="500"
              style={{
                borderRadius: "8px",
              }}
              src="https://res.cloudinary.com/dqa2jr535/image/upload/v1691514169/Frame_14439_i4z7ot.png"
              alt="portfolio"
            />
          </div>
        </div>
      </div>
      <br />
      <div className="coding-div">
        <h1>About Me</h1>
        <p style={{ marginTop: "-1em" }}>
          I’m Ibeneme Ikenna Kenneth, a creative, collaborative and problem
          creating user-centered design solutions that are tailored ro solve
          real problems. I am excited about working with innovative companies
          that are striving to make a positive impact in the world.
        </p>

        <h4 style={{ marginTop: "1.3em" }}>Tools I Use</h4>
        <ul style={{ marginTop: "-1em" }}>
          <li>Figma</li>
          <li>Adobe XD</li>
          <li>Canva</li>
          <li>Protopie</li>
          <li>Invision</li>
          <li>Sketch</li>
        </ul>

        <br />
        <img className="img-auto" src={profile} alt="profile" />
       
      </div>
      <br />
      <br /> <br />
      <h3>Let's Connect</h3>
      <a href="https://www.behance.net/ibeneme">
        <div className="details-me">
          <h4>
            <ImBehance2 className="icon-arrows" />
            View my Behance
          </h4>
          <span>
            <BsFillArrowUpRightCircleFill className="icon-arrows" />
          </span>{" "}
        </div>
      </a>
      <a href="https://twitter.com/ibeneme_ikenna">
        <div className="details-me">
          <h4>
            <AiFillTwitterCircle className="icon-arrows" />
            Let's meet at Twitter
          </h4>
          <span>
            <BsFillArrowUpRightCircleFill className="icon-arrows" />
          </span>{" "}
        </div>
      </a>
      <a href="https://www.linkedin.com/in/ibeneme">
        <div className="details-me">
          <h4>
            <BsLinkedin className="icon-arrows" />
            Bing me on LinkedIn
          </h4>
          <span>
            <BsFillArrowUpRightCircleFill className="icon-arrows" />
          </span>{" "}
        </div>
      </a>
      <a href="https://www.buymeacoffee.com/ibenemeikenna">
        <div className="details-me">
          <h4>
            <SiBuymeacoffee className="icon-arrows" />
            Buy Me a Coffee
          </h4>
          <span>
            <BsFillArrowUpRightCircleFill className="icon-arrows" />
          </span>{" "}
        </div>
      </a>

 
      <a href="Mailto:Ibenemeikenna2021@gmail.com">
        <div
          style={{ color: "white", backgroundColor: "black" }}
          className="details-me blackkk"
        >
          <h4>
            <MdEmail className="icon-arrows" />
            Send me a Mail
          </h4>
          <span>
            <BsFillArrowUpRightCircleFill className="icon-arrows" />
          </span>{" "}
        </div>
      </a>
      <a href="https://wa.link/70sz29">
        <div className="details-me">
          <h4>
            <IoLogoWhatsapp className="icon-arrows" />
            WhatsApp
          </h4>
          <span>
            <BsFillArrowUpRightCircleFill className="icon-arrows" />
          </span>{" "}
        </div>
      </a>
      <br />
      <div
        className="black-div white"
        style={{
          display: "flex",
          flexDirection: "column",
          paddingTop: "-16em",
        }}
      >
        <h1>Working Experience</h1>
        <h3> - 2023</h3>
        <p style={{ marginTop: "-1em" }}>
          Product Designer at Antigravitygroup - Hybrid
          <br />
          <p>(April 2023 - Recent)</p>
        </p>
        <h3> - 2023</h3>
        <p style={{ marginTop: "-1em" }}>
          Product Designer at Monetyze - Remote
          <br />
          <p>(January 2023 - June 2023)</p>
        </p>
        <h3> - 2022</h3>
        <p style={{ marginTop: "-1em" }}>
          Product Designer || Product Manager Passcoder.io - Remote
          <br />
          <p>(January 2022 - March 2023)</p>
        </p>

        <h3> - 2021</h3>
        <p style={{ marginTop: "-1em" }}>
          Product Manager at Hydra.io - Remote
          <br />
          <p>(December 2021 - August 2022)</p>
        </p>

        <h3> - 2019</h3>
        <p style={{ marginTop: "-1em" }}>
          Product Designer at Kiko LLC - Remote
          <br />
          <p>(November 2019 - March 2022)</p>
        </p>
      </div>
    </section>
  );
};

export default Heroo;


import Hero from "../assets/hero.png";
import knowledge from "../assets/about-vct.svg";
import SFCICON from "../assets/favicon.ico";
import UDDOKTA from "../assets/uddoktagiri.jpg";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import Circle from "../components/progress/Circle";
import { Link } from "react-router-dom";

const About = () => {
  const javapercentage = 80;
  const reactpercentage = 70;
  const wordpercentage = 90;
  const btpercentage = 100;
  return (
    <>
      <section className="about-me">
        <div className="container-fluid">
          <div className="about-wrapper">
            <div className="row align-items-center">
              <div className="col-12">
                <div className="about-content">
                  <div className="section-heading">
                    <p>About Me</p>
                    <h3 className="mt-2 mb-2">
                      I’m design and develop web applications.
                    </h3>
                  </div>
                  <p className="mt-1">
                    I am a skilled front-end developer, with over{" "}
                    <span className="font-16 fw-500 text-primary">
                      3+ years
                    </span>{" "}
                    of experience in building responsive, user-friendly web
                    interfaces. I am an expert in transforming designs into
                    functional, pixel-perfect websites using technologies like
                    HTML, CSS, JavaScript, React.js and Tailwind CSS. My goal is
                    to deliver seamless digital experiences through a
                    combination of creativity and technical expertise.
                  </p>
                </div>
                <div className="skill-wrapper mt-4">
                  <div className="skill w-100">
                    <h5 className="section-title">Professional performance</h5>
                    <div className="skill d-flex flex-column gap-2 mt-3">
                      <div className="progress-wrapper flex-row gap-5 flex-wrap mt-3">
                        <div className="circle-progress-bar">
                          <Circle label="JavaScript">
                            <CircularProgressbar
                              value={javapercentage}
                              text={`${javapercentage}%`}
                            />
                          </Circle>
                        </div>
                        <div className="circle-progress-bar">
                          <Circle label="React.js/Next.js">
                            <CircularProgressbar
                              value={reactpercentage}
                              text={`${reactpercentage}%`}
                            />
                          </Circle>
                        </div>
                        <div className="circle-progress-bar">
                          <Circle label="WordPress">
                            <CircularProgressbar
                              value={wordpercentage}
                              text={`${wordpercentage}%`}
                            />
                          </Circle>
                        </div>
                        <div className="circle-progress-bar">
                          <Circle label="Bootstrap / Tailwind">
                            <CircularProgressbar
                              value={btpercentage}
                              text={`${btpercentage}%`}
                            />
                          </Circle>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* <div className="col-12 col-lg-6">
                <img src={Hero} alt="hero" />
              </div> */}
            </div>
          </div>
        </div>
      </section>
      <section className="key-skill-wrapper">
        <div className="container-fluid">
          <div className="row">
            <div className="col-sm-6 pe-5">
              <div className="image">
                <img src={knowledge} alt="knowledge" />
              </div>
            </div>

            <div className="col-sm-6">
              <div className="key-skill mt-4">
                <div className="section-heading">
                  <p>Key Knowledge</p>
                </div>
                <div className="d-flex flex-column gap-4 mt-3 skillContainer">
                  <div className="row">
                    <div className="skill-title">Industry Knowledge</div>
                    <div className="skill-content">
                      <ul className="d-flex flex-column gap-1">
                        <li>
                          <p>
                            Proficient in software development methodologies
                            (e.g., Agile, Waterfall)
                          </p>
                        </li>
                        <li>
                          <p>Strong understanding of MVC architecture.</p>
                        </li>
                        <li>
                          <p>
                            Strong understanding of browser rendering and DOM
                            manipulation.
                          </p>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="row">
                    <div className="skill-title">Tools &amp; Technologies</div>
                    <div className="skill-content">
                      <ul className="d-flex flex-column gap-1">
                        <li>
                          <p>Design Tools: Photoshop, Adobe XD, and Figma.</p>
                        </li>
                        <li>
                          <p>
                            {" "}
                            Programming: PHP (Object-Oriented Programming, basic
                            knowledge of the Laravel framework).
                          </p>
                        </li>
                        <li>
                          <p>
                            {" "}
                            Web Technologies: JavaScript, React.js, Next.js,
                            jQuery, and REST APIs.
                          </p>
                        </li>
                        <li>
                          <p>
                            Design Technologies: HTML, CSS, Bootstrap, and
                            Tailwind CSS.
                          </p>
                        </li>
                        <li>
                          <p> Database: MySQL and MongoDB.</p>
                        </li>
                        <li>
                          <p>
                            Version Control: Git (using GitHub, Git GUI, and Git
                            Bash).
                          </p>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="row">
                    <div className="skill-title">Interpersonal Skills</div>
                    <div className="skill-content">
                      <ul className="d-flex flex-column gap-1">
                        <li>
                          <p>
                            Leadership, teamwork, positive attitude, confidence,
                            approachability, adaptability, and eagerness to
                            learn.
                          </p>
                        </li>
                        <li>
                          <p>Honest and dedicated to responsibilities</p>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="resume">
        <div className="container-fluid">
          <div className="profssional-experience text-center">
            <div className="section-heading">
              <p>Experiences</p>
              <h3 className="mt-1">Professional Experiences </h3>
            </div>
            <div className="row  mt-5">
              <div className="col-sm-12">
                <div className="experience d-flex flex-column  gap-4">
                  <div className="resume-content d-flex gap-3">
                    <div className="icon">
                      <img
                        src={SFCICON}
                        alt="SFCICON"
                        className="w-auto h-auto"
                      />
                    </div>
                    <div className="content d-flex flex-column gap-2 justify-content-between pt-2 pb-2">
                      <div className="d-flex align-items-center justify-content-between gap-2">
                        <h5>Steadfast Courier Ltd.</h5>
                        <h6 className="text-muted">2+ Year</h6>
                      </div>
                      <div className="d-flex align-items-center justify-content-between gap-2">
                        <h6 className="text-muted">Frontend Developer</h6>
                        <p className="font-14"> 01/06/2022 - Present</p>
                      </div>
                    </div>
                  </div>
                  <div className="resume-content d-flex gap-3">
                    <div className="icon">
                      <img
                        src={UDDOKTA}
                        alt="UDDOKTA"
                        className="w-auto h-auto"
                      />
                    </div>
                    <div className="content d-flex flex-column gap-2 justify-content-between pt-2 pb-2">
                      <div className="d-flex align-items-center justify-content-between gap-2">
                        <h5>Uddoktagiri</h5>
                        <h6 className="text-muted">1+ Year</h6>
                      </div>
                      <div className="d-flex align-items-center justify-content-between gap-2">
                        <h6 className="text-muted">Web Designer</h6>
                        <p className="font-14"> 01/03/2021 - 30/05/2022</p>
                      </div>
                    </div>
                  </div>
                  {/* <div className="resume-content d-flex gap-3">
                    <div className="icon">
                      <img
                        src={WEBASE}
                        alt="WEBASE"
                        className="w-auto h-auto"
                      />
                    </div>
                    <div className="content d-flex flex-column gap-2 justify-content-between pt-2 pb-2">
                      <div className="d-flex align-items-center justify-content-between gap-2">
                        <h5>Webase Solutions</h5>
                        <h6 className="text-muted">1 Year</h6>
                      </div>
                      <div className="d-flex align-items-center justify-content-between gap-2">
                        <h6 className="text-muted">
                          WordPress (CMS) Developer
                        </h6>
                        <p className="font-14"> 04/2020 - 02/2021</p>
                      </div>
                    </div>
                  </div> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="education_cirtificate">
        <div className="container-fluid">
          <div className="education-traning ">
            <div className="section-heading text-center">
              <p>Education</p>
              <h3 className="mt-1">Education and Certificates </h3>
            </div>
            <div className="row mt-5">
              <div className="col-6 pe-4">
                <div className="education">
                  <ul className="timeline">
                    <li>
                      <div className="title">2018</div>
                      <div className="details">
                        <h5>B.S.c in Software Engineering </h5>
                        <small className="fg-theme">
                          Daffodil International University
                        </small>
                        <div className="d-flex justify-content-between align-items-center">
                          <p>Dhaka Education Board</p>
                        </div>
                      </div>
                    </li>
                    <li>
                      <div className="title">2013</div>
                      <div className="details">
                        <h5>Higher Secondary School Certificate</h5>
                        <small className="fg-theme">Chatmohar College</small>
                        <div className="d-flex justify-content-between align-items-center">
                          <p>Rajshahi Education Board</p>
                        </div>
                      </div>
                    </li>
                    <li>
                      <div className="title">2011</div>
                      <div className="details">
                        <h5>Secondary School Certificate</h5>
                        <small className="fg-theme">
                          Mohela B L High School
                        </small>
                        <div className="d-flex justify-content-between align-items-center">
                          <p>Rajshahi Education Board</p>
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-6 ps-4">
                <div className="training">
                  <ul className="timeline">
                    <li>
                      <div className="title">2017</div>
                      <div className="details">
                        <h5>Web Design &amp; Development</h5>
                        <small className="fg-theme">Nebulas IT</small>
                        <Link to="https://nebulas-it.com">
                          https://nebulas-it.com
                        </Link>
                      </div>
                    </li>
                    <li>
                      <div className="title">2017</div>
                      <div className="details">
                        <h5>Intern (Web Designer &amp; Developer)</h5>
                        <small className="fg-theme">Nebulas IT</small>
                        <Link to="https://nebulas-it.com">
                          https://nebulas-it.com
                        </Link>
                      </div>
                    </li>
                    <li>
                      <div className="title">2016</div>
                      <div className="details">
                        <h5>Web Design &amp; Development</h5>
                        <small className="fg-theme">BITM</small>
                        <Link to="http://www.bitm.org.bd/">
                          http://www.bitm.org.bd/
                        </Link>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;

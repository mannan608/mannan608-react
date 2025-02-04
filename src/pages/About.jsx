import CountUp from "react-countup"
import Hero from "../assets/hero.png"
import knowledge from "../assets/developer.svg"
import { Tab, TabList, TabPanel, Tabs } from "react-tabs"
import SFCICON from "../assets/favicon.ico"
import WEBASE from "../assets/webase.png"
import UDDOKTA from "../assets/uddoktagiri.jpg"
import { skillsSection } from "../data/data"
import { Icon } from "@iconify/react/dist/iconify.js"
import { Tooltip } from "react-tooltip"
import { CircularProgressbar } from "react-circular-progressbar"
import "react-circular-progressbar/dist/styles.css";
import Circle from "../components/progress/Circle"

const About = () => {
    const percentage = 66;
    return (
        <>
            <section className='about-me'>
                <div className="container-fluid">
                    <div className="about-wrapper">
                        <div className="row align-items-center">
                            <div className="col-12 col-lg-6">
                                <div className="about-content">
                                    <div className="section-heading">
                                        <p>About Me</p>
                                        <h2 >
                                            I’m design and develop  web applications.
                                        </h2>

                                    </div>
                                    <p>
                                        I am a skilled front-end developer, with over <span className="font-16 fw-500 text-primary">3+ years</span> of experience in building responsive, user-friendly web interfaces. I am an expert in transforming designs into functional, pixel-perfect websites using technologies like HTML, CSS, JavaScript, React.js and Tailwind CSS. My goal is to deliver seamless digital experiences through a combination of creativity and technical expertise.
                                    </p>
                                </div>
                                <div className="skill-wrapper mt-4">
                                    <div className="skill w-100">
                                        <h5 className="section-title">Professional performance</h5>
                                        <div className="skill d-flex flex-column gap-2 mt-3">
                                            <div className="progress-wrapper">
                                                <span className="caption">Transparency Services</span>
                                                <div className="progress">
                                                    <div
                                                        className="progress-bar wow fadeInLeft"
                                                        role="progressbar"
                                                        style={{
                                                            width: "90%",
                                                            visibility: "visible",
                                                            animationName: "fadeInLeft"
                                                        }}
                                                        aria-valuenow={90}
                                                        aria-valuemin={0}
                                                        aria-valuemax={100}
                                                    >
                                                        90%
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="progress-wrapper">
                                                <span className="caption">Frontend Development</span>
                                                <div className="progress">
                                                    <div
                                                        className="progress-bar wow fadeInLeft"
                                                        role="progressbar"
                                                        style={{
                                                            width: "95%",
                                                            visibility: "visible",
                                                            animationName: "fadeInLeft"
                                                        }}
                                                        aria-valuenow={95}
                                                        aria-valuemin={0}
                                                        aria-valuemax={100}
                                                    >
                                                        95%
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="progress-wrapper">
                                                <span className="caption">Relationship Advice</span>
                                                <div className="progress">
                                                    <div
                                                        className="progress-bar wow fadeInLeft"
                                                        role="progressbar"
                                                        style={{
                                                            width: "80%",
                                                            visibility: "visible",
                                                            animationName: "fadeInLeft"
                                                        }}
                                                        aria-valuenow={80}
                                                        aria-valuemin={0}
                                                        aria-valuemax={100}
                                                    >
                                                        80%
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-12 col-lg-6">
                                <img src={Hero} alt="hero" />
                            </div>
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
                                                    <p>Proficient in software development methodologies (e.g., Agile, Waterfall)</p>
                                                </li>
                                                <li>
                                                    <p>Strong understanding of MVC architecture.</p>
                                                </li>
                                                <li>
                                                    <p>Strong understanding of browser rendering and DOM manipulation.</p>
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
                                                    <p> Programming: PHP (Object-Oriented Programming, basic knowledge of the Laravel framework).</p>
                                                </li>
                                                <li>
                                                    <p> Web Technologies: JavaScript, React.js, Next.js, jQuery, and REST APIs.</p>
                                                </li>
                                                <li>
                                                    <p>Design Technologies: HTML, CSS, Bootstrap, and Tailwind CSS.</p>
                                                </li>
                                                <li>
                                                    <p> Database: MySQL and MongoDB.</p>
                                                </li>
                                                <li>
                                                    <p>Version Control: Git (using GitHub, Git GUI, and Git Bash).</p>
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
                                                        Leadership, teamwork, positive attitude, confidence, approachability, adaptability, and eagerness to learn.
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

            {/* <section className="about-counter">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-12">
                            <div className="counter-wrapper d-flex">
                                <div className="counter-item counter-seperator col-12 col-sm-6 col-xl-4">
                                    <h2 className="text-primary fw-700">
                                        <span className="counter"><CountUp end={3} /></span>+
                                    </h2>
                                    <h5 className="fw-400 ">Years Experience</h5>
                                </div>
                                <div className="counter-item counter-seperator col-12 col-sm-6 col-xl-4">
                                    <h2 className="text-primary fw-700">
                                        <span className="counter"><CountUp end={94} /></span>+
                                    </h2>
                                    <h5 className="fw-400 ">Project Done</h5>
                                </div>
                                <div className="counter-item col-12 col-sm-6 col-xl-4">
                                    <h2 className="text-primary fw-700">
                                        <span className="counter"><CountUp end={90} /></span>+
                                    </h2>
                                    <h5 className="fw-400 ">Happy Client</h5>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </section> */}
            <section className="resume">
                <div className="container-fluid">
                    <div className="section-heading">
                        <p>Resume</p>
                        <h2 className="mt-1">Experience & Education </h2>
                    </div>

                    <Tabs>
                        <TabList >
                            <Tab>Professional Experiences</Tab>
                            <Tab >Education</Tab>
                        </TabList>

                        <TabPanel>
                            <div className="tab-content">
                                <div className="row">
                                    <div className="col-sm-6 pe-4">
                                        <div className="professional-experience d-flex flex-column  gap-4">
                                            <div className="resume-content d-flex gap-3">
                                                <div className="icon">
                                                    <img src={SFCICON} alt="SFCICON" className="w-auto h-auto" />
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
                                                    <img src={UDDOKTA} alt="UDDOKTA" className="w-auto h-auto" />
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
                                            <div className="resume-content d-flex gap-3">
                                                <div className="icon">
                                                    <img src={WEBASE} alt="WEBASE" className="w-auto h-auto" />
                                                </div>
                                                <div className="content d-flex flex-column gap-2 justify-content-between pt-2 pb-2">
                                                    <div className="d-flex align-items-center justify-content-between gap-2">
                                                        <h5>Webase Solutions</h5>
                                                        <h6 className="text-muted">1 Year</h6>
                                                    </div>
                                                    <div className="d-flex align-items-center justify-content-between gap-2">
                                                        <h6 className="text-muted">WordPress (CMS) Developer</h6>
                                                        <p className="font-14"> 04/2020 - 02/2021</p>
                                                    </div>
                                                </div>
                                            </div>

                                        </div>
                                    </div>
                                    <div className="col-sm-6 ps-5">
                                        <div className="skills-item">
                                            <div className="icon_title d-flex align-items-center gap-2">
                                                <div className="icon">
                                                    <svg
                                                        aria-hidden="true"
                                                        className="e-font-icon-svg e-fas-code"
                                                        viewBox="0 0 640 512"
                                                        xmlns="http://www.w3.org/2000/svg"
                                                    >
                                                        <path d="M278.9 511.5l-61-17.7c-6.4-1.8-10-8.5-8.2-14.9L346.2 8.7c1.8-6.4 8.5-10 14.9-8.2l61 17.7c6.4 1.8 10 8.5 8.2 14.9L293.8 503.3c-1.9 6.4-8.5 10.1-14.9 8.2zm-114-112.2l43.5-46.4c4.6-4.9 4.3-12.7-.8-17.2L117 256l90.6-79.7c5.1-4.5 5.5-12.3.8-17.2l-43.5-46.4c-4.5-4.8-12.1-5.1-17-.5L3.8 247.2c-5.1 4.7-5.1 12.8 0 17.5l144.1 135.1c4.9 4.6 12.5 4.4 17-.5zm327.2.6l144.1-135.1c5.1-4.7 5.1-12.8 0-17.5L492.1 112.1c-4.8-4.5-12.4-4.3-17 .5L431.6 159c-4.6 4.9-4.3 12.7.8 17.2L523 256l-90.6 79.7c-5.1 4.5-5.5 12.3-.8 17.2l43.5 46.4c4.5 4.9 12.1 5.1 17 .6z" />
                                                    </svg></div>
                                                <h5> Codeing</h5>
                                            </div>
                                            <div className="progress-wrapper flex-row gap-4 flex-wrap mt-4">
                                                <div className="circle-progress-bar">
                                                    <Circle label="JavaScript">
                                                        <CircularProgressbar value={percentage} text={`${percentage}%`} />
                                                    </Circle>
                                                </div>
                                                <div className="circle-progress-bar">
                                                    <Circle label="React.js/Next.js">
                                                        <CircularProgressbar value={percentage} text={`${percentage}%`} />
                                                    </Circle>
                                                </div>
                                                <div className="circle-progress-bar">
                                                    <Circle label="WordPress">
                                                        <CircularProgressbar value={percentage} text={`${percentage}%`} />
                                                    </Circle>
                                                </div>
                                                <div className="circle-progress-bar">
                                                    <Circle label="HTML / CSS">
                                                        <CircularProgressbar value={percentage} text={`${percentage}%`} />
                                                    </Circle>
                                                </div>

                                            </div>
                                        </div>

                                        {/* <div className="languages-item mt-4">
                                            <div className="icon_title d-flex align-items-center gap-2">
                                                <div className="icon">
                                                    <svg
                                                        aria-hidden="true"
                                                        className="e-font-icon-svg e-fas-language"
                                                        viewBox="0 0 640 512"
                                                        xmlns="http://www.w3.org/2000/svg"
                                                    >
                                                        <path d="M152.1 236.2c-3.5-12.1-7.8-33.2-7.8-33.2h-.5s-4.3 21.1-7.8 33.2l-11.1 37.5H163zM616 96H336v320h280c13.3 0 24-10.7 24-24V120c0-13.3-10.7-24-24-24zm-24 120c0 6.6-5.4 12-12 12h-11.4c-6.9 23.6-21.7 47.4-42.7 69.9 8.4 6.4 17.1 12.5 26.1 18 5.5 3.4 7.3 10.5 4.1 16.2l-7.9 13.9c-3.4 5.9-10.9 7.8-16.7 4.3-12.6-7.8-24.5-16.1-35.4-24.9-10.9 8.7-22.7 17.1-35.4 24.9-5.8 3.5-13.3 1.6-16.7-4.3l-7.9-13.9c-3.2-5.6-1.4-12.8 4.2-16.2 9.3-5.7 18-11.7 26.1-18-7.9-8.4-14.9-17-21-25.7-4-5.7-2.2-13.6 3.7-17.1l6.5-3.9 7.3-4.3c5.4-3.2 12.4-1.7 16 3.4 5 7 10.8 14 17.4 20.9 13.5-14.2 23.8-28.9 30-43.2H412c-6.6 0-12-5.4-12-12v-16c0-6.6 5.4-12 12-12h64v-16c0-6.6 5.4-12 12-12h16c6.6 0 12 5.4 12 12v16h64c6.6 0 12 5.4 12 12zM0 120v272c0 13.3 10.7 24 24 24h280V96H24c-13.3 0-24 10.7-24 24zm58.9 216.1L116.4 167c1.7-4.9 6.2-8.1 11.4-8.1h32.5c5.1 0 9.7 3.3 11.4 8.1l57.5 169.1c2.6 7.8-3.1 15.9-11.4 15.9h-22.9a12 12 0 0 1-11.5-8.6l-9.4-31.9h-60.2l-9.1 31.8c-1.5 5.1-6.2 8.7-11.5 8.7H70.3c-8.2 0-14-8.1-11.4-15.9z" />
                                                    </svg>

                                                </div>
                                                <h5> Language</h5>
                                            </div>
                                            <div className="progress-wrapper">
                                                <span className="caption">English</span>
                                                <div className="progress">
                                                    <div
                                                        className="progress-bar wow fadeInLeft"
                                                        role="progressbar"
                                                        style={{
                                                            width: "90%",
                                                            visibility: "visible",
                                                            animationName: "fadeInLeft"
                                                        }}
                                                        aria-valuenow={90}
                                                        aria-valuemin={0}
                                                        aria-valuemax={100}
                                                    >
                                                        90%
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="progress-wrapper mt-3">
                                                <span className="caption">Native Language</span>
                                                <div className="progress">
                                                    <div
                                                        className="progress-bar wow fadeInLeft"
                                                        role="progressbar"
                                                        style={{
                                                            width: "100%",
                                                            visibility: "visible",
                                                            animationName: "fadeInLeft"
                                                        }}
                                                        aria-valuenow={100}
                                                        aria-valuemin={0}
                                                        aria-valuemax={100}
                                                    >
                                                        90%
                                                    </div>
                                                </div>
                                            </div>
                                        </div> */}

                                    </div>
                                </div>
                            </div>
                        </TabPanel>
                        <TabPanel>
                            <div className=" mt-5 section-heading d-flex align-items-center flex-column"><p>Education</p><h2 className="mt-1">Education and Certificates</h2></div>
                            <div className="education-traning mt-4">
                                <div className="row">
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
                                                            <a href="education_details.html">Details</a>
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
                                                            <a href="education_details.html">Details</a>
                                                        </div>
                                                    </div>
                                                </li>
                                                <li>
                                                    <div className="title">2011</div>
                                                    <div className="details">
                                                        <h5>Secondary School Certificate</h5>
                                                        <small className="fg-theme">Mohela B L High School</small>
                                                        <div className="d-flex justify-content-between align-items-center">
                                                            <p>Rajshahi Education Board</p>
                                                            <a href="education_details.html">Details</a>
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
                                                        <p>https://nebulas-it.com</p>
                                                    </div>
                                                </li>
                                                <li>
                                                    <div className="title">2017</div>
                                                    <div className="details">
                                                        <h5>Intern (Web Designer &amp; Developer)</h5>
                                                        <small className="fg-theme">Nebulas IT</small>
                                                        <p>https://nebulas-it.com</p>
                                                    </div>
                                                </li>
                                                <li>
                                                    <div className="title">2016</div>
                                                    <div className="details">
                                                        <h5>Web Design &amp; Development</h5>
                                                        <small className="fg-theme">BITM</small>
                                                        <p>http://www.bitm.org.bd/</p>
                                                    </div>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </TabPanel>
                    </Tabs>
                </div>
            </section>
        </>
    )
}

export default About
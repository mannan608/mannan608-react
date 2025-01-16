import CountUp from "react-countup"
import Hero from "../assets/hero.png"
import knowledge from "../assets/developer.svg"
import { Tab, TabList, TabPanel, Tabs } from "react-tabs"

const About = () => {
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
                            <Tab>Experience</Tab>
                            <Tab >Education</Tab>
                        </TabList>

                        <TabPanel>
                            <h4>Experience</h4>
                        </TabPanel>
                        <TabPanel>
                            <h4>Education</h4>
                        </TabPanel>
                    </Tabs>
                </div>
            </section>
        </>
    )
}

export default About
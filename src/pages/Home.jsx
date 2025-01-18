import { Icon } from "@iconify/react";

import AnimationSkill from "../components/icons/animation-icons/AnimationSkill"
import FrontendDev from "../components/icons/animation-icons/skills.json"

import { skillsSection } from "../data/data"
import { Tooltip } from "react-tooltip";
import hero from "../assets/hero.png"
import service_1 from "../assets/service_1.png"
import service_2 from "../assets/service_2.png"
import service_3 from "../assets/service_3.png"
import TypingText from "../components/TypingText";
import Git from "../assets/git.svg"
import LinkEdin from "../assets/linkedin.svg"
import Facebook from "../assets/fb.svg"
import { Link } from "react-router-dom";


const Home = () => {

    const { title, subTitle } = skillsSection;
    return (
        < >
            <section className="home-banner d-flex align-items-center position-relative">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-12">
                            <div className="row align-items-center">
                                <div className="col-12 col-lg-6 col-xl-7">
                                    <div className="sub-heading">
                                        <p className="text-black fw-500">I AM FRONTEND DEVELOPER</p>
                                    </div>
                                    <div className="animate-heading mt-2 mb-3">
                                        <h1 className="d-flex align-items-center">
                                            Creative & Interactive
                                        </h1>
                                        <h1 className="d-flex align-items-center gap-2">Web  <TypingText className="text-primary fw-600" /></h1>
                                    </div>
                                    <p>
                                        I have 3+ years of experience as a front-end developer and designer. I am seeking opportunities to contribute creativity and technical expertise to a dynamic development team.
                                    </p>

                                    <a
                                        className="btn btn-primary btn-md anchorBtn w-f-c mt-4"
                                        href="resume.html"
                                    >
                                        <span className="z-1 position-relative">Download Resume</span>
                                    </a>
                                </div>
                                <div className="col-12 col-lg-6 col-xl-5 text-center position-relative">
                                    <img src={hero} alt="banner-image" />

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="social-media d-flex gap-3 flex-wrap flex-column">
                    <a href="https://github.com/mannan608" className="d-flex align-items-center gap-2">
                        <div className="icon">
                            <img src={Git} alt="git" />
                        </div>
                    </a>
                    <a href="https://www.facebook.com/mannan.45/" className="d-flex align-items-center gap-2">
                        <div className="icon">
                            <img src={Facebook} alt="facebook" />
                        </div>
                    </a>
                    <a href="https://www.linkedin.com/in/md-abdul-mannan-b2963429b/" className="d-flex align-items-center gap-2">
                        <div className="icon">
                            <img src={LinkEdin} alt="LinkEdin" />
                        </div>
                    </a>
                </div>
            </section>

            <section className="proffessional-skills">
                <div className="container-fluid">
                    <div className="section-title d-flex align-items-center justify-content-center flex-column gap-2">
                        <h2>{title}</h2>
                        <p className="w-75 text-center">{subTitle}</p>
                    </div>
                    {
                        skillsSection.data.map((item, i) => (
                            <div className="row" key={i}>
                                <div className="col-md-6 pe-4">
                                    <div className="image">
                                        {/* <AnimationSkill animationPath={FrontendDev} /> */}
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="content h-100 d-flex align-items-center gap-5 flex-column justify-content-center">
                                        <h4>{item.title}</h4>
                                        <div className="d-flex align-items-center gap-3 flex-wrap justify-content-center">
                                            {
                                                item.softwareSkills.map((skil, i) => (
                                                    <div key={i} className="skill-container">
                                                        <Icon
                                                            className="skill-icon"
                                                            icon={skil.iconifyTag}
                                                            data-inline="false"
                                                            data-tooltip-id={`skill-name-${i}`}
                                                        />
                                                        <Tooltip id={`skill-name-${i}`} content={skil.skillName} />
                                                    </div>

                                                ))
                                            }

                                        </div>
                                        <ul className="d-flex align-items-center gap-2 flex-column">
                                            {
                                                item.skills.map((skill, i) => (
                                                    <li key={i}>{skill}</li>
                                                ))
                                            }
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        ))
                    }
                </div>

            </section>

            <section className="my-service">
                <div className="container-fluid">
                    <div className="section-title d-flex align-items-center justify-content-center flex-column gap-2">
                        <h2>My Service</h2>
                        <p className="w-75 text-center">I specialize in front-end web development, using modern technologies. Additionally, I offer WordPress theme customization to deliver tailored solutions for unique business needs</p>
                    </div>
                    <div className="service-grid-container mt-5">
                        <div className="service-grid-item text-center">
                            <img
                                className="w-auto h-auto mb-4"
                                src={service_1}
                                alt="service-img-one"
                            />
                            <h4 className="mb-2">
                                Web Development
                            </h4>
                            <p >
                                I build responsive, user-centric web applications using modern front-end technologies to deliver seamless digital experiences
                            </p>
                        </div>

                        <div className="service-grid-item text-center">
                            <img
                                className="w-auto h-auto mb-4"
                                src={service_2}
                                alt="service-img-two"
                            />
                            <h4 className="mb-2">
                                WordPress Customization
                            </h4>
                            <p>
                                I customize WordPress themes and plugins to create tailored, dynamic websites that meet client requirements.
                            </p>
                        </div>

                        <div className="service-grid-item text-center">
                            <img
                                className="w-auto h-auto mb-4"
                                src={service_3}
                                alt="service-img-three"
                            />
                            <h4 className="mb-2">
                                Business Analyst (BA)
                            </h4>
                            <p >
                                I bridge the gap between business needs and technical solutions by analyzing requirements and delivering actionable insights for optimal project outcomes.
                            </p>
                        </div>
                    </div>

                </div>
            </section>

            <section className="contact-cta">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className="cta-container text-center">
                                <p className="text-white opacity-75">
                                    Get Started
                                </p>
                                <h2 className="text-white mt-3">
                                    Let’s do something new with me!
                                </h2>
                                <div className="d-flex align-items-center justify-content-center mt-4">
                                    <Link
                                        className="btn btn-primary btn-md anchorBtn w-50"
                                        to="/hire"
                                    >
                                        Contact
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </>
    )
}

export default Home
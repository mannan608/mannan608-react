import Hero from "../assets/hero.png"

const About = () => {
    return (
        <div className='about-me'>
            <div className="container-fluid">
                <div className="about-wrapper">
                    <div className="row align-items-center">
                        <div className="col-12 col-lg-6">
                            <div className="about-content">
                                <div className="section-heading">
                                    <div className="sub-heading d-flex">
                                        <p>About Me</p>
                                    </div>
                                    <h2 className="black-color line-height-3 h2">
                                        I’m design and develop  web applications.
                                    </h2>
                                </div>
                                <p className="secondary-black line-height-7 mt-20">
                                    I am a skilled front-end developer, with over 3 years of experience in building responsive, user-friendly web interfaces. I am an expert in transforming designs into functional, pixel-perfect websites using technologies like HTML, CSS, JavaScript, React.js and Tailwind CSS. My goal is to deliver seamless digital experiences through a combination of creativity and technical expertise.
                                </p>
                            </div>
                        </div>
                        <div className="col-12 col-lg-6">
                            <img src={Hero} alt="hero" />
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default About
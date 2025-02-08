import React from 'react'
import { Link } from 'react-router-dom'
import p_1 from '../assets/portfolioOne.png'

const Projects = () => {
    return (
        <div className='projects'>
            <div className="container-fluid">
                <div className="projectsCOntainer">
                    <div className="section-heading text-center">
                        <p>My Portfolio</p>
                        <h3 className="mt-1">VISIT MY PORTFOLIO </h3>
                    </div>
                    <div className="row portfolios mt-5">
                        <div className="col-md-3">
                            <Link to="#">
                                <div className="portfolio">
                                    <img src={p_1} alt="" />
                                    <div className="overlay">
                                        <div className="content">
                                            <p>Project Name</p>
                                            <a href="https://steadfast.com.bd/">VIEW DETAILS</a>
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        </div>
                        <div className="col-md-3">
                            <Link to="#">
                                <div className="portfolio">
                                    <img src={p_1} alt="" />
                                    <div className="overlay">
                                        <div className="content">
                                            <p>Project Name</p>
                                            <a href="https://steadfast.com.bd/">VIEW DETAILS</a>
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        </div>
                        <div className="col-md-3">
                            <Link to="#">
                                <div className="portfolio">
                                    <img src={p_1} alt="" />
                                    <div className="overlay">
                                        <div className="content">
                                            <p>Project Name</p>
                                            <a href="https://steadfast.com.bd/">VIEW DETAILS</a>
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Projects
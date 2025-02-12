import React from 'react'
import { Link } from 'react-router-dom'
import p_1 from '../assets/portfolioOne.png'

const Projects = () => {
    return (
        <div className='projects'>
            <div className="container-fluid">
                <div className="projectsContainer">
                    <div className="breadcump d-flex align-items-center justify-content-center">
                        <div className="section-heading text-center">
                            <p>My Portfolio</p>
                            <h3 className="mt-1">View My Recent Work </h3>
                        </div>
                    </div>

                    <div className="row portfolios mt-5">
                        <div className="col-md-6">
                            <div className="portfolio">
                                <img src={p_1} alt="" />
                                <div className="overlay">
                                    <div className="content">
                                        <div className="title d-flex justify-content-between align-items-center">
                                            <h4>Inventory Management System</h4>
                                            <div className="d-flex gap-3">
                                                <Link to="#" className='font-16 fw-500 text-primary'>GitHub</Link> | <Link to="#" className='font-16 fw-500 text-primary'>Live</Link>  | <Link to={`/project/${1}`} className='font-16 fw-500 text-primary'>Details</Link>
                                            </div>
                                        </div>
                                        <p className='font-12'>Steadfast Courier Ltd.</p>
                                        <div className="mt-2">
                                            <h6 className='mb-1'> Frontend Technologies</h6>
                                            <p># React.js,Redux Toolkit,Redux RTK,JavaScript, HTML, Bootstrap, CSS.</p>

                                            <h6 className='mt-2 mb-1'>  Backend Technologies</h6>
                                            <p># PHP (Laravel) for backend development.</p>

                                            <h6 className='mt-2 mb-1'>Database</h6>
                                            <p># MySQL</p>
                                            <h6 className='mt-2 mb-1'>Other Tools</h6>
                                            <p> # Axios/Fetch ,# Chart.js/Apex Chart,# Postman</p>

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Projects
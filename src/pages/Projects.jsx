import React from 'react'
import { Link } from 'react-router-dom'
import p_1 from '../assets/portfolioOne.png'

const Projects = () => {
    return (
        <div className='projects'>
            <div className="container-fluid">
                <div className="projectsContainer">
                    <div className="section-heading text-center">
                        <p>My Portfolio</p>
                        <h3 className="mt-1">VISIT MY PORTFOLIO </h3>
                    </div>
                    <div className="row portfolios mt-5">
                        <div className="col-md-6">
                            <div className="portfolio">
                                <img src={p_1} alt="" />
                                <div className="overlay">
                                    <div className="content">
                                        <p><span className="fw-500">Project Name:</span> Inventory Management System</p>
                                        <p><span className="fw-500">Technology :</span> React.JS, Redux Toolkit, RTK Query, Bootstrap CSS, Node.JS, MongoDB</p>
                                        <p><span className="fw-500">Contribute :</span> React.JS, Redux Toolkit, RTK Query, Bootstrap CSS, Node.JS, MongoDB</p>

                                        <div className="link d-flex gap-3">
                                            <h6> Live Preview <Link to="#"> Click Here </Link></h6>
                                            <h6> View Details <Link to={`/projects/1`}>Click Here</Link></h6>
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
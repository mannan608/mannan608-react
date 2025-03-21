import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import data from "../data/projects"
import { LazyLoadImage } from 'react-lazy-load-image-component';

const Projects = () => {
    const navigate = useNavigate();
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

                    <div className="portfolios">
                        <div className="row">
                            {
                                data.map((item) => {
                                    return (
                                        <div className="col-md-6" key={item.id}>
                                            <div className="title d-flex justify-content-between align-items-center gap-2 mb-3">
                                                <h5>{item.name}</h5>
                                                <div className="d-flex gap-2">
                                                    <span className="font-16 fw-500 text-primary cursor-pointer" onClick={() => item.githubLink ? window.open(item.githubLink, '_blank') : navigate('/not-found')}>GitHub</span>
                                                    |  <span className="font-16 fw-500 text-primary cursor-pointer" onClick={() => item.liveLink ? window.open(item.liveLink, '_blank') : navigate('/not-found')}>Live</span>
                                                    | <Link to={`/project/${item.id}`} className='font-16 fw-500 text-primary'>Details</Link>
                                                </div>
                                            </div>
                                            <div className="portfolio">
                                                {/* <img src={item.thumbnail} alt="admin" className="cover-image" /> */}
                                                <LazyLoadImage
                                                    alt="Image description"
                                                    src={item.thumbnail}
                                                />
                                                <div className="overlay">
                                                    <div className="content position-relative">
                                                        < >
                                                            <h5 className='mb-2'> Tools & Technologies</h5>
                                                            <div className=" d-flex flex-column gap-1">
                                                                <p className='font-14'><span className='text-black fw-500'>Web Technologies : </span> {item.technology?.web_technology.join(", ")}</p>
                                                                <p className='font-14'><span className='text-black fw-500'>Design Technologies : </span> {item.technology?.design_technology?.join(", ")}</p>
                                                                <p className='font-14'><span className='text-black fw-500'>Backend : </span>{item.technology?.backend_technology?.join(", ")}</p>
                                                                <p className='font-14'><span className='text-black fw-500'>Database : </span>{item?.database}</p>
                                                                <p className='font-14'><span className='text-black fw-500'>Other Technologies :</span> {item.technology?.others?.join(", ")}</p>
                                                                <p className='font-14'><span className='text-black fw-500'>Other Tools :</span> {item.technology?.others_tools?.join(", ")}</p>
                                                            </div>
                                                        </>
                                                        <div className="mt-3">
                                                            <h5>My Contribution : {item.contribution || 0}% </h5>
                                                        </div>
                                                        <div className="noted">
                                                            <p><span className='fw-500'>Notes : </span> {item.Notes}</p>
                                                        </div>
                                                    </div>
                                                    <div className="detals w-100">
                                                        <p>{item.contribution || 0}</p>
                                                        <div className="noted">
                                                            <p><span className='fw-500'>Notes : </span> {item.Notes}</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    )
                                })
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Projects
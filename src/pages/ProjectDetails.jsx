import { useState } from 'react'

import data from '../data/projects'
import { useParams } from 'react-router-dom'


const ProjectDetails = () => {

    const { id } = useParams();
    const project = data.find((item) => item.id === parseInt(id));
    const [gallery, setGallery] = useState(project?.images?.[0]);


    if (!project) return <h2>Project Not Found</h2>;




    return (
        <div className='projects'>
            <div className="container-fluid">
                <div className="project-details">
                    <div className="section-heading text-center">

                        <h3 >{project.name}</h3>
                        <p >Steadfast Courier Ltd.</p>
                    </div>
                    <div className="row mt-5">
                        <div className="col-md-6">
                            <div className="project-info">
                                <h4>{project.short_description}</h4>
                                <p>
                                    A brief description of the project goes here. This could be a summary of the project goals, features, and technologies used.
                                </p>

                                <div className="mt-2">
                                    <h5 className='mb-1'> Tools & Technologies</h5>
                                    <p><span className='text-black fw-500'>Web Technologies :</span> {project.technology.web_technology.join(", ")}</p>
                                    <p><span className='text-black fw-500'>Design Technologies:</span> {project.technology.design_technology.join(", ")}</p>
                                    <p><span className='text-black fw-500'>Other Technologies:</span> {project.technology.others.join(", ")}</p>
                                    <p><span className='text-black fw-500'>Backend :</span>{project.technology.backend_technology.join(", ")}</p>
                                    <p><span className='text-black fw-500'>Database :</span>{project.database}</p>
                                </div>
                            </div>
                            <div className="project-contribute">

                                <div className="mt-2">
                                    <h5 className='mb-1'>My Contribution</h5>
                                    <ul>
                                        {
                                            project.contribute.map((item, index) => (
                                                <li key={index}>{item}</li>
                                            ))
                                        }
                                    </ul>

                                </div>
                            </div>

                            <div className="project-features">

                                <div className="mt-2">
                                    <h5 className='mb-1'>Key Features</h5>
                                    <ul>
                                        {
                                            project.key_features.map((item, index) => (
                                                <li key={index}>{item}</li>
                                            ))
                                        }
                                    </ul>

                                </div>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="projects-image">
                                <div className="main-image">
                                    <img src={gallery} alt="inventory" />
                                </div>
                                <div className="gallery-img d-flex gap-3 mt-3">
                                    {project.images?.map((img, index) => (
                                        <div key={index} className="g-image" onClick={() => setGallery(img)}>
                                            <img src={img} alt="Gallery" className="img-thumbnail" />
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProjectDetails
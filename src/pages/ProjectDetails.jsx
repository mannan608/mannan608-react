import { useState } from 'react'

import data from '../data/projects'
import { useParams } from 'react-router-dom'


const ProjectDetails = () => {

    const { id } = useParams();
    const project = data.find((item) => item.id === parseInt(id));
    const [gallery, setGallery] = useState(project?.images?.[0]);
    const [showModal, setShowModal] = useState(false);
    const [currentIndex, setCurrentIndex] = useState(0);

    if (!project) return <h2>Project Not Found</h2>;

    const handleShowModal = (index) => {
        setCurrentIndex(index);
        setGallery(project.images[index]);
        setShowModal(true);
    };

    const handleNext = () => {
        const newIndex = (currentIndex + 1) % project.images.length;
        setCurrentIndex(newIndex);
        setGallery(project.images[newIndex]);
    };

    const handlePrev = () => {
        const newIndex = (currentIndex - 1 + project.images.length) % project.images.length;
        setCurrentIndex(newIndex);
        setGallery(project.images[newIndex]);
    };


    return (
        <div className='projects'>
            <div className="container-fluid">
                <div className="project-details">

                    <div className="row mt-5">
                        <div className="col-md-6">
                            <div className="project-info">
                                <h4 className='mb-2'>{project.name}</h4>
                                <p>{project.short_description}</p>
                                <h5 className='mb-2 mt-4'> Tools & Technologies</h5>
                                <div className=" d-flex flex-column gap-1 ">
                                    <p ><span className='text-black fw-500'>Web Technologies : </span> {project.technology.web_technology.join(", ")}</p>
                                    <p ><span className='text-black fw-500'>Design Technologies : </span> {project.technology.design_technology.join(", ")}</p>
                                    <p ><span className='text-black fw-500'>Backend : </span>{project.technology.backend_technology.join(", ")}</p>
                                    <p ><span className='text-black fw-500'>Database : </span>{project.database}</p>
                                    <p ><span className='text-black fw-500'>Other Technologies :</span> {project.technology.others.join(", ")}</p>
                                    <p ><span className='text-black fw-500'>Other Tools :</span> {project.technology.others_tools.join(", ")}</p>
                                </div>
                            </div>
                            <div className="project-contribute mt-4">

                                <div className="mt-2">
                                    <h5 className='mb-1'>My Contribution {project.contribution} %</h5>
                                    <ul>
                                        {
                                            project.contribute.map((item, index) => (
                                                <li key={index} className='font-16'><p>{item}</p></li>
                                            ))
                                        }
                                    </ul>

                                </div>
                            </div>

                            <div className="project-features mt-4">
                                <div className="mt-2">
                                    <h5 className='mb-1'>Key Features</h5>
                                    <ul>
                                        {
                                            project.key_features.map((item, index) => (
                                                <li key={index}><p>{item}</p></li>
                                            ))
                                        }
                                    </ul>

                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 ps-5">
                            <div className="projects-image w-75">
                                <div className="main-image" onClick={() => handleShowModal(currentIndex)}>
                                    <img src={gallery} alt="inventory" />
                                </div>

                                {/* Thumbnail Gallery */}
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
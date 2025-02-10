import g_img from '../assets/portfolioOne.png'

const ProjectDetails = () => {
    return (
        <div className='projects'>
            <div className="container-fluid">
                <div className="project-details">
                    <div className="section-heading text-center">
                        <p >Steadfast Courier Ltd.</p>
                        <h3 >Inventory Management System</h3>
                    </div>
                    <div className="row mt-5">
                        <div className="col-md-6">
                            <div className="project-info">
                                <h4>Project Description</h4>
                                <p>
                                    A brief description of the project goes here. This could be a summary of the project goals, features, and technologies used.
                                </p>
                                <h4>Technologies Used</h4>
                                <ul>
                                    <li>React.js</li>
                                    <li>Redux Toolkit</li>
                                    <li>RTK Query</li>
                                    <li>Tailwind CSS</li>
                                    <li>Node.js</li>
                                    <li>MongoDB</li>
                                </ul>
                            </div>
                            <div className="project-features">
                                <h4>Key Features</h4>
                                <ul>
                                    <li>User authentication and role-based access</li>
                                    <li>Add, edit, and delete inventory items</li>
                                    <li>Stock tracking and low-stock alerts</li>
                                    <li>Sales and purchase order management</li>
                                    <li>Data visualization and reporting</li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="projects-image">
                                <div className="main-image">
                                    <img src={g_img} alt="inventory" />
                                </div>
                                <div className="gallary-img d-flex gap-3 mt-3">
                                    <div className="g-image">
                                        <img src={g_img} alt="inventory" />
                                    </div>
                                    <div className="g-image">
                                        <img src={g_img} alt="inventory" />
                                    </div>
                                    <div className="g-image">
                                        <img src={g_img} alt="inventory" />
                                    </div>
                                    <div className="g-image">
                                        <img src={g_img} alt="inventory" />
                                    </div>
                                    <div className="g-image">
                                        <img src={g_img} alt="inventory" />
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

export default ProjectDetails
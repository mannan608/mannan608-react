import React from 'react'
import SectionImage from "../assets/about-vct.png"

const RndProcess = () => {
    return (
        <div className='rnd-wrapper'>
            <div className="container-fluid">
                <div className="breadcump d-flex align-items-center justify-content-center">
                    <div className="section-heading text-center">
                        <p>R & D Process</p>
                        <h3 className="mt-1">How I start working on a project Below are some of my R & D Process</h3>
                    </div>
                </div>
                <div className="rnd-process">
                    <div className="step">
                        <div className="row">
                            <div className="col-sm-6">
                                <h5>Phase 1: Planning, Design & Development</h5>
                                <p className='mt-1'>Before development begins, a clear roadmap should be established.</p>
                                <ul>
                                    <li> <p>Define Key Requirements</p></li>
                                    <li><p>Identify core features & functionalities needed.</p></li>
                                    <li><p>Understand user roles (Admin, User, Staff, etc.).</p> </li>
                                    <li><p>Plan for scalability & performance.</p></li>
                                    <li> <p>Designing the System Architecture.</p> </li>
                                    <li><p>Web Technology: Choose a modern framework (React.js, Next.js).</p></li>
                                    <li><p>Design Technology: Choose styling tools (Tailwind CSS, Bootstrap).</p></li>
                                    <li><p>State Management: Manage global & local state (Redux Toolkit (global state), RTK Query (API calls)).</p></li>
                                    <li><p>Authentication: Secure access (JWT-based authentication, role-based access control (RBAC)).</p></li>
                                    <li><p>Component Library: Use UI components (Keep React UI, Material UI, ShadCN/UI for faster UI development)</p></li>

                                </ul>
                            </div>
                            <div className="col-sm-6 ps-5">
                                <img src={SectionImage} alt="" />
                            </div>
                        </div>
                    </div>

                    <div className="step">

                        <div className="row">
                            <div className="col-sm-6 pe-5">
                                <img src={SectionImage} alt="" />
                            </div>
                            <div className="col-sm-6">
                                <h5>Phase 2: Development & Component Management</h5>
                                <p className='mt-1'>Once the architecture is defined, the development phase begins.</p>
                                <ul>
                                    <li><p>Setting Up the Project & Configuring Libraries</p> </li>
                                    <li><p>Configure Redux Toolkit, RTK Query, and Tailwind CSS.</p></li>
                                    <li><p>Set up project environment variables (.env.local).</p></li>
                                    <li><p>Establish a Standard Folder Structure</p></li>
                                    <li><p>Clean project structure improves maintainability.</p></li>
                                </ul>
                                <h6 className='mt-2'>Best Practices:</h6>
                                <ul>
                                    <li>Follow Atomic Design for reusable components.</li>
                                    <li>Keep business logic separate from UI.</li>
                                    <li>Use custom hooks (useAuth, useFetchData).</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="step">
                        <div className="row">
                            <div className="col-sm-6">
                                <h5>Phase 3: State Management & API Integration</h5>
                                <p className='mt-1'>Handling state and APIs effectively ensures a smooth user experience.</p>
                                <ul>
                                    <li><p>Managing Global State with Redux Toolkit</p></li>
                                    <li><p>Use slices to manage state</p></li>
                                    <li><p>Fetching Data using RTK Query</p> </li>
                                    <li><p>Efficient API caching reduces network calls.</p></li>
                                    <li><p>Optimized performance with automatic data fetching</p></li>
                                </ul>
                            </div>
                            <div className="col-sm-6 ps-5">
                                <img src={SectionImage} alt="" />
                            </div>
                        </div>
                    </div>
                    <div className="step">
                        <div className="row">
                            <div className="col-sm-6 pe-5">
                                <img src={SectionImage} alt="" />
                            </div>
                            <div className="col-sm-6">
                                <h5>Phase 4: Challenges & Solutions</h5>
                                <p className='mt-1'>During development, challenges will arise. Here’s how to solve them.</p>
                                <h6 className='mt-2'>Challenge: Handling Large Datasets</h6>
                                <div className="problem mt-1">
                                    <p>Problem : API response was slow when fetching thousands of data.</p>
                                </div>
                                <div className="solution mt-1">
                                    <p className='text-black fw-500'>Solution :</p>
                                    <ul>
                                        <li><p>Implement pagination, search, and filters.</p></li>
                                        <li><p>react-table</p></li>
                                        <li><p>Implement server-side pagination</p></li>
                                    </ul>
                                </div>

                                <h6 className='mt-2'>Implementing Role-Based Access</h6>
                                <div className="problem mt-1">
                                    <p>Problem : Admin should have full control, but staff should only view</p>
                                </div>
                                <div className="solution mt-1">
                                    <p className='text-black fw-500'>Solution :</p>
                                    <ul>
                                        <li><p>Use JWT with role-based permissions in ProtectedRoute.js</p></li>
                                        <li><p>Protect routes by wrapping them with ProtectedRoute role="admin"</p></li>
                                    </ul>
                                </div>
                                <h6 className='mt-2'>Synchronizing Frontend & Backend Validation</h6>
                                <div className="problem mt-1">
                                    <p>Problem : Some errors were handled only on the backend.</p>
                                </div>
                                <div className="solution mt-1">
                                    <p className='text-black fw-500'>Solution :</p>
                                    <ul>
                                        <li>
                                            <p>Use Yup + Formik / React Hook Form for unified validation.</p>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="step">
                        <div className="row">
                            <div className="col-sm-6">
                                <h5>Phase 5: Deployment & Optimization</h5>
                                <ul>
                                    <li><p>Performance Optimization</p> </li>
                                    <li><p>Lazy Loading Components</p></li>
                                    <li><p>Code Splitting with Webpack</p></li>
                                    <li><p>Image Optimization</p></li>
                                    <li><p>Compress images before uploading</p></li>
                                </ul>
                            </div>
                            <div className="col-sm-6 ps-5">
                                <img src={SectionImage} alt="" />
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default RndProcess
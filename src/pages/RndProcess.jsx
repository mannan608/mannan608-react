import React from 'react'
import SectionImage from "../assets/about-vct.svg"

const RndProcess = () => {
    return (
        <div className='rnd-wrapper'>
            <div className="container-fluid">
                <div className="breadcump d-flex align-items-center justify-content-center">
                    <div className="section-heading text-center">
                        <p>RND Process</p>
                        <h3 className="mt-1">How I start working on a project Below are some of my RNDs</h3>
                    </div>
                </div>
                <div className="rnd-process">
                    <div className="step">

                        <div className="row">
                            <div className="col-sm-6">
                                <h5>Phase 1: Planning, Design & Development</h5>
                                <p>Before development begins, a clear roadmap should be established.</p>
                                <ul>
                                    <li>
                                        1. Define Key Requirements
                                        <ul>
                                            <li>Identify core features & functionalities needed.</li>
                                            <li>Understand user roles (Admin, User, Staff, etc.).</li>
                                            <li>Plan for scalability & performance.</li>
                                        </ul>
                                    </li>
                                    <li>2. Designing the System Architecture
                                        <ul>
                                            <li>Web Technology: Choose a modern framework (React.js, Next.js)</li>
                                            <li>Design Technology: Choose styling tools (Tailwind CSS, Bootstrap)</li>
                                            <li>State Management: Manage global & local state (Redux Toolkit (global state), RTK Query (API calls))</li>
                                            <li>Authentication: Secure access (JWT-based authentication, role-based access control (RBAC))</li>
                                            <li>Component Library: Use UI components (Keep React UI, Material UI, ShadCN/UI for faster UI development.)</li>
                                        </ul>
                                    </li>
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
                                <p>Once the architecture is defined, the development phase begins.</p>
                                <ul>
                                    <li>
                                        1.	Setting Up the Project & Configuring Libraries
                                        <ul>
                                            <li>Configure Redux Toolkit, RTK Query, and Tailwind CSS.</li>
                                            <li>Set up project environment variables (.env.local).</li>
                                        </ul>
                                    </li>
                                    <li>2.	Establish a Standard Folder Structure</li>
                                    <li>Clean project structure improves maintainability.</li>
                                </ul>
                                <h6>Best Practices:</h6>
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
                                <p>Handling state and APIs effectively ensures a smooth user experience.</p>
                                <ul>
                                    <li>
                                        1. Managing Global State with Redux Toolkit
                                        <ul>
                                            <li>Use slices to manage state:</li>
                                        </ul>
                                    </li>
                                    <li>2.Fetching Data using RTK Query </li>
                                    <li>Efficient API caching reduces network calls.</li>
                                    <li>Optimized performance with automatic data fetching</li>
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
                                <p>During development, challenges will arise. Here’s how to solve them.</p>
                                <p>Challenge: Handling Large Datasets</p>
                                <div className="problem">
                                    <p>Problem : API response was slow when fetching thousands of data.</p>
                                </div>
                                <div className="solution">
                                    •	Implement pagination, search, and filters.
                                    •	react-table
                                    •	Implement server-side pagination
                                </div>

                                <p>2.	Implementing Role-Based Access</p>
                                <div className="problem">
                                    <p>Problem : Admin should have full control, but staff should only view</p>
                                </div>
                                <div className="solution">
                                    •	Use JWT with role-based permissions in ProtectedRoute.js
                                    •	Protect routes by wrapping them with ProtectedRoute role="admin"

                                </div>
                                <p>3.	Synchronizing Frontend & Backend Validation</p>
                                <div className="problem">
                                    <p>Problem : Some errors were handled only on the backend.</p>
                                </div>
                                <div className="solution">
                                    •	Use Yup + Formik / React Hook Form for unified validation.

                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="step">

                        <div className="row">
                            <div className="col-sm-6">
                                <h5>Phase 5: Deployment & Optimization</h5>
                                <ul>
                                    <li>
                                        1. Performance Optimization
                                        <ul>
                                            <li>Lazy Loading Components</li>
                                            <li>Code Splitting with Webpack</li>
                                            <li>Image Optimization</li>
                                            <li>Compress images before uploading</li>
                                        </ul>
                                    </li>

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
import Phone from "../../assets/call.svg"
import Mail from "../../assets/mail.svg"
import LinkEdin from "../../assets/linkedin.svg"
import WhatApp from "../../assets/whatsapp.svg"
import Facebook from "../../assets/fb.svg"

const ContactForm = () => {
    return (
        <>
            <div className=" row mt-5">
                <div className="col-12 col-md-8">
                    <form>
                        <div className="row">
                            <div className="col-sm-6">
                                <div className="form-group position-relative mb-3">
                                    <input
                                        type="text"
                                        className="form-control "
                                        placeholder="Your Name"
                                    />
                                </div>
                            </div>
                            <div className="col-sm-6">
                                <div className="form-group position-relative mb-3">
                                    <input
                                        type="email"
                                        className="form-control "
                                        placeholder="Your Email"
                                    />
                                </div>
                            </div>
                            <div className="col-sm-6">
                                <div className="form-group position-relative mb-3">
                                    <input
                                        type="tel"
                                        className="form-control "
                                        placeholder="Your phone"
                                    />
                                </div>
                            </div>
                            <div className="col-sm-6">
                                <div className="form-group position-relative mb-3">
                                    <input
                                        type="text"
                                        className="form-control "
                                        placeholder="Subject"
                                    />
                                </div>
                            </div>
                            <div className="col-sm-12">
                                <div className="form-group position-relative mb-3">
                                    <textarea
                                        placeholder="Message"
                                        className="form-control "
                                        defaultValue={""}
                                    />
                                </div>
                            </div>
                            <div className="col-sm-12">
                                <button type="submit" className="btn btn-primary btn-md mt-4" >
                                    Send Me Message
                                </button>
                            </div>
                        </div>
                    </form>
                </div>
                <div className="col-12 col-md-4">
                    <div className="contact-info d-flex flex-column gap-3">

                        <a href="#" className="d-flex align-items-center gap-2">
                            <div className="icon">
                                <img src={Phone} alt="cell" />
                            </div>
                            01315565037 | 01926248496
                        </a>
                        <a href="" className="d-flex align-items-center gap-2">
                            <div className="icon">
                                <img src={WhatApp} alt="WhatApp" />
                            </div>
                            01315565037
                        </a>
                        <a href="#" className="d-flex align-items-center gap-2">
                            <div className="icon">
                                <img src={Mail} alt="mail" />
                            </div>
                            mannanswe608@gmail.com
                        </a>
                        <div className="social-media d-flex gap-3 flex-wrap mt-2">

                            <a href="" className="d-flex align-items-center gap-2">
                                <div className="icon">
                                    <img src={Facebook} alt="facebook" />
                                </div>
                                Facebook
                            </a>
                            <a href="" className="d-flex align-items-center gap-2">
                                <div className="icon">
                                    <img src={LinkEdin} alt="" />
                                </div>
                                Linkedin
                            </a>
                        </div>

                    </div>
                </div>
            </div>
        </>
    )
}

export default ContactForm
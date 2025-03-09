import { FaArrowLeft, FaArrowRight } from "react-icons/fa6";
import Close from "../assets/close.png"

const ImagePreviewModal = ({ images, currentIndex, onClose, onNext, onPrev }) => {
    return (
        <>
            <div id="imageModal"  >
                <div className="previewImages ">
                    <button className="btn btn-primary btn-sm" onClick={onPrev}><FaArrowLeft /></button>
                    <div id="modalImage" className="position-relative">
                        <img src={images[currentIndex]} alt="Modal Image" />
                        <button className="btn  btn-sm closeBtn" onClick={onClose}><img src={Close} alt="" className="w-auto h-auto" /></button>
                    </div>
                    <button className="btn btn-primary btn-sm border" onClick={onNext}><FaArrowRight /></button>
                </div>
            </div>


        </>
    )
}

export default ImagePreviewModal
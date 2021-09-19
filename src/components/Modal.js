import ModalContents from './ModalContents';
import '../styles/Modal.css';

const Modal = ({ children, content, setOpenModal, openModal, description, images }) => {
	return (
		<div className={openModal ? "modal" : "modal modal__closed"}>
			<div className="modal__content">
				<i className="fas fa-times modal__closeBtn" onClick={() => setOpenModal(!openModal)}></i>
				{content !== 0 && <ModalContents content={content} description={description} images={images} />}
				{children}
			</div>
		</div>
	);
};

export default Modal;
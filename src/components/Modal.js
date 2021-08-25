import ModalContents from './ModalContents';
import '../styles/Modal.css';

const Modal = ({ children, content, setOpenModal, openModal }) => {
	return (
		<div className={openModal ? "modal" : "modal modal__closed"}>
			<div className="moda__content">
				<i className="fas fa-times modal__closeBtn" onClick={() => setOpenModal(!openModal)}></i>
				{content !== 0 && <ModalContents content={content} />}
				{children}
			</div>
		</div>
	);
};

export default Modal;
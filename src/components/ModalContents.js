import '../styles/ModalContent.css';

const ModalContents = ({ content, description, images }) => {
	if (content && content !== 0) {
		return (
			<div className="modalContent__container">
				<p className="modalContent__title">{description}</p>
				{images && images.map(image => <img className="modalContent__img" src={`/imgs/${image}`} alt="modal" />)}
			</div>
		);
	} else return '';
};

export default ModalContents;
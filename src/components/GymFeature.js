import { useState } from 'react';
import '../styles/GymFeature.css';
import Modal from './Modal';

const GymFeature = ({ iconSrc, title, description, btnText, content }) => {
	const [openModal, setOpenModal] = useState(false);
	return (
		<div className="gymFeature">
			<div className="gymFeatureIcon"><img src={iconSrc} alt="icon" /></div>
			<div div className="gymFeatureInfo" >
				<h2>{title}</h2>
				<p>
					{description}
					{btnText && (
						<>
							<button onClick={() => setOpenModal(!openModal)}>{btnText}</button>
							<Modal content={content ? content : '0'} openModal={openModal} setOpenModal={setOpenModal}></Modal>
						</>
					)}
				</p>
			</div>
		</div >
	);
};

export default GymFeature;

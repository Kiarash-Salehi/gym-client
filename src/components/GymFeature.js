import '../styles/GymFeature.css';

const GymFeature = ({ iconSrc, title, description, btnText }) => {
	return (
		<div className="gymFeature">
			<div className="gymFeatureIcon"><img src={iconSrc} alt="icon" /></div>
			<div div className="gymFeatureInfo" >
				<h2>{title}</h2>
				<p>
					{description}
					{btnText && <button>{btnText}</button>}
				</p>
			</div>
		</div >
	);
};

export default GymFeature;

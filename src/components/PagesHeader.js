import '../styles/PagesHeader.css';

const PagesHeader = ({ title }) => {
	return (
		<div className="PagesHeader">
			<img className="bgImgs" src="bg2.webp" alt="background" />
			<h2><span>{title}</span></h2>
		</div>
	);
};

export default PagesHeader;
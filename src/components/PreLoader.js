import '../styles/PreLoader.css';

function PreLoader({ style }) {
	return (
		<div className="preloader" style={style}>
			<span></span>
			<span></span>
			<span></span>
			<span></span>
			<span></span>
		</div>
	);
}

export default PreLoader;

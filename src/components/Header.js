import { Link } from 'react-router-dom';
import '../styles/Header.css';
import { useEffect, useRef } from 'react';

function Header({ className }) {
	const headerItems = useRef(null);
	const hamburgerClickHadler = () => {
		headerItems.current.classList.toggle('header_activeHamburger');
	};
	return (
		<nav className={className ? `Header ${className}` : 'Header'}>
			<span className="Header__logo"><h1><Link to="/">یوتاب فیتنس <img className="Header__logoIcon" src="./weight.svg" alt="logo" /></Link></h1></span>
			<div className="Header__hamburger" onClick={hamburgerClickHadler}>
				<span></span>
				<span></span>
				<span></span>
			</div>
			<div className="Header__items" ref={headerItems}>
        <i className="fas fa-times Header__closeHamburger" onClick={hamburgerClickHadler}></i>
				<div className="Header__otherLinks">
					<button className="Header__itemsbtn Header__item">همین حالا شروع کنید</button>
					<span style={{ marginRight: '5px', fontSize: '2rem', transform: 'scaleX(.7)' }}>|</span>
					<i className="fas fa-user-circle Header__item"></i>
				</div>
				<div className="Header__pagesLinks">
					<div className="Header__item"><Link to="/">خانه</Link></div>
					<div className="Header__item"><Link to="/about-us">درباره ما</Link></div>
					<div className="Header__item"><Link to="/courses">دوره ها</Link></div>
					<div className="Header__item"><Link to="/news">اخبار باشگاه</Link></div>
					<div className="Header__item"><Link to="/trainers">مربی ها</Link></div>
					<div className="Header__item"><Link to="/contact-us">تماس با ما</Link></div>
				</div>
			</div>
		</nav>
	);
}

export default Header;
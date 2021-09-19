import { useRef } from 'react';
import { Link } from 'react-router-dom';
// import useAuthContext from '../contexts/AuthContext';
import '../styles/Header.css';

function Header({ className }) {
	// const [authContext] = useAuthContext();
	const headerItems = useRef(null);
	const hamburgerClickHadler = () => {
		headerItems.current.classList.toggle('header_activeHamburger');
	};
	return (
		<nav className={className ? `Header ${className}` : 'Header'}>
			<span className="Header__logo"><h1><Link to="/">یوتاب فیتنس <img className="Header__logoIcon" src="./imgs/16.png" alt="logo" /></Link></h1></span>
			<div className="Header__hamburger" onClick={hamburgerClickHadler}>
				<span></span>
				<span></span>
				<span></span>
			</div>
			<div className="Header__items" ref={headerItems}>
				<i className="fas fa-times Header__closeHamburger" onClick={hamburgerClickHadler}></i>
				<div className="Header__otherLinks">
					<button className="Header__itemsbtn Header__item"><Link to="/courses">همین حالا شروع کنید</Link></button>
					{/* <span style={{ marginRight: '5px', fontSize: '2rem', transform: 'scaleX(.7)' }}>|</span>
					{authContext.isAuthenticated ? (
						<Link to="/auth"><i className="fas fa-user-circle Header__item"></i></Link>
					) : (
						<Link to="/auth" className="Header__item"><button>ورود / ثبت نام</button></Link>
					)} */}
				</div>
				<div className="Header__pagesLinks">
					<div className="Header__item"><Link to="/">خانه</Link></div>
					<div className="Header__item"><Link to="/about">درباره ما</Link></div>
					<div className="Header__item"><Link to="/courses">دوره ها</Link></div>
					{/* <div className="Header__item"><Link to="/news">اخبار باشگاه</Link></div> */}
					<div className="Header__item"><Link to="/contact">تماس با ما</Link></div>
				</div>
			</div>
		</nav>
	);
}

export default Header;
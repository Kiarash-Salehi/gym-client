import { Link } from 'react-router-dom';
import '../styles/Header.css';

function Header() {
  return (
	<nav className="Header">
		<span className="Header__logo"><h1><Link to="/">یوتاب فیتنس</Link></h1></span>
		{/* {isAdmin ? ( */}
		<div className="Header__items">
			<div className="Header__item"><Link to="/">خانه</Link></div>
			<div className="Header__item"><Link to="/order">درباره ما</Link></div>
			<div className="Header__item"><Link to="/orders">دوره ها</Link></div>
			<div className="Header__item"><Link to="/orders">بلاگ</Link></div>
			<div className="Header__item"><Link to="/orders">مربی ها</Link></div>
			<div className="Header__item"><Link to="/orders">تماس با ما</Link></div>
		</div>
		{/* ) : (
			<div className="Header__item"><Link to="/login"><i class="fas fa-user-circle"></i></Link></div>
		) } */}
		<div className="Header__items">
			<button className="Header__itemsbtn Header__item">همین حالا شروع کنید</button>
			<span style={{marginRight: '5px', fontSize: '2rem', transform: 'scaleX(.7)'}}>|</span>
			<i className="fas fa-user-circle Header__item"></i>
		</div>
	</nav>
  );
}

export default Header;
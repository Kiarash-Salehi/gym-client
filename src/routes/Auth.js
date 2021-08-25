import { useState } from 'react';
import Layout from '../components/Layout';
import '../styles/Auth.css';

const Auth = () => {
	const [sideChanger, setSideChanger] = useState(true);
	const submitHandler = e => {
		e.preventDefault();
	};
	return (
		<Layout headerClassNames="tr__header">
			<div className="auth">
				<div className="auth__container">
					<img className="bgImgs" src="gym.jpg" alt="gym" />
					<div className={sideChanger ? "auth__btns" : "auth__btns auth__leftBtns"}>
						<div className="auth__btnColor"></div>
						<button className="auth__button" onClick={() => setSideChanger(true)}>ورود</button>
						<button className="auth__button" onClick={() => setSideChanger(false)}>ثبت نام</button>
					</div>
					<div className="auth__forms" style={sideChanger ? {transform: 'translateX(0)'} : {transform: 'translateX(-50%)'}}>
						<div className="auth__login">
							<form onSubmit={submitHandler}>
								<input type="text" placeholder="نام کاربری*" className="auth__input" />
								<input type="text" placeholder="رمز ورود*" className="auth__input" />
								<button type="submit">ورود</button>
							</form>
						</div>
						<div className="auth__signup">
							<form onSubmit={submitHandler}>
								<input type="text" placeholder="نام کاربری*" className="auth__input" />
								<input type="text" placeholder="شماره همراه*" className="auth__input" />
								<input type="text" placeholder="آدرس ایمیل" className="auth__input" />
								<input type="text" placeholder="رمز ورود*" className="auth__input" />
								<input type="text" placeholder="تایید رمز*" className="auth__input" />
								<button type="submit">ثبت نام</button>
							</form>
						</div>
					</div>
				</div>
			</div>
		</Layout>
	);
};

export default Auth;

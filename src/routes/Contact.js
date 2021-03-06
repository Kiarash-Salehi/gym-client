import Layout from '../components/Layout';
import PagesHeader from '../components/PagesHeader';
import '../styles/Contact.css';
import emailjs from 'emailjs-com';
import useMessageContext from '../contexts/MessageContext';

const Contact = () => {
	const [, messagesDispatch] = useMessageContext();
	(function () {
		emailjs.init("user_yP5JeaRFtXLsCkR4bP0Qt");
	})();

	const sendMail = e => {
		e.preventDefault();
		let fromName = document.getElementById('nameInput');
		let fromEmail = document.getElementById('emailInput');
		let message = document.getElementById('messageInput');
		let submitBtn = document.getElementById('submitBtn');
		submitBtn.disabled = true;
		submitBtn.style.cursor = 'wait';
		const data = {
			from_name: fromName.value,
			from_email: fromEmail.value,
			message: message.value
		};
		emailjs.send('service_2sp0gee', 'template_n0bshc1', data)
			.then(res => {
				submitBtn.disabled = false;
				submitBtn.style.cursor = 'pointer';
				fromName.value = '';
				fromEmail.value = '';
				message.value = '';
				messagesDispatch({ type: 'SET_MESSAGES', payload: { dispatch: messagesDispatch, message: 'ایمیل با موفقیت ارسال شد!', status: 200 } });
			})
			.catch(err => {
			submitBtn.disabled = false;
			submitBtn.style.cursor = 'pointer';
				messagesDispatch({ type: 'SET_MESSAGES', payload: { dispatch: messagesDispatch, message: err.message, status: 300 } });
			});
	};
	return (
		<Layout headerClassNames="tr__header">
			<div className="contact">
				<PagesHeader title="راه های ارتباطی" />
				<div className="contact__ways">
					<div className="contact__map">
						<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d810.3948253666952!2d51.3977595291944!3d35.662735388360375!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3f8e0174dc3f307b%3A0xc3e9ac497fea4402!2z2KjYp9i02q_Yp9mHINmI2LHYsti024wg2b7YsdmI2LHYtCDYp9mG2K_Yp9mFINuM2YjYqtin2Kgg2YHbjNiq2YbYsw!5e0!3m2!1sen!2ssg!4v1629817173405!5m2!1sen!2ssg" loading="lazy" title="Gym's location"></iframe>
					</div>
					<div className="contact__info">
						<div className="contact__messageForm">
							<h2>فرستادن ایمیل</h2>
							<form onSubmit={sendMail}>
								<div>
									<label>اسم
										<input type="text" placeholder="اسم" name="name" id="nameInput" required />
									</label>
									<label>آدرس ایمیل
										<input type="email" placeholder="آدرس ایمیل" name="email" id="emailInput" required />
									</label>
								</div>
								<label>پیام
									<textarea type="text" placeholder="پیام" name="message" id="messageInput" required></textarea>
								</label>
								<button id="submitBtn" type="submit">ارسال</button>
							</form>
						</div>
						<div className="contact__address">
							<div>
								<i class="fas fa-map-marker-alt"></i>
								<span>
									<h2>آدرس:</h2>
									<p>تهران، خیابان ولیعصر، خیابان مختاری غربی</p>
								</span>
							</div>
							<div>
								<i class="fas fa-phone"></i>
								<span>
									<h2>تلفن:</h2>
									<p><a rel="noreferrer" href="tel:+982155387043">021-55387043</a></p>
								</span>
							</div>
						</div>
					</div>
				</div>
			</div>
		</Layout>
	);
};

export default Contact;
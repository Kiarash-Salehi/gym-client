import '../styles/Footer.css';

const footer = () => {
	return (
		<div className="footer">
			<div className="footer__columns">
				<div className="footer__column">
					<h2>درباره ما</h2>
					<p>توضیحات</p>
				</div>
				<div className="footer__column">
					<h2>راه های ارتباطی</h2>
					<div>
						<p><b>آدرس: </b>تهران، خیابان ولیعصر، خیابان مختاری غربی</p>
					</div>
					<div>
						<p><b>تلفن: </b>021-55555555</p>
					</div>
				</div>
				<div className="footer__column">
					<h2>عضویت در خبر نامه</h2>
					<input type="email" name="emailAddress" placeholder="آدرس ایمیل" className="footer__input" />
					<button className="footer__btn"><i class="fas fa-paper-plane"></i></button>
				</div>
			</div>
		</div>
	);
};

export default footer;
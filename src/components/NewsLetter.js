import '../styles/NewsLetter.css';

const NewsLetter = () => {
	return (
		<div className="newsLetter">
			<img className="bgImgs" src="bg.png" alt="bg" />
          <h2>عضویت در خبرنامه</h2>
          <div>
            <input type="email" name="emailAddress" placeholder="آدرس ایمیل" />
            <button className="newsLetter__newsletterBtn">عضویت</button>
          </div>
		</div>
	);
};

export default NewsLetter;

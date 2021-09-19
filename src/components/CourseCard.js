import '../styles/CourseCard.css';
import { useState } from 'react';
import Modal from './Modal';

const CourseCard = ({ courseLogo, courseImg, courseTitle, courseDuration, coursePrice, courseDescription }) => {
	const [openModal, setOpenModal] = useState(false);
	return (
		<div className="courseCard">
			<img className="coursecard__courseLogo" src={courseLogo} alt="weight" />
			<div className="courseCard__img"><img src={courseImg} alt="course" /></div>
			<div className="courseCard__info">
				<div className="courseCard__infoItem">{courseTitle}</div>
				<div className="courseCard__infoItem">{coursePrice} ت</div>
				<div className="courseCard__infoItem">{courseDuration}</div>
				<button className="courseCard__btn" onClick={() => setOpenModal(!openModal)}>اطلاعات بیشتر و ثبت نام</button>
				<Modal openModal={openModal} setOpenModal={setOpenModal}>
					<div className="coursecard__modal">
						<div className="courseCard__modalImg"><img src={courseImg} alt="course" /></div>
						<p className="courseCard__modalInfoDesc">{courseDescription}</p>
						<div className="courseCard__modalInfo">
							<div className="courseCard__modalInfoItem">دوره: {courseTitle}</div>
							<div className="courseCard__modalInfoItem">هزینه دوره: {coursePrice} تومان</div>
							<div className="courseCard__modalInfoItem"><i class="fas fa-stopwatch"></i> مدت زمان دوره:  {courseDuration}</div>
						</div>
						<div className="courseCard__modalRegisterInfo">
							<p>برای ثبت نام و اطلاعات بیشتر با شماره 55387043-021 تماس حاصل فرمایید.</p>
						</div>
					</div>
				</Modal>
			</div>
		</div>
	);
};

export default CourseCard;
import '../styles/CourseCard.css';
import { Link } from 'react-router-dom';

const CourseCard = ({ courseLogo, courseImg, courseTitle, courseDuration, coursePrice, coursePageLink }) => {
	return (
		<div className="courseCard">
			<img className="coursecard__courseLogo" src={courseLogo} alt="weight" />
			<div className="courseCard__img"><img src={courseImg} alt="course" /></div>
			<div className="courseCard__info">
				<div className="courseCard__infoItem">{courseTitle}</div>
				<div className="courseCard__infoItem">{coursePrice}</div>
				<div className="courseCard__infoItem">{courseDuration}</div>
				<button className="courseCard__btn"><Link to={coursePageLink}>اطلاعات بیشتر و ثبت نام</Link></button>
			</div>
		</div>
	);
};

export default CourseCard;
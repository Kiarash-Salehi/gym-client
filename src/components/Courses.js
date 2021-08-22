import '../styles/Courses.css';
import CourseCard from './CourseCard';

const Courses = ({ gender }) => {
	const menCourses = [
		{
			courseTitle: 'بدنسازی',
			courseDuration: '12 جلسه در ماه',
			courcePrice: 350000,
			coursePageLink: '/',
			courseImg: 'equipment.jpg',
			courseLogo: 'weight.svg'
		},
		{
			courseTitle: 'بدنسازی',
			courseDuration: '16 جلسه در ماه',
			courcePrice: 400000,
			coursePageLink: '/',
			courseImg: 'equipment.jpg',
			courseLogo: 'weight.svg'
		},
		{
			courseTitle: 'بدنسازی',
			courseDuration: '20 جلسه در ماه',
			courcePrice: 450000,
			coursePageLink: '/',
			courseImg: 'equipment.jpg',
			courseLogo: 'weight.svg'
		},
		{
			courseTitle: 'بدنسازی',
			courseDuration: '24 جلسه در ماه',
			courcePrice: 500000,
			coursePageLink: '/',
			courseImg: 'equipment.jpg',
			courseLogo: 'weight.svg'
		},
	];
	const womenCourses = [
		{
			courseTitle: 'بدنسازی',
			courseDuration: '12 جلسه در ماه',
			courcePrice: 350000,
			coursePageLink: '/',
			courseImg: 'equipment.jpg',
			courseLogo: 'weight.svg'
		},
		{
			courseTitle: 'بدنسازی',
			courseDuration: '16 جلسه در ماه',
			courcePrice: 400000,
			coursePageLink: '/',
			courseImg: 'equipment.jpg',
			courseLogo: 'weight.svg'
		},
		{
			courseTitle: 'بدنسازی',
			courseDuration: '20 جلسه در ماه',
			courcePrice: 450000,
			coursePageLink: '/',
			courseImg: 'equipment.jpg',
			courseLogo: 'weight.svg'
		},
		{
			courseTitle: 'بدنسازی',
			courseDuration: '24 جلسه در ماه',
			courcePrice: 500000,
			coursePageLink: '/',
			courseImg: 'equipment.jpg',
			courseLogo: 'weight.svg'
		},
	];
	const courses = gender === 'men' ? menCourses : womenCourses;
	return (
		<div className="courses">
			{courses.map(course => <CourseCard courseLogo={course.courseLogo} courseImg={course.courseImg} courseTitle={course.courseTitle} courseDuration={course.courseDuration} courcePrice={course.courcePrice} coursePageLink={course.coursePageLink} />)}
		</div>
	);
};

export default Courses;

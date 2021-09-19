import '../styles/Courses.css';
import CourseCard from './CourseCard';

const Courses = ({ gender }) => {
	const menCourses = [
		{
			courseTitle: 'بدنسازی',
			courseDuration: '12 جلسه در ماه',
			courcePrice: 350000,
			courseDescription: 'شما با ثبت نام در این دوره مجاز به استفاده از تجهیزات باشگاه به مدت 2 ساعت خواهید بود. توجه داشته باشید که با ثبت نام برای بار اول شما مشمول به پرداخت 70 هزار تومان برای بیمه ورزشی و صدور کارت عضویت میشوید.',
			courseImg: 'equipment.jpg',
			courseLogo: 'weight.svg'
		},
		{
			courseTitle: 'بدنسازی',
			courseDuration: '16 جلسه در ماه',
			courcePrice: 400000,
			courseDescription: 'شما با ثبت نام در این دوره مجاز به استفاده از تجهیزات باشگاه به مدت 2 ساعت خواهید بود. توجه داشته باشید که با ثبت نام برای بار اول شما مشمول به پرداخت 70 هزار تومان برای بیمه ورزشی و صدور کارت عضویت میشوید.',
			courseImg: 'equipment.jpg',
			courseLogo: 'weight.svg'
		},
		{
			courseTitle: 'بدنسازی',
			courseDuration: '20 جلسه در ماه',
			courcePrice: 450000,
			courseDescription: 'شما با ثبت نام در این دوره مجاز به استفاده از تجهیزات باشگاه به مدت 2 ساعت خواهید بود. توجه داشته باشید که با ثبت نام برای بار اول شما مشمول به پرداخت 70 هزار تومان برای بیمه ورزشی و صدور کارت عضویت میشوید.',
			courseImg: 'equipment.jpg',
			courseLogo: 'weight.svg'
		},
		{
			courseTitle: 'بدنسازی',
			courseDuration: '24 جلسه در ماه',
			courcePrice: 500000,
			courseDescription: 'شما با ثبت نام در این دوره مجاز به استفاده از تجهیزات باشگاه به مدت 2 ساعت خواهید بود. توجه داشته باشید که با ثبت نام برای بار اول شما مشمول به پرداخت 70 هزار تومان برای بیمه ورزشی و صدور کارت عضویت میشوید.',
			courseImg: 'equipment.jpg',
			courseLogo: 'weight.svg'
		},
	];
	const womenCourses = [
		{
			courseTitle: 'بدنسازی',
			courseDuration: '12 جلسه در ماه',
			courcePrice: 350000,
			courseDescription: 'شما با ثبت نام در این دوره مجاز به استفاده از تجهیزات باشگاه به مدت 2 ساعت خواهید بود. توجه داشته باشید که با ثبت نام برای بار اول شما مشمول به پرداخت 70 هزار تومان برای بیمه ورزشی و صدور کارت عضویت میشوید.',
			courseImg: 'equipment.jpg',
			courseLogo: 'weight.svg'
		},
		{
			courseTitle: 'بدنسازی',
			courseDuration: '16 جلسه در ماه',
			courcePrice: 400000,
			courseDescription: 'شما با ثبت نام در این دوره مجاز به استفاده از تجهیزات باشگاه به مدت 2 ساعت خواهید بود. توجه داشته باشید که با ثبت نام برای بار اول شما مشمول به پرداخت 70 هزار تومان برای بیمه ورزشی و صدور کارت عضویت میشوید.',
			courseImg: 'equipment.jpg',
			courseLogo: 'weight.svg'
		},
		{
			courseTitle: 'بدنسازی',
			courseDuration: '20 جلسه در ماه',
			courcePrice: 450000,
			courseDescription: 'شما با ثبت نام در این دوره مجاز به استفاده از تجهیزات باشگاه به مدت 2 ساعت خواهید بود. توجه داشته باشید که با ثبت نام برای بار اول شما مشمول به پرداخت 70 هزار تومان برای بیمه ورزشی و صدور کارت عضویت میشوید.',
			courseImg: 'equipment.jpg',
			courseLogo: 'weight.svg'
		},
		{
			courseTitle: 'بدنسازی',
			courseDuration: '24 جلسه در ماه',
			courcePrice: 500000,
			courseDescription: 'شما با ثبت نام در این دوره مجاز به استفاده از تجهیزات باشگاه به مدت 2 ساعت خواهید بود. توجه داشته باشید که با ثبت نام برای بار اول شما مشمول به پرداخت 70 هزار تومان برای بیمه ورزشی و صدور کارت عضویت میشوید.',
			courseImg: 'equipment.jpg',
			courseLogo: 'weight.svg'
		},
	];
	const courses = gender === 'men' ? menCourses : womenCourses;
	return (
		<div className="courses">
			{courses.map(course => <CourseCard courseLogo={course.courseLogo} courseImg={course.courseImg} courseTitle={course.courseTitle} courseDuration={course.courseDuration} coursePrice={course.courcePrice.toLocaleString()} coursePageLink={course.coursePageLink} courseDescription={course.courseDescription} />)}
		</div>
	);
};

export default Courses;

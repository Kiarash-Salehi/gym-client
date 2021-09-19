import Layout from '../components/Layout';
import PagesHeader from '../components/PagesHeader';
import Courses from '../components/Courses';
// import NewsLetter from '../components/NewsLetter';
import '../styles/CoursesPage.css';

const CoursesPage = () => {
	return (
		<Layout headerClassNames="tr__header">
			<div class="coursePage">
				<PagesHeader title="دوره ها" />
        <section className="coursePage__menCourses">
          <img className="coursePage__menCoursesBgImg" src="bg.png" alt="background" />
          <h2 className="sectionHeaders">دوره های آقایان</h2>
          <Courses gender="men" />
        </section>
        <section className="coursePage__womenCourses">
          <h2 className="sectionHeaders">دوره های بانوان</h2>
          <Courses gender="women" />
        </section>
        {/* <NewsLetter /> */}
			</div>
		</Layout>
	);
};

export default CoursesPage;
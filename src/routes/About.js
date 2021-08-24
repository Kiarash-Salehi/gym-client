import Layout from '../components/Layout';
import PagesHeader from '../components/PagesHeader';
import GymFeatures from '../components/GymFeatures';
import NewsLetter from '../components/NewsLetter';
import '../styles/About.css';

const About = () => {
	return (
		<Layout headerClassNames="tr__header">
			<div class="about">
				<PagesHeader title="درباره ما" />
				<section className="about__gymFeaturesSection">
					<GymFeatures />
				</section>
				<NewsLetter />
			</div>
		</Layout>
	);
};

export default About;
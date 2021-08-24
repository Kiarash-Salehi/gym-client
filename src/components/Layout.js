import Header from './Header';
import Footer from './Footer';
import Messages from './Messages';
import PreLoader from './PreLoader';
import useShowLoaderContext from '../contexts/ShowLoaderContext';

const Layout = ({ children, headerClassNames, mainClassNames }) => {
	const [showLoader] = useShowLoaderContext();
	return (
		<>
			<header>
				<Header className={headerClassNames ? headerClassNames : ''} />
			</header>
			<main className={mainClassNames ? mainClassNames : ''}>
				<Messages />
				{showLoader?.showLoader ? <PreLoader style={{ opacity: 1 }} /> : <PreLoader style={{ opacity: 0, userSelect: 'none', pointerEvents: 'none' }} />}
				{children}
			</main>
			<Footer />
		</>
	);
};

export default Layout;
import { useEffect } from 'react';
import './styles/App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './routes/Home';
import About from './routes/About';
import CoursesPage from './routes/CoursesPage';
import Contact from './routes/Contact';
// import Auth from './routes/Auth';
import NotFound from './routes/NotFound';
import useMessageContext from './contexts/MessageContext';
import useShowLoaderContext from './contexts/ShowLoaderContext';

function App() {
	const [, messagesDispatch] = useMessageContext();
	const [, showLoaderDispatch] = useShowLoaderContext();
	useEffect(() => {
		showLoaderDispatch({ type: 'SHOW_LOADER' })
		window.addEventListener('load', () => showLoaderDispatch({ type: 'HIDE_LOADER' }));
		window.addEventListener('offline', () => messagesDispatch({
			type: 'SET_MESSAGES',
			payload: {
				message: 'اینترنت شما قطع شده!',
				status: 400,
				dispatch: messagesDispatch
			}
		}));
		window.addEventListener('online', () => messagesDispatch({
			type: 'SET_MESSAGES',
			payload: {
				message: 'اینترنت شما وصل شد!',
				status: 203,
				dispatch: messagesDispatch
			}
		}));
		return () => {
			window.removeEventListener('load');
			window.removeEventListener('offline');
			window.removeEventListener('online');
		};
		// eslint-disable-next-line
	}, []);
	return (
		<Router>
			<Switch>
				<Route exact path="/" component={Home} />
				<Route exact path="/about" component={About} />
				<Route exact path="/courses" component={CoursesPage} />
				<Route exact path="/contact" component={Contact} />
				{/* <Route exact path="/auth" component={Auth} /> */}
				<Route path="/*" component={NotFound} />
			</Switch>
		</Router>
	);
}

export default App;

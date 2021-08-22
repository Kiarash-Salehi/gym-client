import { useEffect } from 'react';
import './styles/App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './routes/Home';
import NotFound from './routes/NotFound';
import Header from './components/Header';
import Messages from './components/Messages';
import PreLoader from './components/PreLoader';
import useMessageContext from './contexts/MessageContext';
import useShowLoaderContext from './contexts/ShowLoaderContext';

function App() {
	const [, messagesDispatch] = useMessageContext();
	const [showLoader, showLoaderDispatch] = useShowLoaderContext();
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
			window.removeEventListener('offline');
			window.removeEventListener('online');
			window.removeEventListener('load');
		};
		// eslint-disable-next-line
	}, []);
	return (
		<>
			<Messages />
			{showLoader?.showLoader ? <PreLoader style={{ opacity: 1 }} /> : <PreLoader style={{ opacity: 0, userSelect: 'none', pointerEvents: 'none' }} />}
			<Router>
				<Header />
				<Switch>
					<Route exact path="/" component={Home} />
					<Route path="/*" component={NotFound} />
				</Switch>
			</Router>
		</>
	);
}

export default App;

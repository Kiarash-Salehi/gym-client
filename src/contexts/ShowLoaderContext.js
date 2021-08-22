import { createContext, useContext, useReducer } from 'react';
import { showLoaderReducer, initialState } from '../reducers/ShowLoaderReducer';

export const ShowLoaderContext = createContext();

export const ShowLoaderContextProvider = ({ children }) => {
	return (
		<ShowLoaderContext.Provider value={useReducer(showLoaderReducer, initialState)}>
			{children}
		</ShowLoaderContext.Provider>
	);
};

const useShowLoaderContext = () => useContext(ShowLoaderContext);
export default useShowLoaderContext;
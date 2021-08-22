import { createContext, useContext, useReducer } from 'react';
import { AuthReducer, initialState } from '../reducers/AuthReducer';

export const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
	return (
		<AuthContext.Provider value={useReducer(AuthReducer, initialState)}>
			{children}
		</AuthContext.Provider>
	);
};

const useAuthContext = () => useContext(AuthContext);
export default useAuthContext;
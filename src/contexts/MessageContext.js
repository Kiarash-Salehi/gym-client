import { createContext, useContext, useReducer } from 'react';
import { messagesReducer, initialState } from '../reducers/MessagesReducer';

export const MessageContext = createContext();

export const MessageContextProvider = ({ children }) => {
	// const showMessage = message => {
	// 	setMessage(message);
	// 	setTimeout(() => {
	// 		setMessage(null);
	// 	}, 3000);
	// };
	return (
		<MessageContext.Provider value={useReducer(messagesReducer, initialState)}>
			{children}
		</MessageContext.Provider>
	);
};

const useMessageContext = () => useContext(MessageContext);
export default useMessageContext;
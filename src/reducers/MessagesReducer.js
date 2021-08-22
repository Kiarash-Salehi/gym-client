export const initialState = {
	messages: []
};

export const messagesReducer = (state, action) => {
	switch (action.type) {
		case 'SET_MESSAGES':
			const dispatch = action.payload.dispatch;
			const message = action.payload.message;
			const id = state.messages.length;
			const status = action.payload.status;
			setTimeout(() => {
				dispatch({ type: 'CLEAR_MESSAGE', payload: { id } });
			}, 5000);
			return {
				messages: [...state.messages, { id, message, status }]
			};
		case 'CLEAR_MESSAGE':
			let messages = [...state.messages];
			messages = messages.filter(message => message.id !== action.payload.id);
			return { messages };
		default:
			return state;
	}
};
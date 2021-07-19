import { SAVE_COMMENT, FETCH_COMMETS } from 'actions/types';

const initialState = [];

const commentsReducer = (state = initialState, action) => {
	if (action.type === SAVE_COMMENT) {
		return [...state, action.payload];
	}
	if (action.type === FETCH_COMMETS) {
		const comments = action.payload.data.map((comment) => comment.name);
		return [...state, ...comments];
	}

	return state;
};

export default commentsReducer;

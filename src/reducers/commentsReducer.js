import { SAVE_COMMENT } from 'actions/types';

const initialState = [];

const commentsReducer = (state = initialState, action) => {
	if (action.type === SAVE_COMMENT) {
		return [...state, action.payload];
	}

	return state;
};

export default commentsReducer;

import commentsReducer from 'reducers/commentsReducer';
import { SAVE_COMMENT } from 'actions/types';

it('SAVE_COMMENTでステートが変わる。', () => {
	const action = {
		type: SAVE_COMMENT,
		payload: 'New Comment',
	};

	const newState = commentsReducer([], action);
	expect(newState).toEqual(['New Comment']);
});

it('定義されていないtypeでもエラーにならない。', () => {
	const action = {
		type: 'unknown',
		payload: 'New Comment',
	};

	const newState = commentsReducer([], action);
	expect(newState).toEqual([]);
});

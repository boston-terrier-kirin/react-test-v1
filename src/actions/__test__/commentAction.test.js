import { saveComment } from 'actions/commentAction';
import { SAVE_COMMENT } from 'actions/types';

describe('saveComment', () => {
	it('typeが正しいか。', () => {
		const action = saveComment();
		expect(action.type).toEqual(SAVE_COMMENT);
	});

	it('payloadが正しいか', () => {
		const action = saveComment('Yes We Can!');
		expect(action.payload).toEqual('Yes We Can!');
	});
});

import { mount } from 'enzyme';
import Root from 'components/Root';
import CommentBox from 'components/CommentBox';

let wrapped;

beforeEach(() => {
	wrapped = mount(
		<Root>
			<CommentBox />
		</Root>
	);
});

afterEach(() => {
	wrapped.unmount();
});

describe('テキストエリア初期値', () => {
	it('テキストエリアとボタンがある。', () => {
		expect(wrapped.find('textarea').length).toEqual(1);
		expect(wrapped.find('button').length).toEqual(2);
	});
});

describe('テキストエリア入力', () => {
	beforeEach(() => {
		wrapped.find('textarea').simulate('change', {
			target: {
				value: 'new comment',
			},
		});
		wrapped.update();
	});

	it('テキストエリアに入力できる。', () => {
		expect(wrapped.find('textarea').prop('value')).toEqual('new comment');
	});

	it('サブミット後に値がクリアされる。', () => {
		wrapped.find('textarea').simulate('submit');
		wrapped.update();

		expect(wrapped.find('textarea').prop('value')).not.toEqual(
			'new comment'
		);
		expect(wrapped.find('textarea').prop('value')).toEqual('');
	});
});

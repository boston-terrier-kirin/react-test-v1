import { mount } from 'enzyme';
import Root from 'components/Root';
import CommentList from 'components/CommentList';

let wrapped;

beforeEach(() => {
	const initialState = {
		comments: ['test1', 'test2'],
	};

	wrapped = mount(
		<Root initialState={initialState}>
			<CommentList />
		</Root>
	);
});

afterEach(() => {
	wrapped.unmount();
});

it('コメントごとに<li>が作られる。', () => {
	expect(wrapped.find('li').length).toEqual(2);
});

it('コメントの中身が正しいか。', () => {
	expect(wrapped.render().text()).toContain('test1');
	expect(wrapped.render().text()).toContain('test2');
});

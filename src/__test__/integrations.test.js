import { mount } from 'enzyme';
import moxios from 'moxios';
import Root from 'components/Root';
import App from 'components/App';

beforeEach(() => {
	moxios.install();
	moxios.stubRequest('http://jsonplaceholder.typicode.com/comments', {
		status: 200,
		response: [{ name: 'Fetch #1' }, { name: 'Fetch #2' }],
	});
});

afterEach(() => {
	moxios.uninstall();
});

it('コメントをFetchできるか？', (done) => {
	const wrapped = mount(
		<Root>
			<App />
		</Root>
	);

	wrapped.find('.fetch-comments').simulate('click');

	moxios.wait(() => {
		wrapped.update();

		expect(wrapped.find('li').length).toEqual(2);

		done();
		wrapped.unmount();
	});
});

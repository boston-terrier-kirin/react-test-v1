import { Provider } from 'react-redux';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import reduxPromise from 'redux-promise';
import logger from 'redux-logger';

import commentsReducer from 'reducers/commentsReducer';

const middlewares = [];
middlewares.push(reduxPromise);
if (process.env.NODE_ENV === 'development') {
	middlewares.push(logger);
}

const Root = (props) => {
	const { children, initialState = {} } = props;

	const store = createStore(
		combineReducers({ comments: commentsReducer }),
		initialState,
		applyMiddleware(...middlewares)
	);

	return <Provider store={store}>{children}</Provider>;
};

export default Root;

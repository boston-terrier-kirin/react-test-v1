import { Provider } from 'react-redux';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import logger from 'redux-logger';

import commentsReducer from 'reducers/commentsReducer';

const middlewares = [];

if (process.env.NODE_ENV === 'development') {
	middlewares.push(logger);
}
const store = createStore(
	combineReducers({ comments: commentsReducer }),
	applyMiddleware(...middlewares)
);

const Root = (props) => {
	return <Provider store={store}>{props.children}</Provider>;
};

export default Root;

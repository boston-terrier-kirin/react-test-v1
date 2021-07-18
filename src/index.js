import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import App from 'components/App';
import commentsReducer from './reducers/commentsReducer';

const store = createStore(combineReducers({ comments: commentsReducer }));

ReactDOM.render(
	<Provider store={store}>
		<App />
	</Provider>,
	document.getElementById('root')
);

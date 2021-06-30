import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import { postsSaga } from './sagas';
import createSagaMiddleware from 'redux-saga';
import { postListReducer } from './reducers/postListReducer';

const sagaMiddleware = createSagaMiddleware();
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = createStore(
	combineReducers({
		postListReducer,
	}),
	composeEnhancers(applyMiddleware(sagaMiddleware))
);
sagaMiddleware.run(postsSaga);

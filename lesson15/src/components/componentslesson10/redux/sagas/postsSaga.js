import { takeEvery, call, put } from 'redux-saga/effects';
import { ACTIONS } from '../constants';

function* getPostsSaga() {
	console.log('GET_POSTS_REQUEST');
	try {
		const responsePost = yield call(() =>
			fetch('https://jsonplaceholder.typicode.com/posts')
		);
		const posts = yield responsePost.json();

		// new Error('У кого-то руки не из того места');

		yield put({
			type: ACTIONS.GET_POSTS_SUCCESS,
			posts,
		});
		console.log({ posts });
	} catch (e) {
		yield put({ type: 'GET_POSTS_FAILURE', error: e.message });
	}
}
function* getUserSaga(action) {
	try {
		const responsePost = yield call(() =>
			fetch(`https://jsonplaceholder.typicode.com/users/${action.id}`)
		);
		const user = yield responsePost.json();
		yield put({
			type: ACTIONS.GET_USER_SUCCESS,
			user,
		});
		console.log({ user });
	} catch (e) {}
}
export function* postsSaga() {
	yield takeEvery(ACTIONS.GET_POSTS_REQUEST, getPostsSaga);
	yield takeEvery(ACTIONS.GET_USER_REQUEST, getUserSaga);
}

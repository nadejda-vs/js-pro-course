import { takeEvery, call, put } from 'redux-saga/effects';
import { ACTIONS } from '../constants';

function* getPostsSaga() {
	console.log('GET_POSTS_REQUEST');
	try {
		const responsePost = yield call(() =>
			fetch('https://jsonplaceholder.typicode.com/posts')
		);
		const postsResponse = yield responsePost.json();
		///убрать в другой генератор
		// const responseUser = yield call(() =>
		// 	fetch('https://jsonplaceholder.typicode.com/users')
		// );
		// const userResponse = yield responseUser.json();
		yield put({
			type: ACTIONS.GET_POSTS_SUCCESS,
			postsResponse,
		});
		console.log({ postsResponse });
	} catch (e) {}
}
export function* postsSaga() {
	yield takeEvery(ACTIONS.GET_POSTS_REQUEST, getPostsSaga);
}

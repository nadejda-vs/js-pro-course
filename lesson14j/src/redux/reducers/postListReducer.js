import { ACTIONS } from '../constants';

const defaultState = { posts: [], error: null };

export function postListReducer(state, action) {
	switch (action.type) {
		case ACTIONS.GET_POSTS_SUCCESS: {
			console.log(action.posts);
			return { ...state, posts: action.posts };
		}
		case ACTIONS.GET_POSTS_FAILURE: {
			return { ...state, error: action.error };
		}

		default:
			return defaultState;
	}
}

import { ACTIONS } from '../constants';

const defaultState = { posts: [] };

export function postListReducer(state, action) {
	switch (action.type) {
		case ACTIONS.GET_POSTS_SUCCESS: {
			return { ...state, posts: action.posts };
		}

		default:
			return defaultState;
	}
}

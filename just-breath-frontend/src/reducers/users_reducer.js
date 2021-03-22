import { NEW_POST } from '../actions/user_actions';

const initialState = {
	content: []
};

export const usersReducer = (state = initialState, action) => {
	switch (action.type) {
		case NEW_POST:
			return {
				...state,
				content: [ ...state.content, action.payload ]
			};
		default:
			return state;
	}
};

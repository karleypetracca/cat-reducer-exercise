// import action types
import { ACTION_SET_NAME } from "../actionTypes";

const initialState = {
	name: "Guster",
};

const nameReducer = (state = initialState, action) => {
	switch (action.type) {
		case ACTION_SET_NAME: {
			return {
				...state,
				name: action,
			};
		}
		default:
			return state;
	}
};

export default nameReducer;

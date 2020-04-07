// import action types
import {
	ACTION_NAP,
	ACTION_EAT,
	ACTION_PLAY,
	ACTION_MURDER,
	ACTION_SET_ACTIVITY,
} from "../actionTypes";

const initialState = {
	activity: "napping",
};

const activityReducer = (state = initialState, action) => {
	switch (action.type) {
		case ACTION_NAP: {
			return {
				...state,
				activity: "napping",
			};
		}
		case ACTION_EAT: {
			return {
				...state,
				activity: "eating",
			};
		}
		case ACTION_PLAY: {
			return {
				...state,
				activity: "playing",
			};
		}
		case ACTION_MURDER: {
			return {
				...state,
				activity: "murdering",
			};
		}
		default:
			return state;
	}
};

export default activityReducer;

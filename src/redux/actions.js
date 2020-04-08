import {
	ACTION_SET_ACTIVITY,
	ACTION_SET_NAME,
	ACTION_ADD_CAT,
} from "./actionTypes";

export const setActivity = (id, activity) => {
	return {
		type: ACTION_SET_ACTIVITY,
		payload: {
			id,
			activity,
		},
	};
};

export const setName = (id, name) => {
	return {
		type: ACTION_SET_NAME,
		payload: {
			id,
			name,
		},
	};
};

export const addCat = ({ name, activity }) => {
	return {
		type: ACTION_ADD_CAT,
		payload: {
			name,
			activity,
		},
	};
};

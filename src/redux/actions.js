import {
	ACTION_SET_ACTIVITY,
	ACTION_SET_NAME,
	ACTION_ADD_CAT,
} from "./actionTypes";

export const setActivity = (id) => {
	return {
		type: ACTION_SET_ACTIVITY,
		payload: {
			id,
		},
	};
};

export const setName = (id) => {
	return {
		type: ACTION_SET_NAME,
		payload: {
			id,
		},
	};
};

let nextId = 0;

export const addCat = (catInfo) => {
	return {
		type: ACTION_ADD_CAT,
		payload: {
			id: ++nextId,
			catInfo,
		},
	};
};

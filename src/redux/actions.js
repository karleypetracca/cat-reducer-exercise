import {
	ACTION_NAP,
	ACTION_EAT,
	ACTION_PLAY,
	ACTION_MURDER,
	ACTION_SET_NAME,
	ACTION_SET_ACTIVITY,
} from "./actionTypes";

export const nap = () => {
	return {
		type: ACTION_NAP,
	};
};

export const eat = () => {
	return {
		type: ACTION_EAT,
	};
};

export const play = () => {
	return {
		type: ACTION_PLAY,
	};
};

export const murder = () => {
	return {
		type: ACTION_MURDER,
	};
};

export const setName = (name) => {
	return {
		type: ACTION_SET_NAME,
		payload: {
			name: name,
		},
	};
};

export const setActivity = (activity) => {
	return {
		type: ACTION_SET_ACTIVITY,
		payload: {
			activity: activity,
		},
	};
};

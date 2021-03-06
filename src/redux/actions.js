import {
	ACTION_NAP,
	ACTION_EAT,
	ACTION_PLAY,
	ACTION_MURDER,
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

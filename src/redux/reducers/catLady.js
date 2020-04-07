import { ACTION_ADD_CAT } from "../actionTypes";

const initialState = {
	allIds: [],
	byIds: {},
};

const catLadyReducer = (state = initialState, action) => {
	switch (action.type) {
		case ACTION_ADD_CAT: {
			const { id, name, activity } = action.payload;
			return {
				...state,
				allIds: [...state.allIds, id],
				byIds: {
					...state.byIds,
					[id]: {
						name,
						activity,
					},
				},
			};
		}
		default:
			return state;
	}
};

export default catLadyReducer;

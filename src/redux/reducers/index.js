import { combineReducers } from "redux";
import activityReducer from "./activity";
import nameReducer from "./name";
import catLadyReducer from "./catLady";
import catReducer from "./catReducer";

// export default combineReducers({
// 	catLadyReducer,
// 	activity: activityReducer,
// 	name: nameReducer,
// });

export default combineReducers({
	cats: catReducer,
});

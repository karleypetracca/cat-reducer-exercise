import { combineReducers } from "redux";
import activityReducer from "./activity";
import nameReducer from "./name";
import catLadyReducer from "./catLady";

export default combineReducers({
	catLadyReducer,
	activity: activityReducer,
	name: nameReducer,
});

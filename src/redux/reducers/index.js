import { combineReducers } from "redux";
import activiyReducer from "./activity";

export default combineReducers({ activity: activityReducer });

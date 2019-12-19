import { combineReducers } from "redux";
import coinsReducer from "./coinsReducer.js";

const rootReducer = combineReducers({
    coins: coinsReducer
});

export default rootReducer;

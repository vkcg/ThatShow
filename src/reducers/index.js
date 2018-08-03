import { combineReducers } from "redux";
import ShowReducer from './reducer-shows';
import ActiveShowReducer from './reducer-active-show';

const allReducers = combineReducers({
    shows: ShowReducer,
    activeShow: ActiveShowReducer
})

export default allReducers;

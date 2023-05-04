import { combineReducers } from "redux";
import PaymentUserReducerState from "./PaymentUserReducer/PaymentUserReducer"
import VacationApplyReducerState from "./VacationApplyReducer/VacationApplyReducer";
const rootReducer = combineReducers({ PaymentUserReducerState,VacationApplyReducerState});

export default rootReducer;

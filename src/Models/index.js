import { combineReducers } from "redux";
import PaymentUserReducerState from "./PaymentUserReducer/PaymentUserReducer"
import VacationApplyReducerState from "./VacationApplyReducer/VacationApplyReducer";
import Login_Info_Reducer_State from "./LoginInfoReducer/LoginInfoReducer";
import Vacation_Info_Reducer_State from "./VacationInfoReducer/VacationInfoReducer";
const rootReducer = combineReducers({ PaymentUserReducerState,VacationApplyReducerState,Login_Info_Reducer_State,Vacation_Info_Reducer_State});

export default rootReducer;

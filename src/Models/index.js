import { combineReducers } from 'redux';
import Login_Info_Reducer_State from './LoginInfoReducer/LoginInfoReducer';

import PaymentUserReducerState from './PaymentUserReducer/PaymentUserReducer';

import VacationApplyReducerState from './VacationApplyReducer/VacationApplyReducer';
import OvertimeApplyReducerState from './Redux-Thunk/OvertimCalendarReduce';

import Vacation_Info_Reducer_State from './VacationInfoReducer/VacationInfoReducer';
import AnuualLeaveNavState from './AnnualLeaveNavReducer/AnnualLeaveNavReducer';
import VacationCalendarState from './Redux-Thunk/VacataionCalendarReduce';
import UsedVacationState from './Redux-Thunk/UsedVacationReduce';

const rootReducer = combineReducers({
    PaymentUserReducerState,
    VacationApplyReducerState,
    Login_Info_Reducer_State,
    Vacation_Info_Reducer_State,
    AnuualLeaveNavState,
    VacationCalendarState,
    UsedVacationState,
    OvertimeApplyReducerState,
});

export default rootReducer;

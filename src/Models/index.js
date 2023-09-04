import { combineReducers } from 'redux';
import Login_Info_Reducer_State from './LoginInfoReducer/LoginInfoReducer';

import PaymentUserReducerState from './PaymentUserReducer/PaymentUserReducer';

import VacationApplyReducerState from './VacationApplyReducer/VacationApplyReducer';
import BeforeApplyReducerState from './OvertimeApplyReducer/BeforeApplyReducer';
import AfterApplyReducerState from './OvertimeApplyReducer/AfterApplyReducer';
import MealChargeApplyReducerState from './MealApplyReducer/MealApplyReducer';

import Vacation_Info_Reducer_State from './VacationInfoReducer/VacationInfoReducer';

import AnuualLeaveNavState from './AnnualLeaveNavReducer/AnnualLeaveNavReducer';

import VacationCalendarState from './Redux-Thunk/VacataionCalendarReduce';
import MealChargeCalendarState from './Redux-Thunk/MealChargeCalendarReduce';
import OvertimeApplyReducerState from './Redux-Thunk/OvertimCalendarReduce';

import UsedVacationState from './Redux-Thunk/UsedVacationReduce';
import UsedOvertimeState from './Redux-Thunk/UsedOvertimeReduce';
import UsedMealChargeState from './Redux-Thunk/UsedMealChargeReduce';

import PaymentUserSelectReducerState from './PaymentUserReducer/PaymentUserSelectReduce';

const rootReducer = combineReducers({
    PaymentUserReducerState,
    VacationApplyReducerState,
    Login_Info_Reducer_State,
    Vacation_Info_Reducer_State,
    AnuualLeaveNavState,
    BeforeApplyReducerState,
    AfterApplyReducerState,
    MealChargeApplyReducerState,
    PaymentUserSelectReducerState,
    VacationCalendarState,
    MealChargeCalendarState,
    UsedVacationState,
    UsedOvertimeState,
    UsedMealChargeState,
    OvertimeApplyReducerState,
});

export default rootReducer;

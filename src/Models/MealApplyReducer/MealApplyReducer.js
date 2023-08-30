import uuid from 'react-uuid';
import moment from 'moment';
export const MEAL_CHARGE_APPLY_STATE_REDUCER_GET = 'MEAL_CHARGE_APPLY_STATE_REDUCER_GET';
export const MEAL_CHARGE_APPLY_INTIAL_STATE_REDUCER_GET = 'MEAL_CHARGE_APPLY_INTIAL_STATE_REDUCER_GET';

const initState = {
    Meal_Charge_State: [],
};

export const Meal_Charge_Apply_State_Func = data => ({
    type: MEAL_CHARGE_APPLY_STATE_REDUCER_GET,
    payload: data,
});
const Sort_Data = Data_Array => {
    const Data_Array_Sort = Data_Array.sort((a, b) => a.date - b.date);
    return Data_Array_Sort;
};
const MealChargeApplyReducerState = (state = initState, action) => {
    switch (action.type) {
        case MEAL_CHARGE_APPLY_STATE_REDUCER_GET:
            return {
                ...state,
                Meal_Charge_State: Sort_Data(action.payload),
            };
        case MEAL_CHARGE_APPLY_INTIAL_STATE_REDUCER_GET:
            return {
                state: initState,
            };
        default:
            return state;
    }
};

export default MealChargeApplyReducerState;

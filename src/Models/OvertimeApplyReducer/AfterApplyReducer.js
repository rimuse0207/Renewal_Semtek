import uuid from 'react-uuid';
import moment from 'moment';
export const AFTER_OVERTIME_APPLY_STATE_REDUCER_GET = 'AFTER_OVERTIME_APPLY_STATE_REDUCER_GET';
export const AFTER_OVERTIME_APPLY_INTIAL_STATE_REDUCER_GET = 'AFTER_OVERTIME_APPLY_INTIAL_STATE_REDUCER_GET';

const initState = {
    After_Overtime_State: [],
};

export const After_Overtime_Apply_State_Func = data => ({
    type: AFTER_OVERTIME_APPLY_STATE_REDUCER_GET,
    payload: data,
});
const Sort_Data = Data_Array => {
    const Data_Array_Sort = Data_Array.sort((a, b) => a.after_overtime_apply_info_date - b.after_overtime_apply_info_date);
    return Data_Array_Sort;
};
const AfterApplyReducerState = (state = initState, action) => {
    switch (action.type) {
        case AFTER_OVERTIME_APPLY_STATE_REDUCER_GET:
            return {
                ...state,
                After_Overtime_State: Sort_Data(action.payload),
            };
        case AFTER_OVERTIME_APPLY_INTIAL_STATE_REDUCER_GET:
            return {
                state: initState,
            };
        default:
            return state;
    }
};

export default AfterApplyReducerState;

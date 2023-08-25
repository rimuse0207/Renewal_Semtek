import uuid from 'react-uuid';
import moment from 'moment';
export const BEFORE_OVERTIME_APPLY_STATE_REDUCER_GET = 'BEFORE_OVERTIME_APPLY_STATE_REDUCER_GET';
export const BEFORE_OVERTIME_APPLY_INTIAL_STATE_REDUCER_GET = 'BEFORE_OVERTIME_APPLY_INTIAL_STATE_REDUCER_GET';

const initState = {
    Before_Overtime_State: [],
};

export const Before_Overtime_Apply_State_Func = data => ({
    type: BEFORE_OVERTIME_APPLY_STATE_REDUCER_GET,
    payload: data,
});

const Sort_Data = Data_Array => {
    const Data_Array_Sort = Data_Array.sort((a, b) => a.before_overtime_apply_info_date - b.before_overtime_apply_info_date);
    return Data_Array_Sort;
};

const BeforeApplyReducerState = (state = initState, action) => {
    switch (action.type) {
        case BEFORE_OVERTIME_APPLY_STATE_REDUCER_GET:
            return {
                ...state,
                Before_Overtime_State: Sort_Data(action.payload),
            };
        case BEFORE_OVERTIME_APPLY_INTIAL_STATE_REDUCER_GET:
            return {
                state: initState,
            };
        default:
            return state;
    }
};

export default BeforeApplyReducerState;

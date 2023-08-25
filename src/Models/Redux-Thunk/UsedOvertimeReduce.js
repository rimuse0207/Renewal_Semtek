import { createAsyncAction, createReducer } from 'typesafe-actions';
import { request } from '../../API';

const USED_OVERTIME_GET_START = 'USED_OVERTIME_GET_START';
const USED_OVERTIME_GET_SUCCESS = 'USED_OVERTIME_GET_SUCCESS';
const USED_OVERTIME_GET_ERROR = 'USED_OVERTIME_GET_ERROR';

const Used_Overtime_Data_Async = createAsyncAction(USED_OVERTIME_GET_START, USED_OVERTIME_GET_SUCCESS, USED_OVERTIME_GET_ERROR)();

const Used_Overtime_Data_Getting = async (GetDate, ID) => {
    try {
        const Used_Overtime_Data_Getting_Axios = await request.get(`/semtek/History_Overtime_Apply_Data`, {
            params: {
                ID,
                Date: GetDate,
            },
        });

        if (Used_Overtime_Data_Getting_Axios.data.dataSuccess) {
            return Used_Overtime_Data_Getting_Axios.data;
        } else {
            return false;
        }
    } catch (error) {
        console.log(error);
        return error;
    }
};

export function Used_Overtime_Data_Getting_Redux_Thunk(GetDate, ID) {
    return async dispatch => {
        const { request, success, failure } = Used_Overtime_Data_Async;
        dispatch(request());
        try {
            const Used_Overtime = await Used_Overtime_Data_Getting(GetDate, ID);
            if (Used_Overtime) {
                dispatch(success(Used_Overtime));
            } else {
                dispatch(failure('서버와의 연결 끊김'));
            }
        } catch (e) {
            dispatch(failure(e));
        }
    };
}

const initialState = {
    Used_Overtime_State: {
        loading: false,
        error: null,
        Used_Before_Overtime_Data: [],
        Used_After_Overtime_Data: [],
    },
};

const UsedOvertimeReduce = createReducer(initialState, {
    [USED_OVERTIME_GET_START]: state => ({
        ...state,
        Used_Overtime_State: {
            ...state.Used_Overtime_State,
            loading: true,
            Used_Before_Overtime_Data: [],
            Used_After_Overtime_Data: [],
        },
    }),
    [USED_OVERTIME_GET_SUCCESS]: (state, action) => ({
        ...state,
        Used_Overtime_State: {
            ...state.Used_Overtime_State,
            loading: false,
            error: null,
            Used_Before_Overtime_Data: action.payload.History_Before_Overtime_Apply_Data_Rows,
            Used_After_Overtime_Data: action.payload.History_After_Overtime_Apply_Data_Rows,
        },
    }),
    [USED_OVERTIME_GET_ERROR]: (state, action) => ({
        ...state,
        Used_Overtime_State: {
            ...state.Used_Overtime_State,
            loading: false,
            error: action.payload,
            Used_Before_Overtime_Data: [],
            Used_After_Overtime_Data: [],
        },
    }),
});

export default UsedOvertimeReduce;

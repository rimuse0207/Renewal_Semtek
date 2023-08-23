import { createAsyncAction, createReducer } from 'typesafe-actions';
import { request } from '../../API';

const USED_VACATION_GET_START = 'USED_VACATION_GET_START';
const USED_VACATION_GET_SUCCESS = 'USED_VACATION_GET_SUCCESS';
const USED_VACATION_GET_ERROR = 'USED_VACATION_GET_ERROR';

const Used_Vacation_Data_Async = createAsyncAction(USED_VACATION_GET_START, USED_VACATION_GET_SUCCESS, USED_VACATION_GET_ERROR)();

const Used_Vacation_Data_Getting = async (GetDate, ID) => {
    try {
        const Used_Vacation_Data_Getting_Axios = await request.get('/semtek/Used_Vacation_Data_Getting', {
            params: {
                GetDate,
                ID,
            },
        });

        if (Used_Vacation_Data_Getting_Axios.data.dataSuccess) {
            return Used_Vacation_Data_Getting_Axios.data.Select_Apply_Vacation_Info_Rows;
        } else {
            return false;
        }
    } catch (error) {
        console.log(error);
        return error;
    }
};

export function Used_Vacation_Data_Getting_Redux_Thunk(GetDate, ID) {
    return async dispatch => {
        const { request, success, failure } = Used_Vacation_Data_Async;
        dispatch(request());
        try {
            const Used_Vacation = await Used_Vacation_Data_Getting(GetDate, ID);
            if (Used_Vacation) {
                dispatch(success(Used_Vacation));
            } else {
                dispatch(failure('서버와의 연결 끊김'));
            }
        } catch (e) {
            dispatch(failure(e));
        }
    };
}

const initialState = {
    Used_Vacation_State: {
        loading: false,
        error: null,
        Used_Vacation_Data: [],
    },
};

const UsedVacationReduce = createReducer(initialState, {
    [USED_VACATION_GET_START]: state => ({
        ...state,
        Used_Vacation_State: {
            ...state.Used_Vacation_State,
            loading: true,
            Used_Vacation_Data: [],
        },
    }),
    [USED_VACATION_GET_SUCCESS]: (state, action) => ({
        ...state,
        Used_Vacation_State: {
            ...state.Used_Vacation_State,
            loading: false,
            error: null,
            Used_Vacation_Data: action.payload,
        },
    }),
    [USED_VACATION_GET_ERROR]: (state, action) => ({
        ...state,
        Used_Vacation_State: {
            ...state.Used_Vacation_State,
            loading: false,
            error: action.payload,
            Used_Vacation_Data: [],
        },
    }),
});

export default UsedVacationReduce;

import { createAsyncAction, createReducer } from 'typesafe-actions';
import { request } from '../../API';

const OVERTIME_CALENDAR_GET_START = 'OVERTIME_CALENDAR_GET_START';
const OVERTIME_CALENDAR_GET_SUCCESS = 'OVERTIME_CALENDAR_GET_SUCCESS';
const OVERTIME_CALENDAR_GET_ERROR = 'OVERTIME_CALENDAR_GET_ERROR';
const OVERTIME_CALENDAR_MENU_CHANGE = 'OVERTIME_CALENDAR_MENU_CHANGE';

const Overtime_Calendar_Data_Async = createAsyncAction(
    OVERTIME_CALENDAR_GET_START,
    OVERTIME_CALENDAR_GET_SUCCESS,
    OVERTIME_CALENDAR_GET_ERROR
)();

const Overtime_Apply_Table_Data_Getting = async (GetData, ID) => {
    try {
        const Overtime_Apply_Table_Data_Getting_Axios = await request.get('/semtek/Overtime_Apply_Table_Data_Getting', {
            params: {
                GetData,
                ID,
            },
        });

        if (Overtime_Apply_Table_Data_Getting_Axios.data.dataSuccess) {
            return Overtime_Apply_Table_Data_Getting_Axios.data;
        } else {
            return false;
        }
    } catch (error) {
        console.log(error);
        return error;
    }
};

export function Overtime_Calendar_Data_Getting_Redux_Thunk(GetData, ID) {
    return async dispatch => {
        const { request, success, failure } = Overtime_Calendar_Data_Async;
        dispatch(request());
        try {
            const userProfile = await Overtime_Apply_Table_Data_Getting(GetData, ID);
            if (userProfile) {
                dispatch(success(userProfile));
            } else {
                dispatch(failure('서버와의 연결 끊김'));
            }
        } catch (e) {
            dispatch(failure(e));
        }
    };
}

export const Overtime_Menu_Select_Checked = Change_Data => ({
    type: OVERTIME_CALENDAR_MENU_CHANGE,
    payload: Change_Data,
});

const initialState = {
    Overtime_Calendar_State: {
        loading: false,
        error: null,
        Overtime_Date_Data: [],
    },
};

const OvertimeCalendarReduce = createReducer(initialState, {
    [OVERTIME_CALENDAR_GET_START]: state => ({
        ...state,
        Overtime_Calendar_State: {
            ...state.Overtime_Calendar_State,
            loading: true,
            Overtime_Date_Data: [],
        },
    }),
    [OVERTIME_CALENDAR_GET_SUCCESS]: (state, action) => ({
        ...state,
        Overtime_Calendar_State: {
            ...state.Overtime_Calendar_State,
            loading: false,
            error: null,
            Overtime_Date_Data: action.payload.Overtime_Date_Data ? action.payload.Overtime_Date_Data : [],
        },
    }),
    [OVERTIME_CALENDAR_GET_ERROR]: (state, action) => ({
        ...state,
        Overtime_Calendar_State: {
            ...state.Overtime_Calendar_State,
            loading: false,
            error: action.payload,
            Overtime_Date_Data: [],
        },
    }),
    [OVERTIME_CALENDAR_MENU_CHANGE]: (state, action) => ({
        ...state,
        Overtime_Calendar_State: {
            ...state.Overtime_Calendar_State,
            Overtime_Date_Data: action.payload,
        },
    }),
});

export default OvertimeCalendarReduce;

import { createAsyncAction, createReducer } from 'typesafe-actions';
import { request } from '../../API';

const MEAL_CHARGE_CALENDAR_GET_START = 'MEAL_CHARGE_CALENDAR_GET_START';
const MEAL_CHARGE_CALENDAR_GET_SUCCESS = 'MEAL_CHARGE_CALENDAR_GET_SUCCESS';
const MEAL_CHARGE_CALENDAR_GET_ERROR = 'MEAL_CHARGE_CALENDAR_GET_ERROR';
const MEAL_CHARGE_CALENDAR_MENU_CHANGE = 'MEAL_CHARGE_CALENDAR_MENU_CHANGE';

const Meal_Charge_Calendar_Data_Async = createAsyncAction(
    MEAL_CHARGE_CALENDAR_GET_START,
    MEAL_CHARGE_CALENDAR_GET_SUCCESS,
    MEAL_CHARGE_CALENDAR_GET_ERROR
)();

const Meal_Charge_Apply_Table_Data_Getting = async (GetData, ID) => {
    try {
        const Meal_Charge_Apply_Table_Data_Getting_Axios = await request.get('/semtek/Meal_Charge_Apply_Table_Data_Getting', {
            params: {
                GetData,
                ID,
            },
        });

        if (Meal_Charge_Apply_Table_Data_Getting_Axios.data.dataSuccess) {
            return Meal_Charge_Apply_Table_Data_Getting_Axios.data;
        } else {
            return false;
        }
    } catch (error) {
        console.log(error);
        return error;
    }
};

export function Meal_Charge_Calendar_Data_Getting_Redux_Thunk(GetData, ID) {
    return async dispatch => {
        const { request, success, failure } = Meal_Charge_Calendar_Data_Async;
        dispatch(request());
        try {
            const userProfile = await Meal_Charge_Apply_Table_Data_Getting(GetData, ID);
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

export const Meal_Charge_Menu_Select_Checked = Change_Data => ({
    type: MEAL_CHARGE_CALENDAR_MENU_CHANGE,
    payload: Change_Data,
});

const initialState = {
    Meal_Charge_Calendar_State: {
        loading: false,
        error: null,
        Meal_Charge_Date_Data: [],
    },
};

const MealChargeCalendarReduce = createReducer(initialState, {
    [MEAL_CHARGE_CALENDAR_GET_START]: state => ({
        ...state,
        Meal_Charge_Calendar_State: {
            ...state.Meal_Charge_Calendar_State,
            loading: true,
            Meal_Charge_Date_Data: [],
        },
    }),
    [MEAL_CHARGE_CALENDAR_GET_SUCCESS]: (state, action) => ({
        ...state,
        Meal_Charge_Calendar_State: {
            ...state.Meal_Charge_Calendar_State,
            loading: false,
            error: null,
            Meal_Charge_Date_Data: action.payload.FoodCharge_Date_Data ? action.payload.FoodCharge_Date_Data : [],
        },
    }),
    [MEAL_CHARGE_CALENDAR_GET_ERROR]: (state, action) => ({
        ...state,
        Meal_Charge_Calendar_State: {
            ...state.Meal_Charge_Calendar_State,
            loading: false,
            error: action.payload,
            Meal_Charge_Date_Data: [],
        },
    }),
    [MEAL_CHARGE_CALENDAR_MENU_CHANGE]: (state, action) => ({
        ...state,
        Meal_Charge_Calendar_State: {
            ...state.Meal_Charge_Calendar_State,
            Meal_Charge_Date_Data: action.payload,
        },
    }),
});

export default MealChargeCalendarReduce;

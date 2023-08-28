import { createAsyncAction, createReducer } from 'typesafe-actions';
import { request } from '../../API';

const USED_MEALCHARGE_GET_START = 'USED_MEALCHARGE_GET_START';
const USED_MEALCHARGE_GET_SUCCESS = 'USED_MEALCHARGE_GET_SUCCESS';
const USED_MEALCHARGE_GET_ERROR = 'USED_MEALCHARGE_GET_ERROR';

const Used_Meal_Charge_Data_Async = createAsyncAction(USED_MEALCHARGE_GET_START, USED_MEALCHARGE_GET_SUCCESS, USED_MEALCHARGE_GET_ERROR)();

const Used_Meal_Charge_Data_Getting = async (GetDate, ID) => {
    try {
        const Used_Meal_Charge_Data_Getting_Axios = await request.get('/semtek/Used_Meal_Charge_Data_Getting', {
            params: {
                GetDate,
                ID,
            },
        });

        if (Used_Meal_Charge_Data_Getting_Axios.data.dataSuccess) {
            return Used_Meal_Charge_Data_Getting_Axios.data.Select_Meal_Charge_Data_Rows;
        } else {
            return false;
        }
    } catch (error) {
        console.log(error);
        return error;
    }
};

export function Used_Meal_Charge_Data_Getting_Redux_Thunk(GetDate, ID) {
    return async dispatch => {
        const { request, success, failure } = Used_Meal_Charge_Data_Async;
        dispatch(request());
        try {
            const Used_Meal_Charge = await Used_Meal_Charge_Data_Getting(GetDate, ID);
            if (Used_Meal_Charge) {
                dispatch(success(Used_Meal_Charge));
            } else {
                dispatch(failure('서버와의 연결 끊김'));
            }
        } catch (e) {
            dispatch(failure(e));
        }
    };
}

const initialState = {
    Used_Meal_Charge_State: {
        loading: false,
        error: null,
        Used_Meal_Charge_Data: [],
    },
};

const UsedMealChargeReduce = createReducer(initialState, {
    [USED_MEALCHARGE_GET_START]: state => ({
        ...state,
        Used_Meal_Charge_State: {
            ...state.Used_Meal_Charge_State,
            loading: true,
            Used_Meal_Charge_Data: [],
        },
    }),
    [USED_MEALCHARGE_GET_SUCCESS]: (state, action) => ({
        ...state,
        Used_Meal_Charge_State: {
            ...state.Used_Meal_Charge_State,
            loading: false,
            error: null,
            Used_Meal_Charge_Data: action.payload ? action.payload : [],
        },
    }),
    [USED_MEALCHARGE_GET_ERROR]: (state, action) => ({
        ...state,
        Used_Meal_Charge_State: {
            ...state.Used_Meal_Charge_State,
            loading: false,
            error: action.payload,
            Used_Meal_Charge_Data: [],
        },
    }),
});

export default UsedMealChargeReduce;

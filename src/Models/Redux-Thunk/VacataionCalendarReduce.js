import { createAsyncAction, createReducer } from 'typesafe-actions';
import { request } from '../../API';



const VACATION_CALENDAR_GET_START = 'VACATION_CALENDAR_GET_START';
const VACATION_CALENDAR_GET_SUCCESS = 'VACATION_CALENDAR_GET_SUCCESS';
const VACATION_CALENDAR_GET_ERROR = 'VACATION_CALENDAR_GET_ERROR';
const VACATION_CALENDAR_MENU_CHANGE = 'VACATION_CALENDAR_MENU_CHANGE';



const Vacation_Calendar_Data_Async = createAsyncAction(
    VACATION_CALENDAR_GET_START,
    VACATION_CALENDAR_GET_SUCCESS,
    VACATION_CALENDAR_GET_ERROR
)();


const Vacation_Apply_Table_Data_Getting_Axios = async (GetData,ID) => {
    try {
       
         const Vacation_Apply_Table_Data_Getting_Axios = await request.get('/semtek/Vacation_Apply_Table_Data_Getting', {
                params: {
                    GetData,
                    ID
                }
         })
      
        
        if (Vacation_Apply_Table_Data_Getting_Axios.data.dataSuccess) {
            return Vacation_Apply_Table_Data_Getting_Axios.data;
        } else {
            return false;
        }

    
    } catch (error) {
        console.log(error);
        return error;
    }
};



export function Vacation_Calendar_Data_Getting_Redux_Thunk(GetData,ID) {
    return async dispatch => {
        const { request, success, failure } = Vacation_Calendar_Data_Async;
        dispatch(request());
        try {
            const userProfile = await Vacation_Apply_Table_Data_Getting_Axios(GetData,ID);
            if (userProfile) {
                dispatch(success(userProfile));
            } else {
                dispatch(failure("서버와의 연결 끊김"));    
            }
        } catch (e) {
            dispatch(failure(e));
        }
    };
}

export const Vacation_Menu_Select_Checked = (Change_Data) => ({
    
    type: VACATION_CALENDAR_MENU_CHANGE,
    payload: Change_Data
})



const initialState = {
    Vacation_Calendar_State: {
        loading: false,
        error: null,
        Vacation_Date_Data: [],
        
        
    },
};

const VacationCalendarReduce = createReducer(initialState, {
    [VACATION_CALENDAR_GET_START]: state => ({
        ...state,
        Vacation_Calendar_State: {
            ...state.Vacation_Calendar_State,
            loading: true,      
            Vacation_Date_Data:[]
        },
    }),
    [VACATION_CALENDAR_GET_SUCCESS]: (state, action) => ({
        ...state,
        Vacation_Calendar_State: {
            ...state.Vacation_Calendar_State,
            loading: false,
            error: null,
            Vacation_Date_Data: action.payload.Vacation_Date_Data,
           
        },
    }),
    [VACATION_CALENDAR_GET_ERROR]: (state, action) => ({
        ...state,
        Vacation_Calendar_State: {
            ...state.Vacation_Calendar_State,
            loading: false,
            error: action.payload,
            Vacation_Date_Data:[]
        },
    }),
    [VACATION_CALENDAR_MENU_CHANGE]:(state, action) => ({
        ...state,
        Vacation_Calendar_State: {
            ...state.Vacation_Calendar_State,
            Vacation_Date_Data: action.payload
        },
    }),
   
  
});

export default VacationCalendarReduce;

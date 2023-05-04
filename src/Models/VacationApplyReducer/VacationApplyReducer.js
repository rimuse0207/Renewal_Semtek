import uuid from "react-uuid";
import moment from "moment";
export const VACATION_APPLY_STATE_REDUCER_GET = 'VACATION_APPLY_STATE_REDUCER_GET'
export const VACATION_APPLY_INTIAL_STATE_REDUCER_GET = 'VACATION_APPLY_INTIAL_STATE_REDUCER_GET'


const initState = {
    clickedDateData: [{
            keys: uuid(),
            date: moment(),
            datePlan: "연차 휴가",
            Start_Date:  moment(),
            End_Date:  moment(),
            Select_Days:1,
            Week_days: 1,
            Weekend_days: 0,
            Start_Time: "09:00",
            End_Time:"18:00"
    }]
}

export const Vacation_Apply_State_Func = (data) => ({
    type: VACATION_APPLY_STATE_REDUCER_GET,
    payload:data
})



const VacationApplyReducerState = (state = initState, action) => {
    switch (action.type) {
        case VACATION_APPLY_STATE_REDUCER_GET:
            return {
                ...state,
                clickedDateData:action.payload
            }
        case VACATION_APPLY_INTIAL_STATE_REDUCER_GET:
            return {
                state:initState
            }
        default:
            return state;
    }
}

export default VacationApplyReducerState;
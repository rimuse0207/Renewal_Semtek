import { request } from "../../API";

export const VACATION_INFO_STATE_REDUCER_GET = 'VACATION_INFO_STATE_REDUCER_GET'
export const VACATION_INFO_INTIAL_STATE_REDUCER_GET = 'VACATION_INFO_INTIAL_STATE_REDUCER_GET'
const GET_VACATION_INFO_STATE_API_START = 'GET_VACATION_INFO_STATE_API_START'; // 요청 시작
const GET_VACATION_INFO_STATE_API_SUCCESS = 'GET_VACATION_INFO_STATE_API_SUCCESS'; // 요청 성공
const GET_VACATION_INFO_STATE_API_ERROR = 'GET_VACATION_INFO_STATE_API_ERROR'; // 요청 실패

const initState = {
    
        loading: false,
        data: {
            vacation_count_payment: 0,
            vacation_used_count: 0,
            vacation_not_used_count:0,
        },
        error:null,
    
}
export const get_Vacation_Info_State_API = (id) => async dispatch => {
  dispatch({ type: GET_VACATION_INFO_STATE_API_START }); // 요청이 시작됨
  try {
      const get_Vacation_Info_State_API_Axios = await request.get(`/semtek/get_Vacation_Info_State_API`, {
          params: {
            id:id
        }
    }); // API 호출
    dispatch({ type: GET_VACATION_INFO_STATE_API_SUCCESS, data:get_Vacation_Info_State_API_Axios.data.Vacation_Info_State }); // 성공
  } catch (e) {
    dispatch({ type: GET_VACATION_INFO_STATE_API_ERROR, error: e }); // 실패
  }
};

export const Vacation_Info_State_Func = (data) => ({
    type: VACATION_INFO_STATE_REDUCER_GET,
    payload:data
})


const Vacation_Info_Reducer_State = (state = initState, action) => {
    switch (action.type) {
        case GET_VACATION_INFO_STATE_API_START:
            return {
                ...state,
                loading: true,
                error: null,
                data:  {
                    vacation_count_payment: 0,
                    vacation_used_count: 0,
                    vacation_not_used_count:0,
                     },
            }
          case GET_VACATION_INFO_STATE_API_SUCCESS:
            return {
                ...state,
                loading: false,
                data: action.data,
                error:null,
            }
        case GET_VACATION_INFO_STATE_API_SUCCESS:
            return {
                ...state,
                loading: false,
                error: action.error,
                data: {
            vacation_count_payment: 0,
            vacation_used_count: 0,
            vacation_not_used_count:0,
        },
            }
        case VACATION_INFO_INTIAL_STATE_REDUCER_GET:
            return {
                state:initState
            }
        default:
            return state;
    }
}

export default Vacation_Info_Reducer_State;
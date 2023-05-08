export const LOGIN_INFO_APPLY_STATE_REDUCER_GET = 'LOGIN_INFO_APPLY_STATE_REDUCER_GET'
export const LOGIN_INFO_INTIAL_STATE_REDUCER_GET = 'LOGIN_INFO_INTIAL_STATE_REDUCER_GET'


const initState = {
    Login_Info: {
        id: '',
        position:'',
        team: '',
        company: '',
        vacation_admin_access: false,
        ot_admin: false,
        epid: '',
        
    }
}

export const Login_Info_Apply_State_Func = (data) => ({
    type: LOGIN_INFO_APPLY_STATE_REDUCER_GET,
    payload:data
})



const Login_Info_Reducer_State = (state = initState, action) => {
    switch (action.type) {
        case LOGIN_INFO_APPLY_STATE_REDUCER_GET:
            return {
                ...state,
                Login_Info:action.payload
            }
        case LOGIN_INFO_INTIAL_STATE_REDUCER_GET:
            return {
                state:initState
            }
        default:
            return state;
    }
}

export default Login_Info_Reducer_State;
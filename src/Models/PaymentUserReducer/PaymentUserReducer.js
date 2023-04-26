export const PAYMENT_APPLY_USER_REDUCER_GET = 'PAYMENT_APPLY_USER_REDUCER_GET'
export const PAYMENT_REVIEW_USER_REDUCER_GET = 'PAYMENT_REVIEW_USER_REDUCER_GET'
export const PAYMENT_ACCEPT_USER_REDUCER_GET = 'PAYMENT_ACCEPT_USER_REDUCER_GET'


const initState = {
    Apply: [],
    Review: [],
    Accept:[]
}

export const Payment_Apply_User_Change_Func = (data) => ({
    type: PAYMENT_APPLY_USER_REDUCER_GET,
    payload:data
})
export const Payment_Review_User_Change_Func = (data) => ({
    type: PAYMENT_REVIEW_USER_REDUCER_GET,
    payload:data
})

export const Payment_Accept_User_Change_Func = (data) => ({
    type: PAYMENT_ACCEPT_USER_REDUCER_GET,
    payload:data
})


const PaymentUserReducerState = (state = initState, action) => {
    switch (action.type) {
        case PAYMENT_APPLY_USER_REDUCER_GET:
            return {
                ...state,
                Apply: action.payload
            }
             case PAYMENT_REVIEW_USER_REDUCER_GET:
            return {
                ...state,
                Review: action.payload
            }
         case PAYMENT_ACCEPT_USER_REDUCER_GET:
            return {
                ...state,
                Accept: action.payload
            }
        default:
            return state;
    }
}

export default PaymentUserReducerState;
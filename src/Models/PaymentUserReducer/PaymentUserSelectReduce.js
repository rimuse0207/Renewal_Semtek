export const PAYMENT_USER_SELECT_STATE = 'PAYMENT_USER_SELECT_STATE';

const initState = {
    User_Select: {
        value: 'ALL',
        label: '전체 || ALL',
    },
};

export const Payment_User_Select_Change_Func = data => ({
    type: PAYMENT_USER_SELECT_STATE,
    payload: data,
});

const PaymentUserSelectReducerState = (state = initState, action) => {
    switch (action.type) {
        case PAYMENT_USER_SELECT_STATE:
            return {
                ...state,
                User_Select: action.payload,
            };
        default:
            return state;
    }
};

export default PaymentUserSelectReducerState;

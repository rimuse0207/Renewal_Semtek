export const ANNUALLEAVENAV_STATE_GET = 'ANNUALLEAVENAV_STATE_GET'


const initState = {
        Annual_Leave_Nav_State:[{
                menu_name: 'MainPage',
                menu_check:true
        },
        {
            menu_name: 'AnnualLeaveSelect',
            menu_check:false
        },
        {
            menu_name: 'ApplyAnnualLeave',
            menu_check:false
    }]
}

export const AnuualLeaveNavStateChange = (data) => ({
    type: ANNUALLEAVENAV_STATE_GET,
    payload:data
})


const AnuualLeaveNavState = (state = initState, action) => {
    switch (action.type) {
        case ANNUALLEAVENAV_STATE_GET:
            return {
                ...state,
                Annual_Leave_Nav_State: action.payload
            }
        default:
            return state;
    }
}

export default AnuualLeaveNavState;
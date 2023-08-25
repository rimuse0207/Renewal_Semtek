import React from 'react';
// import ApplyPayment from "./ApplyPayment/ApplyPayment";
import ApplyUserSelect from './ApplyUserSelect/ApplyUserSelect';
import ApplyBasicSetting from '../../../../../Annual_Leave/AnnualLeaveContainer/AnnualLeaveContents/AnnualLeaveApply/AnnualLeaveApplyContainer/AnnualLeaveApplyContent/ApplyBasicSetting/ApplyBasicSetting';
import ApplyPayment from '../../../../../Annual_Leave/AnnualLeaveContainer/AnnualLeaveContents/AnnualLeaveApply/AnnualLeaveApplyContainer/AnnualLeaveApplyContent/ApplyPayment/ApplyPayment';
import ApplySelectTable from './ApplySelectTable/ApplySelectTable';
import styled from 'styled-components';
import { AnnualLeaveApplyContentMainPageMainDivBox } from '../../../../../Annual_Leave/AnnualLeaveContainer/AnnualLeaveContents/AnnualLeaveApply/AnnualLeaveApplyContainer/AnnualLeaveApplyContent/AnnualLeaveApplyContentMainPage';
import { useSelector } from 'react-redux';
import { request } from '../../../../../../../API';

const OvertimeWorkingApplyContainerMainDivBox = styled.div`
    border: 1px solid black;
`;

const OvertimeWorkingApplyContainer = () => {
    const Login_Info = useSelector(state => state.Login_Info_Reducer_State.Login_Info);
    const Before_Apply_State = useSelector(state => state.BeforeApplyReducerState.Before_Overtime_State);
    const After_Apply_State = useSelector(state => state.AfterApplyReducerState.After_Overtime_State);
    const Apply_User_State = useSelector(state => state.PaymentUserReducerState.Apply);
    const Review_User_State = useSelector(state => state.PaymentUserReducerState.Review);
    const Accept_User_State = useSelector(state => state.PaymentUserReducerState.Accept);
    const HandleClick_Apply_Overtime_Submit = async () => {
        try {
            const HandleClick_Apply_Overtime_Submit_Axios = await request.post('/semtek/HandleClick_Apply_Overtime_Submit', {
                ID: Login_Info.id,
                Before_Apply_State,
                After_Apply_State,
                Apply_User_State,
                Review_User_State,
                Accept_User_State,
            });

            console.log(HandleClick_Apply_Overtime_Submit_Axios);
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <AnnualLeaveApplyContentMainPageMainDivBox>
            <ApplyBasicSetting Selected={'Overtime'}></ApplyBasicSetting>
            <ApplyPayment></ApplyPayment>
            <ApplySelectTable></ApplySelectTable>
            <ApplyUserSelect></ApplyUserSelect>
            <div className="PersonalNavigation_ApplyPage">
                <div onClick={() => HandleClick_Apply_Overtime_Submit()}>연장근무 등록</div>
            </div>
        </AnnualLeaveApplyContentMainPageMainDivBox>
    );
};
export default OvertimeWorkingApplyContainer;

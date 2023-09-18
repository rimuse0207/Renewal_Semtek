import React from 'react';
// import ApplyPayment from "./ApplyPayment/ApplyPayment";
import ApplyUserSelect from './ApplyUserSelect/ApplyUserSelect';
import ApplyBasicSetting from '../../../../../Annual_Leave/AnnualLeaveContainer/AnnualLeaveContents/AnnualLeaveApply/AnnualLeaveApplyContainer/AnnualLeaveApplyContent/ApplyBasicSetting/ApplyBasicSetting';
import ApplyPayment from '../../../../../Annual_Leave/AnnualLeaveContainer/AnnualLeaveContents/AnnualLeaveApply/AnnualLeaveApplyContainer/AnnualLeaveApplyContent/ApplyPayment/ApplyPayment';
import ApplySelectTable from './ApplySelectTable/ApplySelectTable';
import styled from 'styled-components';
import { AnnualLeaveApplyContentMainPageMainDivBox } from '../../../../../Annual_Leave/AnnualLeaveContainer/AnnualLeaveContents/AnnualLeaveApply/AnnualLeaveApplyContainer/AnnualLeaveApplyContent/AnnualLeaveApplyContentMainPage';
import { useDispatch, useSelector } from 'react-redux';
import { request } from '../../../../../../../API';
import { Before_Overtime_Apply_State_Func } from '../../../../../../../Models/OvertimeApplyReducer/BeforeApplyReducer';
import { After_Overtime_Apply_State_Func } from '../../../../../../../Models/OvertimeApplyReducer/AfterApplyReducer';
import { Overtime_Calendar_Data_Getting_Redux_Thunk } from '../../../../../../../Models/Redux-Thunk/OvertimCalendarReduce';
import moment from 'moment';
import { useState } from 'react';

const OvertimeWorkingApplyContainerMainDivBox = styled.div`
    border: 1px solid black;
`;

const OvertimeWorkingApplyContainer = () => {
    const dispatch = useDispatch();
    const [GetData, setGetData] = useState(moment());
    const Login_Info = useSelector(state => state.Login_Info_Reducer_State.Login_Info);
    const After_Apply_State = useSelector(state => state.AfterApplyReducerState.After_Overtime_State);
    const Apply_User_State = useSelector(state => state.PaymentUserReducerState.Apply);
    const Review_User_State = useSelector(state => state.PaymentUserReducerState.Review);
    const Accept_User_State = useSelector(state => state.PaymentUserReducerState.Accept);
    const HandleClick_Apply_Overtime_Submit = async () => {
        try {
            const HandleClick_Apply_Overtime_Submit_Axios = await request.post('/semtek/HandleClick_Apply_Overtime_Submit', {
                ID: Login_Info.id,
                After_Apply_State,
                Apply_User_State,
                Review_User_State,
                Accept_User_State,
            });

            if (HandleClick_Apply_Overtime_Submit_Axios.data.dataSuccess) {
                if (HandleClick_Apply_Overtime_Submit_Axios.data.Already_After_Data.length > 0) {
                    alert('이미 등록된 데이터가 있습니다.');
                }

                const Stored_After_Delete_Data = After_Apply_State.filter(list =>
                    HandleClick_Apply_Overtime_Submit_Axios.data.Already_After_Data.some(item =>
                        list.after_overtime_apply_info_apply_keys === item.after_overtime_apply_info_apply_keys ? list : ''
                    )
                );
                dispatch(After_Overtime_Apply_State_Func(Stored_After_Delete_Data));
                dispatch(Overtime_Calendar_Data_Getting_Redux_Thunk(GetData, Login_Info.id));
                alert('연장근무 신청 완료.');
            }
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <AnnualLeaveApplyContentMainPageMainDivBox>
            <ApplyBasicSetting Selected={'Overtime'}></ApplyBasicSetting>
            <ApplyPayment></ApplyPayment>
            <ApplySelectTable GetData={GetData} setGetData={data => setGetData(data)}></ApplySelectTable>
            <ApplyUserSelect></ApplyUserSelect>
            <div className="PersonalNavigation_ApplyPage">
                <div onClick={() => HandleClick_Apply_Overtime_Submit()}>연장근무 등록</div>
            </div>
        </AnnualLeaveApplyContentMainPageMainDivBox>
    );
};
export default OvertimeWorkingApplyContainer;

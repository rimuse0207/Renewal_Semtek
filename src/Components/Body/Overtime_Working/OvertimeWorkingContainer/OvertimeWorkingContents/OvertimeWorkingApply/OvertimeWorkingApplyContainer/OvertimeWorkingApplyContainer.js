import React from 'react';
// import ApplyPayment from "./ApplyPayment/ApplyPayment";
import ApplyUserSelect from './ApplyUserSelect/ApplyUserSelect';
import ApplyBasicSetting from '../../../../../Annual_Leave/AnnualLeaveContainer/AnnualLeaveContents/AnnualLeaveApply/AnnualLeaveApplyContainer/AnnualLeaveApplyContent/ApplyBasicSetting/ApplyBasicSetting';
import ApplyPayment from '../../../../../Annual_Leave/AnnualLeaveContainer/AnnualLeaveContents/AnnualLeaveApply/AnnualLeaveApplyContainer/AnnualLeaveApplyContent/ApplyPayment/ApplyPayment';
import ApplySelectTable from './ApplySelectTable/ApplySelectTable';
import styled from 'styled-components';

const OvertimeWorkingApplyContainerMainDivBox = styled.div`
    border: 1px solid black;
`;

const OvertimeWorkingApplyContainer = () => {
    const HandleClick_Apply_Overtime_Submit = () => {};

    return (
        <OvertimeWorkingApplyContainerMainDivBox>
            <ApplyBasicSetting Selected={'Overtime'}></ApplyBasicSetting>
            <ApplyPayment></ApplyPayment>
            <ApplySelectTable></ApplySelectTable>
            <ApplyUserSelect></ApplyUserSelect>
            <div className="PersonalNavigation_ApplyPage">
                <div onClick={() => HandleClick_Apply_Overtime_Submit()}>연장근무 등록</div>
            </div>
        </OvertimeWorkingApplyContainerMainDivBox>
    );
};
export default OvertimeWorkingApplyContainer;

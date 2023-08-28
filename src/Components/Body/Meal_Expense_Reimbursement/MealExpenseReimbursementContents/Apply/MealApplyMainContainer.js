import React from 'react';
import ApplyBasicSetting from '../../../Annual_Leave/AnnualLeaveContainer/AnnualLeaveContents/AnnualLeaveApply/AnnualLeaveApplyContainer/AnnualLeaveApplyContent/ApplyBasicSetting/ApplyBasicSetting';
import ApplyPayment from '../../../Annual_Leave/AnnualLeaveContainer/AnnualLeaveContents/AnnualLeaveApply/AnnualLeaveApplyContainer/AnnualLeaveApplyContent/ApplyPayment/ApplyPayment';
import { AnnualLeaveApplyContentMainPageMainDivBox } from '../../../Annual_Leave/AnnualLeaveContainer/AnnualLeaveContents/AnnualLeaveApply/AnnualLeaveApplyContainer/AnnualLeaveApplyContent/AnnualLeaveApplyContentMainPage';
import ApplySelectTable from './ApplyTable/ApplySelectTable';
import ApplyUserSelect from './ApplyUserSelect/ApplyUserSelect';

const MealApplyMainContainer = () => {
    const HandleClick_Apply_Overtime_Submit = () => {};

    return (
        <AnnualLeaveApplyContentMainPageMainDivBox>
            <ApplyBasicSetting Selected={'Meal'}></ApplyBasicSetting>
            <ApplyPayment></ApplyPayment>
            <ApplySelectTable></ApplySelectTable>
            <ApplyUserSelect></ApplyUserSelect>
            <div className="PersonalNavigation_ApplyPage">
                <div onClick={() => HandleClick_Apply_Overtime_Submit()}>식대정산 등록</div>
            </div>
        </AnnualLeaveApplyContentMainPageMainDivBox>
    );
};

export default MealApplyMainContainer;

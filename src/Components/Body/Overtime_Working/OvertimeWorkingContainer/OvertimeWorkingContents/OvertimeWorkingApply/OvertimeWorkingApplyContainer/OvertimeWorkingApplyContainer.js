import React from "react";
// import ApplyPayment from "./ApplyPayment/ApplyPayment";
import ApplyUserSelect from "./ApplyUserSelect/ApplyUserSelect";
import ApplyBasicSetting from "../../../../../Annual_Leave/AnnualLeaveContainer/AnnualLeaveContents/AnnualLeaveApply/AnnualLeaveApplyContainer/AnnualLeaveApplyContent/ApplyBasicSetting/ApplyBasicSetting";
import ApplyPayment from "../../../../../Annual_Leave/AnnualLeaveContainer/AnnualLeaveContents/AnnualLeaveApply/AnnualLeaveApplyContainer/AnnualLeaveApplyContent/ApplyPayment/ApplyPayment";
import ApplySelectTable from "../../../../../Annual_Leave/AnnualLeaveContainer/AnnualLeaveContents/AnnualLeaveApply/AnnualLeaveApplyContainer/AnnualLeaveApplyContent/ApplySelectTable/ApplySelectTable";

const OvertimeWorkingApplyContainer = () => {
    return (
        <div>
            <ApplyBasicSetting Selected={"Overtime"}></ApplyBasicSetting>
            <ApplyPayment></ApplyPayment>
            <ApplySelectTable></ApplySelectTable>
            {/* <ApplyUserSelect></ApplyUserSelect> */}
        </div>
    )
}
export default OvertimeWorkingApplyContainer;
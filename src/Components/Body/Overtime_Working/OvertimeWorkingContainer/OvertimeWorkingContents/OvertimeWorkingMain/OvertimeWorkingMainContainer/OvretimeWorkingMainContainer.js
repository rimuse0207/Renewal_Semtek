import react from "react";
import styled from "styled-components";
import OvertimeWorkingChecking from "./OvertimeWorkingChecking/OvertimeWorkingChecking";
import TimeStamp from "../../../../../Annual_Leave/AnnualLeaveContainer/AnnualLeaveContents/AnnualLeaveMain/AnnualLeaveMainContainer/AnnualLeaveMainContent/TimeStamp/TimeStamp";
import ApplyPayment from "../../../../../Annual_Leave/AnnualLeaveContainer/AnnualLeaveContents/AnnualLeaveApply/AnnualLeaveApplyContainer/AnnualLeaveApplyContent/ApplyPayment/ApplyPayment";


const OvertimeWorkingMainContainerMainDivBox = styled.div`
    
`

const OvertimeWorkingMainContainer = () => {
    return (
        <OvertimeWorkingMainContainerMainDivBox>
            <OvertimeWorkingChecking></OvertimeWorkingChecking>
            <TimeStamp Selected={"Overtime"}></TimeStamp>
        </OvertimeWorkingMainContainerMainDivBox>
    )
}

export default OvertimeWorkingMainContainer;
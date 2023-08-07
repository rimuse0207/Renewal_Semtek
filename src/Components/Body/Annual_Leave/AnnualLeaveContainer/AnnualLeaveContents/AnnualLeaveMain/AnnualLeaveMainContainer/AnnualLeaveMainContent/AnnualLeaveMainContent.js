import React from "react";
import styled from "styled-components"; 
import AnnualLeaveChecking from "./AnnualLeaveChecking/AnnualLeaveChecking";
import TimeStamp from "./TimeStamp/TimeStamp";

const AnnualLeaveMainContentMainDivBox = styled.div`
    
`

const AnnualLeaveMainContent = () => {
    return (
        <AnnualLeaveMainContentMainDivBox>
            <AnnualLeaveChecking></AnnualLeaveChecking>
            <TimeStamp></TimeStamp>
        </AnnualLeaveMainContentMainDivBox>
    )
}

export default AnnualLeaveMainContent;
import React from "react";
import styled from "styled-components"; 
import AnnualLeaveChecking from "./AnnualLeaveChecking/AnnualLeaveChecking";

const AnnualLeaveMainContentMainDivBox = styled.div`
    
`

const AnnualLeaveMainContent = () => {
    return (
        <AnnualLeaveMainContentMainDivBox>
            <AnnualLeaveChecking></AnnualLeaveChecking>
        </AnnualLeaveMainContentMainDivBox>
    )
}

export default AnnualLeaveMainContent;
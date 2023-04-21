import react from "react";
import styled from "styled-components";
import OvertimeWorkingChecking from "./OvertimeWorkingChecking/OvertimeWorkingChecking";

const OvertimeWorkingMainContainerMainDivBox = styled.div`
    
`

const OvertimeWorkingMainContainer = () => {
    return (
        <OvertimeWorkingMainContainerMainDivBox>
            <OvertimeWorkingChecking></OvertimeWorkingChecking>
        </OvertimeWorkingMainContainerMainDivBox>
    )
}

export default OvertimeWorkingMainContainer;
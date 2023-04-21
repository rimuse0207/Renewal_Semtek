import React from "react";
import styled from "styled-components";
import OvertimeWorkingSelectContainer from "./OvertimeWorkingSelectContainer/OvertimeWorkingSelectContainer";

const OvertimeWorkingSelectMainPageMainDivBox = styled.div`
    
`
const OvertimeWorkingSelectMainPage = () => {
    return (
        <OvertimeWorkingSelectMainPageMainDivBox>
            <OvertimeWorkingSelectContainer></OvertimeWorkingSelectContainer>
        </OvertimeWorkingSelectMainPageMainDivBox>
    )
}

export default OvertimeWorkingSelectMainPage;
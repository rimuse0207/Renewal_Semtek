import React from "react";
import styled from "styled-components";
import AnnualLeaveMainContainer from "./AnnualLeaveMainContainer/AnnualLeaveMainContainer";

const AnnualLeaveMainPageMainDivBox = styled.div`

`
const AnnualLeaveMainPage = ({currentPageOn}) => {
    return (
        <AnnualLeaveMainPageMainDivBox>
            <AnnualLeaveMainContainer></AnnualLeaveMainContainer>
        </AnnualLeaveMainPageMainDivBox>
    )
}

export default AnnualLeaveMainPage;
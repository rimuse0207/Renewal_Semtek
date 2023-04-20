import React from "react";
import styled from "styled-components";
import NavigationMainPage from "../../Header/NavigationMainPage";
import AnnualLeaveContainerMainPage from "./AnnualLeaveContainer/AnnualLeaveContainerMainPage";

const AnnualLeaveMainPageMainDivBox = styled.div`
    
`
const AnnualLeaveMainPage = () => {
    return (
        <AnnualLeaveMainPageMainDivBox>
            <AnnualLeaveContainerMainPage></AnnualLeaveContainerMainPage>
        </AnnualLeaveMainPageMainDivBox>
    )
}
export default AnnualLeaveMainPage;
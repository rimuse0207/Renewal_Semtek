import React from "react";
import styled from "styled-components";
import AnnualLeaveApplyContentMainPage from "./AnnualLeaveApplyContent/AnnualLeaveApplyContentMainPage";

const AnnualLeaveApplyContainerMainPageMainDivBox = styled.div`

`
const AnnualLeaveApplyContainerMainPage = () => {
    return (
        <AnnualLeaveApplyContainerMainPageMainDivBox>
            <AnnualLeaveApplyContentMainPage></AnnualLeaveApplyContentMainPage>
        </AnnualLeaveApplyContainerMainPageMainDivBox>
    )
}
export default AnnualLeaveApplyContainerMainPage;
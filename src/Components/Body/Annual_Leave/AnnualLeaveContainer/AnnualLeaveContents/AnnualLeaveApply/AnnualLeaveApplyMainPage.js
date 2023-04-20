import React from 'react';
import styled from "styled-components";
import AnnualLeaveApplyContainerMainPage from './AnnualLeaveApplyContainer/AnnualLeaveApplyContainerMainpage';

const AnnualLeaveApplyMainPageMainDivBox = styled.div`
 
`

const AnnualLeaveApplyMainPage = () => {
    return (
        <AnnualLeaveApplyMainPageMainDivBox>
            <AnnualLeaveApplyContainerMainPage></AnnualLeaveApplyContainerMainPage>
        </AnnualLeaveApplyMainPageMainDivBox>
    )
}

export default AnnualLeaveApplyMainPage;
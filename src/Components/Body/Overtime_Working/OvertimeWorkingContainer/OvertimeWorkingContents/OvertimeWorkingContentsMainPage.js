import React from "react";
import styled from "styled-components";
import OvertimeWorkingApplyMainPage from "./OvertimeWorkingApply/OvertimeWorkingApplyMainPage";
import OvertimeWorkingSelectMainPage from "./OvertimeWorkingSelect/OvertimeWorkingSelectMainPage";
import OvertimeWorkingMain from "./OvertimeWorkingMain/OvertimeWorkingMain"
const OvtimeWorkingContentsMainPageMainDivBox = styled.div`
    
`

const OvtimeWorkingContentsMainPage = ({currentPageOn}) => {
    return (
        <OvtimeWorkingContentsMainPageMainDivBox>
            {currentPageOn === "MainPage" ? <OvertimeWorkingMain></OvertimeWorkingMain> : <></>}
            {currentPageOn === "OvertimeApply" ? <OvertimeWorkingApplyMainPage></OvertimeWorkingApplyMainPage> : <></>}
            { currentPageOn === "OvertimeHistory" ? <OvertimeWorkingSelectMainPage></OvertimeWorkingSelectMainPage>:<></>}
        </OvtimeWorkingContentsMainPageMainDivBox>
    )
}

export default OvtimeWorkingContentsMainPage;
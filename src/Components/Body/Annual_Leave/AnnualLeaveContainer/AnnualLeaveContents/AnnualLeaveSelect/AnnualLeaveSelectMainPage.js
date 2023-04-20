import React from "react";
import AnnualLeaveSelectContainer from "./AnnualLeaveSelectContainer/AnnualLeaveSelectContainer";
import AnnualLeaveApplyMainPage from "../AnnualLeaveApply/AnnualLeaveApplyMainPage";
import AnnualLeaveMainPage from "../AnnualLeaveMain/AnnualLeaveMainPage";

const AnnualLeaveSelectMainPage = ({currentPageOn}) => {
    return (
        <div>
            
            {currentPageOn === "MainPage" ? <AnnualLeaveMainPage currentPageOn={currentPageOn}></AnnualLeaveMainPage> : <></>}
            {currentPageOn === "AnnualLeaveSelect" ? <AnnualLeaveSelectContainer currentPageOn={currentPageOn}></AnnualLeaveSelectContainer> : <></>}
            {currentPageOn === "ApplyAnnualLeave" ? <AnnualLeaveApplyMainPage currentPageOn={currentPageOn}></AnnualLeaveApplyMainPage> : <></>}
            
        </div>
    )
}
export default AnnualLeaveSelectMainPage;
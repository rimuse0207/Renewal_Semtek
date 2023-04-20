import React,{useState} from "react";
import styled from 'styled-components';
import AnnualLeaveSelectNavigation from "./AnnualLeaveSelectNav/AnnualLeaveSelectNavigation";
import AnnualLeaveHistoryContentMainPage from "./AnnualLeaveSelectContent/AnnualLeaveHistoryContentMainPage";
import AnnualLeaveCalendarContentMainPage from "./AnnualLeaveSelectContent/AnnualLeaveCalendarContent/AnnualLeaveCalendarContentMainPage";

const AnnualLeaveSelectContainerMainDivBox = styled.div`
    
`

const AnnualLeaveSelectContainer = ({currentPageOn}) => {
    const [StaticsNaviButton, setStaticsNaviButton] = useState('History');
    return (
        <AnnualLeaveSelectContainerMainDivBox>
            <AnnualLeaveSelectNavigation NaviSelected={StaticsNaviButton} setStaticsNaviButton={setStaticsNaviButton}></AnnualLeaveSelectNavigation>
            
            
                {StaticsNaviButton === "History" ? <AnnualLeaveHistoryContentMainPage></AnnualLeaveHistoryContentMainPage> : ""}
                { StaticsNaviButton === "Calendar" ?<AnnualLeaveCalendarContentMainPage></AnnualLeaveCalendarContentMainPage>:""}
            
            
        </AnnualLeaveSelectContainerMainDivBox>
    )
}

export default AnnualLeaveSelectContainer;
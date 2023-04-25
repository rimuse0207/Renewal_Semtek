import React from "react";
import OvertimeWorkingCalendarContent from "./OvertimeWorkingCalendarContent/OvertimeWorkingCalendarContent";
import OvertimeWorkingHistoryContent from "./OvertimeWorkingHistoryContent/OvertimeWorkingHistoryContent";

const OvertimeWorkingSelectContent = ({StaticsNaviButton}) =>{
    return (
        <div>
            {StaticsNaviButton === "History" ? <OvertimeWorkingHistoryContent></OvertimeWorkingHistoryContent> : <></>}
            { StaticsNaviButton === "Calendar" ? <OvertimeWorkingCalendarContent></OvertimeWorkingCalendarContent>:<></>}
            
        </div>
    )
}

export default OvertimeWorkingSelectContent

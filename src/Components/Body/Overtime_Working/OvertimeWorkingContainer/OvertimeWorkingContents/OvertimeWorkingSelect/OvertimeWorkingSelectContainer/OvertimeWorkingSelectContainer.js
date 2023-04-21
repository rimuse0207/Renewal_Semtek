import React,{useState} from "react";
import OvertimeWorkingSelectContent from "./OvertimeWorkingSelectContent/OvertimeWorkingSelectContent";
import OvertimeWorkingSelectNavigation from "./OvertimeWorkingSelectNav/OvertimeWorkingSelectNavigation";

const OvertimeWorkingSelectContainer = () => {
    const [StaticsNaviButton, setStaticsNaviButton] = useState('History');
    return (
        <div>
            <OvertimeWorkingSelectNavigation  NaviSelected={StaticsNaviButton} setStaticsNaviButton={setStaticsNaviButton}></OvertimeWorkingSelectNavigation>
            <OvertimeWorkingSelectContent></OvertimeWorkingSelectContent>
        </div>
    )
}
export default OvertimeWorkingSelectContainer;
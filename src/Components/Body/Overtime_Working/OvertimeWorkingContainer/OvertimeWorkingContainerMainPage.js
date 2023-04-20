import React,{useState} from "react";
import OvertimeWorkingNavigationMainPage from "./OvertimeWorkingNavigation/OvertimeWorkingNavigationMainPage";
import { AnnualLeaveContainerMainPageMainDivBox } from "../../Annual_Leave/AnnualLeaveContainer/AnnualLeaveContainerMainPage";
import NavigationMainPage from "../../../Header/NavigationMainPage";

const OvertimeWorkingContainerMainPage = () => {
    const [AnnualLeaveNavState, setAnnualLeaveNavState] = useState([{
        menu_name: 'MainPage',
        menu_check:true
    },{
        menu_name: 'AnnualLeaveSelect',
        menu_check:false
        }, {
        menu_name: 'ApplyAnnualLeave',
            menu_check:false
    }])
    return (
        <AnnualLeaveContainerMainPageMainDivBox>
            <NavigationMainPage></NavigationMainPage>
            <div className="Personal_Main_Float">
                <div className="Personal_Main_Float_Left">
                    {AnnualLeaveNavState.map((list) => {
                        return list.menu_check ? <OvertimeWorkingNavigationMainPage AnnualLeaveNavState={AnnualLeaveNavState} currentPageOn={ list.menu_name} key={list.menu_name} setAnnualLeaveNavState={(data)=>setAnnualLeaveNavState(data)}></OvertimeWorkingNavigationMainPage>:
                        ""
                    })}
                    
                </div>
                <div className="Personal_Main_Float_Right">
                    
                    
                </div>
            </div>
            
        </AnnualLeaveContainerMainPageMainDivBox> 
    )
}
export default OvertimeWorkingContainerMainPage;
import React from "react";
import styled from "styled-components";
import AnnualLeaveNavigationMainPage from "./AnnualLeaveNavigation/AnnualLeaveNavigationMainPage";
import NavigationMainPage from "../../../Header/NavigationMainPage";
import { useState } from "react";
import AnnualLeaveSelectMainPage from "./AnnualLeaveContents/AnnualLeaveSelect/AnnualLeaveSelectMainPage";
import { useSelector } from "react-redux";

export const AnnualLeaveContainerMainPageMainDivBox = styled.div`
    .Personal_Main_Float{
        display:flex;
        .Personal_Main_Float_Left{
            height:100%;
            min-height:calc(100vh - 60px);
            min-width:250px;
            width:15%;
        }
    }
    .Personal_Main_Float_Right{
        width:100%;
        padding-left:30px;
        max-height:calc(100vh - 60px);
        overflow:auto;
    }
`

const AnnualLeaveContainerMainPage = () => {
    const AnnualLeaveNavState  = useSelector((state)=>state.AnuualLeaveNavState.Annual_Leave_Nav_State) 
    return (
        <AnnualLeaveContainerMainPageMainDivBox>
            <NavigationMainPage></NavigationMainPage>
            <div className="Personal_Main_Float">
                <div className="Personal_Main_Float_Left">
                    {AnnualLeaveNavState.map((list) => {
                        return list.menu_check ? <AnnualLeaveNavigationMainPage AnnualLeaveNavState={AnnualLeaveNavState} currentPageOn={ list.menu_name} key={list.menu_name} ></AnnualLeaveNavigationMainPage>:
                        ""
                    })}
                    
                </div>
                <div className="Personal_Main_Float_Right">
                     {AnnualLeaveNavState.map((list) => {
                        return list.menu_check ? <AnnualLeaveSelectMainPage  currentPageOn={ list.menu_name} key={list.menu_name} ></AnnualLeaveSelectMainPage>:
                        ""
                    })}
                    
                </div>
            </div>
        </AnnualLeaveContainerMainPageMainDivBox>
    )
}

export default AnnualLeaveContainerMainPage;
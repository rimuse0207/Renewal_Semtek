import React from "react";
import ApplyBasicSetting from "./ApplyBasicSetting/ApplyBasicSetting";
import ApplyPayment from "./ApplyPayment/ApplyPayment";
import ApplyUserSelect from "./ApplyUserSelect/ApplyUserSelect";
import ApplySelectTable from "./ApplySelectTable/ApplySelectTable";
import ApplyReason from "./ApplyReason/ApplyReason";
import styled from "styled-components"

const AnnualLeaveApplyContentMainPageMainDivBox = styled.div`
 .PersonalNavigation_ApplyPage {
        width: 90%;
        margin: 0 auto;
        border-radius: 5px;
        height: 50px;
        line-height: 50px;
        font-size: 1.1em;
        text-align: center;
        background: #2985db;
        font-weight: bolder;
        border-bottom: 1px solid lightgray;
        max-width:300px;
        color:#fff;
        margin-bottom:50px;
        :hover {
            cursor: pointer;
            background: #056ac9;
        }
    }
    `

const AnnualLeaveApplyContentMainPage = () => {
    return (
        <AnnualLeaveApplyContentMainPageMainDivBox>
            <ApplyBasicSetting></ApplyBasicSetting>
            <ApplyPayment></ApplyPayment>
            <ApplyUserSelect></ApplyUserSelect>
            <ApplySelectTable></ApplySelectTable>
            <ApplyReason></ApplyReason>
              <div className="PersonalNavigation_ApplyPage">
                <div>휴가 등록</div>
             </div>
     </AnnualLeaveApplyContentMainPageMainDivBox>   
    )
}

export default AnnualLeaveApplyContentMainPage;
import React, { useState } from "react";
import ApplyBasicSetting from "./ApplyBasicSetting/ApplyBasicSetting";
import ApplyPayment from "./ApplyPayment/ApplyPayment";
import ApplyUserSelect from "./ApplyUserSelect/ApplyUserSelect";
import ApplySelectTable from "./ApplySelectTable/ApplySelectTable";
import ApplyReason from "./ApplyReason/ApplyReason";
import styled from "styled-components"
import { useSelector } from "react-redux";
import { request } from "../../../../../../../../API";

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
    const clickedDateData = useSelector(state => state.VacationApplyReducerState.clickedDateData);
    const PaymentUserData = useSelector(state => state.PaymentUserReducerState);
    const [Apply_Reason, setApply_Reason] = useState("");
    const HandleClick_Apply_Vacation_Submit = async() => {
        console.log(clickedDateData);
        console.log(Apply_Reason);
        console.log(PaymentUserData);

        try {
            
            const HandleClick_Apply_Vacation_Submit_Axios = await request.post(`/semtek/HandleClick_Apply_Vacation_Submit`, {
                clickedDateData,
                Apply_Reason,
                PaymentUserData
            })

            if (HandleClick_Apply_Vacation_Submit_Axios.data.dataSuccess) {
                console.log("신청 오나료")
                console.log(HandleClick_Apply_Vacation_Submit_Axios);
            }

        } catch (error) {
            console.log(error);

        }

    }


    return (
        <AnnualLeaveApplyContentMainPageMainDivBox>
            <ApplyBasicSetting></ApplyBasicSetting>
            <ApplyPayment></ApplyPayment>
            <ApplySelectTable></ApplySelectTable>
            <ApplyReason Apply_Reason={Apply_Reason} setApply_Reason={(data)=>setApply_Reason(data)}></ApplyReason>
              <div className="PersonalNavigation_ApplyPage">
                <div onClick={()=>HandleClick_Apply_Vacation_Submit()}>휴가 등록</div>
             </div>
     </AnnualLeaveApplyContentMainPageMainDivBox>   
    )
}

export default AnnualLeaveApplyContentMainPage;
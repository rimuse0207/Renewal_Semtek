import React,{useState} from "react";
import styled from "styled-components";
import moment from "moment";
import AnnualLeaveSelectDate from "./AnnualLeaveHistoryContent/AnnualLeaveSelectDate/AnnualLeaveSelectDate";
import AnnualLeaveHistoryTable from "./AnnualLeaveHistoryContent/AnnualLeaveHistoryTable/AnnualLeaveHistoryTable";

const AnnualLeaveHistoryContentMainPageMainDivBox = styled.div`
    
`

const AnnualLeaveHistoryContentMainPage = () => {
    const [DateData, setDateData] = useState(moment().format('YYYY'));
    return (
        <AnnualLeaveHistoryContentMainPageMainDivBox>
            <AnnualLeaveSelectDate DateData={DateData} setDateData={(data)=>setDateData(data)}></AnnualLeaveSelectDate>
            <AnnualLeaveHistoryTable  DateData={DateData} ></AnnualLeaveHistoryTable>
        </AnnualLeaveHistoryContentMainPageMainDivBox>
    )
}

export default AnnualLeaveHistoryContentMainPage;
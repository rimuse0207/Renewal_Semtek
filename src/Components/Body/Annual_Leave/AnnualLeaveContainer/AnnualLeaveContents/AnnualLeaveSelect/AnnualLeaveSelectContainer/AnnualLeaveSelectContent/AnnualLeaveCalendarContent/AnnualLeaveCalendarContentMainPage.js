import React,{useState,useEffect} from "react";
import styled from "styled-components";
import moment from "moment";
import AnnualLeaveCalendarTable from "./AnnualLeaveCalendarTable/AnnualLeaveCalendarTable";
import { MdArrowBackIos, MdArrowForwardIos } from "react-icons/md";
import { AnnualLeaveSelectDateMainDivBox } from "../AnnualLeaveHistoryContent/AnnualLeaveSelectDate/AnnualLeaveSelectDate";

const AnnualLeaveCalendarContentMainPageMainDivBox = styled.div`
    
`

const AnnualLeaveCalendarContentMainPage = () => {
      const [MonthDateData, setMonthDateData] = useState(moment());

    useEffect(() => {
        console.log(MonthDateData);
    }, [MonthDateData]);
    return (
        <AnnualLeaveCalendarContentMainPageMainDivBox>
            <AnnualLeaveSelectDateMainDivBox>
            <div className="HistoryMianNaviFlexBox">
                <div className="ReactIcons_ArrowIcon" onClick={() => setMonthDateData(MonthDateData.clone().subtract(1, 'months'))}>
                    <MdArrowBackIos></MdArrowBackIos>
                </div>
                <h2>{MonthDateData.format('YYYY년 M월')}</h2>
                <div className="ReactIcons_ArrowIcon" onClick={() => setMonthDateData(MonthDateData.clone().add(1, 'months'))}>
                    <MdArrowForwardIos></MdArrowForwardIos>
                </div>
                </div>
            </AnnualLeaveSelectDateMainDivBox>
            <AnnualLeaveCalendarTable></AnnualLeaveCalendarTable>
        </AnnualLeaveCalendarContentMainPageMainDivBox>
    )
}

export default AnnualLeaveCalendarContentMainPage;
import React,{useState} from "react";
import styled from "styled-components";
import { MdArrowBackIos, MdArrowForwardIos } from 'react-icons/md';
import moment from "moment";
export const AnnualLeaveSelectDateMainDivBox = styled.div`
  .HistoryMianNaviFlexBox {
        display: flex;
        padding-top: 10px;
        padding-bottom: 10px;
        flex-wrap: wrap;
        align-items: center;
    }
    .ReactIcons_ArrowIcon {
        width: 30px;
        height: 30px;
        text-align: center;
        line-height: 35px;
        border-radius: 50%;
        font-size: 1.1em;
        margin-right: 10px;
        margin-left: 10px;
        color: gray;
        :hover {
            background-color: lightgray;
            cursor: pointer;
        }
    }
`
const AnnualLeaveSelectDate = ({DateData,setDateData}) => {
    
    return (
        <AnnualLeaveSelectDateMainDivBox>
            <div className="HistoryMianNaviFlexBox">
                <div
                    className="ReactIcons_ArrowIcon"
                    onClick={() => setDateData(moment(DateData).clone().subtract(1, 'years').format('YYYY'))}
                >
                    <MdArrowBackIos></MdArrowBackIos>
                </div>
                <h2>
                    {DateData}-01-01 ~ {DateData}-12-31
                </h2>
                <div className="ReactIcons_ArrowIcon" onClick={() => setDateData(moment(DateData).clone().add(1, 'years').format('YYYY'))}>
                    <MdArrowForwardIos></MdArrowForwardIos>
                </div>
            </div>
        </AnnualLeaveSelectDateMainDivBox>
    )
}

export default AnnualLeaveSelectDate
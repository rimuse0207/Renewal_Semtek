import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { AnnualLeaveSelectDateMainDivBox } from '../../../../../../../Annual_Leave/AnnualLeaveContainer/AnnualLeaveContents/AnnualLeaveSelect/AnnualLeaveSelectContainer/AnnualLeaveSelectContent/AnnualLeaveHistoryContent/AnnualLeaveSelectDate/AnnualLeaveSelectDate';
import moment from 'moment';
import { MdArrowBackIos, MdArrowForwardIos } from 'react-icons/md';
import CalnedarTable from './CalendarTable/CalendarTable';

const OvertimeWorkingCalendarContentMainDivBox = styled.div``;

const OvertimeWorkingCalendarContent = () => {
    const [MonthDateData, setMonthDateData] = useState(moment());

    return (
        <OvertimeWorkingCalendarContentMainDivBox>
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
            <CalnedarTable MonthDateData={MonthDateData}></CalnedarTable>
        </OvertimeWorkingCalendarContentMainDivBox>
    );
};

export default OvertimeWorkingCalendarContent;

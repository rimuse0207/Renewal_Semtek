import React from 'react';
import HistoryDate from '../../../../../Overtime_Working/OvertimeWorkingContainer/OvertimeWorkingContents/OvertimeWorkingSelect/OvertimeWorkingSelectContainer/OvertimeWorkingSelectContent/OvertimeWorkingHistoryContent/HistoryDate/HistoryDate';
import CalendarContent from './CalendarContent/CalendarContent';

const CalendarContainer = ({ DateData, setDateData }) => {
    return (
        <div>
            <HistoryDate DateData={DateData} setDateData={data => setDateData(data)}></HistoryDate>
            <CalendarContent MonthDateData={DateData}></CalendarContent>
        </div>
    );
};

export default CalendarContainer;

import React, { useState } from 'react';
import HistoryDate from '../../../../../Overtime_Working/OvertimeWorkingContainer/OvertimeWorkingContents/OvertimeWorkingSelect/OvertimeWorkingSelectContainer/OvertimeWorkingSelectContent/OvertimeWorkingHistoryContent/HistoryDate/HistoryDate';
import HistoryTable from './HistoryTable.js/HistoryTable';

const HistoryContent = ({ DateData, setDateData }) => {
    return (
        <div>
            <HistoryDate DateData={DateData} setDateData={data => setDateData(data)}></HistoryDate>
            <HistoryTable DateData={DateData}></HistoryTable>
        </div>
    );
};

export default HistoryContent;

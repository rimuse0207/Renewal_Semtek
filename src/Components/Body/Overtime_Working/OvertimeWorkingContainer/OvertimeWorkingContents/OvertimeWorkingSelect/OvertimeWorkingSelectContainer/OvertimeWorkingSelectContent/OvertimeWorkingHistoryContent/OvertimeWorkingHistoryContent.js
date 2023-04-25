import React,{useState} from 'react';
import HistoryDate from './HistoryDate/HistoryDate';
import moment from "moment";
import HistoryTable from './HistoryTable/HistoryTable';

const OvertimeWorkingHistoryContent = () => {
    const [DateData, setDateData] = useState(moment().format('YYYY-MM'));
    return (
        <div>
            <HistoryDate DateData={DateData} setDateData={(data) => setDateData(data)}></HistoryDate>
            <HistoryTable DateData={DateData}></HistoryTable>
        </div>
    )
}

export default OvertimeWorkingHistoryContent;
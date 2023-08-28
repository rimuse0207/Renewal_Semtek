import React from 'react';
import CalendarContent from './CalendarContainer/CalendarContainer';
import HistoryContent from './HistoryContent/HistoryContent';
import { useState } from 'react';
import moment from 'moment';

const HistoryContentContainer = ({ StaticsNaviButton }) => {
    const [DateData, setDateData] = useState(moment().format('YYYY-MM'));
    return (
        <div>
            {StaticsNaviButton === 'History' ? (
                <HistoryContent DateData={DateData} setDateData={data => setDateData(data)}></HistoryContent>
            ) : (
                <></>
            )}
            {StaticsNaviButton === 'Calendar' ? (
                <CalendarContent DateData={DateData} setDateData={data => setDateData(data)}></CalendarContent>
            ) : (
                <></>
            )}
        </div>
    );
};

export default HistoryContentContainer;

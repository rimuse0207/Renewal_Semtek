import React from 'react';
import { useState } from 'react';
import moment from 'moment';
import ContentNavigation from './ContentNavigation/ContentNavigation';
import BeforeOvertime from './PaymentComponents/BeforeOvertime';
import HistoryDate from '../../../Overtime_Working/OvertimeWorkingContainer/OvertimeWorkingContents/OvertimeWorkingSelect/OvertimeWorkingSelectContainer/OvertimeWorkingSelectContent/OvertimeWorkingHistoryContent/HistoryDate/HistoryDate';
import UserSelect from './UserSelect/UserSelect';

const ContentMainContainer = ({ currentPageOn }) => {
    const [DateData, setDateData] = useState(moment().format('YYYY-MM'));
    const [StaticsNaviButton, setStaticsNaviButton] = useState('Table');
    const [SelectLeftHeaderInfo, setSelectLeftHeaderInfo] = useState({ value: 'ALL', label: 'ALL' });
    return (
        <div>
            <ContentNavigation
                StaticsNaviButton={StaticsNaviButton}
                setStaticsNaviButton={data => setStaticsNaviButton(data)}
            ></ContentNavigation>
            <HistoryDate DateData={DateData} setDateData={data => setDateData(data)}></HistoryDate>
            <UserSelect
                SelectLeftHeaderInfo={SelectLeftHeaderInfo}
                setSelectLeftHeaderInfo={data => setSelectLeftHeaderInfo(data)}
            ></UserSelect>
            {currentPageOn === 'BeforeOvertime' ? (
                <BeforeOvertime
                    SelectLeftHeaderInfo={SelectLeftHeaderInfo}
                    DateData={DateData}
                    StaticsNaviButton={StaticsNaviButton}
                ></BeforeOvertime>
            ) : (
                <></>
            )}
        </div>
    );
};

export default ContentMainContainer;

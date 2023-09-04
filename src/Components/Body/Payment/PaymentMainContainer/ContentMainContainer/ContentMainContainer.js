import React from 'react';
import { useState } from 'react';
import moment from 'moment';
import ContentNavigation from './ContentNavigation/ContentNavigation';
import BeforeOvertime from './PaymentComponents/BeforeOvertime';
import HistoryDate from '../../../Overtime_Working/OvertimeWorkingContainer/OvertimeWorkingContents/OvertimeWorkingSelect/OvertimeWorkingSelectContainer/OvertimeWorkingSelectContent/OvertimeWorkingHistoryContent/HistoryDate/HistoryDate';
import UserSelect from './UserSelect/UserSelect';
import AfterOvertime from './PaymentComponents/AfterOvertime';
import { useSelector } from 'react-redux';

const ContentMainContainer = ({ currentPageOn }) => {
    const [DateData, setDateData] = useState(moment().format('YYYY-MM'));
    const [StaticsNaviButton, setStaticsNaviButton] = useState('Table');
    return (
        <div>
            <ContentNavigation
                StaticsNaviButton={StaticsNaviButton}
                setStaticsNaviButton={data => setStaticsNaviButton(data)}
            ></ContentNavigation>
            <HistoryDate DateData={DateData} setDateData={data => setDateData(data)}></HistoryDate>
            <UserSelect></UserSelect>
            {currentPageOn === 'BeforeOvertime' ? (
                <BeforeOvertime DateData={DateData} StaticsNaviButton={StaticsNaviButton} currentPageOn={currentPageOn}></BeforeOvertime>
            ) : (
                <></>
            )}
            {currentPageOn === 'AfterOvertime' ? (
                <AfterOvertime DateData={DateData} StaticsNaviButton={StaticsNaviButton} currentPageOn={currentPageOn}></AfterOvertime>
            ) : (
                <></>
            )}
        </div>
    );
};

export default ContentMainContainer;

import React from 'react';
import { useState } from 'react';
import moment from 'moment';
import HistoryDate from '../OvertimeWorkingSelect/OvertimeWorkingSelectContainer/OvertimeWorkingSelectContent/OvertimeWorkingHistoryContent/HistoryDate/HistoryDate';
import ContentNavigation from '../../../../Payment/PaymentMainContainer/ContentMainContainer/ContentNavigation/ContentNavigation';
import UserSelect from '../../../../Payment/PaymentMainContainer/ContentMainContainer/UserSelect/UserSelect';
import BeforeOvertime from '../../../../Payment/PaymentMainContainer/ContentMainContainer/PaymentComponents/BeforeOvertime';
import AfterOvertime from '../../../../Payment/PaymentMainContainer/ContentMainContainer/PaymentComponents/AfterOvertime';
const TeamOvertimeWorkingContainer = () => {
    const [DateData, setDateData] = useState(moment().format('YYYY-MM'));
    const [StaticsNaviButton, setStaticsNaviButton] = useState('Table');

    return (
        <div>
            <ContentNavigation
                StaticsNaviButton={StaticsNaviButton}
                setStaticsNaviButton={data => setStaticsNaviButton(data)}
                Select_Division={'연장 근무 신청'}
            ></ContentNavigation>
            <HistoryDate DateData={DateData} setDateData={data => setDateData(data)} Move_Division="month"></HistoryDate>
            <UserSelect></UserSelect>

            {/* <BeforeOvertime DateData={DateData} StaticsNaviButton={StaticsNaviButton} currentPageOn="BeforeOvertime"></BeforeOvertime> */}
            <AfterOvertime DateData={DateData} StaticsNaviButton={StaticsNaviButton} currentPageOn="AfterOvertime"></AfterOvertime>
        </div>
    );
};

export default TeamOvertimeWorkingContainer;

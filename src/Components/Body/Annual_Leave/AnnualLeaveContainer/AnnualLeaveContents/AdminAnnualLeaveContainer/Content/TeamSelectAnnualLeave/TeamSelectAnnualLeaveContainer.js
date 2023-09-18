import React from 'react';
import ContentNavigation from '../../../../../../Payment/PaymentMainContainer/ContentMainContainer/ContentNavigation/ContentNavigation';
import { useState } from 'react';
import moment from 'moment';
import HistoryDate from '../../../../../../Overtime_Working/OvertimeWorkingContainer/OvertimeWorkingContents/OvertimeWorkingSelect/OvertimeWorkingSelectContainer/OvertimeWorkingSelectContent/OvertimeWorkingHistoryContent/HistoryDate/HistoryDate';
import UserSelect from '../../../../../../Payment/PaymentMainContainer/ContentMainContainer/UserSelect/UserSelect';
import TeamAnnualLeaveTable from './Table/TeamAnnualLeaveTable';
import TeamAnnualLeaveCalendar from './Calendar/TeamAnnualLeaveCalendar';

const TeamSelectAnnualLeaveContainer = () => {
    const [DateData, setDateData] = useState(moment().format('YYYY-MM'));
    const [StaticsNaviButton, setStaticsNaviButton] = useState('Table');
    return (
        <div>
            <ContentNavigation
                StaticsNaviButton={StaticsNaviButton}
                setStaticsNaviButton={data => setStaticsNaviButton(data)}
                Select_Division={'휴가 신청'}
            ></ContentNavigation>
            <HistoryDate DateData={DateData} setDateData={data => setDateData(data)} Move_Division="year"></HistoryDate>
            <UserSelect></UserSelect>
            {StaticsNaviButton === 'Table' ? <TeamAnnualLeaveTable DateData={DateData}></TeamAnnualLeaveTable> : <></>}
            {StaticsNaviButton === 'Calendar' ? <TeamAnnualLeaveCalendar></TeamAnnualLeaveCalendar> : <></>}
        </div>
    );
};

export default TeamSelectAnnualLeaveContainer;

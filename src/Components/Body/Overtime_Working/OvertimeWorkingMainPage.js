import React from 'react';
import OvertimeWorkingContainerMainPage from './OvertimeWorkingContainer/OvertimeWorkingContainerMainPage';
import { useDispatch, useSelector } from 'react-redux';
import { Used_Overtime_Data_Getting_Redux_Thunk } from '../../../Models/Redux-Thunk/UsedOvertimeReduce';
import { useEffect } from 'react';

const OvertimeWorkingMainPage = () => {
    return (
        <div>
            <OvertimeWorkingContainerMainPage></OvertimeWorkingContainerMainPage>
        </div>
    );
};
export default OvertimeWorkingMainPage;

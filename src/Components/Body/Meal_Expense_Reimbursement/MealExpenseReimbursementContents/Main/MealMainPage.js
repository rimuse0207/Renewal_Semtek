import React from 'react';
import MealInfoMainPage from './Info/MealInfoMainPage';
import TimeStamp from '../../../Annual_Leave/AnnualLeaveContainer/AnnualLeaveContents/AnnualLeaveMain/AnnualLeaveMainContainer/AnnualLeaveMainContent/TimeStamp/TimeStamp';

const MealMainPage = () => {
    return (
        <div>
            <MealInfoMainPage></MealInfoMainPage>
            <TimeStamp Selected={'Meal'}></TimeStamp>
        </div>
    );
};

export default MealMainPage;

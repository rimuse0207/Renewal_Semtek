import React from 'react';
import MealMainPage from './Main/MealMainPage';

const MealExpenseReimbursementContentsMainPage = ({ currentPageOn }) => {
    return (
        <div>
            {currentPageOn === 'MainPage' ? <MealMainPage></MealMainPage> : <></>}
            {currentPageOn === 'MealExpenseReimburseApply' ? <div></div> : <></>}
            {currentPageOn === 'MealExpenseReimburseHistory' ? <div></div> : <></>}
        </div>
    );
};

export default MealExpenseReimbursementContentsMainPage;

import React from 'react';
import MealMainPage from './Main/MealMainPage';
import MealApplyMainContainer from './Apply/MealApplyMainContainer';
import MealExpenseReimbursementHistoryContainer from './History/MealExpenseReimbursementHistoryContainer';

const MealExpenseReimbursementContentsMainPage = ({ currentPageOn }) => {
    return (
        <div>
            {currentPageOn === 'MainPage' ? <MealMainPage></MealMainPage> : <></>}
            {currentPageOn === 'MealExpenseReimburseApply' ? <MealApplyMainContainer></MealApplyMainContainer> : <></>}
            {currentPageOn === 'MealExpenseReimburseHistory' ? (
                <MealExpenseReimbursementHistoryContainer></MealExpenseReimbursementHistoryContainer>
            ) : (
                <></>
            )}
        </div>
    );
};

export default MealExpenseReimbursementContentsMainPage;

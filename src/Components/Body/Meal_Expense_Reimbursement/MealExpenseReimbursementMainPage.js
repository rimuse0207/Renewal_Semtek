import React from 'react';
import { useState } from 'react';
import NavigationMainPage from '../../Header/NavigationMainPage';
import { AnnualLeaveContainerMainPageMainDivBox } from '../Annual_Leave/AnnualLeaveContainer/AnnualLeaveContainerMainPage';
import OvertimeWorkingNavigationMainPage from '../Overtime_Working/OvertimeWorkingContainer/OvertimeWorkingNavigation/OvertimeWorkingNavigationMainPage';
import MealExpenseRimbursementNav from './MealExpenseReimbursementNav/MealExpenseReimbursementNav';
import MealExpenseReimbursementContentsMainPage from './MealExpenseReimbursementContents/MealExpenseReimbursementContentsMainPage';

const MealExpenseReimbursementMainPage = () => {
    const [AnnualLeaveNavState, setAnnualLeaveNavState] = useState([
        {
            menu_name: 'MainPage',
            menu_check: true,
        },
        {
            menu_name: 'MealExpenseReimburseApply',
            menu_check: false,
        },
        {
            menu_name: 'MealExpenseReimburseHistory',
            menu_check: false,
        },
    ]);
    return (
        <AnnualLeaveContainerMainPageMainDivBox>
            <NavigationMainPage></NavigationMainPage>
            <div className="Personal_Main_Float">
                <div className="Personal_Main_Float_Left">
                    {AnnualLeaveNavState.map(list => {
                        return list.menu_check ? (
                            <MealExpenseRimbursementNav
                                AnnualLeaveNavState={AnnualLeaveNavState}
                                currentPageOn={list.menu_name}
                                key={list.menu_name}
                                setAnnualLeaveNavState={data => setAnnualLeaveNavState(data)}
                            ></MealExpenseRimbursementNav>
                        ) : (
                            ''
                        );
                    })}
                </div>
                <div className="Personal_Main_Float_Right">
                    {AnnualLeaveNavState.map(list => {
                        return list.menu_check ? (
                            <MealExpenseReimbursementContentsMainPage
                                currentPageOn={list.menu_name}
                                key={list.menu_name}
                            ></MealExpenseReimbursementContentsMainPage>
                        ) : (
                            ''
                        );
                    })}
                </div>
            </div>
        </AnnualLeaveContainerMainPageMainDivBox>
    );
};

export default MealExpenseReimbursementMainPage;

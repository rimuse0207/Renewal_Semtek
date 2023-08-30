import React from 'react';
import { useState } from 'react';
import OvertimeWorkingNavigationMainPage from '../../Overtime_Working/OvertimeWorkingContainer/OvertimeWorkingNavigation/OvertimeWorkingNavigationMainPage';
import { AnnualLeaveContainerMainPageMainDivBox } from '../../Annual_Leave/AnnualLeaveContainer/AnnualLeaveContainerMainPage';
import PaymentNavigationMainPage from './PaymentNavigation/PaymentNavigationMainPage';
import ContentMainContainer from './ContentMainContainer/ContentMainContainer';

const PaymentMainContainer = () => {
    const [AnnualLeaveNavState, setAnnualLeaveNavState] = useState([
        {
            menu_name: 'BeforeOvertime',
            menu_check: true,
        },
        {
            menu_name: 'AfterOvertime',
            menu_check: false,
        },
        {
            menu_name: 'Vacation',
            menu_check: false,
        },
    ]);
    return (
        <AnnualLeaveContainerMainPageMainDivBox>
            <div className="Personal_Main_Float">
                <div className="Personal_Main_Float_Left">
                    {AnnualLeaveNavState.map(list => {
                        return list.menu_check ? (
                            <PaymentNavigationMainPage
                                AnnualLeaveNavState={AnnualLeaveNavState}
                                currentPageOn={list.menu_name}
                                key={list.menu_name}
                                setAnnualLeaveNavState={data => setAnnualLeaveNavState(data)}
                            ></PaymentNavigationMainPage>
                        ) : (
                            ''
                        );
                    })}
                </div>
                <div className="Personal_Main_Float_Right">
                    {AnnualLeaveNavState.map(list => {
                        return list.menu_check ? (
                            <ContentMainContainer currentPageOn={list.menu_name} key={list.menu_name}></ContentMainContainer>
                        ) : (
                            ''
                        );
                    })}
                </div>
            </div>
        </AnnualLeaveContainerMainPageMainDivBox>
    );
};

export default PaymentMainContainer;

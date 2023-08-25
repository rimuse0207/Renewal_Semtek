import React, { useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { MdKeyboardArrowUp } from 'react-icons/md';
import { AiFillCalendar } from 'react-icons/ai';
import { FaCalendarAlt } from 'react-icons/fa';
import { BsBarChartFill } from 'react-icons/bs';
import { AnnualLeaveNavigationMainPageMainDivBox } from '../../Annual_Leave/AnnualLeaveContainer/AnnualLeaveNavigation/AnnualLeaveNavigationMainPage';

const MealExpenseRimbursementNav = ({ AnnualLeaveNavState, currentPageOn, setAnnualLeaveNavState }) => {
    const [ClicksOnOff, setClicksOnOff] = useState(true);
    const handleClickMenu = data => {
        const ChangeMenu = AnnualLeaveNavState.map(list =>
            list.menu_name === data ? { ...list, menu_check: true } : { ...list, menu_check: false }
        );
        setAnnualLeaveNavState(ChangeMenu);
    };

    return (
        <AnnualLeaveNavigationMainPageMainDivBox>
            <div className="PersonalNavigation_Box">
                <div className="PersonalNavigation_ApplyPage" onClick={() => handleClickMenu('MealExpenseReimburseApply')}>
                    <div>식대 신청</div>
                </div>
            </div>
            <div>
                <div className="PersonalNavigation_WorkStatus">
                    <div className="PersonalNavigation_WorkStatus_HiddenShowDiv" onClick={e => setClicksOnOff(!ClicksOnOff)}>
                        <span
                            className={
                                ClicksOnOff
                                    ? 'PersonalNavigation_WorkStatus_HiddenShowDiv_iconsUp'
                                    : 'PersonalNavigation_WorkStatus_HiddenShowDiv_iconsDown'
                            }
                        >
                            <MdKeyboardArrowUp></MdKeyboardArrowUp>
                        </span>
                        <span> 내 식대 정산</span>
                    </div>
                    {ClicksOnOff ? (
                        <ul className="PersonalNavigation_WorkStatus_ListsShow">
                            <li
                                id={currentPageOn === 'MainPage' ? 'PersonalNavigation_WorkStatus_CurrentPage' : ''}
                                onClick={() => handleClickMenu('MainPage')}
                            >
                                <span className="PersonalNavigation_WorkStatus_ListsShow_Icons">
                                    <AiFillCalendar></AiFillCalendar>
                                </span>
                                <span>식대 정산</span>
                            </li>
                            <li
                                id={currentPageOn === 'MealExpenseReimburseHistory' ? 'PersonalNavigation_WorkStatus_CurrentPage' : ''}
                                onClick={() => handleClickMenu('MealExpenseReimburseHistory')}
                            >
                                <span className="PersonalNavigation_WorkStatus_ListsShow_Icons">
                                    <FaCalendarAlt></FaCalendarAlt>
                                </span>
                                <span>식대 내역 조회</span>
                            </li>
                        </ul>
                    ) : (
                        <div></div>
                    )}
                </div>
            </div>
        </AnnualLeaveNavigationMainPageMainDivBox>
    );
};
export default MealExpenseRimbursementNav;

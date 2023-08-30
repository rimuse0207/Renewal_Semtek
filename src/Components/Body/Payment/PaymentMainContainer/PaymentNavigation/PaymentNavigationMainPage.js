import React, { useState } from 'react';
import { AnnualLeaveNavigationMainPageMainDivBox } from '../../../Annual_Leave/AnnualLeaveContainer/AnnualLeaveNavigation/AnnualLeaveNavigationMainPage';
import { MdKeyboardArrowUp } from 'react-icons/md';
import { AiFillCalendar } from 'react-icons/ai';
import { FaCalendarAlt } from 'react-icons/fa';

const PaymentNavigationMainPage = ({ AnnualLeaveNavState, currentPageOn, setAnnualLeaveNavState }) => {
    const [ClicksOnOff, setClicksOnOff] = useState(true);
    const handleClickMenu = data => {
        const ChangeMenu = AnnualLeaveNavState.map(list =>
            list.menu_name === data ? { ...list, menu_check: true } : { ...list, menu_check: false }
        );
        setAnnualLeaveNavState(ChangeMenu);
    };

    return (
        <div>
            <AnnualLeaveNavigationMainPageMainDivBox>
                <div className="PersonalNavigation_Box">
                    <div className="PersonalNavigation_ApplyPage" onClick={() => handleClickMenu('OvertimeApply')}>
                        <div> 결 재 현 황 </div>
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
                            <span> 결 재 </span>
                        </div>
                        {ClicksOnOff ? (
                            <ul className="PersonalNavigation_WorkStatus_ListsShow">
                                <li
                                    id={currentPageOn === 'BeforeOvertime' ? 'PersonalNavigation_WorkStatus_CurrentPage' : ''}
                                    onClick={() => handleClickMenu('BeforeOvertime')}
                                >
                                    <span className="PersonalNavigation_WorkStatus_ListsShow_Icons">
                                        <AiFillCalendar></AiFillCalendar>
                                    </span>
                                    <span>사전 OT</span>
                                </li>
                                <li
                                    id={currentPageOn === 'AfterOvertime' ? 'PersonalNavigation_WorkStatus_CurrentPage' : ''}
                                    onClick={() => handleClickMenu('AfterOvertime')}
                                >
                                    <span className="PersonalNavigation_WorkStatus_ListsShow_Icons">
                                        <FaCalendarAlt></FaCalendarAlt>
                                    </span>
                                    <span>사후 OT</span>
                                </li>
                                <li
                                    id={currentPageOn === 'Vacation' ? 'PersonalNavigation_WorkStatus_CurrentPage' : ''}
                                    onClick={() => handleClickMenu('Vacation')}
                                >
                                    <span className="PersonalNavigation_WorkStatus_ListsShow_Icons">
                                        <FaCalendarAlt></FaCalendarAlt>
                                    </span>
                                    <span> 휴 가 </span>
                                </li>
                            </ul>
                        ) : (
                            <div></div>
                        )}
                    </div>
                </div>
            </AnnualLeaveNavigationMainPageMainDivBox>
        </div>
    );
};

export default PaymentNavigationMainPage;

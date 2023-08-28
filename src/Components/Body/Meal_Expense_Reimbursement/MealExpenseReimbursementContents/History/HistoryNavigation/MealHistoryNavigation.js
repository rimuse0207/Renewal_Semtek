import React from 'react';
import styled from 'styled-components';
import { AnnualLeaveSelectNavigationMainDivBox } from '../../../../Annual_Leave/AnnualLeaveContainer/AnnualLeaveContents/AnnualLeaveSelect/AnnualLeaveSelectContainer/AnnualLeaveSelectNav/AnnualLeaveSelectNavigation';

const MealHistoryNavigationMainDivBox = styled.div``;

const MealHistoryNavigation = ({ NaviSelected, setStaticsNaviButton }) => {
    return (
        <MealHistoryNavigationMainDivBox>
            <AnnualLeaveSelectNavigationMainDivBox>
                <ul>
                    <li onClick={() => setStaticsNaviButton('History')}>
                        {NaviSelected === 'History' ? (
                            <>
                                <div className="LineText" style={{ color: '#2985db', fontWeight: 'bold' }}>
                                    식대정산내역
                                </div>
                                <div className="LineActions"></div>
                            </>
                        ) : (
                            <div className="LineText">식대정산내역</div>
                        )}
                    </li>
                    <li onClick={() => setStaticsNaviButton('Calendar')}>
                        {NaviSelected === 'Calendar' ? (
                            <>
                                <div className="LineText" style={{ color: '#2985db', fontWeight: 'bold' }}>
                                    식대정산캘린더
                                </div>
                                <div className="LineActions"></div>
                            </>
                        ) : (
                            <div className="LineText">식대정산캘린더</div>
                        )}
                    </li>
                </ul>
            </AnnualLeaveSelectNavigationMainDivBox>
        </MealHistoryNavigationMainDivBox>
    );
};

export default MealHistoryNavigation;

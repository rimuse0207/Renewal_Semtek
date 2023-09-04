import React from 'react';
import { AnnualLeaveSelectNavigationMainDivBox } from '../../../../Annual_Leave/AnnualLeaveContainer/AnnualLeaveContents/AnnualLeaveSelect/AnnualLeaveSelectContainer/AnnualLeaveSelectNav/AnnualLeaveSelectNavigation';

const ContentNavigation = ({ StaticsNaviButton, setStaticsNaviButton }) => {
    return (
        <div>
            <AnnualLeaveSelectNavigationMainDivBox>
                <ul>
                    {/* <li onClick={() => setStaticsNaviButton('Lists')}>
                        {StaticsNaviButton === 'Lists' ? (
                            <>
                                <div className="LineText" style={{ color: '#2985db', fontWeight: 'bold' }}>
                                    리스트
                                </div>
                                <div className="LineActions"></div>
                            </>
                        ) : (
                            <div className="LineText">리스트</div>
                        )}
                    </li> */}
                    <li onClick={() => setStaticsNaviButton('Table')}>
                        {StaticsNaviButton === 'Table' ? (
                            <>
                                <div className="LineText" style={{ color: '#2985db', fontWeight: 'bold' }}>
                                    연장근무 테이블
                                </div>
                                <div className="LineActions"></div>
                            </>
                        ) : (
                            <div className="LineText">연장근무 테이블</div>
                        )}
                    </li>
                    <li onClick={() => setStaticsNaviButton('Calendar')}>
                        {StaticsNaviButton === 'Calendar' ? (
                            <>
                                <div className="LineText" style={{ color: '#2985db', fontWeight: 'bold' }}>
                                    연장근무 캘린더
                                </div>
                                <div className="LineActions"></div>
                            </>
                        ) : (
                            <div className="LineText">연장근무 캘린더</div>
                        )}
                    </li>
                </ul>
            </AnnualLeaveSelectNavigationMainDivBox>
        </div>
    );
};

export default ContentNavigation;

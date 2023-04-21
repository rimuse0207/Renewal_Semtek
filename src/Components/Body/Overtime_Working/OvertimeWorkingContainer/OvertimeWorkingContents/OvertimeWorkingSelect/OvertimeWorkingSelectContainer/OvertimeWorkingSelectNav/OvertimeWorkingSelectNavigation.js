import React from "react";
import styled from "styled-components";
import { AnnualLeaveSelectNavigationMainDivBox } from "../../../../../../Annual_Leave/AnnualLeaveContainer/AnnualLeaveContents/AnnualLeaveSelect/AnnualLeaveSelectContainer/AnnualLeaveSelectNav/AnnualLeaveSelectNavigation";

const OvertimeWorkingSelectNavigationMainDivBox = styled.div`

`

const OvertimeWorkingSelectNavigation = ({ NaviSelected, setStaticsNaviButton }) => {
    return (
        <OvertimeWorkingSelectNavigationMainDivBox>
            <AnnualLeaveSelectNavigationMainDivBox>
            <ul>
                    <li onClick={() => setStaticsNaviButton('History')}>
                        {NaviSelected === 'History' ? (
                            <>
                                <div className="LineText" style={{ color: '#2985db', fontWeight: 'bold' }}>
                                    연장근무내역
                                </div>
                                <div className="LineActions"></div>
                            </>
                        ) : (
                            <div className="LineText">연장근무내역</div>
                        )}
                    </li>
                    <li onClick={() => setStaticsNaviButton('Calendar')}>
                        {NaviSelected === 'Calendar' ? (
                            <>
                                <div className="LineText" style={{ color: '#2985db', fontWeight: 'bold' }}>
                                    연장근무캘린더
                                </div>
                                <div className="LineActions"></div>
                            </>
                        ) : (
                            <div className="LineText">연장근무캘린더</div>
                        )}
                    </li>
                </ul>
        </AnnualLeaveSelectNavigationMainDivBox>
        </OvertimeWorkingSelectNavigationMainDivBox>
    )
}

export default OvertimeWorkingSelectNavigation;
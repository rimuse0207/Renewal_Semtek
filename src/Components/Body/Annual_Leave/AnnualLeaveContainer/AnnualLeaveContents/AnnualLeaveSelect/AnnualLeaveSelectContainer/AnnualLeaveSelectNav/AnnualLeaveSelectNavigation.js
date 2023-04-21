import React from "react";
import styled from "styled-components";

export const AnnualLeaveSelectNavigationMainDivBox = styled.div`
width: 100%;
    border-bottom: 2px solid lightgray;
    margin-top: 20px;
    margin-bottom: 20px;
    ul {
        display: flex;
        li {
            :hover {
                cursor: pointer;
            }
            .LineText {
                font-size: 1em;
                color: #999;
                background-color: transparent;
                height: 40px;
                line-height: 38px;
                padding: 0 40px;
            }
            position: relative;
            .LineActions {
                position: absolute;
                animation-name: slidings;
                animation-duration: 0.8s;
                @keyframes slidings {
                    from {
                        width: 0%;
                    }
                    to {
                        width: 100%;
                    }
                }
                border-bottom: 2px solid #2985db;
                width: 100%;
            }
        }
    }
`

const AnnualLeaveSelectNavigation = ({ NaviSelected, setStaticsNaviButton }) => {
    return (
        <AnnualLeaveSelectNavigationMainDivBox>
            <ul>
                    <li onClick={() => setStaticsNaviButton('History')}>
                        {NaviSelected === 'History' ? (
                            <>
                                <div className="LineText" style={{ color: '#2985db', fontWeight: 'bold' }}>
                                    휴가내역
                                </div>
                                <div className="LineActions"></div>
                            </>
                        ) : (
                            <div className="LineText">휴가내역</div>
                        )}
                    </li>
                    <li onClick={() => setStaticsNaviButton('Calendar')}>
                        {NaviSelected === 'Calendar' ? (
                            <>
                                <div className="LineText" style={{ color: '#2985db', fontWeight: 'bold' }}>
                                    전사휴가캘린더
                                </div>
                                <div className="LineActions"></div>
                            </>
                        ) : (
                            <div className="LineText">전사휴가캘린더</div>
                        )}
                    </li>
                </ul>
        </AnnualLeaveSelectNavigationMainDivBox>
    )
}

export default AnnualLeaveSelectNavigation
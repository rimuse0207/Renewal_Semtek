import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { AiFillCalendar } from 'react-icons/ai';
import { RiTimeFill } from 'react-icons/ri';
import { useSelector } from 'react-redux';
import moment from 'moment';
import { AnnualLeaveCheckingMainDivBox } from '../../../../Annual_Leave/AnnualLeaveContainer/AnnualLeaveContents/AnnualLeaveMain/AnnualLeaveMainContainer/AnnualLeaveMainContent/AnnualLeaveChecking/AnnualLeaveChecking';

const MealInfoMainPage = () => {
    const Login_Info = useSelector(state => state.Login_Info_Reducer_State.Login_Info);

    return (
        <div>
            <AnnualLeaveCheckingMainDivBox>
                <h3>금월 식대 정산 정보</h3>
                <div className="Checking_Container">
                    <div className="Checking_Content_Block">
                        <div className="Checking_Content_Block_Title">
                            <AiFillCalendar></AiFillCalendar>
                            <h5>식대 신청 현황</h5>
                        </div>
                        <div className="Checking_Content_Block_Content_Box">
                            <div className="Checking_Content_Block_Content">
                                <h5>중식 건수</h5>
                                <div>건</div>
                            </div>
                            <div className="Checking_Content_Block_Content">
                                <h5>중식 정산 비용</h5>
                                <div>원</div>
                            </div>
                            <div className="Checking_Content_Block_Content">
                                <h5>석식 건수</h5>
                                <div>건</div>
                            </div>
                            <div className="Checking_Content_Block_Content">
                                <h5>석식 정산 비용</h5>
                                <div>원</div>
                            </div>
                        </div>
                    </div>
                </div>
            </AnnualLeaveCheckingMainDivBox>
        </div>
    );
};

export default MealInfoMainPage;

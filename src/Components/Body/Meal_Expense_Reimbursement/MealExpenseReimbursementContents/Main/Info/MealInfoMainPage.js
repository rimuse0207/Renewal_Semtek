import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { AiFillCalendar } from 'react-icons/ai';
import { RiTimeFill } from 'react-icons/ri';
import { useDispatch, useSelector } from 'react-redux';
import moment from 'moment';
import { AnnualLeaveCheckingMainDivBox } from '../../../../Annual_Leave/AnnualLeaveContainer/AnnualLeaveContents/AnnualLeaveMain/AnnualLeaveMainContainer/AnnualLeaveMainContent/AnnualLeaveChecking/AnnualLeaveChecking';
import { Used_Meal_Charge_Data_Getting_Redux_Thunk } from '../../../../../../Models/Redux-Thunk/UsedMealChargeReduce';

const MealInfoMainPage = () => {
    const dispatch = useDispatch();
    const Login_Info = useSelector(state => state.Login_Info_Reducer_State.Login_Info);
    const Used_Meal_Charge_State = useSelector(state => state.UsedMealChargeState.Used_Meal_Charge_State.Used_Meal_Charge_Data);

    useEffect(() => {
        dispatch(Used_Meal_Charge_Data_Getting_Redux_Thunk(moment().format('YYYY-MM'), Login_Info.id));
    }, []);

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
                                <div>{Used_Meal_Charge_State?.filter(item => item.division === '중식').length} 건</div>
                            </div>
                            <div className="Checking_Content_Block_Content">
                                <h5>중식 정산 비용</h5>
                                <div>
                                    {' '}
                                    {Used_Meal_Charge_State?.reduce(
                                        (accumulator, currentValue) =>
                                            currentValue.division === '중식' ? currentValue.calculate + accumulator : accumulator,
                                        0
                                    ).toLocaleString('ko-KR')}
                                    원
                                </div>
                            </div>
                            <div className="Checking_Content_Block_Content">
                                <h5>석식 건수</h5>
                                <div>{Used_Meal_Charge_State?.filter(item => item.division === '석식').length} 건</div>
                            </div>
                            <div className="Checking_Content_Block_Content">
                                <h5>석식 정산 비용</h5>
                                <div>
                                    {' '}
                                    {Used_Meal_Charge_State?.reduce(
                                        (accumulator, currentValue) =>
                                            currentValue.division === '중식' ? currentValue.calculate + accumulator : accumulator,
                                        0
                                    ).toLocaleString('ko-KR')}
                                    원
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </AnnualLeaveCheckingMainDivBox>
        </div>
    );
};

export default MealInfoMainPage;

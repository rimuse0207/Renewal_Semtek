import React from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import moment from 'moment';
import { Used_Vacation_Data_Getting_Redux_Thunk } from '../../../../../../../../../Models/Redux-Thunk/UsedVacationReduce';
import { useState } from 'react';

const ApplyShowTitleMainDivBox = styled.div``;

const ApplyShowTitle = () => {
    const Used_Vacation_State = useSelector(state => state.UsedVacationState.Used_Vacation_State.Used_Vacation_Data);
    const clickedDateData = useSelector(state => state.VacationApplyReducerState.clickedDateData);
    const [CountChecking, setCountChecking] = useState(null);
    const holiday_Check_String = date => {
        return date.clone().locale('ko').format('dd') === '토' || date.clone().locale('ko').format('dd') === '일';
    };

    //휴가 카운트 계산
    const Calcul_Vacation_Count = async () => {
        const Date_Diff = moment(moment(clickedDateData.End_Date).format('YYYY-MM-DD')).diff(
            moment(moment(clickedDateData.Start_Date).format('YYYY-MM-DD')),
            'days'
        );

        let Cal_Select_Days = Date_Diff + 1;
        let Cal_Weekend_Days = 0;
        let Cal_Alreay_Days = 0;

        if (clickedDateData.Start_Time === '14:00') {
            Cal_Select_Days = Cal_Select_Days - 0.5;
        }
        if (clickedDateData.End_Time === '14:00') {
            Cal_Select_Days = Cal_Select_Days - 0.5;
        }

        for (var i = 0; i < Date_Diff + 1; i++) {
            const Array_Date = moment(clickedDateData.Start_Date).clone().add(i, 'days');

            if (holiday_Check_String(Array_Date)) {
                //공휴일
                if (i === 0 && clickedDateData.Start_Time === '14:00') {
                    Cal_Weekend_Days = Cal_Weekend_Days + 0.5;
                } else if (i === Date_Diff && clickedDateData.End_Time === '14:00') {
                    Cal_Weekend_Days = Cal_Weekend_Days + 0.5;
                } else {
                    Cal_Weekend_Days = Cal_Weekend_Days + 1;
                }
            } else {
                // 공휴일 아닐때
                //신청 기록이랑 비교

                const Checking_Morning_Data = Morning_Checking_Func(Used_Vacation_State, Array_Date);
                const Checking_Afternoon_Data = Afternoon_Checking_Func(Used_Vacation_State, Array_Date);
                if (Checking_Morning_Data.applyed) {
                    Cal_Alreay_Days = Cal_Alreay_Days + 0.5;
                }
                if (Checking_Afternoon_Data.applyed) {
                    Cal_Alreay_Days = Cal_Alreay_Days + 0.5;
                }
            }
        }
        setCountChecking({
            Cal_Select_Days,
            Cal_Weekend_Days,
            Cal_Alreay_Days,
            Real_Count: Cal_Select_Days - Cal_Weekend_Days - Cal_Alreay_Days,
        });

        return {
            Cal_Select_Days,
            Cal_Weekend_Days,
            Cal_Alreay_Days,
            Real_Count: Cal_Select_Days - Cal_Weekend_Days - Cal_Alreay_Days,
        };
    };

    const Morning_Checking_Func = (array, date) => {
        for (var i = 0; i < array.length; i++) {
            if (date.isBetween(array[i].vacation_apply_info_start_date, array[i].vacation_apply_info_end_date, 'day', '[]')) {
                if (date.format('YYYY-MM-DD') === array[i].vacation_apply_info_start_date) {
                    if (array[i].vacation_apply_info_start_time === '09:00') {
                        return {
                            applyed: true,
                            datePlan: array[i].vacation_apply_info_divison,
                        };
                    } else {
                        return {
                            applyed: false,
                            datePlan: '',
                        };
                    }
                } else {
                    return {
                        applyed: true,
                        datePlan: array[i].vacation_apply_info_divison,
                    };
                }
            }
        }

        return {
            applyed: false,
            datePlan: '',
        };
    };

    const Afternoon_Checking_Func = (array, date) => {
        for (var i = 0; i < array.length; i++) {
            if (date.isBetween(array[i].vacation_apply_info_start_date, array[i].vacation_apply_info_end_date, 'day', '[]')) {
                if (date.format('YYYY-MM-DD') === array[i].vacation_apply_info_end_date) {
                    if (array[i].vacation_apply_info_end_time === '18:00') {
                        return {
                            applyed: true,
                            datePlan: array[i].vacation_apply_info_divison,
                        };
                    } else {
                        return {
                            applyed: false,
                            datePlan: '',
                        };
                    }
                } else {
                    return {
                        applyed: true,
                        datePlan: array[i].vacation_apply_info_divison,
                    };
                }
            }
        }

        return {
            applyed: false,
            datePlan: '',
        };
    };

    useEffect(() => {
        Calcul_Vacation_Count();
    }, [clickedDateData]);

    return (
        <ApplyShowTitleMainDivBox>
            <div>
                <div style={{ fontSize: '1.2em', lineHeight: '30px' }}>
                    <h4 style={{ marginTop: '20px' }}>휴가 신청</h4>
                    <div>
                        <span>선택 일수 : </span>
                        <span style={{ color: 'skyblue' }}>{CountChecking?.Cal_Select_Days}일</span>
                    </div>
                    <div>
                        <span>연차 차감 일수 : </span>
                        <span style={{ color: 'red' }}>{CountChecking?.Real_Count}일</span>
                    </div>
                    <div style={{ marginTop: '20px', border: '1px solid lightgray', marginBottom: '20px' }}></div>
                    <div>
                        <span>등록 연차 일수 : </span>
                        <span style={{ color: 'skyblue' }}>{CountChecking?.Cal_Alreay_Days}일</span>
                    </div>
                    <div>
                        <span>공휴일 일수 : </span>
                        <span style={{ color: 'skyblue' }}>{CountChecking?.Cal_Weekend_Days}일</span>
                    </div>
                </div>
            </div>
        </ApplyShowTitleMainDivBox>
    );
};

export default ApplyShowTitle;

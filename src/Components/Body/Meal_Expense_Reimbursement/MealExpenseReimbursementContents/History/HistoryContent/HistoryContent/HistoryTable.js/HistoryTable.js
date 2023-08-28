import React, { useEffect, useState } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import { AnnualLeaveHistoryTableMainDivBox } from '../../../../../../Annual_Leave/AnnualLeaveContainer/AnnualLeaveContents/AnnualLeaveSelect/AnnualLeaveSelectContainer/AnnualLeaveSelectContent/AnnualLeaveHistoryContent/AnnualLeaveHistoryTable/AnnualLeaveHistoryTable';
import { Used_Meal_Charge_Data_Getting_Redux_Thunk } from '../../../../../../../../Models/Redux-Thunk/UsedMealChargeReduce';

const HistoryTableMainDivBox = styled.div`
    .Create_History_Table {
        td {
            border-left: none !important;
        }
    }
`;

const HistoryTable = ({ DateData }) => {
    const dispatch = useDispatch();
    const Login_Info = useSelector(state => state.Login_Info_Reducer_State.Login_Info);
    const Used_Meal_Charge_State = useSelector(state => state.UsedMealChargeState.Used_Meal_Charge_State.Used_Meal_Charge_Data);

    useEffect(() => {
        dispatch(Used_Meal_Charge_Data_Getting_Redux_Thunk(DateData, Login_Info.id));
    }, [DateData]);

    return (
        <HistoryTableMainDivBox>
            <AnnualLeaveHistoryTableMainDivBox>
                <div className="PersonStatusHistoryCreateTableTextFlexBox">
                    <h4>중식 식대 등록 현황</h4>
                    <div>총 중식 식대 등록 일수 : {Used_Meal_Charge_State?.filter(item => item.division === '중식').length} 일</div>
                    <div className="SubTextDesc"> </div>
                    <div>
                        총 정산 금액 :{' '}
                        {Used_Meal_Charge_State?.reduce(
                            (accumulator, currentValue) =>
                                currentValue.division === '중식' ? currentValue.calculate + accumulator : accumulator,
                            0
                        ).toLocaleString('ko-KR')}
                        원
                    </div>
                </div>
                <div>
                    <h4 style={{ marginTop: '30px', marginBottom: '20px' }}>중식 식대 등록 내역</h4>
                    <table className="Create_History_Table before">
                        <thead>
                            <tr>
                                <th>번호</th>
                                <th>신청자</th>
                                <th>식대날짜</th>
                                <th>지출금액</th>
                                <th>정산금액</th>
                                <th>방문처</th>
                                <th>지역</th>
                                <th>비고</th>
                            </tr>
                        </thead>
                        <tbody>
                            {Used_Meal_Charge_State.map((list, j) => {
                                return list.division === '중식' ? (
                                    <tr>
                                        <td>{j + 1}</td>
                                        <td>{list.name}</td>
                                        <td>{list.dates}</td>
                                        <td>{list.spending.toLocaleString('ko-KR')} 원</td>
                                        <td>{list.calculate.toLocaleString('ko-KR')} 원</td>
                                        <td>{list.place}</td>
                                        <td>{list.location}</td>
                                        <td>{list.etc}</td>
                                    </tr>
                                ) : (
                                    <></>
                                );
                            })}
                        </tbody>
                    </table>
                </div>

                <div style={{ marginTop: '50px', marginBottom: '50px' }}></div>
            </AnnualLeaveHistoryTableMainDivBox>
            <div style={{ border: '1px solid black' }}></div>
            <AnnualLeaveHistoryTableMainDivBox>
                <div className="PersonStatusHistoryCreateTableTextFlexBox">
                    <h4>석식 식대 등록 현황</h4>
                    <div>총 석식 식대 등록 일수 : {Used_Meal_Charge_State?.filter(item => item.division === '석식').length} 일</div>
                    <div className="SubTextDesc"> </div>
                    <div>
                        총 정산 금액 :{' '}
                        {Used_Meal_Charge_State?.reduce(
                            (accumulator, currentValue) =>
                                currentValue.division === '석식' ? currentValue.calculate + accumulator : accumulator,
                            0
                        ).toLocaleString('ko-KR')}
                        원
                    </div>
                </div>

                <div>
                    <h4 style={{ marginTop: '30px', marginBottom: '20px' }}>석식 식대 등록 내역</h4>
                    <table className="Create_History_Table after">
                        <thead>
                            <tr>
                                <th>번호</th>
                                <th>신청자</th>
                                <th>식대날짜</th>
                                <th>지출금액</th>
                                <th>정산금액</th>
                                <th>방문처</th>
                                <th>지역</th>
                                <th>비고</th>
                            </tr>
                        </thead>
                        <tbody>
                            {Used_Meal_Charge_State.map((list, j) => {
                                return list.division === '석식' ? (
                                    <tr>
                                        <td>{j + 1}</td>
                                        <td>{list.name}</td>
                                        <td>{list.dates}</td>
                                        <td>{list.spending.toLocaleString('ko-KR')} 원</td>
                                        <td>{list.calculate.toLocaleString('ko-KR')} 원</td>
                                        <td>{list.place}</td>
                                        <td>{list.location}</td>
                                        <td>{list.etc}</td>
                                    </tr>
                                ) : (
                                    <></>
                                );
                            })}
                        </tbody>
                    </table>
                </div>

                <div style={{ marginTop: '100px', marginBottom: '100px' }}></div>
            </AnnualLeaveHistoryTableMainDivBox>
        </HistoryTableMainDivBox>
    );
};
export default HistoryTable;

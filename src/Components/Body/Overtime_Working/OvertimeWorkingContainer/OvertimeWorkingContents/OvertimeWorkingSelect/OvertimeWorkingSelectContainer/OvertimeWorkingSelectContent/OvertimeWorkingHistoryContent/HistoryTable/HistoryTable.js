import React, { useEffect, useState } from 'react';
import { AnnualLeaveHistoryTableMainDivBox } from '../../../../../../../../Annual_Leave/AnnualLeaveContainer/AnnualLeaveContents/AnnualLeaveSelect/AnnualLeaveSelectContainer/AnnualLeaveSelectContent/AnnualLeaveHistoryContent/AnnualLeaveHistoryTable/AnnualLeaveHistoryTable';
import { request } from '../../../../../../../../../../API';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import { Used_Overtime_Data_Getting_Redux_Thunk } from '../../../../../../../../../../Models/Redux-Thunk/UsedOvertimeReduce';

export const HistoryTableMainDivBox = styled.div`
    .Create_History_Table {
        td {
            border-left: none !important;
        }
    }
    .before {
        thead {
            background-color: rgb(255, 255, 153) !important;
            th {
                background-color: rgb(255, 255, 153) !important;
            }
        }
    }
    .after {
        thead {
            background-color: rgb(153, 204, 255) !important;
            th {
                background-color: rgb(153, 204, 255) !important;
            }
        }
    }
`;

const HistoryTable = ({ DateData }) => {
    const dispatch = useDispatch();
    const Login_Info = useSelector(state => state.Login_Info_Reducer_State.Login_Info);
    const Before_Overtime_Data = useSelector(state => state.UsedOvertimeState.Used_Overtime_State.Used_Before_Overtime_Data);
    const After_Overtime_Data = useSelector(state => state.UsedOvertimeState.Used_Overtime_State.Used_After_Overtime_Data);

    useEffect(() => {
        dispatch(Used_Overtime_Data_Getting_Redux_Thunk(DateData, Login_Info.id));
    }, [DateData]);

    return (
        <HistoryTableMainDivBox>
            <AnnualLeaveHistoryTableMainDivBox>
                <div className="PersonStatusHistoryCreateTableTextFlexBox">
                    <h4>연장근무 현황</h4>
                    <div>총 연장근무 일수: {After_Overtime_Data.length} 일</div>
                    <div className="SubTextDesc"> </div>
                    <div>
                        총 연장근무 시간:{' '}
                        {After_Overtime_Data.reduce((accumulator, currentValue) => accumulator + currentValue.real_sum_time, 0) -
                            After_Overtime_Data.reduce((accumulator, currentValue) => accumulator + currentValue.real_rest_time, 0)}{' '}
                        시간
                    </div>
                </div>

                <div>
                    <h4 style={{ marginTop: '30px', marginBottom: '20px' }}>연장근무 신청 내역</h4>
                    <table className="Create_History_Table after">
                        <thead>
                            <tr>
                                <th rowSpan={2}>번호</th>
                                <th rowSpan={2}>신청자</th>
                                <th rowSpan={2}>신청 날짜</th>
                                <th colSpan={3}>소정근무</th>
                                <th colSpan={4}>연장근무</th>
                                <th rowSpan={2} style={{ minWidth: '300px' }}>
                                    사유
                                </th>
                                <th rowSpan={2}>상태</th>
                            </tr>
                            <tr>
                                <th style={{ borderLeft: '1px solid lightgrey' }}>시작</th>
                                <th>종료</th>

                                <th>합계</th>
                                <th>시작</th>
                                <th>종료</th>
                                <th>휴게</th>
                                <th>합계</th>
                            </tr>
                        </thead>
                        <tbody>
                            {After_Overtime_Data.map((list, j) => {
                                return (
                                    <tr key={list.apply_keys}>
                                        <td>{j + 1}</td>
                                        <td>{Login_Info.name}</td>
                                        <td>{list.write_date}</td>
                                        <td>{list.basic_start_time}</td>
                                        <td>{list.basic_end_time}</td>
                                        <td>{list.basic_sum_time - list.basic_rest_time} 시간</td>
                                        <td>{list.real_start_time}</td>
                                        <td>{list.real_end_time}</td>
                                        <td>{list.real_rest_time} 시간</td>
                                        <td>{list.real_sum_time - list.real_rest_time} 시간</td>
                                        <td style={{ maxWidth: '300px', wordBreak: 'break-all' }}>{list.reason}</td>
                                        <td>
                                            {list.Review_Array.some(list => !list.overtime_review_info_accept_check)
                                                ? '검토중.'
                                                : list.Accept_Array.some(list => !list.overtime_accept_info_accept_check)
                                                ? '승인중.'
                                                : '승인완료'}
                                        </td>
                                    </tr>
                                );
                            })}
                        </tbody>
                    </table>
                </div>

                <div style={{ marginTop: '50px', marginBottom: '50px' }}></div>
            </AnnualLeaveHistoryTableMainDivBox>
        </HistoryTableMainDivBox>
    );
};
export default HistoryTable;

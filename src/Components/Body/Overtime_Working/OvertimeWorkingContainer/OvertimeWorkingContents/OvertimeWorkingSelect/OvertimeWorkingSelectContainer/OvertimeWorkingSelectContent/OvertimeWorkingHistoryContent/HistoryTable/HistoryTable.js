import React, { useEffect, useState } from 'react';
import { AnnualLeaveHistoryTableMainDivBox } from '../../../../../../../../Annual_Leave/AnnualLeaveContainer/AnnualLeaveContents/AnnualLeaveSelect/AnnualLeaveSelectContainer/AnnualLeaveSelectContent/AnnualLeaveHistoryContent/AnnualLeaveHistoryTable/AnnualLeaveHistoryTable';
import { request } from '../../../../../../../../../../API';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import { Used_Overtime_Data_Getting_Redux_Thunk } from '../../../../../../../../../../Models/Redux-Thunk/UsedOvertimeReduce';

const HistoryTableMainDivBox = styled.div`
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
                    <h4>사전 연장근무 현황</h4>
                    <div>총 예정 연장근무 일수: {Before_Overtime_Data.length} 일</div>
                    <div className="SubTextDesc"> </div>
                    <div>
                        총 예정 연장근무 시간:{' '}
                        {Before_Overtime_Data.reduce(
                            (accumulator, currentValue) => accumulator + currentValue.before_overtime_apply_info_sum_time,
                            0
                        ) -
                            Before_Overtime_Data.reduce(
                                (accumulator, currentValue) => accumulator + currentValue.before_overtime_apply_info_rest_time,
                                0
                            )}{' '}
                        시간
                    </div>
                </div>
                <div>
                    <h4 style={{ marginTop: '30px', marginBottom: '20px' }}>사전 연장근무 신청 내역</h4>
                    <table className="Create_History_Table before">
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
                                {/* <th>휴게</th> */}
                                <th>합계</th>
                                <th>시작</th>
                                <th>종료</th>
                                <th>휴게</th>
                                <th>합계</th>
                            </tr>
                        </thead>
                        <tbody>
                            {Before_Overtime_Data.map((list, j) => {
                                return (
                                    <tr key={list.before_overtime_apply_info_apply_keys}>
                                        <td>{j + 1}</td>
                                        <td>{list.cn}</td>
                                        <td>{list.before_overtime_apply_info_date}</td>
                                        <td>{list.before_overtime_apply_info_basic_start_time}</td>
                                        <td>{list.before_overtime_apply_info_basic_end_time}</td>
                                        {/* <td>{list.before_overtime_apply_info_basic_rest_time} 시간</td> */}
                                        <td>
                                            {list.before_overtime_apply_info_basic_sum_time -
                                                list.before_overtime_apply_info_basic_rest_time}{' '}
                                            시간
                                        </td>
                                        <td>{list.before_overtime_apply_info_start_time}</td>
                                        <td>{list.before_overtime_apply_info_end_time}</td>
                                        <td>{list.before_overtime_apply_info_rest_time} 시간</td>
                                        <td>{list.before_overtime_apply_info_sum_time - list.before_overtime_apply_info_rest_time} 시간</td>
                                        <td>{list.before_overtime_apply_info_reason}</td>
                                        <td>검토중.</td>
                                    </tr>
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
                    <h4>사전 연장근무 현황</h4>
                    <div>총 연장근무 일수: {After_Overtime_Data.length} 일</div>
                    <div className="SubTextDesc"> </div>
                    <div>
                        총 연장근무 시간:{' '}
                        {After_Overtime_Data.reduce(
                            (accumulator, currentValue) => accumulator + currentValue.after_overtime_apply_info_sum_time,
                            0
                        ) -
                            After_Overtime_Data.reduce(
                                (accumulator, currentValue) => accumulator + currentValue.after_overtime_apply_info_rest_time,
                                0
                            )}{' '}
                        시간
                    </div>
                </div>

                <div>
                    <h4 style={{ marginTop: '30px', marginBottom: '20px' }}>사후 연장근무 신청 내역</h4>
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
                                    <tr key={list.after_overtime_apply_info_apply_keys}>
                                        <td>{j + 1}</td>
                                        <td>{list.cn}</td>
                                        <td>{list.after_overtime_apply_info_date}</td>
                                        <td>{list.after_overtime_apply_info_basic_start_time}</td>
                                        <td>{list.after_overtime_apply_info_basic_end_time}</td>
                                        <td>
                                            {list.after_overtime_apply_info_basic_sum_time - list.after_overtime_apply_info_basic_rest_time}{' '}
                                            시간
                                        </td>
                                        <td>{list.after_overtime_apply_info_start_time}</td>
                                        <td>{list.after_overtime_apply_info_end_time}</td>
                                        <td>{list.after_overtime_apply_info_rest_time} 시간</td>
                                        <td>{list.after_overtime_apply_info_sum_time - list.after_overtime_apply_info_rest_time} 시간</td>
                                        <td>{list.after_overtime_apply_info_reason}</td>
                                        <td>검토중.</td>
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

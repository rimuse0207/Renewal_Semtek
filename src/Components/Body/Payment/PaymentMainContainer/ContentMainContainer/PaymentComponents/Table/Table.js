import React from 'react';
import { HistoryTableMainDivBox } from '../../../../../Overtime_Working/OvertimeWorkingContainer/OvertimeWorkingContents/OvertimeWorkingSelect/OvertimeWorkingSelectContainer/OvertimeWorkingSelectContent/OvertimeWorkingHistoryContent/HistoryTable/HistoryTable';
import { AnnualLeaveHistoryTableMainDivBox } from '../../../../../Annual_Leave/AnnualLeaveContainer/AnnualLeaveContents/AnnualLeaveSelect/AnnualLeaveSelectContainer/AnnualLeaveSelectContent/AnnualLeaveHistoryContent/AnnualLeaveHistoryTable/AnnualLeaveHistoryTable';

const Table = ({ SelectLeftHeaderInfo, Data }) => {
    return (
        <HistoryTableMainDivBox>
            {SelectLeftHeaderInfo?.value === 'ALL' ? (
                <AnnualLeaveHistoryTableMainDivBox>
                    <div>
                        <h4 style={{ marginTop: '30px', marginBottom: '20px' }}>사전 연장근무 신청 내역</h4>
                        <table className="Create_History_Table before">
                            <thead>
                                <tr>
                                    <th>번호</th>
                                    <th>성명</th>
                                    <th>부서명</th>
                                    <th>현장 일수</th>
                                    <th>연장</th>
                                    <th>심야</th>
                                    <th>휴일</th>
                                    <th>총 합계</th>
                                </tr>
                            </thead>
                            <tbody>
                                {Data.map((list, j) => {
                                    return (
                                        <tr>
                                            <td>{j + 1}</td>
                                            <td>{list.name}</td>
                                            <td>{list.team}</td>
                                            <td>{3} 일</td>
                                            <td>{list.sum - list.rest_sum} 시간</td>
                                            <td>{list.night_sum} 시간</td>
                                            <td>{list.holiday_sum - list.holiday_rest_sum} 시간</td>
                                            <td>{list.sum + list.holiday_sum - list.rest_sum - list.holiday_rest_sum} 시간</td>
                                        </tr>
                                    );
                                })}
                            </tbody>
                        </table>
                    </div>

                    <div style={{ marginTop: '50px', marginBottom: '50px' }}></div>
                </AnnualLeaveHistoryTableMainDivBox>
            ) : (
                <AnnualLeaveHistoryTableMainDivBox>
                    <div className="PersonStatusHistoryCreateTableTextFlexBox">
                        <h4>사전 연장근무 현황</h4>
                        <div>총 예정 연장근무 일수 : {Data.length} 일</div>
                        <div className="SubTextDesc"> </div>
                        <div>
                            총 예정 연장근무 시간 :{' '}
                            {Data.reduce((accumulator, currentValue) => accumulator + currentValue.real_sum_time, 0) -
                                Data.reduce((accumulator, currentValue) => accumulator + currentValue.real_rest_time, 0)}{' '}
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
                                    <th>합계</th>
                                    <th>시작</th>
                                    <th>종료</th>
                                    <th>휴게</th>
                                    <th>합계</th>
                                </tr>
                            </thead>
                            <tbody>
                                {Data.map((list, j) => {
                                    return (
                                        <tr key={list.apply_keys}>
                                            <td>{j + 1}</td>
                                            <td>{list.cn}</td>
                                            <td>{list.write_date}</td>
                                            <td>{list.basic_start_time}</td>
                                            <td>{list.basic_end_time}</td>

                                            <td>{list.basic_sum_time - list.basic_rest_time} 시간</td>
                                            <td>{list.real_start_time}</td>
                                            <td>{list.real_end_time}</td>
                                            <td>{list.real_rest_time} 시간</td>
                                            <td>{list.real_sum_time - list.real_rest_time} 시간</td>
                                            <td>{list.reason}</td>
                                            <td>검토중.</td>
                                        </tr>
                                    );
                                })}
                            </tbody>
                        </table>
                    </div>

                    <div style={{ marginTop: '50px', marginBottom: '50px' }}></div>
                </AnnualLeaveHistoryTableMainDivBox>
            )}
        </HistoryTableMainDivBox>
    );
};

export default Table;

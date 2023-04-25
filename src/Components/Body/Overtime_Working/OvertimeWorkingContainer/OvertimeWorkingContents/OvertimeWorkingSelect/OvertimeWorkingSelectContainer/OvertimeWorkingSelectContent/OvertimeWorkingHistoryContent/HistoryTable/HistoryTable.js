import React from 'react';
import { AnnualLeaveHistoryTableMainDivBox } from '../../../../../../../../Annual_Leave/AnnualLeaveContainer/AnnualLeaveContents/AnnualLeaveSelect/AnnualLeaveSelectContainer/AnnualLeaveSelectContent/AnnualLeaveHistoryContent/AnnualLeaveHistoryTable/AnnualLeaveHistoryTable';

const HistoryTable = ({DateData}) => {
    return (
        <div>
             <AnnualLeaveHistoryTableMainDivBox>
            <div className="PersonStatusHistoryCreateTableTextFlexBox">
                <h4>연장근무 생성 내역 </h4>
                <div>
                    {DateData}
                </div>
            </div>
            <div>
                <table className="Create_History_Table">
                    <thead>
                        <tr>
                            <th rowSpan={2}>생성일</th>
                            <th colSpan={2}>생성내역</th>
                            <th rowSpan={2}>내용</th>
                            <th rowSpan={2}>비고</th>
                        </tr>
                        <tr>
                            <th style={{ borderLeft: '1px solid lightgray' }}>발생</th>
                            <th>최종</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td colSpan={5} style={{ color: 'lightgray' }}>
                                데이터가 없습니다.
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <div className="PersonStatusHistoryCreateTableTextFlexBox">
                <h4>연장근무 현황</h4>
                <div>총 연장근무 일수: 0일</div>
                <div className="SubTextDesc"> </div>
                <div>총 연장근무 시간: 0시간</div>
                
            </div>
            <div>
                <h4 style={{ marginTop: '30px', marginBottom: '20px' }}>연장근무 신청 내역</h4>
                <table className="Create_History_Table">
                    <thead>
                        <tr>
                            <th>번호</th>
                            <th>신청자</th>
                            <th>휴가종류</th>
                            <th>일수</th>
                            <th>기간</th>
                            <th>상태</th>
                            <th>상세</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td colSpan={7} style={{ color: 'lightgray' }}>
                                데이터가 없습니다.
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </AnnualLeaveHistoryTableMainDivBox>
        </div>
    )
}
export default HistoryTable;
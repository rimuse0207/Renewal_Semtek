import React from "react";
import styled from "styled-components";

const AnnualLeaveHistoryTableMainDivBox = styled.div`
 .PersonStatusHistoryCreateTableTextFlexBox {
        margin-top: 20px;
        display: flex;
        margin-bottom: 20px;
        h4 {
            margin-right: 10px;
        }
        .SubTextDesc {
            border: 0.2px solid lightgray;
            margin-left: 10px;
            margin-right: 10px;
        }
    }
    .Create_History_Table{
            width: 100%;
            border-top: 1px solid lightgray;
            border-collapse: collapse;
            th {
                background: #eff4fc;
                font-weight: 500;
            }
            th,
            td {
                border-bottom: 1px solid lightgray;
                border-left: 1px solid lightgray;
                padding: 10px;
                text-align: center;
            }
            th:first-child,
            td:first-child {
                border-left: none;
            }
    }
`

const AnnualLeaveHistoryTable = ({DateData}) => {
    return (
        <AnnualLeaveHistoryTableMainDivBox>
            <div className="PersonStatusHistoryCreateTableTextFlexBox">
                <h4>휴가 생성 내역 </h4>
                <div>
                    {DateData}-01-01 ~ {DateData}-12-31
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
                <h4>휴가 현황</h4>
                <div>총 휴가: 0일</div>
                <div className="SubTextDesc"> </div>
                <div>사용: 0일</div>
                <div className="SubTextDesc"></div>
                <div>잔여: 0일</div>
            </div>
            <div>
                <h4 style={{ marginTop: '30px', marginBottom: '20px' }}>휴가 신청 내역</h4>
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
    )
}

export default AnnualLeaveHistoryTable;
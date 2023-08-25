import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import { request } from '../../../../../../../../../../API';
import moment from 'moment';
import { RiDeleteBin6Fill } from 'react-icons/ri';

export const AnnualLeaveHistoryTableMainDivBox = styled.div`
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
    .Create_History_Table {
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
    .Vacation_Apply_Data_Delete {
        color: red;
        :hover {
            cursor: pointer;
        }
    }
`;

const AnnualLeaveHistoryTable = ({ DateData }) => {
    const Vacation_Info_State = useSelector(state => state.Vacation_Info_Reducer_State.data);
    const Login_Info = useSelector(state => state.Login_Info_Reducer_State.Login_Info);
    const [Apply_History_Data, setApply_History_Data] = useState([]);
    const [Vacation_Count_Data, setVacation_Count_Data] = useState([]);

    const handleDeleteData = async data => {
        try {
            const Applyed_Vacation_Delete_Axios = await request.post('/semtek/Applyed_Vacation_Delete', {
                data,
                ID: Login_Info.id,
            });
            if (Applyed_Vacation_Delete_Axios.data.dataSuccess) {
                Get_Apply_Vacation_Info_Data();
            }
            console.log(Applyed_Vacation_Delete_Axios);
        } catch (error) {
            console.log(error);
        }
    };

    const Get_Apply_Vacation_Info_Data = async () => {
        try {
            const Get_Apply_Vacation_Info_Data_Axios = await request.get(`/semtek/Get_Apply_Vacation_Info_Data`, {
                params: {
                    id: Login_Info.id,
                    Date: DateData,
                },
            });

            if (Get_Apply_Vacation_Info_Data_Axios.data.dataSuccess) {
                setApply_History_Data(Get_Apply_Vacation_Info_Data_Axios.data.Vacation_Data);
                setVacation_Count_Data(Get_Apply_Vacation_Info_Data_Axios.data.Vacation_Count_Payment_Rows);
            }
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        Get_Apply_Vacation_Info_Data();
    }, [DateData]);

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
                            <th>생성일</th>
                            <th>생성</th>
                            <th>내용</th>
                            <th>비고</th>
                        </tr>
                    </thead>
                    <tbody>
                        {Vacation_Count_Data.length > 0 ? (
                            Vacation_Count_Data.map(list => {
                                return (
                                    <tr key={list.vacation_count_payment_indexs}>
                                        <td>{moment(list.vacation_count_payment_write_date).format('YYYY-MM-DD')}</td>
                                        <td>{list.vacation_count_payment_number} 일</td>
                                        <td>{list.vacation_count_payment_reason}</td>
                                        <td>{}</td>
                                    </tr>
                                );
                            })
                        ) : (
                            <tr>
                                <td colSpan={5} style={{ color: 'lightgray' }}>
                                    데이터가 없습니다.
                                </td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
            <div className="PersonStatusHistoryCreateTableTextFlexBox">
                <h4>휴가 현황</h4>
                <div>
                    잔여:
                    {Vacation_Count_Data.reduce((accumulator, currentValue) => {
                        return accumulator + currentValue.vacation_count_payment_number;
                    }, 0) -
                        Apply_History_Data.reduce((accumulator, currentValue) => {
                            return accumulator + currentValue.Apply.vacation_apply_info_count;
                        }, 0)}
                    일
                </div>
                <div className="SubTextDesc"></div>
                <div>
                    사용:
                    {Apply_History_Data.reduce((accumulator, currentValue) => {
                        return accumulator + currentValue.Apply.vacation_apply_info_count;
                    }, 0)}
                    일
                </div>
                <div className="SubTextDesc"> </div>
                <div>
                    총 휴가:{' '}
                    {Vacation_Count_Data.reduce((accumulator, currentValue) => {
                        return accumulator + currentValue.vacation_count_payment_number;
                    }, 0)}
                    일
                </div>
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
                            <th style={{ minWidth: '500px' }}>휴가 사유</th>
                            <th>삭제 처리</th>
                        </tr>
                    </thead>
                    <tbody>
                        {Apply_History_Data.length > 0 ? (
                            Apply_History_Data.map((list, j) => {
                                return (
                                    <tr key={list.Apply.vacation_apply_info_keys}>
                                        <td>{Apply_History_Data.length - j}</td>
                                        <td>{list.Apply.cn}</td>
                                        <td>{list.Apply.vacation_apply_info_divison}</td>
                                        <td>{list.Apply.vacation_apply_info_count} 일</td>
                                        <td>
                                            <div>
                                                {list.Apply.vacation_apply_info_start_date} (
                                                {moment(list.Apply.vacation_apply_info_start_date).locale('ko').format('dd')}){' '}
                                                {list.Apply.vacation_apply_info_start_time}
                                            </div>
                                            <div>~</div>
                                            <div>
                                                {list.Apply.vacation_apply_info_end_date} (
                                                {moment(list.Apply.vacation_apply_info_end_date).locale('ko').format('dd')}){' '}
                                                {list.Apply.vacation_apply_info_end_time}
                                            </div>
                                        </td>
                                        <td>
                                            {list.Review.some((elem, index, arr) => {
                                                return elem.vacation_review_info_review_check === 0;
                                            }) ? (
                                                '검토중'
                                            ) : list.Accept.some((elem, index, arr) => {
                                                  return elem.vacation_review_info_review_check === 0;
                                              }) ? (
                                                '승인중'
                                            ) : (
                                                <div>
                                                    <div>승인 완료</div>
                                                    <div>
                                                        <button>출력 하기</button>
                                                    </div>
                                                </div>
                                            )}
                                        </td>
                                        <td>{list.Apply.vacation_apply_info_reason}</td>
                                        <td>
                                            {list.Review.some((elem, index, arr) => {
                                                return (
                                                    elem.vacation_review_info_review_check === 0 &&
                                                    elem.vacation_review_info_review_check === 0
                                                );
                                            }) ? (
                                                <div className="Vacation_Apply_Data_Delete" onClick={() => handleDeleteData(list)}>
                                                    <RiDeleteBin6Fill></RiDeleteBin6Fill>
                                                </div>
                                            ) : (
                                                <div>불가</div>
                                            )}
                                        </td>
                                    </tr>
                                );
                            })
                        ) : (
                            <tr>
                                <td colSpan={7} style={{ color: 'lightgray' }}>
                                    데이터가 없습니다.
                                </td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
        </AnnualLeaveHistoryTableMainDivBox>
    );
};

export default AnnualLeaveHistoryTable;

import React from 'react';
import { HistoryTableMainDivBox } from '../../../../../Overtime_Working/OvertimeWorkingContainer/OvertimeWorkingContents/OvertimeWorkingSelect/OvertimeWorkingSelectContainer/OvertimeWorkingSelectContent/OvertimeWorkingHistoryContent/HistoryTable/HistoryTable';
import { AnnualLeaveHistoryTableMainDivBox } from '../../../../../Annual_Leave/AnnualLeaveContainer/AnnualLeaveContents/AnnualLeaveSelect/AnnualLeaveSelectContainer/AnnualLeaveSelectContent/AnnualLeaveHistoryContent/AnnualLeaveHistoryTable/AnnualLeaveHistoryTable';
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import { Payment_User_Select_Change_Func } from '../../../../../../../Models/PaymentUserReducer/PaymentUserSelectReduce';
import { useEffect } from 'react';
import { Login_Info_Apply_State_Func } from '../../../../../../../Models/LoginInfoReducer/LoginInfoReducer';
import { request } from '../../../../../../../API';

const TableMainPage = styled.div`
    .Select_Overtime_Names_Container {
        :hover {
            cursor: pointer;
            background-color: #efefef;
        }
    }

    .ReviewAndAccept_Commit_Container {
        width: 300px;
        height: 50px;
        margin: 0 auto;
        margin-bottom: 100px;
        button {
            width: 100%;
            height: 100%;
            border: none;
            border-radius: 5px;
            font-size: 1.1em;
            text-align: center;
            background: rgb(41, 133, 219);
            font-weight: bolder;
            color: rgb(255, 255, 255);

            :hover {
                cursor: pointer;
                background-color: #efefef;
                color: rgb(41, 133, 219);
            }
        }
    }
`;

const Table = ({ Data, setData, currentPageOn, Getting_BeforeOvertime_Table_Data }) => {
    const dispatch = useDispatch();

    const Login_Info = useSelector(state => state.Login_Info_Reducer_State.Login_Info);
    const SelectLeftHeaderInfo = useSelector(state => state.PaymentUserSelectReducerState.User_Select);

    const HandleDoubleClicksOvertime = data => {
        const datass = { value: data.id, label: `${data.name} ${data.team} ${data.id}` };
        dispatch(Payment_User_Select_Change_Func(datass));
    };

    useEffect(() => {
        // dispatch(
        //     Login_Info_Apply_State_Func({
        //         name: '이정미',
        //         id: 'jmlee@dhk.co.kr',
        //         position: '프로',
        //         team: '제조',
        //         company: 'DHKS',
        //         vacation_admin_access: false,
        //         ot_admin: false,
        //         epid: 'jmlee@dhk.co.kr',
        //     })
        // );
        // dispatch(
        //     Login_Info_Apply_State_Func({
        //         name: '김도일',
        //         id: 'dikim@dhk.co.kr',
        //         position: '프로',
        //         team: '제조',
        //         company: 'DHKS',
        //         vacation_admin_access: false,
        //         ot_admin: false,
        //         epid: 'dikim@dhk.co.kr',
        //     })
        // );
        // dispatch(
        //     Login_Info_Apply_State_Func({
        //         name: '유성재',
        //         id: 'sjyoo@dhk.co.kr',
        //         position: '프로',
        //         team: '제조',
        //         company: 'DHKS',
        //         vacation_admin_access: false,
        //         ot_admin: false,
        //         epid: 'sjyoo@dhk.co.kr',
        //     })
        // );
        // dispatch(
        //     Login_Info_Apply_State_Func({
        //         name: '최홍탁',
        //         id: 'htchoi@dhk.co.kr',
        //         position: '프로',
        //         team: '제조',
        //         company: 'DHKS',
        //         vacation_admin_access: false,
        //         ot_admin: false,
        //         epid: 'htchoi@dhk.co.kr',
        //     })
        // );
        dispatch(
            Login_Info_Apply_State_Func({
                name: '홍용철',
                id: 'ychong@dhk.co.kr',
                position: '프로',
                team: '제조',
                company: 'DHKS',
                vacation_admin_access: false,
                ot_admin: false,
                epid: 'ychong@dhk.co.kr',
            })
        );
        // dispatch(
        //     Login_Info_Apply_State_Func({
        //         name: '최주용',
        //         id: 'jychoi@dhk.co.kr',
        //         position: '프로',
        //         team: '제조',
        //         company: 'DHKS',
        //         vacation_admin_access: false,
        //         ot_admin: false,
        //         epid: 'jychoi@dhk.co.kr',
        //     })
        // );
    }, []);

    const handle_Click_Checked = datas => {
        setData(Data.map(list => (list.apply_keys === datas.apply_keys ? { ...list, checked: !datas.checked } : list)));
    };

    const Handle_Check_Disabled_Checking = data => {
        if (data?.Review_Array?.some(list => !list.overtime_review_info_accept_check)) {
            if (
                data?.Review_Array?.some(list => !list.overtime_review_info_accept_check && list.overtime_review_info_id === Login_Info.id)
            ) {
                return false;
            } else {
                return true;
            }
        } else if (data?.Accept_Array?.some(list => !list.overtime_accept_info_accept_check)) {
            if (
                data?.Accept_Array?.some(list => !list.overtime_accept_info_accept_check && list.overtime_accept_info_id === Login_Info.id)
            ) {
                return false;
            } else {
                return true;
            }
        } else {
            return true;
        }
    };
    const Payment_Compnent_Make_Func = data => {
        if (data?.Review_Array?.some(list => !list.overtime_review_info_accept_check)) {
            if (
                data?.Review_Array?.some(list => !list.overtime_review_info_accept_check && list.overtime_review_info_id === Login_Info.id)
            ) {
                return <div>검토 처리</div>;
            } else {
                return <div>검토 대기중...</div>;
            }
        } else if (data?.Accept_Array?.some(list => !list.overtime_accept_info_accept_check)) {
            if (
                data?.Accept_Array?.some(list => !list.overtime_accept_info_accept_check && list.overtime_accept_info_id === Login_Info.id)
            ) {
                return <div>승인 처리 </div>;
            } else {
                return <div>승인 대기중...</div>;
            }
        } else {
            return <div>승인 완료</div>;
        }
    };

    const Handle_Clicks_Submit_Data = async () => {
        try {
            const Handle_Clicks_Submit_Data_Axios = await request.post('/semtek/Handle_Clicks_Submit_Data', {
                Data,
                ID: Login_Info.id,
            });

            if (Handle_Clicks_Submit_Data_Axios.data.dataSuccess) {
                Getting_BeforeOvertime_Table_Data();
            }
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <TableMainPage>
            <HistoryTableMainDivBox>
                {SelectLeftHeaderInfo?.value === 'ALL' ? (
                    <AnnualLeaveHistoryTableMainDivBox>
                        <div>
                            <h4 style={{ marginTop: '30px', marginBottom: '20px' }}>
                                {currentPageOn === 'BeforeOvertime' ? '사전' : '사후'} 연장근무 신청 내역
                            </h4>
                            <table className={`Create_History_Table ${currentPageOn === 'BeforeOvertime' ? 'before' : 'after'}`}>
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
                                            <tr
                                                className="Select_Overtime_Names_Container"
                                                onDoubleClick={() => HandleDoubleClicksOvertime(list)}
                                            >
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
                            <h4>{currentPageOn === 'BeforeOvertime' ? '사전' : '사후'} 연장근무 현황</h4>
                            <div>
                                총 {currentPageOn === 'BeforeOvertime' ? '예정' : ''} 연장근무 일수 : {Data.length} 일
                            </div>
                            <div className="SubTextDesc"> </div>
                            <div>
                                총 {currentPageOn === 'BeforeOvertime' ? '예정' : ''} 연장근무 시간 :{' '}
                                {Data.reduce((accumulator, currentValue) => accumulator + currentValue.real_sum_time, 0) -
                                    Data.reduce((accumulator, currentValue) => accumulator + currentValue.real_rest_time, 0)}{' '}
                                시간
                            </div>
                        </div>
                        <div>
                            <h4 style={{ marginTop: '30px', marginBottom: '20px' }}>
                                {' '}
                                {currentPageOn === 'BeforeOvertime' ? '사전' : '사후'} 연장근무 신청 내역
                            </h4>
                            <table className={`Create_History_Table ${currentPageOn === 'BeforeOvertime' ? 'before' : 'after'}`}>
                                <thead>
                                    <tr>
                                        <th rowSpan={2}>선택</th>
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
                                                <td>
                                                    <input
                                                        type="checkbox"
                                                        checked={list.checked}
                                                        disabled={Handle_Check_Disabled_Checking(list)}
                                                        onClick={() => handle_Click_Checked(list)}
                                                    ></input>
                                                </td>
                                                <td>{j + 1}</td>
                                                <td>{list.name}</td>
                                                <td>{list.write_date}</td>
                                                <td>{list.basic_start_time}</td>
                                                <td>{list.basic_end_time}</td>
                                                <td>{list.basic_sum_time - list.basic_rest_time} 시간</td>
                                                <td>{list.real_start_time}</td>
                                                <td>{list.real_end_time}</td>
                                                <td>{list.real_rest_time} 시간</td>
                                                <td>{list.real_sum_time - list.real_rest_time} 시간</td>
                                                <td>{list.reason}</td>
                                                <td>{Payment_Compnent_Make_Func(list)}</td>
                                            </tr>
                                        );
                                    })}
                                </tbody>
                            </table>
                        </div>

                        <div style={{ marginTop: '50px', marginBottom: '50px' }}></div>
                        <div className="ReviewAndAccept_Commit_Container">
                            <button onClick={() => Handle_Clicks_Submit_Data()}>검토 or 승인 처리 하기</button>
                        </div>
                    </AnnualLeaveHistoryTableMainDivBox>
                )}
            </HistoryTableMainDivBox>
        </TableMainPage>
    );
};

export default Table;

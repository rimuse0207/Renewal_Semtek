import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Payment_User_Select_Change_Func } from '../../../../../../../../../Models/PaymentUserReducer/PaymentUserSelectReduce';
import { request } from '../../../../../../../../../API';
import { HistoryTableMainDivBox } from '../../../../../../../Overtime_Working/OvertimeWorkingContainer/OvertimeWorkingContents/OvertimeWorkingSelect/OvertimeWorkingSelectContainer/OvertimeWorkingSelectContent/OvertimeWorkingHistoryContent/HistoryTable/HistoryTable';
import { AnnualLeaveHistoryTableMainDivBox } from '../../../../AnnualLeaveSelect/AnnualLeaveSelectContainer/AnnualLeaveSelectContent/AnnualLeaveHistoryContent/AnnualLeaveHistoryTable/AnnualLeaveHistoryTable';
import { TableMainPage } from '../../../../../../../Payment/PaymentMainContainer/ContentMainContainer/PaymentComponents/Table/Table';
import moment from 'moment';
import { RiDeleteBin6Fill } from 'react-icons/ri';
import ApplyModal from './ApplyModal';

const TeamAnnualLeaveTable = ({ DateData }) => {
    const dispatch = useDispatch();
    const Data = [];

    const Login_Info = useSelector(state => state.Login_Info_Reducer_State.Login_Info);
    const SelectLeftHeaderInfo = useSelector(state => state.PaymentUserSelectReducerState.User_Select);
    const [Vacation_State, setVacataion_State] = useState([]);
    const [Vacation_Payment_State, setVacation_Payment_State] = useState([]);
    const [Vacation_Pay_Modal_Is_Open, setVacation_Pay_Modal_Is_Open] = useState(false);

    const HandleDoubleClicksOvertime = data => {
        const Select_Datas = { value: data.uid, label: `${data.cn} ${data.department_name} ${data.uid}` };
        dispatch(Payment_User_Select_Change_Func(Select_Datas));
    };

    //   useEffect(() => {

    //       dispatch(
    //           Login_Info_Apply_State_Func({
    //               name: '유성재',
    //               id: 'sjyoo@dhk.co.kr',
    //               position: '프로',
    //               team: '제조',
    //               company: 'DHKS',
    //               vacation_admin_access: false,
    //               ot_admin: false,
    //               epid: 'sjyoo@dhk.co.kr',
    //           })
    //       );

    //   }, []);

    //개인 지급 휴가 삭제 함수
    const handleDeleteData_PayCount = async data => {
        if (!window.confirm('정말 삭제 처리 하시겠습니까?')) {
            return;
        }
        try {
            const Applyed_Vacation_Delete_Axios = await request.post('/semtek/handleDeleteData_PayCount', {
                data,
                ID: data.vacation_count_payment_id,
            });
            if (Applyed_Vacation_Delete_Axios.data.dataSuccess) {
                Years_Annual_Leave_All_Data_Getting();
            }
        } catch (error) {
            console.log(error);
        }
    };
    //개인 신청 휴가 삭제 함수
    const handleDeleteData = async data => {
        if (!window.confirm('정말 삭제 처리 하시겠습니까?')) {
            return;
        }
        try {
            const Applyed_Vacation_Delete_Axios = await request.post('/semtek/Admin_Applyed_Vacation_Delete', {
                data,
                ID: data.uid,
            });
            if (Applyed_Vacation_Delete_Axios.data.dataSuccess) {
                Years_Annual_Leave_All_Data_Getting();
            }
        } catch (error) {
            console.log(error);
        }
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
        if (data.vacation_review_info_review_check !== 1 && data.vacation_review_info_reviewer_id) {
            if (data.vacation_review_info_review_check !== 1 && data.vacation_review_info_reviewer_id === Login_Info.id) {
                return <div>검토 처리</div>;
            } else {
                return <div>검토 대기중...</div>;
            }
        } else if (data.vacation_accept_info_accept_check !== 1 && data.vacation_accept_info_accepter_id) {
            if (data.vacation_accept_info_accept_check !== 1 && data.vacation_accept_info_accepter_id === Login_Info.id) {
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
                // Getting_BeforeOvertime_Table_Data();
            }
        } catch (error) {
            console.log(error);
        }
    };

    const Years_Annual_Leave_All_Data_Getting = async () => {
        try {
            const Years_Annual_Leave_All_Data_Getting_Axios = await request.get('/semtek/Years_Annual_Leave_All_Data_Getting', {
                params: {
                    ID: Login_Info.id,
                    DateData,
                    Select_User: SelectLeftHeaderInfo?.value,
                },
            });
            if (Years_Annual_Leave_All_Data_Getting_Axios) {
                setVacataion_State(Years_Annual_Leave_All_Data_Getting_Axios.data.Years_Annual_Leave_All_Data_Getting_Rows);
                setVacation_Payment_State(Years_Annual_Leave_All_Data_Getting_Axios.data.Years_Annual_Leave_Payment_Count_Rows);
            }
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        Years_Annual_Leave_All_Data_Getting();
    }, [DateData, SelectLeftHeaderInfo.value]);

    return (
        <TableMainPage>
            <HistoryTableMainDivBox>
                {SelectLeftHeaderInfo?.value === 'ALL' ? (
                    <AnnualLeaveHistoryTableMainDivBox>
                        <div>
                            <h4 style={{ marginTop: '30px', marginBottom: '20px' }}>휴가 신청 내역</h4>
                            <table className={`Create_History_Table`}>
                                <thead>
                                    <tr>
                                        <th>번호</th>
                                        <th>성명</th>
                                        <th>부서명</th>
                                        <th>휴가명</th>
                                        <th>시작날짜</th>
                                        <th>종료날짜</th>
                                        <th>총 일수</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {Vacation_State.map((list, j) => {
                                        return (
                                            <tr
                                                className="Select_Overtime_Names_Container"
                                                key={list.vacation_apply_info_indexs}
                                                onDoubleClick={() => HandleDoubleClicksOvertime(list)}
                                            >
                                                <td>{Vacation_State.length - j}</td>
                                                <td>{list.cn}</td>
                                                <td>{list.department_name}</td>
                                                <td>{list.vacation_apply_info_divison}</td>
                                                <td>
                                                    {list.vacation_apply_info_start_date} {list.vacation_apply_info_start_time}
                                                </td>
                                                <td>
                                                    {list.vacation_apply_info_end_date} {list.vacation_apply_info_end_time}
                                                </td>
                                                <td>{list.vacation_apply_info_count}일</td>
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
                        <div style={{ marginTop: '30px' }}>
                            <div>
                                <button onClick={() => setVacation_Pay_Modal_Is_Open(true)}>휴가 지급</button>
                            </div>
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
                                    {Vacation_Payment_State.length > 0 ? (
                                        Vacation_Payment_State.map(list => {
                                            return (
                                                <tr key={list.vacation_count_payment_indexs}>
                                                    <td>{moment(list.vacation_count_payment_write_date).format('YYYY-MM-DD')}</td>
                                                    <td>{list.vacation_count_payment_number} 일</td>
                                                    <td>{list.vacation_count_payment_reason}</td>
                                                    <td>
                                                        <div
                                                            className="Vacation_Apply_Data_Delete"
                                                            onClick={() => handleDeleteData_PayCount(list)}
                                                        >
                                                            <RiDeleteBin6Fill></RiDeleteBin6Fill>
                                                        </div>
                                                    </td>
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
                                잔여 :{' '}
                                {Vacation_Payment_State.reduce((accumulator, currentValue) => {
                                    return accumulator + currentValue.vacation_count_payment_number;
                                }, 0) -
                                    Vacation_State.reduce((accumulator, currentValue) => {
                                        return accumulator + currentValue.vacation_apply_info_count;
                                    }, 0)}
                                일
                            </div>
                            <div className="SubTextDesc"></div>
                            <div>
                                사용 :{' '}
                                {Vacation_State.reduce((accumulator, currentValue) => {
                                    return accumulator + currentValue.vacation_apply_info_count;
                                }, 0)}
                                일
                            </div>
                            <div className="SubTextDesc"> </div>
                            <div>
                                총 휴가 :{' '}
                                {Vacation_Payment_State.reduce((accumulator, currentValue) => {
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
                                    {Vacation_State.length > 0 ? (
                                        Vacation_State.map((list, j) => {
                                            return (
                                                <tr key={list.vacation_apply_info_keys}>
                                                    <td>{Vacation_State.length - j}</td>
                                                    <td>{list.cn}</td>
                                                    <td>{list.vacation_apply_info_divison}</td>
                                                    <td> {list.vacation_apply_info_count}일</td>
                                                    <td>
                                                        <div>
                                                            {list.vacation_apply_info_start_date} (
                                                            {moment(list.vacation_apply_info_start_date).locale('ko').format('dd')}){' '}
                                                            {list.vacation_apply_info_start_time}
                                                        </div>
                                                        <div>~</div>
                                                        <div>
                                                            {list.vacation_apply_info_end_date} (
                                                            {moment(list.vacation_apply_info_end_date).locale('ko').format('dd')}){' '}
                                                            {list.vacation_apply_info_end_time}
                                                        </div>
                                                    </td>
                                                    <td>{Payment_Compnent_Make_Func(list)}</td>
                                                    <td>{list.vacation_apply_info_reason}</td>
                                                    <td>
                                                        <div className="Vacation_Apply_Data_Delete" onClick={() => handleDeleteData(list)}>
                                                            <RiDeleteBin6Fill></RiDeleteBin6Fill>
                                                        </div>
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
                )}
            </HistoryTableMainDivBox>
            {Vacation_Pay_Modal_Is_Open ? (
                <ApplyModal
                    Vacation_Pay_Modal_Is_Open={Vacation_Pay_Modal_Is_Open}
                    setVacation_Pay_Modal_Is_Open={() => setVacation_Pay_Modal_Is_Open(false)}
                ></ApplyModal>
            ) : (
                <div></div>
            )}
        </TableMainPage>
    );
};

export default TeamAnnualLeaveTable;

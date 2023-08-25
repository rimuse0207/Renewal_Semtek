import React, { useEffect } from 'react';
import styled from 'styled-components';
import { AiFillCalendar } from 'react-icons/ai';
import { RiTimeFill } from 'react-icons/ri';
import { useDispatch, useSelector } from 'react-redux';
import { get_Vacation_Info_State_API } from '../../../../../../../../../Models/VacationInfoReducer/VacationInfoReducer';
import { useState } from 'react';
import { request } from '../../../../../../../../../API';
import moment from 'moment';
import { AnuualLeaveNavStateChange } from '../../../../../../../../../Models/AnnualLeaveNavReducer/AnnualLeaveNavReducer';
export const AnnualLeaveCheckingMainDivBox = styled.div`
    margin-top: 20px;
    .Checking_Container {
        margin-top: 20px;
        display: flex;
        justify-content: start;
        .Checking_Content_Block {
            width: 50%;
            margin-right: 50px;
            .Checking_Content_Block_Title {
                display: flex;
                margin-bottom: 20px;
                h5 {
                    margin-left: 20px;
                }
            }
            .Checking_Content_Block_Content_Box {
                padding: 30px;
                border: 1px solid lightgray;
                display: flex;
                justify-content: space-around;
                text-align: center;
                .Checking_Content_Block_Content {
                    h5 {
                        margin-bottom: 20px;
                        font-size: 1em;
                    }
                }
            }
        }
    }
    .Apply_Page_GoTo_Container {
        color: blue;
        :hover {
            cursor: pointer;
            color: skyblue;
        }
    }
`;

const AnnualLeaveChecking = () => {
    const dispatch = useDispatch();
    const Login_Info = useSelector(state => state.Login_Info_Reducer_State.Login_Info);
    const Vacation_Info_State = useSelector(state => state.Vacation_Info_Reducer_State.data);
    const AnnualLeaveNavState = useSelector(state => state.AnuualLeaveNavState.Annual_Leave_Nav_State);
    const [Apply_History_Data, setApply_History_Data] = useState([]);
    const [Vacation_Count_Data, setVacation_Count_Data] = useState([]);

    const Handle_Vacation_Apply_Goto_Page = () => {
        const ChangeMenu = AnnualLeaveNavState.map(list =>
            list.menu_name === 'ApplyAnnualLeave' ? { ...list, menu_check: true } : { ...list, menu_check: false }
        );
        dispatch(AnuualLeaveNavStateChange(ChangeMenu));
    };

    const Get_Apply_Vacation_Info_Data = async () => {
        const Datess = moment().format('YYYY');
        try {
            const Get_Apply_Vacation_Info_Data_Axios = await request.get(`/semtek/Get_Apply_Vacation_Info_Data`, {
                params: {
                    id: Login_Info.id,
                    Date: Datess,
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
    }, []);

    return (
        <AnnualLeaveCheckingMainDivBox>
            <h3>올해 휴가/근무 정보</h3>
            <div className="Checking_Container">
                <div className="Checking_Content_Block">
                    <div className="Checking_Content_Block_Title">
                        <AiFillCalendar></AiFillCalendar>
                        <h5>휴가 현황</h5>
                    </div>
                    <div className="Checking_Content_Block_Content_Box">
                        <div className="Checking_Content_Block_Content">
                            <h5>총 휴가</h5>
                            <div>
                                {Vacation_Count_Data.reduce((accumulator, currentValue) => {
                                    return accumulator + currentValue.vacation_count_payment_number;
                                }, 0)}
                                일
                            </div>
                        </div>
                        <div className="Checking_Content_Block_Content">
                            <h5>사용 휴가</h5>
                            <div>
                                {Apply_History_Data.reduce((accumulator, currentValue) => {
                                    return accumulator + currentValue.Apply.vacation_apply_info_count;
                                }, 0)}
                                일
                            </div>
                        </div>
                        <div className="Checking_Content_Block_Content">
                            <h5>잔여 휴가</h5>
                            <div>
                                {Vacation_Count_Data.reduce((accumulator, currentValue) => {
                                    return accumulator + currentValue.vacation_count_payment_number;
                                }, 0) -
                                    Apply_History_Data.reduce((accumulator, currentValue) => {
                                        return accumulator + currentValue.Apply.vacation_apply_info_count;
                                    }, 0)}
                                일
                            </div>
                        </div>
                        <div className="Checking_Content_Block_Content">
                            <h5>휴가 현황</h5>
                            <div className="Apply_Page_GoTo_Container" onClick={() => Handle_Vacation_Apply_Goto_Page()}>
                                휴가 신청
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </AnnualLeaveCheckingMainDivBox>
    );
};

export default AnnualLeaveChecking;

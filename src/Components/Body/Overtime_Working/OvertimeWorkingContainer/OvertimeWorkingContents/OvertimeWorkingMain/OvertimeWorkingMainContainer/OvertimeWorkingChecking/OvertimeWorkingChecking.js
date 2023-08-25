import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { AnnualLeaveCheckingMainDivBox } from '../../../../../../Annual_Leave/AnnualLeaveContainer/AnnualLeaveContents/AnnualLeaveMain/AnnualLeaveMainContainer/AnnualLeaveMainContent/AnnualLeaveChecking/AnnualLeaveChecking';
import { AiFillCalendar } from 'react-icons/ai';
import { RiTimeFill } from 'react-icons/ri';
import { request } from '../../../../../../../../API';
import { useSelector } from 'react-redux';
import moment from 'moment';

const OvertimeWorkingCheckingMainDivBox = styled.div``;

const OvertimeWorkingChecking = () => {
    const Login_Info = useSelector(state => state.Login_Info_Reducer_State.Login_Info);
    const [After_Overtime_Data, setAfter_Overtime_Data] = useState([]);
    const Now_Month_Overtime_Working_Checking = async () => {
        try {
            const Now_Month_Overtime_Working_Checking_Axios = await request.get('/semtek/History_Overtime_Apply_Data', {
                params: {
                    ID: Login_Info.id,
                    Date: moment().format('YYYY-MM'),
                },
            });

            if (Now_Month_Overtime_Working_Checking_Axios.data.dataSuccess) {
                setAfter_Overtime_Data(Now_Month_Overtime_Working_Checking_Axios.data.History_After_Overtime_Apply_Data_Rows);
            }
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        Now_Month_Overtime_Working_Checking();
    }, []);

    return (
        <OvertimeWorkingCheckingMainDivBox>
            <AnnualLeaveCheckingMainDivBox>
                <h3>금월 연장근무 정보</h3>
                <div className="Checking_Container">
                    <div className="Checking_Content_Block">
                        <div className="Checking_Content_Block_Title">
                            <AiFillCalendar></AiFillCalendar>
                            <h5>연장근무 현황</h5>
                        </div>
                        <div className="Checking_Content_Block_Content_Box">
                            <div className="Checking_Content_Block_Content">
                                <h5>소정근무 합계 시간</h5>
                                <div>
                                    {' '}
                                    {After_Overtime_Data.reduce(
                                        (accumulator, currentValue) => accumulator + currentValue.after_overtime_apply_info_basic_sum_time,
                                        0
                                    ) -
                                        After_Overtime_Data.reduce(
                                            (accumulator, currentValue) =>
                                                accumulator + currentValue.after_overtime_apply_info_basic_rest_time,
                                            0
                                        )}{' '}
                                    시간
                                </div>
                            </div>
                            <div className="Checking_Content_Block_Content">
                                <h5>연장근무 합계 시간</h5>
                                <div>
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
                            <div className="Checking_Content_Block_Content">
                                <h5>총 연장근무 일수</h5>
                                <div>{After_Overtime_Data.length} 일</div>
                            </div>
                        </div>
                    </div>
                    {/* <div className="Checking_Content_Block">
                        <div className="Checking_Content_Block_Title">
                            <RiTimeFill></RiTimeFill>
                            <h5>근무시간</h5>
                        </div>
                        <div className="Checking_Content_Block_Content_Box">
                            <div className="Checking_Content_Block_Content">
                                <h5>근무 일수</h5>
                                <div> 0 일</div>
                            </div>
                            <div className="Checking_Content_Block_Content">
                                <h5>총 근무시간</h5>
                                <div>0시간</div>
                            </div>

                        </div>
                    </div> */}
                </div>
            </AnnualLeaveCheckingMainDivBox>
        </OvertimeWorkingCheckingMainDivBox>
    );
};

export default OvertimeWorkingChecking;

import React, { useEffect, useState } from 'react';
import moment from 'moment';
import { MdOutlineArrowBackIos, MdOutlineArrowForwardIos } from 'react-icons/md';
import 'moment/locale/ko';
import styled from 'styled-components';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

import { useDispatch, useSelector } from 'react-redux';
import { Overtime_Calendar_Data_Getting_Redux_Thunk } from '../../../../../../../../Models/Redux-Thunk/OvertimCalendarReduce';

const ApplySelectTableMainDivBox = styled.div`
    margin-top: 50px;
    margin-bottom: 50px;

    .react-datepicker__calendar-icon {
        position: absolute;
        padding: 0px;
        top: 4px;
        left: 4px;
        font-size: 1.5em;
    }

    .PersonalApplyBodyConent_ApplyContents_CalendarTable {
        font-size: 0.8em;
        table {
            border-collapse: collapse;
            width: 100%;
        }
        tbody {
            th {
                background: #eff4fc;
                text-align: center;
                width: 80px;
                padding: 15px 5px 15px 5px;
                border: 0.5px solid lightgray;
                font-weight: 500;
                height: 45px;
            }
            td {
                width: 9%;
                border: 0.5px solid lightgray;

                height: 45px;
                border-top: none;
                border-bottom: 0.5px solid lightgray;
                text-align: center;
                position: relative;
                .position_text {
                    position: absolute;
                    top: 50%;
                    left: 50%;
                    transform: translate(-50%, -50%);
                    width: 100%;
                }
            }
            .PersonalApplyBodyConent_ApplyContents_CalendarTable_ArrowClick {
                width: 40px;
                border-top: 0.5px solid lightgray;
                border-bottom: 0.5px solid lightgray;
                border-right: none;
                border-left: none;
                svg {
                    height: 20px;
                    width: 20px;
                    color: gray;
                    border-radius: 50%;
                    :hover {
                        cursor: pointer;
                        background: lightgray;
                        color: black;
                    }
                }
            }
            .PersonalApplyBodyConent_ApplyContents_CalendarTable_ButtonTable {
                height: 60px;
                td {
                    /* :hover {
                        cursor: pointer;
                        background: #eff4fc;
                    } */
                }
            }
        }
    }

    .Select_Vacation_Lists {
        display: flex;

        .Date_Pickers_Container {
            border: 1px solid lightgray;
            width: 350px;
            height: 45px;
            background-color: #eff4fc;
            display: flex;
            align-items: center;
            justify-content: space-around;
            font-size: 1.1em;
            border-radius: 5px;
            margin-right: 10px;
            .Date_Pickers_Text {
                margin-left: 10px;
            }
            .Date_Pickers_Pickers {
                height: 100%;
                input {
                    font-size: 1.3em;
                    font-weight: bolder;
                    height: 45px;
                    background: none;
                    border: none;
                    text-align: center;
                    :focus {
                        outline: none;
                    }
                    :hover {
                        cursor: pointer;
                    }
                }
            }
        }
        .Time_Pickers_Container {
            display: flex;
            height: 45px;
            width: 350px;
            justify-content: space-around;
            margin-top: 5px;
            .Hour_Pickers_Container {
                width: 49%;
                select {
                    width: 100%;
                    height: 100%;
                    font-size: 1.3em;
                    border: 1px solid lightgray;
                    border-radius: 5px;
                    padding-left: 10px;
                    option {
                        font-size: 1.2em;
                    }
                }
            }
        }
    }
    .Vacation_Container {
        border-bottom: 1px dashed lightgray;
        margin-top: 10px;
        width: 750px;
        padding-top: 40px;
        padding-bottom: 40px;

        .Type_Container {
            width: 710px;
            height: 45px;
            margin-bottom: 10px;
            border-radius: 5px;
            select {
                width: 50%;
                height: 100%;
                font-size: 1.3em;
                text-align: center;
                font-weight: bolder;
                border: 1px solid lightgray;
            }
        }
        position: relative;
        .Delete_Icons_Container {
            position: absolute;
            top: 0px;
            right: 0px;
            color: red;
            font-weight: bolder;
            font-size: 1.3em;
            :hover {
                cursor: pointer;
            }
        }
    }

    .SelectedCehcking_Container {
        height: 100%;
        position: relative;
        .Now_Checked {
            height: 100%;
            background: #166;
            position: relative;
            .Select_Menu {
                position: absolute;
                width: 110px;
                top: 50%;
                left: 60%;
                transform: translate(-40%, -50%);
                background-color: #fff;
                z-index: 100;
                li {
                    border: 1px solid gray;
                    padding: 5px;
                    font-weight: bolder;
                    :hover {
                        cursor: pointer;
                        background-color: darkgray;
                        color: #fff;
                    }
                }
            }
        }
        .Nonthing {
            width: 100%;
            height: 100%;
            position: relative;
            :hover {
                cursor: pointer;
            }
            .Select_Menu {
                position: absolute;
                width: 110px;
                top: 50%;
                left: 60%;
                transform: translate(-40%, -50%);
                background-color: #fff;
                z-index: 100;
                li {
                    border: 1px solid gray;
                    padding: 5px;
                    font-weight: bolder;
                    :hover {
                        cursor: pointer;
                        background-color: darkgray;
                        color: #fff;
                    }
                }
            }
        }

        .Selected_Menu_IsOpen {
            position: absolute;
            bottom: 0px;
            left: 0px;
            border: 1px solid gray;
            width: 130px;
            text-align: start;
            background-color: #fff;
            z-index: 100;
            li {
                padding: 5px;
                border: 1px solid lightgray;
                background-color: #fff;
                :hover {
                    cursor: pointer;
                    background-color: darkgray;
                    color: #fff;
                }
            }
        }
    }
`;
const ApplySelectTable = () => {
    const dispatch = useDispatch();
    const AnnualLeaveNavState = useSelector(state => state.AnuualLeaveNavState.Annual_Leave_Nav_State);
    const Login_Info = useSelector(state => state.Login_Info_Reducer_State.Login_Info);
    const Overtime_Date_Data = useSelector(state => state.OvertimeApplyReducerState.Overtime_Calendar_State.Overtime_Date_Data);
    const [GetData, setGetData] = useState(moment());
    const handleMinusCalendar = () => {
        setGetData(GetData.clone().subtract(5, 'day'));
    };
    const handlePlusCalendar = () => {
        setGetData(GetData.clone().add(5, 'day'));
    };

    useEffect(() => {
        dispatch(Overtime_Calendar_Data_Getting_Redux_Thunk(GetData, Login_Info.id));
    }, [GetData]);

    //월날짜 표시용
    const Handle_First_Header_Month_Date_Count = () => {
        const monthlyCounts = {};

        if (Overtime_Date_Data) {
            Overtime_Date_Data.forEach(item => {
                const month = item.dateMonthFormat; // 날짜에서 월 추출
                if (monthlyCounts[month]) {
                    monthlyCounts[month] += 1;
                } else {
                    monthlyCounts[month] = 1;
                }
            });
            const monthlyCountsArray = Object.entries(monthlyCounts).map(([month, count]) => ({ month, count }));
            return monthlyCountsArray;
        } else {
            return [];
        }
    };
    return (
        <ApplySelectTableMainDivBox>
            <div className="PersonalApplyBodyConent_ApplyContents_CalendarTable">
                <div>
                    <table>
                        <thead></thead>
                        <tbody>
                            <tr>
                                <td className="PersonalApplyBodyConent_ApplyContents_CalendarTable_ArrowClick" rowSpan={7}>
                                    <MdOutlineArrowBackIos onClick={handleMinusCalendar}></MdOutlineArrowBackIos>
                                </td>
                                {Handle_First_Header_Month_Date_Count().map((list, j) => {
                                    return <th colSpan={list.count + 2}>{list.month}</th>;
                                })}
                                <td className="PersonalApplyBodyConent_ApplyContents_CalendarTable_ArrowClick" rowSpan={7}>
                                    <MdOutlineArrowForwardIos onClick={handlePlusCalendar}></MdOutlineArrowForwardIos>
                                </td>
                            </tr>

                            <tr>
                                <th colSpan={2}>일자</th>
                                {Overtime_Date_Data.map(list => {
                                    return (
                                        <td
                                            style={
                                                list.weekFormat === '토'
                                                    ? { color: 'blue' }
                                                    : list.weekFormat === '일'
                                                    ? { color: 'red' }
                                                    : list.holiday_Check
                                                    ? { color: 'red' }
                                                    : {}
                                            }
                                        >
                                            <div>{list.dayFormat}</div>
                                            <div>({list.weekFormat})</div>
                                        </td>
                                    );
                                })}
                            </tr>
                            <tr>
                                <th colSpan={2}>계획표</th>
                                {Overtime_Date_Data.map(list => {
                                    return (
                                        <td>
                                            <div>{list.datePlan}</div>
                                        </td>
                                    );
                                })}
                            </tr>
                            <tr className="PersonalApplyBodyConent_ApplyContents_CalendarTable_ButtonTable">
                                <th rowSpan={2} style={{ writingMode: 'vertical-rl' }}>
                                    사 전
                                </th>
                                <th>소정 시간</th>
                                {Overtime_Date_Data.map(list => {
                                    return (
                                        <td>
                                            <div className="SelectedCehcking_Container">
                                                {list.holiday_Check ? (
                                                    <div style={{ background: 'gray', height: '100%', opacity: '0.1' }}></div>
                                                ) : (
                                                    <div>
                                                        {list.Before_Overtime?.checked ? (
                                                            <div>
                                                                <div>
                                                                    {list.Before_Overtime.baisc_start_time} ~{' '}
                                                                    {list.Before_Overtime.basic_end_time}
                                                                </div>
                                                                <div>( 휴게 : {list.Before_Overtime.basic_rest_time} ) </div>
                                                            </div>
                                                        ) : (
                                                            <div></div>
                                                        )}
                                                    </div>
                                                )}
                                            </div>
                                        </td>
                                    );
                                })}
                            </tr>
                            <tr className="PersonalApplyBodyConent_ApplyContents_CalendarTable_ButtonTable">
                                <th>연장 시간</th>
                                {Overtime_Date_Data.map(list => {
                                    return (
                                        <td>
                                            <div className="SelectedCehcking_Container">
                                                <div>
                                                    {list.Before_Overtime?.checked ? (
                                                        <div>
                                                            <div>
                                                                {list.Before_Overtime.after_start_time} ~{' '}
                                                                {list.Before_Overtime.after_end_time}
                                                            </div>
                                                            <div>( 휴게 : {list.Before_Overtime.after_rest_time} ) </div>
                                                        </div>
                                                    ) : (
                                                        <div></div>
                                                    )}
                                                </div>
                                            </div>
                                        </td>
                                    );
                                })}
                            </tr>

                            <tr className="PersonalApplyBodyConent_ApplyContents_CalendarTable_ButtonTable">
                                <th rowSpan={2} style={{ writingMode: 'vertical-rl' }}>
                                    사 후
                                </th>
                                <th>소정 시간</th>
                                {Overtime_Date_Data.map(list => {
                                    return (
                                        <td>
                                            <div className="SelectedCehcking_Container">
                                                {list.holiday_Check ? (
                                                    <div style={{ background: 'gray', height: '100%', opacity: '0.1' }}></div>
                                                ) : (
                                                    <div>
                                                        {list.After_Overtime?.checked ? (
                                                            <div>
                                                                <div>
                                                                    {list.After_Overtime.baisc_start_time} ~{' '}
                                                                    {list.After_Overtime.basic_end_time}
                                                                </div>
                                                                <div>( 휴게 : {list.After_Overtime.basic_rest_time} ) </div>
                                                            </div>
                                                        ) : (
                                                            <div></div>
                                                        )}
                                                    </div>
                                                )}
                                            </div>
                                        </td>
                                    );
                                })}
                            </tr>
                            <tr className="PersonalApplyBodyConent_ApplyContents_CalendarTable_ButtonTable">
                                <th>연장 시간</th>
                                {Overtime_Date_Data.map(list => {
                                    return (
                                        <td>
                                            <div className="SelectedCehcking_Container">
                                                <div>
                                                    {list.After_Overtime?.checked ? (
                                                        <div>
                                                            <div>
                                                                {list.After_Overtime.after_start_time} ~{' '}
                                                                {list.After_Overtime.after_end_time}
                                                            </div>
                                                            <div>( 휴게 : {list.After_Overtime.after_rest_time} ) </div>
                                                        </div>
                                                    ) : (
                                                        <div></div>
                                                    )}
                                                </div>
                                            </div>
                                        </td>
                                    );
                                })}
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </ApplySelectTableMainDivBox>
    );
};
export default ApplySelectTable;

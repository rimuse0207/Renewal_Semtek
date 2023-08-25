import React, { useEffect, useState } from 'react';
import moment from 'moment';
import { MdOutlineArrowBackIos, MdOutlineArrowForwardIos } from 'react-icons/md';
import 'moment/locale/ko';
import styled from 'styled-components';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

import { useDispatch, useSelector } from 'react-redux';
import {
    Overtime_Calendar_Data_Getting_Redux_Thunk,
    Overtime_Menu_Select_Checked,
} from '../../../../../../../../Models/Redux-Thunk/OvertimCalendarReduce';
import { After_Overtime_Apply_State_Func } from '../../../../../../../../Models/OvertimeApplyReducer/AfterApplyReducer';
import uuid from 'react-uuid';
import { Before_Overtime_Apply_State_Func } from '../../../../../../../../Models/OvertimeApplyReducer/BeforeApplyReducer';
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

        .Now_Checked_Container_Before {
            background: rgb(255, 255, 153);
            width: 100%;
            height: 100%;
            display: flex;
            flex-flow: wrap;
            justify-content: center;
            align-items: center;
            font-weight: bolder;
        }
        .Now_Checked_Container_After {
            background: rgb(153, 204, 255);
            width: 100%;
            height: 100%;
            display: flex;
            flex-flow: wrap;
            justify-content: center;
            align-items: center;
            font-weight: bolder;
        }

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
    .Menu_Open_Container {
        width: 100%;
        height: 100%;
        position: relative;
        .Select_Menu {
            position: absolute;
            top: 50%;
            left: 0;
            transform: translate(0%, -50%);
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

    .Already_Content_Container {
        background-color: #efefef;
        width: 100%;
        height: 100%;
        font-weight: bolder;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-flow: wrap;
        font-size: 0.9em;
    }
`;
const ApplySelectTable = () => {
    const dispatch = useDispatch();
    const Login_Info = useSelector(state => state.Login_Info_Reducer_State.Login_Info);
    const Overtime_Date_Data = useSelector(state => state.OvertimeApplyReducerState.Overtime_Calendar_State.Overtime_Date_Data);
    const Before_Apply_State = useSelector(state => state.BeforeApplyReducerState.Before_Overtime_State);
    const After_Apply_State = useSelector(state => state.AfterApplyReducerState.After_Overtime_State);
    const [GetData, setGetData] = useState(moment());
    const handleMinusCalendar = () => {
        setGetData(GetData.clone().subtract(5, 'day'));
    };
    const handlePlusCalendar = () => {
        setGetData(GetData.clone().add(5, 'day'));
    };

    const Handle_Selected_Menu_Open = (e, select_menu, Click_Data) => {
        e.stopPropagation();
        if (select_menu === 'Before_basic_Overtime') {
            const Menu_Open_Change_Data = Overtime_Date_Data.map(list => {
                return list.dateFormat === Click_Data.dateFormat
                    ? {
                          ...list,
                          Before_basic_Overtime_Menu_Open_Checking: true,
                          Before_not_basic_Overtime_Menu_Open_Checking: false,
                          After_basic_Overtime_Menu_Open_Checking: false,
                          After_not_basic_Overtime_Menu_Open_Checking: false,
                      }
                    : {
                          ...list,
                          Before_basic_Overtime_Menu_Open_Checking: false,
                          Before_not_basic_Overtime_Menu_Open_Checking: false,
                          After_basic_Overtime_Menu_Open_Checking: false,
                          After_not_basic_Overtime_Menu_Open_Checking: false,
                      };
            });
            dispatch(Overtime_Menu_Select_Checked(Menu_Open_Change_Data));
        } else if (select_menu === 'Before_not_basic_Overtime') {
            const Menu_Open_Change_Data = Overtime_Date_Data.map(list => {
                return list.dateFormat === Click_Data.dateFormat
                    ? {
                          ...list,
                          Before_not_basic_Overtime_Menu_Open_Checking: true,
                          Before_basic_Overtime_Menu_Open_Checking: false,
                          After_basic_Overtime_Menu_Open_Checking: false,
                          After_not_basic_Overtime_Menu_Open_Checking: false,
                      }
                    : {
                          ...list,
                          Before_basic_Overtime_Menu_Open_Checking: false,
                          Before_not_basic_Overtime_Menu_Open_Checking: false,
                          After_basic_Overtime_Menu_Open_Checking: false,
                          After_not_basic_Overtime_Menu_Open_Checking: false,
                      };
            });
            dispatch(Overtime_Menu_Select_Checked(Menu_Open_Change_Data));
        } else if (select_menu === 'After_basic_Overtime') {
            const Menu_Open_Change_Data = Overtime_Date_Data.map(list => {
                return list.dateFormat === Click_Data.dateFormat
                    ? {
                          ...list,
                          After_basic_Overtime_Menu_Open_Checking: true,
                          After_not_basic_Overtime_Menu_Open_Checking: false,
                          Before_basic_Overtime_Menu_Open_Checking: false,
                          Before_not_basic_Overtime_Menu_Open_Checking: false,
                      }
                    : {
                          ...list,
                          Before_basic_Overtime_Menu_Open_Checking: false,
                          Before_not_basic_Overtime_Menu_Open_Checking: false,
                          After_basic_Overtime_Menu_Open_Checking: false,
                          After_not_basic_Overtime_Menu_Open_Checking: false,
                      };
            });
            dispatch(Overtime_Menu_Select_Checked(Menu_Open_Change_Data));
        } else if (select_menu === 'After_not_basic_Overtime') {
            const Menu_Open_Change_Data = Overtime_Date_Data.map(list => {
                return list.dateFormat === Click_Data.dateFormat
                    ? {
                          ...list,
                          After_basic_Overtime_Menu_Open_Checking: false,
                          After_not_basic_Overtime_Menu_Open_Checking: true,
                          Before_basic_Overtime_Menu_Open_Checking: false,
                          Before_not_basic_Overtime_Menu_Open_Checking: false,
                      }
                    : {
                          ...list,
                          Before_basic_Overtime_Menu_Open_Checking: false,
                          Before_not_basic_Overtime_Menu_Open_Checking: false,
                          After_basic_Overtime_Menu_Open_Checking: false,
                          After_not_basic_Overtime_Menu_Open_Checking: false,
                      };
            });
            dispatch(Overtime_Menu_Select_Checked(Menu_Open_Change_Data));
        }
    };

    ///// 추가하기 선택
    const Add_Overtime_Date_Setting_Func = (e, select_menu, Click_Data) => {
        e.stopPropagation();
        if (select_menu === 'Before_basic_Overtime' || select_menu === 'Before_not_basic_Overtime') {
            const Before_Datas = {
                before_overtime_apply_info_apply_keys: uuid(),
                before_overtime_apply_info_date: new Date(Click_Data.dateFormat),
                before_overtime_apply_info_basic_start_time: '09:00',
                before_overtime_apply_info_basic_end_time: '18:00',
                before_overtime_apply_info_basic_rest_time: 1,
                before_overtime_apply_info_basic_sum_time: 9,
                before_overtime_apply_info_start_time: '18:00',
                before_overtime_apply_info_end_time: '18:00',
                before_overtime_apply_info_rest_time: 0,
                before_overtime_apply_info_night_time: 0,
                before_overtime_apply_info_sum_time: 0,
                before_overtime_apply_info_reason: '',
                before_overtime_apply_info_holiday_check: false,
            };
            dispatch(Before_Overtime_Apply_State_Func(Before_Apply_State.concat(Before_Datas)));

            const Menu_Open_Change_Data = Overtime_Date_Data.map(list => {
                return list.dateFormat === Click_Data.dateFormat
                    ? {
                          ...list,
                          Before_basic_Overtime_Menu_Open_Checking: false,
                          Before_not_basic_Overtime_Menu_Open_Checking: false,
                          After_basic_Overtime_Menu_Open_Checking: false,
                          After_not_basic_Overtime_Menu_Open_Checking: false,
                      }
                    : {
                          ...list,
                          Before_basic_Overtime_Menu_Open_Checking: false,
                          Before_not_basic_Overtime_Menu_Open_Checking: false,
                          After_basic_Overtime_Menu_Open_Checking: false,
                          After_not_basic_Overtime_Menu_Open_Checking: false,
                      };
            });
            dispatch(Overtime_Menu_Select_Checked(Menu_Open_Change_Data));
        } else if (select_menu === 'After_basic_Overtime' || select_menu === 'After_not_basic_Overtime') {
            const After_Datas = {
                after_overtime_apply_info_apply_keys: uuid(),
                after_overtime_apply_info_date: new Date(Click_Data.dateFormat),
                after_overtime_apply_info_basic_start_time: '09:00',
                after_overtime_apply_info_basic_end_time: '18:00',
                after_overtime_apply_info_basic_rest_time: 1,
                after_overtime_apply_info_basic_sum_time: 9,
                after_overtime_apply_info_start_time: '18:00',
                after_overtime_apply_info_end_time: '18:00',
                after_overtime_apply_info_rest_time: 0,
                after_overtime_apply_info_night_time: 0,
                after_overtime_apply_info_sum_time: 0,
                after_overtime_apply_info_reason: '',
                after_overtime_apply_info_holiday_check: false,
            };
            dispatch(After_Overtime_Apply_State_Func(After_Apply_State.concat(After_Datas)));
            const Menu_Open_Change_Data = Overtime_Date_Data.map(list => {
                return list.dateFormat === Click_Data.dateFormat
                    ? {
                          ...list,
                          After_basic_Overtime_Menu_Open_Checking: false,
                          After_not_basic_Overtime_Menu_Open_Checking: false,
                          Before_basic_Overtime_Menu_Open_Checking: false,
                          Before_not_basic_Overtime_Menu_Open_Checking: false,
                      }
                    : {
                          ...list,
                          Before_basic_Overtime_Menu_Open_Checking: false,
                          Before_not_basic_Overtime_Menu_Open_Checking: false,
                          After_basic_Overtime_Menu_Open_Checking: false,
                          After_not_basic_Overtime_Menu_Open_Checking: false,
                      };
            });
            dispatch(Overtime_Menu_Select_Checked(Menu_Open_Change_Data));
        }
    };

    const Before_Calendar_Checking_Func = (data, Select_Menu, Menu_Checking) => {
        const Find_Indexs = Before_Apply_State.findIndex(
            item => moment(item.before_overtime_apply_info_date).format('YYYY-MM-DD') === data.dateFormat
        );
        if (Find_Indexs !== -1) {
            if (Select_Menu === 'Before_not_basic_Overtime') {
                return (
                    <div className="Now_Checked_Container_Before">
                        <div>
                            {Before_Apply_State[Find_Indexs].before_overtime_apply_info_start_time} ~{' '}
                            {Before_Apply_State[Find_Indexs].before_overtime_apply_info_end_time}
                        </div>
                        <div>( 휴게 : {Before_Apply_State[Find_Indexs].before_overtime_apply_info_rest_time} 시간 ) </div>
                    </div>
                );
            } else {
                return (
                    <div className="Now_Checked_Container_Before">
                        <div>
                            {Before_Apply_State[Find_Indexs].before_overtime_apply_info_basic_start_time} ~{' '}
                            {Before_Apply_State[Find_Indexs].before_overtime_apply_info_basic_end_time}
                        </div>
                        <div>( 휴게 : {Before_Apply_State[Find_Indexs].before_overtime_apply_info_basic_rest_time} 시간 ) </div>
                    </div>
                );
            }
        } else {
            return (
                <div className="Menu_Open_Container" onClick={e => Handle_Selected_Menu_Open(e, Select_Menu, data)}>
                    {Menu_Checking ? (
                        <ul className="Select_Menu">
                            <li onClick={e => Add_Overtime_Date_Setting_Func(e, Select_Menu, data)}>사전 신청 추가</li>
                        </ul>
                    ) : (
                        <></>
                    )}
                </div>
            );
        }
    };

    const After_Calendar_Checking_Func = (data, Select_Menu, Menu_Checking) => {
        const Find_Indexs = After_Apply_State.findIndex(
            item => moment(item.after_overtime_apply_info_date).format('YYYY-MM-DD') === data.dateFormat
        );
        if (Find_Indexs !== -1) {
            if (Select_Menu === 'After_not_basic_Overtime') {
                return (
                    <div className="Now_Checked_Container_After">
                        <div>
                            {After_Apply_State[Find_Indexs].after_overtime_apply_info_start_time} ~{' '}
                            {After_Apply_State[Find_Indexs].after_overtime_apply_info_end_time}
                        </div>
                        <div>( 휴게 : {After_Apply_State[Find_Indexs].after_overtime_apply_info_rest_time} 시간 ) </div>
                    </div>
                );
            } else {
                return (
                    <div className="Now_Checked_Container_After">
                        <div>
                            {After_Apply_State[Find_Indexs].after_overtime_apply_info_basic_start_time} ~{' '}
                            {After_Apply_State[Find_Indexs].after_overtime_apply_info_basic_end_time}
                        </div>
                        <div>( 휴게 : {After_Apply_State[Find_Indexs].after_overtime_apply_info_basic_rest_time} 시간 ) </div>
                    </div>
                );
            }
        } else {
            return (
                <div className="Menu_Open_Container" onClick={e => Handle_Selected_Menu_Open(e, Select_Menu, data)}>
                    {Menu_Checking ? (
                        <ul className="Select_Menu">
                            <li onClick={e => Add_Overtime_Date_Setting_Func(e, Select_Menu, data)}>사후 신청 추가</li>
                        </ul>
                    ) : (
                        <></>
                    )}
                </div>
            );
        }
    };

    const Handle_Delete_Menus = e => {
        e.stopPropagation();
        const Menu_Open_Change_Data = Overtime_Date_Data.map(list => {
            return {
                ...list,
                Before_basic_Overtime_Menu_Open_Checking: false,
                Before_not_basic_Overtime_Menu_Open_Checking: false,
                After_basic_Overtime_Menu_Open_Checking: false,
                After_not_basic_Overtime_Menu_Open_Checking: false,
            };
        });
        dispatch(Overtime_Menu_Select_Checked(Menu_Open_Change_Data));
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
        <ApplySelectTableMainDivBox onClick={e => Handle_Delete_Menus(e)}>
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
                                    return (
                                        <th colSpan={list.count + 2} key={list.month}>
                                            {list.month}
                                        </th>
                                    );
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
                                            key={list.dayFormat}
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
                                        <td key={list.dayFormat}>
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
                                        <td key={list.dayFormat}>
                                            <div className="SelectedCehcking_Container">
                                                {list.holiday_Check ? (
                                                    <div style={{ background: 'gray', height: '100%', opacity: '0.1' }}></div>
                                                ) : (
                                                    <div className="Table_Content_Container" style={{ width: '100%', height: '100%' }}>
                                                        {list.Before_Overtime.checked ? (
                                                            <div className="Already_Content_Container">
                                                                <div>
                                                                    {list.Before_Overtime.baisc_start_time} ~{' '}
                                                                    {list.Before_Overtime.basic_end_time} ({' '}
                                                                    {list.Before_Overtime.basic_rest_time} )
                                                                </div>
                                                                <div>
                                                                    ( 합계 :{' '}
                                                                    {list.Before_Overtime.basic_sum_time -
                                                                        list.Before_Overtime.basic_rest_time}{' '}
                                                                    시간 ){' '}
                                                                </div>
                                                            </div>
                                                        ) : (
                                                            Before_Calendar_Checking_Func(
                                                                list,
                                                                'Before_basic_Overtime',
                                                                list.Before_basic_Overtime_Menu_Open_Checking
                                                            )
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
                                        <td key={list.dayFormat}>
                                            <div className="SelectedCehcking_Container">
                                                <div className="Table_Content_Container" style={{ width: '100%', height: '100%' }}>
                                                    {list.Before_Overtime?.checked ? (
                                                        <div className="Already_Content_Container">
                                                            <div>
                                                                {list.Before_Overtime.after_start_time} ~{' '}
                                                                {list.Before_Overtime.after_end_time} ({' '}
                                                                {list.Before_Overtime.after_rest_time} )
                                                            </div>
                                                            <div>
                                                                ( 합계 :{' '}
                                                                {list.Before_Overtime.after_sum_time - list.Before_Overtime.after_rest_time}{' '}
                                                                시간 ){' '}
                                                            </div>
                                                        </div>
                                                    ) : (
                                                        Before_Calendar_Checking_Func(
                                                            list,
                                                            'Before_not_basic_Overtime',
                                                            list.Before_not_basic_Overtime_Menu_Open_Checking
                                                        )
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
                                        <td key={list.dayFormat}>
                                            <div className="SelectedCehcking_Container">
                                                {list.holiday_Check ? (
                                                    <div style={{ background: 'gray', height: '100%', opacity: '0.1' }}></div>
                                                ) : (
                                                    <div className="Table_Content_Container" style={{ width: '100%', height: '100%' }}>
                                                        {list.After_Overtime?.checked ? (
                                                            <div className="Already_Content_Container">
                                                                <div>
                                                                    {list.After_Overtime.baisc_start_time} ~{' '}
                                                                    {list.After_Overtime.basic_end_time} ({' '}
                                                                    {list.After_Overtime.basic_rest_time} )
                                                                </div>
                                                                <div>
                                                                    ( 합계 :{' '}
                                                                    {list.After_Overtime.basic_sum_time -
                                                                        list.After_Overtime.basic_rest_time}{' '}
                                                                    시간 ){' '}
                                                                </div>
                                                            </div>
                                                        ) : (
                                                            After_Calendar_Checking_Func(
                                                                list,
                                                                'After_basic_Overtime',
                                                                list.After_basic_Overtime_Menu_Open_Checking
                                                            )
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
                                        <td key={list.dayFormat}>
                                            <div className="SelectedCehcking_Container">
                                                <div className="Table_Content_Container" style={{ width: '100%', height: '100%' }}>
                                                    {list.After_Overtime?.checked ? (
                                                        <div className="Already_Content_Container">
                                                            <div>
                                                                {list.After_Overtime.after_start_time} ~{' '}
                                                                {list.After_Overtime.after_end_time} ( {list.After_Overtime.after_rest_time}{' '}
                                                                )
                                                            </div>
                                                            <div>
                                                                ( 합계 :{' '}
                                                                {list.After_Overtime.after_sum_time - list.After_Overtime.after_rest_time}{' '}
                                                                시간 ){' '}
                                                            </div>
                                                        </div>
                                                    ) : (
                                                        After_Calendar_Checking_Func(
                                                            list,
                                                            'After_not_basic_Overtime',
                                                            list.After_not_basic_Overtime_Menu_Open_Checking
                                                        )
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

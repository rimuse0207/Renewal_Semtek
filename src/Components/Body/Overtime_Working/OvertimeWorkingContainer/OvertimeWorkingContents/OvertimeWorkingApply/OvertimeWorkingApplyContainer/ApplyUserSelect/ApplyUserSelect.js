import React, { useState } from 'react';
import { ApplyUserSelectMainDivBox } from '../../../../../../Annual_Leave/AnnualLeaveContainer/AnnualLeaveContents/AnnualLeaveApply/AnnualLeaveApplyContainer/AnnualLeaveApplyContent/ApplyUserSelect/ApplyUserSelect';
import styled from 'styled-components';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { TimeClicksOptions, RestTimeClicksOptions, NightTimeClicksOptions } from './SelectTimeOptionData';
import uuid from 'react-uuid';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { ko } from 'date-fns/esm/locale';
import moment from 'moment';
import { useDispatch, useSelector } from 'react-redux';
import { After_Overtime_Apply_State_Func } from '../../../../../../../../Models/OvertimeApplyReducer/AfterApplyReducer';
import { Before_Overtime_Apply_State_Func } from '../../../../../../../../Models/OvertimeApplyReducer/BeforeApplyReducer';
import { useEffect } from 'react';
import { request } from '../../../../../../../../API';
import { TbSquareRoundedMinus } from 'react-icons/tb';

const ApplyedUserSelectMainDivBox = styled.div`
    border-bottom: 2px solid black;
    padding-bottom: 20px;
    margin-bottom: 20px;
    .After_Table_Container {
        thead {
            background-color: #99ccff !important;
        }
    }
    .Before_Overtime_Table_Container {
        width: 100%;
        border-collapse: collapse;
        border: 1px solid lightgray;
        font-size: 0.8em;

        thead {
            text-align: center;
            background-color: #ffff99;
        }

        th,
        td {
            border: 1px solid lightgray;
            padding: 5px;
            .MuiFormControl-root {
                font-size: 0.8em;
            }
        }
        .Date_Pickers_Pickers {
            input {
                height: 40px;
                border: 1px solid lightgray;
                border-radius: 5px;
                text-align: center;
                width: 100px;
            }
        }
        .reasontable {
            textarea {
                width: 100%;
                height: 100%;
                border: 1px solid lightgray;
                min-height: 50px;
                padding: 3px;

                resize: vertical;
            }
        }
    }

    .Before_Table_Content_Container {
        position: relative;
        .Delete_Data_Container {
            position: absolute;
            top: 50%;
            left: -20px;
            font-size: 1.2em;
            transform: translate(0, -50%);
            color: red;
            :hover {
                cursor: pointer;
            }
        }
    }
`;

const ApplyUserSelect = () => {
    const dispatch = useDispatch();
    const Login_Info = useSelector(state => state.Login_Info_Reducer_State.Login_Info);
    const After_Apply_State = useSelector(state => state.AfterApplyReducerState.After_Overtime_State);
    const [After_Except_Date, setAfter_Except_Date] = useState([]);

    const Handle_Add_After_Overtime = () => {
        const After_Datas = {
            after_overtime_apply_info_apply_keys: uuid(),
            after_overtime_apply_info_date: new Date(),
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
    };

    const Hour_Checking_Data = (start_time, end_time) => {
        const moment_start_time = moment(`2023-01-01 ${start_time}`);
        const moment_end_time = moment(`2023-01-01 ${end_time}`);
        return moment.duration(moment_end_time.diff(moment_start_time)).asMinutes() / 60;
    };

    const Overtime_NightChecking_Data = (start_time, end_time) => {
        if (NightTimeClicksOptions.some(list => list.value === end_time)) {
            //야간 수당 추가
            const moment_start_time = moment(`2023-01-01 ${start_time}`);
            const moment_basic_end_time = moment(`2023-01-01 22:00`);

            const moment_night_start_time = moment(`2023-01-01 22:00`);
            const moment_night_end_time = moment(`2023-01-01 ${end_time}`);
            return {
                originTime: moment.duration(moment_basic_end_time.diff(moment_start_time)).asMinutes() / 60,
                nightTime:
                    moment.duration(moment_night_end_time.diff(moment_night_start_time)).asMinutes() / 60 < 0
                        ? 24 + moment.duration(moment_night_end_time.diff(moment_night_start_time)).asMinutes() / 60
                        : moment.duration(moment_night_end_time.diff(moment_night_start_time)).asMinutes() / 60,
            };
        } else {
            //야간 수당 없음.
            const moment_start_time = moment(`2023-01-01 ${start_time}`);
            const moment_end_time = moment(`2023-01-01 ${end_time}`);
            return {
                originTime: moment.duration(moment_end_time.diff(moment_start_time)).asMinutes() / 60,
                nightTime: 0,
            };
        }
    };

    const Before_Overtime_Time_Change = (e, data, Select_Menu) => {
        if (Select_Menu === 'After_start_time') {
            const Sum_Hour_Count = Hour_Checking_Data(e.target.value, data.after_overtime_apply_info_basic_end_time);
            const rest_Hour_Count = Sum_Hour_Count >= 8 ? 1 : 0;
            const Change_Data = After_Apply_State.map(list =>
                list.after_overtime_apply_info_apply_keys === data.after_overtime_apply_info_apply_keys &&
                list.after_overtime_apply_info_date === data.after_overtime_apply_info_date
                    ? {
                          ...list,
                          after_overtime_apply_info_basic_start_time: e.target.value,
                          after_overtime_apply_info_basic_sum_time: Sum_Hour_Count,
                          after_overtime_apply_info_basic_rest_time: rest_Hour_Count,
                      }
                    : list
            );
            dispatch(After_Overtime_Apply_State_Func(Change_Data));
        } else if (Select_Menu === 'After_end_time') {
            const Sum_Hour_Count = Hour_Checking_Data(data.after_overtime_apply_info_basic_start_time, e.target.value);
            const rest_Hour_Count = Sum_Hour_Count >= 8 ? 1 : 0;
            const Change_Data = After_Apply_State.map(list =>
                list.after_overtime_apply_info_apply_keys === data.after_overtime_apply_info_apply_keys &&
                list.after_overtime_apply_info_date === data.after_overtime_apply_info_date
                    ? {
                          ...list,
                          after_overtime_apply_info_basic_end_time: e.target.value,
                          after_overtime_apply_info_basic_sum_time: Sum_Hour_Count,
                          after_overtime_apply_info_basic_rest_time: rest_Hour_Count,
                      }
                    : list
            );
            dispatch(After_Overtime_Apply_State_Func(Change_Data));
        } else if (Select_Menu === 'After_overtime_start_time') {
            const Overtime_Sum_Hour_Count = Overtime_NightChecking_Data(e.target.value, data.after_overtime_apply_info_end_time);
            const Change_Data = After_Apply_State.map(list =>
                list.after_overtime_apply_info_apply_keys === data.after_overtime_apply_info_apply_keys &&
                list.after_overtime_apply_info_date === data.after_overtime_apply_info_date
                    ? {
                          ...list,
                          after_overtime_apply_info_start_time: e.target.value,
                          after_overtime_apply_info_night_time: Overtime_Sum_Hour_Count.nightTime,
                          after_overtime_apply_info_sum_time: Overtime_Sum_Hour_Count.nightTime + Overtime_Sum_Hour_Count.originTime,
                      }
                    : list
            );
            dispatch(After_Overtime_Apply_State_Func(Change_Data));
        } else if (Select_Menu === 'After_overtime_end_time') {
            const Overtime_Sum_Hour_Count = Overtime_NightChecking_Data(data.after_overtime_apply_info_start_time, e.target.value);
            const Change_Data = After_Apply_State.map(list =>
                list.after_overtime_apply_info_apply_keys === data.after_overtime_apply_info_apply_keys &&
                list.after_overtime_apply_info_date === data.after_overtime_apply_info_date
                    ? {
                          ...list,
                          after_overtime_apply_info_end_time: e.target.value,
                          after_overtime_apply_info_night_time: Overtime_Sum_Hour_Count.nightTime,
                          after_overtime_apply_info_sum_time: Overtime_Sum_Hour_Count.nightTime + Overtime_Sum_Hour_Count.originTime,
                      }
                    : list
            );
            dispatch(After_Overtime_Apply_State_Func(Change_Data));
        } else if (Select_Menu === 'After_overtime_rest_time') {
            const Change_Data = After_Apply_State.map(list =>
                list.after_overtime_apply_info_apply_keys === data.after_overtime_apply_info_apply_keys &&
                list.after_overtime_apply_info_date === data.after_overtime_apply_info_date
                    ? { ...list, after_overtime_apply_info_rest_time: e.target.value }
                    : list
            );
            dispatch(After_Overtime_Apply_State_Func(Change_Data));
        }
    };

    const handleChangesClickDates = (date, data, select_Menu) => {
        const ChangeData = After_Apply_State.map(list =>
            list.after_overtime_apply_info_apply_keys === data.after_overtime_apply_info_apply_keys
                ? { ...list, after_overtime_apply_info_date: new Date(date) }
                : list
        );
        dispatch(After_Overtime_Apply_State_Func(ChangeData));
    };

    const Handle_Change_Overtime_Reason = (e, data, select_Menu) => {
        const ChangeData = After_Apply_State.map(list =>
            list.after_overtime_apply_info_apply_keys === data.after_overtime_apply_info_apply_keys
                ? { ...list, after_overtime_apply_info_reason: e.target.value }
                : list
        );
        dispatch(After_Overtime_Apply_State_Func(ChangeData));
    };

    const Handle_Delete_Apply_Data = (data, select_Menu) => {
        dispatch(
            After_Overtime_Apply_State_Func(
                After_Apply_State.filter(list =>
                    list.after_overtime_apply_info_apply_keys === data.after_overtime_apply_info_apply_keys ? '' : list
                )
            )
        );
    };

    const User_Overtime_Applyed_Data_Getting = async () => {
        try {
            const User_Overtime_Applyed_Data_Getting_Axios = await request.get('/semtek/User_Overtime_Applyed_Data_Getting', {
                params: {
                    ID: Login_Info.id,
                },
            });

            if (User_Overtime_Applyed_Data_Getting_Axios.data.dataSuccess) {
                const After_ChangeData = [];

                User_Overtime_Applyed_Data_Getting_Axios.data.After_User_Overtime_Applyed_Date_Data_Getting_Rows.map(list => {
                    After_ChangeData.push(new Date(list.after_overtime_apply_info_date));
                });

                setAfter_Except_Date(After_ChangeData);
            }
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        User_Overtime_Applyed_Data_Getting();
    }, []);

    return (
        <ApplyedUserSelectMainDivBox>
            <ApplyUserSelectMainDivBox>
                <div className="PersonApplyContentUserSelectPageMain_UserSelectBox">
                    <div>
                        <div>
                            <h4>연장근무 신청</h4>
                        </div>
                    </div>
                    <div>
                        {After_Apply_State.length > 0 ? (
                            <table className="Before_Overtime_Table_Container After_Table_Container">
                                <thead>
                                    <tr className="testssBefore">
                                        <th rowSpan={2} colSpan={2}>
                                            일자
                                        </th>

                                        <th colSpan={4}>연장 근무</th>

                                        <th rowSpan={2} className="OTSpace_OTReason_th">
                                            사유
                                        </th>
                                    </tr>
                                    <tr className="testssBefore">
                                        <td>시작시간</td>
                                        <td>종료시간</td>
                                        <td>휴게시간</td>
                                        <td>합계</td>
                                    </tr>
                                </thead>
                                <tbody>
                                    {After_Apply_State.map(list => {
                                        return (
                                            <tr className="Before_Table_Content_Container">
                                                <div
                                                    className="Delete_Data_Container"
                                                    onClick={() => Handle_Delete_Apply_Data(list, 'after')}
                                                >
                                                    <TbSquareRoundedMinus></TbSquareRoundedMinus>
                                                </div>
                                                <td id="stat_date" width="100px">
                                                    <div className="Date_Pickers_Pickers">
                                                        <DatePicker
                                                            selected={
                                                                new Date(moment(list.after_overtime_apply_info_date).format('YYYY-MM-DD'))
                                                            }
                                                            onChange={date => handleChangesClickDates(date, list, 'after')}
                                                            dateFormat={'yyyy-MM-dd'}
                                                            locale={ko}
                                                            excludeDates={After_Except_Date}
                                                            // minDate={new Date(clickedDateData.Start_Date)}
                                                        ></DatePicker>
                                                    </div>
                                                </td>

                                                <td width="100px">
                                                    <FormControl sx={{ m: 1, minWidth: 100 }} size="small">
                                                        <InputLabel id="demo-select-small">시작시간</InputLabel>
                                                        <Select
                                                            labelId="demo-select-small"
                                                            id="demo-select-small"
                                                            value={list.after_overtime_apply_info_start_time}
                                                            label="시작시간"
                                                            onChange={event =>
                                                                Before_Overtime_Time_Change(event, list, 'After_overtime_start_time')
                                                            }
                                                        >
                                                            {TimeClicksOptions.map(list => {
                                                                return (
                                                                    <MenuItem value={list.value} key={list.value}>
                                                                        {list.label}
                                                                    </MenuItem>
                                                                );
                                                            })}
                                                        </Select>
                                                    </FormControl>
                                                </td>
                                                <td width="100px">
                                                    <FormControl sx={{ m: 1, minWidth: 100 }} size="small">
                                                        <InputLabel id="demo-select-small">종료시간</InputLabel>
                                                        <Select
                                                            labelId="demo-select-small"
                                                            id="demo-select-small"
                                                            value={list.after_overtime_apply_info_end_time}
                                                            label="종료시간"
                                                            onChange={event =>
                                                                Before_Overtime_Time_Change(event, list, 'After_overtime_end_time')
                                                            }
                                                        >
                                                            {TimeClicksOptions.map(list => {
                                                                return (
                                                                    <MenuItem value={list.value} key={list.value}>
                                                                        {list.label}
                                                                    </MenuItem>
                                                                );
                                                            })}
                                                        </Select>
                                                    </FormControl>
                                                </td>
                                                <td width="100px">
                                                    <FormControl sx={{ m: 1, minWidth: 100 }} size="small">
                                                        <InputLabel id="demo-select-small">휴게시간</InputLabel>
                                                        <Select
                                                            labelId="demo-select-small"
                                                            id="demo-select-small"
                                                            value={list.after_overtime_apply_info_rest_time}
                                                            label="휴게시간"
                                                            onChange={event =>
                                                                Before_Overtime_Time_Change(event, list, 'After_overtime_rest_time')
                                                            }
                                                        >
                                                            {RestTimeClicksOptions.map(list => {
                                                                return (
                                                                    <MenuItem value={list.value} key={list.value}>
                                                                        {list.label}
                                                                    </MenuItem>
                                                                );
                                                            })}
                                                        </Select>
                                                    </FormControl>
                                                </td>
                                                <td width="50px">
                                                    <span className="sum_over_time" id="sum_over_time_monOver">
                                                        {list.after_overtime_apply_info_sum_time - list.after_overtime_apply_info_rest_time}{' '}
                                                    </span>
                                                    <span>시간</span>
                                                </td>

                                                <td className="reasontable">
                                                    <textarea
                                                        placeholder="사유"
                                                        value={list.after_overtime_apply_info_reason}
                                                        onChange={e => Handle_Change_Overtime_Reason(e, list, 'After')}
                                                    ></textarea>
                                                </td>
                                            </tr>
                                        );
                                    })}
                                    <tr>
                                        <td colSpan={9} style={{ textAlign: 'center' }}>
                                            <div>
                                                <button onClick={() => Handle_Add_After_Overtime()}>추가하기</button>
                                            </div>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        ) : (
                            <div>
                                <div>
                                    <button onClick={() => Handle_Add_After_Overtime()}>추가하기</button>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </ApplyUserSelectMainDivBox>
        </ApplyedUserSelectMainDivBox>
    );
};

export default ApplyUserSelect;

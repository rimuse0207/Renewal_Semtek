import React, { useState } from 'react';
import { ApplyUserSelectMainDivBox } from '../../../../../../Annual_Leave/AnnualLeaveContainer/AnnualLeaveContents/AnnualLeaveApply/AnnualLeaveApplyContainer/AnnualLeaveApplyContent/ApplyUserSelect/ApplyUserSelect';
import styled from 'styled-components';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { TimeClicksOptions, RestTimeClicksOptions } from './SelectTimeOptionData';
import uuid from 'react-uuid';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { ko } from 'date-fns/esm/locale';
import moment from 'moment';

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
`;

const ApplyUserSelect = () => {
    const [Before_Apply_State, setBefore_Apply_State] = useState([]);
    const [After_Apply_State, setAfter_Apply_State] = useState([]);

    const Handle_Add_Before_Overtime = () => {
        const Before_Datas = {
            before_overtime_apply_info_apply_keys: uuid(),
            before_overtime_apply_info_date: new Date(),
            before_overtime_apply_info_basic_start_time: '09:00',
            before_overtime_apply_info_basic_end_time: '18:00',
            before_overtime_apply_info_basic_rest_time: '1:00',
            before_overtime_apply_info_basic_sum_time: 8,
            before_overtime_apply_info_start_time: '18:00',
            before_overtime_apply_info_end_time: '18:00',
            before_overtime_apply_info_rest_time: '00:00',
            before_overtime_apply_info_night_time: 0,
            before_overtime_apply_info_sum_time: 0,
            before_overtime_apply_info_reason: '',
            before_overtime_apply_info_holiday_check: false,
        };

        setBefore_Apply_State(Before_Apply_State.concat(Before_Datas));
    };

    const Handle_Add_After_Overtime = () => {
        const After_Datas = {
            after_overtime_apply_info_apply_keys: uuid(),
            after_overtime_apply_info_date: new Date(),
            after_overtime_apply_info_basic_start_time: '09:00',
            after_overtime_apply_info_basic_end_time: '18:00',
            after_overtime_apply_info_basic_rest_time: '1:00',
            after_overtime_apply_info_basic_sum_time: 8,
            after_overtime_apply_info_start_time: '18:00',
            after_overtime_apply_info_end_time: '18:00',
            after_overtime_apply_info_rest_time: '00:00',
            after_overtime_apply_info_night_time: 0,
            after_overtime_apply_info_sum_time: 0,
            after_overtime_apply_info_reason: '',
            after_overtime_apply_info_holiday_check: false,
        };

        setAfter_Apply_State(After_Apply_State.concat(After_Datas));
    };

    const Before_Overtime_Time_Change = (e, data, Select_Menu) => {
        console.log(e, data);

        if (Select_Menu === 'basic_start_time') {
            const Change_Data = Before_Apply_State.map(list =>
                list.before_overtime_apply_info_apply_keys === data.before_overtime_apply_info_apply_keys &&
                list.before_overtime_apply_info_date === data.before_overtime_apply_info_date
                    ? { ...Before_Apply_State, before_overtime_apply_info_basic_start_time: e.target.value }
                    : list
            );
            setBefore_Apply_State(Change_Data);
        } else if (Select_Menu === 'basic_end_time') {
            const Change_Data = Before_Apply_State.map(list =>
                list.before_overtime_apply_info_apply_keys === data.before_overtime_apply_info_apply_keys &&
                list.before_overtime_apply_info_date === data.before_overtime_apply_info_date
                    ? { ...Before_Apply_State, before_overtime_apply_info_basic_end_time: e.target.value }
                    : list
            );
            setBefore_Apply_State(Change_Data);
        } else if (Select_Menu === 'overtime_start_time') {
            const Change_Data = Before_Apply_State.map(list =>
                list.before_overtime_apply_info_apply_keys === data.before_overtime_apply_info_apply_keys &&
                list.before_overtime_apply_info_date === data.before_overtime_apply_info_date
                    ? { ...Before_Apply_State, before_overtime_apply_info_start_time: e.target.value }
                    : list
            );
            setBefore_Apply_State(Change_Data);
        } else if (Select_Menu === 'overtime_end_time') {
            const Change_Data = Before_Apply_State.map(list =>
                list.before_overtime_apply_info_apply_keys === data.before_overtime_apply_info_apply_keys &&
                list.before_overtime_apply_info_date === data.before_overtime_apply_info_date
                    ? { ...Before_Apply_State, before_overtime_apply_info_end_time: e.target.value }
                    : list
            );
            setBefore_Apply_State(Change_Data);
        } else if (Select_Menu === 'overtime_rest_time') {
            const Change_Data = Before_Apply_State.map(list =>
                list.before_overtime_apply_info_apply_keys === data.before_overtime_apply_info_apply_keys &&
                list.before_overtime_apply_info_date === data.before_overtime_apply_info_date
                    ? { ...Before_Apply_State, before_overtime_apply_info_rest_time: e.target.value }
                    : list
            );
            setBefore_Apply_State(Change_Data);
        } else if (Select_Menu === 'After_start_time') {
            const Change_Data = After_Apply_State.map(list =>
                list.after_overtime_apply_info_apply_keys === data.after_overtime_apply_info_apply_keys &&
                list.after_overtime_apply_info_date === data.after_overtime_apply_info_date
                    ? { ...After_Apply_State, after_overtime_apply_info_basic_start_time: e.target.value }
                    : list
            );
            setAfter_Apply_State(Change_Data);
        } else if (Select_Menu === 'After_end_time') {
            const Change_Data = After_Apply_State.map(list =>
                list.after_overtime_apply_info_apply_keys === data.after_overtime_apply_info_apply_keys &&
                list.after_overtime_apply_info_date === data.after_overtime_apply_info_date
                    ? { ...After_Apply_State, after_overtime_apply_info_basic_end_time: e.target.value }
                    : list
            );
            setAfter_Apply_State(Change_Data);
        } else if (Select_Menu === 'After_overtime_start_time') {
            const Change_Data = After_Apply_State.map(list =>
                list.after_overtime_apply_info_apply_keys === data.after_overtime_apply_info_apply_keys &&
                list.after_overtime_apply_info_date === data.after_overtime_apply_info_date
                    ? { ...After_Apply_State, after_overtime_apply_info_start_time: e.target.value }
                    : list
            );
            setAfter_Apply_State(Change_Data);
        } else if (Select_Menu === 'After_overtime_end_time') {
            const Change_Data = After_Apply_State.map(list =>
                list.after_overtime_apply_info_apply_keys === data.after_overtime_apply_info_apply_keys &&
                list.after_overtime_apply_info_date === data.after_overtime_apply_info_date
                    ? { ...After_Apply_State, after_overtime_apply_info_end_time: e.target.value }
                    : list
            );
            setAfter_Apply_State(Change_Data);
        } else if (Select_Menu === 'After_overtime_rest_time') {
            const Change_Data = After_Apply_State.map(list =>
                list.after_overtime_apply_info_apply_keys === data.after_overtime_apply_info_apply_keys &&
                list.after_overtime_apply_info_date === data.after_overtime_apply_info_date
                    ? { ...After_Apply_State, after_overtime_apply_info_rest_time: e.target.value }
                    : list
            );
            setAfter_Apply_State(Change_Data);
        }
    };

    return (
        <ApplyedUserSelectMainDivBox>
            <ApplyUserSelectMainDivBox>
                <div className="PersonApplyContentUserSelectPageMain_UserSelectBox">
                    <div>
                        <div>
                            <h4>사전 신청</h4>
                        </div>
                    </div>
                    <div>
                        {Before_Apply_State.length > 0 ? (
                            <table className="Before_Overtime_Table_Container">
                                <thead>
                                    <tr className="testssBefore">
                                        <th rowSpan={2}>일자</th>
                                        <th colSpan={3}>소정 근로</th>
                                        <th colSpan={4}>연장 근무</th>

                                        <th rowSpan={2} className="OTSpace_OTReason_th">
                                            사유
                                        </th>
                                    </tr>
                                    <tr className="testssBefore">
                                        <td>시작시간</td>
                                        <td>종료시간</td>
                                        <td>합계</td>
                                        <td>시작시간</td>
                                        <td>종료시간</td>
                                        <td>휴게시간</td>
                                        <td>합계</td>
                                    </tr>
                                </thead>
                                <tbody>
                                    {Before_Apply_State.map(list => {
                                        return (
                                            <tr>
                                                <td id="stat_date" width="100px">
                                                    <div className="Date_Pickers_Pickers">
                                                        <DatePicker
                                                            selected={
                                                                new Date(moment(list.before_overtime_apply_info_date).format('YYYY-MM-DD'))
                                                            }
                                                            // onChange={date => handleEndClickDates(date)}
                                                            dateFormat={'yyyy-MM-dd'}
                                                            locale={ko}
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
                                                            value={list.before_overtime_apply_info_basic_start_time}
                                                            label="시작시간"
                                                            onChange={event => Before_Overtime_Time_Change(event, list, 'basic_start_time')}
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
                                                            value={list.before_overtime_apply_info_basic_end_time}
                                                            label="종료시간"
                                                            onChange={event => Before_Overtime_Time_Change(event, list, 'basic_end_time')}
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
                                                <td width="50px">
                                                    <span className="sum_time" id="sum_time_mon">
                                                        {list.before_overtime_apply_info_basic_sum_time}{' '}
                                                    </span>
                                                    <span>시간</span>
                                                </td>

                                                <td width="100px">
                                                    <FormControl sx={{ m: 1, minWidth: 100 }} size="small">
                                                        <InputLabel id="demo-select-small">시작시간</InputLabel>
                                                        <Select
                                                            labelId="demo-select-small"
                                                            id="demo-select-small"
                                                            value={list.before_overtime_apply_info_start_time}
                                                            label="시작시간"
                                                            onChange={event =>
                                                                Before_Overtime_Time_Change(event, list, 'overtime_start_time')
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
                                                            value={list.before_overtime_apply_info_end_time}
                                                            label="종료시간"
                                                            onChange={event =>
                                                                Before_Overtime_Time_Change(event, list, 'overtime_end_time')
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
                                                            value={list.before_overtime_apply_info_rest_time}
                                                            label="휴게시간"
                                                            onChange={event =>
                                                                Before_Overtime_Time_Change(event, list, 'overtime_rest_time')
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
                                                        {list.before_overtime_apply_info_sum_time}{' '}
                                                    </span>
                                                    <span>시간</span>
                                                </td>

                                                <td className="reasontable">
                                                    <textarea placeholder="사유"></textarea>
                                                </td>
                                            </tr>
                                        );
                                    })}
                                    <tr>
                                        <td colSpan={9} style={{ textAlign: 'center' }}>
                                            <div>
                                                <button onClick={() => Handle_Add_Before_Overtime()}>추가하기</button>
                                            </div>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        ) : (
                            <div>
                                <div>
                                    <button onClick={() => Handle_Add_Before_Overtime()}>추가하기</button>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </ApplyUserSelectMainDivBox>
            <ApplyUserSelectMainDivBox>
                <div className="PersonApplyContentUserSelectPageMain_UserSelectBox">
                    <div>
                        <div>
                            <h4>사후 신청</h4>
                        </div>
                    </div>
                    <div>
                        {After_Apply_State.length > 0 ? (
                            <table className="Before_Overtime_Table_Container After_Table_Container">
                                <thead>
                                    <tr className="testssBefore">
                                        <th rowSpan={2}>일자</th>
                                        <th colSpan={3}>소정근로</th>
                                        <th colSpan={4}>연장 근무</th>

                                        <th rowSpan={2} className="OTSpace_OTReason_th">
                                            사유
                                        </th>
                                    </tr>
                                    <tr className="testssBefore">
                                        <td>시작시간</td>
                                        <td>종료시간</td>
                                        <td>합계</td>
                                        <td>시작시간</td>
                                        <td>종료시간</td>
                                        <td>휴게시간</td>
                                        <td>합계</td>
                                    </tr>
                                </thead>
                                <tbody>
                                    {After_Apply_State.map(list => {
                                        return (
                                            <tr>
                                                <td id="stat_date" width="100px">
                                                    <div className="Date_Pickers_Pickers">
                                                        <DatePicker
                                                            selected={
                                                                new Date(moment(list.after_overtime_apply_info_date).format('YYYY-MM-DD'))
                                                            }
                                                            // onChange={date => handleEndClickDates(date)}
                                                            dateFormat={'yyyy-MM-dd'}
                                                            locale={ko}
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
                                                            value={list.after_overtime_apply_info_basic_start_time}
                                                            label="시작시간"
                                                            onChange={event => Before_Overtime_Time_Change(event, list, 'after_start_time')}
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
                                                            value={list.after_overtime_apply_info_basic_end_time}
                                                            label="종료시간"
                                                            onChange={event => Before_Overtime_Time_Change(event, list, 'after_end_time')}
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
                                                <td width="50px">
                                                    <span className="sum_time" id="sum_time_mon">
                                                        {list.after_overtime_apply_info_basic_sum_time}{' '}
                                                    </span>
                                                    <span>시간</span>
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
                                                        {list.after_overtime_apply_info_sum_time}{' '}
                                                    </span>
                                                    <span>시간</span>
                                                </td>

                                                <td className="reasontable">
                                                    <textarea placeholder="사유"></textarea>
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

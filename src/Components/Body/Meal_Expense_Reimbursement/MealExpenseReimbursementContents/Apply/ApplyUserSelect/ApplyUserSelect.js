import React, { useState } from 'react';
import styled from 'styled-components';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import uuid from 'react-uuid';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { ko } from 'date-fns/esm/locale';
import moment from 'moment';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { ApplyUserSelectMainDivBox } from '../../../../Annual_Leave/AnnualLeaveContainer/AnnualLeaveContents/AnnualLeaveApply/AnnualLeaveApplyContainer/AnnualLeaveApplyContent/ApplyUserSelect/ApplyUserSelect';
import { Meal_Charge_Apply_State_Func } from '../../../../../../Models/MealApplyReducer/MealApplyReducer';
import { Input } from '@mui/material';

const ApplyedUserSelectMainDivBox = styled.div`
    border-bottom: 2px solid black;
    padding-bottom: 20px;
    margin-bottom: 20px;

    .Before_Overtime_Table_Container {
        width: 100%;
        border-collapse: collapse;
        border: 1px solid lightgray;
        font-size: 0.8em;

        thead {
            text-align: center;
            background-color: #efefef;
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
    .FontSizeChange {
        width: 90%;
        height: 40px;

        input {
            padding-left: 10px;
            font-size: 0.8em;
        }
    }
`;

const ApplyUserSelect = () => {
    const dispatch = useDispatch();
    const Login_Info = useSelector(state => state.Login_Info_Reducer_State.Login_Info);
    const MealChargeApplyState = useSelector(state => state.MealChargeApplyReducerState.Meal_Charge_State);
    const [DivisionData, setDivisionData] = useState([
        { label: '중식', value: '중식' },
        { label: '석식', value: '석식' },
    ]);

    const Handle_Add_Meal_Overtime = () => {
        const InsertData = {
            key: uuid(),
            date: new Date(),
            division: '중식',
            spending: 0,
            calculate: '',
            place: '',
            location: '',
            etc: '',
        };

        dispatch(Meal_Charge_Apply_State_Func(MealChargeApplyState.concat(InsertData)));
    };

    const Meal_Charge_Division_Change = (e, data) => {
        const ChangeData = MealChargeApplyState.map((list, j) => (list.key === data.key ? { ...list, division: e.target.value } : list));

        dispatch(Meal_Charge_Apply_State_Func(ChangeData));
    };

    const handleChangesClickDates = (date, data) => {
        const ChangeData = MealChargeApplyState.map((list, j) => (list.key === data.key ? { ...list, date: date } : list));

        dispatch(Meal_Charge_Apply_State_Func(ChangeData));
    };

    const HandleChangeInputData = (e, data, selcet_menu) => {
        if (selcet_menu === 'money') {
            const ChangeData = MealChargeApplyState.map((list, j) =>
                list.key === data.key ? { ...list, spending: Number(e.target.value) } : list
            );

            dispatch(Meal_Charge_Apply_State_Func(ChangeData));
        } else if (selcet_menu === 'custom') {
            const ChangeData = MealChargeApplyState.map((list, j) => (list.key === data.key ? { ...list, place: e.target.value } : list));

            dispatch(Meal_Charge_Apply_State_Func(ChangeData));
        } else if (selcet_menu === 'location') {
            const ChangeData = MealChargeApplyState.map((list, j) =>
                list.key === data.key ? { ...list, location: e.target.value } : list
            );

            dispatch(Meal_Charge_Apply_State_Func(ChangeData));
        }
    };

    return (
        <ApplyedUserSelectMainDivBox>
            <ApplyUserSelectMainDivBox>
                <div className="PersonApplyContentUserSelectPageMain_UserSelectBox">
                    <div>
                        <div>
                            <h4>식대 신청</h4>
                        </div>
                    </div>
                    <div>
                        {MealChargeApplyState.length > 0 ? (
                            <table className="Before_Overtime_Table_Container">
                                <thead>
                                    <tr className="testssBefore">
                                        <th>날짜</th>
                                        <th>구분</th>
                                        <th>금액</th>
                                        <th>지역</th>
                                        <th>방문처</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {MealChargeApplyState.map(list => {
                                        return (
                                            <tr>
                                                <td id="stat_date" width="100px">
                                                    <div className="Date_Pickers_Pickers">
                                                        <DatePicker
                                                            selected={new Date(moment(list.date).format('YYYY-MM-DD'))}
                                                            onChange={date => handleChangesClickDates(date, list)}
                                                            dateFormat={'yyyy-MM-dd'}
                                                            locale={ko}
                                                            // excludeDates={Before_Except_Date}

                                                            // minDate={new Date(clickedDateData.Start_Date)}
                                                        ></DatePicker>
                                                    </div>
                                                </td>

                                                <td width="100px">
                                                    <FormControl sx={{ m: 1, minWidth: 100 }} size="small">
                                                        <InputLabel id="demo-select-small">구분</InputLabel>
                                                        <Select
                                                            labelId="demo-select-small"
                                                            id="demo-select-small"
                                                            value={list.division}
                                                            label="구분"
                                                            onChange={event => Meal_Charge_Division_Change(event, list)}
                                                        >
                                                            {DivisionData.map(list => {
                                                                return (
                                                                    <MenuItem value={list.value} key={list.value}>
                                                                        {list.label}
                                                                    </MenuItem>
                                                                );
                                                            })}
                                                        </Select>
                                                    </FormControl>
                                                </td>
                                                <td>
                                                    <Input
                                                        labelId="demo-Input-small"
                                                        id="demo-Input-small"
                                                        type="number"
                                                        placeholder="금액"
                                                        className="FontSizeChange"
                                                        onChange={e => HandleChangeInputData(e, list, 'money')}
                                                        value={list.spending}
                                                    ></Input>
                                                </td>
                                                <td>
                                                    <Input
                                                        className="FontSizeChange"
                                                        type="text"
                                                        placeholder="지역 ex) 이천,온양"
                                                        onChange={e => HandleChangeInputData(e, list, 'location')}
                                                        value={list.location}
                                                    ></Input>
                                                </td>
                                                <td>
                                                    <Input
                                                        className="FontSizeChange"
                                                        type="text"
                                                        placeholder="방문처 ex) SK하이닉스, 삼성전자"
                                                        onChange={e => HandleChangeInputData(e, list, 'custom')}
                                                        value={list.custom}
                                                    ></Input>
                                                </td>
                                            </tr>
                                        );
                                    })}
                                    <tr>
                                        <td colSpan={9} style={{ textAlign: 'center' }}>
                                            <div>
                                                <button onClick={() => Handle_Add_Meal_Overtime()}>추가하기</button>
                                            </div>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        ) : (
                            <div>
                                <div>
                                    <button onClick={() => Handle_Add_Meal_Overtime()}>추가하기</button>
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

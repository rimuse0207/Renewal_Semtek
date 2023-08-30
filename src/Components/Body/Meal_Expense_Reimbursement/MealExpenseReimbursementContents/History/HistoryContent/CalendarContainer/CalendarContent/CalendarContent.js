import React, { useState, useEffect } from 'react';
import moment from 'moment';
import { useDispatch, useSelector } from 'react-redux';
import { AnnualLeaveCalendarTableMainDivBox } from '../../../../../../Annual_Leave/AnnualLeaveContainer/AnnualLeaveContents/AnnualLeaveSelect/AnnualLeaveSelectContainer/AnnualLeaveSelectContent/AnnualLeaveCalendarContent/AnnualLeaveCalendarTable/AnnualLeaveCalendarTable';
import { Used_Meal_Charge_Data_Getting_Redux_Thunk } from '../../../../../../../../Models/Redux-Thunk/UsedMealChargeReduce';

const CalendarContent = ({ MonthDateData }) => {
    const dispatch = useDispatch();
    const [date, setdate] = useState(() => moment());
    const [getMoment, setGetMoment] = useState(moment());
    const Used_Meal_Charge_State = useSelector(state => state.UsedMealChargeState.Used_Meal_Charge_State.Used_Meal_Charge_Data);
    const Login_Info = useSelector(state => state.Login_Info_Reducer_State.Login_Info);
    // chalandar generate logic

    const today = moment(MonthDateData);
    const firstWeek = today.clone().startOf('month').week();
    const lastWeek = today.clone().endOf('month').week() === 1 ? 53 : today.clone().endOf('month').week();

    const Before_Overtime_Checking_Func = date => {
        const Find_Data = Used_Meal_Charge_State.findIndex(
            item => item.dates === moment(date).format('YYYY-MM-DD') && item.division === '중식'
        );

        if (Find_Data !== -1) {
            return (
                <div
                    className="Canlendar_Bar"
                    style={{
                        background: '#9933FF',
                        color: 'black',
                        fontWeight: 'bolder',
                        fontSize: '0.8em',
                        padding: '2px',
                        border: 'none',
                    }}
                >
                    <div style={{ color: '#fff' }}>
                        <span>( 식대 ) 중식 {Used_Meal_Charge_State[Find_Data].spending.toLocaleString('ko-KR')} 원</span>
                    </div>
                </div>
            );
        }
    };
    const After_Overtime_Checking_Func = date => {
        const Find_Data = Used_Meal_Charge_State.findIndex(
            item => item.dates === moment(date).format('YYYY-MM-DD') && item.division === '석식'
        );

        if (Find_Data !== -1) {
            return (
                <div
                    className="Canlendar_Bar"
                    style={{
                        background: '#996600',
                        color: 'black',
                        fontWeight: 'bolder',
                        fontSize: '0.8em',
                        padding: '2px',
                        border: 'none',
                    }}
                >
                    <div style={{ color: '#fff' }}>
                        <span>( 식대 ) 석식 {Used_Meal_Charge_State[Find_Data].spending.toLocaleString('ko-KR')} 원</span>
                    </div>
                </div>
            );
        }
    };

    const calendar = () => {
        let result = [];
        let week = firstWeek;
        for (week; week <= lastWeek; week++) {
            result = result.concat(
                <tr key={week} className="row">
                    {Array(7)
                        .fill(0)
                        // eslint-disable-next-line no-loop-func
                        .map((data, index) => {
                            let days = today.clone().startOf('year').week(week).startOf('week').add(index, 'day');

                            if (days.format('MM') !== today.format('MM')) {
                                return (
                                    <td key={index} className="Telecommuting_Table_nextMonth">
                                        <div className="Telecommuting_Table_dayNumber">
                                            <div style={{ paddingLeft: '5px' }}>{days.format('D')}</div>
                                            <div>{Before_Overtime_Checking_Func(days)}</div>
                                            <div>{After_Overtime_Checking_Func(days)}</div>
                                        </div>
                                    </td>
                                );
                            } else {
                                return (
                                    <td
                                        key={index}
                                        onClick={e => {
                                            if (e.target.className === 'Telecommuting_Table_dayNumber') {
                                            }
                                        }}
                                        className={
                                            moment().format('YYYY-MM-DD') === days.format('YYYY-MM-DD')
                                                ? 'Telecommuting_table_today'
                                                : 'Telecommuting_Table_nowMonth'
                                        }
                                    >
                                        <div className="Telecommuting_Table_dayNumber">
                                            <div style={{ paddingLeft: '5px' }}>{days.format('D')}</div>
                                            <div>{Before_Overtime_Checking_Func(days)}</div>
                                            <div>{After_Overtime_Checking_Func(days)}</div>
                                        </div>
                                    </td>
                                );
                            }
                        })}
                </tr>
            );
        }
        return result;
    };

    useEffect(() => {
        dispatch(Used_Meal_Charge_Data_Getting_Redux_Thunk(MonthDateData, Login_Info.id));
    }, [MonthDateData]);
    return (
        <div>
            <AnnualLeaveCalendarTableMainDivBox>
                <table>
                    <thead>
                        <tr>
                            {['일', '월', '화', '수', '목', '금', '토'].map(el => (
                                <th className="box" key={el}>
                                    <span className="text">{el}</span>
                                </th>
                            ))}
                        </tr>
                    </thead>
                    <tbody>{calendar()}</tbody>
                </table>
                <div style={{ marginTop: '50px', marginBottom: '50px' }}></div>
            </AnnualLeaveCalendarTableMainDivBox>
        </div>
    );
};

export default CalendarContent;

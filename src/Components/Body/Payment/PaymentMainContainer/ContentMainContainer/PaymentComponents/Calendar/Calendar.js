import React, { useEffect, useState } from 'react';
import moment from 'moment';
import { useSelector } from 'react-redux';
import { AnnualLeaveCalendarTableMainDivBox } from '../../../../../Annual_Leave/AnnualLeaveContainer/AnnualLeaveContents/AnnualLeaveSelect/AnnualLeaveSelectContainer/AnnualLeaveSelectContent/AnnualLeaveCalendarContent/AnnualLeaveCalendarTable/AnnualLeaveCalendarTable';
import { request } from '../../../../../../../API';

const Calendar = ({ SelectLeftHeaderInfo, MonthDateData, currentPageOn }) => {
    const Login_Info = useSelector(state => state.Login_Info_Reducer_State.Login_Info);
    const [Calenar_Search_Data, setCalenar_Search_Data] = useState([]);

    const Get_Payment_Overtime_Write_Data = async () => {
        try {
            const Get_Payment_Overtime_Write_Data_Axios = await request.get('/semtek/Get_Payment_Overtime_Write_Data', {
                params: {
                    SelectLeftHeaderInfo: SelectLeftHeaderInfo.value,
                    MonthDateData,
                    currentPageOn,
                    ID: Login_Info.id,
                },
            });

            setCalenar_Search_Data(Get_Payment_Overtime_Write_Data_Axios.data.Get_Payment_Overtime_Write_Data_Rows);
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        Get_Payment_Overtime_Write_Data();
    }, [SelectLeftHeaderInfo, MonthDateData, currentPageOn]);

    // chalandar generate logic

    const today = moment(MonthDateData);
    const firstWeek = today.clone().startOf('month').week();
    const lastWeek = today.clone().endOf('month').week() === 1 ? 53 : today.clone().endOf('month').week();

    const Before_Overtime_Checking_Func = (date, data) => {
        // const Find_Data = Calenar_Search_Data.findIndex(item => item.write_date === moment(date).format('YYYY-MM-DD'));

        if (data.write_date === moment(date).format('YYYY-MM-DD')) {
            const Checking_Payment = data.Review_Array.some(list => !list.overtime_review_info_accept_check)
                ? 'X'
                : data.Accept_Array.some(list => !list.overtime_accept_info_accept_check)
                ? 'X'
                : 'O';
            return (
                <div
                    className="Canlendar_Bar"
                    style={{
                        background: `${currentPageOn === 'BeforeOvertime' ? 'rgb(255, 255, 153)' : 'rgb(153, 204, 255)'}`,
                        color: 'black',
                        fontWeight: 'bolder',
                        fontSize: '0.8em',
                        padding: '2px',
                    }}
                >
                    <div>
                        <span>
                            ( {currentPageOn === 'BeforeOvertime' ? '사전OT' : '사후OT'} ) {data.name}{' '}
                            {data.real_sum_time - data.real_rest_time} 시간 {Checking_Payment}
                        </span>
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
                                            <div>
                                                {Calenar_Search_Data.map(list => {
                                                    return Before_Overtime_Checking_Func(days, list);
                                                })}
                                            </div>
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
                                            {Calenar_Search_Data.map(list => {
                                                return Before_Overtime_Checking_Func(days, list);
                                            })}
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

export default Calendar;

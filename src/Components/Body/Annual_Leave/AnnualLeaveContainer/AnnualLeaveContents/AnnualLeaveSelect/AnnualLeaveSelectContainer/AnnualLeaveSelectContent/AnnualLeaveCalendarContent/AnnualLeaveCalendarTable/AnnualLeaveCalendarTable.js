import React,{useState} from "react";
import styled from "styled-components";
import moment from 'moment';
import 'moment/locale/ko';

const AnnualLeaveCalendarTableMainDivBox = styled.div`
    table{width: 100%;
    border-top: 1px solid lightgray;
    border-collapse: collapse;
    th {
        background: #eff4fc;
        font-weight: 500;
        font-size: 0.9em;
        height: 40px !important;
    }
    th,
    td {
        border-bottom: 1px solid lightgray;
        border-left: 1px solid lightgray;
    }
    .row {
        height: 140px;
    }
    th:first-child,
    td:first-child {
        border-left: none;
    }
    .Telecommuting_Table_nextMonth {
        .Telecommuting_Table_dayNumber {
            color: #c9c9c9 !important;
        }

        background-color: #efefef;
    }
    .Telecommuting_Table_nowMonth,
    .Telecommuting_Table_nextMonth,
    .Telecommuting_table_today {
        width: 14%;
        position: relative;
        .Telecommuting_Table_dayNumber {
            position: absolute;
            top: 0;
            left: 0;
            font-size: 0.9em;
            color: #5b5a5a;
        }
    }
    .Telecommuting_table_today {
        /* border: 1.2px solid #619bf9; */
        background-color:skyblue;
        z-index: 100;
    }}
`
const AnnualLeaveCalendarTable = () => {
     const [date, setdate] = useState(() => moment());
    const [getMoment, setGetMoment] = useState(moment());

    // chalandar generate logic

    const today = getMoment;
    const firstWeek = today.clone().startOf('month').week();
    const lastWeek = today.clone().endOf('month').week() === 1 ? 53 : today.clone().endOf('month').week();

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
        </AnnualLeaveCalendarTableMainDivBox>
    )
}

export default AnnualLeaveCalendarTable;
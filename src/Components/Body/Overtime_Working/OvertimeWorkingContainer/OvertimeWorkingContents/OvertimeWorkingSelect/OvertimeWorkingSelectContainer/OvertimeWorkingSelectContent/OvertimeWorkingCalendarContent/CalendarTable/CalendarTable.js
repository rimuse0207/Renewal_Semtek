import React,{useState} from 'react';
import { AnnualLeaveCalendarTableMainDivBox } from '../../../../../../../../Annual_Leave/AnnualLeaveContainer/AnnualLeaveContents/AnnualLeaveSelect/AnnualLeaveSelectContainer/AnnualLeaveSelectContent/AnnualLeaveCalendarContent/AnnualLeaveCalendarTable/AnnualLeaveCalendarTable';
import moment from "moment";


const CalnedarTable = () => {
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
                <div style={{ marginTop: "50px", marginBottom:"50px"}}></div>
            </AnnualLeaveCalendarTableMainDivBox>
        </div>
    )
}

export default CalnedarTable;
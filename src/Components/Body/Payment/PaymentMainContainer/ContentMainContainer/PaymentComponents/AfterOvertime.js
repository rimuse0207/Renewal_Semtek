import React, { useEffect } from 'react';
import { HistoryTableMainDivBox } from '../../../../Overtime_Working/OvertimeWorkingContainer/OvertimeWorkingContents/OvertimeWorkingSelect/OvertimeWorkingSelectContainer/OvertimeWorkingSelectContent/OvertimeWorkingHistoryContent/HistoryTable/HistoryTable';
import { AnnualLeaveHistoryTableMainDivBox } from '../../../../Annual_Leave/AnnualLeaveContainer/AnnualLeaveContents/AnnualLeaveSelect/AnnualLeaveSelectContainer/AnnualLeaveSelectContent/AnnualLeaveHistoryContent/AnnualLeaveHistoryTable/AnnualLeaveHistoryTable';
import { request } from '../../../../../../API';
import { useSelector } from 'react-redux';
import { useState } from 'react';
import Table from './Table/Table';
import Calendar from './Calendar/Calendar';

const AfterOvertime = ({ DateData, StaticsNaviButton, currentPageOn }) => {
    const Login_Info = useSelector(state => state.Login_Info_Reducer_State.Login_Info);
    const SelectLeftHeaderInfo = useSelector(state => state.PaymentUserSelectReducerState.User_Select);
    const [Data, setData] = useState([]);

    const Getting_BeforeOvertime_Table_Data = async () => {
        try {
            const Getting_BeforeOvertime_Table_Data_Axios = await request.get('/semtek/Getting_BeforeOvertime_Table_Data', {
                params: {
                    SelectLeftHeaderInfo: SelectLeftHeaderInfo
                        ? SelectLeftHeaderInfo.value === 'ALL'
                            ? Login_Info.team
                            : SelectLeftHeaderInfo.value
                        : '',
                    ID: Login_Info.id,
                    DateData,
                    Teaml_Select_Check: SelectLeftHeaderInfo ? (SelectLeftHeaderInfo.value === 'ALL' ? true : false) : '',
                    currentPageOn,
                },
            });
            if (Getting_BeforeOvertime_Table_Data_Axios.data.dataSuccess) {
                setData(Getting_BeforeOvertime_Table_Data_Axios.data.Team_All_Data_Select_Rows);
            }
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        Getting_BeforeOvertime_Table_Data();
    }, [SelectLeftHeaderInfo, DateData, currentPageOn]);

    return (
        <div>
            {StaticsNaviButton === 'Table' ? (
                <Table
                    SelectLeftHeaderInfo={SelectLeftHeaderInfo}
                    Data={Data}
                    currentPageOn={currentPageOn}
                    setData={data => setData(data)}
                    Getting_BeforeOvertime_Table_Data={() => Getting_BeforeOvertime_Table_Data()}
                ></Table>
            ) : (
                <></>
            )}
            {StaticsNaviButton === 'Calendar' ? (
                <Calendar SelectLeftHeaderInfo={SelectLeftHeaderInfo} MonthDateData={DateData} currentPageOn={currentPageOn}></Calendar>
            ) : (
                <></>
            )}
        </div>
    );
};

export default AfterOvertime;

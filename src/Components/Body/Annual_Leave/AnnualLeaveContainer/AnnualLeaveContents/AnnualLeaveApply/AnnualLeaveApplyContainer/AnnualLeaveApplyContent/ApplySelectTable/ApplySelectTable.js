import React, { useEffect, useState } from 'react';
import moment from 'moment';
import { MdOutlineArrowBackIos, MdOutlineArrowForwardIos } from 'react-icons/md';
import 'moment/locale/ko';
import styled from "styled-components"
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import { ko } from 'date-fns/esm/locale';
import uuid from 'react-uuid'
import { TiDelete } from "react-icons/ti";
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { Vacation_Apply_State_Func } from '../../../../../../../../../Models/VacationApplyReducer/VacationApplyReducer';

const ApplySelectTableMainDivBox = styled.div`
margin-top:50px;
margin-bottom:50px;

.react-datepicker__calendar-icon{
      position: absolute;
    padding:0px;
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
                border: 0.5px solid lightgray;

                height: 45px;
                border-top: none;
                border-bottom: 0.5px solid lightgray;
                text-align: center;
                position:relative;
                .position_text{
                    position:absolute;
                    top:50%;
                    left:50%;
                    transform: translate(-50%, -50%);
                    width:100%;
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
                height: 90px;
                td {
                    /* :hover {
                        cursor: pointer;
                        background: #eff4fc;
                    } */
                }
            }
        }
    }


    .Select_Vacation_Lists{
        display:flex;
        
        .Date_Pickers_Container{
            border:1px solid lightgray;
            width:350px;
            height:45px;
            background-color:#eff4fc;
            display:flex;
            align-items:center;
            justify-content:space-around;
            font-size:1.1em;
            border-radius:5px;
            margin-right:10px;
            .Date_Pickers_Text{
                margin-left:10px;
            }
            .Date_Pickers_Pickers{
                height:100%;
                input{
                    font-size:1.3em;
                    font-weight:bolder;
                    height: 45px;
                    background: none;
                    border: none;
                    text-align:center;
                    :focus{
                        outline:none;
                    }
                    :hover{
                        cursor: pointer;
                    }
                }
            }
        }
        .Time_Pickers_Container{
            display:flex;
            height:45px;
            width:350px;
            justify-content:space-around;
            margin-top:5px;
            .Hour_Pickers_Container{
                width:49%;
                select{
                    width:100%;
                    height:100%;
                    font-size:1.3em;
                    border:1px solid lightgray;
                    border-radius:5px;
                    padding-left:10px;
                    option{
                        font-size:1.2em;
                    }
                }
            }
        }
    }
    .Vacation_Container{
        border-bottom:1px dashed lightgray;
        margin-top:10px;
        width:750px;
        padding-top:40px;
        padding-bottom:40px;
        
        .Type_Container{
            width:710px;
            height:45px;
            margin-bottom:10px;
            border-radius:5px;
            select{
                width:50%;
                height:100%;
                font-size:1.3em;
                text-align:center;
                font-weight:bolder;
                border:1px solid lightgray;
            }
            
        }
        position:relative;
        .Delete_Icons_Container{
            position:absolute;
            top:0px;
            right:0px;
            color:red;
            font-weight:bolder;
            font-size:1.3em;
            :hover{
                cursor: pointer;
            }
        }
       
        
    }

    .SelectedCehcking_Container{
        height:100%;
        div{
            height:50%;
        }
    }
    
`
const ApplySelectTable = () => {
    const dispatch = useDispatch();
    const clickedDateData = useSelector(state => state.VacationApplyReducerState.clickedDateData);
    const [GetData, setGetData] = useState(moment());
    const [Weekend_Day, setWeekend_Day] = useState([]);
    const [DateMonthCheck, setDateMonthCheck] = useState({
        FirstTableMonthLength: 0,
        FirstTableMonthDataCheck: false,
        FirstTableMonth: '',
        FirstTableData: [],
        SecondTableMonthLength: 17,
        SecondTableMonthDataCheck: true,
        SecondTableMonth: '',
        SecondTableData: [],
    });
    // const [clickedDateData, setClickedDateData] = useState([{
    //         keys: uuid(),
    //         date: moment(),
    //         datePlan: "연차 휴가",
    //         Start_Date:  moment(),
    //         End_Date:  moment(),
    //         Select_Days:1,
    //         Week_days: 1,
    //         Weekend_days: 0,
    //         Start_Time: "09:00",
    //         End_Time:"18:00"
    //     }]);
    
    useEffect(() => {
        CalcuDate();
    }, [GetData]);

    const CalcuDate = () => {
        let FirstData = [
            {
                date: GetData.clone(),
                dayFormat: GetData.clone().format('D'),
                weekFormat: GetData.clone().locale('ko').format('(dd)'),
                clickCheck: false,
                datePlan: '',
            },
        ];
        let SecondData = [];

        if (GetData.clone().format('YYYY-MM') !== GetData.clone().add(14, 'day').format('YYYY-MM')) {
            for (var i = 1; i < 15; i++) {
                if (GetData.clone().format('YYYY-MM') === GetData.clone().add(i, 'day').format('YYYY-MM')) {
                    FirstData.push({
                        date: GetData.clone().add(i, 'day'),
                        dayFormat: GetData.clone().add(i, 'day').format('D'),
                        weekFormat: GetData.clone().add(i, 'day').locale('ko').format('(dd)'),
                        clickCheck: false,
                        datePlan: '',
                    });
                } else {
                    SecondData.push({
                        date: GetData.clone().add(i, 'day'),
                        dayFormat: GetData.clone().add(i, 'day').format('D'),
                        weekFormat: GetData.clone().add(i, 'day').locale('ko').format('(dd)'),
                        clickCheck: false,
                        datePlan: '',
                    });
                }
            }
            setDateMonthCheck({
                FirstTableMonthLength: FirstData.length + 2,
                FirstTableMonthDataCheck: true,
                FirstTableMonth: GetData.format('YYYY-MM-DD'),
                FirstTableData: FirstData,
                SecondTableMonthLength: SecondData.length,
                SecondTableMonthDataCheck: true,
                SecondTableMonth: GetData.clone().add(14, 'day').format('YYYY-MM-DD'),
                SecondTableData: SecondData,
            });
        } else {
            SecondData.push({
                date: GetData.clone(),
                dayFormat: GetData.clone().format('D'),
                weekFormat: GetData.clone().locale('ko').format('(dd)'),
                clickCheck: false,
                datePlan: '',
            });
            for (var i = 1; i < 15; i++) {
                SecondData.push({
                    date: GetData.clone().add(i, 'day'),
                    dayFormat: GetData.clone().add(i, 'day').format('D'),
                    weekFormat: GetData.clone().add(i, 'day').locale('ko').format('(dd)'),
                    clickCheck: false,
                    datePlan: '',
                });
            }
            setDateMonthCheck({
                FirstTableMonthLength: 0,
                FirstTableMonthDataCheck: false,
                FirstTableMonth: '',
                FirstTableData: [],
                SecondTableMonthLength: 17,
                SecondTableMonthDataCheck: true,
                SecondTableMonth: GetData.clone().format('YYYY-MM'),
                SecondTableData: SecondData,
            });
        }
    };

    const handleMinusCalendar = () => {
        setGetData(GetData.clone().subtract(14, 'day'));
    };
    const handlePlusCalendar = () => {
        setGetData(GetData.clone().add(14, 'day'));
    };
    const handleClickOnDate = async () => {
        //연차 신청 데이터 추가
        const Show_Tables = {
            keys: uuid(),
            date: moment(),
            datePlan: "연차 휴가",
            Start_Date:  moment(),
            End_Date:  moment(),
            Select_Days:1,
            Week_days: 1,
            Weekend_days: 0,
            Start_Time: "09:00",
            End_Time:"18:00"
        }
        dispatch(Vacation_Apply_State_Func(clickedDateData.concat(Show_Tables)))
        
    };

    //종료날짜 변경 시 
    const handleEndClickDates = (date, list) => {
        const SelectDate = moment(moment(date).format("YYYY-MM-DD 23:59"));
        const SumDayCount = moment(SelectDate).diff(moment(list.Start_Date), 'days') + 1;
        const WeekDayCount = CalcDate(new Date(list.Start_Date), new Date(SelectDate)) - (list.Start_Time === "14:00" ? 0.5 : 0);
        const WeekendDayCount = SumDayCount - WeekDayCount - (list.Start_Time === "14:00" ? 0.5:0);

        
        const Change_Data = clickedDateData.map((item) => list.keys === item.keys ? { ...item, End_Date: moment(date).format("YYYY-MM-DD"), Week_days: WeekDayCount, Weekend_days: WeekendDayCount, Select_Days: SumDayCount, End_Time: "18:00" } : item);
        dispatch(Vacation_Apply_State_Func(Change_Data))
    }


    //시작날짜 변경 시 
    const handleStartClickDates = (date, list) => {
        
        const SelectDate = moment(moment(date).format("YYYY-MM-DD"))
        const SumDayCount = moment(list.End_Date).diff(SelectDate, 'days') + 1;
        const WeekDayCount = CalcDate(new Date(SelectDate), new Date(list.End_Date)) - (list.End_Time === "14:00" ? 0.5 : 0);
        const WeekendDayCount = SumDayCount - WeekDayCount - (list.End_Time === "14:00" ? 0.5 : 0);

        //선택한 날짜가 종료날짜랑 같은 경우
        if (moment(list.End_Date).isSame(SelectDate)) {

            const Change_Data = clickedDateData.map((item) => list.keys === item.keys ? { ...item, Start_Date: moment(date).format("YYYY-MM-DD"), Week_days: WeekDayCount, Weekend_days: WeekendDayCount, Select_Days: SumDayCount, Start_Time: "09:00" } : item);
            dispatch(Vacation_Apply_State_Func(Change_Data))
            
        }
        //선택한 날짜가 종료날짜보다 긴 경우
        else if (moment(list.End_Date).isBefore(SelectDate)) {
            
            const Change_Data = clickedDateData.map((item) => list.keys === item.keys ? { ...item, Start_Date: moment(date).format("YYYY-MM-DD"), End_Date: moment(date).format("YYYY-MM-DD"), Start_Time: "09:00" } : item)
            dispatch(Vacation_Apply_State_Func(Change_Data))
            
            
        } else {
        //선택한 날짜가 종료날짜보다 적은 경우            
            const Change_Data = clickedDateData.map((item) => list.keys === item.keys ? { ...item, Start_Date: moment(date).format("YYYY-MM-DD"), Week_days: WeekDayCount, Weekend_days: WeekendDayCount, Select_Days: SumDayCount, Start_Time: "09:00" } : item);
            dispatch(Vacation_Apply_State_Func(Change_Data))
            
        }   
    }

    //시작날짜의 시간 변경 시
    const handleChangeStartTime = (e,list) => {

        if (e.target.value === '09:00') {
            if (new Date(list.Start_Date).getDay() === 0 || new Date(list.Start_Date).getDay() === 6) {
                //선택 항목이 주말 일때
                const Change_Data = clickedDateData.map((item)=>list.keys === item.keys ? {...item,Start_Time:e.target.value,Weekend_days:item.Weekend_days+0.5}:item)
                dispatch(Vacation_Apply_State_Func(Change_Data))
            } else {
                //선택 항목이 평일 일때
                const Change_Data = clickedDateData.map((item) => list.keys === item.keys ? { ...item, Start_Time: e.target.value, Week_days: item.Week_days + 0.5 } : item);
                dispatch(Vacation_Apply_State_Func(Change_Data))
            }
            
        } else {
            if (new Date(list.Start_Date).getDay() === 0 || new Date(list.Start_Date).getDay() === 6) {
                //선택 항목이 주말 일때
                const Change_Data = clickedDateData.map((item) => list.keys === item.keys ? { ...item, Start_Time: e.target.value, Weekend_days: item.Weekend_days - 0.5 } : item);
                dispatch(Vacation_Apply_State_Func(Change_Data))
            } else {
                //선택 항목이 평일 일때
                const Change_Data = clickedDateData.map((item)=>list.keys === item.keys ? {...item,Start_Time:e.target.value,Week_days:item.Week_days-0.5}:item)
                dispatch(Vacation_Apply_State_Func(Change_Data))
            }
            
        }

        
    }

    //종료 날짜의 시간 변경 시
     const handleChangeEndTime = (e,list) => {

        if (e.target.value === '14:00') {
            if (new Date(list.End_Date).getDay() === 0 || new Date(list.End_Date).getDay() === 6) {
                //선택 항목이 주말 일때
                const Change_Data = clickedDateData.map((item)=>list.keys === item.keys ? {...item,End_Time:e.target.value,Weekend_days:item.Weekend_days-0.5}:item)
                dispatch(Vacation_Apply_State_Func(Change_Data))
            } else {
                //선택 항목이 평일 일때
                const Change_Data =clickedDateData.map((item)=>list.keys === item.keys ? {...item,End_Time:e.target.value,Week_days:item.Week_days-0.5}:item) 
                dispatch(Vacation_Apply_State_Func(Change_Data))
            }
            
        } else {
            if (new Date(list.End_Date).getDay() === 0 || new Date(list.End_Date).getDay() === 6) {
                //선택 항목이 주말 일때
                const Change_Data = clickedDateData.map((item)=>list.keys === item.keys ? {...item,End_Time:e.target.value,Weekend_days:item.Weekend_days+0.5}:item)
                dispatch(Vacation_Apply_State_Func(Change_Data))
            } else {
                //선택 항목이 평일 일때
                const Change_Data = clickedDateData.map((item)=>list.keys === item.keys ? {...item,End_Time:e.target.value,Week_days:item.Week_days+0.5}:item)
                dispatch(Vacation_Apply_State_Func(Change_Data))
            }
        }

        
    }



    const handleDeleteApplyData = (data) => {
        const Change_Data = (clickedDateData.filter(item => item.keys === data.keys ? "" : item))
        dispatch(Vacation_Apply_State_Func(Change_Data))
    }


    const CalcDate = (startDate,endDate) => {
        let count = 0;
        while (true) {
            var temp_date = startDate;
                if(temp_date.getTime() > endDate.getTime()) {
                    break;
                } else {
                    var tmp = temp_date.getDay();
                    if(tmp == 0 || tmp == 6) {
                        // 주말
                        console.log("주말");
                    } else {
                        // 평일
                        
                        if (!Weekend_Day.some(dates => String(dates.locdate) === moment(temp_date).format("YYYYMMDD"))) {
                            count++;             
                        } 
                        
                    }
                    temp_date.setDate(startDate.getDate() + 1); 
                }
        }
        return count;
    }


    //공공API 휴일정보 데이터 불러오기
//   const Weekenday_API = async () => {
         
//         const Weekenday_API_Axios = await axios.get(`http://apis.data.go.kr/B090041/openapi/service/SpcdeInfoService/getRestDeInfo`, {
//             params: {
//                 ServiceKey: "na+wV0c2FFwQNuFZEVLtdgtc6w86EKsTEoqWDkgE6kN8CZ349qgMdPGUNZNN+N7RB5uoB7rJyijsEqFANsD0iw==",
//                 pageNo: "1",
//                 numOfRows: "100",
//                 solYear: moment().format("YYYY"),
//             }
//         })
    
//         if (Weekenday_API_Axios.data) {
//             setWeekend_Day(Weekenday_API_Axios.data.response.body.items.item);
//         }
//     }

//     useEffect(() => {
//         Weekenday_API(); 
//     },[])


   

    return (
        <ApplySelectTableMainDivBox>
            <div className="PersonalApplyBodyConent_ApplyContents_CalendarTable">
                <div>
                    <table>
                        <thead></thead>
                        <tbody>
                            <tr>
                                <td className="PersonalApplyBodyConent_ApplyContents_CalendarTable_ArrowClick" rowSpan={4}>
                                    <MdOutlineArrowBackIos onClick={handleMinusCalendar}></MdOutlineArrowBackIos>
                                </td>
                                {DateMonthCheck.FirstTableMonthDataCheck ? (
                                    <th colSpan={DateMonthCheck.FirstTableMonthLength}>
                                        {moment(DateMonthCheck.FirstTableMonth).format('YYYY-MM')}
                                    </th>
                                ) : (
                                    <></>
                                )}
                                <th colSpan={DateMonthCheck.SecondTableMonthLength}>
                                    {moment(DateMonthCheck.SecondTableMonth).format('YYYY-MM')}
                                </th>
                                <td className="PersonalApplyBodyConent_ApplyContents_CalendarTable_ArrowClick" rowSpan={4}>
                                    <MdOutlineArrowForwardIos onClick={handlePlusCalendar}></MdOutlineArrowForwardIos>
                                </td>
                            </tr>
                            <tr>
                                <td style={{ border: 'none' }}></td>
                                <th>일자</th>
                                {DateMonthCheck.FirstTableMonthDataCheck ? (
                                    DateMonthCheck.FirstTableData.map((list, i) => {
                                        return (
                                            <td style={list.weekFormat === "(토)" ? { color: "blue" } : list.weekFormat === "(일)" ? { color: "red" } : {}}>
                                                <div>{list.dayFormat}</div>
                                                <div>{list.weekFormat}</div>
                                            </td>
                                        );
                                    })
                                ) : (
                                    <></>
                                )}
                                {DateMonthCheck.SecondTableMonthDataCheck ? (
                                    DateMonthCheck.SecondTableData.map((list, i) => {
                                        return (
                                            <td style={list.weekFormat === "(토)" ? { color: "blue" } : list.weekFormat === "(일)" ? { color: "red" } : {}}>
                                                <div>{list.dayFormat}</div>
                                                <div>{list.weekFormat}</div>
                                            </td>
                                        );
                                    })
                                ) : (
                                    <></>
                                )}
                            </tr>
                            <tr>
                                <td style={{ border: 'none' }}></td>
                                <th>휴가 계획</th>
                                {DateMonthCheck.FirstTableMonthDataCheck ? (
                                    DateMonthCheck.FirstTableData.map((list, i) => {
                                        return <td>
                                            {clickedDateData.map((item) => list.date.isBetween(item.Start_Date, item.End_Date, "day", "[]") ? <div className="">
                                                {list.weekFormat === "(토)" || list.weekFormat === "(일)"?"공휴일":  Weekend_Day.some(dates => String(dates.locdate) === moment(list.date).format("YYYYMMDD"))?"공휴일":item.datePlan}
                                            </div> : <></>)}
                                        </td>
                                    })
                                ) : (
                                    <></>
                                )}
                                {DateMonthCheck.SecondTableMonthDataCheck ? (
                                    DateMonthCheck.SecondTableData.map((list, i) => {
                                         return <td>
                                            {clickedDateData.map((item) => list.date.isBetween(item.Start_Date, item.End_Date, "day", "[]") ? <div className="position_text">
                                                {list.weekFormat === "(토)" || list.weekFormat === "(일)"?"공휴일":  Weekend_Day.some(dates => String(dates.locdate) === moment(list.date).format("YYYYMMDD"))?"공휴일":item.datePlan}
                                            </div> : <></>)}
                                        </td>
                                    })
                                ) : (
                                    <></>
                                )}
                            </tr>
                            <tr className="PersonalApplyBodyConent_ApplyContents_CalendarTable_ButtonTable">
                                <td style={{ border: 'none' }}></td>
                                <th>휴가선택</th>
                                {DateMonthCheck.FirstTableMonthDataCheck ? (
                                    DateMonthCheck.FirstTableData.map((list, i) => {
                                        return <td
                                            // onClick={e => handleClickOnDate(e, list)}
                                        >
                                            {clickedDateData.map((item) => list.date.isBetween(item.Start_Date, item.End_Date, "day", "[]") ? <div className="SelectedCehcking_Container">
                                                <div style={list.date.isSame(item.Start_Date, "day") ?  item.Start_Time === "09:00" ? { background: "#166" }:{} :{ background: "#166" } }></div>
                                                <div style={list.date.isSame(item.End_Date, "day") ? item.End_Time === "14:00"?{}:{background: "#166"}:{background: "#166"}}></div>
                                            </div> : <div ></div>)}
                                        </td>
                                    })
                                ) : (
                                    <></>
                                )}
                                {DateMonthCheck.SecondTableMonthDataCheck ? (
                                    DateMonthCheck.SecondTableData.map((list, i) => {
                                        return <td
                                            // onClick={e => handleClickOnDate(e, list)}
                                        >
                                            {clickedDateData.map((item) => list.date.isBetween(item.Start_Date, item.End_Date, "day", "[]") ? <div className="SelectedCehcking_Container">
                                                <div style={list.date.isSame(item.Start_Date, "day") ?  item.Start_Time === "09:00" ? { background: "#166" }:{} :{ background: "#166" } }></div>
                                                <div style={list.date.isSame(item.End_Date, "day") ? item.End_Time === "14:00"?{}:{background: "#166"}:{background: "#166"}}></div>
                                            </div> : <div></div>)}
                                        </td>
                                    })
                                ) : (
                                    <></>
                                )}
                                <td style={{ border: 'none' }}></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                
            
                <div>
                    <div>
                        <div>
                            <div style={{fontSize:"1.2em",lineHeight:"30px"}}>
                                <h4 style={{ marginTop: "20px" }}>휴가 신청
                                    {/* <button onClick={() => handleClickOnDate()}>추가 신청</button> */}
                                </h4>
                                <div>
                                    선택 일수 : <span style={{ color: 'skyblue' }}>{clickedDateData.reduce((pre,acc) => pre + acc.Select_Days,0)}일</span>
                                </div>
                                 <div>
                                    연차 차감 일수 : <span style={{ color: 'skyblue' }}>{clickedDateData.reduce((pre,acc) => pre + (acc.datePlan === "연차 휴가" || acc.datePlan === "병가"? acc.Week_days:0),0)}일</span>
                                </div>
                                <div>
                                    연차 미차감 일수 : <span style={{ color: 'skyblue' }}>{clickedDateData.reduce((pre,acc) => pre + (acc.datePlan === "연차 휴가" || acc.datePlan === "병가"? 0:acc.Week_days),0)}일</span>
                                </div>
                                  <div>
                                    공휴일 일수 : <span style={{ color: 'skyblue' }}>{clickedDateData.reduce((pre,acc) => pre + acc.Weekend_days,0)}일</span>
                                </div>
                                
                            </div>
                        </div>
                        {clickedDateData.map((list, i) => {
                            return (
                                <div className="Vacation_Container" key={list.keys}>
                                    <div className="Type_Container">
                                        <select value={list.datePlan} onChange={(e)=>dispatch(Vacation_Apply_State_Func(clickedDateData.map((item)=>item.keys === list.keys ? {...item,datePlan:e.target.value}:item)))}>
                                            <option value="연차 휴가">연차 휴가</option>
                                            <option value="보건 휴가">보건 휴가</option>
                                            <option value="공가">공가</option>
                                            <option value="병가">병가</option>
                                            <option value="경조 휴가">경조 휴가</option>
                                            <option value="훈련">훈련</option>
                                            <option value="교육">교육</option>
                                       </select>
                                    </div>
                                    <div className="Select_Vacation_Lists">
                                        <div >
                                            <div className="Date_Pickers_Container">
                                                <div className="Date_Pickers_Text">시작날짜</div>
                                                <div className="Date_Pickers_Pickers">
                                                    <DatePicker selected={new Date(list.Start_Date)}
                                                        onChange={(date) => handleStartClickDates(date,list) }
                                                        dateFormat={"yyyy-MM-dd"}
                                                        locale={ko}
                                                        
                                                    ></DatePicker>
                                                </div>
                                            </div>
                                            <div className="Time_Pickers_Container">
                                                <div className="Hour_Pickers_Container">
                                                    <select value={list.Start_Time} onChange={(e) => {
                                                        handleChangeStartTime(e,list);
                                                    }}>
                                                        <option value="09:00">09시 </option>
                                                        <option value="14:00">14시 </option>
                                                    </select>
                                                </div>
                                                <div className="Hour_Pickers_Container">
                                                    <select>
                                                        <option>00분</option>
                                                    </select>
                                                </div>
                                            </div>
                                    </div>
                                    <div className="Select_Vacation_Lists">
                                        <div >
                                            <div className="Date_Pickers_Container">
                                                <div className="Date_Pickers_Text">종료날짜</div>
                                                <div className="Date_Pickers_Pickers">
                                                    <DatePicker selected={new Date(list.End_Date)}
                                                        onChange={(date)=>handleEndClickDates(date,list)}
                                                            dateFormat={"yyyy-MM-dd"}
                                                            locale={ko}
                                                            minDate={new Date(list.Start_Date)}
                                                    ></DatePicker>
                                                </div>
                                            </div>
                                            <div className="Time_Pickers_Container">
                                                <div className="Hour_Pickers_Container">
                                                        <select value={list.End_Time} onChange={(e) => {
                                                            handleChangeEndTime(e,list)
                                                    }}>
                                                             <option value="14:00">14시 </option>
                                                            <option value="18:00">18시 </option>
                                                    </select>
                                                </div>
                                                <div className="Hour_Pickers_Container">
                                                    <select>
                                                        <option>00분</option>
                                                    </select>
                                                </div>
                                            </div>
                                    </div>
                                    </div>
                                    <div className="Delete_Icons_Container" onClick={()=>{handleDeleteApplyData(list)}}>
                                        <TiDelete></TiDelete>
                                    </div>
                                </div>
                                    
                                </div>
                                
                            );
                        })}
                    </div>
                </div>
                
            </div>
        </ApplySelectTableMainDivBox>
    )
}
export default ApplySelectTable;
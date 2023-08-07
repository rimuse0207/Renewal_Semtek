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
import ApplyShowTitle from "./ApplyShowTitle";
import { useDispatch, useSelector } from 'react-redux';
import { Vacation_Apply_State_Func } from '../../../../../../../../../Models/VacationApplyReducer/VacationApplyReducer';
import { request } from '../../../../../../../../../API';
import {Vacation_Calendar_Data_Getting_Redux_Thunk, Vacation_Menu_Select_Checked} from "../../../../../../../../../Models/Redux-Thunk/VacataionCalendarReduce"


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
        position:relative;
        .Now_Checked{
            height:100%;
            background: #166;
            position:relative;
             .Select_Menu{
                position:absolute;
                width:110px;
                 top: 50%;
                left: 60%;
                transform: translate(-40%, -50%);
                background-color:#fff;
                z-index:100;
                li{
                        border: 1px solid gray;
                        padding: 5px;
                        font-weight:bolder;
                        :hover{
                            cursor:pointer;
                            background-color:darkgray;
                            color:#fff;
                        }
                }
                
            }
        }
        .Nonthing{
            width:100%;
            height:100%;
            position:relative;
            :hover{
                cursor: pointer;
            }
            .Select_Menu{
                position:absolute;
                width:110px;
                 top: 50%;
                left: 60%;
                transform: translate(-40%, -50%);
                background-color:#fff;
                z-index:100;
                li{
                        border: 1px solid gray;
                        padding: 5px;
                        font-weight:bolder;
                        :hover{
                            cursor:pointer;
                            background-color:darkgray;
                            color:#fff;
                        }
                }
                
            }
        }

        .Selected_Menu_IsOpen{
            position:absolute;
            bottom:0px;
            left:0px;
            border:1px solid gray;
            width:130px;
            text-align:start;
            background-color:#fff;
            z-index:100;
            li{
                padding:5px;
                border:1px solid lightgray;
                background-color:#fff;
                :hover{
                    cursor: pointer;
                    background-color:darkgray;
                    color:#fff;
                }
            }
        }
        
    }
    
`
const ApplySelectTable = () => {
    const dispatch = useDispatch();
    const Login_Info = useSelector((state) => state.Login_Info_Reducer_State.Login_Info);
    const clickedDateData = useSelector(state => state.VacationApplyReducerState.clickedDateData);
    const Vacation_Date_Data = useSelector((state) => state.VacationCalendarState.Vacation_Calendar_State.Vacation_Date_Data);

    const [GetData, setGetData] = useState(moment());
   
    const handleMinusCalendar = () => {
        setGetData(GetData.clone().subtract(7, 'day'));
    };
    const handlePlusCalendar = () => {
        setGetData(GetData.clone().add(7, 'day'));
    };

    useEffect(() => {
        dispatch(Vacation_Calendar_Data_Getting_Redux_Thunk(GetData));
    },[GetData])


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


    


    //월날짜 표시용
    const Handle_First_Header_Month_Date_Count = () => {
        const monthlyCounts = {};
      
        if (Vacation_Date_Data) {
            Vacation_Date_Data.forEach(item => {
                const month = item.dateMonthFormat // 날짜에서 월 추출
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
            
       
    }


    //달력 클릭 시, 메뉴 생성
    const Handle_Selected_Menu_Open = (e, Selected, Selected_Data) => {
        e.stopPropagation();
        if (Selected === 'Morning') {
            const Menu_Selected_Checked = Vacation_Date_Data.map((list)=>list.dateFormat === Selected_Data.dateFormat ? {...list,Morinig_selected_menu_isChecking:true,Afternoon_selected_menu_isChecking:false}:{...list,Morinig_selected_menu_isChecking:false,Afternoon_selected_menu_isChecking:false})


            dispatch(Vacation_Menu_Select_Checked(Menu_Selected_Checked));
        } else if (Selected === "Afternoon") {
            const Menu_Selected_Checked = Vacation_Date_Data.map((list)=>list.dateFormat === Selected_Data.dateFormat ? {...list,Afternoon_selected_menu_isChecking:true,Morinig_selected_menu_isChecking:false}:{...list,Morinig_selected_menu_isChecking:false,Afternoon_selected_menu_isChecking:false})


            dispatch(Vacation_Menu_Select_Checked(Menu_Selected_Checked));
        } else {
             const Menu_Selected_Checked = Vacation_Date_Data.map((list)=> list ? {...list,Morinig_selected_menu_isChecking:false,Afternoon_selected_menu_isChecking:false}:{})

            dispatch(Vacation_Menu_Select_Checked(Menu_Selected_Checked));
        }
    }

  

    const End_Date_Setting_Func = (e, Selected, Selected_Data) => {
        e.stopPropagation();
        if (Selected === "Morning") {
            ///종료날짜가 시작 날짜보다 적을 때
            if (moment(clickedDateData.Start_Date).isAfter(moment(Selected_Data.dateFormat), 'day')) {
                const Change_Data = {
                    ...clickedDateData,
                        Start_Date: Selected_Data.dateFormat,
                        Start_Time: "09:00",
                        End_Date:Selected_Data.dateFormat,
                        End_Time: "14:00",
                };
                Vacation_Calendar_State_Change_Fun(Change_Data);
            } else if (moment(clickedDateData.Start_Date).isBefore(moment(Selected_Data.dateFormat), 'day')) {
                /// 시작날짜가 종료 날짜보다 클때 데이터 초기화 및 재 설정
                  const Change_Data = {
                    ...clickedDateData,
                        End_Date: Selected_Data.dateFormat,
                        End_Time: "14:00",
                };
                Vacation_Calendar_State_Change_Fun(Change_Data);
            } else {
                 const Change_Data = {
                    ...clickedDateData,
                        End_Date: Selected_Data.dateFormat,
                        End_Time: "14:00",
                };
                Vacation_Calendar_State_Change_Fun(Change_Data);
            }

        } else if (Selected === "Afternoon") {
            //종룍날짜가 시작 날짜보다 클때
            if (moment(clickedDateData.Start_Date).isAfter(moment(Selected_Data.dateFormat), 'day')) {
                    const Change_Data = {
                        ...clickedDateData,
                            Start_Date: Selected_Data.dateFormat,
                            Start_Time: "09:00",
                            End_Date:Selected_Data.dateFormat,
                            End_Time: "18:00",
                    };
                    Vacation_Calendar_State_Change_Fun(Change_Data);
            }
            else if (moment(clickedDateData.Start_Date).isBefore(moment(Selected_Data.dateFormat), 'day')) {
                /// 시작날짜가 종료 날짜보다 클때 데이터 초기화 및 재 설정
                  const Change_Data = {
                    ...clickedDateData,
                        End_Date: Selected_Data.dateFormat,
                        End_Time: "18:00",
                };
                Vacation_Calendar_State_Change_Fun(Change_Data);
            }else {
                 const Change_Data = {
                    ...clickedDateData,
                        End_Date: Selected_Data.dateFormat,
                        End_Time: "18:00",
                };
                Vacation_Calendar_State_Change_Fun(Change_Data);
            }
        }
    }

    const Start_Date_Setting_Func = (e, Selected, Selected_Data) => {
        e.stopPropagation();
        if (Selected === "Morning") {
            if (moment(Selected_Data.dateFormat).isAfter(moment(clickedDateData.End_Date), 'day')) {
                /// 시작날짜가 종료날짜보다 클때 종료날짜 초기화
                 const Change_Data = {
                    ...clickedDateData,
                        Start_Date: Selected_Data.dateFormat,
                        Start_Time: "09:00",
                        End_Date:Selected_Data.dateFormat,
                        End_Time: "14:00",
                };
                Vacation_Calendar_State_Change_Fun(Change_Data);
            } else if (moment(Selected_Data.dateFormat).isBefore(moment(clickedDateData.End_Date), 'day')) {
                /// 시작날짜가 종료 날짜보다 작을때 데이터 초기화 및 재 설정
                  const Change_Data = {
                    ...clickedDateData,
                        Start_Date: Selected_Data.dateFormat,
                        Start_Time: "09:00",
                };
                Vacation_Calendar_State_Change_Fun(Change_Data);
            } else {
                    const Change_Data = {
                    ...clickedDateData,
                        Start_Date: Selected_Data.dateFormat,
                        Start_Time: "09:00",
                };
                Vacation_Calendar_State_Change_Fun(Change_Data);
            }
        } else if (Selected === "Afternoon") {
              if (moment(Selected_Data.dateFormat).isAfter(moment(clickedDateData.End_Date), 'day')) {
                /// 시작날짜가 종료날짜보다 클때 종료날짜 초기화
                 const Change_Data = {
                    ...clickedDateData,
                        Start_Date: Selected_Data.dateFormat,
                        Start_Time: "14:00",
                        End_Date:Selected_Data.dateFormat,
                        End_Time: "18:00",
                };
                Vacation_Calendar_State_Change_Fun(Change_Data);
            } else if (moment(Selected_Data.dateFormat).isBefore(moment(clickedDateData.End_Date), 'day')) {
                /// 시작날짜가 종료 날짜보다 작을때 데이터 초기화 및 재 설정
                  const Change_Data = {
                    ...clickedDateData,
                        Start_Date: Selected_Data.dateFormat,
                        Start_Time: "14:00",
                };
                Vacation_Calendar_State_Change_Fun(Change_Data);
            } else {
                    const Change_Data = {
                    ...clickedDateData,
                        Start_Date: Selected_Data.dateFormat,
                        Start_Time: "14:00",
                        End_Time: "18:00",
                };
                Vacation_Calendar_State_Change_Fun(Change_Data);
            }
        }
    }

 const Vacation_Calendar_State_Change_Fun = (Change_Data) => {
        
        const daysBetween = [];
        let currentDate = moment(Change_Data.Start_Date).clone();

        while (currentDate.isSameOrBefore(moment(Change_Data.End_Date))) {
                daysBetween.push(currentDate.format('YYYY-MM-DD'));
                 currentDate.add(1, 'days');
        }

         const Menu_Selected_Checked = Vacation_Date_Data.map((list) => {
                    if (daysBetween.includes(list.dateFormat)) {
                        //특정 날짜 안에 있는지 확인
                        if (moment(list.dateFormat).isSame(moment(Change_Data.End_Date).format("YYYY-MM-DD"))) {
                            ///종료 날짜의 오후 체크 인지 아닌지 확인 
                            if (list.holiday_Check) {
                                //공휴일 일때는 숫자만 체크
                                if (Change_Data.End_Time === "14:00") {
                                    //오전 반차 인경우 오후 해제처리
                                         return { ...list, Afternoon_selected_menu_isChecking: false, Morinig_selected_menu_isChecking: false, Morning_clickCheck: false, Morning_Count: 0.5,Afternoon_clickCheck:false,Afternoon_Count :0}
                                } else {
                                         return { ...list, Afternoon_selected_menu_isChecking: false, Morinig_selected_menu_isChecking: false, Morning_clickCheck: false, Morning_Count: 0.5,Afternoon_clickCheck:false,Afternoon_Count :0.5}
                                }
                            } else {
                                if (Change_Data.End_Time === "14:00") {
                                    //오전 반차 인경우 오후 해제처리
                                         return { ...list, Afternoon_selected_menu_isChecking: false, Morinig_selected_menu_isChecking: false, Morning_clickCheck: true, Morning_Count: 0.5,Afternoon_clickCheck:false,Afternoon_Count :0 }
                                } else {
                                       return { ...list, Afternoon_selected_menu_isChecking: false, Morinig_selected_menu_isChecking: false, Morning_clickCheck: true, Morning_Count: 0.5,Afternoon_clickCheck:true,Afternoon_Count :0.5 }
                                }
                            }
                            
                        } else if (moment(list.dateFormat).isSame(moment(Change_Data.Start_Date).format("YYYY-MM-DD"))) {
                             if (list.holiday_Check) {
                                //공휴일 일때는 숫자만 체크
                                if (Change_Data.Start_Time === "14:00") {
                                    //오전 반차 인경우 오후 해제처리
                                         return { ...list, Afternoon_selected_menu_isChecking: false, Morinig_selected_menu_isChecking: false, Morning_clickCheck: false, Morning_Count: 0,Afternoon_clickCheck:false,Afternoon_Count :0}
                                } else {
                                         return { ...list, Afternoon_selected_menu_isChecking: false, Morinig_selected_menu_isChecking: false, Morning_clickCheck: false, Morning_Count: 0.5,Afternoon_clickCheck:false,Afternoon_Count :0.5}
                                }
                            } else {
                                if (Change_Data.Start_Time === "14:00") {
                                    //오전 반차 인경우 오후 해제처리
                                         return { ...list, Afternoon_selected_menu_isChecking: false, Morinig_selected_menu_isChecking: false, Morning_clickCheck: false, Morning_Count: 0,Afternoon_clickCheck:true,Afternoon_Count :0.5 }
                                } else {
                                       return { ...list, Afternoon_selected_menu_isChecking: false, Morinig_selected_menu_isChecking: false, Morning_clickCheck: true, Morning_Count: 0.5,Afternoon_clickCheck:true,Afternoon_Count :0.5 }
                                }
                            }
                        }
                        else if (list.holiday_Check) {
                            //공휴일  일때는 숫자만 카운트
                            return { ...list, Afternoon_selected_menu_isChecking: false, Morinig_selected_menu_isChecking: false, Morning_clickCheck: false, Morning_Count: 0.5,Afternoon_clickCheck:false,Afternoon_Count :0.5}
                        } else {
                            //공휴일 아닐땐 색칠 및 카운트
                            return { ...list, Afternoon_selected_menu_isChecking: false, Morinig_selected_menu_isChecking: false, Morning_clickCheck: true, Morning_Count: 0.5,Afternoon_clickCheck:true,Afternoon_Count :0.5 }
                        }
                    } else {
                        //아무것도 아닐때 초기화
                        return { ...list, Afternoon_selected_menu_isChecking: false, Morinig_selected_menu_isChecking: false, Morning_clickCheck: false, Morning_Count: 0,Afternoon_clickCheck:false,Afternoon_Count :0}   
                    }
                   
                })
                dispatch(Vacation_Menu_Select_Checked(Menu_Selected_Checked));
                const Weekend_Days_Count = Weekend_Days_Count_Func(Menu_Selected_Checked);
                const Selected_Days_Count = Selected_Days_Count_Func(Menu_Selected_Checked);
                Selected_ClickedChange_Data(moment(Change_Data.Start_Date),Change_Data.Start_Time,moment(Change_Data.End_Date),Change_Data.End_Time,Weekend_Days_Count,Selected_Days_Count)
    }

    //날짜 변경에 따른 캘린더 수정 함수
    const Selected_ClickedChange_Data = (Start_Date,Start_Time,End_Date,End_Time,Weekend_days,Select_Days) => {
         const Change_Data = {
                ...clickedDateData,
                Start_Date: Start_Date,
                Start_Time: Start_Time,
                End_Date:End_Date,
                End_Time: End_Time,
                Weekend_days: Weekend_days,
                Select_Days:Select_Days
                
            };
            dispatch(Vacation_Apply_State_Func(Change_Data));
    }
   
    // 공휴일 갯수 확인
    const Weekend_Days_Count_Func = (Menu_Selected_Checked) => {
        return Menu_Selected_Checked.reduce((accumulator, currentValue) => {
                                if (currentValue.holiday_Check) {
                                    return accumulator + currentValue.Morning_Count+ currentValue.Afternoon_Count;
                                } else {
                                    return accumulator;
                                }
                                }, 0);
    }
    // 연차 사용 확인
    const Selected_Days_Count_Func = (Menu_Selected_Checked) => {
        return Menu_Selected_Checked.reduce((accumulator, currentValue) => {
                                if (!currentValue.holiday_Check) {
                                    return accumulator + currentValue.Morning_Count+ currentValue.Afternoon_Count;
                                } else {
                                    return accumulator;
                                }
                                }, 0);
    }


    return (
        <ApplySelectTableMainDivBox>
            <div className="PersonalApplyBodyConent_ApplyContents_CalendarTable">
                <div>
                    <table >
                        <thead></thead>
                        <tbody>
                            <tr>
                                <td className="PersonalApplyBodyConent_ApplyContents_CalendarTable_ArrowClick" rowSpan={5}>
                                    <MdOutlineArrowBackIos onClick={handleMinusCalendar}></MdOutlineArrowBackIos>
                                </td>
                                {Handle_First_Header_Month_Date_Count().map((list, j) => {
                                    return <th colSpan={list.count+2}>{ list.month}</th>
                                })}
                                <td className="PersonalApplyBodyConent_ApplyContents_CalendarTable_ArrowClick" rowSpan={5}>
                                    <MdOutlineArrowForwardIos onClick={handlePlusCalendar}></MdOutlineArrowForwardIos>
                                </td>
                            </tr>
                            <tr>
                                <td style={{ border: 'none' }}></td>
                                <th >일자</th>
                                {Vacation_Date_Data.map((list) => {
                                    return <td style={list.weekFormat === "토" ? { color: "blue" } : list.weekFormat === "일" ? { color: "red" } : {}}>
                                                <div>{list.dayFormat}</div>
                                                <div>({list.weekFormat})</div>
                                            </td>
                                })}
                            </tr>
                            <tr>
                                <td style={{ border: 'none' }}></td>
                                <th>휴가 계획</th>
                                {Vacation_Date_Data.map((list) => {
                                    return <td >
                                                <div className="position_text">{list.datePlan}</div>
                                            </td>
                                })}
                            </tr>
                            <tr className="PersonalApplyBodyConent_ApplyContents_CalendarTable_ButtonTable">
                                <td style={{ border: 'none' }}></td>
                                <th >오전<br/> 휴가선택</th>
                                {Vacation_Date_Data.map((list) => {
                                    return <td >
                                        <div className="SelectedCehcking_Container">
                                            {list.holiday_Check || list.Morning_disabled ?
                                                <div style={{ background: "gray", height: "100%", opacity: "0.1" }} onClick={(e)=>Handle_Selected_Menu_Open(e,"Disabled")}></div> : 
                                                list.Morning_clickCheck ?
                                                    <div className="Now_Checked" onClick={(e)=>Handle_Selected_Menu_Open(e,"Morning",list)} >
                                                           { list.Morinig_selected_menu_isChecking ?<ul className="Select_Menu">
                                                            <li onClick={(e)=>Start_Date_Setting_Func(e,"Morning",list)}>시작날짜로 선택</li>
                                                            <li onClick={(e)=>End_Date_Setting_Func(e,"Morning",list)}>종료날짜로 선택</li>
                                                        </ul>:<></>}
                                                    </div> :
                                                    <div className="Nonthing" onClick={(e)=>Handle_Selected_Menu_Open(e,"Morning",list)}>
                                                        { list.Morinig_selected_menu_isChecking ?<ul className="Select_Menu">
                                                            <li onClick={(e)=>Start_Date_Setting_Func(e,"Morning",list)}>시작날짜로 선택</li>
                                                            <li onClick={(e)=>End_Date_Setting_Func(e,"Morning",list)}>종료날짜로 선택</li>
                                                        </ul>:<></>}
                                                        
                                                    </div>
                                                }
                                            </div>
                                            </td>
                                })}
                                <td style={{ border: 'none' }}></td>
                            </tr>
                            <tr className="PersonalApplyBodyConent_ApplyContents_CalendarTable_ButtonTable">
                                <td style={{ border: 'none' }}></td>
                                <th >오후<br/> 휴가선택</th>
                                {Vacation_Date_Data.map((list) => {
                                    return <td >
                                        <div className="SelectedCehcking_Container">
                                            {list.holiday_Check || list.Afternoon_disabled ?
                                                <div style={{ background: "gray", height: "100%", opacity: "0.1" }} onClick={(e)=>Handle_Selected_Menu_Open(e,"Disabled")}></div> : list.Afternoon_clickCheck ?
                                                    <div className="Now_Checked" onClick={(e)=>Handle_Selected_Menu_Open(e,"Afternoon",list)}>
                                                         { list.Afternoon_selected_menu_isChecking ?<ul className="Select_Menu">
                                                            <li onClick={(e)=>Start_Date_Setting_Func(e,"Afternoon",list)}>시작날짜로 선택</li>
                                                            <li onClick={(e)=>End_Date_Setting_Func(e,"Afternoon",list)}>종료날짜로 선택</li>
                                                        </ul>:<></>}
                                                    </div> :  <div className="Nonthing" onClick={(e)=>Handle_Selected_Menu_Open(e,"Afternoon",list)}>
                                                        { list.Afternoon_selected_menu_isChecking ?<ul className="Select_Menu">
                                                            <li onClick={(e)=>Start_Date_Setting_Func(e,"Afternoon",list)}>시작날짜로 선택</li>
                                                            <li onClick={(e)=>End_Date_Setting_Func(e,"Afternoon",list)}>종료날짜로 선택</li>
                                                        </ul>:<></>}
                                                        
                                                    </div>}
                                                </div>
                                            </td>
                                })}
                             
                                <td style={{ border: 'none' }}></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                
            
                <div>
                    <div>
                        {/* <ApplyShowTitle clickedDateData={clickedDateData}></ApplyShowTitle> */}

                      
                                <div className="Vacation_Container" key={clickedDateData.keys}>
                                    <div className="Type_Container">
                                <select value={clickedDateData.datePlan}
                                    onChange={(e) => dispatch(Vacation_Apply_State_Func({ ...clickedDateData, datePlan: e.target.value }))}>
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
                                                    <DatePicker selected={new Date(clickedDateData.Start_Date)}
                                                        // onChange={(date) => handleStartClickDates(date,clickedDateData) }
                                                        dateFormat={"yyyy-MM-dd"}
                                                        locale={ko}
                                                        
                                                    ></DatePicker>
                                                </div>
                                            </div>
                                            <div className="Time_Pickers_Container">
                                                <div className="Hour_Pickers_Container">
                                                    <select value={clickedDateData.Start_Time} onChange={(e) => {
                                                        // handleChangeStartTime(e,clickedDateData);
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
                                                    <DatePicker selected={new Date(clickedDateData.End_Date)}
                                                        // onChange={(date)=>handleEndClickDates(date,clickedDateData)}
                                                            dateFormat={"yyyy-MM-dd"}
                                                            locale={ko}
                                                            minDate={new Date(clickedDateData.Start_Date)}
                                                    ></DatePicker>
                                                </div>
                                            </div>
                                            <div className="Time_Pickers_Container">
                                                <div className="Hour_Pickers_Container">
                                                        <select value={clickedDateData.End_Time} onChange={(e) => {
                                                            // handleChangeEndTime(e,clickedDateData)
                                                    }}>
                                                        <option value="09:00">09시 </option>
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
                                    
                                </div>
                                    
                                </div>
                                
                        
                    </div>
                </div>
                
            </div>
        </ApplySelectTableMainDivBox>
    )
}
export default ApplySelectTable;
import React, { useEffect, useState } from 'react';
import moment from 'moment';
import { MdOutlineArrowBackIos, MdOutlineArrowForwardIos } from 'react-icons/md';
import 'moment/locale/ko';
import styled from 'styled-components';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import uuid from 'react-uuid';
import { useDispatch, useSelector } from 'react-redux';
import {
    Meal_Charge_Calendar_Data_Getting_Redux_Thunk,
    Meal_Charge_Menu_Select_Checked,
} from '../../../../../../Models/Redux-Thunk/MealChargeCalendarReduce';
import { Meal_Charge_Apply_State_Func } from '../../../../../../Models/MealApplyReducer/MealApplyReducer';

const ApplySelectTableMainDivBox = styled.div`
    margin-top: 50px;
    margin-bottom: 50px;

    .react-datepicker__calendar-icon {
        position: absolute;
        padding: 0px;
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
                width: 9%;
                border: 0.5px solid lightgray;

                height: 45px;
                border-top: none;
                border-bottom: 0.5px solid lightgray;
                text-align: center;
                position: relative;
                .position_text {
                    position: absolute;
                    top: 50%;
                    left: 50%;
                    transform: translate(-50%, -50%);
                    width: 100%;
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

    .Select_Vacation_Lists {
        display: flex;

        .Date_Pickers_Container {
            border: 1px solid lightgray;
            width: 350px;
            height: 45px;
            background-color: #eff4fc;
            display: flex;
            align-items: center;
            justify-content: space-around;
            font-size: 1.1em;
            border-radius: 5px;
            margin-right: 10px;
            .Date_Pickers_Text {
                margin-left: 10px;
            }
            .Date_Pickers_Pickers {
                height: 100%;
                input {
                    font-size: 1.3em;
                    font-weight: bolder;
                    height: 45px;
                    background: none;
                    border: none;
                    text-align: center;
                    :focus {
                        outline: none;
                    }
                    :hover {
                        cursor: pointer;
                    }
                }
            }
        }
        .Time_Pickers_Container {
            display: flex;
            height: 45px;
            width: 350px;
            justify-content: space-around;
            margin-top: 5px;
            .Hour_Pickers_Container {
                width: 49%;
                select {
                    width: 100%;
                    height: 100%;
                    font-size: 1.3em;
                    border: 1px solid lightgray;
                    border-radius: 5px;
                    padding-left: 10px;
                    option {
                        font-size: 1.2em;
                    }
                }
            }
        }
    }
    .Vacation_Container {
        border-bottom: 1px dashed lightgray;
        margin-top: 10px;
        width: 750px;
        padding-top: 40px;
        padding-bottom: 40px;

        .Type_Container {
            width: 710px;
            height: 45px;
            margin-bottom: 10px;
            border-radius: 5px;
            select {
                width: 50%;
                height: 100%;
                font-size: 1.3em;
                text-align: center;
                font-weight: bolder;
                border: 1px solid lightgray;
            }
        }
        position: relative;
        .Delete_Icons_Container {
            position: absolute;
            top: 0px;
            right: 0px;
            color: red;
            font-weight: bolder;
            font-size: 1.3em;
            :hover {
                cursor: pointer;
            }
        }
    }

    .SelectedCehcking_Container {
        height: 100%;
        position: relative;

        .Now_Checked_Container_Before {
            background: rgb(255, 255, 153);
            width: 100%;
            height: 100%;
            display: flex;
            flex-flow: wrap;
            justify-content: center;
            align-items: center;
            font-weight: bolder;
        }
        .Now_Checked_Container_After {
            background: rgb(153, 204, 255);
            width: 100%;
            height: 100%;
            display: flex;
            flex-flow: wrap;
            justify-content: center;
            align-items: center;
            font-weight: bolder;
        }

        .Now_Checked {
            height: 100%;
            background: #166;
            position: relative;
            .Select_Menu {
                position: absolute;
                width: 110px;
                top: 50%;
                left: 60%;
                transform: translate(-40%, -50%);
                background-color: #fff;
                z-index: 100;
                li {
                    border: 1px solid gray;
                    padding: 5px;
                    font-weight: bolder;
                    :hover {
                        cursor: pointer;
                        background-color: darkgray;
                        color: #fff;
                    }
                }
            }
        }
        .Nonthing {
            width: 100%;
            height: 100%;
            position: relative;
            :hover {
                cursor: pointer;
            }
            .Select_Menu {
                position: absolute;
                width: 110px;
                top: 50%;
                left: 60%;
                transform: translate(-40%, -50%);
                background-color: #fff;
                z-index: 100;
                li {
                    border: 1px solid gray;
                    padding: 5px;
                    font-weight: bolder;
                    :hover {
                        cursor: pointer;
                        background-color: darkgray;
                        color: #fff;
                    }
                }
            }
        }

        .Selected_Menu_IsOpen {
            position: absolute;
            bottom: 0px;
            left: 0px;
            border: 1px solid gray;
            width: 130px;
            text-align: start;
            background-color: #fff;
            z-index: 100;
            li {
                padding: 5px;
                border: 1px solid lightgray;
                background-color: #fff;
                :hover {
                    cursor: pointer;
                    background-color: darkgray;
                    color: #fff;
                }
            }
        }
    }
    .Menu_Open_Container {
        width: 100%;
        height: 100%;
        position: relative;
        .Select_Menu {
            position: absolute;
            top: 50%;
            left: 0;
            transform: translate(0%, -50%);
            border: 1px solid gray;
            width: 130px;
            text-align: start;
            background-color: #fff;
            z-index: 100;
            li {
                padding: 5px;
                border: 1px solid lightgray;
                background-color: #fff;
                :hover {
                    cursor: pointer;
                    background-color: darkgray;
                    color: #fff;
                }
            }
        }
    }

    .Food_Charge_Data_Already_Container {
        background-color: #efefef;
        width: 100%;
        height: 100%;
        font-weight: bolder;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-flow: wrap;
        font-size: 0.9em;
    }
    .Now_Selected_Container {
        background-color: #ccccff;
        width: 100%;
        height: 100%;
    }
`;
const ApplySelectTable = () => {
    const dispatch = useDispatch();
    const Login_Info = useSelector(state => state.Login_Info_Reducer_State.Login_Info);
    const MealChargeApplyState = useSelector(state => state.MealChargeApplyReducerState.Meal_Charge_State);
    const Meal_Charge_Date_Data = useSelector(state => state.MealChargeCalendarState.Meal_Charge_Calendar_State.Meal_Charge_Date_Data);

    const [GetData, setGetData] = useState(moment());
    const handleMinusCalendar = () => {
        setGetData(GetData.clone().subtract(5, 'day'));
    };
    const handlePlusCalendar = () => {
        setGetData(GetData.clone().add(5, 'day'));
    };

    const Handle_Selected_Menu_Open = (e, Select_Menu, data) => {
        e.stopPropagation();
        if (Select_Menu === 'Lunch') {
            const Menu_Open_Data = Meal_Charge_Date_Data.map(list =>
                list.dateFormat === data.dateFormat
                    ? { ...list, Lunch_FoodCharge_Menu_Open_Checking: true, Dinner_FoodCharge_Menu_Open_Checking: false }
                    : { ...list, Lunch_FoodCharge_Menu_Open_Checking: false, Dinner_FoodCharge_Menu_Open_Checking: false }
            );
            dispatch(Meal_Charge_Menu_Select_Checked(Menu_Open_Data));
        } else {
            const Menu_Open_Data = Meal_Charge_Date_Data.map(list =>
                list.dateFormat === data.dateFormat
                    ? { ...list, Lunch_FoodCharge_Menu_Open_Checking: false, Dinner_FoodCharge_Menu_Open_Checking: true }
                    : { ...list, Lunch_FoodCharge_Menu_Open_Checking: false, Dinner_FoodCharge_Menu_Open_Checking: false }
            );
            dispatch(Meal_Charge_Menu_Select_Checked(Menu_Open_Data));
        }
    };
    const Add_Meal_Charge_Date_Setting_Func = (e, Select_Menu, data) => {
        e.stopPropagation();
        const InsertData = {
            key: uuid(),
            date: new Date(data.date),
            division: Select_Menu === 'Lunch' ? '중식' : '석식',
            spending: 0,
            calculate: '',
            place: '',
            location: '',
            etc: '',
        };

        if (Select_Menu === 'Lunch') {
            dispatch(Meal_Charge_Apply_State_Func(MealChargeApplyState.concat(InsertData)));
            const Menu_Open_Data = Meal_Charge_Date_Data.map(list =>
                list.dateFormat === data.dateFormat
                    ? { ...list, Lunch_FoodCharge_Menu_Open_Checking: false, Dinner_FoodCharge_Menu_Open_Checking: false }
                    : { ...list, Lunch_FoodCharge_Menu_Open_Checking: false, Dinner_FoodCharge_Menu_Open_Checking: false }
            );
            dispatch(Meal_Charge_Menu_Select_Checked(Menu_Open_Data));
        } else {
            dispatch(Meal_Charge_Apply_State_Func(MealChargeApplyState.concat(InsertData)));
            const Menu_Open_Data = Meal_Charge_Date_Data.map(list =>
                list.dateFormat === data.dateFormat
                    ? { ...list, Lunch_FoodCharge_Menu_Open_Checking: false, Dinner_FoodCharge_Menu_Open_Checking: false }
                    : { ...list, Lunch_FoodCharge_Menu_Open_Checking: false, Dinner_FoodCharge_Menu_Open_Checking: false }
            );
            dispatch(Meal_Charge_Menu_Select_Checked(Menu_Open_Data));
        }
    };

    const Handle_Delete_Menus = e => {
        e.stopPropagation();
        const Menu_Cloase_Data = Meal_Charge_Date_Data.map(list =>
            list ? { ...list, Lunch_FoodCharge_Menu_Open_Checking: false, Dinner_FoodCharge_Menu_Open_Checking: false } : ''
        );
        dispatch(Meal_Charge_Menu_Select_Checked(Menu_Cloase_Data));
    };

    const Food_Charge_Calcul_Func = (data, Select_Menu, Menu_Checking) => {
        if (Select_Menu === 'Lunch') {
            const Find_Indexs = MealChargeApplyState.findIndex(
                item => moment(item.date).format('YYYY-MM-DD') === data.dateFormat && item.division === '중식'
            );
            if (Find_Indexs !== -1) {
                return (
                    <div className="Now_Selected_Container">
                        <div>{MealChargeApplyState[Find_Indexs].spending.toLocaleString('ko-KR')} 원</div>
                        <div>{MealChargeApplyState[Find_Indexs].location}</div>
                        <div>{MealChargeApplyState[Find_Indexs].place}</div>
                    </div>
                );
            } else {
                return (
                    <div className="Menu_Open_Container" onClick={e => Handle_Selected_Menu_Open(e, Select_Menu, data)}>
                        {Menu_Checking ? (
                            <ul className="Select_Menu">
                                <li onClick={e => Add_Meal_Charge_Date_Setting_Func(e, Select_Menu, data)}>중식 식대 추가</li>
                            </ul>
                        ) : (
                            <></>
                        )}
                    </div>
                );
            }
        } else {
            const Find_Indexs = MealChargeApplyState.findIndex(
                item => moment(item.date).format('YYYY-MM-DD') === data.dateFormat && item.division === '석식'
            );
            if (Find_Indexs !== -1) {
                return (
                    <div className="Now_Selected_Container">
                        <div>{MealChargeApplyState[Find_Indexs].spending.toLocaleString('ko-KR')} 원</div>
                        <div>{MealChargeApplyState[Find_Indexs].location}</div>
                        <div>{MealChargeApplyState[Find_Indexs].place}</div>
                    </div>
                );
            } else {
                return (
                    <div className="Menu_Open_Container" onClick={e => Handle_Selected_Menu_Open(e, Select_Menu, data)}>
                        {Menu_Checking ? (
                            <ul className="Select_Menu">
                                <li onClick={e => Add_Meal_Charge_Date_Setting_Func(e, Select_Menu, data)}>석식 식대 추가</li>
                            </ul>
                        ) : (
                            <></>
                        )}
                    </div>
                );
            }
        }
    };

    useEffect(() => {
        dispatch(Meal_Charge_Calendar_Data_Getting_Redux_Thunk(GetData, Login_Info.id));
    }, [GetData]);

    //월날짜 표시용
    const Handle_First_Header_Month_Date_Count = () => {
        const monthlyCounts = {};

        if (Meal_Charge_Date_Data) {
            Meal_Charge_Date_Data.forEach(item => {
                const month = item.dateMonthFormat; // 날짜에서 월 추출
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
    };
    return (
        <ApplySelectTableMainDivBox onClick={e => Handle_Delete_Menus(e)}>
            <div className="PersonalApplyBodyConent_ApplyContents_CalendarTable">
                <div>
                    <table>
                        <thead></thead>
                        <tbody>
                            <tr>
                                <td
                                    className="PersonalApplyBodyConent_ApplyContents_CalendarTable_ArrowClick"
                                    rowSpan={7}
                                    onClick={() => handleMinusCalendar()}
                                >
                                    <MdOutlineArrowBackIos></MdOutlineArrowBackIos>
                                </td>
                                {Handle_First_Header_Month_Date_Count().map((list, j) => {
                                    return (
                                        <th colSpan={list.count + 2} key={list.month}>
                                            {list.month}
                                        </th>
                                    );
                                })}
                                <td
                                    className="PersonalApplyBodyConent_ApplyContents_CalendarTable_ArrowClick"
                                    rowSpan={7}
                                    onClick={() => handlePlusCalendar()}
                                >
                                    <MdOutlineArrowForwardIos></MdOutlineArrowForwardIos>
                                </td>
                            </tr>

                            <tr>
                                <th colSpan={2}>일자</th>
                                {Meal_Charge_Date_Data.map(list => {
                                    return (
                                        <td
                                            key={list.dayFormat}
                                            style={
                                                list.weekFormat === '토'
                                                    ? { color: 'blue' }
                                                    : list.weekFormat === '일'
                                                    ? { color: 'red' }
                                                    : list.holiday_Check
                                                    ? { color: 'red' }
                                                    : {}
                                            }
                                        >
                                            <div>{list.dayFormat}</div>
                                            <div>({list.weekFormat})</div>
                                        </td>
                                    );
                                })}
                            </tr>
                            <tr>
                                <th colSpan={2}>계획표</th>
                                {Meal_Charge_Date_Data.map(list => {
                                    return (
                                        <td key={list.dayFormat}>
                                            <div>{list.datePlan}</div>
                                        </td>
                                    );
                                })}
                            </tr>
                            <tr className="PersonalApplyBodyConent_ApplyContents_CalendarTable_ButtonTable">
                                <th colSpan={2}>중식</th>
                                {Meal_Charge_Date_Data.map(list => {
                                    return (
                                        <td key={list.dayFormat}>
                                            <div className="SelectedCehcking_Container">
                                                {list.Lunch_FoodCharge.checked ? (
                                                    <div className="Food_Charge_Data_Already_Container" style={{ flexFlow: 'column' }}>
                                                        <div>{list.Lunch_FoodCharge.spending.toLocaleString('ko-KR')} 원</div>
                                                        <div>{list.Lunch_FoodCharge.place}</div>
                                                        <div>{list.Lunch_FoodCharge.location}</div>
                                                    </div>
                                                ) : (
                                                    Food_Charge_Calcul_Func(list, 'Lunch', list.Lunch_FoodCharge_Menu_Open_Checking)
                                                )}
                                            </div>
                                        </td>
                                    );
                                })}
                            </tr>
                            <tr className="PersonalApplyBodyConent_ApplyContents_CalendarTable_ButtonTable">
                                <th colSpan={2}>석식</th>
                                {Meal_Charge_Date_Data.map(list => {
                                    return (
                                        <td key={list.dayFormat}>
                                            <div className="SelectedCehcking_Container">
                                                {list.Dinner_FoodCharge.checked ? (
                                                    <div className="Food_Charge_Data_Already_Container" style={{ flexFlow: 'column' }}>
                                                        <div>{list.Dinner_FoodCharge.spending.toLocaleString('ko-KR')} 원</div>
                                                        <div>{list.Dinner_FoodCharge.place}</div>
                                                        <div>{list.Dinner_FoodCharge.location}</div>
                                                    </div>
                                                ) : (
                                                    Food_Charge_Calcul_Func(list, 'Dinner', list.Dinner_FoodCharge_Menu_Open_Checking)
                                                )}
                                            </div>
                                        </td>
                                    );
                                })}
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </ApplySelectTableMainDivBox>
    );
};
export default ApplySelectTable;

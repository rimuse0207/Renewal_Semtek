import React, { useEffect, useState } from 'react';
import moment from 'moment';
import { MdOutlineArrowBackIos, MdOutlineArrowForwardIos } from 'react-icons/md';
import 'moment/locale/ko';
import styled from "styled-components"

const ApplySelectTableMainDivBox = styled.div`
margin-top:50px;
margin-bottom:50px;

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
                    :hover {
                        cursor: pointer;
                        background: #eff4fc;
                    }
                }
            }
        }
    }
`
const ApplySelectTable = () => {
     const [GetData, setGetData] = useState(moment());
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
    const [clickedDateData, setClickedDateData] = useState([]);
    useEffect(() => {
        CalcuDate();
        console.log(DateMonthCheck);
    }, [GetData]);

    useEffect(() => {}, [DateMonthCheck]);

    const CalcuDate = () => {
        let FirstData = [
            {
                date: GetData.clone(),
                dayFormat: GetData.clone().format('D'),
                weekFormat: GetData.clone().locale('ko').format('(dd)'),
                clickCheck: false,
                datePlan: '자율출근제',
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
                        datePlan: '자율출근제',
                    });
                } else {
                    SecondData.push({
                        date: GetData.clone().add(i, 'day'),
                        dayFormat: GetData.clone().add(i, 'day').format('D'),
                        weekFormat: GetData.clone().add(i, 'day').locale('ko').format('(dd)'),
                        clickCheck: false,
                        datePlan: '자율출근제',
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
                datePlan: '자율출근제',
            });
            for (var i = 1; i < 15; i++) {
                SecondData.push({
                    date: GetData.clone().add(i, 'day'),
                    dayFormat: GetData.clone().add(i, 'day').format('D'),
                    weekFormat: GetData.clone().add(i, 'day').locale('ko').format('(dd)'),
                    clickCheck: false,
                    datePlan: '자율출근제',
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

    // const clicksCheck = () => {
    //     const getData = [];
    //     for (var i = 0; i < DateMonthCheck.FirstTableData.length; i++) {
    //         if (DateMonthCheck.FirstTableData[i].clickCheck) {
    //             getData.push(DateMonthCheck.FirstTableData[i]);
    //         }
    //     }
    //     for (var i = 0; i < DateMonthCheck.SecondTableData.length; i++) {
    //         if (DateMonthCheck.SecondTableData[i].clickCheck) {
    //             getData.push(DateMonthCheck.SecondTableData[i]);
    //         }
    //     }
    //     setClickedDateData(getData);
    //     console.log(getData);
    // };

    const handleMinusCalendar = () => {
        setGetData(GetData.clone().subtract(14, 'day'));
    };
    const handlePlusCalendar = () => {
        setGetData(GetData.clone().add(14, 'day'));
    };
    const handleClickOnDate = async (e, data) => {
        console.log(e);
        console.log(data);
        console.log(data.date);
        const a = DateMonthCheck.FirstTableData.map((list, i) =>
            moment(list.date).format('YYYY-MM-DD') === moment(data.date).format('YYYY-MM-DD') ? { ...list, clickCheck: true } : list
        );

        const b = DateMonthCheck.SecondTableData.map((list, i) =>
            moment(list.date).format('YYYY-MM-DD') === moment(data.date).format('YYYY-MM-DD') ? { ...list, clickCheck: true } : list
        );
        console.log('bbbb', b);

        setDateMonthCheck({
            ...DateMonthCheck,
            FirstTableData: a,
            SecondTableData: b,
        });

        setClickedDateData(clickedDateData.concat(data));
    };
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
                                            <td>
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
                                            <td>
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
                                <th>근무계획</th>
                                {DateMonthCheck.FirstTableMonthDataCheck ? (
                                    DateMonthCheck.FirstTableData.map((list, i) => {
                                        return <td>{list.datePlan}</td>;
                                    })
                                ) : (
                                    <></>
                                )}
                                {DateMonthCheck.SecondTableMonthDataCheck ? (
                                    DateMonthCheck.SecondTableData.map((list, i) => {
                                        return <td>{list.datePlan}</td>;
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
                                        let a = false;
                                        for (var q = 0; q < clickedDateData.length; q++) {
                                            if (
                                                moment(clickedDateData[q].date).format('YYYY-MM-DD') ===
                                                moment(list.date).format('YYYY-MM-DD')
                                            ) {
                                                a = true;
                                            }
                                        }
                                        return (
                                            <td style={a ? { background: '#166' } : {}} onClick={e => handleClickOnDate(e, list)}>
                                                {list.clickCheck ? <div></div> : <div></div>}
                                            </td>
                                        );
                                    })
                                ) : (
                                    <></>
                                )}
                                {DateMonthCheck.SecondTableMonthDataCheck ? (
                                    DateMonthCheck.SecondTableData.map((list, i) => {
                                        let a = false;
                                        for (var q = 0; q < clickedDateData.length; q++) {
                                            if (
                                                moment(clickedDateData[q].date).format('YYYY-MM-DD') ===
                                                moment(list.date).format('YYYY-MM-DD')
                                            ) {
                                                a = true;
                                            }
                                        }
                                        return (
                                            <td style={a ? { background: '#166' } : {}} onClick={e => handleClickOnDate(e, list)}>
                                                {list.clickCheck ? <div></div> : <div></div>}
                                            </td>
                                        );
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
                            <div>
                                <h4>휴가 신청</h4>
                                <div>
                                    선택일수 <span style={{ color: 'skyblue' }}>{clickedDateData.length}일</span>
                                </div>
                            </div>
                        </div>
                        {clickedDateData.map((list, i) => {
                            return (
                                <div>
                                    <span>{list.date.format('YYYY-MM-DD')}</span>
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
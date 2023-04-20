import React,{useState,useEffect} from "react";
import styled from "styled-components";
import moment from 'moment';
import { IoIosArrowDown } from 'react-icons/io';
import { BsArrowUpCircle, BsArrowDownCircle } from 'react-icons/bs';
import 'moment/locale/ko';

const HomeClockStatusMainPageMainDivBox = styled.div`
    margin-top: 20px;
    .Open_WorkingStatus_Container{
        margin-top:20px;
    }
    .WorkStatusClicksMenuFloat {
        margin-bottom: 20px;
        ::after {
            display: block;
            clear: both;
            content: '';
        }
        .WorkStatusClicksMenuLeft {
            float: left;
            border-right: 1px solid lightgray;
            width: 50%;
            text-align: center;
            .WorkStatusClicksMenuLeft_icons {
                font-size: 2em;
                svg {
                    color: #2985db;
                }
            }
        }
        .WorkStatusClicksMenuRight {
            float: right;
            width: 50%;
            text-align: center;
            padding-right: 10px;
            .WorkStatusClicksMenuRight_icons {
                font-size: 2em;
                svg {
                    color: #2985db;
                }
            }
        }
    }
    .WorkStatusClicksMenuLists {
        padding-right: 15px;
        width: 95%;
        margin: 0 auto;
        ul {
            display: flex;
            flex-flow: wrap;
            justify-content: space-between;
            li {
                width: 45%;
                border: 1px solid lightgray;
                text-align: center;
                border-radius: 5px;
                height: 40px;
                line-height: 40px;
                margin-bottom: 10px;
                :hover {
                    cursor: pointer;
                    background-color: #efefef;
                }
            }
        }
    }
`
const HomeClockStatusMainPage = () => {
    let timer = null;
    const [time, setTime] = useState(moment());
    const [workStatusMenuBar, setWorkStatusMenuBar] = useState(true);
    useEffect(() => {
        timer = setInterval(() => {
            setTime(moment());
        }, 1000);
        return () => {
            clearInterval(timer);
        };
    }, []);
    return (
        <HomeClockStatusMainPageMainDivBox>
                 <h4 style={{ marginBottom: '10px' }}>근무체크</h4>
            <div className="MainBodyContent_Left_WorkCheck">
                <div className="MainBodyContent_Left_WorkCheckDesc">
                    <div>
                        <span style={{ color: '#535559' }}>{moment().locale('ko').format('M월 D일 (dd)')}</span>
                    </div>
                    <div className="TimerContainer">
                        <h2>{time.format('HH:mm:ss')}</h2>
                        <div className="TimerContainer_WorkStatus">업무중</div>
                        <div
                            className={workStatusMenuBar ? 'TimerContainer_WorkStatusArrowUp' : 'TimerContainer_WorkStatusArrowDown'}
                            onClick={() => setWorkStatusMenuBar(!workStatusMenuBar)}
                        >
                            <IoIosArrowDown></IoIosArrowDown>
                        </div>
                    </div>
                    {workStatusMenuBar ? (
                        <div className="Open_WorkingStatus_Container">
                            <div>
                                <div>
                                    <div className="WorkStatusClicksMenuFloat">
                                        <div className="WorkStatusClicksMenuLeft">
                                            <div>
                                                <div className="WorkStatusClicksMenuLeft_icons">
                                                    <BsArrowUpCircle></BsArrowUpCircle>
                                                </div>
                                                <div>출근하기</div>
                                                <div>09:00:00</div>
                                            </div>
                                        </div>
                                        <div className="WorkStatusClicksMenuRight">
                                            <div>
                                                <div className="WorkStatusClicksMenuRight_icons">
                                                    <BsArrowDownCircle></BsArrowDownCircle>
                                                </div>
                                                <div>퇴근하기</div>
                                                <div>09:00:00</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="WorkStatusClicksMenuLists">
                                    <ul>
                                        <li>업무</li>
                                        <li>외출</li>
                                        <li>회의</li>
                                        <li>외근</li>
                                        <li>출장</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    ) : (
                        <div></div>
                    )}
                </div>
            </div>
        </HomeClockStatusMainPageMainDivBox>
 
        )
}

export default HomeClockStatusMainPage;
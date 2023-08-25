import React from 'react';
import styled from 'styled-components';
import { IoNewspaperOutline } from 'react-icons/io5';
import { BsCalendarCheck } from 'react-icons/bs';
import { RiBookletLine, RiMailCheckLine } from 'react-icons/ri';
import { FiCheckCircle } from 'react-icons/fi';
import { TbHomeStats } from 'react-icons/tb';
import { BsPersonWorkspace } from 'react-icons/bs';
import { MdOutlineGroups, MdOutlineSettingsInputComposite } from 'react-icons/md';
import { Link } from 'react-router-dom';
import { GiMeal } from 'react-icons/gi';

const HomeNavigationMainPageMainDivBox = styled.div`
    .BodyMenbar {
        height: 180px;
        background: #e0e8ee;
        width: 100%;
        .BodyContentBox {
            width: 95%;
            margin: 0 auto;
            height: 100%;
            .BodyContnetListsShow {
                display: flex;
                flex-flow: wrap;
                justify-items: center;
                padding-top: 35px;
                li {
                    width: 72px;
                    height: 72px;
                    border-radius: 50%;
                    background: #fff;
                    margin-right: 40px;
                    text-align: center;
                    :hover {
                        cursor: pointer;
                        background: #cae4f7;
                        .BodyContentIcons {
                            svg {
                                color: #2985db;
                                opacity: 0.5;
                            }
                        }
                    }

                    .BodyContentIcons {
                        width: 60px;
                        height: 60px;
                        border-radius: 50%;
                        position: relative;
                        svg {
                            position: absolute;
                            left: 5px;
                            top: 5px;
                            padding: 10px;
                            width: 60px;
                            height: 60px;
                            color: darkgray;
                        }
                    }
                    .BodyContentText {
                        margin-top: 20px;
                        color: #535559;
                    }
                }
            }
        }
        .BodyContentRight {
            float: right;
            width: 64%;
            height: 100vh;
            border: 1px solid blue;
        }
    }
`;

const HomeNavigationMainPage = () => {
    return (
        <HomeNavigationMainPageMainDivBox>
            <div className="BodyMenbar">
                <div className="BodyContentBox">
                    <ul className="BodyContnetListsShow">
                        {/* <li>
                    <Link to="/post">
                        <div className="BodyContentIcons">
                            <IoNewspaperOutline></IoNewspaperOutline>
                        </div>
                        <div className="BodyContentText">게시판</div>
                    </Link>
                </li>
                <li>
                    <Link to="/calendar">
                        <div className="BodyContentIcons">
                            <BsCalendarCheck></BsCalendarCheck>
                        </div>
                        <div className="BodyContentText">일정</div>
                    </Link>
                </li>
                <li>
                    <Link to="/contact_list">
                        <div className="BodyContentIcons">
                            <RiBookletLine></RiBookletLine>
                        </div>
                        <div className="BodyContentText">주소록</div>
                    </Link>
                </li>
                <li>
                    <Link to="/reservation">
                        <div className="BodyContentIcons">
                            <FiCheckCircle></FiCheckCircle>
                        </div>
                        <div className="BodyContentText">예약</div>
                    </Link>
                </li> */}
                        <li>
                            <Link to="/Overtime_Working">
                                <div className="BodyContentIcons">
                                    <BsPersonWorkspace></BsPersonWorkspace>
                                </div>
                                <div className="BodyContentText">연장 근무</div>
                            </Link>
                        </li>
                        <li>
                            <Link to="/Meal_Expense_Reimbursement">
                                <div className="BodyContentIcons">
                                    <GiMeal></GiMeal>
                                </div>
                                <div className="BodyContentText">식대 정산</div>
                            </Link>
                        </li>

                        <li>
                            <Link to="/Annual_Leave">
                                <div className="BodyContentIcons">
                                    <TbHomeStats></TbHomeStats>
                                </div>
                                <div className="BodyContentText">휴가</div>
                            </Link>
                        </li>

                        <li>
                            <Link to="/check_payment">
                                <div className="BodyContentIcons">
                                    <RiMailCheckLine></RiMailCheckLine>
                                </div>
                                <div className="BodyContentText">결재</div>
                            </Link>
                        </li>

                        {/* <li>
                    <Link to="/group">
                        <div className="BodyContentIcons">
                            <MdOutlineGroups></MdOutlineGroups>
                        </div>
                        <div className="BodyContentText">그룹</div>
                    </Link>
                </li> */}
                    </ul>
                </div>
            </div>
        </HomeNavigationMainPageMainDivBox>
    );
};

export default HomeNavigationMainPage;

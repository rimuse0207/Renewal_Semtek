import React from "react";
import styled from "styled-components";
import HomeClockStatusMainPage from "./HomeClockStatus/HomeClockStatusMainPage";
import HomeApprovalMainPage from "./HomeApproval/HomeApprovalMainPage";

const HomeContainerMainPageMainDivBox = styled.div`
    
    background-color:#eaeced;

      .BodyContentFloat {
        width: 70%;
        margin: 0 auto;

        ::after {
            clear: both;
            content: '';
            display: block;
        }
        .BodyContentLeft {
            float: left;
            width: 33%;
            height: 100vh;
            min-width: 300px;
            .MainBodyContent_Left_WorkCheck {
                background: #fcfcfc;
                border-radius: 10px;
                h4 {
                    background: #eaeced;
                }
                .MainBodyContent_Left_WorkCheckDesc {
                    border: 1px solid lightgray;
                    padding: 14px 0 14px 14px;
                    .TimerContainer {
                        display: flex;
                        position: relative;
                        .TimerContainer_WorkStatus {
                            margin-left: 20px;
                            padding: 8px 15px 8px 15px;
                            background: #e0e8ee;
                            border-radius: 5px;
                            font-size: 0.9em;
                            color: blue;
                        }
                        .TimerContainer_WorkStatusArrowDown {
                            position: absolute;
                            right: 20px;
                            width: 40px;
                            height: 40px;
                            line-height: 40px;
                            text-align: center;
                            border-radius: 50%;
                            svg {
                                height: 40px;
                            }
                            :hover {
                                cursor: pointer;
                                background: darkgray;
                                opacity: 0.5;
                            }
                        }
                        .TimerContainer_WorkStatusArrowUp {
                            position: absolute;
                            right: 20px;
                            width: 40px;
                            height: 40px;
                            line-height: 40px;
                            text-align: center;
                            border-radius: 50%;
                            svg {
                                -ms-transform: rotate(180deg); /* IE 9 */
                                -webkit-transform: rotate(180deg); /* Chrome, Safari, Opera */
                                transform: rotate(180deg);

                                height: 40px;
                            }
                            :hover {
                                cursor: pointer;
                                background: darkgray;
                                opacity: 0.5;
                            }
                        }
                    }
                }
            }
        }
    }
`

const HomeContainerMainPage = () => {
    return (
        <HomeContainerMainPageMainDivBox>
               <div className="BodyContentFloat">
                        <div className="BodyContentLeft">
                                <HomeClockStatusMainPage></HomeClockStatusMainPage>
                                <HomeApprovalMainPage></HomeApprovalMainPage>
                        </div>
                        <div className="BodyContentRight">
                    <div>
                        근무내용이 들어갑니다.
                            </div>
                        </div>
                </div>
        </HomeContainerMainPageMainDivBox>
    )
}

export default HomeContainerMainPage;
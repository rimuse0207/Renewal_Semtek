import React from "react";
import styled from "styled-components";
import { AiFillCalendar } from "react-icons/ai";
import { RiTimeFill } from "react-icons/ri";
export const AnnualLeaveCheckingMainDivBox = styled.div`
    margin-top:20px;
    .Checking_Container{
        margin-top:20px;
        display:flex;
        justify-content:start;
        .Checking_Content_Block{
            width:30%;
            margin-right:50px;
            .Checking_Content_Block_Title{
                display:flex;
                margin-bottom:20px;
                h5{
                    margin-left:20px;
                    
                }
            }
            .Checking_Content_Block_Content_Box{
                padding:30px;
                border:1px solid lightgray;
                display:flex;
                justify-content:space-around;
                text-align:center;
                .Checking_Content_Block_Content{
                    h5{
                        margin-bottom:20px;
                        font-size:1em;
                    }
                }
                
            }
        }
    }
`

const AnnualLeaveChecking = () => {
    return (
        <AnnualLeaveCheckingMainDivBox>
            <h3>올해 휴가/근무 정보</h3>
            <div className="Checking_Container">
                <div className="Checking_Content_Block">
                    <div className="Checking_Content_Block_Title">
                        <AiFillCalendar></AiFillCalendar>
                        <h5>휴가 현황</h5>
                    </div>
                    <div className="Checking_Content_Block_Content_Box">
                        <div className="Checking_Content_Block_Content">
                            <h5>잔여 휴가</h5>
                            <div> 0 일</div>
                        </div>
                        <div className="Checking_Content_Block_Content">
                            <h5>휴가 현황</h5>
                            <div>휴가 신청</div>
                        </div>

                    </div>
                </div>
                <div className="Checking_Content_Block">
                    <div className="Checking_Content_Block_Title">
                        <RiTimeFill></RiTimeFill>
                        <h5>근무시간</h5>
                    </div>
                    <div className="Checking_Content_Block_Content_Box">
                        <div className="Checking_Content_Block_Content">
                            <h5>근무 일수</h5>
                            <div> 0 일</div>
                        </div>
                        <div className="Checking_Content_Block_Content">
                            <h5>총 근무시간</h5>
                            <div>0시간</div>
                        </div>

                    </div>
                </div>
            </div>

        </AnnualLeaveCheckingMainDivBox>
    )
}

export default AnnualLeaveChecking;
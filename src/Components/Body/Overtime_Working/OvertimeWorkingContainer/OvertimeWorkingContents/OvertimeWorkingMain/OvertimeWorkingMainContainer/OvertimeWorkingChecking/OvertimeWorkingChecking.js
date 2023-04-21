import React from "react";
import styled from "styled-components";
import { AnnualLeaveCheckingMainDivBox } from "../../../../../../Annual_Leave/AnnualLeaveContainer/AnnualLeaveContents/AnnualLeaveMain/AnnualLeaveMainContainer/AnnualLeaveMainContent/AnnualLeaveChecking/AnnualLeaveChecking";
import { AiFillCalendar } from "react-icons/ai";
import { RiTimeFill } from "react-icons/ri";

const OvertimeWorkingCheckingMainDivBox = styled.div`

`

const OvertimeWorkingChecking = () => {
    return (
        <OvertimeWorkingCheckingMainDivBox>
            <AnnualLeaveCheckingMainDivBox>
                <h3>금월 연장근무 정보</h3>
                <div className="Checking_Container">
                    <div className="Checking_Content_Block">
                        <div className="Checking_Content_Block_Title">
                            <AiFillCalendar></AiFillCalendar>
                            <h5>연장근무 현황</h5>
                        </div>
                        <div className="Checking_Content_Block_Content_Box">
                             <div className="Checking_Content_Block_Content">
                                <h5>소정근무</h5>
                                <div> 0 시간</div>
                            </div>
                            <div className="Checking_Content_Block_Content">
                                <h5>연장근무</h5>
                                <div> 0 시간</div>
                            </div>
                            <div className="Checking_Content_Block_Content">
                                <h5>총 근무</h5>
                                <div>0 시간</div>
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
        </OvertimeWorkingCheckingMainDivBox>
    )
}

export default OvertimeWorkingChecking;
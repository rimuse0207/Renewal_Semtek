import React from 'react';
import styled from 'styled-components';

const ApplyShowTitleMainDivBox = styled.div`
    
`

const ApplyShowTitle = ({clickedDateData}) => {
    return (
        <ApplyShowTitleMainDivBox>
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
        </ApplyShowTitleMainDivBox>
    )
}

export default ApplyShowTitle
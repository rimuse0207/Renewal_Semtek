import React from "react";
import styled from "styled-components"

const HomeApprovalMainPageMainDivBox = styled.div`
    .List_Container{
        padding-right: 15px;
    width: 95%;
    margin: 0 auto;
    }
     ul {
        display: flex;
        flex-flow: wrap;
        justify-content: space-between;
        li {
            width: 45%;
            border: 1px solid lightgray;
            text-align: left;
            padding-left: 20px;
            border-radius: 5px;
            height: 40px;
            line-height: 40px;
            margin-bottom: 10px;
            :hover {
                cursor: pointer;
                background-color: #e0e8ee;
            }
        }
    }
`

const HomeApprovalMainPage = () => {
    return (
        <HomeApprovalMainPageMainDivBox>
        
            <h4 style={{ marginTop: '30px', marginBottom: '10px' }}>전자결재</h4>
            <div className="MainBodyContent_Left_WorkCheck">
                <div className="MainBodyContent_Left_WorkCheckDesc">
                    <div className="List_Container">
                        <ul>
                            <li>대기</li>
                            <li>확인</li>
                            <li>예정</li>
                            <li>진행</li>
                        </ul>
                    </div>
                </div>
            </div>
        
        </HomeApprovalMainPageMainDivBox>
    )
}
export default HomeApprovalMainPage;
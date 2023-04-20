import React from "react";
import styled from "styled-components";

const ApplyBasicSettingMainDivBox = styled.div`
 .PersonalApplyBodyConent_ApplyContents {
        margin-top:30px;
        table {
            border-collapse: collapse;
            width: 1000px;
            text-align: left;
            min-width: 700px;
            margin-top: 20px;
            margin-bottom: 20px;
            tbody {
                th {
                    background: #eff4fc;
                    text-align: center;
                    width: 170px;
                    padding: 15px;
                    border: 1px solid lightgray;
                    font-weight: 500;
                }
                td {
                    border: 1px solid lightgray;
                    padding-left: 20px;
                }
            }
        }
    }
`

const ApplyBasicSetting = () => {
    return (
        <ApplyBasicSettingMainDivBox>
             <div className="PersonalApplyBodyConent_ApplyContents">
                <div>
                    <div>
                        <h4>기본설정</h4>
                        <table>
                            <thead></thead>
                            <tbody>
                                <tr>
                                    <th>문서 종류</th>
                                    <td>휴가신청서</td>
                                    <th>작성자</th>
                                    <td>기타 테스트</td>
                                </tr>
                                <tr>
                                    <th>보존 연한</th>
                                    <td>3년</td>
                                    <th>보안 등급</th>
                                    <td>B 등급</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </ApplyBasicSettingMainDivBox>
    )
}
export default ApplyBasicSetting;
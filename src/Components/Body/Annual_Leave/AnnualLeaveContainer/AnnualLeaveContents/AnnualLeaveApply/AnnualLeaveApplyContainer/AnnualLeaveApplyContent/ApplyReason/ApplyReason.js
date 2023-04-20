import React from "react";
import styled from "styled-components";

const ApplyReasonMainMainDivBox = styled.div`
  margin-bottom: 50px;
    h4 {
        margin-top: 30px;
        margin-bottom: 20px;
    }
    textarea {
        width: 98%;
        height: 80px;
        border: 1px solid lightgray;
        padding: 10px;
        :focus {
            outline: #168;
            border: 1px solid #168;
        }
    }
`
const ApplyReason = () => {
    return (
        <ApplyReasonMainMainDivBox>
             <div>
                <div>
                    <div>
                        <h4>사유</h4>
                    </div>
                    <div>
                        <textarea></textarea>
                    </div>
                </div>
            </div>
        </ApplyReasonMainMainDivBox>
    )
}
export default ApplyReason;
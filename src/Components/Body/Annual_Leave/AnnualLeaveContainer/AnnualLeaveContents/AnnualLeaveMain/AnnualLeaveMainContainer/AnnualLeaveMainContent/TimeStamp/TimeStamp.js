import React from "react";
import styled from "styled-components";
import { BsFillPersonFill } from "react-icons/bs";
import BodyContent from "./BodyContent/BodyContent";
import { useState,useCallback,useEffect } from "react";
import { useRef } from "react";

const TimeStampMainDivBox = styled.div` 
    margin-top:40px;
    .Content_Main_Container{
        width:80%;    
        margin-top:20px;
        .Content_Box_Container{
            border:1px solid lightgray;
            padding:30px;
            min-height:100px;
            display:flex;
            align-items:center;
            .Input_Image_Container{
                width: 45px; 
                height: 45px;
                background-color: lightgray;
                border-radius: 50%;
                svg{
                        padding: 10px;
                        width: 100%;
                        height: 100%;
                        color: darkgray;
                }
            }
            
            .Input_Container{                
                width:80%;
                margin-left:40px;
                min-height:40px;
                textarea{
                    width:100%;
                    height:100%;
                    border:1px solid lightgray;
                    padding:10px;
                    resize: none;
                    overflow:hidden;
                    
                }
            }
            .Button_Container{
                margin-left:40px;
                button{
                    width:100px;
                    height:40px;
                    background-color:#efefef;
                    border:none;
                    font-weight:bolder;
                    :hover{
                        cursor: pointer;
                        color:#fff;
                        background-color:darkgray;
                        transition:all 0.2s ease-in-out;
                    }
                }
            }
        }
    }
`

const TimeStamp = ({Selected}) => {
    const textAreaRef = useRef(null);
    const [Content_State, setContent_State] = useState([
        {
            indexs:2,
            id: "sjyoo@dhk.co.kr",
            epid: "sjyoo@dhk.co.kr",
            name: '유성재',
            write_Date: "2023-05-12",
            content:"본 내용은 휴가 관련 게시판 입니다."
        }
    ]);

    const [Write_data, setWrite_Data] = useState("")
    

    const handleClickStore = () => {
        const InputData = {
            indexs:1,
            id: 'sjyoo@dhk.co.kr',
            epid: "sjyoo@dhk.co.kr",
            name: "유성재",
            write_Date: "2023-05-12",
            content:Write_data
        }
        setContent_State(Content_State.concat(InputData));
        setWrite_Data("");
    }
 
const handleInput = useCallback(() => {
    const textArea = textAreaRef.current;
    if (textArea) {
      textArea.style.height = 'auto';
      textArea.style.height = `${textArea.scrollHeight+10}px`;
    }
  }, []);

  useEffect(() => {
    const textArea = textAreaRef.current;
    if (textArea) {
      textArea.style.height = `${textArea.scrollHeight}px`;
      textArea.addEventListener('input', handleInput);
      return () => {
        textArea.removeEventListener('input', handleInput);
      };
    }
  }, [handleInput]);
   

    return (
        <TimeStampMainDivBox>
            <div>
                <div>
                    <h4>{ Selected === "Overtime" ? "연장 근무":"휴가"} 게시판</h4>
                </div>
                <div className="Content_Main_Container">
                    <div className="Content_Box_Container" >
                        <div className='Input_Image_Container' ><BsFillPersonFill></BsFillPersonFill></div>
                            <div className="Input_Container">
                                <textarea ref={textAreaRef} type="text" value={Write_data} onChange={(e)=>setWrite_Data(e.target.value)} placeholder="자유로운 작성 부탁드립니다."  ></textarea>
                        </div>
                        <div className="Button_Container">
                            <button onClick={()=>handleClickStore()}>등록</button>
                        </div>
                    </div>
                </div>
                <div className="Content_Body_Container">
                    <BodyContent Content_State={Content_State}></BodyContent>
                </div>
            </div>
        </TimeStampMainDivBox>
    )
}

export default TimeStamp;
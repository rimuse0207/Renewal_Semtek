import React from 'react';
import styled from 'styled-components';
import { BsFillPersonFill } from "react-icons/bs";

const BodyContentMainDivBox = styled.div`
width:80%;
    margin-top:20px;
    border:1px solid lightgray;
    padding:30px;
.Writer_User_Info{
    
    display:flex;
    align-items:center;
    width:100%;
}
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

            .Writer_Body_Content{
                border:1px solid lightgray;
                margin-top:10px;
                margin-left:50px;
                padding:20px;
            }
            .Review_Body_Content{
                margin-left:50px;
                margin-top:10px;
                height:40px;
                input{
                    border:1px solid lightgray;
                    width:80%;
                    height:100%;
                    padding-left:20px;
                    
                }
                 button{
                    margin-left:20px;
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
            

`

const BodyContent = ({Content_State}) => {
    return (
            Content_State.map((list) => {
               return <BodyContentMainDivBox key={list.indexs}>
                        <div>
                            <div className="Writer_User_Info">
                                <div>
                                    <div className='Input_Image_Container' ><BsFillPersonFill></BsFillPersonFill></div>
                                </div>
                                <div style={{marginLeft:"10px"}}><h4>{list.name}</h4></div>
                                <div style={{marginLeft:"10px"}}>{ "  >  "}</div>
                                <div style={{marginLeft:"10px"}}>{ list.write_Date}</div>
                            </div>
                            <div className="Writer_Body_Content">
                                { list.content}
                            </div>
                            <div className="Review_Body_Content">
                                <input type="text" value={""} placeholder='댓글을 작성 바랍니다.'></input>
                                <button>등록</button>
                            </div>
                    </div>
                   </BodyContentMainDivBox>
            })
            
        
    )
}

export default BodyContent;
import React,{useState} from "react";
import Modal from 'react-modal';
import styled from "styled-components";
import { FaArrowsAltH } from "react-icons/fa";
import OrganChartMainPage from "./OrganChart/OrganChartMainPage";
import Select from "react-select";
import {TbSquareRoundedArrowLeft,TbSquareRoundedArrowRight} from "react-icons/tb";

const UserModalMainDivBox = styled.div`
    width:100%;
    height:100%;
    font-size:0.9em;
    .Main_Container{
        border:1px solid lightgray;
        width:100%;
        height:100%;
        display:flex;
        .First_Container{
            padding-left:10px;
            border-right:1px solid gray;
            height:100%;
            overflow:auto;
            width:20%;
        }
        .Second_Container{
            border-right:1px solid gray;
            max-width:45%;
            width:45%;
            min-width:400px;
            height:100%;
            .Float_Right_Container_Organ{
                .FlexChecking{
                        display: flex;
                flex-flow: column;
                justify-content: space-between;
                height: 100%;
                }
            width:100%;
            height:calc(100% - 35px);
            border:1px solid lightgray;
            overflow:auto;
            table{
                width:100%;
                border-collapse: collapse;
                empty-cells:show;
                
               thead{
                    tr{
                        background-color:#efefef;
                        padding:10px;
                        th{
                            text-align:start;
                            border-right:1px dashed gray;
                            padding:5px;
                            padding-left:10px;
                            font-weight:lighter;
                        }
                        
                    }
                }
                .table_tbody{
                    tr{
                        height:10px;
                        :hover{
                            background-color:skyblue;
                        }
                        td{
                            white-space:nowrap;
                            padding:8px;
                            border-bottom:1px solid gray;
                            font-weight:10;
                            
                            a{
                                color:black;
                                :hover{
                                    color:blue;
                                }
                            }
                        }
                    }
                }
            }
            
            .Float_Right_Container_Footer{
                    background-color: #fff;
                    position: sticky;
                    bottom: 1px;
                    height: 40px;
                    padding-left:10px;
                    border-top:1px solid black;
                    h4{
                        margin-top:10px;
                    }
                }
            }

        }

        }
        .Third_Container{
            display:flex;
            justify-content:space-around;
            flex-flow: column;
            font-size:2em;
            color:gray;
            min-width:5%;
            align-items:center;
        }
        .Fourth_Container{
            display:flex;
            justify-content:space-around;
            flex-flow: column;
            .Selected_Container{
                height:35%;
                max-width:40%;
                width:40%;
                min-width:400px;
                div{
                    border:1px solid lightgray;
                    height:100%;
                    min-width:300px;
                    width:30%;
                    
                }
            }

        }
    
`

const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
        animation: 'smoothAppear 0.3s ease',
        zIndex: '105',
        height: "80vh",
        width:"90vw"
        
    },
};

Modal.setAppElement('#Modals');
const UserModal = ({ modalIsOpen, setModalIsOpen }) => {
    const [ClickedUser, setClickedUser] = useState(null);
    const [UserDetailInfo, setUserDetailInfo] = useState([]);
    const [SelectUserInfoData, setSelectUserInfoData] = useState([]);
    const [SelectUserNames, setSelectUserNames] = useState("");

    return <Modal isOpen={modalIsOpen} style={customStyles} onRequestClose={() => setModalIsOpen()}>
        <UserModalMainDivBox>
        <div className="Main_Container">
                <div className="First_Container">
                    <OrganChartMainPage ClickedUser={ClickedUser} setClickedUser={(data) =>setClickedUser(data)} setUserDetailInfo={(data)=>setUserDetailInfo(data)} setSelectUserInfoData={data=>setSelectUserInfoData(data)} setSelectUserNames={data=>setSelectUserNames(data)} UserSearchModalOn={modalIsOpen}></OrganChartMainPage>
                </div>
                <div className="Second_Container">
                    <div className="SearchNames_container">
                            <Select
                                    className="basic-single"
                                    classNamePrefix="이름 또는 이메일 검색..."
                                    placeholder='이름 또는 이메일 검색...'
                                    // defaultValue={SelectLeftHeaderInfo}
                                    isClearable={true}
                                    isSearchable={true}
                                    name="User_Search"
                                    options={SelectUserInfoData}
                            // onChange={(e) => SelectHandleChange(e)}
                            
                                />
                    </div>
                     <div className="Float_Right_Container_Organ">
                        <div className="FlexChecking">
                            <table>
                                <thead>
                                    <tr>
                                        <th>No.</th>
                                        <th>성명</th>
                                        <th>부서</th>
                                        <th>이메일</th>
                                        
                                    </tr>
                                </thead>
                                <tbody className="table_tbody">
                                    {UserDetailInfo.map((list,j) => {
                                        return <tr key={list.uid} style={SelectUserNames === list.uid ? { backgroundColor: "yellow" } : {}} >
                                            <td>{ j+1}</td>
                                            <td>{list.cn}</td>
                                            <td>{ list.department_name}</td>
                                            <td>
                                              {list.uid}
                                            </td>
                                        </tr>
                                    })}
                                </tbody>
                            </table>    
                             <div className="Float_Right_Container_Footer">
                                <h4>총 {UserDetailInfo.length }</h4>
                             </div>
                        </div>
                    </div>
            </div>
                <div className="Third_Container">
                    <div>
                        <div>
                            <TbSquareRoundedArrowRight></TbSquareRoundedArrowRight>
                        </div>
                        <div>
                            <TbSquareRoundedArrowLeft></TbSquareRoundedArrowLeft>
                        </div>
                    </div>
                    <div>
                        <div>
                            <TbSquareRoundedArrowRight></TbSquareRoundedArrowRight>
                        </div>
                        <div>
                            <TbSquareRoundedArrowLeft></TbSquareRoundedArrowLeft>
                        </div>
                    </div>
            </div>
            <div className="Fourth_Container">
                <div className="Selected_Container">
                    <h3>검토</h3>
                    <div>검토 박스</div>
                </div>
                <div  className="Selected_Container">
                    <h3>승인</h3>
                    <div>승인 박스</div>
                </div>
            </div>

            </div>
                {/* <div>
                    {ApplyMainModalOpen ? <PersonApplyContentSignModal></PersonApplyContentSignModal> : <div></div>}
                    {ApplyModalOpen ? (
                        <PersonApplyContentApplyModal
                            setSelectApplyNames={data => setSelectApplyNames(data)}
                            SelectApplyNames={SelectApplyNames}
                            handleDeleteNames={data => handleDeleteNames(data)}
                        ></PersonApplyContentApplyModal>
                    ) : (
                        <div></div>
                    )}
                    {AcceptModalOpen ? (
                        <PersonApplyContentAcceptModal
                            setSelectApplyNames={data => setSelectAcceptNames(data)}
                            SelectApplyNames={SelectAcceptNames}
                            // handleDeleteNames={data => handleDeleteNames(data)}
                        ></PersonApplyContentAcceptModal>
                    ) : (
                        <div></div>
                    )}
                </div>
                <div>
                    <div className="PersonApplyContent_Modal_divButton">
                        <button
                            onClick={() => {
                                setSelectApplyNames(SendSelectApplyNames);
                                setSelectAcceptNames(SendSelectAcceptNames);
                                closeModal();
                            }}
                        >
                            취소
                        </button>
                        <button
                            onClick={() => {
                                setSendSelectApplyNames(SelectApplyNames);
                                setSendSelectAcceptNames(SelectAcceptNames);
                                closeModal();
                            }}
                        >
                            확인
                        </button>
                    </div>
                </div> */}
        </UserModalMainDivBox>  
            </Modal> 
}

export default UserModal
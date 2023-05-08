import React,{useEffect, useState} from "react";
import Modal from 'react-modal';
import styled from "styled-components";
import { FaArrowsAltH } from "react-icons/fa";
import OrganChartMainPage from "./OrganChart/OrganChartMainPage";
import Select from "react-select";
import { useDispatch,useSelector } from "react-redux";
import {TbSquareRoundedArrowLeft,TbSquareRoundedArrowRight} from "react-icons/tb";
import { Payment_Accept_User_Change_Func, Payment_Apply_User_Change_Func, Payment_Review_User_Change_Func } from "../../../../../../../../../../Models/PaymentUserReducer/PaymentUserReducer";
import { AiOutlineUserDelete } from "react-icons/ai";
import { BiX } from "react-icons/bi";

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
            .ArrowIcons_Container{
                :hover{
                    cursor: pointer;
                    color:blue;
                    transition:all 0.5s;
                }
            }
        }
        .Fourth_Container{
            display:flex;
            justify-content:space-around;
            flex-flow: column;
            .Selected_Container{
                height:30%;
                max-width:40%;
                width:40%;
                min-width:400px;
                div{
                    border:1px solid lightgray;
                    height:90%;
                    min-width:300px;
                    width:30%;
                    overflow:auto;
                    .Selected_User_Container{
                        display:flex;
                        justify-content:space-between;
                        border-bottom:1px solid lightgray;
                        padding:5px;
                            :hover{
                                cursor: pointer;
                                background-color:aliceblue;
                            }
                        li{
                            
                            :last-child{
                            color:orange;
                            :hover{
                                
                                color:red;
                            }
                        }
                            padding:5px;
                        }
                    }
                }
            }

        }
    .PersonalNavigation_ApplyPage{
        width: 90%;
        /* margin: 0 auto; */
        border-radius: 5px;
        height: 50px;
        line-height: 50px;
        font-size: 1.1em;
        text-align: center;
        background: #2985db;
        font-weight: bolder;
        border-bottom: 1px solid lightgray;
        max-width:300px;
        color:#fff;
        margin-bottom:50px;
        margin-top:50px;
        padding-bottom:50px;
        :hover {
            cursor: pointer;
            background: #056ac9;
        }
    }
    .Delete_Modal{
        position:fixed;
        top:0px;
        right:10px;
        font-size:2em;
        color:red;
        :hover{
            cursor: pointer;
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
        height: "90vh",
        width:"90vw"
        
    },
};

Modal.setAppElement('#Modals');
const UserModal = ({ modalIsOpen, setModalIsOpen }) => {
    const dispatch = useDispatch();
    const Apply_User_State = useSelector(state => state.PaymentUserReducerState.Apply)
    const Review_User_State = useSelector(state => state.PaymentUserReducerState.Review)
    const Accept_User_State = useSelector(state => state.PaymentUserReducerState.Accept)
    const [ClickedUser, setClickedUser] = useState(null);
    const [UserDetailInfo, setUserDetailInfo] = useState([]);
    const [SelectUserInfoData, setSelectUserInfoData] = useState([]);
    const [SelectUserNames, setSelectUserNames] = useState("");
    const [PrePare_ApplyUser_State, setPrePare_ApplyUser_State] = useState(Apply_User_State);
    const [PrePare_ReviewUser_State, setPrePare_ReviewUser_State] = useState(Review_User_State);
    const [PrePare_AcceptUser_State, setPrePare_AcceptUser_State] = useState(Accept_User_State);


    const handleAddBox = (choice) => {

        const data = UserDetailInfo.filter(list => list.checked ? list : "")

        const CheckedFalse = UserDetailInfo.map(list => list.checked ? { ...list, checked: false } : list);
        setUserDetailInfo(CheckedFalse);

        if (choice === 'Apply') {
            setPrePare_ApplyUser_State(PrePare_ApplyUser_State.concat(data));
            // dispatch(Payment_Apply_User_Change_Func(data))
        } else if(choice === "Review"){
            setPrePare_ReviewUser_State(PrePare_ReviewUser_State.concat(data));
            // dispatch(Payment_Review_User_Change_Func(data))
        } else if (choice === 'Accept') {
            setPrePare_AcceptUser_State(PrePare_AcceptUser_State.concat(data));
            // dispatch(Payment_Accept_User_Change_Func(data))
        }
    }


    const handleUserClick = (data) => {
        
        const ChangeUser = UserDetailInfo.map((list) =>
            list.uid === data.uid ? { ...list, checked: !data.checked } :  list 
        );
        setUserDetailInfo(ChangeUser)
        
    }

    const handleAllChecked = (e) => {
        
        setUserDetailInfo(UserDetailInfo.map((list) => 
            e.target.checked ? {...list,checked:true}:{...list,checked:false}
        ));
    }

    const handleClickDeletUser = (data,choice) => {
        if (choice === "Apply") {
            setPrePare_ApplyUser_State(PrePare_ApplyUser_State.filter(list => list.uid !== data.uid ? list : ''))    
        } else if (choice === 'Review') {
            setPrePare_ReviewUser_State(PrePare_ReviewUser_State.filter(list => list.uid !== data.uid ? list : ''))
        } else if (choice === 'Accept') {
            setPrePare_AcceptUser_State(PrePare_AcceptUser_State.filter(list => list.uid !== data.uid ? list : ''))
        }
        
        
    }


    const HandleSaveDispatch = () => {
        dispatch(Payment_Apply_User_Change_Func(PrePare_ApplyUser_State))
        dispatch(Payment_Review_User_Change_Func(PrePare_ReviewUser_State))
        dispatch(Payment_Accept_User_Change_Func(PrePare_AcceptUser_State))
        setModalIsOpen();
    }

    useEffect(() => {
     setPrePare_ApplyUser_State(Apply_User_State);
     setPrePare_ReviewUser_State(Review_User_State);
     setPrePare_AcceptUser_State(Accept_User_State);
    },[modalIsOpen])


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
                                        <th><input type="checkbox" id="All_Checked" readOnly onChange={(e)=>handleAllChecked(e)}></input></th>
                                        <th>No.</th>
                                        <th>성명</th>
                                        <th>부서</th>
                                        <th>이메일</th>
                                        
                                    </tr>
                                </thead>
                                <tbody className="table_tbody">
                                    {UserDetailInfo.map((list,j) => {
                                        return <tr key={list.uid} style={SelectUserNames === list.uid ? { backgroundColor: "yellow" } : list.checked ?{backgroundColor:"aliceblue"}:{}} onClick={()=>handleUserClick(list)}>
                                            <td><input type="checkbox" checked={list.checked} readOnly ></input></td>
                                            <td>{ j+1}. </td>
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
                    {/* <div>
                        <div className="ArrowIcons_Container" onClick={()=>handleAddBox("Apply")}>
                            <TbSquareRoundedArrowRight></TbSquareRoundedArrowRight>
                        </div>
                        <div className="ArrowIcons_Container">
                            <TbSquareRoundedArrowLeft></TbSquareRoundedArrowLeft>
                        </div>
                    </div> */}
                    <div>
                        <div className="ArrowIcons_Container" onClick={()=>handleAddBox("Review")}>
                            <TbSquareRoundedArrowRight></TbSquareRoundedArrowRight>
                        </div>
                        <div className="ArrowIcons_Container">
                            <TbSquareRoundedArrowLeft></TbSquareRoundedArrowLeft>
                        </div>
                    </div>
                    <div>
                        <div className="ArrowIcons_Container" onClick={()=>handleAddBox("Accept")}>
                            <TbSquareRoundedArrowRight></TbSquareRoundedArrowRight>
                        </div>
                        <div className="ArrowIcons_Container">
                            <TbSquareRoundedArrowLeft></TbSquareRoundedArrowLeft>
                        </div>
                    </div>
                    <div>
                        <div className="ArrowIcons_Container" onClick={()=>handleAddBox("Accept")}>
                            {/* <TbSquareRoundedArrowRight></TbSquareRoundedArrowRight> */}
                        </div>
                        <div className="ArrowIcons_Container">
                            {/* <TbSquareRoundedArrowLeft></TbSquareRoundedArrowLeft> */}
                        </div>
                    </div>
            </div>
            <div className="Fourth_Container">
                {/* <div className="Selected_Container">
                        <h3>신청 ({ PrePare_ApplyUser_State.length})</h3>
                        <div>
                                {PrePare_ApplyUser_State.map((list,i) => {
                                    return <ul className="Selected_User_Container">
                                        <li>{ i+1}. </li>
                                        <li>{list.cn}</li>
                                        <li>{list.department_name}</li>
                                        <li onClick={()=>handleClickDeletUser(list,'Apply')}><AiOutlineUserDelete></AiOutlineUserDelete></li>
                                    </ul>
                                })}
                    </div>
                </div> */}
                <div className="Selected_Container">
                    <h3>검토 ({ PrePare_ReviewUser_State.length})</h3>
                    <div>     {PrePare_ReviewUser_State.map((list,i) => {
                         return <ul className="Selected_User_Container">
                                        <li>{ i+1}. </li>
                                        <li>{list.cn}</li>
                                        <li>{list.department_name}</li>
                                        <li onClick={()=>handleClickDeletUser(list,'Review')}><AiOutlineUserDelete></AiOutlineUserDelete></li>
                                    </ul>
                                })}</div>
                </div>
                <div  className="Selected_Container">
                    <h3>승인 ({ PrePare_AcceptUser_State.length})</h3>
                    <div>     {PrePare_AcceptUser_State.map((list,i) => {
                                     return <ul className="Selected_User_Container">
                                        <li>{ i+1}. </li>
                                        <li>{list.cn}</li>
                                        <li>{list.department_name}</li>
                                        <li onClick={()=>handleClickDeletUser(list,'Accept')}><AiOutlineUserDelete></AiOutlineUserDelete></li>
                                    </ul>
                    })}
                        </div>
                    </div>
                    <div className="PersonalNavigation_ApplyPage">
                        <div onClick={()=>HandleSaveDispatch()}>저장</div>
                    </div>
            </div>

            </div>
            <div className="Delete_Modal" onClick={()=>setModalIsOpen()}>
                <BiX></BiX>
            </div>
        </UserModalMainDivBox>  
            </Modal> 
}

export default UserModal
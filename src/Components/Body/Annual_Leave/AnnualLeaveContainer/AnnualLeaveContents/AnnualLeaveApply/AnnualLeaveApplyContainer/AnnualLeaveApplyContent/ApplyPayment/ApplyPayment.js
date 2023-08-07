import React,{ useEffect, useState } from "react";
import styled from "styled-components";
import { BsPlusCircle } from 'react-icons/bs';
import UserModal from "./UserModal/UserModal";
import { useDispatch, useSelector } from "react-redux";
import { request } from "../../../../../../../../../API";
import { Payment_Accept_User_Change_Func, Payment_Apply_User_Change_Func, Payment_Review_User_Change_Func } from "../../../../../../../../../Models/PaymentUserReducer/PaymentUserReducer";

export const ApplyPaymentMainDivBox = styled.div`
    .PersonalApplyBodyConent_ApplyContents_Sign {
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
                    height: 45px;
                }
                td {
                    border: 1px solid lightgray;

                    height: 45px;
                    border-top: none;
                    border-bottom: 0.5px solid lightgray;
                    text-align: center;
                }
            }
            .PersonalApplyBodyCotent_ApplyContentsTable {
                td {
                    height: 100px;
                }
            }
            .ClicksButtonMainTh {
                position: relative;
            }
            .ClicksButtonMainIcon {
                position: absolute;
                top: 3px;
                right: 3px;
                color: gray;
                width: 30px;
                height: 30px;
                line-height: 30px;
                border-radius: 50%;
                :hover {
                    cursor: pointer;
                    background: lightgray;
                }
            }
        }
        .PayMentFlexDivBox {
            margin-bottom:30px;
            h4 {
                margin-right: 30px;
                display: inline;
            }
            div {
                display: inline;
                button {
                    border: none;
                    background: none;
                    color: blue;
                    :hover {
                        cursor: pointer;
                    }
                }
            }
        }
    }



    .PayMent_Main_Flex_Box{
        display:flex;
        flex-flow:wrap;
        max-width:80%;
        .PayMent_Container{
        display:flex;
        max-width:80%;
        .Payment_Title{
            width:100px;
            height:200px;
            background-color:rgb(239, 244, 252);
            border:0.5px solid lightgray;
            text-align:center;
            line-height:200px;
        }
        .Payment_Content{
            /* border:0.5px solid lightgray; */
            width:140px;
            
            .First{
                background-color:rgb(239, 244, 252);
                border-bottom:0.5px solid lightgray;
                border-top:0.5px solid lightgray;
                
            }
            .Third{
                border-bottom:0.5px solid lightgray;
            }
            .First,.Third{
                border-right:0.5px solid lightgray;
                height:45px;
                text-align:center;
                line-height:45px;
            }
            .Second{
                border-bottom:0.5px solid lightgray;
                border-right:0.5px solid lightgray;
                height:110px;
            }
        }
    }
    }
`
const ApplyPayment = () => {
    const dispatch = useDispatch();
    const Login_Info = useSelector(state => state.Login_Info_Reducer_State.Login_Info);
    const Apply_User_State = useSelector(state => state.PaymentUserReducerState.Apply)
    const Review_User_State = useSelector(state => state.PaymentUserReducerState.Review)
    const Accept_User_State = useSelector(state => state.PaymentUserReducerState.Accept)
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const [ApplyMainModalOpen, setApplyMainModalOpen] = useState(false);
    const [ApplyModalOpen, setApplyModalOpen] = useState(false);
    const [AcceptModalOpen, setAcceptModalOpen] = useState(false);

    const [SendSelectApplyNames, setSendSelectApplyNames] = useState([
        {
            id: 1,
            text: '테스트',
        },
        {
            id: 2,
            text: '김종대',
        },
        {
            id: 3,
            text: '유성재',
        },
        
    ]);
    const [SelectApplyNames, setSelectApplyNames] = useState([
        {
            id: 1,
            text: '테스트',
        },
        {
            id: 2,
            text: '김종대',
        },
        {
            id: 3,
            text: '유성재',
        },
    ]);
    // const [SendSelectAcceptNames, setSendSelectAcceptNames] = useState([
    //     {
    //         id: 1,
    //         text: '김성준',
    //     },
    //     {
    //         id: 2,
    //         text: '이지형',
    //     },
    //     {
    //         id: 3,
    //         text: '차재윤',
    //     },
    // ]);
    // const [SelectAcceptNames, setSelectAcceptNames] = useState([
    //     {
    //         id: 1,
    //         text: '김성준',
    //     },
    //     {
    //         id: 2,
    //         text: '이지형',
    //     },
    //     {
    //         id: 3,
    //         text: '차재윤',
    //     },
    // ]);

    const handleDeleteNames = data => {
        
        const a = SelectApplyNames.filter((list, i) => {
            return list.text === data.text ? '' : list;
        });
        setSelectApplyNames(a);
        
    };

    const closeModal = () => {
        setApplyMainModalOpen(false);
        setApplyModalOpen(false);
        setAcceptModalOpen(false);
        setModalIsOpen(false);
    };
    const ApplyModalhandleClicks = e => {
        
        setModalIsOpen(true);
        setApplyModalOpen(true);
    };

    const AcceptModalhandleClicks = e => {
        setModalIsOpen(true);
        setAcceptModalOpen(true);
    };


    const payment_user_info_select = async() => {
        try {
            
            const payment_user_info_select_Axios = await request.get(`/semtek/payment_user_info_select`, {
                params: {
                    id:Login_Info.id
                }
            })

            if (payment_user_info_select_Axios.data.dataSuccess) {
                dispatch(Payment_Apply_User_Change_Func(payment_user_info_select_Axios.data.Apply_payment_user_info_select_Rows))
                dispatch(Payment_Review_User_Change_Func(payment_user_info_select_Axios.data.Review_payment_user_info_select_Rows))
                dispatch(Payment_Accept_User_Change_Func(payment_user_info_select_Axios.data.Accept_payment_user_info_select_Rows))
            }

        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        payment_user_info_select();
    },[])

    return (
        <ApplyPaymentMainDivBox>
            <div className="PersonalApplyBodyConent_ApplyContents_Sign">
                <div className="PayMentFlexDivBox">
                            <h4>결재선</h4>
                            <div>
                                <button
                                    onClick={() => {
                                        setModalIsOpen(true);
                                        setApplyMainModalOpen(true);
                                    }}
                                >
                                    결재선 설정
                                </button>
                            </div>
                        </div>

                  <div className="PayMent_Main_Flex_Box">
                <div className="PayMent_Container">
                        <div className="Payment_Title">신청</div>
                               
                        {Apply_User_State.map((list) => {
                            return      <div className="Payment_Content" key={list.epid}>
                                <div className="First">{ list.department_name}</div>
                                <div className="Second"></div>
                                <div className="Third">{ list.cn}</div>
                            </div>       
                        })}
                
                </div>
                <div className="PayMent_Container">
                        <div className="Payment_Title">검토</div>
                        {Review_User_State.map((list) => {
                            return    <div className="Payment_Content"  key={list.epid}>
                        <div className="First">{ list.department_name}</div>
                        <div className="Second"></div>
                                <div className="Third">{ list.cn}</div>
                    </div>
                        })}
                 
                    
                     
                    
                </div>
                <div className="PayMent_Container">
                    <div className="Payment_Title">승인</div>
                         {Accept_User_State.map((list) => {
                            return    <div className="Payment_Content"  key={list.epid}>
                        <div className="First">{ list.department_name}</div>
                        <div className="Second"></div>
                                <div className="Third">{ list.cn}</div>
                    </div>
                         })}
                    
                </div>
            </div>
                
            </div>
          <UserModal modalIsOpen={modalIsOpen} setModalIsOpen={data=>setModalIsOpen(data)}></UserModal>
     </ApplyPaymentMainDivBox>   
    )
}

export default ApplyPayment;
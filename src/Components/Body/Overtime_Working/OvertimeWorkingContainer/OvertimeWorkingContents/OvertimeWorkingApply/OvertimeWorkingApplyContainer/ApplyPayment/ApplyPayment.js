import React, { useState } from 'react';
import { ApplyPaymentMainDivBox } from '../../../../../../Annual_Leave/AnnualLeaveContainer/AnnualLeaveContents/AnnualLeaveApply/AnnualLeaveApplyContainer/AnnualLeaveApplyContent/ApplyPayment/ApplyPayment';
import { BsPlusCircle } from 'react-icons/bs';

const ApplyPayment = () => {
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
    const [SendSelectAcceptNames, setSendSelectAcceptNames] = useState([
        {
            id: 1,
            text: '김성준',
        },
        {
            id: 2,
            text: '이지형',
        },
        {
            id: 3,
            text: '차재윤',
        },
    ]);
    const [SelectAcceptNames, setSelectAcceptNames] = useState([
        {
            id: 1,
            text: '김성준',
        },
        {
            id: 2,
            text: '이지형',
        },
        {
            id: 3,
            text: '차재윤',
        },
    ]);

    const handleDeleteNames = data => {
        console.log(data);
        const a = SelectApplyNames.filter((list, i) => {
            return list.text === data.text ? '' : list;
        });
        setSelectApplyNames(a);
        console.log(a);
    };

    const closeModal = () => {
        setApplyMainModalOpen(false);
        setApplyModalOpen(false);
        setAcceptModalOpen(false);
        setModalIsOpen(false);
    };
    const ApplyModalhandleClicks = e => {
        console.log(e);
        setModalIsOpen(true);
        setApplyModalOpen(true);
    };

    const AcceptModalhandleClicks = e => {
        setModalIsOpen(true);
        setAcceptModalOpen(true);
    };

    return (
        <div>
            <ApplyPaymentMainDivBox>
                <div className="PersonalApplyBodyConent_ApplyContents_Sign">
                    <div>
                        <div>
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

                            <table>
                                <tbody>
                                    <tr>
                                        <th rowSpan={3} className="ClicksButtonMainTh">
                                            <div>신청</div>
                                            {/* <div className="ClicksButtonMainIcon" onClick={e => ApplyModalhandleClicks(e)}>
                                            <BsPlusCircle></BsPlusCircle>
                                        </div> */}
                                        </th>
                                        <th></th>
                                        <th></th>
                                        <th></th>
                                        <th></th>
                                        <th rowSpan={3} className="ClicksButtonMainTh">
                                            <div>처리</div>
                                            <div className="ClicksButtonMainIcon" onClick={e => AcceptModalhandleClicks(e)}>
                                                <BsPlusCircle></BsPlusCircle>
                                            </div>
                                        </th>
                                        <th></th>
                                        <th></th>
                                        <th></th>
                                        <th></th>
                                    </tr>
                                    <tr className="PersonalApplyBodyCotent_ApplyContentsTable">
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                    </tr>
                                    <tr>
                                        {SendSelectApplyNames.map((list, i) => {
                                            return <td>{list.text}</td>;
                                        })}
                                        {Array(4 - SendSelectApplyNames.length)
                                            .fill(0)
                                            .map((list, i) => {
                                                return <td></td>;
                                            })}

                                        {SendSelectAcceptNames.map((list, i) => {
                                            return <td>{list.text}</td>;
                                        })}

                                        {Array(4 - SendSelectAcceptNames.length)
                                            .fill(0)
                                            .map((list, i) => {
                                                return <td></td>;
                                            })}
                                    </tr>
                                    <tr>
                                        <th>참조</th>
                                        <td colSpan="9" style={{ textAlign: 'left', paddingLeft: '20px' }}>
                                            <input
                                                style={{ height: '30px', border: '1px solid lightgray', paddingLeft: '10px' }}
                                                placeholder="클릭후 입력하세요"
                                            ></input>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
                {/* <Modal isOpen={modalIsOpen} style={customStyles}>
                <div>
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
                </div>
            </Modal> */}
            </ApplyPaymentMainDivBox>
        </div>
    );
};

export default ApplyPayment;

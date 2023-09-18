import React from 'react';
import Modal from 'react-modal';
import styled from 'styled-components';
import { RiCloseFill } from 'react-icons/ri';

const ApplyModalMainDivBox = styled.div`
    border: 1px solid black;
    position: relative;
    .Close_Button_Container {
        position: absolute;
        top: 0px;
        right: 0px;
        color: red;
        font-size: 1.2em;
        font-weight: bolder;
        :hover {
            cursor: pointer;
        }
    }
`;

const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
        width: '90%',
        height: '90%',
        zIndex: '40000',
    },
};
Modal.setAppElement('#ApplyModal');
const ApplyModal = ({ Vacation_Pay_Modal_Is_Open, setVacation_Pay_Modal_Is_Open }) => {
    return (
        <Modal isOpen={Vacation_Pay_Modal_Is_Open} style={customStyles} contentLabel="Apply Modal">
            <ApplyModalMainDivBox>
                <div className="Close_Button_Container" onClick={() => setVacation_Pay_Modal_Is_Open(false)}>
                    <RiCloseFill></RiCloseFill>
                </div>
            </ApplyModalMainDivBox>
        </Modal>
    );
};

export default ApplyModal;

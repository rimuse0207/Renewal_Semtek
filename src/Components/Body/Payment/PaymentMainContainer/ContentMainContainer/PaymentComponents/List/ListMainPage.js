import React from 'react';
import styled from 'styled-components';

const ListMainPageMainDivBox = styled.div`
    border: 1px solid black;
    .List_Main_Container {
        ::after {
            clear: both;
            content: '';
            display: block;
        }
        .List_Main_Left_Container {
            border: 1px solid lightgray;
            width: 40%;
            float: left;
            height: 65vh;
        }
        .List_Main_Right_Container {
            width: 60%;
            float: right;
        }
    }
`;

const ListMainPage = () => {
    return (
        <ListMainPageMainDivBox>
            <div className="List_Main_Container">
                <div className="List_Main_Left_Container"></div>
                <div className="List_Main_Right_Container"></div>
            </div>
        </ListMainPageMainDivBox>
    );
};

export default ListMainPage;

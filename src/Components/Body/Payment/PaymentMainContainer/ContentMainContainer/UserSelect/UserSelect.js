import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import Select from 'react-select';
import { request } from '../../../../../../API';
import { useDispatch, useSelector } from 'react-redux';
import { Payment_User_Select_Change_Func } from '../../../../../../Models/PaymentUserReducer/PaymentUserSelectReduce';

import styled from 'styled-components';

const UserSelectMainDivBox = styled.div``;

const UserSelect = () => {
    const dispatch = useDispatch();
    const [Select_Team_User_List, setSelect_Team_User_List] = useState([]);
    const [Now_Selected_User, setNow_Selected_User] = useState({
        value: 'ALL',
        label: '전 인원 || 전체 || ALL',
    });
    const SelectLeftHeaderInfo = useSelector(state => state.PaymentUserSelectReducerState.User_Select);
    const Login_Info = useSelector(state => state.Login_Info_Reducer_State.Login_Info);

    const SelectHandleChange = e => {
        dispatch(Payment_User_Select_Change_Func(e));
        setNow_Selected_User(e);
    };

    const Selected_User_Change_Func = async () => {
        try {
            const Selected_User_Change_Func_Axios = await request.post('/semtek/Selected_User_Change_Func', {
                Now_Selected_User,
                ID: Login_Info.id,
                Include_Menu: 'overtime',
            });

            if (Selected_User_Change_Func_Axios.data.dataSuccess) {
                setSelect_Team_User_List(Selected_User_Change_Func_Axios.data.User_Select_Options);
            }
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        Selected_User_Change_Func();
    }, []);

    return (
        <UserSelectMainDivBox>
            <Select
                className="basic-single"
                classNamePrefix="이름 또는 이메일 검색..."
                placeholder="이름 또는 이메일 검색..."
                value={SelectLeftHeaderInfo}
                isClearable={true}
                isSearchable={true}
                name="User_Search"
                options={Select_Team_User_List}
                onChange={e => SelectHandleChange(e)}
            />
        </UserSelectMainDivBox>
    );
};

export default UserSelect;

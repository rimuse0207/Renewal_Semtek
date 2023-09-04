import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import Select from 'react-select';
import { request } from '../../../../../../API';
import { useDispatch, useSelector } from 'react-redux';
import { Payment_User_Select_Change_Func } from '../../../../../../Models/PaymentUserReducer/PaymentUserSelectReduce';

const UserSelect = () => {
    const dispatch = useDispatch();
    const [SelectUserInfoData, setSelectUserInfoData] = useState([]);
    const SelectLeftHeaderInfo = useSelector(state => state.PaymentUserSelectReducerState.User_Select);
    const Login_Info = useSelector(state => state.Login_Info_Reducer_State.Login_Info);

    const SelectHandleChange = e => {
        dispatch(Payment_User_Select_Change_Func(e));
    };

    const Select_UserInfoDataGetting = async () => {
        const ChangeData = [];
        try {
            const Select_UserInfoDataGetting_Axios = await request.get(`/semtek/PayMent_User_Select_Info`, {
                params: {
                    ID: Login_Info.id,
                },
            });
            if (Select_UserInfoDataGetting_Axios.data.dataSuccess) {
                setSelectUserInfoData(ChangeData.concat(Select_UserInfoDataGetting_Axios.data.User_Select_Data));
            }
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        Select_UserInfoDataGetting();
    }, []);
    return (
        <div>
            <Select
                className="basic-single"
                classNamePrefix="이름 또는 이메일 검색..."
                placeholder="이름 또는 이메일 검색..."
                value={SelectLeftHeaderInfo}
                isClearable={true}
                isSearchable={true}
                name="User_Search"
                options={SelectUserInfoData}
                onChange={e => SelectHandleChange(e)}
            />
        </div>
    );
};

export default UserSelect;

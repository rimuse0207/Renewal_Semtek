import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import Select from 'react-select';
import { request } from '../../../../../../API';
const UserSelect = ({ SelectLeftHeaderInfo, setSelectLeftHeaderInfo }) => {
    const [SelectUserInfoData, setSelectUserInfoData] = useState([{ value: 'ALL', label: 'ALL' }]);

    const SelectHandleChange = e => {
        setSelectLeftHeaderInfo(e);
    };

    const Select_UserInfoDataGetting = async () => {
        const ChangeData = [{ value: 'ALL', label: 'ALL' }];
        try {
            const Select_UserInfoDataGetting_Axios = await request.get(`/DepartmentRouter/Select_UserInfoDataGetting`);
            console.log(Select_UserInfoDataGetting_Axios);
            if (Select_UserInfoDataGetting_Axios.data.dataSuccess) {
                setSelectUserInfoData(ChangeData.concat(Select_UserInfoDataGetting_Axios.data.Select_User_datas));
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
                defaultValue={SelectLeftHeaderInfo}
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

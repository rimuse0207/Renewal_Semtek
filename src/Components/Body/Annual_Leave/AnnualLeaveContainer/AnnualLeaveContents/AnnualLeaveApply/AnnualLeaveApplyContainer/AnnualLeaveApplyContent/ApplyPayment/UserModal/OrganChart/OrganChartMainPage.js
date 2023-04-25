import React, { useEffect,useState } from "react";
import Tree from 'react-animated-tree-v2';
import OrganChartData from "./OrganChartData/OrganChartData";
import { request } from "../../../../../../../../../../../API";
import styled from "styled-components";

const OrganChartMainPageMainDivBox = styled.div`
    .treeview{
    span{
        :hover{
            cursor: pointer;
            color:blue;
        }
    }
}
`


const OrganChartMainPage = ({  ClickedUser,setUserDetailInfo,setSelectUserInfoData,setSelectUserNames,UserSearchModalOn }) => {
  const [OrganChartState, setOrganChartState] = useState([]);
    const [ClickItemSelected, setClickItemSelected] = useState(null);
    const [SearchUser, setSearchUser] = useState("");
    


    const UserClickFunction = () => {
        const data = {
            value: ClickedUser.email_address,
            department_code :ClickedUser.department_code
        }
        SelectHandleChange(data);
    }

    const SelectHandleChange = async (e) => {
        if (e) {
             setSelectUserNames(e.value);
            await Upper_Department_Select_Getting(e.department_code)
            setClickItemSelected(e.department_code)   
        } else {
            setSearchUser('');
        }
    }

    const Upper_Department_Select_Getting = async (departmentCode) => {
        try {

            const Upper_Department_Select_Getting_Axios = await request(`/DepartmentRouter/Upper_Department_Select_Getting_Semtek`, {
                params: {
                    departmentCode
                }
            })

            if (Upper_Department_Select_Getting_Axios.data.dataSuccess) {
                setOrganChartState(Upper_Department_Select_Getting_Axios.data.Tree_DepartMent)
             
            }

        } catch (error) {
            console.log(error);
        }
    }


    const HandleClickItemShowInfo = (item) => {
        try {
            setClickItemSelected(item);
        } catch (error) {
            console.log(error);
        }
    }


    const Select_UserInfoDataGetting = async () => {
        try {
            
            const Select_UserInfoDataGetting_Axios = await request.get(`/DepartmentRouter/Select_UserInfoDataGetting`)
            if (Select_UserInfoDataGetting_Axios.data.dataSuccess) {
                setSelectUserInfoData(Select_UserInfoDataGetting_Axios.data.Select_User_datas)
                
            }
        } catch (error) {
            console.log(error);
        
        }
    }


    const OrganDataGetting = async () => {
        try {
            
            const OrganDataGetting_Axios = await request.get(`/DepartmentRouter/DepartMent_Data_Semtek`, {
                params: {
                    SearchUser
                }
            });
            if (OrganDataGetting_Axios.data.dataSuccess) {
                setOrganChartState(OrganDataGetting_Axios.data.Tree_DepartMent)
            }

        } catch (error) {
            console.log(error);
        }
    }
    
    const ChangeSelectedInfoGettingPersonInfo = async () => {
        try {
            
            const ChangeSelectedInfoGettingPersonInfo_Axios = await request.get(`/DepartmentRouter/ChangeSelectedInfoGettingPersonInfo_Semtek`, {
                params: {
                    ClickItemSelected
                }
            })
            console.log(ChangeSelectedInfoGettingPersonInfo_Axios)
            if (ChangeSelectedInfoGettingPersonInfo_Axios.data.dataSuccess) {
                setUserDetailInfo(ChangeSelectedInfoGettingPersonInfo_Axios.data.ChangeSelectedInfoGettingPersonInfo_Rows)
            }

        } catch (error) {
            console.log(error);
        }
    }
    

    useEffect(() => {
        if (UserSearchModalOn) {
            OrganDataGetting();
            Select_UserInfoDataGetting();
        } else {
            setClickItemSelected(null);
            setUserDetailInfo([]);
        }
    },[UserSearchModalOn])

    useEffect(() => {
        
        if (ClickItemSelected) {
            ChangeSelectedInfoGettingPersonInfo();
        }

    },[ClickItemSelected])
    
    useEffect(() => {
        if (ClickedUser) {
            UserClickFunction()
        } else {
            
        }
    },[ClickedUser])

    return (
        <OrganChartMainPageMainDivBox>
        <div className="Float_Left_Container_Organ">
                        {OrganChartState.map((list) => {
                            return list.children.length > 0 ?
                                    (<Tree
                                        key={list.department_code}
                                content={list.department_name}  
                                itemId={list.department_code}
                                onItemClick={(content) => HandleClickItemShowInfo(content)}
                                        open={list.openChecking}
                                        visible={list.openChecking}
                            >
                                <OrganChartData items={list.children} HandleClickItemShowInfo={(content)=>HandleClickItemShowInfo(content)}></OrganChartData>
                                    </Tree>) : 
                                    (<Tree
                                    key={list.department_code}    content={list.department_name}
                                         open={list.openChecking}
                                        visible={list.openChecking}
                                itemId={list.department_code}
                                        onItemClick={(content) => HandleClickItemShowInfo(content)}></Tree>)
                            })}
                        
            </div>
            </OrganChartMainPageMainDivBox>
    )
}

export default OrganChartMainPage;
import React,{useEffect} from "react";
import styled from "styled-components";
import AnnualLeaveContainerMainPage from "./AnnualLeaveContainer/AnnualLeaveContainerMainPage";
import { useDispatch, useSelector } from "react-redux";
import { get_Vacation_Info_State_API } from "../../../Models/VacationInfoReducer/VacationInfoReducer";

const AnnualLeaveMainPageMainDivBox = styled.div`
    
`
const AnnualLeaveMainPage = () => {
     const dispatch = useDispatch();
    const Login_Info_Reducer_State = useSelector(state => state.Login_Info_Reducer_State.Login_Info);
    

    useEffect(() => {
        dispatch(get_Vacation_Info_State_API(Login_Info_Reducer_State.id))
    },[])
    return (
        <AnnualLeaveMainPageMainDivBox>
            <AnnualLeaveContainerMainPage></AnnualLeaveContainerMainPage>
        </AnnualLeaveMainPageMainDivBox>
    )
}
export default AnnualLeaveMainPage;
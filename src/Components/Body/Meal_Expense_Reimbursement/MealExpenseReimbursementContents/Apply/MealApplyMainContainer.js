import React from 'react';
import ApplyBasicSetting from '../../../Annual_Leave/AnnualLeaveContainer/AnnualLeaveContents/AnnualLeaveApply/AnnualLeaveApplyContainer/AnnualLeaveApplyContent/ApplyBasicSetting/ApplyBasicSetting';
import ApplyPayment from '../../../Annual_Leave/AnnualLeaveContainer/AnnualLeaveContents/AnnualLeaveApply/AnnualLeaveApplyContainer/AnnualLeaveApplyContent/ApplyPayment/ApplyPayment';
import { AnnualLeaveApplyContentMainPageMainDivBox } from '../../../Annual_Leave/AnnualLeaveContainer/AnnualLeaveContents/AnnualLeaveApply/AnnualLeaveApplyContainer/AnnualLeaveApplyContent/AnnualLeaveApplyContentMainPage';
import ApplySelectTable from './ApplyTable/ApplySelectTable';
import ApplyUserSelect from './ApplyUserSelect/ApplyUserSelect';
import { useDispatch, useSelector } from 'react-redux';
import { request } from '../../../../../API';
import { Meal_Charge_Apply_State_Func } from '../../../../../Models/MealApplyReducer/MealApplyReducer';

const MealApplyMainContainer = () => {
    const dispatch = useDispatch();
    const Login_Info = useSelector(state => state.Login_Info_Reducer_State.Login_Info);
    const MealChargeApplyState = useSelector(state => state.MealChargeApplyReducerState.Meal_Charge_State);
    const Apply_User_State = useSelector(state => state.PaymentUserReducerState.Apply);
    const Review_User_State = useSelector(state => state.PaymentUserReducerState.Review);
    const Accept_User_State = useSelector(state => state.PaymentUserReducerState.Accept);
    const HandleClick_Apply_Overtime_Submit = async () => {
        console.log(MealChargeApplyState);

        if (MealChargeApplyState.some(list => list.spending === 0)) {
            alert('공란을 전부 적어주세요.');
            return;
        } else if (MealChargeApplyState.some(list => list.location === '')) {
            alert('공란을 전부 적어주세요.');
            return;
        } else if (MealChargeApplyState.some(list => list.place === '')) {
            alert('공란을 전부 적어주세요.');
            return;
        } else {
            const Meal_Apply_Sending_Save_Axios = await request.post('/semtek/Meal_Apply_Sending_Save', {
                MealChargeApplyState,
                ID: Login_Info.id,
                Apply_User_State,
                Review_User_State,
                Accept_User_State,
            });
            if (Meal_Apply_Sending_Save_Axios.data.dataSuccess) {
                alert('등록이 완료 되었습니다.');
                if (Meal_Apply_Sending_Save_Axios.data.Result_Data.Data_Already.length > 0) {
                    // 데이터가 있을 때 남기기
                    alert('이미 등록된 식대가 있습니다.');
                }
                if (Meal_Apply_Sending_Save_Axios.data.Result_Data.Data_Nothing.length > 0) {
                    // 데이터 저장한것은 삭제시키기
                    const filteredArray = MealChargeApplyState.filter(
                        item1 => !Meal_Apply_Sending_Save_Axios.data.Result_Data.Data_Nothing.some(item2 => item2.key === item1.key)
                    );
                    dispatch(Meal_Charge_Apply_State_Func(filteredArray));
                    alert('등록이 완료 된 데이터는 삭제 처리 됩니다.');
                }
            }
        }
    };

    return (
        <AnnualLeaveApplyContentMainPageMainDivBox>
            <ApplyBasicSetting Selected={'Meal'}></ApplyBasicSetting>
            <ApplyPayment></ApplyPayment>
            <ApplySelectTable></ApplySelectTable>
            <ApplyUserSelect></ApplyUserSelect>
            <div className="PersonalNavigation_ApplyPage">
                <div onClick={() => HandleClick_Apply_Overtime_Submit()}>식대정산 등록</div>
            </div>
        </AnnualLeaveApplyContentMainPageMainDivBox>
    );
};

export default MealApplyMainContainer;

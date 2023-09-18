import React from 'react';
import AnnualLeaveSelectContainer from './AnnualLeaveSelectContainer/AnnualLeaveSelectContainer';
import AnnualLeaveApplyMainPage from '../AnnualLeaveApply/AnnualLeaveApplyMainPage';
import AnnualLeaveMainPage from '../AnnualLeaveMain/AnnualLeaveMainPage';
import TeamSelectAnnualLeaveContainer from '../AdminAnnualLeaveContainer/Content/TeamSelectAnnualLeave/TeamSelectAnnualLeaveContainer';

const AnnualLeaveSelectMainPage = ({ currentPageOn }) => {
    return (
        <div>
            {currentPageOn === 'MainPage' ? <AnnualLeaveMainPage currentPageOn={currentPageOn}></AnnualLeaveMainPage> : <></>}
            {currentPageOn === 'AnnualLeaveSelect' ? (
                <AnnualLeaveSelectContainer currentPageOn={currentPageOn}></AnnualLeaveSelectContainer>
            ) : (
                <></>
            )}
            {currentPageOn === 'ApplyAnnualLeave' ? (
                <AnnualLeaveApplyMainPage currentPageOn={currentPageOn}></AnnualLeaveApplyMainPage>
            ) : (
                <></>
            )}
            {currentPageOn === 'Team_MainPage' ? <TeamSelectAnnualLeaveContainer></TeamSelectAnnualLeaveContainer> : <></>}
            <div style={{ height: '100px' }}></div>
        </div>
    );
};
export default AnnualLeaveSelectMainPage;

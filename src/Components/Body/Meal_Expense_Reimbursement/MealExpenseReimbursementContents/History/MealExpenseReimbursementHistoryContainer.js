import React from 'react';
import styled from 'styled-components';
import MealHistoryNavigation from './HistoryNavigation/MealHistoryNavigation';
import { useState } from 'react';
import HistoryContentContainer from './HistoryContent/HistoryContentContainer';

const MealExpenseReimbursementHistoryContainerMainDivBox = styled.div``;

const MealExpenseReimbursementHistoryContainer = () => {
    const [StaticsNaviButton, setStaticsNaviButton] = useState('History');
    return (
        <MealExpenseReimbursementHistoryContainerMainDivBox>
            <MealHistoryNavigation NaviSelected={StaticsNaviButton} setStaticsNaviButton={setStaticsNaviButton}></MealHistoryNavigation>
            <HistoryContentContainer StaticsNaviButton={StaticsNaviButton}></HistoryContentContainer>
        </MealExpenseReimbursementHistoryContainerMainDivBox>
    );
};

export default MealExpenseReimbursementHistoryContainer;

import React from 'react';
import PaymentMainContainer from './PaymentMainContainer/PaymentMainContainer';
import NavigationMainPage from '../../Header/NavigationMainPage';

const PaymentMainPage = () => {
    return (
        <div>
            <NavigationMainPage></NavigationMainPage>
            <PaymentMainContainer></PaymentMainContainer>
        </div>
    );
};

export default PaymentMainPage;

import React from "react";
import {HashRouter, BrowserRouter, Route, Switch } from 'react-router-dom';
import AnnualLeaveMainPage from "./Components/Body/Annual_Leave/AnnualLeaveMainPage";
import HomeMainPage from "./Components/Body/Home/HomeMainPage";
import OvertimeWorkingMainPage from "./Components/Body/Overtime_Working/OvertimeWorkingMainPage";
const RouterPage = () => {
    return (
        <div>
         <BrowserRouter>
            <Switch>
                <Route exact path="/Main" component={HomeMainPage}></Route>
                    <Route exact path='/Annual_Leave' component={AnnualLeaveMainPage}></Route>
                    <Route exact path='/Overtime_Working' component={OvertimeWorkingMainPage}></Route>
            </Switch>
            </BrowserRouter>
        </div>
    )
}
export default RouterPage;
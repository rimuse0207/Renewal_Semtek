import React from "react";
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import AnnualLeaveMainPage from "./Components/Body/Annual_Leave/AnnualLeaveMainPage";
import HomeMainPage from "./Components/Body/Home/HomeMainPage";
import OvertimeWorkingMainPage from "./Components/Body/Overtime_Working/OvertimeWorkingMainPage";
import LoginMainPage from "./Components/Body/Login/LoginMainPage";
import AnnuelLeavePrinter from "./Components/Printer/AnnuelLeavePrinter";
const RouterPage = () => {
    return (
        <div>
         <BrowserRouter>
                <Switch>
                    <Route exact path="/" component={LoginMainPage}></Route>
                    <Route exact path="/Main" component={HomeMainPage}></Route>
                    <Route exact path='/Annual_Leave' component={AnnualLeaveMainPage}></Route>
                    <Route exact path='/Overtime_Working' component={OvertimeWorkingMainPage}></Route>
                    <Route path="/AnnuelLeaveprinter" component={AnnuelLeavePrinter}></Route>
                 </Switch>
            </BrowserRouter>
        </div>
    )
}
export default RouterPage;
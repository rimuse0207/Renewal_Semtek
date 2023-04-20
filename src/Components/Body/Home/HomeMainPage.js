import React from "react";
import styled from "styled-components"
import HomeNavigationMainPage from "./HomeNavigation/HomeNavigationMainPage";
import HomeContainerMainPage from "./HomeContainer/HomeContainerMainPage";
import NavigationMainPage from "../../Header/NavigationMainPage";

const HomeMainPageMainDivBox = styled.div`
    /* border:1px solid black; */
`

const HomeMainPage = () => {
    return (
        <HomeMainPageMainDivBox>
            <NavigationMainPage></NavigationMainPage>
            <HomeNavigationMainPage></HomeNavigationMainPage>
            <HomeContainerMainPage></HomeContainerMainPage>
        </HomeMainPageMainDivBox>
    )
}
export default HomeMainPage;
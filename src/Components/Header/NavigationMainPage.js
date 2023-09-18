import React from 'react';
import styled from 'styled-components';
import { BsFillPersonFill } from 'react-icons/bs';
import { Link } from 'react-router-dom';
// import Select from 'react-select';
import { useLocation } from 'react-router-dom';
import { useState } from 'react';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import InputLabel from '@mui/material/InputLabel';
import { useHistory } from 'react-router-dom';
const NavigationMainPageMainDivBox = styled.div`
    position: sticky;
    height: 60px;
    width: 100%;
    padding: 0 20px 0 24px;
    border-bottom: 1px solid #dadce0;
    z-index: 1;
    background: white;
    .NavigationMainFlexdiv {
        display: flex;
        justify-content: space-between;
        align-items: center;
        height: 60px;
        width: 90%;
        margin: 0 auto;
    }
    .Navigation_Icons {
        width: 45px;
        height: 45px;
        background-color: lightgray;
        border-radius: 50%;

        svg {
            padding: 10px;
            width: 100%;
            height: 100%;
            color: darkgray;
        }
    }
    .Main_Logo_Container {
        position: relative;
        .Main_Menu_Move_Container {
            position: absolute;
            right: -400px;
            top: -5px;
            width: 300px;
        }
    }
`;

const NavigationMainPage = () => {
    const history = useHistory();
    const location = useLocation();
    const [Nav_Select_Options_Menus, setNav_Select_Options_Menus] = useState([
        {
            value: '/Main',
            label: '홈(메인)',
        },
        {
            value: '/Overtime_Working',
            label: '연장근무',
        },
        {
            value: '/Annual_Leave',
            label: '휴가',
        },
    ]);
    const [Now_Select, setNow_Select] = useState({ value: location.pathname });
    const Handle_Change_Move_To_Go = e => {
        history.push(`${e.target.value}`);
    };

    return (
        <NavigationMainPageMainDivBox>
            <div className="NavigationMainFlexdiv">
                <div className="Main_Logo_Container">
                    <Link to="/Main">
                        <h2>SEMTEK</h2>
                    </Link>
                    <div className="Main_Menu_Move_Container">
                        <FormControl sx={{ m: 1, minWidth: 100, margin: 0, width: '100%' }} size="small">
                            {/* <InputLabel id="demo-select-small">메뉴 이동</InputLabel> */}
                            <Select
                                labelId="demo-select-small"
                                id="demo-select-small"
                                value={location.pathname}
                                onChange={event => Handle_Change_Move_To_Go(event)}
                            >
                                {Nav_Select_Options_Menus.map(list => {
                                    return (
                                        <MenuItem value={list.value} key={list.value}>
                                            {list.label}
                                        </MenuItem>
                                    );
                                })}
                            </Select>
                        </FormControl>
                    </div>
                </div>

                <div className="Navigation_Icons">
                    <BsFillPersonFill></BsFillPersonFill>
                </div>
            </div>
        </NavigationMainPageMainDivBox>
    );
};

export default NavigationMainPage;

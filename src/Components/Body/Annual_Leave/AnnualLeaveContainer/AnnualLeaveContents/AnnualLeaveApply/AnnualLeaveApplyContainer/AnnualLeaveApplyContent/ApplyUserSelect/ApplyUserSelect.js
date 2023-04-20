import React,{useState} from "react";
import styled from "styled-components"

const ApplyUserSelectMainDivBox = styled.div`
  .PersonApplyContentUserSelectPageMain_UserSelectBox {
        h4 {
            margin-top: 20px;
            margin-bottom: 10px;
        }
        ul {
            li {
                font-size: 1.1em;
                margin-bottom: 20px;
                .UserSelectHover {
                    display: inline-block;
                    :hover {
                        cursor: pointer;
                    }
                    label {
                        :hover {
                            cursor: pointer;
                        }
                    }
                }
            }
        }
    }
`
const ApplyUserSelect = () => {
    const [userSelected, setUserSelected] = useState({
        self: {
            checked: true,
            name: '',
        },
        other: {
            checked: false,
            name: '',
        },
    });
    const handleUserSelect = e => {
        if (e.target.value === 'other') {
            setUserSelected({
                self: {
                    checked: false,
                    name: '',
                },
                other: {
                    checked: true,
                    name: e.target.value,
                },
            });
        } else {
            setUserSelected({
                self: {
                    checked: true,
                    name: '',
                },
                other: {
                    checked: false,
                    name: '',
                },
            });
        }
    };
    return (
        <ApplyUserSelectMainDivBox>
              <div className="PersonApplyContentUserSelectPageMain_UserSelectBox">
                <div>
                    <h4>사용자</h4>
                    <ul>
                        <li>
                            <div className="UserSelectHover">
                                <label>
                                    <input
                                        type="radio"
                                        name="UsersSelect"
                                        value="self"
                                        checked={userSelected.self.checked}
                                        onChange={e => handleUserSelect(e)}
                                    ></input>
                                    테스트
                                </label>
                            </div>
                        </li>
                        <li>
                            <div className="UserSelectHover">
                                <label>
                                    <input
                                        type="radio"
                                        name="UsersSelect"
                                        value="other"
                                        checked={userSelected.other.checked}
                                        onChange={e => handleUserSelect(e)}
                                    ></input>
                                    동료
                                </label>
                            </div>
                            {userSelected.other.checked ? (
                                <div>
                                    <input placeholder="클릭후 입력하세요"></input>
                                </div>
                            ) : (
                                <div></div>
                            )}
                        </li>
                    </ul>
                </div>
            </div>
        </ApplyUserSelectMainDivBox>
    )
}
export default ApplyUserSelect
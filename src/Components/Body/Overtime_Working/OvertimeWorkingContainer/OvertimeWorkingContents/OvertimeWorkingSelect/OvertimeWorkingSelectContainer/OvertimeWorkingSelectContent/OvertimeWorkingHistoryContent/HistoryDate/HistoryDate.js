import React from 'react';
import { AnnualLeaveSelectDateMainDivBox } from '../../../../../../../../Annual_Leave/AnnualLeaveContainer/AnnualLeaveContents/AnnualLeaveSelect/AnnualLeaveSelectContainer/AnnualLeaveSelectContent/AnnualLeaveHistoryContent/AnnualLeaveSelectDate/AnnualLeaveSelectDate';
import moment from 'moment';
import { MdArrowBackIos, MdArrowForwardIos } from 'react-icons/md';

const HistoryDate = ({ DateData, setDateData, Move_Division }) => {
    return (
        <div>
            <AnnualLeaveSelectDateMainDivBox>
                <div className="HistoryMianNaviFlexBox">
                    <div
                        className="ReactIcons_ArrowIcon"
                        onClick={() =>
                            setDateData(
                                moment(DateData)
                                    .clone()
                                    .subtract(1, Move_Division)
                                    .format(Move_Division === 'year' ? 'YYYY' : 'YYYY-MM')
                            )
                        }
                    >
                        <MdArrowBackIos></MdArrowBackIos>
                    </div>
                    <h2>{moment(DateData).format(Move_Division === 'year' ? 'YYYY년' : 'YYYY년 MM월')}</h2>
                    <div
                        className="ReactIcons_ArrowIcon"
                        onClick={() =>
                            setDateData(
                                moment(DateData)
                                    .clone()
                                    .add(1, Move_Division)
                                    .format(Move_Division === 'year' ? 'YYYY' : 'YYYY-MM')
                            )
                        }
                    >
                        <MdArrowForwardIos></MdArrowForwardIos>
                    </div>
                </div>
            </AnnualLeaveSelectDateMainDivBox>
        </div>
    );
};

export default HistoryDate;

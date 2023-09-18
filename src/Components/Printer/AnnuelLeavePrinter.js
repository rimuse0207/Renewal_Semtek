import React, { useEffect } from 'react';
import styled from 'styled-components';

import axios from 'axios';
import { request } from '../../API';
const AnnuelLeavePrinterMainDivBox = styled.div`
    width: 21cm;
    min-height: 29.7cm;
    padding: 1.5cm 1.5cm 2cm 1.5cm;
    font-family: Gulim;

    @page {
        size: A4;
        margin: 0;
    }

    @media print {
        .page {
            margin: 0;
            border: initial;
            border-radius: initial;
            width: initial;
            min-height: initial;
            box-shadow: initial;
            background: initial;
            page-break-after: always;
        }
    }

    .Content_Box_Container {
        border: 2px solid black;
        font-size: 0.8em;
        .Content_Box_Cotent_Container {
            display: flex;
            min-height: 50px;
            text-align: center;
            font-weight: bolder;

            div {
                border-bottom: 1px solid black;
                border-right: 1px solid black;
                display: flex;
                align-items: center;
                justify-content: center;
                span {
                    font-size: 0.5em;
                    position: absolute;
                    right: 100px;
                    bottom: 12px;
                    font-weight: lighter;
                }
            }
        }
    }

    .Content_Box_Explain_Container {
        text-align: center;
        display: flex;
        flex-flow: column;
        align-items: center;
        justify-content: space-around;
    }

    .Table_Payment_Container {
        width: 350px;
        border: 1px solid black;
        border-collapse: collapse;
        text-align: center;
        table-layout: fixed;
        font-size: 0.8em;
        th,
        td {
            border: 1px solid black;
        }
    }
    .Printer_Header_Container {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 30px;
        margin-top: 30px;
    }
`;

const AnnuelLeavePrinter = () => {
    const handlesenddata = async () => {
        //         const Vacation_Division = '전자 결재 TEST ( 근태구분 ) Ex. 공가,병가, 연차';
        //         const Vcation_Name = '유성재';
        //         const Vcation_Position = '프로';
        //         const VacatioN_Team = '경영지원';
        //         const Vcation_Period = '2023-09-15 ~ 2023-09-16';
        //         const Vcation_Reason = '테스트 작업중에 있습니다. ( 휴가 신청 사유)';
        //         try {
        //             const GetData = await axios.post(
        //                 `https://openapi.britymail.com/approval/api/v2.0/approvals/submit`,
        //                 {
        //                     aplns: [
        //                         {
        //                             userId: 'sjyoo@dhk.co.kr',
        //                             seq: '0',
        //                             role: '0',
        //                             aplnStatsCode: '0',
        //                             arbPmtYn: 'Y',
        //                             contentsMdfyPmtYn: 'N',
        //                             aplnMdfyPmtYn: 'N',
        //                             opinion: '연차계 결재입니다.',
        //                         },
        //                         {
        //                             userId: 'sjkim@dhk.co.kr',
        //                             seq: '1',
        //                             role: '1',
        //                             aplnStatsCode: '0',
        //                             arbPmtYn: 'Y',
        //                             contentsMdfyPmtYn: 'N',
        //                             aplnMdfyPmtYn: 'N',
        //                         },
        //                         {
        //                             userId: 'sjyoo@dhk.co.kr',
        //                             seq: '0',
        //                             role: '9',
        //                             aplnStatsCode: '0',
        //                             arbPmtYn: 'Y',
        //                             contentsMdfyPmtYn: 'N',
        //                             aplnMdfyPmtYn: 'N',
        //                             opinion: '연차계 결재입니다.',
        //                         },
        //                     ],
        //                     contents: `<TABLE style="border-collapse:collapse;width:916px;word-break:break-all;height:1290px;" class="cui-pasted-table cui-real-table">
        //     <COLGROUP><COL style="width:916px;"/><COL style="width:916px;"/><COL style="width:916px;"/><COL style="width:916px;"/><COL style="width:916px;"/><COL style="width:916px;"/><COL style="width:916px;"/><COL style="width:916px;"/><COL style="width:916px;"/><COL style="width:916px;"/><COL style="width:916px;"/><COL style="width:916px;"/><COL style="width:916px;"/><COL style="width:916px;"/><COL style="width:916px;"/><COL style="width:916px;"/><COL style="width:916px;"/><COL style="width:916px;"/><COL style="width:916px;"/></COLGROUP>
        //     <TBODY>
        //         <TR style>
        //             <TD class="cui-real-td" colspan="19" rowspan="4" style="border-right:1px solid black;height:118.2px;font-size:36pt;font-family:굴림, monospace;text-align:center;color:black;vertical-align:middle;border-bottom:none;white-space:nowrap;">
        //                 <P><SPAN style="font-size:36pt;font-family:굴림, monospace;"><B>휴&nbsp;&nbsp;가&nbsp;&nbsp;계</B></SPAN></P>
        //             </TD>
        //         </TR>
        //         <TR style>
        //         </TR>
        //         <TR style>
        //         </TR>
        //         <TR style>
        //         </TR>
        //         <TR style>
        //             <TD class="cui-real-td" style="height:13.2px;font-size:28pt;font-family:굴림, monospace;text-align:center;vertical-align:bottom;color:black;border-image:initial;white-space:nowrap;border-top:0px none rgb(0, 0, 0);border-right:0px none rgb(0, 0, 0);border-bottom:0px none rgb(0, 0, 0);">
        //                 <P>&nbsp;</P>
        //             </TD>
        //             <TD class="cui-real-td" style="font-size:28pt;font-family:굴림, monospace;text-align:center;vertical-align:bottom;color:black;border:0px none rgb(0, 0, 0);white-space:nowrap;height:13.2px;">
        //                 <P>&nbsp;</P>
        //             </TD>
        //             <TD class="cui-real-td" style="font-size:28pt;font-family:굴림, monospace;text-align:center;vertical-align:bottom;color:black;border:0px none rgb(0, 0, 0);white-space:nowrap;height:13.2px;">
        //                 <P>&nbsp;</P>
        //             </TD>
        //             <TD class="cui-real-td" style="font-size:28pt;font-family:굴림, monospace;text-align:center;vertical-align:bottom;color:black;border:0px none rgb(0, 0, 0);white-space:nowrap;height:13.2px;">
        //                 <P>&nbsp;</P>
        //             </TD>
        //             <TD class="cui-real-td" style="font-size:28pt;font-family:굴림, monospace;text-align:center;vertical-align:bottom;color:black;border:0px none rgb(0, 0, 0);white-space:nowrap;height:13.2px;">
        //                 <P>&nbsp;</P>
        //             </TD>
        //             <TD class="cui-real-td" style="font-size:28pt;font-family:굴림, monospace;text-align:center;vertical-align:bottom;color:black;border:0px none rgb(0, 0, 0);white-space:nowrap;height:13.2px;">
        //                 <P>&nbsp;</P>
        //             </TD>
        //             <TD class="cui-real-td" style="font-size:28pt;font-family:굴림, monospace;text-align:center;vertical-align:bottom;color:black;border:0px none rgb(0, 0, 0);white-space:nowrap;height:13.2px;">
        //                 <P>&nbsp;</P>
        //             </TD>
        //             <TD class="cui-real-td" style="font-size:28pt;font-family:굴림, monospace;text-align:center;vertical-align:bottom;color:black;border:0px none rgb(0, 0, 0);white-space:nowrap;height:13.2px;">
        //                 <P>&nbsp;</P>
        //             </TD>
        //             <TD class="cui-real-td" style="font-size:28pt;font-family:굴림, monospace;text-align:center;vertical-align:bottom;color:black;border:0px none rgb(0, 0, 0);white-space:nowrap;height:13.2px;">
        //                 <P>&nbsp;</P>
        //             </TD>
        //             <TD class="cui-real-td" style="font-size:28pt;font-family:굴림, monospace;text-align:center;vertical-align:bottom;color:black;border:0px none rgb(0, 0, 0);white-space:nowrap;height:13.2px;">
        //                 <P>&nbsp;</P>
        //             </TD>
        //             <TD class="cui-real-td" style="font-size:12pt;font-family:굴림, monospace;text-align:center;color:black;vertical-align:middle;border:0px none rgb(0, 0, 0);white-space:nowrap;height:13.2px;">
        //                 <P>&nbsp;</P>
        //             </TD>
        //             <TD class="cui-real-td" style="font-size:12pt;font-family:굴림, monospace;text-align:center;color:black;vertical-align:middle;border:0px none rgb(0, 0, 0);white-space:nowrap;height:13.2px;">
        //                 <P>&nbsp;</P>
        //             </TD>
        //             <TD class="cui-real-td" style="font-size:12pt;font-family:굴림, monospace;text-align:center;color:black;vertical-align:middle;border:0px none rgb(0, 0, 0);white-space:nowrap;height:13.2px;">
        //                 <P>&nbsp;</P>
        //             </TD>
        //             <TD class="cui-real-td" style="font-size:12pt;font-family:굴림, monospace;text-align:center;color:black;vertical-align:middle;border:0px none rgb(0, 0, 0);white-space:nowrap;height:13.2px;">
        //                 <P>&nbsp;</P>
        //             </TD>
        //             <TD class="cui-real-td" style="font-size:12pt;font-family:굴림, monospace;text-align:center;color:black;vertical-align:middle;border:0px none rgb(0, 0, 0);white-space:nowrap;height:13.2px;">
        //                 <P>&nbsp;</P>
        //             </TD>
        //             <TD class="cui-real-td" style="font-size:12pt;font-family:굴림, monospace;text-align:center;color:black;vertical-align:middle;border:0px none rgb(0, 0, 0);white-space:nowrap;height:13.2px;">
        //                 <P>&nbsp;</P>
        //             </TD>
        //             <TD class="cui-real-td" style="font-size:12pt;font-family:굴림, monospace;text-align:center;color:black;vertical-align:middle;border:0px none rgb(0, 0, 0);white-space:nowrap;height:13.2px;">
        //                 <P>&nbsp;</P>
        //             </TD>
        //             <TD class="cui-real-td" style="font-size:12pt;font-family:굴림, monospace;text-align:center;color:black;vertical-align:middle;border:0px none rgb(0, 0, 0);white-space:nowrap;height:13.2px;">
        //                 <P>&nbsp;</P>
        //             </TD>
        //             <TD class="cui-real-td" style="font-size:12pt;font-family:굴림, monospace;text-align:center;color:black;vertical-align:middle;border-image:initial;white-space:nowrap;border-top:0px none rgb(0, 0, 0);border-bottom:0px none rgb(0, 0, 0);border-left:0px none rgb(0, 0, 0);height:13.2px;">
        //                 <P>&nbsp;</P>
        //             </TD>
        //         </TR>
        //         <TR style>
        //             <TD class="cui-real-td" colspan="3" style="height:68px;font-size:14pt;font-family:굴림, monospace;text-align:center;border:1px solid rgb(0, 0, 0);color:black;vertical-align:middle;white-space:nowrap;">
        //                 <P><SPAN style="font-size:14pt;font-family:굴림, monospace;"><B>소속 부서</B></SPAN></P>
        //             </TD>
        //             <TD class="cui-real-td" colspan="16" style="border-right:1.33px solid black;border-left:none;font-size:14pt;font-family:굴림, monospace;text-align:center;border-top:1.33px solid rgb(0, 0, 0);border-bottom:1px solid rgb(0, 0, 0);color:black;vertical-align:middle;white-space:nowrap;height:68px;">
        //                 <P><SPAN style="font-size:14pt;font-family:굴림, monospace;">${VacatioN_Team}</SPAN></P>
        //             </TD>
        //         </TR>
        //         <TR style>
        //             <TD class="cui-real-td" colspan="3" style="height:68px;font-size:14pt;font-family:굴림, monospace;text-align:center;border:1px solid rgb(0, 0, 0);color:black;vertical-align:middle;white-space:nowrap;">
        //                 <P><SPAN style="font-size:14pt;font-family:굴림, monospace;"><B>직&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;위</B></SPAN></P>
        //             </TD>
        //             <TD class="cui-real-td" colspan="7" style="border-left:none;font-size:14pt;font-family:굴림, monospace;text-align:center;border-top:1px solid rgb(0, 0, 0);border-right:1px solid rgb(0, 0, 0);border-bottom:none;color:black;vertical-align:middle;white-space:nowrap;height:68px;">
        //                 <P><SPAN style="font-size:14pt;font-family:굴림, monospace;">${Vcation_Position}</SPAN></P>
        //             </TD>
        //             <TD class="cui-real-td" colspan="3" style="border-left:none;font-size:14pt;font-family:굴림, monospace;text-align:center;border-top:1px solid rgb(0, 0, 0);border-right:1px solid rgb(0, 0, 0);border-bottom:none;color:black;vertical-align:middle;white-space:nowrap;height:68px;">
        //                 <P><SPAN style="font-size:14pt;font-family:굴림, monospace;"><B>성&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;명</B></SPAN></P>
        //             </TD>
        //             <TD class="cui-real-td" colspan="6" style="border-right:1.33px solid black;border-left:none;font-size:14pt;font-family:굴림, monospace;text-align:center;border-top:1px solid rgb(0, 0, 0);border-bottom:none;color:black;vertical-align:middle;white-space:nowrap;height:68px;">
        //                 <P><SPAN style="font-size:14pt;font-family:굴림, monospace;">${Vcation_Name}</SPAN></P>
        //             </TD>
        //         </TR>
        //         <TR style>
        //             <TD class="cui-real-td" colspan="3" style="border-right:1px solid black;height:48px;font-size:14.0pt;font-family:굴림, monospace;text-align:center;border-top:1px solid #000000;border-bottom:none;border-left:1.33px solid #000000;color:black;vertical-align:middle;white-space:nowrap;">
        //                 <P><SPAN style="font-size:14pt;font-family:굴림, monospace;"><B>&nbsp;&nbsp;&nbsp;기&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;간 (1)</B></SPAN></P>
        //             </TD>
        //             <TD class="cui-real-td" colspan="5" style="border-left:none;font-size:14pt;font-family:굴림, monospace;text-align:center;border-top:1px solid rgb(0, 0, 0);border-right:none;border-bottom:1px solid rgb(0, 0, 0);color:black;vertical-align:middle;white-space:nowrap;height:48px;">
        //                 <P>${Vcation_Period}</P>
        //             </TD>
        //             <TD class="cui-real-td" style="font-size:14pt;font-family:굴림, monospace;text-align:center;border-top:1px solid rgb(0, 0, 0);border-right:none;border-bottom:1px solid rgb(0, 0, 0);border-left:none;color:black;vertical-align:middle;white-space:nowrap;height:48px;">
        //                 <P>&nbsp;</P>
        //             </TD>
        //             <TD class="cui-real-td" style="font-size:14pt;font-family:굴림, monospace;text-align:center;border-top:1px solid rgb(0, 0, 0);border-right:none;border-bottom:1px solid rgb(0, 0, 0);border-left:none;color:black;vertical-align:middle;white-space:nowrap;height:48px;">
        //                 <P style="text-align:left;"><SPAN style="font-size:14pt;font-family:굴림, monospace;">　</SPAN></P>
        //             </TD>
        //             <TD class="cui-real-td" colspan="3" style="border:1px solid rgb(0, 0, 0);font-size:14pt;font-family:굴림, monospace;text-align:center;color:black;vertical-align:middle;white-space:nowrap;height:48px;">
        //                 <P><SPAN style="font-size:14pt;font-family:굴림, monospace;">일수</SPAN></P>
        //             </TD>
        //             <TD class="cui-real-td" style="font-size:14pt;font-family:굴림, monospace;border-top:1px solid rgb(0, 0, 0);border-right:none;border-bottom:1px solid rgb(0, 0, 0);border-left:none;color:black;vertical-align:middle;white-space:nowrap;height:48px;">
        //                 <P><SPAN style="font-size:14pt;font-family:굴림, monospace;"><B>(</B></SPAN></P>
        //             </TD>
        //             <TD class="cui-real-td" colspan="2" style="font-size:14pt;font-family:굴림, monospace;text-align:center;border-top:1px solid rgb(0, 0, 0);border-right:none;border-bottom:1px solid rgb(0, 0, 0);border-left:none;color:black;vertical-align:middle;white-space:nowrap;height:48px;">
        //                 <P><SPAN style="font-size:14pt;font-family:굴림, monospace;"><B>　1</B></SPAN></P>
        //             </TD>
        //             <TD class="cui-real-td" style="font-size:14pt;font-family:굴림, monospace;border-top:1px solid rgb(0, 0, 0);border-right:none;border-bottom:1px solid rgb(0, 0, 0);border-left:none;color:black;vertical-align:middle;white-space:nowrap;height:48px;">
        //                 <P><SPAN style="font-size:14pt;font-family:굴림, monospace;"><B>　</B></SPAN></P>
        //             </TD>
        //             <TD class="cui-real-td" style="font-size:14pt;font-family:굴림, monospace;border-top:1px solid rgb(0, 0, 0);border-right:none;border-bottom:1px solid rgb(0, 0, 0);border-left:none;color:black;vertical-align:middle;white-space:nowrap;height:48px;">
        //                 <P><SPAN style="font-size:14pt;font-family:굴림, monospace;"><B>)</B></SPAN></P>
        //             </TD>
        //             <TD class="cui-real-td" style="font-size:14pt;font-family:굴림, monospace;border-top:1px solid rgb(0, 0, 0);border-right:1.33px solid rgb(0, 0, 0);border-bottom:1px solid rgb(0, 0, 0);border-left:none;color:black;vertical-align:middle;white-space:nowrap;height:48px;">
        //                 <P><SPAN style="font-size:14pt;font-family:굴림, monospace;"><B>일간</B></SPAN></P>
        //             </TD>
        //         </TR>
        //         <TR style>
        //             <TD class="cui-real-td" colspan="3" style="border-right:1px solid black;height:48px;font-size:14.0pt;font-family:굴림, monospace;text-align:center;border-top:1px solid #000000;border-bottom:none;border-left:1.33px solid #000000;color:black;vertical-align:middle;white-space:nowrap;">
        //                 <P><SPAN style="font-size:14pt;font-family:굴림, monospace;"><B>&nbsp;&nbsp;&nbsp;기&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;간 (2)</B></SPAN></P>
        //             </TD>
        //             <TD class="cui-real-td" colspan="5" style="border-left:none;font-size:14pt;font-family:굴림, monospace;text-align:center;border-top:1px solid rgb(0, 0, 0);border-right:none;border-bottom:1px solid rgb(0, 0, 0);color:black;vertical-align:middle;white-space:nowrap;height:48px;">
        //                 <P>&nbsp;</P>
        //             </TD>
        //             <TD class="cui-real-td" style="border-top:none;font-size:14pt;font-family:굴림, monospace;text-align:center;border-right:none;border-bottom:1px solid rgb(0, 0, 0);border-left:none;color:black;vertical-align:middle;white-space:nowrap;height:48px;">
        //                 <P>&nbsp;</P>
        //             </TD>
        //             <TD class="cui-real-td" style="border-top:none;font-size:14pt;font-family:굴림, monospace;text-align:center;border-right:none;border-bottom:1px solid rgb(0, 0, 0);border-left:none;color:black;vertical-align:middle;white-space:nowrap;height:48px;">
        //                 <P>&nbsp;</P>
        //             </TD>
        //             <TD class="cui-real-td" colspan="3" style="border:1px solid rgb(0, 0, 0);font-size:14pt;font-family:굴림, monospace;text-align:center;color:black;vertical-align:middle;white-space:nowrap;height:48px;">
        //                 <P><SPAN style="font-size:14pt;font-family:굴림, monospace;">일수</SPAN></P>
        //             </TD>
        //             <TD class="cui-real-td" style="border-top:none;font-size:14pt;font-family:굴림, monospace;border-right:none;border-bottom:1px solid rgb(0, 0, 0);border-left:none;color:black;vertical-align:middle;white-space:nowrap;height:48px;">
        //                 <P><SPAN style="font-size:14pt;font-family:굴림, monospace;"><B>(</B></SPAN></P>
        //             </TD>
        //             <TD class="cui-real-td" colspan="2" style="font-size:14pt;font-family:굴림, monospace;text-align:center;border-top:1px solid rgb(0, 0, 0);border-right:none;border-bottom:1px solid rgb(0, 0, 0);border-left:none;color:black;vertical-align:middle;white-space:nowrap;height:48px;">
        //                 <P><SPAN style="font-size:14pt;font-family:굴림, monospace;"><B>　</B></SPAN></P>
        //             </TD>
        //             <TD class="cui-real-td" style="border-top:none;font-size:14pt;font-family:굴림, monospace;border-right:none;border-bottom:1px solid rgb(0, 0, 0);border-left:none;color:black;vertical-align:middle;white-space:nowrap;height:48px;">
        //                 <P><SPAN style="font-size:14pt;font-family:굴림, monospace;"><B>　</B></SPAN></P>
        //             </TD>
        //             <TD class="cui-real-td" style="border-top:none;font-size:14pt;font-family:굴림, monospace;border-right:none;border-bottom:1px solid rgb(0, 0, 0);border-left:none;color:black;vertical-align:middle;white-space:nowrap;height:48px;">
        //                 <P><SPAN style="font-size:14pt;font-family:굴림, monospace;"><B>)</B></SPAN></P>
        //             </TD>
        //             <TD class="cui-real-td" style="border-top:none;font-size:14pt;font-family:굴림, monospace;border-right:1.33px solid rgb(0, 0, 0);border-bottom:1px solid rgb(0, 0, 0);border-left:none;color:black;vertical-align:middle;white-space:nowrap;height:48px;">
        //                 <P><SPAN style="font-size:14pt;font-family:굴림, monospace;"><B>일간</B></SPAN></P>
        //             </TD>
        //         </TR>
        //         <TR style>
        //             <TD class="cui-real-td" colspan="3" style="border:1px solid rgb(0, 0, 0);height:90px;font-size:14pt;font-family:굴림, monospace;text-align:center;white-space:normal;color:black;vertical-align:middle;">
        //                 <P><SPAN style="font-size:14pt;font-family:굴림, monospace;"><B>근태구분</B></SPAN></P>
        //             </TD>
        //             <TD class="cui-real-td" colspan="16" style="border-right:1.33px solid black;height:90px;color:black;font-size:11pt;font-family:&quot;맑은 고딕&quot;, monospace;vertical-align:middle;border-top:none;border-left:none;border-bottom:none;white-space:nowrap;" align="left">
        //                 <P>&nbsp;${Vacation_Division}&nbsp;</P>
        //             </TD>
        //         </TR>
        //         <TR style>
        //             <TD class="cui-real-td" colspan="19" style="border-right:1.33px solid black;height:59px;font-size:16.0pt;font-family:굴림, monospace;text-align:center;border-top:1px solid #000000;border-bottom:1px dotted #000000;border-left:1.33px solid #000000;color:black;vertical-align:middle;white-space:nowrap;">
        //                 <P><SPAN style="font-size:16pt;font-family:굴림, monospace;"><B>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;휴가 신청 사유&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</B><B><SPAN style="color:black;font-size:12.0pt;font-family:굴림, monospace;">(구체적으로 기재 요망)</SPAN></B></SPAN></P>
        //             </TD>
        //         </TR>
        //         <TR style>
        //             <TD class="cui-real-td" colspan="19" style="border-right:1.33px solid black;height:74px;font-size:12pt;font-family:굴림, monospace;text-align:center;border-top:1px dotted rgb(0, 0, 0);border-bottom:none;border-left:1.33px solid rgb(0, 0, 0);white-space:normal;color:black;vertical-align:middle;">
        //                 <P><SPAN style="font-size:12pt;font-family:굴림, monospace;">${Vcation_Reason}</SPAN></P>
        //             </TD>
        //         </TR>
        //         <TR style>
        //             <TD class="cui-real-td" colspan="19" style="border-right:1.33px solid black;height:74px;font-size:12.0pt;font-family:굴림, monospace;text-align:center;border-top:none;border-bottom:none;border-left:1.33px solid #000000;color:black;vertical-align:middle;white-space:nowrap;">
        //                 <P><SPAN style="font-size:12pt;font-family:굴림, monospace;">　</SPAN></P>
        //             </TD>
        //         </TR>
        //         <TR style>
        //             <TD class="cui-real-td" colspan="19" style="border-right:1.33px solid black;height:74px;font-size:12.0pt;font-family:굴림, monospace;text-align:center;border-top:none;border-bottom:1px solid #000000;border-left:1.33px solid #000000;color:black;vertical-align:middle;white-space:nowrap;">
        //                 <P><SPAN style="font-size:12pt;font-family:굴림, monospace;">　</SPAN></P>
        //             </TD>
        //         </TR>
        //         <TR style>
        //             <TD class="cui-real-td" style="height:26px;font-size:12.0pt;font-family:굴림, monospace;border-top:none;border-right:none;border-bottom:none;border-left:1.33px solid #000000;color:black;text-align:general;vertical-align:middle;white-space:nowrap;">
        //                 <P><SPAN style="font-size:12pt;font-family:굴림, monospace;">　</SPAN></P>
        //             </TD>
        //             <TD class="cui-real-td" style="font-size:12pt;font-family:굴림, monospace;color:black;vertical-align:middle;border:0px none rgb(0, 0, 0);white-space:nowrap;height:26px;">
        //                 <P>&nbsp;</P>
        //             </TD>
        //             <TD class="cui-real-td" style="font-size:12pt;font-family:굴림, monospace;color:black;vertical-align:middle;border:0px none rgb(0, 0, 0);white-space:nowrap;height:26px;">
        //                 <P>&nbsp;</P>
        //             </TD>
        //             <TD class="cui-real-td" style="font-size:12pt;font-family:굴림, monospace;color:black;vertical-align:middle;border:0px none rgb(0, 0, 0);white-space:nowrap;height:26px;">
        //                 <P>&nbsp;</P>
        //             </TD>
        //             <TD class="cui-real-td" style="font-size:12pt;font-family:굴림, monospace;color:black;vertical-align:middle;border:0px none rgb(0, 0, 0);white-space:nowrap;height:26px;">
        //                 <P>&nbsp;</P>
        //             </TD>
        //             <TD class="cui-real-td" style="font-size:12pt;font-family:굴림, monospace;color:black;vertical-align:middle;border:0px none rgb(0, 0, 0);white-space:nowrap;height:26px;">
        //                 <P>&nbsp;</P>
        //             </TD>
        //             <TD class="cui-real-td" style="font-size:12pt;font-family:굴림, monospace;color:black;vertical-align:middle;border:0px none rgb(0, 0, 0);white-space:nowrap;height:26px;">
        //                 <P>&nbsp;</P>
        //             </TD>
        //             <TD class="cui-real-td" style="font-size:12pt;font-family:굴림, monospace;color:black;vertical-align:middle;border:0px none rgb(0, 0, 0);white-space:nowrap;height:26px;">
        //                 <P>&nbsp;</P>
        //             </TD>
        //             <TD class="cui-real-td" style="font-size:12pt;font-family:굴림, monospace;color:black;vertical-align:middle;border:0px none rgb(0, 0, 0);white-space:nowrap;height:26px;">
        //                 <P>&nbsp;</P>
        //             </TD>
        //             <TD class="cui-real-td" style="font-size:12pt;font-family:굴림, monospace;color:black;vertical-align:middle;border:0px none rgb(0, 0, 0);white-space:nowrap;height:26px;">
        //                 <P>&nbsp;</P>
        //             </TD>
        //             <TD class="cui-real-td" style="font-size:12pt;font-family:굴림, monospace;color:black;vertical-align:middle;border:0px none rgb(0, 0, 0);white-space:nowrap;height:26px;">
        //                 <P>&nbsp;</P>
        //             </TD>
        //             <TD class="cui-real-td" style="font-size:12pt;font-family:굴림, monospace;color:black;vertical-align:middle;border:0px none rgb(0, 0, 0);white-space:nowrap;height:26px;">
        //                 <P>&nbsp;</P>
        //             </TD>
        //             <TD class="cui-real-td" style="font-size:12pt;font-family:굴림, monospace;color:black;vertical-align:middle;border:0px none rgb(0, 0, 0);white-space:nowrap;height:26px;">
        //                 <P>&nbsp;</P>
        //             </TD>
        //             <TD class="cui-real-td" style="font-size:12pt;font-family:굴림, monospace;color:black;vertical-align:middle;border:0px none rgb(0, 0, 0);white-space:nowrap;height:26px;">
        //                 <P>&nbsp;</P>
        //             </TD>
        //             <TD class="cui-real-td" style="font-size:12pt;font-family:굴림, monospace;color:black;vertical-align:middle;border:0px none rgb(0, 0, 0);white-space:nowrap;height:26px;">
        //                 <P>&nbsp;</P>
        //             </TD>
        //             <TD class="cui-real-td" style="font-size:12pt;font-family:굴림, monospace;color:black;vertical-align:middle;border:0px none rgb(0, 0, 0);white-space:nowrap;height:26px;">
        //                 <P>&nbsp;</P>
        //             </TD>
        //             <TD class="cui-real-td" style="font-size:12pt;font-family:굴림, monospace;color:black;vertical-align:middle;border:0px none rgb(0, 0, 0);white-space:nowrap;height:26px;">
        //                 <P>&nbsp;</P>
        //             </TD>
        //             <TD class="cui-real-td" style="font-size:12pt;font-family:굴림, monospace;color:black;vertical-align:middle;border:0px none rgb(0, 0, 0);white-space:nowrap;height:26px;">
        //                 <P>&nbsp;</P>
        //             </TD>
        //             <TD class="cui-real-td" style="font-size:12pt;font-family:굴림, monospace;border-top:none;border-right:1.33px solid rgb(0, 0, 0);border-bottom:none;border-left:none;color:black;vertical-align:middle;white-space:nowrap;height:26px;">
        //                 <P><SPAN style="font-size:12pt;font-family:굴림, monospace;">　</SPAN></P>
        //             </TD>
        //         </TR>
        //         <TR style>
        //             <TD class="cui-real-td" style="height:25px;font-size:12.0pt;font-family:굴림, monospace;border-top:none;border-right:none;border-bottom:none;border-left:1.33px solid #000000;color:black;text-align:general;vertical-align:middle;white-space:nowrap;">
        //                 <P><SPAN style="font-size:12pt;font-family:굴림, monospace;">　</SPAN></P>
        //             </TD>
        //             <TD class="cui-real-td" colspan="17" style="font-size:14pt;font-family:굴림, monospace;text-align:center;color:black;vertical-align:middle;border:0px none rgb(0, 0, 0);white-space:nowrap;height:25px;">
        //                 <P><SPAN style="font-size:14pt;font-family:굴림, monospace;">위와 같이 휴가계를 제출합니다.</SPAN></P>
        //             </TD>
        //             <TD class="cui-real-td" style="font-size:12pt;font-family:굴림, monospace;border-top:none;border-right:1.33px solid rgb(0, 0, 0);border-bottom:none;border-left:none;color:black;vertical-align:middle;white-space:nowrap;height:25px;">
        //                 <P><SPAN style="font-size:12pt;font-family:굴림, monospace;">　</SPAN></P>
        //             </TD>
        //         </TR>
        //         <TR style>
        //             <TD class="cui-real-td" style="height:25px;font-size:12.0pt;font-family:굴림, monospace;border-top:none;border-right:none;border-bottom:none;border-left:1.33px solid #000000;color:black;text-align:general;vertical-align:middle;white-space:nowrap;">
        //                 <P><SPAN style="font-size:12pt;font-family:굴림, monospace;">　</SPAN></P>
        //             </TD>
        //             <TD class="cui-real-td" style="font-size:12pt;font-family:굴림, monospace;color:black;vertical-align:middle;border:0px none rgb(0, 0, 0);white-space:nowrap;height:25px;">
        //                 <P>&nbsp;</P>
        //             </TD>
        //             <TD class="cui-real-td" style="font-size:12pt;font-family:굴림, monospace;color:black;vertical-align:middle;border:0px none rgb(0, 0, 0);white-space:nowrap;height:25px;">
        //                 <P>&nbsp;</P>
        //             </TD>
        //             <TD class="cui-real-td" style="font-size:12pt;font-family:굴림, monospace;color:black;vertical-align:middle;border:0px none rgb(0, 0, 0);white-space:nowrap;height:25px;">
        //                 <P>&nbsp;</P>
        //             </TD>
        //             <TD class="cui-real-td" style="font-size:12pt;font-family:굴림, monospace;color:black;vertical-align:middle;border:0px none rgb(0, 0, 0);white-space:nowrap;height:25px;">
        //                 <P>&nbsp;</P>
        //             </TD>
        //             <TD class="cui-real-td" style="font-size:12pt;font-family:굴림, monospace;color:black;vertical-align:middle;border:0px none rgb(0, 0, 0);white-space:nowrap;height:25px;">
        //                 <P>&nbsp;</P>
        //             </TD>
        //             <TD class="cui-real-td" style="font-size:12pt;font-family:굴림, monospace;color:black;vertical-align:middle;border:0px none rgb(0, 0, 0);white-space:nowrap;height:25px;">
        //                 <P>&nbsp;</P>
        //             </TD>
        //             <TD class="cui-real-td" style="font-size:12pt;font-family:굴림, monospace;color:black;vertical-align:middle;border:0px none rgb(0, 0, 0);white-space:nowrap;height:25px;">
        //                 <P>&nbsp;</P>
        //             </TD>
        //             <TD class="cui-real-td" style="font-size:12pt;font-family:굴림, monospace;color:black;vertical-align:middle;border:0px none rgb(0, 0, 0);white-space:nowrap;height:25px;">
        //                 <P>&nbsp;</P>
        //             </TD>
        //             <TD class="cui-real-td" style="font-size:12pt;font-family:굴림, monospace;color:black;vertical-align:middle;border:0px none rgb(0, 0, 0);white-space:nowrap;height:25px;">
        //                 <P>&nbsp;</P>
        //             </TD>
        //             <TD class="cui-real-td" style="font-size:12pt;font-family:굴림, monospace;color:black;vertical-align:middle;border:0px none rgb(0, 0, 0);white-space:nowrap;height:25px;">
        //                 <P>&nbsp;</P>
        //             </TD>
        //             <TD class="cui-real-td" style="font-size:12pt;font-family:굴림, monospace;color:black;vertical-align:middle;border:0px none rgb(0, 0, 0);white-space:nowrap;height:25px;">
        //                 <P>&nbsp;</P>
        //             </TD>
        //             <TD class="cui-real-td" style="font-size:12pt;font-family:굴림, monospace;color:black;vertical-align:middle;border:0px none rgb(0, 0, 0);white-space:nowrap;height:25px;">
        //                 <P>&nbsp;</P>
        //             </TD>
        //             <TD class="cui-real-td" style="font-size:12pt;font-family:굴림, monospace;color:black;vertical-align:middle;border:0px none rgb(0, 0, 0);white-space:nowrap;height:25px;">
        //                 <P>&nbsp;</P>
        //             </TD>
        //             <TD class="cui-real-td" style="font-size:12pt;font-family:굴림, monospace;color:black;vertical-align:middle;border:0px none rgb(0, 0, 0);white-space:nowrap;height:25px;">
        //                 <P>&nbsp;</P>
        //             </TD>
        //             <TD class="cui-real-td" style="font-size:12pt;font-family:굴림, monospace;color:black;vertical-align:middle;border:0px none rgb(0, 0, 0);white-space:nowrap;height:25px;">
        //                 <P>&nbsp;</P>
        //             </TD>
        //             <TD class="cui-real-td" style="font-size:12pt;font-family:굴림, monospace;color:black;vertical-align:middle;border:0px none rgb(0, 0, 0);white-space:nowrap;height:25px;">
        //                 <P>&nbsp;</P>
        //             </TD>
        //             <TD class="cui-real-td" style="font-size:12pt;font-family:굴림, monospace;color:black;vertical-align:middle;border:0px none rgb(0, 0, 0);white-space:nowrap;height:25px;">
        //                 <P>&nbsp;</P>
        //             </TD>
        //             <TD class="cui-real-td" style="font-size:12pt;font-family:굴림, monospace;border-top:none;border-right:1.33px solid rgb(0, 0, 0);border-bottom:none;border-left:none;color:black;vertical-align:middle;white-space:nowrap;height:25px;">
        //                 <P><SPAN style="font-size:12pt;font-family:굴림, monospace;">　</SPAN></P>
        //             </TD>
        //         </TR>
        //         <TR style>
        //             <TD class="cui-real-td" style="height:25px;font-size:12.0pt;font-family:굴림, monospace;border-top:none;border-right:none;border-bottom:none;border-left:1.33px solid #000000;color:black;text-align:general;vertical-align:middle;white-space:nowrap;">
        //                 <P><SPAN style="font-size:12pt;font-family:굴림, monospace;">　</SPAN></P>
        //             </TD>
        //             <TD class="cui-real-td" style="font-size:12pt;font-family:굴림, monospace;color:black;vertical-align:middle;border:0px none rgb(0, 0, 0);white-space:nowrap;height:25px;">
        //                 <P>&nbsp;</P>
        //             </TD>
        //             <TD class="cui-real-td" style="font-size:12pt;font-family:굴림, monospace;color:black;vertical-align:middle;border:0px none rgb(0, 0, 0);white-space:nowrap;height:25px;">
        //                 <P>&nbsp;</P>
        //             </TD>
        //             <TD class="cui-real-td" style="font-size:12pt;font-family:굴림, monospace;color:black;vertical-align:middle;border:0px none rgb(0, 0, 0);white-space:nowrap;height:25px;">
        //                 <P>&nbsp;</P>
        //             </TD>
        //             <TD class="cui-real-td" style="font-size:12pt;font-family:굴림, monospace;color:black;vertical-align:middle;border:0px none rgb(0, 0, 0);white-space:nowrap;height:25px;">
        //                 <P>&nbsp;</P>
        //             </TD>
        //             <TD class="cui-real-td" style="font-size:12pt;font-family:굴림, monospace;color:black;vertical-align:middle;border:0px none rgb(0, 0, 0);white-space:nowrap;height:25px;">
        //                 <P>&nbsp;</P>
        //             </TD>
        //             <TD class="cui-real-td" style="font-size:12pt;font-family:굴림, monospace;color:black;vertical-align:middle;border:0px none rgb(0, 0, 0);white-space:nowrap;height:25px;">
        //                 <P>&nbsp;</P>
        //             </TD>
        //             <TD class="cui-real-td" style="font-size:12pt;font-family:굴림, monospace;color:black;vertical-align:middle;border:0px none rgb(0, 0, 0);white-space:nowrap;height:25px;">
        //                 <P>&nbsp;</P>
        //             </TD>
        //             <TD class="cui-real-td" style="font-size:12pt;font-family:굴림, monospace;color:black;vertical-align:middle;border:0px none rgb(0, 0, 0);white-space:nowrap;height:25px;">
        //                 <P>&nbsp;</P>
        //             </TD>
        //             <TD class="cui-real-td" style="font-size:12pt;font-family:굴림, monospace;color:black;vertical-align:middle;border:0px none rgb(0, 0, 0);white-space:nowrap;height:25px;">
        //                 <P>&nbsp;</P>
        //             </TD>
        //             <TD class="cui-real-td" style="font-size:12pt;font-family:굴림, monospace;color:black;vertical-align:middle;border:0px none rgb(0, 0, 0);white-space:nowrap;height:25px;">
        //                 <P>&nbsp;</P>
        //             </TD>
        //             <TD class="cui-real-td" colspan="5" style="font-size:14pt;font-family:굴림, monospace;text-align:center;color:black;vertical-align:middle;border:0px none rgb(0, 0, 0);white-space:nowrap;height:25px;">
        //                 <P>&nbsp;</P>
        //             </TD>
        //             <TD class="cui-real-td" style="font-size:12pt;font-family:굴림, monospace;color:black;vertical-align:middle;border:0px none rgb(0, 0, 0);white-space:nowrap;height:25px;">
        //                 <P>&nbsp;</P>
        //             </TD>
        //             <TD class="cui-real-td" style="font-size:12pt;font-family:굴림, monospace;color:black;vertical-align:middle;border:0px none rgb(0, 0, 0);white-space:nowrap;height:25px;">
        //                 <P>&nbsp;</P>
        //             </TD>
        //             <TD class="cui-real-td" style="font-size:12pt;font-family:굴림, monospace;border-top:none;border-right:1.33px solid rgb(0, 0, 0);border-bottom:none;border-left:none;color:black;vertical-align:middle;white-space:nowrap;height:25px;">
        //                 <P><SPAN style="font-size:12pt;font-family:굴림, monospace;">　</SPAN></P>
        //             </TD>
        //         </TR>
        //         <TR style>
        //             <TD class="cui-real-td" style="height:25px;font-size:12.0pt;font-family:굴림, monospace;border-top:none;border-right:none;border-bottom:none;border-left:1.33px solid #000000;color:black;text-align:general;vertical-align:middle;white-space:nowrap;">
        //                 <P><SPAN style="font-size:12pt;font-family:굴림, monospace;">　</SPAN></P>
        //             </TD>
        //             <TD class="cui-real-td" style="font-size:12pt;font-family:굴림, monospace;color:black;vertical-align:middle;border:0px none rgb(0, 0, 0);white-space:nowrap;height:25px;">
        //                 <P>&nbsp;</P>
        //             </TD>
        //             <TD class="cui-real-td" style="font-size:12pt;font-family:굴림, monospace;color:black;vertical-align:middle;border:0px none rgb(0, 0, 0);white-space:nowrap;height:25px;">
        //                 <P>&nbsp;</P>
        //             </TD>
        //             <TD class="cui-real-td" style="font-size:12pt;font-family:굴림, monospace;color:black;vertical-align:middle;border:0px none rgb(0, 0, 0);white-space:nowrap;height:25px;">
        //                 <P>&nbsp;</P>
        //             </TD>
        //             <TD class="cui-real-td" style="font-size:12pt;font-family:굴림, monospace;color:black;vertical-align:middle;border:0px none rgb(0, 0, 0);white-space:nowrap;height:25px;">
        //                 <P>&nbsp;</P>
        //             </TD>
        //             <TD class="cui-real-td" style="font-size:12pt;font-family:굴림, monospace;color:black;vertical-align:middle;border:0px none rgb(0, 0, 0);white-space:nowrap;height:25px;">
        //                 <P>&nbsp;</P>
        //             </TD>
        //             <TD class="cui-real-td" style="font-size:12pt;font-family:굴림, monospace;color:black;vertical-align:middle;border:0px none rgb(0, 0, 0);white-space:nowrap;height:25px;">
        //                 <P>&nbsp;</P>
        //             </TD>
        //             <TD class="cui-real-td" style="font-size:12pt;font-family:굴림, monospace;color:black;vertical-align:middle;border:0px none rgb(0, 0, 0);white-space:nowrap;height:25px;">
        //                 <P>&nbsp;</P>
        //             </TD>
        //             <TD class="cui-real-td" style="font-size:12pt;font-family:굴림, monospace;color:black;vertical-align:middle;border:0px none rgb(0, 0, 0);white-space:nowrap;height:25px;">
        //                 <P>&nbsp;</P>
        //             </TD>
        //             <TD class="cui-real-td" style="font-size:12pt;font-family:굴림, monospace;color:black;vertical-align:middle;border:0px none rgb(0, 0, 0);white-space:nowrap;height:25px;">
        //                 <P>&nbsp;</P>
        //             </TD>
        //             <TD class="cui-real-td" style="font-size:12pt;font-family:굴림, monospace;color:black;vertical-align:middle;border:0px none rgb(0, 0, 0);white-space:nowrap;height:25px;">
        //                 <P>&nbsp;</P>
        //             </TD>
        //             <TD class="cui-real-td" style="font-size:12pt;font-family:굴림, monospace;color:black;vertical-align:middle;border:0px none rgb(0, 0, 0);white-space:nowrap;height:25px;">
        //                 <P>&nbsp;</P>
        //             </TD>
        //             <TD class="cui-real-td" style="font-size:12pt;font-family:굴림, monospace;color:black;vertical-align:middle;border:0px none rgb(0, 0, 0);white-space:nowrap;height:25px;">
        //                 <P>&nbsp;</P>
        //             </TD>
        //             <TD class="cui-real-td" style="font-size:12pt;font-family:굴림, monospace;color:black;vertical-align:middle;border:0px none rgb(0, 0, 0);white-space:nowrap;height:25px;">
        //                 <P>&nbsp;</P>
        //             </TD>
        //             <TD class="cui-real-td" style="font-size:12pt;font-family:굴림, monospace;color:black;vertical-align:middle;border:0px none rgb(0, 0, 0);white-space:nowrap;height:25px;">
        //                 <P>&nbsp;</P>
        //             </TD>
        //             <TD class="cui-real-td" style="font-size:12pt;font-family:굴림, monospace;color:black;vertical-align:middle;border:0px none rgb(0, 0, 0);white-space:nowrap;height:25px;">
        //                 <P>&nbsp;</P>
        //             </TD>
        //             <TD class="cui-real-td" style="font-size:12pt;font-family:굴림, monospace;color:black;vertical-align:middle;border:0px none rgb(0, 0, 0);white-space:nowrap;height:25px;">
        //                 <P>&nbsp;</P>
        //             </TD>
        //             <TD class="cui-real-td" style="font-size:12pt;font-family:굴림, monospace;color:black;vertical-align:middle;border:0px none rgb(0, 0, 0);white-space:nowrap;height:25px;">
        //                 <P>&nbsp;</P>
        //             </TD>
        //             <TD class="cui-real-td" style="font-size:12pt;font-family:굴림, monospace;border-top:none;border-right:1.33px solid rgb(0, 0, 0);border-bottom:none;border-left:none;color:black;vertical-align:middle;white-space:nowrap;height:25px;">
        //                 <P><SPAN style="font-size:12pt;font-family:굴림, monospace;">　</SPAN></P>
        //             </TD>
        //         </TR>
        //         <TR style>
        //             <TD class="cui-real-td" style="height:34px;font-size:12.0pt;font-family:굴림, monospace;border-top:none;border-right:none;border-bottom:none;border-left:1.33px solid #000000;color:black;text-align:general;vertical-align:middle;white-space:nowrap;">
        //                 <P><SPAN style="font-size:12pt;font-family:굴림, monospace;">　</SPAN></P>
        //             </TD>
        //             <TD class="cui-real-td" style="font-size:12pt;font-family:굴림, monospace;color:black;vertical-align:middle;border:0px none rgb(0, 0, 0);white-space:nowrap;height:34px;">
        //                 <P>&nbsp;</P>
        //             </TD>
        //             <TD class="cui-real-td" style="font-size:12pt;font-family:굴림, monospace;color:black;vertical-align:middle;border:0px none rgb(0, 0, 0);white-space:nowrap;height:34px;">
        //                 <P>&nbsp;</P>
        //             </TD>
        //             <TD class="cui-real-td" style="font-size:12pt;font-family:굴림, monospace;color:black;vertical-align:middle;border:0px none rgb(0, 0, 0);white-space:nowrap;height:34px;">
        //                 <P>&nbsp;</P>
        //             </TD>
        //             <TD class="cui-real-td" style="font-size:12pt;font-family:굴림, monospace;color:black;vertical-align:middle;border:0px none rgb(0, 0, 0);white-space:nowrap;height:34px;">
        //                 <P>&nbsp;</P>
        //             </TD>
        //             <TD class="cui-real-td" style="font-size:12pt;font-family:굴림, monospace;color:black;vertical-align:middle;border:0px none rgb(0, 0, 0);white-space:nowrap;height:34px;">
        //                 <P>&nbsp;</P>
        //             </TD>
        //             <TD class="cui-real-td" style="font-size:12pt;font-family:굴림, monospace;color:black;vertical-align:middle;border:0px none rgb(0, 0, 0);white-space:nowrap;height:34px;">
        //                 <P>&nbsp;</P>
        //             </TD>
        //             <TD class="cui-real-td" style="font-size:12pt;font-family:굴림, monospace;color:black;vertical-align:middle;border:0px none rgb(0, 0, 0);white-space:nowrap;height:34px;">
        //                 <P>&nbsp;</P>
        //             </TD>
        //             <TD class="cui-real-td" style="font-size:12pt;font-family:굴림, monospace;color:black;vertical-align:middle;border:0px none rgb(0, 0, 0);white-space:nowrap;height:34px;">
        //                 <P>&nbsp;</P>
        //             </TD>
        //             <TD class="cui-real-td" style="font-size:12pt;font-family:굴림, monospace;color:black;vertical-align:middle;border:0px none rgb(0, 0, 0);white-space:nowrap;height:34px;">
        //                 <P>&nbsp;</P>
        //             </TD>
        //             <TD class="cui-real-td" style="font-size:12pt;font-family:굴림, monospace;color:black;vertical-align:middle;border:0px none rgb(0, 0, 0);white-space:nowrap;height:34px;">
        //                 <P>&nbsp;</P>
        //             </TD>
        //             <TD class="cui-real-td" style="font-size:12pt;font-family:굴림, monospace;color:black;vertical-align:middle;border:0px none rgb(0, 0, 0);white-space:nowrap;height:34px;">
        //                 <P>&nbsp;</P>
        //             </TD>
        //             <TD class="cui-real-td" style="font-size:12pt;font-family:굴림, monospace;color:black;vertical-align:middle;border:0px none rgb(0, 0, 0);white-space:nowrap;height:34px;">
        //                 <P>&nbsp;</P>
        //             </TD>
        //             <TD class="cui-real-td" style="font-size:12pt;font-family:굴림, monospace;color:black;vertical-align:middle;border:0px none rgb(0, 0, 0);white-space:nowrap;height:34px;">
        //                 <P>&nbsp;</P>
        //             </TD>
        //             <TD class="cui-real-td" style="font-size:12pt;font-family:굴림, monospace;color:black;vertical-align:middle;border:0px none rgb(0, 0, 0);white-space:nowrap;height:34px;">
        //                 <P>&nbsp;</P>
        //             </TD>
        //             <TD class="cui-real-td" style="font-size:12pt;font-family:굴림, monospace;color:black;vertical-align:middle;border:0px none rgb(0, 0, 0);white-space:nowrap;height:34px;">
        //                 <P>&nbsp;</P>
        //             </TD>
        //             <TD class="cui-real-td" style="font-size:12pt;font-family:굴림, monospace;color:black;vertical-align:middle;border:0px none rgb(0, 0, 0);white-space:nowrap;height:34px;">
        //                 <P>&nbsp;</P>
        //             </TD>
        //             <TD class="cui-real-td" style="font-size:12pt;font-family:굴림, monospace;color:black;vertical-align:middle;border:0px none rgb(0, 0, 0);white-space:nowrap;height:34px;">
        //                 <P>&nbsp;</P>
        //             </TD>
        //             <TD class="cui-real-td" style="font-size:12pt;font-family:굴림, monospace;border-top:none;border-right:1.33px solid rgb(0, 0, 0);border-bottom:none;border-left:none;color:black;vertical-align:middle;white-space:nowrap;height:34px;">
        //                 <P><SPAN style="font-size:12pt;font-family:굴림, monospace;">　</SPAN></P>
        //             </TD>
        //         </TR>
        //         <TR style>
        //             <TD class="cui-real-td" style="height:25px;font-size:12.0pt;font-family:굴림, monospace;border-top:none;border-right:none;border-bottom:none;border-left:1.33px solid #000000;color:black;text-align:general;vertical-align:middle;white-space:nowrap;">
        //                 <P><SPAN style="font-size:12pt;font-family:굴림, monospace;">　</SPAN></P>
        //             </TD>
        //             <TD class="cui-real-td" colspan="17" rowspan="2" style="font-size:16pt;font-family:굴림, monospace;text-align:center;color:black;vertical-align:middle;border:0px none rgb(0, 0, 0);white-space:nowrap;">
        //                 <P><SPAN style="font-size:16pt;font-family:굴림, monospace;"><B>㈜샘텍 대표이사 귀하</B></SPAN></P>
        //             </TD>
        //             <TD class="cui-real-td" style="font-size:12pt;font-family:굴림, monospace;border-top:none;border-right:1.33px solid rgb(0, 0, 0);border-bottom:none;border-left:none;color:black;vertical-align:middle;white-space:nowrap;height:25px;">
        //                 <P><SPAN style="font-size:12pt;font-family:굴림, monospace;">　</SPAN></P>
        //             </TD>
        //         </TR>
        //         <TR style>
        //             <TD class="cui-real-td" style="height:25px;font-size:12.0pt;font-family:굴림, monospace;border-top:none;border-right:none;border-bottom:none;border-left:1.33px solid #000000;color:black;text-align:general;vertical-align:middle;white-space:nowrap;">
        //                 <P><SPAN style="font-size:12pt;font-family:굴림, monospace;">　</SPAN></P>
        //             </TD>
        //             <TD class="cui-real-td" style="font-size:12pt;font-family:굴림, monospace;border-top:none;border-right:1.33px solid rgb(0, 0, 0);border-bottom:none;border-left:none;color:black;vertical-align:middle;white-space:nowrap;height:25px;">
        //                 <P><SPAN style="font-size:12pt;font-family:굴림, monospace;">　</SPAN></P>
        //             </TD>
        //         </TR>
        //         <TR style>
        //             <TD class="cui-real-td" style="height:13.2px;font-size:12.0pt;border-top:none;border-right:none;border-bottom:1px solid #000000;border-left:1.33px solid #000000;color:black;font-family:'맑은 고딕', monospace;text-align:general;vertical-align:middle;white-space:nowrap;">
        //                 <P><SPAN style="font-size:12pt;font-family:'맑은 고딕', monospace;">　</SPAN></P>
        //             </TD>
        //             <TD class="cui-real-td" style="font-size:12pt;border-top:none;border-right:none;border-bottom:1px solid rgb(0, 0, 0);border-left:none;color:black;font-family:'맑은 고딕', monospace;vertical-align:middle;white-space:nowrap;height:13.2px;">
        //                 <P><SPAN style="font-size:12pt;font-family:'맑은 고딕', monospace;">　</SPAN></P>
        //             </TD>
        //             <TD class="cui-real-td" style="font-size:12pt;border-top:none;border-right:none;border-bottom:1px solid rgb(0, 0, 0);border-left:none;color:black;font-family:'맑은 고딕', monospace;vertical-align:middle;white-space:nowrap;height:13.2px;">
        //                 <P><SPAN style="font-size:12pt;font-family:'맑은 고딕', monospace;">　</SPAN></P>
        //             </TD>
        //             <TD class="cui-real-td" style="font-size:12pt;border-top:none;border-right:none;border-bottom:1px solid rgb(0, 0, 0);border-left:none;color:black;font-family:'맑은 고딕', monospace;vertical-align:middle;white-space:nowrap;height:13.2px;">
        //                 <P><SPAN style="font-size:12pt;font-family:'맑은 고딕', monospace;">　</SPAN></P>
        //             </TD>
        //             <TD class="cui-real-td" style="font-size:12pt;border-top:none;border-right:none;border-bottom:1px solid rgb(0, 0, 0);border-left:none;color:black;font-family:'맑은 고딕', monospace;vertical-align:middle;white-space:nowrap;height:13.2px;">
        //                 <P><SPAN style="font-size:12pt;font-family:'맑은 고딕', monospace;">　</SPAN></P>
        //             </TD>
        //             <TD class="cui-real-td" style="font-size:12pt;border-top:none;border-right:none;border-bottom:1px solid rgb(0, 0, 0);border-left:none;color:black;font-family:'맑은 고딕', monospace;vertical-align:middle;white-space:nowrap;height:13.2px;">
        //                 <P><SPAN style="font-size:12pt;font-family:'맑은 고딕', monospace;">　</SPAN></P>
        //             </TD>
        //             <TD class="cui-real-td" style="font-size:12pt;border-top:none;border-right:none;border-bottom:1px solid rgb(0, 0, 0);border-left:none;color:black;font-family:'맑은 고딕', monospace;vertical-align:middle;white-space:nowrap;height:13.2px;">
        //                 <P><SPAN style="font-size:12pt;font-family:'맑은 고딕', monospace;">　</SPAN></P>
        //             </TD>
        //             <TD class="cui-real-td" style="font-size:12pt;border-top:none;border-right:none;border-bottom:1px solid rgb(0, 0, 0);border-left:none;color:black;font-family:'맑은 고딕', monospace;vertical-align:middle;white-space:nowrap;height:13.2px;">
        //                 <P><SPAN style="font-size:12pt;font-family:'맑은 고딕', monospace;">　</SPAN></P>
        //             </TD>
        //             <TD class="cui-real-td" style="font-size:12pt;border-top:none;border-right:none;border-bottom:1px solid rgb(0, 0, 0);border-left:none;color:black;font-family:'맑은 고딕', monospace;vertical-align:middle;white-space:nowrap;height:13.2px;">
        //                 <P><SPAN style="font-size:12pt;font-family:'맑은 고딕', monospace;">　</SPAN></P>
        //             </TD>
        //             <TD class="cui-real-td" style="font-size:12pt;border-top:none;border-right:none;border-bottom:1px solid rgb(0, 0, 0);border-left:none;color:black;font-family:'맑은 고딕', monospace;vertical-align:middle;white-space:nowrap;height:13.2px;">
        //                 <P><SPAN style="font-size:12pt;font-family:'맑은 고딕', monospace;">　</SPAN></P>
        //             </TD>
        //             <TD class="cui-real-td" style="font-size:12pt;border-top:none;border-right:none;border-bottom:1px solid rgb(0, 0, 0);border-left:none;color:black;font-family:'맑은 고딕', monospace;vertical-align:middle;white-space:nowrap;height:13.2px;">
        //                 <P><SPAN style="font-size:12pt;font-family:'맑은 고딕', monospace;">　</SPAN></P>
        //             </TD>
        //             <TD class="cui-real-td" style="font-size:12pt;border-top:none;border-right:none;border-bottom:1px solid rgb(0, 0, 0);border-left:none;color:black;font-family:'맑은 고딕', monospace;vertical-align:middle;white-space:nowrap;height:13.2px;">
        //                 <P><SPAN style="font-size:12pt;font-family:'맑은 고딕', monospace;">　</SPAN></P>
        //             </TD>
        //             <TD class="cui-real-td" style="font-size:12pt;border-top:none;border-right:none;border-bottom:1px solid rgb(0, 0, 0);border-left:none;color:black;font-family:'맑은 고딕', monospace;vertical-align:middle;white-space:nowrap;height:13.2px;">
        //                 <P><SPAN style="font-size:12pt;font-family:'맑은 고딕', monospace;">　</SPAN></P>
        //             </TD>
        //             <TD class="cui-real-td" style="font-size:12pt;border-top:none;border-right:none;border-bottom:1px solid rgb(0, 0, 0);border-left:none;color:black;font-family:'맑은 고딕', monospace;vertical-align:middle;white-space:nowrap;height:13.2px;">
        //                 <P><SPAN style="font-size:12pt;font-family:'맑은 고딕', monospace;">　</SPAN></P>
        //             </TD>
        //             <TD class="cui-real-td" style="font-size:12pt;border-top:none;border-right:none;border-bottom:1px solid rgb(0, 0, 0);border-left:none;color:black;font-family:'맑은 고딕', monospace;vertical-align:middle;white-space:nowrap;height:13.2px;">
        //                 <P><SPAN style="font-size:12pt;font-family:'맑은 고딕', monospace;">　</SPAN></P>
        //             </TD>
        //             <TD class="cui-real-td" style="font-size:12pt;border-top:none;border-right:none;border-bottom:1px solid rgb(0, 0, 0);border-left:none;color:black;font-family:'맑은 고딕', monospace;vertical-align:middle;white-space:nowrap;height:13.2px;">
        //                 <P><SPAN style="font-size:12pt;font-family:'맑은 고딕', monospace;">　</SPAN></P>
        //             </TD>
        //             <TD class="cui-real-td" style="font-size:12pt;border-top:none;border-right:none;border-bottom:1px solid rgb(0, 0, 0);border-left:none;color:black;font-family:'맑은 고딕', monospace;vertical-align:middle;white-space:nowrap;height:13.2px;">
        //                 <P><SPAN style="font-size:12pt;font-family:'맑은 고딕', monospace;">　</SPAN></P>
        //             </TD>
        //             <TD class="cui-real-td" style="font-size:12pt;border-top:none;border-right:none;border-bottom:1px solid rgb(0, 0, 0);border-left:none;color:black;font-family:'맑은 고딕', monospace;vertical-align:middle;white-space:nowrap;height:13.2px;">
        //                 <P><SPAN style="font-size:12pt;font-family:'맑은 고딕', monospace;">　</SPAN></P>
        //             </TD>
        //             <TD class="cui-real-td" style="font-size:12pt;border-top:none;border-right:1.33px solid rgb(0, 0, 0);border-bottom:1px solid rgb(0, 0, 0);border-left:none;color:black;font-family:'맑은 고딕', monospace;vertical-align:middle;white-space:nowrap;height:13.2px;">
        //                 <P><SPAN style="font-size:12pt;font-family:'맑은 고딕', monospace;">　</SPAN></P>
        //             </TD>
        //         </TR>
        //         <TR style>
        //             <TD class="cui-real-td" colspan="19" style="border-right:1.33px solid black;height:113px;font-size:12.0pt;border-top:none;border-bottom:none;border-left:1.33px solid #000000;color:black;font-family:'맑은 고딕', monospace;vertical-align:middle;white-space:nowrap;">
        //                 <P><SPAN style="font-size:12pt;font-family:'맑은 고딕', monospace;">　</SPAN></P>
        //             </TD>
        //         </TR>
        //         <TR style>
        //             <TD class="cui-real-td" colspan="19" rowspan="3" style="border-right:1.33px solid black;border-bottom:1px solid rgb(0, 0, 0);height:118.2px;font-size:12pt;text-align:center;border-top:none;border-left:1.33px solid rgb(0, 0, 0);color:black;font-family:'맑은 고딕', monospace;vertical-align:middle;white-space:nowrap;">
        //                 <P><SPAN style="font-size:12pt;font-family:'맑은 고딕', monospace;">　</SPAN></P>
        //             </TD>
        //         </TR>
        //         <TR style>
        //         </TR>
        //         <TR style>
        //         </TR>
        //     </TBODY>
        // </TABLE>
        // <P>&nbsp;</P>
        // `,
        //                     contentsType: 'HTML',
        //                     docSecuType: 'PERSONAL',
        //                     notifyOption: '0',
        //                     urgYn: 'N',
        //                     sbmDt: '20230511144500',
        //                     timeZone: 'GMT+9',
        //                     docMngSaveCode: '1',
        //                     subject: '연차계 신청',
        //                     sbmLang: 'ko',
        //                     apInfId: 'DHKSolution222222222222222222222',
        //                 },
        //                 {
        //                     headers: {
        //                         Accept: '*/*',
        //                         'Content-Type': 'application/json',
        //                         'System-ID': 'A34REST00001',
        //                         Authorization: `Bearer aa737dc0-4192-3d94-8766-96bd91dab305`,
        //                     },
        //                 }
        //             );

        try {
            const tete = await request.get(`/users/API_TETETE`);
            console.log(tete);
        } catch (error) {
            console.log(error);
        }
    };

    const select = async () => {
        try {
            const GetData = await axios.post(
                `https://openapi.stage.britymail.com/approval/api/v2.0/approvals/DHKSolution222222222222222222228/autoprogress`,
                {},
                {
                    headers: {
                        Accept: '*/*',
                        'Content-Type': 'application/json',
                        'System-ID': 'A34REST00001',
                        Authorization: `Bearer 42ec2517-50d8-3ee6-8cef-71dca23091f2`,
                    },
                    params: {
                        flag: '0',
                        timeZone: 'GMT',
                    },
                }
            );
            console.log(GetData);
        } catch (error) {
            console.log(error);
        }
    };

    // useEffect(()=>{
    // // handlesenddata();
    // select();
    // },[])
    const titleTable_Hiehgt = '80px';
    return (
        <AnnuelLeavePrinterMainDivBox>
            <div>
                <div className="Printer_Header_Container">
                    <img src={'/semtek.png'} width={'150px'}></img>
                    <h3 style={{ fontSize: '2em', fontWeight: '400' }}>휴 가 계</h3>
                    <table className="Table_Payment_Container">
                        <thead>
                            <tr>
                                <td rowspan="2" style={{ width: '30px', padding: '5px' }}>
                                    결 재
                                </td>
                                <td style={{ padding: '3px' }}>작 성</td>
                                <td style={{ padding: '3px' }}>검 토</td>
                                <td style={{ padding: '3px' }}>검 토</td>
                                <td style={{ padding: '3px' }}>승 인</td>
                            </tr>
                            <tr>
                                <td style={{ height: '65px' }}></td>
                                <td style={{ height: '65px' }}></td>
                                <td style={{ height: '65px' }}></td>
                                <td style={{ height: '65px' }}></td>
                            </tr>
                        </thead>
                    </table>
                </div>
                <div className="Content_Box_Container">
                    <div className="Content_Box_Cotent_Container">
                        <div style={{ width: '100px' }}>소속 부서</div>
                        <div style={{ width: '580px', fontWeight: 'lighter' }}>관리팀</div>
                    </div>
                    <div className="Content_Box_Cotent_Container">
                        <div style={{ width: '100px' }}>직 위</div>
                        <div style={{ width: '340px', fontWeight: 'lighter' }}>프로</div>
                        <div style={{ width: '100px' }}>성 명</div>
                        <div style={{ width: '140px', fontWeight: 'lighter' }}>박 수 인</div>
                    </div>
                    <div className="Content_Box_Cotent_Container">
                        <div style={{ width: '100px' }}>기 간(1)</div>
                        <div style={{ width: '340px', fontWeight: 'lighter' }}>2023년 04월 14일 09:00 ~ 2023년 04월 14일 18:00</div>
                        <div style={{ width: '100px' }}>일수</div>
                        <div style={{ width: '140px' }}>( 1.0 ) 일간</div>
                    </div>
                    <div className="Content_Box_Cotent_Container">
                        <div style={{ width: '100px' }}>기 간(2)</div>
                        <div style={{ width: '340px', fontWeight: 'lighter' }}>2023년 04월 14일 09:00 ~ 2023년 04월 14일 18:00</div>
                        <div style={{ width: '100px' }}>일수</div>
                        <div style={{ width: '140px' }}>( 1.0 ) 일간</div>
                    </div>
                    <div className="Content_Box_Cotent_Container">
                        <div style={{ width: '100px' }}>근태구분</div>
                        <div style={{ width: '580px', fontWeight: 'lighter' }}>연차 휴가</div>
                    </div>
                    <div className="Content_Box_Cotent_Container">
                        <div
                            style={{
                                width: '680px',
                                position: 'relative',
                                borderBottom: '1px dashed lightgray',
                                borderLeft: 'none',
                                borderRight: 'none',
                            }}
                        >
                            휴가 신청 사유
                            <span style={{ fontSize: '0.5em' }}>( 구체적으로 기재 요망 )</span>
                        </div>
                    </div>
                    <div className="Content_Box_Cotent_Container">
                        <div style={{ width: '680px', border: '1px dashed lightgray', fontWeight: 'lighter' }}>개인사정</div>
                    </div>
                    <div className="Content_Box_Cotent_Container">
                        <div style={{ width: '680px', border: '1px dashed lightgray', fontWeight: 'lighter' }}>개인사정</div>
                    </div>
                    <div className="Content_Box_Cotent_Container">
                        <div style={{ width: '680px', border: '1px dashed lightgray', fontWeight: 'lighter' }}>개인사정</div>
                    </div>
                    <div className="Content_Box_Explain_Container" style={{ border: '0.5px solid black', height: '150px' }}>
                        <div>위와 같이 휴가계를 제출합니다.</div>
                        <div style={{ paddingLeft: '265px' }}>2023년 04월 13일</div>
                        <div>
                            <h4>(주)샘텍 대표이사 귀하</h4>
                        </div>
                    </div>
                    <div style={{ textAlign: 'center' }}>
                        <div style={{ display: 'flex', justifyContent: 'end', alignItems: 'center', paddingTop: '60px' }}>
                            <table className="Table_Payment_Container">
                                <thead>
                                    <tr>
                                        <td rowspan="2" style={{ width: '30px', padding: '5px' }}>
                                            경영지원팀
                                        </td>
                                        <td style={{ padding: '3px' }}>담 당</td>
                                        <td style={{ padding: '3px' }}>검 토</td>
                                        <td style={{ padding: '3px' }}>검 토</td>
                                        <td style={{ padding: '3px' }}>승 인</td>
                                    </tr>
                                    <tr>
                                        <td style={{ height: '65px' }}></td>
                                        <td style={{ height: '65px' }}></td>
                                        <td style={{ height: '65px' }}></td>
                                        <td style={{ height: '65px' }}></td>
                                    </tr>
                                </thead>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
            <button onClick={() => handlesenddata()}>결재 테스트</button>
        </AnnuelLeavePrinterMainDivBox>
    );
};

export default AnnuelLeavePrinter;

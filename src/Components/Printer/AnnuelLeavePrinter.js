import React, { useEffect } from "react";
import styled from "styled-components";

import axios from 'axios';
const AnnuelLeavePrinterMainDivBox = styled.div`
  width: 21cm;
  min-height: 29.7cm;
  padding: 1.5cm 1.5cm 2cm 1.5cm;
  font-family:Gulim;

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

  .Content_Box_Container{
    border:2px solid black;
    font-size:0.8em;
    .Content_Box_Cotent_Container{
      display:flex;
      min-height:50px;
      text-align:center;
      font-weight:bolder;
      
      div{
        border-bottom:1px solid black;
        border-right:1px solid black;
        display:flex;
        align-items:center;
        justify-content:center;
        span{
          font-size: 0.5em;
    position: absolute;
    right: 100px;
    bottom: 12px;
    font-weight: lighter;
        }
      }
    }
  }

  .Content_Box_Explain_Container{
    text-align:center;
    display:flex;
    flex-flow: column;
    align-items: center;
    justify-content: space-around;

  }

  .Table_Payment_Container{
    width: 350px;
    border: 1px solid black;
    border-collapse: collapse;
    text-align:center;
    table-layout:fixed;
    font-size:0.8em;
    th, td {
    border: 1px solid black;
  }
     
  }
  .Printer_Header_Container{
    display:flex;
    justify-content:space-between;
    align-items:center;
    margin-bottom:30px;
    margin-top:30px;
  }
`




const AnnuelLeavePrinter = () =>{
    
    const handlesenddata = async() =>{
        try{

            const GetData = await axios.post(`https://openapi.stage.britymail.com/approval/api/v2.0/approvals/submit`,{
                aplns: [
                     {
                    userId:"semtek1@stage.britymail.com",
                    seq: '0',
                    role: "0",
                    aplnStatsCode: "0",
                    arbPmtYn: "Y",
                    contentsMdfyPmtYn: "N", 
                    aplnMdfyPmtYn: "N",
                    opinion:"결재API TEST2"
                    },
                    {
                    userId:"semtek2@stage.britymail.com",
                    seq: '1',
                    role: "1",
                    aplnStatsCode: "0",
                    arbPmtYn: "Y",
                    contentsMdfyPmtYn: "N", 
                    aplnMdfyPmtYn: "N",
                    },
                    {
                    userId:"semtek3@stage.britymail.com",
                    seq: '2',
                    role: "1",
                    aplnStatsCode: "0",
                    arbPmtYn: "Y",
                    contentsMdfyPmtYn: "N", 
                    aplnMdfyPmtYn: "N",
                    }
                ],
                contents: "<div>TEST</div>",
                contentsType: "HTML",
                docSecuType: "PERSONAL",
                notifyOption: "0",
                urgYn: "N",
              sbmDt: "20230511144500",
                timeZone: "GMT+9",
                docMngSaveCode: "1",
                subject: "Test application",
                sbmLang: "ko",
                apInfId: "DHKSolution222222222222222222228",
                
                
            },{
                headers:{
                     Accept: '*/*',
                    'Content-Type': 'application/json',
                    'System-ID': 'A34REST00001',
                      Authorization: `Bearer 42ec2517-50d8-3ee6-8cef-71dca23091f2`,
                }
            })

console.log(GetData);

        }catch(error){
            console.log(error);
        }
    }


const select = async() =>{
    try{
      const GetData = await axios.post(`https://openapi.stage.britymail.com/approval/api/v2.0/approvals/DHKSolution222222222222222222228/autoprogress`,{},{
                  headers:{
                      Accept: '*/*',
                      'Content-Type': 'application/json',
                      'System-ID': 'A34REST00001',
                      Authorization: `Bearer 42ec2517-50d8-3ee6-8cef-71dca23091f2`,
        },
        params: {
          flag: "0",
          timeZone:"GMT"
      }
      
      });
                console.log(GetData);
    }catch(error){
        console.log(error);
    }
}

    // useEffect(()=>{
    // // handlesenddata();
    // select();
    // },[])
  const titleTable_Hiehgt = "80px";
    return(
      <AnnuelLeavePrinterMainDivBox>
        <div>
          <div className="Printer_Header_Container">
            <img src={"/semtek.png"} width={"150px"}></img>
            <h3 style={{ fontSize: "2em",fontWeight:"400" }}>휴 가 계</h3>
                <table className="Table_Payment_Container">
                <thead>
                  <tr>
                    <td rowspan="2" style={{width:"30px",padding:"5px"}}>결 재</td>
                    <td style={{padding:'3px'}}>작 성</td>
                    <td style={{padding:'3px'}}>검 토</td>
                    <td style={{padding:'3px'}}>검 토</td>
                    <td style={{padding:'3px'}}>승 인</td>
                  </tr>
                  <tr>
                    <td style={{height:"65px"}}></td>
                    <td style={{height:"65px"}}></td>
                    <td style={{height:"65px"}}></td>
                    <td style={{height:"65px"}}></td>
                  </tr>
                </thead>
                </table>
          </div>
          <div className="Content_Box_Container">
            <div className="Content_Box_Cotent_Container">
              <div style={{width:"100px"}}>소속 부서</div>
              <div  style={{width:"580px",fontWeight:"lighter"}}>관리팀</div>
            </div>
            <div className="Content_Box_Cotent_Container">
              <div style={{width:"100px"}}>직    위</div>
              <div style={{width:"340px",fontWeight:"lighter"}}>프로</div>
              <div style={{width:"100px" }}>성    명</div>
              <div style={{width:"140px",fontWeight:"lighter"}}>박 수 인</div>
            </div>
             <div className="Content_Box_Cotent_Container">
              <div style={{width:"100px"}}>기 간(1)</div>
              <div style={{width:"340px",fontWeight:"lighter"}}>2023년 04월 14일 09:00 ~ 2023년 04월 14일 18:00</div>
              <div style={{width:"100px"}}>일수</div>
              <div style={{width:"140px"}}>(  1.0  ) 일간</div>
            </div>
            <div className="Content_Box_Cotent_Container">
              <div style={{width:"100px"}}>기 간(2)</div>
              <div style={{width:"340px",fontWeight:"lighter"}}>2023년 04월 14일 09:00 ~ 2023년 04월 14일 18:00</div>
              <div style={{width:"100px"}}>일수</div>
              <div style={{width:"140px"}}>(  1.0  ) 일간</div>
            </div>
            <div className="Content_Box_Cotent_Container">
              <div style={{width:"100px"}}>근태구분</div>
              <div style={{width:"580px",fontWeight:"lighter"}}>연차 휴가</div>
            </div>
            <div className="Content_Box_Cotent_Container">
              <div style={{ width: "680px",position:"relative",borderBottom:"1px dashed lightgray",borderLeft:"none",borderRight:"none" }}>휴가 신청 사유
                <span style={{fontSize:"0.5em"}}>( 구체적으로 기재 요망 )</span></div>
            </div>
            <div className="Content_Box_Cotent_Container">
              <div style={{width:"680px",border:"1px dashed lightgray",fontWeight:"lighter"}}>개인사정</div>
            </div>
             <div className="Content_Box_Cotent_Container">
              <div style={{width:"680px",border:"1px dashed lightgray",fontWeight:"lighter"}}>개인사정</div>
            </div>
             <div className="Content_Box_Cotent_Container">
              <div style={{width:"680px",border:"1px dashed lightgray",fontWeight:"lighter"}}>개인사정</div>
            </div>
            <div className="Content_Box_Explain_Container"  style={{border:"0.5px solid black",height:"150px"}}>
              <div>위와 같이 휴가계를 제출합니다.</div>
              <div style={{paddingLeft:"265px"}}>2023년 04월 13일</div>
              <div><h4>(주)샘텍 대표이사 귀하</h4></div>
            </div>
            <div style={{textAlign:"center"}}>
            
              <div style={{ display: "flex",justifyContent:"end",alignItems:"center",paddingTop:"60px" }}>
                <table className="Table_Payment_Container">
                <thead>
                  <tr>
                    <td rowspan="2" style={{width:"30px",padding:"5px"}}>경영지원팀</td>
                    <td style={{padding:'3px'}}>담 당</td>
                    <td style={{padding:'3px'}}>검 토</td>
                    <td style={{padding:'3px'}}>검 토</td>
                    <td style={{padding:'3px'}}>승 인</td>
                  </tr>
                  <tr>
                    <td style={{height:"65px"}}></td>
                    <td style={{height:"65px"}}></td>
                    <td style={{height:"65px"}}></td>
                    <td style={{height:"65px"}}></td>
                  </tr>
                </thead>
                </table>
                </div>
            </div>
          </div>
        </div>
      </AnnuelLeavePrinterMainDivBox>
    )
}

export default AnnuelLeavePrinter;
import React,{useState} from "react";
import Tree from 'react-animated-tree-v2';

const OrganChartData = ({ items,HandleClickItemShowInfo}) => {
    return (
        <div>
             {items.map((list) => {
                return list.children.length > 0 ?
                    (<Tree content={list.department_name}  
                    onItemClick={(content) => HandleClickItemShowInfo(content)}
                      open={list.openChecking}
                    visible={list.openChecking}
                        key={list.department_code}
                    itemId={list.department_code}>        
                    <OrganChartData items={list.children} HandleClickItemShowInfo={(content)=>HandleClickItemShowInfo(content)}></OrganChartData>
                    </Tree>) : (<Tree content={list.department_name} 
                        key={list.department_code}
                    open={list.openChecking}
                    visible={list.openChecking}
                        itemId={list.department_code} onItemClick={(content) => HandleClickItemShowInfo(content)}></Tree>) 
            })}
        </div>
    )
}

export default OrganChartData;
import React, {useEffect} from 'react';
import {
  Grid,
  GridColumn,
  GridToolbar,
  getSelectedState,
} from "@progress/kendo-react-grid";
import { getter } from "@progress/kendo-react-common";
import RiskData from "./Data/Riskmitigationplan.json";
import { FaEdit, FaPlus, FaSave, FaTrashAlt } from "react-icons/fa";
import { ColumnMenu } from '../Kendo/ColumnMenu';
import { Calculateheight } from '../Layout';
const DATA_ITEM_KEY = "ProductID";
const SELECTED_FIELD = "selected";
const idGetter = getter(DATA_ITEM_KEY);


const RiskMitigationPlan = () => {

  const [dataState, setDataState] = React.useState(
    RiskData.map((dataItem) =>
      Object.assign(
        {
          selected: false,
        },
        dataItem
      )
    )
  );
  const [selectedState, setSelectedState] = React.useState({});
  
  const onSelectionChange = React.useCallback(
    (event) => {
      const newSelectedState = getSelectedState({
        event,
        selectedState: selectedState,
        dataItemKey: DATA_ITEM_KEY,
      });
      setSelectedState(newSelectedState);
    },
    [selectedState]
  );
  const onHeaderSelectionChange = React.useCallback((event) => {
    const checkboxElement = event.syntheticEvent.target;
    const checked = checkboxElement.checked;
    const newSelectedState = {};
    event.dataItems.forEach((item) => {
      newSelectedState[idGetter(item)] = checked;
    });
    setSelectedState(newSelectedState);
  }, []);
  useEffect(() => {
    debugger;
    Calculateheight();
    function handleResize() { 
     Calculateheight();
    }
    window.addEventListener('resize', handleResize)
  });
  return (
    <div>
      <Grid
        data={dataState.map((item) => ({
          ...item,
          [SELECTED_FIELD]: selectedState[idGetter(item)],
        }))}
        
        dataItemKey={DATA_ITEM_KEY}
        selectedField={SELECTED_FIELD}
        selectable={{
          enabled: true,
          drag: false,
          cell: false,
          mode: "multiple",
        }}
        onSelectionChange={onSelectionChange}
        onHeaderSelectionChange={onHeaderSelectionChange}
      >
        <GridColumn
          field={SELECTED_FIELD}
          width="50px"
          headerSelectionValue={
            dataState.findIndex((item) => !selectedState[idGetter(item)]) === -1
          }
        />
       <GridColumn field="SrNo" title="S.N." width="60px" />
       <GridColumn field="ActionCol" className='ActionCol' title="Action" width="250px" 
      />
      <GridColumn field="RiskID" title="Risk ID" width="160px" columnMenu={ColumnMenu}  />
      <GridColumn field="KeyRiskDescription" title="Key Risk Description" columnMenu={ColumnMenu} width="160px" />
      <GridColumn field="PreviousRiskScore" title="Previous Risk Score" columnMenu={ColumnMenu} width="160px"/>
      <GridColumn field="CurrentRiskScore" title="Current Risk Score" columnMenu={ColumnMenu} width="160px"/>
      <GridColumn field="MitigationPlan" title="Mitigation Plan" columnMenu={ColumnMenu} width="160px"/>
      <GridColumn field="MitigationActionDate" title="Mitigation Action Date" columnMenu={ColumnMenu} width="160px"/>
      <GridColumn field="ActionBy" title="Action By" columnMenu={ColumnMenu} width="160px"/>
      <GridColumn field="TargetDate" title="Target Date" columnMenu={ColumnMenu} width="160px"/>
      <GridColumn field="ActionTaken" title="Action Taken" columnMenu={ColumnMenu} width="160px"/>
      <GridColumn field="ActionTakenDate" title="Action Taken Date" columnMenu={ColumnMenu} width="135px"/>
      <GridToolbar>
                   <button
                       title="Click"
                       className="k-button k-primary"                     
                   ><FaEdit/>
                   </button>
                   <button
                       title="Click"
                       className="k-button k-primary"                    
                   ><FaPlus/>
                   </button>
                   <button
                       title="Click"
                       className="k-button k-primary"
                      
                   ><FaSave/>
                   </button>
                   <button
                       title="Click"
                       className="k-button k-primary"
                      
                   ><FaTrashAlt/>
                   </button>
               </GridToolbar>
      </Grid>
    </div>
  );
};
//import React, {useEffect} from 'react';

// import React from 'react';
// import RiskData from "./Data/Riskmitigationplan.json";
// import { getter } from "@progress/kendo-react-common";
// import { Grid, GridColumn, GridToolbar, getSelectedState} from "@progress/kendo-react-grid";
// import { ColumnMenu } from '../Kendo/ColumnMenu';
// //import { Calculateheight } from '../Layout';
// import { FaEdit, FaPlus, FaSave, FaTrashAlt } from "react-icons/fa";

// const DATA_ITEM_KEY = "ProductID";
// const SELECTED_FIELD = "selected";
// const idGetter = getter(DATA_ITEM_KEY);
// const Riskmitigationplan = () => {
//   // useEffect(() => {
//   //   debugger;
//   //   Calculateheight();
//   //   function handleResize() { 
//   //    Calculateheight();
//   //   }
//   //   window.addEventListener('resize', handleResize)
//   // });

//   const [dataState, setDataState] = React.useState(
//     RiskData.map((dataItem) =>
//       Object.assign(
//         {
//           selected: false,
//         },
//         dataItem
//       )
//     )
//   );
//   const [selectedState, setSelectedState] = React.useState({});
//   const onSelectionChange = React.useCallback(
//     (event) => {
//       const newSelectedState = getSelectedState({
//         event,
//         selectedState: selectedState,
//         dataItemKey: DATA_ITEM_KEY,
//       });
//       setSelectedState(newSelectedState);
//     },
//     [selectedState]
//   );
//   const onHeaderSelectionChange = React.useCallback((event) => {
//     const checkboxElement = event.syntheticEvent.target;
//     const checked = checkboxElement.checked;
//     const newSelectedState = {};
//     event.dataItems.forEach((item) => {
//       newSelectedState[idGetter(item)] = checked;
//     });
//     setSelectedState(newSelectedState);
//   }, []);
//   return (
//     <div>
//       <Grid
//       // style={{height:'90vh'}}
//       data={dataState.map((item) => ({
//         ...item,
//         [SELECTED_FIELD]: selectedState[idGetter(item)],
//       }))}
//       dataItemKey={DATA_ITEM_KEY}
//       selectedField={SELECTED_FIELD}
//       selectable={{
//         enabled: true,
//         drag: false,
//         cell: false,
//         mode: "multiple",
//       }}
//       onSelectionChange={onSelectionChange}
//       onHeaderSelectionChange={onHeaderSelectionChange}
//     >
//       <GridColumn
//           field={SELECTED_FIELD}
//           width="50px"
//           headerSelectionValue={
//             dataState.findIndex((item) => !selectedState[idGetter(item)]) === -1
//           }
//         />
//       <GridColumn field="SrNo" title="S.N." width="60px" />
//       <GridColumn field="ActionCol" className='ActionCol' title="Action" width="250px" 
//      />
//       <GridColumn field="RiskID" title="Risk ID" width="160px" columnMenu={ColumnMenu}  />
//       <GridColumn field="KeyRiskDescription" title="Key Risk Description" columnMenu={ColumnMenu} width="160px" />
//       <GridColumn field="PreviousRiskScore" title="Previous Risk Score" columnMenu={ColumnMenu} width="160px"/>
//       <GridColumn field="CurrentRiskScore" title="Current Risk Score" columnMenu={ColumnMenu} width="160px"/>
//       <GridColumn field="MitigationPlan" title="Mitigation Plan" columnMenu={ColumnMenu} width="160px"/>
//       <GridColumn field="MitigationActionDate" title="Mitigation Action Date" columnMenu={ColumnMenu} width="160px"/>
//       <GridColumn field="ActionBy" title="Action By" columnMenu={ColumnMenu} width="160px"/>
//       <GridColumn field="TargetDate" title="Target Date" columnMenu={ColumnMenu} width="160px"/>
//       <GridColumn field="ActionTaken" title="Action Taken" columnMenu={ColumnMenu} width="160px"/>
//       <GridColumn field="ActionTakenDate" title="Action Taken Date" columnMenu={ColumnMenu} width="135px"/>
//       <GridToolbar>
//                    <button
//                        title="Click"
//                        className="k-button k-primary"                     
//                    ><FaEdit/>
//                    </button>
//                    <button
//                        title="Click"
//                        className="k-button k-primary"                    
//                    ><FaPlus/>
//                    </button>
//                    <button
//                        title="Click"
//                        className="k-button k-primary"
                      
//                    ><FaSave/>
//                    </button>
//                    <button
//                        title="Click"
//                        className="k-button k-primary"
                      
//                    ><FaTrashAlt/>
//                    </button>
//                </GridToolbar>


//     </Grid>
//     </div>
//   )
// }

export default RiskMitigationPlan;

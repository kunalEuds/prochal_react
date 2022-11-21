import React, {useEffect} from 'react'
//import products from "./products.json";
import { DatePicker } from "@progress/kendo-react-dateinputs";
import { Grid, GridColumn} from "@progress/kendo-react-grid";
import $ from 'jquery'
import { useNavigate } from 'react-router-dom';
import { Calculateheight } from '../Layout';

const RiskProfile = () => {
 useEffect(() => {
  debugger;
  Calculateheight();
  function handleResize() { 
   Calculateheight();
  }
  window.addEventListener('resize', handleResize)
});
let value = new Date();

  return (
    <>
   
    <div className="col-lg-3 col-xs-12 col-md-6 example-col">
      <p>Select Month and Year:</p>
      <DatePicker />
    </div>
  <div id="RiskProfileGrid" className='grid pt-1'>
  <Grid
      // style={{height:'90vh'}}
      //data={products}
    >
      <GridColumn field="SrNo" title="S.N."  width="60px" />
      <GridColumn field="Category" title="Category" />
      <GridColumn field="Month" title="Month" width="160px" >
        <GridColumn field="totalNo" title="Total No." width="160px" />
        <GridColumn field="SumofRiskScore" title="Sum of Risk Score" width="160px" />
        <GridColumn field="PerNo" title="% No" width="160px" />
        <GridColumn field="PerWRTRiskScore" title="% w.r.t. Risk Score" width="160px" />
      </GridColumn>
    </Grid>
    </div>
  </>
  )
}

export default RiskProfile;
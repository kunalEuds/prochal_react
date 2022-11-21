import React, {useEffect} from 'react'
import products from "./products.json";
import { Grid, GridColumn,GridToolbar} from "@progress/kendo-react-grid";
import $ from 'jquery'
import { useNavigate } from 'react-router-dom';
//import { click } from '@testing-library/user-event/dist/click';
//import React, { useState, useEffect } from 'react';
import { Calculateheight } from '../Layout';
import { FaAddressBook,FaEdit,FaTrash,FaUpload } from 'react-icons/fa';



const MasterProjectList = () => {
  const navigate= useNavigate();
 
  // document.getElementsByClassName('projectSelect').onClick= function(){
  //   alert('hello')
  // }
  $(document).on("click", ".projectSelect", function(){
    let path = '/Home/MisReport'; 
    navigate(path);
    $('.MainSdbr').addClass('d-none');
    $('.RiskSdbr').removeClass('d-none');
 });

 useEffect(() => {
  debugger;
  Calculateheight();
  function handleResize() { 
   Calculateheight();
  }
  window.addEventListener('resize', handleResize)
});
 
 
 
  
  return (
  <>
  <div id="MasterProjGrid" className='grid'>
  <Grid
      // style={{height:'90vh'}}
      data={products}
    >
         <GridToolbar>
                   <button
                   className="k-button k-primary">
                   <FaAddressBook/>
                   </button>
                   <button
                   className="k-button k-primary">
                   <FaEdit/>
                   </button>
                   <button
                   className="k-button k-primary">
                   <FaTrash/>
                   </button>
                   <button
                   className="k-button k-primary">
                   <FaUpload/>
                   </button>
               </GridToolbar>
      <GridColumn field="SrNo" title="S.N."  width="60px" />
      <GridColumn field="ProjectCode" className='projectSelect' title="Project Code" width="250px" 
     />
      <GridColumn field="ProjectName" title="Project Name" width="160px"  />
      <GridColumn field="ProjectDescription" title="Project Description"  width="160px" />
      <GridColumn field="ScheduleStartDate" title="Schedule_Start_Date"  width="160px"/>
      <GridColumn field="ScheduleCompletionDate" title="Schedule_Completion_Date"  width="160px"/>
      <GridColumn field="StateName" title="State Name"  width="160px"/>
      <GridColumn field="CityName" title="City Name"  width="160px"/>
      <GridColumn field="CountryName" title="Country Name"  width="160px"/>
      <GridColumn field="About" title="About"  width="160px"/>
      <GridColumn field="Contact Us" title="Contact Us"  width="160px"/>
      <GridColumn field="New File" title="New File"  width="160px"/>
      


    </Grid>
    </div>
  </>
    
  )
 

}

export default MasterProjectList
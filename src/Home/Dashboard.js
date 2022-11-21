import React, {useEffect} from 'react'
import Dashboard_Cards from "../Data";
import { DropDownList } from "@progress/kendo-react-dropdowns";
import GraphFirst from '../Images/Graph1.PNG'
import GraphSecond from '../Images/Graph2.PNG'
import GraphThird from '../Images/Graph3.PNG'
import { LoginCalculate } from '../Layout';

const Dashboard = () => {
  const Projects = ["Overall"];
  useEffect(() => {
    debugger;
    LoginCalculate();
    function handleResize() { 
        LoginCalculate();
    }
    window.addEventListener('resize', handleResize)
  });
  return (
    <>
      <div class="box no-border border-0" id="DashboardID">
        <div class="tab-content pt-1 px-sm-0" id="nav-tabContent">
          <div
            class="tab-pane fade show active "
            id="RefMaster"
            role="tabpanel"
            aria-label="nav-master-tab"
          >
            <div class="">
              <div class="col-lg-12 col-sm-12 col-md-12 text-center d-flex nav-header p-0 py-1">
                <h5 class="mx-auto font-weight-bold ml-2 pl-0 text-black-50 tab-name">
                  {" "}
                  Dashboard
                </h5>
              </div>
            </div>
          </div>
        </div>
        <div class="col-12 mb-2 pr-3">
          <div class="row">
            <div class="col-lg-12 col-md-12 col-sm-12 col-12 labelcol p-0">
              <ul
                class="nav nav-tabs no-margin pl-1 pb-1"
                id="index-tabs"
                role="tablist"
              >
                <li
                  class="col-lg-6 nav-item p-0"
                  data-index="0"
                  title="Overall"
                  data-liDefault="Overall"
                >
                  <div class="col-lg-12 col-md-12 col-sm-12 pl-1">
                    <div class="d-flex pt-1">
                      <label for="input" class="text-white">
                        <b>Project Name :</b>
                      </label>
                      <div class="col-lg-5 col-md-4 col-sm-7 col-6 ml-2 p-0">
                      <DropDownList
        style={{
          width: "300px",
        }}
        data={Projects} value={Projects}
      />
                        <div id="Divisiondrpdwn" class="w-100"></div>
                      </div>
                    </div>
                  </div>
                </li>
              </ul>
            </div>

            <div
              class="tab-content pt-1 px-sm-0 page-tab col-lg-12 overflow-auto pl-0 pr-0"
              id="nav-tabContent"
            >
              <div
                class="tab-pane  fade show active"
                id="nav-overallcontent"
                role="tabpanel"
                aria-labelledby="nav-home-tab"
              >
                <div id="#" class="mx-0 height_content heightAdjust ">
                  <div class="col-12 m-0 pl-1 row d-none">
                    <label class="boxFilter">
                      Total Projects{" "}
                      <i id="" class="fa fa-times clearBoxFilter"></i>
                    </label>
                  </div>
                  <div
                    class="right_col sectionToScroll transistion-Div col-12 px-0"
                    role="main"
                    id="overallPageCards"
                  >
                    <div class="fadeInUp ftco-animate ftco-animated">
                      <div class="px-3 px-lg-4 row row-cols-2 row-cols-1 row-cols-lg-5 row-cols-md-2 row-cols-sm-2 row-cols-xl-5">
                        <Dashboard_Cards />
                      </div>
                      <div class="clearfix"></div>
                    </div>
                  </div>
                  <div className="col-lg-12 col-md-12 col-sm-12 col-12 mt-2 pl-1">
                            <div className="mb-2 pl-2 row">
                                <div className="col-lg-12 col-md-12 col-sm-12 col-12 pr-2 pr-lg-3">
                                    <div className="bg-white box_shadow p-0 rounded">
                                        <div className="colorthemehead mx-0 px-2 shadow-lg border">
                                            <img className='img-fluid' src={GraphFirst} /> 
                                        </div>
                                       
                                    </div>
                                </div>

                            </div>
                            <div className="row mb-2 pl-2 pt-2">
                                <div className="col-lg-6 col-md-12 col-sm-12 col-12 pr-2 pr-lg-3">
                                    <div className="bg-white box_shadow p-0 rounded">
                                        <div className="colorthemehead mx-0 px-2 shadow-lg border">
                                            <img className='img-fluid' src={GraphSecond} />
                                        </div>
                                       
                                    </div>
                                </div>
                                <div className="col-lg-6 col-md-12 col-sm-12 col-12 mt-3 mt-lg-0 pr-2 pr-lg-3">
                                    <div className="bg-white box_shadow p-0 rounded">
                                        <div className="colorthemehead mx-0 px-2 shadow-lg border">
                                        <img className='img-fluid' src={GraphThird} />                                        
                                        </div>
                                       
                                    </div>
                                </div>

                            </div>
                            <div className="row mb-2 pl-2 pt-2 d-none">
                                <div className="col-lg-6 col-md-12 col-sm-12 col-12 pr-2 pr-lg-3">
                                    <div className="bg-white box_shadow p-0 rounded">
                                        <div className="colorthemehead">
                                            <div className="row m-0">
                                                <div className="col-lg-9 col-md-12 col-sm-12 px-0">
                                                    <h6 className="img_header float-left">
                                                        Uploaded vs Rejected vs Approved
                                                    </h6>
                                                </div>
                                                <div className="col-lg-3 col-md-12 col-sm-12 p-0">
                                                    <ul className="nav navbar-right float-right">

                                                        <li className="panel_toolbox">
                                                            <a className="ShowData" data-anchor="" title="Show Data" data-toggle="modal" href="#" data-tab="UploadedvsReviewedvsApproved" data-name="Uploaded vs Rejected vs Approved">
                                                                <i className="fa fa-columns panel_toolbox">
                                                                </i>
                                                            </a>
                                                        </li>
                                                        <li className="panel_toolbox">
                                                            <a className="ShowFullView" data-anchor="" title="Full View" data-toggle="tooltip" data-tab="UploadedvsReviewedvsApproved" data-graph="UploadedvReviewedvApprovedGraph" data-name="Uploaded vs Rejected vs Approved Documents">
                                                                <i className="fa fa-expand">
                                                                </i>
                                                            </a>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                        <div id="DivUploadedvReviewedvApproved" className="AMchart-height UploadedvsReviewedvsApproveddoc">
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-6 col-md-12 col-sm-12 col-12 mt-3 mt-lg-0 pr-2 pr-lg-3">
                                    <div className="bg-white box_shadow p-0 rounded">
                                        <div className="colorthemehead">
                                            <div className="row m-0">
                                                <div className="col-lg-9 col-md-12 col-sm-12 px-0">
                                                    <h6 className="img_header float-left">
                                                        Rejected Documents
                                                    </h6>
                                                </div>
                                                <div className="col-lg-3 col-md-12 col-sm-12 p-0">
                                                    <ul className="nav navbar-right float-right">

                                                        <li className="panel_toolbox">
                                                            <a className="ShowData" data-anchor="" title="Show Data" data-toggle="modal" href="#" data-tab="RejectedDocuments" data-name="Rejected Documents">
                                                                <i className="fa fa-columns panel_toolbox">
                                                                </i>
                                                            </a>
                                                        </li>
                                                        <li className="panel_toolbox">
                                                            <a className="ShowFullView" data-anchor="" title="Full View" data-toggle="tooltip" data-tab="RejectedDocuments" data-graph="RejectedGraph" data-name="Rejected Documents">
                                                                <i className="fa fa-expand">
                                                                </i>
                                                            </a>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                        <div id="DivRejectedDoc" className="Rejecteddoc AMchart-height">
                                        </div>
                                    </div>
                                </div>

                            </div>
                            <div className="row mb-2 pl-2 pt-2 d-none">
                                <div className="col-lg-6 col-md-12 col-sm-12 col-12 pr-2 pr-lg-3">
                                    <div className="bg-white box_shadow p-0 rounded">
                                        <div className="colorthemehead">
                                            <div className="row m-0">
                                                <div className="col-lg-9 col-md-12 col-sm-12 px-0">
                                                    <h6 className="img_header float-left">
                                                        Hold Documents
                                                    </h6>
                                                </div>
                                                <div className="col-lg-3 col-md-12 col-sm-12 p-0">
                                                    <ul className="nav navbar-right float-right">

                                                        <li className="panel_toolbox">
                                                            <a className="ShowData" data-anchor="" title="Show Data" data-toggle="modal" href="#" data-tab="HoldDocuments" data-name="Hold Documents">
                                                                <i className="fa fa-columns panel_toolbox">
                                                                </i>
                                                            </a>
                                                        </li>
                                                        <li className="panel_toolbox">
                                                            <a className="ShowFullView" data-anchor="" title="Full View" data-toggle="tooltip" data-tab="HoldDocuments" data-graph="HoldGraph" data-name="Hold Documents">
                                                                <i className="fa fa-expand">
                                                                </i>
                                                            </a>
                                                        </li>

                                                    </ul>

                                                </div>

                                            </div>
                                        </div>
                                        <div id="DivHoldDoc" className="AMchart-height holddoc">
                                        </div>
                                    </div>

                                </div>
                                <div className="col-lg-6 col-md-12 col-sm-12 col-12 mt-3 mt-lg-0 pr-2 pr-lg-3">
                                    <div className="bg-white box_shadow p-0 rounded">
                                        <div className="colorthemehead">
                                            <div className="row m-0">
                                                <div className="col-lg-10 col-md-12 col-sm-12 px-0 row m-0">
                                                    <h6 className="col-lg-5 col-md-6 col-xs-12 pb-1 img_header pr-0">
                                                        Workflow Stages Status
                                                    </h6>
                                                    <div className="col-lg-7 col-md-6 col-sm-8 col-xs-12 d-flex func m-0 mt-xl-0 px-0 pt-0">
                                                        <label for="input">
                                                            <b className="fcolor">Functions :</b>
                                                        </label>
                                                        <div className="workflowdrop pl-1">
                                                            <div id="WrkFlowdrpdwn" className="w-100"></div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-lg-2 col-md-12 col-sm-12 p-0">
                                                    <ul className="nav navbar-right float-right">

                                                        <li className="panel_toolbox">
                                                            <a className="ShowData" data-anchor="" title="Show Data" data-toggle="modal" href="#" data-tab="WorkflowStagesStatus" data-name="Workflow Stages Status">
                                                                <i className="fa fa-columns panel_toolbox">
                                                                </i>
                                                            </a>
                                                        </li>
                                                        <li className="panel_toolbox">
                                                            <a className="ShowFullView" data-anchor="" title="Full View" data-toggle="tooltip" data-tab="WorkflowStagesStatus" data-graph="WorkFlowGraph" data-name="Workflow Documents">
                                                                <i className="fa fa-expand">
                                                                </i>
                                                            </a>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                        <div id="DivApprovalSchCompln" className="AMchart-height WorkflowStagesStatusdoc">
                                        </div>
                                    </div>
                                </div>

                            </div>
                            <div className="row mb-2 pl-2 pt-2 d-none">
                                <div className="col-lg-6 col-md-12 col-sm-12 col-12 pr-2 pr-lg-3">
                                    <div className="bg-white box_shadow p-0 rounded rounded">
                                        <div className="colorthemehead">
                                            <div className="row m-0">
                                                <div className="col-lg-9 col-md-12 col-sm-12 px-0">
                                                    <h6 className="img_header float-left">
                                                        Doughnut Chart
                                                    </h6>
                                                </div>
                                                <div className="col-lg-3 col-md-12 col-sm-12 p-0">
                                                    <ul className="nav navbar-right float-right">

                                                        <li className="panel_toolbox">
                                                            <a className="ShowData" data-anchor="" title="Show Data" data-toggle="modal" href="#" data-tab="Piechart" data-name="Doughnut Chart" style={{ display: 'none'}}>
                                                                <i className="fa fa-columns panel_toolbox">
                                                                </i>
                                                            </a>
                                                        </li>
                                                        <li className="panel_toolbox pl-1">
                                                            <a className="ShowFullView" data-anchor="" title="Full View" data-toggle="tooltip" data-tab="Piechart" data-graph="PiechartGraph" data-name="Doughnut Chart Data">
                                                                <i className="fa fa-expand">
                                                                </i>
                                                            </a>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                        <div id="DivActCompln" className="AMchart-height Piechartdoc">
                                        </div>
                                        <div className="pb-1">
                                            <span className="mr-1 px-1 py-lg-1 small rounded E2EPMSInfo">
                                                <b className="px-2">Pending :</b><span className="PendingBg px-1 rounded mr-2"></span><b className="px-2">Rejected :</b><span className="RejectedBg px-1 rounded mr-2"> </span><b className="px-2">Approved :</b><span className="ApproveBg px-1 rounded mr-2"></span>
                                            </span>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-lg-6 col-md-12 col-sm-12 col-12 mt-3 mt-lg-0 pr-2 pr-lg-3">
                                    <div className="bg-white box_shadow p-0 rounded h-100">
                                        <div className="colorthemehead">
                                            <div className="row m-0">
                                                <div className="col-lg-9 col-md-12 col-sm-12 px-0">
                                                    <h6 className="img_header float-left">
                                                        Cost of the Pending Approval Docs.
                                                    </h6>
                                                </div>
                                                <div className="col-lg-3 col-md-12 col-sm-12 p-0">
                                                    <ul className="nav navbar-right float-right">
                                                        <li className="panel_toolbox">
                                                            <a className="ShowData" data-anchor="" title="Show Data" data-toggle="modal" href="#" data-tab="PendingApprovalDocs" data-name="Value of the Pending Approval Docs.">
                                                                <i className="fa fa-columns panel_toolbox">
                                                                </i>
                                                            </a>
                                                        </li>
                                                        <li className="panel_toolbox">
                                                            <a className="ShowFullView" data-anchor="" title="Full View" data-toggle="tooltip" data-tab="PendingApprovalDocs" data-graph="PendingValueGraph" data-name="Value of the Pending Approval Docs.">
                                                                <i className="fa fa-expand">
                                                                </i>
                                                            </a>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                        <div id="DivPendingValueSummary" className="AMchart-height PendingApprovaldoc">
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="mb-2 pl-2 row pt-2 d-none">
                                <div className="col-lg-12 col-md-12 col-sm-12 col-12 pr-2 pr-lg-3">
                                    <div className="bg-white box_shadow p-0 rounded">
                                        <div className="colorthemehead">
                                            <div className="row m-0">
                                                <div className="col-lg-9 col-md-12 col-sm-12 px-0">
                                                    <h6 className="img_header float-left">
                                                        Approval Delay Reason Summary
                                                    </h6>
                                                </div>
                                                <div className="col-lg-3 col-md-12 col-sm-12 p-0">
                                                    <ul className="nav navbar-right float-right">

                                                        <li className="panel_toolbox">
                                                            <a className="ShowData" data-anchor="" title="Show Data" data-toggle="modal" href="#" data-tab="DelayReasonSummary" data-name="Approval Delay Reason Summary">
                                                                <i className="fa fa-columns panel_toolbox">
                                                                </i>
                                                            </a>
                                                        </li>
                                                        <li className="panel_toolbox">
                                                            <a className="ShowFullView" data-anchor="" title="Full View" data-toggle="tooltip" data-tab="DelayReasonSummary" data-graph="AppDRGraph" data-name="Approval Delay Reason Summary">
                                                                <i className="fa fa-expand">
                                                                </i>
                                                            </a>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                        <div id="DivDelayReasonSummary" className="AMchart-height DelayReasonSummarydoc">
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    
    </>
  );
};

export default Dashboard;

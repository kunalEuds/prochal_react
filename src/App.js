//import logo from "./logo.svg";

import "./App.css";
import "@progress/kendo-theme-default/dist/all.css";

import { TopHeaderLayout, SidebarNdMainConent, Footer } from "./Layout";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "./Home/Dashboard";
import MasterProjectList from "./Home/MasterProjectList";
import Landing from "./Login/Landing";
import RiskProfile from './Risk Management/RiskProfile'
import RiskReport from './Risk Management/RiskReport'
import RiskChart from './Risk Management/RiskChart'
import RiskMatrix from './Risk Management/RiskMatrix'
import RiskMitigationPlan from './Risk Management/RiskMitigationPlan'
import RiskRegister from './Risk Management/RiskRegister'
import MisReport from "../src/Home/MisReport";

function App() {
  let LoginToken = localStorage.getItem("GetLoginToken");
  if (LoginToken == null) {
    return <Landing />;
  } else {
    return (
      <>
        <BrowserRouter>
          <TopHeaderLayout />
          <div className="content-wrapper" id="RenderSection">
            <div id="content">
              <div className="wrapper content-section-wrapper wrapper-layout-bg">
                <SidebarNdMainConent />
                <div class="DataSectionMainLayout">
                  <div className="px-2 pt-1">
                    <Routes>
                      <Route path="/" element={<Dashboard />} />
                      <Route
                        path="/Home/MasterProjectList"
                        element={<MasterProjectList />}
                      />
                      <Route path="/Home/MisReport" element={<MisReport/>}/>
                      <Route
                        path="/Risk Management/RiskProfile"
                        element={<RiskProfile/>}
                      />
                      <Route
                        path="/Risk Management/RiskReport"
                        element={<RiskReport/>}
                      />
                      <Route
                        path="/Risk Management/RiskChart"
                        element={<RiskChart/>}
                      />
                      <Route
                        path="/Risk Management/RiskMatrix"
                        element={<RiskMatrix/>}
                      />
                       <Route
                        path="/Risk Management/RiskMitigationPlan"
                        element={<RiskMitigationPlan/>}
                      />
                       <Route
                        path="/Risk Management/RiskRegister"
                        element={<RiskRegister/>}
                      />
                    
                    </Routes>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <Footer />
        </BrowserRouter>
      </>
    );
  }
}

export default App;

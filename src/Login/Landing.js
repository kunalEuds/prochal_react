import React, {useEffect} from 'react'
import './LandingPage.css'
import Prochal from './Prochal.png'
//import logo1 from './logo1.png'
//import logo1 from './src/img/logo1.png'
import login1 from './login1.png'
// import fontawesome from '@fortawesome/fontawesome'
//import prochalLogo from '../Images/Logo.png'
//import loginPageImg1 from '../Images/Section.png'
import { FaTwitter, FaFacebookF, FaYoutube, FaLinkedinIn } from "react-icons/fa";
import { LoginCalculate } from '../Layout';
// import { useNavigate } from "react-router-dom";


function Landing() {
   // let navigate = useNavigate();
    let DevClk = () => {
        let Token = "UserName";
        localStorage.setItem('GetLoginToken', Token);
        //navigate("/Home/Dashboard");
        //useNavigate(afterlog)
         window.location.reload();
    }

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
    {/* Navbar Start */}
    <div className='Header'>
    <nav className="nav navbar-expand-lg bg-transparent">
        <div className="container-fluid">
            <div className="row m-0 p-1">
          
                <a className="navbar-brand">
               
                    <img src={Prochal} className="IOCLlogo logo"/> 
                   
                </a>
                <div className="collapse navbar-collapse col-auto col-md-auto col-sm-auto ml-auto Backcolor" id="navbarCollapseSection">
                    <ul className="navbar-nav ml-auto mb-2 mb-lg-0">
                        <li className="nav-item"> <a href="#" onClick={DevClk} className="nav-link"><b>dev Login</b><i className="fa fa-sign-in-alt pl-1"></i></a></li>
                        {/* <li className="nav-item"> <a href="" className="nav-link"><b>dev Login</b><i className="fa fa-sign-in-alt pl-1"></i></a></li> */}
                       
                        <li className="nav-item"><a href="#" className="nav-link"><b>Sign In</b><i className="fa fa-sign-in-alt pl-1"></i></a></li>

                        <li className="nav-item"><a href="#" className="nav-link"><b>Sign Up </b><i className="fa fa-user-plus "></i></a></li>
                    </ul>
                </div>
            </div>
        </div>
    </nav>
    </div>
 {/* Navbar End */}

<div className="heightAdjust">

{/* Section1 start */}
 <section id="textlogo" className="align-items-center d-flex justify-content-center" >
        <div className="container text-center">
            <div className="row justify-content-center">
                <div className="text-white my-5  ">
                    <h3 className="animated fadeInDown"> <b>Project Challenges / Risk Managment</b></h3>
                    <p className="animated fadeInUp">Risk Management</p>
                    <a href="#" className="signbtn align-middle text-decoration-none aos-init aos-animate" data-aos="zoom-out">Sign Up <i className="fa fa fa-arrow-right"></i></a>
                
            </div>
            </div>

        </div>
        <div className="imgback"></div>
    </section>
{/* Section1 End */}

{/* Section Start */}
<section id="ProductInfo">
        <div className="container-fluid">
            <div className="row my-3">
                <div className="col-lg-6 aos-animate aos-init" data-aos="fade-right">
                    <img src={login1} className="img-fluid "/>
                
                </div>
                <div className="col-lg-6 d-flex flex-column justify-content-center aos-init aos-animate" data-aos="fade-left">
                    <div className="content pt-4 pt-lg-0">
                        <h3 className="text-center headbg">Project Challenges/Risk Managment</h3>
                        <p>Risk Management,Risk Identification and Categorization,Risk Assessment and Quantification,Risk Documentation(Risk Register),develop Risk Mitigation and Implementation Plans,Calculation of Risk Score using empirical formulas,Risk Monitoring and Reporting in specified formats including Risk Matrix,Graphs.etc</p>
                        
                    </div>
                </div>
            </div>
        </div>
    </section>
{/* Section2 End */}

{/* Section Start */}
<section id="StartNow">
        <div className="imgback"></div>
        <div className="container">
            <div className="row aos-init aos-animate" data-aos="zoom-out">
                <div className="col-lg-9 text-center text-lg-left">
                    <h3>Start with <span className="fa-lg">PGOLD</span></h3>
                    <p>Customize and Expand more Features as Yours Team Grows. <br />Manage Projects ,Organize Tasks and Build Team Spirit-<span className="highlight font-weight-bold ">All in One Place</span>.</p>
                </div>
                <div className="col-lg-3 btn-container text-center">
                    <a className="start-btn align-middle text-decoration-none">Start Now <i className="fa fa-arrow-right"></i></a>
                </div>
            </div>
        </div>

    </section>
{/* Section3 End */}



<footer id="footer" className="p-0">
        <div className="container-fluid">
            <div className="row m-0">
                <div className="col-lg-12 row m-0">
                    <ul className="d-inline-flex justify-content-center mb-0 mx-auto social-icon">
                        
                        <li><a href="https://twitter.com/ParascaddPvtLtd" className="twitter" target="_blank"> <FaTwitter/></a></li>
                        <li><a href="https://www.facebook.com/profile.php?id=651347388319610" className="facebook" target="_blank"> <FaFacebookF/></a></li>
                        <li className="ytblk"><a href="https://www.youtube.com/&#64;pcpl/" className="google-plus" target="_blank"> <FaYoutube/></a></li>
                        <li><a href="https://in.linkedin.com/company/parascadd-private-limited/" className="linkdin" target="_blank"> <FaLinkedinIn/></a></li>
                       
                    </ul>
                </div>
            </div>
            <div className="justify-content-center row copyright">
            &copy; 2021 PARASCADD Private Limited: All Rights Reserved.
            </div>
        </div>    
    </footer>
   
    </div>
    <div className='position-fixed footer' style={{bottom:"0px"}}></div>
{/* Section3 End */}
    </>
  );
}

export default Landing;

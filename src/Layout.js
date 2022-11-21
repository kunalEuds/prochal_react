import React, { useState } from 'react';
import { NavLink } from "react-router-dom";
import logo1 from "./Login/logo1.png";
import logo2 from "./Login/logo2.png"
import Prochal from './Login/Prochal.png' 
import PROCHALShort from './Login/PROCHALShort.png'
import "./style/CommonCSS.css";
import "./style/CustomizTheme.css";
import "./style/reset.css";
import "./style/Site.css";
import "./style/Template.css";
import $ from 'jquery'; 

//import Sidebardash from '../Images/sidebar_dashboard.png';
//import SidebarMaster from '../Images/sidebar_MASTER PROJECT LIST.png'
import UserProfile from './Img/UserProfile.png'
import { FaBars, FaHome, FaTh, FaCog, FaBell } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';



//import ProchalLogo from '../Images/PROCHAL2.png'
//import PROCHALShort.png from '../Images/PROCHAL2.png'

function TopHeaderLayout(){
    // Sidebar Toggle Code Start
    let sdbrclk = () => {
        debugger;
            // body - mini-sidebar-body (small sidebar)
            // sidebar- active. mini-sidebar (small sidebar)
            localStorage.setItem('menuClose', $('body').hasClass('mini-sidebar-body'));   //added by dhanashree at 28-12-2021 for sidebar pin
            $('.sidebarCollapseBtn').toggleClass('sidebarOpen mini-sidebar-button');
            $('.DataSectionMainLayout').toggleClass('rightcontent');
            $('body').toggleClass('mini-sidebar-body');
            $('#sidebar').toggleClass('active mini-sidebar')
            //$('#sidebar').toggleClass('leftcontent')
            $('#sidebar').toggleClass('closeSidebar');
            $('#rightcontenthover').removeClass();
            $('.sidebarlargelogo').toggle();    
            $('.sideshortlogo').toggle();
            $(this).find('i').toggleClass('fa-angle-double-left fa-angle-double-right');
            if ($(this).hasClass('sidebarOpen mini-sidebar-button')) {
                $(this).attr('title', 'Collapse Sidebar');
                // $('.sideshortlogo').hide();
                // $('.sidebarlargelogo').show();
            } 
            else {
                $(this).attr('title', 'Expand Sidebar');
                // $('.sideshortlogo').show();
                // $('.sidebarlargelogo').hide();
            }
    }
    //Sidebar Toggle Code End
    
    //Global Menu Js Code Start
    $(document).on('click', '.menuBtn', function (e) {
        debugger;
        // $('.menuBtn').click(function () {
        if (!($('#globalmenuID').is(':visible'))) {
            var html = '<ul class="menu"><li><a href="#" id="globalmenuTab" class="hasDropdown"><div class=""><i class="fa fa-2x fa-globe-americas mb-2"></i>' +
                '<span> Global</span></div></a></li>' +
                '<li><a href="#" id="projectmenuTab" class="hasDropdown"><div class=""><i class="fa fa-2x fa-parking mb-2"></i><span> Project</span></div>' +
                '</a></li>' +
                '</ul>' +
                ''
            $('#globalmenuID').empty().append(html);
            // $('#loginurl').href = loginUrl + "/Home/Index";

            $('#globalmenuTab').on('click', function () {
                if (!($('#globalmenuIDMenu').is(':visible'))) {
                    var EpmoHref = $('#EpmoHref').text();
                    var IsepmoDisabled = EpmoHref == '#' ? true : false;
                    var ProccplHref = $('#ProccplHref').text();
                    var IsProccplDisabled = ProccplHref == '#' ? true : false;
                    var CocosysHref = $('#CocosysHref').text();
                    var IsCocosysDisabled = CocosysHref == '#' ? true : false;
                    var ConsimHref = $('#ConsimHref').text();
                    var IsConsimHrefDisabled = ConsimHref == '#' ? true : false;
                    var e2ecmsHref = $('#e2ecmsHref').text();
                    var IsEPCPROMANDisabled = e2ecmsHref == '#' ? true : false;
                    var ProplanHref = $('#ProplanHref').text();
                    var IsProplanDisabled = ProplanHref == '#' ? true : false;
                    var ProdocsHref = $('#ProdocsHref').text();
                    var IsProDocsDisabled = ProdocsHref == '#' ? true : false;
                    var ProholdHref = $('#ProholdHref').text();
                    var IsProHoldDisabled = ProholdHref == '#' ? true : false;
                    var DCADHref = $('#DCADHref').text();
                    var IsDcadDisabled = DCADHref == '#' ? true : false;
                    var ProdashHref = $('#ProdashHref').text();
                    var IsProdashDisabled = ProdashHref == '#' ? true : false;
                    var EpcpromaHref = $('#EpcpromaHref').text();
                    var IsEpcpromaDisabled = EpcpromaHref == '#' ? true : false;
                    var WHAMHref = $('#WHAMHref').text();
                    var IsWHAMDisabled = WHAMHref == '#' ? true : false;
                    var ProcostHref = $('#ProcostHref').text();
                    var IsProcostHrefDisabled = ProcostHref == '#' ? true : false;
                    var ProchalHref = $('#ProchalHref').text();
                    var IsProchalHrefDisabled = ProchalHref == '#' ? true : false;
                    var ProsafeHref = $('#ProsafeHref').text();
                    var IsProsafeHrefDisabled = ProsafeHref == '#' ? true : false;
                    var LapmaHref = $('#LapmaHref').text();
                    var IsLapmaHrefDisabled = LapmaHref == '#' ? true : false;
                    var IcgpHref = $('#IcgpHref').text();
                    var IsIcgpHrefDisabled = IcgpHref == '#' ? true : false;
                    var IsomecHref = $('#IsomecHref').text();
                    var IsIsomecHrefDisabled = IsomecHref == '#' ? true : false;
                    var AutospoolHref = $('#AutospoolHref').text();
                    var IsAutospoolHrefDisabled = AutospoolHref == '#' ? true : false;
                    var MfaHref = $('#MfaHref').text();
                    var IsMfaHrefDisabled = MfaHref == '#' ? true : false;
                    var SpoolmanHref = $('#SpoolmanHref').text();
                    var IsSpoolmanHrefDisabled = SpoolmanHref == '#' ? true : false;
                    var ErmanHref = $('#ErmanHref').text();
                    var IsErmanHrefDisabled = ErmanHref == '#' ? true : false;
                    var CivilmanHref = $('#CivilmanHref').text();
                    var IsCivilmanHrefDisabled = CivilmanHref == '#' ? true : false;
                    var StructmanHref = $('#StructmanHref').text();
                    var IsStructmanHrefDisabled = StructmanHref == '#' ? true : false;
                    var EquipmanHref = $('#EquipmanHref').text();
                    var IsEquipmanHrefDisabled = EquipmanHref == '#' ? true : false;
                    var PcamHref = $('#PcamHref').text();
                    var IsPcamHrefDisabled = PcamHref == '#' ? true : false;
                    var TntHref = $('#TntHref').text();
                    var IsTntHrefDisabled = TntHref == '#' ? true : false;
                    var ReportDesignerHref = $('#ReportDesignerHref').text();
                    var IsReportDesignerHrefDisabled = ReportDesignerHref == '#' ? true : false;
                    var MisreportsHref = $('#MisreportsHref').text();
                    var IsMisreportsHrefDisabled = MisreportsHref == '#' ? true : false;
                    var ProeorHref = $('#ProeorHref').text();
                    var IsProeorHrefDisabled = ProeorHref == '#' ? true : false;
                    var EnimanHref = $('#EnimanHref').text();
                    var IsEnimanHrefDisabled = EnimanHref == '#' ? true : false;
                    var ENGGInputHref = $('#ENGGInputHref').text();
                    var IsENGGInputHrefDisabled = ENGGInputHref == '#' ? true : false;
                    var EmployeeType = $('#EmployeeType').text();
                    var pgoldNode = '';
                    if (EmployeeType == "User") {

                    }
                    else {
                        pgoldNode = '<li class="FirstLevelLiMenu d-none" id="pgoldShow"><a href="/Dashboard/dashboard/dashboard">PGOLD Admin</a></li>'
                    }
                    var html = '<div class=" px-md-5 position-relative animated fadeIn w-100">' +
                        '<a class="btn bnt-primary d-lg-none ml-auto hide-menu-btn float-right"><i class="fa fa-times-circle fa-lg"></i></a><div class="mx-0 row w-100">' +
                        '<div class="col-lg col-12"><div class="menu-col clearfix"><div class="menu-top-nav1-en-container vg-nav  vg-nav-hover"><ul id="#" class="vg-nav-main-container">' +
                        pgoldNode +
                        '<li id="#" class="FirstLevelLiMenu py-0 indexhide d-none"><a title="" href="/Home/Index" class="">Home</a></li>' +
                        '<li id="#" class="FirstLevelLiMenu RAMGlobal" style="display:none"><a class="no-hover FirstLevelLiMenu">RMS Masters</a><ul class="topmenuborder secondLevelUlMenu" id="nosidebarID">' +
                        '<li class="clear mgtp3"><a href="/Master/Role/Role"> Role Master</a></li>' +
                        '<li><a href="/Master/Rate/Rate"> Rate Master</a></li>' +
                        '<li><a href="/Master/Discipline/Discipline"> Discipline Master</a></li>' +
                        '</ul></li>' +
                        '<li id="#" class="FirstLevelLiMenu pt-0"><a class="no-hover FirstLevelLiMenu">Admin</a><ul class="topmenuborder secondLevelUlMenu mt-0" id="">' +
                        '<li><a href="/Profile/Profile/Profiles">Profile</a></li>' +
                        '</ul></div></li>' +

                        '</ul></li>' +
                        '</ul></div></div></div>' +


                        '</div></div>'
                    $('#globalmenuIDMenu').empty().append(html);
                } else {
                    $('#globalmenuIDMenu').empty();
                }
                $('#epcPromanTabMenu,#projectwiseID').hide(200);
                $('.menu li a').removeClass('MenuShow activeMenuSection');
                $('#globalmenuTab').addClass('MenuShow activeMenuSection');
                $('#globalmenuIDMenu').slideToggle(200);
                $('.hide-menu-btn').on('click', function () {
                    $('.full-menu.container__list:visible').hide(200);
                })
            });
            $('#projectmenuTab').on('click', function () {
                if (!($('#projectwiseID').is(':visible'))) {
                    var html = '<div class="px-md-5 position-relative animated fadeIn"><a class="btn bnt-primary d-lg-none ml-auto hide-menu-btn"><i class="fa fa-times-circle fa-lg"></i></a>' +
                        ' <div class="mx-0 row w-100"><div class="col-lg-4 col-12"><div class="menu-col clearfix"><div class="menu-top-nav1-en-container vg-nav  vg-nav-hover">' +
                        /*'<ul id="#" class=""><li id = "#" class="FirstLevelLiMenu" > <a title="" href="/Home/Index" class="">Home</a></li></ul>'*/ +
                        '</div></div></div></div></div>'
                    $('#projectwiseID').empty().append(html);
                }
                $('#epcPromanTabMenu,#globalmenuIDMenu').hide(200);
                $('.menu li a').removeClass('MenuShow activeMenuSection');
                $('#projectmenuTab').addClass('MenuShow activeMenuSection');
                $('#projectwiseID').slideToggle(200);
                $('.hide-menu-btn').on('click', function () {
                    $('.full-menu.container__list:visible').hide(200);
                })
            });
            $('#epcPromanTab').on('click', function () {
                if (!($('#epcPromanTabMenu').is(':visible'))) {
                    var html = '<div><ul class="nav nav-tabs nav-megamenu border-0" id="index-tabs">' +
                        '<li><a href="#epcproman" data-toggle="tab" class=" nav-link active" id="">All Products</a></li>' +
                        '<li><a href="#interface" data-toggle="tab" class=" nav-link h-100  " id = "" ><i class="fa fa-code-branch fa-lg mr-2"></i><span>Interface</span></a></li>' +
                        '<li class="ml-auto"><a class="btn bnt-primary d-lg-none ml-auto hide-menu-btn" > <i class="fa fa-times-circle fa-lg"></i></a></li>' +
                        '</ul></div>' +
                        '<div class="tab-content border-0">' +
                        '<div class="tab-pane active show animated fadeIn" id="epcproman"><div class=" mt-1 px-5"><div class="row mx-0"></div></div></div>' +
                        '<div class="tab-pane animated fadeIn" id="interface"><div class="menu-col clearfix"><div class="menu-top-nav2-en-container vg-nav  vg-nav-hover"><ul id="#" class=""><li id="#" class=" FirstLevelLiMenu"><a class="no-hover">Interface</a></li></ul></div></div></div>' +
                        '</div>'
                    $('#epcPromanTabMenu').empty().append(html);
                }
                $('#globalmenuIDMenu,#projectwiseID').hide(200);
                $('.menu li a').removeClass('MenuShow activeMenuSection');
                $('#epcPromanTab').addClass('MenuShow activeMenuSection');
                $('#epcPromanTabMenu').slideToggle(200);
                $('.hide-menu-btn').click(function () {
                    $('.full-menu.container__list:visible').hide(200);
                })
            });
            //$('#RenderSection').on('mousedown', function () {
            //    $('#globalmenuID, #projectwiseID, #globalmenuIDMenu').hide(200);
            //    $('.menuBtn').removeClass('MenuShow');
            //    $('#globalmenuID').empty();
            //    $('#globalmenuIDMenu, #globalmenuID, .ProjectList').empty();
            //})
        } else {
            $('#globalmenuID').empty();
        }
        $('#globalmenuID').slideToggle(200);

        $('.menuBtn').toggleClass('MenuShow');
        $('#globalmenuIDMenu').hide();
        $('#projectwiseID,#epcPromanTabMenu').hide();
        $('.notificationDiv,#setngdiv').removeClass('show-dropdown');
        $('#setngdiv').removeClass('show-dropdown');
        $('.notificationDiv').removeClass('show-dropdown');
        $('.UserDetails').removeClass('show-dropdown');
        $('.NotificationAnchor').removeClass('active-icon');
        $('.useranchor').removeClass('active-icon');
        $('.settingThemeIcon').removeClass('active-icon');
        e.stopImmediatePropagation();
    });
    // Global Menu Js code End

    // Open User Profile Option End
    $(document).on('click', '.useranchor', function (e) {
        debugger;
        //$('.useranchor').click(function () {
        $('.settingThemeIcon').removeClass('active-icon');
        $('.NotificationAnchor').removeClass('active-icon');
        $(this).toggleClass('active-icon');
        $('.menuBtn').removeClass('MenuShow');
        $('#setngdiv').removeClass('show-dropdown');
        $('#globalmenuID').hide();
        $('.notificationDiv').removeClass('show-dropdown');
        $('.UserDetails').toggleClass('show-dropdown');
        $('#projectwiseID, #globalmenuIDMenu, #epcPromanTabMenu').hide('200');
        e.stopImmediatePropagation();
    })
    // Open User Profile Option End

    //Open Edit User Profile modal Code Start
    //$(document).off('click', '#EditprofileModal')
    //$(document).on('click', '#EditprofileModal', function () {
      let LogOut = () =>{
         //Clear Token
        localStorage.removeItem('GetLoginToken');
        window.location.reload();
      }
    let OpenProfileModal = () => {
        debugger;
        if (!($('#EditProfileIDOpen').is(':visible'))) {
            var HTML = '<div class="modal-dialog modal-lg UserProfilewdth" role="document"><div class="modal-content">' +
                '<div class="modal-header borderbotom"><h5 class="modal-title w-100"><b>User Profile</b></h5><button type="button" class="close" id="CloseEditProfile" title="Close">&times;</button></div>' +
                '<div class="modal-body Editprofilebody"><div class="container-fluid p-0" style="overflow-y:hidden;border: 1px solid #ccc3c3;">' +
                '<div class="UserProfilebox"></div><div class="m-0 row mt-2"><div class="col-lg-6"><label class="font-weight-bold pr-2">Employee Type : </label><label class="TextAreaAddress font-weight-bold pl-2" id="lblUserType">ADMIN</label></div><div class="clear col-lg-4 float-right ml-auto"><label class="font-weight-bold pl-0 pr-2">Employee Code : </label><input class="TextAreaAddress col-xl-5 font-weight-bold" id="txtEmpcode"/></div></div><hr class="mt-2" />' +
                '<div class="col-xl-5 float-right"><div class="ml-auto pb-2 pl-0 text-center"><img src="../../Images/Admin.png" class="img-circle img-fluid UserProfileImg1 empDeafaultimg"/><img src="' + UserProfile + '" class="img-circle img-fluid UserProfileImg1 empuploadimage"/></div><div class="float-left text-center w-100"><label class="float-none font-weight-bold pr-1">UserName : </label><label id="txtusername1" class="float-none"></label></div></div><div class="col-xl-7 px-0 float-left"><div class="row m-0 col-xl-12"><div class="col-lg-12 pl-0"><label class="col-xl-4 pl-0 font-weight-bold">Display Name : </label><input type="text" id="displayname" class="TextAreaAddress col-xl-7"/></div></div>' +
                '<div class="row m-0 col-lg-12"><div class="col-lg-12 pl-0"><label class="col-xl-4 pl-0 font-weight-bold">First Name : </label><input type="text" class="TextAreaAddress col-xl-7" id="txtFname" /></div><div class="col-lg-12 pl-0"><label class="col-xl-4 pl-0 font-weight-bold">Last Name : </label><input type="text" class="TextAreaAddress col-xl-7" id="txtLname" /></div><div class="col-lg-12 pl-0"><label class="col-xl-4 pl-0 font-weight-bold">Contact No. : </label><input type="text" id="txtContactNo" class="TextAreaAddress col-xl-7" pattern="\d{10}" maxlength="10" required validationMessage="Please enter 10 digit phone number"></div></div>' +
                '<div class="row m-0 col-lg-12"><div class="col-lg-12 pl-0"><label class="col-xl-4 pl-0 font-weight-bold">Email Id : </label><input type="text" id="txtEmailid" class="TextAreaAddress col-xl-7" autocomplete="off"></div></div>' +
                '<div class="row m-0 col-lg-12"><div class="col-lg-12 pl-0"><label class="col-xl-4 pl-0 font-weight-bold"> Address : </label><textarea id="txtAddress" class="TextAreaAddress col-xl-7" cols="10" rows="3" style="resize:none;width: 98%;"></textarea></div></div></div>' +
                '</div></div>' +
                '</div></div>'

            $('#EditProfileIDOpen').empty().append(HTML);

            $('#CloseEditProfile').on('click', function () {
                $("#EditProfileIDOpen").hide();
            });

            
            if (UserProfile == "") {
                $(".empDeafaultimg").show();
                $(".empuploadimage").hide();
            }
            else {
                $(".empuploadimage").show();
                $(".empDeafaultimg").hide();
            }
        }
        else {
            $('#EditProfileIDOpen').empty();
        }
        $("#EditProfileIDOpen").show();
    }
    //});
    //Open Edit User Profile modal Code End

    return(
        <>
        {/* Navbar Start */}
        <nav className="navbar navbar-expand-lg navbar-light p-0 bg-transparent" id="layoutNav" style={{zIndex: '1001'}}>
            <header id="topbar" style={{zIndex: '1001'}}>
            <div className="row mx-0">
                <div className="align-self-center">
                    <a href="" className="arrowsizelyt backform layoutbackform" title="Back"><i className="fa fa-angle-left"></i></a>
                    <a href="" className="arrowsizelyt rightNtClick forwardform layoutbackform" title="Forward"><i className="fa fa-angle-right"></i></a>
                </div>
                <button onClick={sdbrclk} type="button" id="sidebarCollapseBtn" className="DashboardBtn nav-icon ml-2 sidebarbtncls mr-0 sidebarCollapseBtn" title="Expand Sidebar">
                    <FaBars/>
                </button>
                <div className="align-self-center">
                    <div className="navbar-header mx-0" style={{backgroundColor: 'transparent'}}>
                        <ul className="nav navbar-nav flex-row">                            
                        </ul>
                    </div>
                </div>

                <button className="navbar-toggler ml-auto" type="button" data-toggle="collapse" data-target="#navbarCollapseSection" aria-expanded="false">
                    <span className="fa fa-ellipsis-v fa-w--6 btn-icon-wrapper "></span>
                </button>

                <div className="collapse navbar-collapse col-auto col-md-auto col-sm-auto ml-auto Backcolor mr-1" id="navbarCollapseSection">

                    <div className="align-items-xl-center ml-auto right-user" id="headerrightcontent">
                        <div className="widthStyle">
                            <ul className="clearfix list-unstyled m-0 mr-auto navbar-nav navbar-menu-right">
                                <li className="nav-item mx-2 ">
                                    <a href='test.parascaddgold.com/Home/Index' className='pl-2 homeicon layoutHome' title='Home'>
                                        <FaHome/>
                                    </a>
                                </li>
                                <li className="menuBtn nav-item">
                                    <a href='#' className="DashboardBtn">
                                    <FaTh/>
                                        <span className="nav-link-name">Menu</span>

                                    </a>
                                </li>
                                <li className="dropdown-notification nav-item nav-right-menu-li">
                                    <a className="nav-link nav-link-label settingThemeIcon DashboardBtn" title="Display Setting" href="#">
                                        <FaCog/>
                                        <span className="nav-link-name">Display Settings</span>
                                    </a>
                                    <div id="setngdiv" className="setngdiv TransformDiv" style={{maxHeight: '80vh'}}>
                                    </div>
                                </li>
                                <li className="dropdown-notification nav-item nav-right-menu-li">
                                    <a className="nav-link nav-link-label NotificationAnchor layoutNotification DashboardBtn" title="Notification" href="#" data-toggle="dropdown">
                                      <FaBell/>
                                        <span className="badge badge-pill badge-default badge-danger badge-default badge-up notificationCount">5</span>
                                        <span className="nav-link-name">Notifications</span>
                                    </a>
                                    {/* <div className="notificationDiv TransformDiv" data-orgid="@Session["OrganizationId"]" data-empid="@Session["EmployeeId"]" data-serviceurl="../../Home">

                                    </div> */}
                                </li>

                                <li className="nav-item layoutProfile" style={{paddingTop: '1px'}}>
                                    <a href='#' className='LogWrap pl-0 useranchor' title=''>
                                        <div className="logoutLogo">
                                            <label id="" className="fontB logout_txt"><span className="toptxt">AB</span></label>

                                        </div>
                                    </a>
                                    
                                    <div className="UserDetails TransformDiv">
                                        <ul className="logout-menu">
                                            <li className="font-weight-bold d-flex dropdown-header">
                                                <h6 className="dropdown-header text-white p-3">User Information</h6>
                                            </li>
                                            <li className="dropdown-item border-bottom pl-2 pr-2">                                                
                                                    <img src={UserProfile} className="img-circle img-fluid UserProfileImg" loading="lazy" />
                                                

                                                <div className="float-right UsernameDiv">
                                                    <h6 title="Username Display"></h6>
                                                </div>
                                            </li>
                                            <li className="border-bottom">
                                            <a className='dropdown-item EditProfile' onClick={OpenProfileModal} href="#" id="EditprofileModal"> <span className="ml-1 mr-1 pr-2"><i className="fa fa-user" style={{fontSize: '17px'}}></i></span>Employee Name</a>                                            
                                            </li>                                            
                                            <li className="border-bottom">
                                                <a id="Changepasswordmodal" className='dropdown-item disabled' href="#" data-toggle="modal"><span className="ml-1 pr-1 mr-3"><i className="fa fa-lock" style={{fontSize: '17px'}}></i></span>Change Password</a>
                                            </li>
                                            <li className="border-bottom">
                                                <a className='dropdown-item' onClick={LogOut} id="logoutlayout" href="#"><span className="ml-1 mr-3 pr-1"><i className="fa fa-sign-in" style={{fontSize: '17px'}}></i></span>Logout</a>
                                            </li>
                                        </ul>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            {/* Global Menu Start*/}
                                
            <nav id="globalmenuID" className="navbar js-navbar contenwrap pd0 fadeIn animated" style={{display: 'none'}}>
                <ul className="menu">
                    <li>
                        <a href="#" id="globalmenuTab" className="hasDropdown">
                            <div className="">
                                <i className="fa fa-2x fa-globe-americas mt-1"></i>
                                <span> Global</span>
                            </div>
                        </a>
                    </li>

                    <li>
                        <a href="#" id="projectmenuTab" className="hasDropdown">
                            <div className="">
                                <i className="fa fa-2x fa-parking mt-1"></i>
                                <span> Project</span>
                            </div>
                        </a>
                    </li>

                </ul>
            </nav>
            <div id="globalmenuIDMenu" className="full-menu container__list container__list-multi" style={{display: 'none', width: '95%', bottom: '26px', top: '120px'}}>
                <div className="animated fadeIn position-relative px-md-5 w-100">
                    <a className="btn bnt-primary d-lg-none ml-auto float-right hide-menu-btn"><i className="fa fa-times-circle fa-lg"></i></a>
                    <div className="mx-0 row w-100">
                        <div className="col-lg-4 col-12">
                            <div className="menu-col clearfix">
                                <div className="menu-top-nav1-en-container vg-nav  vg-nav-hover">
                                    <ul id="#" className="">
                                        <li id="#" className="FirstLevelLiMenu"><a title="" href="http://preprod.parascaddgold.com/Home/Index" className="d-none">PGOLD Home</a></li>
                                        <li id="#" className="FirstLevelLiMenu"><a title="" href="/Dashboard/Dashboard/Dashboard" className="d-none ">Home</a></li>


                                    </ul>
                                </div>
                            </div>
                            <div className="menu-col clearfix" style={{display: 'none'}}>
                                <div className="menu-top-nav1-en-container vg-nav  vg-nav-hover">
                                    <ul>
                                        <li id="#" className="FirstLevelLiMenu "><a className="no-hover">Audit Log</a></li>

                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg col-12" style={{display: 'none'}}>
                            <div className='menu-col clearfix'>


                                <div className="menu-top-nav2-en-container  vg-nav  vg-nav-hover">
                                    <ul id="#" className="">
                                        <li id="#" className="FirstLevelLiMenu">
                                            <a title="COMM." className="no-hover">Comm.</a>
                                            <ul className="left topmenuborder mt-2 secondLevelUlMenu">
                                                <li title="Communication Matrix"><a href="">Comm. Matrix</a></li>
                                                <li title="Chatting"><a href="">Chat</a></li>
                                                <li title=""><a href="">E-mail</a></li>
                                            </ul>
                                        </li>
                                        <li id="#" className="FirstLevelLiMenu ">
                                            <a className="no-hover">Data Bank</a>
                                            <ul className="left topmenuborder mt-2 secondLevelUlMenu">
                                                <li className="dropdown  ">
                                                    <a>General<span className="toggle"><span className="default"></span></span></a>

                                                    <ul className="left topmenuborder mt-2 secondLevelUlMenu" style={{height: '192px', width: '95%', overflow: 'auto'}}>
                                                        <li><a>  Engineering Design Basis</a></li>
                                                        <li><a>  Indian Oil-Specifications</a></li>
                                                        <li><a>  GCC-LSTK</a></li>
                                                        <li><a>  GCC-Conventional</a></li>
                                                        <li><a>  Holiday List</a></li>
                                                        <li><a>  Material Manual</a></li>
                                                        <li><a> Contract Manual</a> </li>
                                                        <li><a> Deligation Of Power(DOP)/Authority</a> </li>
                                                        <li><a> Reliability Manual</a> </li>
                                                        <li><a>  Standards(IS/API/..)</a></li>
                                                        <li><a>  Project Cost Estimation &amp; Cost Data Bank 2012</a></li>
                                                        <li><a>  Equipment Cost Data Bank 2016</a></li>
                                                        <li style={{whiteSpace: 'break-spaces'}}><a> Project Compendium 1990 To 2011,2011-2014 and 2017 onwords</a> </li>
                                                    </ul>
                                                </li>
                                                <li id="#" className=""><a className="no-hover">Contractor</a></li>
                                                <li id="#" className=""><a className="no-hover">Consultant</a></li>
                                                <li id="#" className=""><a className="no-hover">Cost</a></li>
                                                <li id="#" className=""><a className="no-hover">Licensor</a></li>
                                                <li id="#" className=""><a href="~/ProjectCompendium/ProjectCompendium/ProjectCompendium" className="no-hover">Compendium</a></li>
                                                <li id="#" className=""><a className="no-hover">Vendor</a></li>
                                                <li id="#" className=""><a className="no-hover">Other</a></li>
                                            </ul>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg col-12" style={{display: 'none'}}>
                            <div className="menu-col clearfix">
                                <div className="menu-top-nav2-en-container vg-nav  vg-nav-hover">
                                    <ul id="#" className="">
                                        <li id="#" className=" FirstLevelLiMenu">
                                            <a className="no-hover">Report</a>
                                            <ul className="left topmenuborder mt-2 secondLevelUlMenu">
                                                <li className="dropdown  ">
                                                    <a>Internal</a>

                                                    <ul className="left topmenuborder mt-2 ThirdLevelUlMenu" style={{height: '192px', width: '95%', overflow: 'auto'}}>
                                                        <li><a href="/Reports/MonthlyMIS/MonthlyMIS">Monthly MIS</a></li>
                                                        <li>
                                                            <a href="#">Weekly LLI Status</a>

                                                        </li>

                                                        <li>
                                                            <a href="#">Govt. Mou/ED Mou Milestone Alert</a>
                                                        </li>
                                                        <li><a href="#">BR Expansion Milestones</a></li>
                                                        <li><a href="#">Expenditure Alert</a></li>
                                                        <li><a href="#">Central & Stage Issues</a></li>
                                                        <li><a href="#">Ready for Foundation Stone/inauguration Report</a></li>
                                                        <li><a href="#">FR Approved Project Milestones Alert</a></li>
                                                        <li><a href="#">Status of Govt. Mou Milestones FY 18-19</a></li>
                                                        <li><a href="#">Environmental Clearnace Status</a></li>
                                                        <li><a href="#">Pragati Dashboard</a></li>
                                                        <li><a href="#">CH Dashboard (SAP)</a></li>
                                                        <li><a href="#">MoPNG Dashboard (QCI)</a></li>
                                                        <li><a href="#">Physical & Financial Lag Analysis</a></li>
                                                        <li><a href="#">Inhouse Project Progress</a></li>
                                                        <li><a href="#">MMC</a></li>
                                                        <li><a href="#">IP Report</a></li>
                                                        <li><a href="#">ATR of Sec (PNG)</a></li>
                                                        <li><a href="#">PM's Package for Bihar</a></li>
                                                        <li><a href="#">Ready Reckoner</a></li>
                                                        <li><a href="#">Monthly Executive Report</a></li>
                                                        <li><a href="#">Monthly DO Report</a></li>
                                                        <li><a href="#">MoSPI Dashboard</a></li>
                                                        <li><a href="#">Significant Events'/CH Talking Points</a></li>
                                                        <li><a href="#">Expediting(External Consultants)</a></li>
                                                        <li><a href="#">CMC Presentation</a></li>
                                                        <li><a href="#">JS(Ref) Review Presentation</a></li>
                                                        <li><a href="#">Unit Head Meeting Presentation</a></li>
                                                        <li><a href="#">Board Agenda</a></li>
                                                        <li><a href="#">Quarterly Risk Report</a></li>
                                                        <li><a href="#">Project Compenduim</a></li>
                                                        <li><a href="#">Awards Accoldaes/Yearly Reports</a></li>
                                                        <li><a href="#">Preparation of Annual Budget</a></li>
                                                        <li><a href="#">Performance Incentive Schemes(PIS)</a></li>
                                                        <li><a href="#">Dir (R)/ED (PJ) Review meeting Presentation</a></li>
                                                        <li><a href="#">Vendor Status Reports</a></li>
                                                        <li><a href="#">State Profiles</a></li>
                                                        <li><a href="#">Audit Queries</a></li>
                                                        <li><a href="#">Parliament Queries(PQ)</a></li>
                                                        <li><a href="#">RTI/VIP reference</a></li>
                                                        <li><a href="#">Project Compenduim</a></li>
                                                        <li><a href="#">Awards Accoldaes/Yearly Reports</a></li>
                                                        <li><a href="#">Prepartion of Annual Budget</a></li>
                                                        <li><a href="#">Performance Incentive Schemes(PIS)</a></li>
                                                        <li><a href="#">Vendor Status Report</a></li>
                                                        <li><a href="#">State Profiles</a></li>
                                                        <li><a href="#">Audit Queries</a></li>
                                                        <li><a href="#">Parliament Queries(PQ)</a></li>
                                                        <li><a href="#">RTI/VIP reference</a></li>
                                                        <li><a href="/Reports/Report/SummaryReport">Summary Report</a></li>
                                                    </ul>

                                                </li>
                                                <li className="dropdown  ">
                                                    <a>External<span className="toggle"><span className="default"></span></span></a>

                                                    <ul className="left topmenuborder mt-2 ThirdLevelUlMenu">
                                                        <li><a href="#">MMC Report</a></li>
                                                        <li><a href="#">Executive Summary</a></li>
                                                    </ul>

                                                </li>
                                            </ul>
                                        </li>
                                    </ul>

                                </div>



                            </div>
                        </div>

                    </div>


                </div>
            </div>
            <div id="projectwiseID" className="full-menu container__list container__list-multi" style={{display: 'none', width: '95%', bottom: '26px', top: '120px'}}>

                <div className="container-fluid px-md-5 position-relative animated fadeIn">
                    <a className="btn bnt-primary d-lg-none ml-auto hide-menu-btn"><i className="fa fa-times-circle fa-lg"></i></a>
                    <div className="border-bottom border-secondary mx-0 py-2 row w-100">
                        <div className="col-lg-4 pl-4 pr-0">
                            <input id="Projects" style={{width: '100%'}} />
                        </div>
                        <div className="col-lg-8 align-self-center">
                            @if (Session["ProjectCode"] == null)
                            {
                                <label><b style={{color: '#7fafea'}}>&lt; Project Code &gt; : </b><span style={{color: '#fff'}}>&lt; Project Name &gt; </span></label>
                            }
                            else
                            {
                                <label><b style={{color: '#7fafea'}}> @Session["ProjectCode"] : </b><span style={{color: '#fff'}}> @Session["ProjectName"] </span></label>
                            }
                        </div>
                    </div>
                    <div className="mx-0 row w-100">
                        <div className="col-lg-4 col-12">
                            <div className="menu-col clearfix">
                                <div className="menu-top-nav1-en-container vg-nav  vg-nav-hover">
                                    <ul id="#" className="">
                                        <li id="#" className="FirstLevelLiMenu"><a title="" href="/Dashboard/Dashboard/Dashboard" className="">Home</a></li>
                                        @*<li id="#" className="FirstLevelLiMenu ">
                                                <a className="no-hover FirstLevelLiMenu">Administration</a>
                                                <ul className="topmenuborder secondLevelUlMenu">
                                                    <li className="clear mgtp3"><a href="/Administration/EmployeeDetails/EmployeeDetails"> User</a></li>
                                                    <li><a href="/Administration/EmployeeDetails/EmployeeDetails"> Profile</a></li>
                                                    <li><a href="/Administration/ProjectMaster/ProjectMaster"> Project</a></li>
                                                    <li title="Project Organogram"><a href="/Administration/ProjectOrganogram/ProjectOrganogram"> Project Organogram</a></li>
                                                </ul>

                                            </li>*@

                                    </ul>
                                </div>
                            </div>
                            <div className="menu-col clearfix" style={{display: 'none'}}>
                                <div className="menu-top-nav1-en-container vg-nav  vg-nav-hover">
                                    <ul>
                                        <li id="#" className="FirstLevelLiMenu "><a className="no-hover">Audit Log</a></li>

                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg col-12" style={{display: 'none'}}>
                            <div className='menu-col clearfix'>


                                <div className="menu-top-nav2-en-container  vg-nav  vg-nav-hover">
                                    <ul id="#" className="">
                                        <li id="#" className="FirstLevelLiMenu">
                                            <a title="COMM." className="no-hover">Comm.</a>
                                            <ul className="left topmenuborder mt-2 secondLevelUlMenu">
                                                <li title="Communication Matrix"><a href="">Comm. Matrix</a></li>
                                                <li title="Chatting"><a href="">Chat</a></li>
                                                <li title=""><a href="">E-mail</a></li>
                                            </ul>
                                        </li>
                                        <li id="#" className="FirstLevelLiMenu ">
                                            <a className="no-hover">Data Bank</a>
                                            <ul className="left topmenuborder mt-2 secondLevelUlMenu">
                                                <li className="dropdown  ">
                                                    <a>General<span className="toggle"><span className="default"></span></span></a>

                                                    <ul className="left topmenuborder mt-2 secondLevelUlMenu" style={{height: '192px', width: '95%', overflow: 'auto'}}>
                                                        <li><a>  Engineering Design Basis</a></li>
                                                        <li><a>  Indian Oil-Specifications</a></li>
                                                        <li><a>  GCC-LSTK</a></li>
                                                        <li><a>  GCC-Conventional</a></li>
                                                        <li><a>  Holiday List</a></li>
                                                        <li><a>  Material Manual</a></li>
                                                        <li><a> Contract Manual</a> </li>
                                                        <li><a> Deligation Of Power(DOP)/Authority</a> </li>
                                                        <li><a> Reliability Manual</a> </li>
                                                        <li><a>  Standards(IS/API/..)</a></li>
                                                        <li><a>  Project Cost Estimation &amp; Cost Data Bank 2012</a></li>
                                                        <li><a>  Equipment Cost Data Bank 2016</a></li>
                                                        <li style={{whiteSpace: 'break-spaces'}}><a> Project Compendium 1990 To 2011,2011-2014 and 2017 onwords</a> </li>
                                                    </ul>
                                                </li>
                                                <li id="#" className=""><a className="no-hover">Contractor</a></li>
                                                <li id="#" className=""><a className="no-hover">Consultant</a></li>
                                                <li id="#" className=""><a className="no-hover">Cost</a></li>
                                                <li id="#" className=""><a className="no-hover">Licensor</a></li>
                                                <li id="#" className=""><a href="~/ProjectCompendium/ProjectCompendium/ProjectCompendium" className="no-hover">Compendium</a></li>
                                                <li id="#" className=""><a className="no-hover">Vendor</a></li>
                                                <li id="#" className=""><a className="no-hover">Other</a></li>
                                            </ul>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg col-12" style={{display: 'none'}}>
                            <div className="menu-col clearfix">
                                <div className="menu-top-nav2-en-container vg-nav  vg-nav-hover">
                                    <ul id="#" className="">
                                        <li id="#" className=" FirstLevelLiMenu">
                                            <a className="no-hover">Report</a>
                                            <ul className="left topmenuborder mt-2 secondLevelUlMenu">
                                                <li className="dropdown">
                                                    <a>Internal</a>

                                                    <ul className="left topmenuborder mt-2 ThirdLevelUlMenu" style={{height: '192px', width: '95%', overflow: 'auto'}}>
                                                        <li><a href="/Reports/MonthlyMIS/MonthlyMIS">Monthly MIS</a></li>
                                                        <li>
                                                            <a href="#">Weekly LLI Status</a>

                                                        </li>

                                                        <li>
                                                            <a href="#">Govt. Mou/ED Mou Milestone Alert</a>
                                                        </li>
                                                        <li><a href="#">BR Expansion Milestones</a></li>
                                                        <li><a href="#">Expenditure Alert</a></li>
                                                        <li><a href="#">Central & Stage Issues</a></li>
                                                        <li><a href="#">Ready for Foundation Stone/inauguration Report</a></li>
                                                        <li><a href="#">FR Approved Project Milestones Alert</a></li>
                                                        <li><a href="#">Status of Govt. Mou Milestones FY 18-19</a></li>
                                                        <li><a href="#">Environmental Clearnace Status</a></li>
                                                        <li><a href="#">Pragati Dashboard</a></li>
                                                        <li><a href="#">CH Dashboard (SAP)</a></li>
                                                        <li><a href="#">MoPNG Dashboard (QCI)</a></li>
                                                        <li><a href="#">Physical & Financial Lag Analysis</a></li>
                                                        <li><a href="#">Inhouse Project Progress</a></li>
                                                        <li><a href="#">MMC</a></li>
                                                        <li><a href="#">IP Report</a></li>
                                                        <li><a href="#">ATR of Sec (PNG)</a></li>
                                                        <li><a href="#">PM's Package for Bihar</a></li>
                                                        <li><a href="#">Ready Reckoner</a></li>
                                                        <li><a href="#">Monthly Executive Report</a></li>
                                                        <li><a href="#">Monthly DO Report</a></li>
                                                        <li><a href="#">MoSPI Dashboard</a></li>
                                                        <li><a href="#">Significant Events'/CH Talking Points</a></li>
                                                        <li><a href="#">Expediting(External Consultants)</a></li>
                                                        <li><a href="#">CMC Presentation</a></li>
                                                        <li><a href="#">JS(Ref) Review Presentation</a></li>
                                                        <li><a href="#">Unit Head Meeting Presentation</a></li>
                                                        <li><a href="#">Board Agenda</a></li>
                                                        <li><a href="#">Quarterly Risk Report</a></li>
                                                        <li><a href="#">Project Compenduim</a></li>
                                                        <li><a href="#">Awards Accoldaes/Yearly Reports</a></li>
                                                        <li><a href="#">Preparation of Annual Budget</a></li>
                                                        <li><a href="#">Performance Incentive Schemes(PIS)</a></li>
                                                        <li><a href="#">Dir (R)/ED (PJ) Review meeting Presentation</a></li>
                                                        <li><a href="#">Vendor Status Reports</a></li>
                                                        <li><a href="#">State Profiles</a></li>
                                                        <li><a href="#">Audit Queries</a></li>
                                                        <li><a href="#">Parliament Queries(PQ)</a></li>
                                                        <li><a href="#">RTI/VIP reference</a></li>
                                                        <li><a href="#">Project Compenduim</a></li>
                                                        <li><a href="#">Awards Accoldaes/Yearly Reports</a></li>
                                                        <li><a href="#">Prepartion of Annual Budget</a></li>
                                                        <li><a href="#">Performance Incentive Schemes(PIS)</a></li>
                                                        <li><a href="#">Vendor Status Report</a></li>
                                                        <li><a href="#">State Profiles</a></li>
                                                        <li><a href="#">Audit Queries</a></li>
                                                        <li><a href="#">Parliament Queries(PQ)</a></li>
                                                        <li><a href="#">RTI/VIP reference</a></li>
                                                        <li><a href="/Reports/Report/SummaryReport">Summary Report</a></li>
                                                    </ul>

                                                </li>
                                                <li className="dropdown  ">
                                                    <a>External<span className="toggle"><span className="default"></span></span></a>

                                                    <ul className="left topmenuborder mt-2 ThirdLevelUlMenu">
                                                        <li><a href="#">MMC Report</a></li>
                                                        <li><a href="#">Executive Summary</a></li>
                                                    </ul>

                                                </li>
                                            </ul>
                                        </li>
                                    </ul>

                                </div>



                            </div>
                        </div>

                    </div>

                </div>
            </div>
            
            {/* Global Menu End*/}
            </header>
        </nav>
        {/* Navbar End */}        

        </>
    )
}

function SidebarNdMainConent({ children }) {
  const [isOpen, setIsOpen] = useState(true);
//   const navigate= useNavigate();


const change = () =>{
 //Clear Token
localStorage.removeItem('GetLoginToken');
window.location.reload();
}
  


 
  const menuItemMainSdbr = [
    {
      path: "/",
      name: "Dashboard",
      icon: logo1,
    },
    {
        path: "/Home/MasterProjectList",
        name: "Master-Project",
        icon: logo2,
    }    
  ];
  const menuItemRiskSdbr = [    
    {
        path:"/Risk Management/RiskRegister",
        name:"Risk Register",
        icon:logo2,
    },
    {
        path:"/Risk Management/RiskMatrix",
        name:"Risk Matrix",
        icon:logo2,
    },
    {
        path:"/Risk Management/RiskProfile",
        name:"Risk Profile",
        icon:logo2,
    },
    {
        path:"/Risk Management/RiskChart",
        name:"Risk Chart",
        icon:logo2,
    },
    {
        path:"/Risk Management/RiskMitigationPlan",
        name:"Risk Mitigation Plan",
        icon:logo2,
    },
    {
        path:"/Risk Management/RiskReport",
        name:"Risk Report",
        icon:logo2,
    },
  ];

return (
  <>
    {/* Sidebar and main content start */}
    {/* <div className="content-wrapper" id="RenderSection">
      <div id="content">
        <div className="wrapper content-section-wrapper wrapper-layout-bg"> */}
          <nav id="sidebar" className="mini-sidebar pinnedSidebar">
            <div className="float-left w-100 border">
              <button
                type="button"
                id="sidebarCollapseBtn1"
                className="DashboardBtn nav-icon expandsidebar float-left sidebarbtncls d-none sidebarCollapseBtn"
                title="Expand Sidebar"
                style={{ color: "#fff!important" }}
              >
                <i className="fa-angle-double-right fas"></i>
              </button>
            </div>

            <div className="p-1" style={{border: '2px solid #dee2e6!important'}}>
                          <a className="mx-4 pl-2 sidebarlargelogo" style={{cursor: 'pointer'}}>
                              <img src={Prochal} onClick={change} className="img-fluid" loading="lazy" alt="PRODOCS Logo" style={{height: '40px', width: '140px'}} />
                          </a>
                          <a className="col mx-auto pl-1 pr-0 sideshortlogo w-100" style={{cursor: 'pointer', display:'none'}}><img src={PROCHALShort} height="37" width="37" /></a>
                          
                      </div>
            {/* <ul id="mainlist" className="list-unstyled componenets timesheetayout">
                          <li className="" data-menu="1" title="Dashboard">
                                  <a href="/Home/Dashboard" id="SideUnitConvertor" className="firstLvel collapsed ActiveFirst SidebarFstlvl">
                                      <img src={logo1}/><span>Dashboard</span>
                                  </a>
                              </li>
                              <li className="" data-menu="2" title="Master Project List">
                                  <a href="/CustomQuantity/Index" id="SideCustomQty" className="firstLvel collapsed SidebarFstlvl">
                                      <img src={logo2} /><span>Custom Quantity</span>
                                  </a>
                              </li> */}

            {/* <li className="" data-menu="2" title="Custom Unit">
                                  <a href="/CustomUnit/Index" id="SideCustomUnit" className="firstLvel collapsed SidebarFstlvl">
                                      <img src="~/Images/custom Unit Icon.png" loading="lazy" /><span>Custom Unit</span>
                                  </a>
                              </li>
                              <li className="" data-menu="2" title="Currency Master">
                                  <a href="/CurrencyMaster/CurrencyMaster" id="SideCurMaster" className="firstLvel collapsed SidebarFstlvl">
                                      <img src="~/Images/CurrencyMaster.png" loading="lazy" /><span>Currency Master</span>
                                  </a>
                              </li>
                              <li className="" data-menu="2" title="Master">
                                  <a href="#SideMaster" data-toggle="collapse" id="SideMasterID" className="dropdown-toggle firstLvel collapsed SidebarFstlvl">
                                      <img src="../../Images/SidebarIcons/Master.png" loading="lazy" /><span>Master</span>
                                  </a>
                                  <ul className="list-unstyled collapse" id="SideMaster">
                                      <li className="" title="MoPNG Division">
                                          <a href="/Masters/MoPNGDivision/MoPNGDivision" id="SideMoPNGID" className="secondLevel SidebarSeclvl">
                                              <i className="fa fa-angle-right"></i><span>MoPNG Division</span>
                                          </a>
                                      </li>
                                  </ul>
                              </li> */}
            {/* </ul> */}
            {menuItemMainSdbr.map((item, index) => (
      <NavLink
        to={item.path}
        key={index}
        className="link MainSdbr"
      //   activeclassName="active"
      >
        <div className="icon"><img src={item.icon} style={{height:'30px'}}/></div>
        <div
          // style={{ display:"block"}}
          className="link_text"
        >
          {item.name}
        </div>
      </NavLink>
    ))}

{menuItemRiskSdbr.map((item, index) => (
      <NavLink
        to={item.path}
        key={index}
        className="link RiskSdbr d-none"
      //   activeclassName="active"
      >
        <div className="icon"><img src={item.icon} style={{height:'30px'}}/></div>
        <div
          // style={{ display:"block"}}
          className="link_text"
        >
          {item.name}
        </div>
      </NavLink>
    ))}
          
          </nav>
          

          {/* MainSection   START*/}
          {/* <main><Dashboard /></main> */}
          {/* MainSection END*/}
          {/* <div className="DataSectionMainLayout">
                      <div className="content-body" id="content-body-margin">
                          <button type="button" id="topmenuCollapse" title="Full Screen">
                              <i className="fa fa-expand"></i>
                          </button>
                      </div>
                    

                      <div className="modal-overlay GridData" style={{display: 'none'}}>
                          <div id="MRListModalOpen" className="position-absolute bg-white">
                              <div className="container-fluid py-1 px-1 overflow-auto animated fadeInRight" id="MRListModal">
                                  <div className="border-bottom m-0 p-2 row modalHeaderTitle">
                                      <h5 className="Window-Title font-weight-bold"> </h5>
                                      <div className="ml-auto modalClose text-center text-white k-button" title="close"><i className="k-i-close k-icon p-2"></i></div>
                                  </div>
                                  <div className="GridDataModal">

                                  </div>
                                  <div className="WindoFooter bg-white modal-footer py-0">
                                  </div>
                              </div>
                          </div>
                      </div>
                  </div> */}
          {/* End */}
          {/* <Dashboard/> */}
     
        {/* </div>
     

      </div>
     
    </div> */}

    {/* Sidebar and main content start */}
  </>
);
}

function Footer(){
    return(
        <>
        <footer id="pageFooter" className="footer footer-static footer-light navbar-border fixed-bottom">
        <div className="bg-white float-right  mr-1 px-1 py-lg-1 small border rounded totalRecords" >
            <b>Total No. of Records :</b>
            <span id="totalRecords" className="badge badge-info font-sizeconten mx-1">1</span>
        </div>
        <div className="float-left pl-sm-2  py-1">
            <span className="bg-white border mx-1 rounded">
                <a className="footertext" href="https://parascadd.com" target="_blank">  &copy;2021 PARASCADD Private Limited </a>
            </span>
            <span style={{borderRight: '1px solid #808080'}}></span><span className=" border rounded bg-white px-2 mx-1 releasenotetxt">
                <a href="/Home/ReleaseNote" target="_blank">Latest Updates</a>
            </span>
        </div>
    </footer>
    </>
    )
}

function Calculateheight(){
  debugger;
  if (($('.k-grid-header').is(':visible'))) {
    var innerDiv = $('.k-grid-content')
    var footer = $('footer').offset().top;
      var gridInnerDiv = $('.k-grid-content').offset().top;
      var height = footer - gridInnerDiv;
      innerDiv.css({ 'cssText': 'max-height:' + parseInt(height) + 'px!important' });
      innerDiv.css({ 'min-height': + parseInt(height) - 5 + 'px' });
  }
  
}

function LoginCalculate(){
    debugger;
   // if (($('#footer').is(':visible'))) {
      var innerDiv = $('.heightAdjust')
      var footer = $('.footer').offset().top;
        var gridInnerDiv = $('.heightAdjust').offset().top;
        var height = footer - gridInnerDiv;
        innerDiv.css({ 'cssText': 'max-height:' + parseInt(height) + 'px!important' });
        innerDiv.css({ 'min-height': + parseInt(height) - 5 + 'px' });
   // }
    
  }
export { TopHeaderLayout, SidebarNdMainConent, Footer, Calculateheight, LoginCalculate };
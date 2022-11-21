import React from "react";
// import
//     FaBeer
// from 'react-icons/fa';
import {
  FaFile,  
  FaFileAlt,
  FaFileInvoice,
  FaCalendarDay,  
  FaList,
  FaFolderMinus,
  FaEnvelope,
  FaClock,
  FaCalendarWeek,
  FaFileArchive,
} from "react-icons/fa";

// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faCoffee } from '@fortawesome/free-solid-svg-icons'

const Dashboard_Cards = () => {
  let StudentData = [
    {
      icon: <FaFile />,
      Number: 0,
      Degree: "Total Docs",
      BgColor: "card-body dash bluecard p-0",
    },
    {
      icon: <FaFileAlt />,
      Number: 0,
      Degree: "Approved Docs",
      BgColor: "card-body dash pinkcard p-0",
    },
    {
      icon: <FaFileInvoice />,
      Number: 0,
      Degree: "Pending Approved Docs",
      BgColor: "card-body dash greencard p-0",
    },
    {
      icon: <FaCalendarDay />,
      Number: 0,
      Degree: "Approval Nearing Due (7 days)",
      BgColor: "card-body dash orangecard p-0",
    },
    {
      icon: <FaList />,
      Number: 0,
      Degree: "Approval Delayed Docs",
      BgColor: "card-body dash purplecard p-0",
    },
    {
      icon: <FaFolderMinus />,
      Number: 0,
      Degree: "Rejected DOcs",
      BgColor: "card-body dash bluecard p-0",
    },
    {
      icon: <FaEnvelope />,
      Number: 0,
      Degree: "Total Hold Docs",
      BgColor: "card-body dash pinkcard p-0",
    },
    {
      icon: <FaClock />,
      Number: 0,
      Degree: "Hold Removal Nearing Due(<7 Days)",
      BgColor: "card-body dash greencard p-0",
    },
    {
      icon: <FaCalendarWeek />,
      Number: 0,
      Degree: "Docs. Nearing Retention End (< 15 Days)",
      BgColor: "card-body dash orangecard p-0",
    },
    {
      icon: <FaFileArchive />,
      Number: 0,
      Degree: "Proj Duplicate Docs",
      BgColor: "card-body dash greencard p-0",
    },
  ];
  let NewCard = () => {

    

    return StudentData.map((props) => {
      let {icon, Number, Degree, BgColor} = props;

      return (
        <div className="col col-md-4 mb-2 px-2">
          <div className="">
            <div className={BgColor}>
              <div className="icon-section" id="DivUploadedDocNosCard">
                <div className="col-12 m-0 p-0 row">
                  <div className="icon ml-1 mt-1">
                    {icon}
               
                  </div>
                  <span className="card-icon fa">Nos.</span>
                </div>
                <div className="text-center">
                  <a
                    id="UploadedDocNosCard"
                    className="timer count-number count text-center"
                    data-to=""
                    data-speed="1500"
                    data-tab="UploadedDocuments"
                  >
                    {Number}
                  </a>
                </div>
                <div className="text-center">
                  <p className="count_top text-center">{Degree}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    });
  };
  return <NewCard title="" className="" />;
};

export default Dashboard_Cards;



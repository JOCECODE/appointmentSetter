import Image from "next/image";
import Clock from "../../public/icons/clock.png";
import Customer from "../../public/icons/customer.png";
import Notification from "../../public/icons/notification.png";
import React, {useState} from "react";
import UpcomingModule from "../components/modules/upcomingModule";
import CustomerModule from "../components/modules/customerModule";
import NotificationModule from "../components/modules/notificationModule";
import { NextPage } from "next";


export const AdminPage:NextPage = (props) => {
  
const [moduleState, setModuleState] = useState(<CustomerModule/>);
const [moduleName, setModuleName] = useState("customer");
  // gets the id of the selected image button
  const buttonHandler = (event: React.MouseEvent<HTMLImageElement>) => {

    event.stopPropagation();
    
    const img = event.currentTarget;
    setModuleName(img.id);
    if (img.id === "clock"){
      setModuleState(<NotificationModule/>);
    }

       if (img.id === "notification"){
        
      setModuleState(<UpcomingModule/>);
    }
      if (img.id === "customer"){
        setModuleState(<CustomerModule/>);

      }

  };
  
  return (
    <>
      <div id="adminParent" className=" h-[100vh] w-[100wh] bg-red-600">
          {/* Header */}
          <div className="flex flex-row">
            <div className="flex flex-col w-[50%] bg-yellow-500">Logo</div>
            <div className="flex flex-col w-[50%] bg-purple-500 text-right">Hi, Alyssa Queen</div>

          </div>

          {/* Can add a navbar here when thinking about navigating the website */}

          {/* Content Setup */}
          <div className="flex flex-row">
            <div className="flex flex-col w-[15%] h-[96vh] items-center justify-center gap-10 bg-orange-500">
                  <Image alt="clockIcon" className="cursor-pointer" id="clock" width={120} height={120} onClick={buttonHandler} src={Clock}/>
                  <Image alt="customerIcon" className="cursor-pointer" id="customer" width={120} height={120} onClick={buttonHandler}src={Customer}/>
                  <Image alt="notificationIcon" className="cursor-pointer" id="notification" width={120} height={120} onClick={buttonHandler}src={Notification}/>
            </div>
            <div className="flex flex-col w-[85%] h-[96vh] bg-blue-500">
              {/* Holds moduleTable */}
                
                 <div className="flex flex-row w-[100%] h-[100%] p-5">
            <div className="flex flex-col bg-white w-[100%] h-[100%]">
                     <h2 id={moduleName} className="self-center">{moduleName}</h2>
                     <br/>
                     <br/>
                     <div className="bg-purple-600 h-[100%] w-[100%] text-center">
                      {/* Have this module load by default or on pageLoad
                        Also, GitHub Issue regarding populating module is right here,
                        Modify code page as needed.
                      */}
                      <div className="moduleDisplay">{moduleState}</div>
                     </div>
            </div>
        </div>

            </div>

          </div>
      </div>
    </>
  )
}

export default AdminPage;
import Modules from "../components/modulesContainer";
import Image from "next/image";
import Clock from "../../public/icons/clock.png";
import Customer from "../../public/icons/customer.png";
import Notification from "../../public/icons/notification.png";
import React, {useState} from "react";
// import Upcoming from "./modules/upcomingModule";
// import Customer from "../components/modules/customerModule";
// import Notification from "./modules/notificationModule";


export default function adminPage() {
  
  // gets the id of the selected image button
  const buttonHandler = (event: React.MouseEvent<HTMLImageElement>) => {
    event.stopPropagation();
    
    const img = event.currentTarget;
    console.log(
      "Element name: ",
      img.id
    );
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
                  <Image id="clock" width={120} height={120} onClick={buttonHandler} src={Clock}/>
                  <Image id="customer" width={120} height={120} onClick={buttonHandler}src={Customer}/>
                  <Image id="notification" width={120} height={120} onClick={buttonHandler}src={Notification}/>
            </div>
            <div className="flex flex-col w-[85%] h-[96vh] bg-blue-500">
              {/* Holds moduleTable */}
                
                 <div className="flex flex-row w-[100%] h-[100%] p-5">
            <div className="flex flex-col bg-white w-[100%] h-[100%]">
                {/* Theres is going to be 3 buttons on the left side div 
                     on click, it will display the selected module. */}
                     <h2 className="self-center">MODULE NAME</h2>
                     <br/>
                     <br/>
                     <div className="bg-purple-600 h-[100%] w-[100%] text-center"><p>actual module contents</p></div>
            </div>
        </div>

            </div>

          </div>
      </div>
    </>
  )
}
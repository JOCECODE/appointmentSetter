import Modules from "../components/modulesContainer";
import Image from "next/image";
import Clock from "../../public/icons/clock.png";
import Customer from "../../public/icons/customer.png";
import Notification from "../../public/icons/notification.png";

export default function adminPage() {
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
                  <Image width={120} height={120} src={Clock}/>
                  <Image width={120} height={120} src={Customer}/>
                  <Image width={120} height={120} src={Notification}/>
            </div>
            <div className="flex flex-col w-[85%] h-[96vh] bg-blue-500">
              {/* Holds moduleTable */}
                
                <Modules/>

            </div>

          </div>
      </div>
    </>
  )
}
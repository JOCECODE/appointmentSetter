import Upcoming from "./modules/upcomingModule";
import Customer from "../components/modules/customerModule";
import Notification from "./modules/notificationModule";


export default function modulesContainer(){
    return(
        <>
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
        </>
    )
}
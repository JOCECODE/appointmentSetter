import {useState} from 'react';
import Image from "next/image";
import Scissors from "../../public/icons/scissors.png";
import '@hassanmojab/react-modern-calendar-datepicker/lib/DatePicker.css';
import {Calendar, utils, DayValue} from "@hassanmojab/react-modern-calendar-datepicker";

export const Homepage = () =>{

    const [selectedDay, setSelectedDay] = useState<DayValue>();
    
    return (

        <>
        
        <div id="heroImage"> 
            </div>
                    
        <div id="main">

            <div id="left">
                <div id="flexContainer">
                    <div id="row">
                            <div id="col">
                            <div id="circle">
                                
                        <Image id="icons" alt="scissors png" width={80} height={80}src={Scissors}/>
                        <br/>
                        <h4 id="hairService">Hairstyles</h4>
                        <p id="description">{`"providing quality cuts to how you want"`}</p>
                            </div>
                        </div>
                        <div id="col">
                            <div id="circle">
                        <Image id="icons" alt="scissors png" width={80} height={80}src={Scissors}/>
                        <br/>
                        <h4 id="hairService">Haircuts</h4>
                        <p id="description">{`"providing quality cuts to how you want"`}</p>
                            </div>
                    </div>
                    </div>
                    <div id="row">
                        <div id="col">
                            <h2 id="servicesTitle"><b>SERVICES</b></h2>
                        </div>
                    </div>
                    <div id="row">
                    
                        <div id="col">
                            <div id="circle">
                                
                        <Image id="icons" alt="scissors png" width={80} height={80}src={Scissors}/>
                        <br/>
                        <h4 id="hairService">Hair Color</h4>
                        <p id="description">{`"providing quality cuts to how you want"`}</p>
                            </div>
                    </div>
                    </div>
                    </div>
            </div>

        <div id="cardContainer" className="flex flex-col justify-center items-center w-[30%] gap-4
                        bg-slate-50 text-center rounded-lg 
                        absolute right-[30px] bottom-[-352px]
                        p-7 shadow-lg"
        >
            <h4 className="font-bold text-3xl m-1 bookAppointment">Book an Appointment Today!</h4>
            <p className="m-1 whenYouCome">What works best for you?</p>
            <Calendar 
                value={selectedDay}
                onChange={setSelectedDay}
                minimumDate={utils('en').getToday()}
                shouldHighlightWeekends
            />
            
            {
                selectedDay ? ( <p>{selectedDay?.month}/{selectedDay?.day}/{selectedDay?.year}</p> ) : "" 
            }

            <p className="notice"><b>* Appointments require a 50% deposit to hold the appointment time slot. For full refunds, you MUST cancel before 48 hours from your appointment date.</b></p>
        </div>

{/* Main Closing Div */}
            </div>
        
            <div id="right"></div>
            
        </>
    )
};

export default Homepage;

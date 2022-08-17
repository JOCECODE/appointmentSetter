import Image from "next/image";
import Scissors from "../../public/icons/scissors.png";

export default function Homepage(){
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
                                
                         <Image id="icons" width={80} height={80}src={Scissors}/>
                         <br/>
                        <h4 id="hairService">Hairstyles</h4>
                        <p id="description">"providing quality cuts to how you want"</p>
                            </div>
                        </div>
                          <div id="col">
                             <div id="circle">
                         <Image id="icons" width={80} height={80}src={Scissors}/>
                         <br/>
                        <h4 id="hairService">Haircuts</h4>
                        <p id="description">"providing quality cuts to how you want"</p>
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
                                
                         <Image id="icons" width={80} height={80}src={Scissors}/>
                         <br/>
                        <h4 id="hairService">Hair Color</h4>
                        <p id="description">"providing quality cuts to how you want"</p>
                            </div>
                    </div>
                    </div>
                    </div>
            </div>

          {/* card container is right here on smaller devices it should stay on the right side */}
        <div id="cardContainer" className="">
            <div id="card">
            <h4 className="bookAppointment"><b>Book An Appointment Today!</b></h4> 
            <p className="whenYouCome">When do you want to come?</p> 
            <p className="select">Select a day</p>
            <input className=" border-black border-2 border-solid"/>
            <p className="select">Select a time</p>
            <input className=" border-black border-2 border-solid"/>
            <br/>
            <br/>
            <button id="bookNow" type="submit">Book Now</button>
            <br/>
            <br/>
            <p className="notice"><b>* Appointments require a 50% deposit to hold the appointment time slot. For full refunds, you MUST cancel before 48 hours from your appointment date.</b></p>
        </div>
            </div>

{/* Main Closing Div */}
</div>
           
            <div id="right"></div>
            
        </>
    )
};
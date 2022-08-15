import Image from "next/image";
import Alyssa from "../../public/images/alyssaSmoking.jpg";

export default function about() {
    return(
        <>
            {/* May need a navbar but I recommend making one nav bar and having it as a reusable component */}
            <div id="aboutBgImage" className="flex flex-row w-[100vw] h-[100vh]">
                   <div className="flex-col w-[50%] h-[auto] font-bold text-left text-black text-[40px] mt-[4.5em]">
                    <span className="text-[#fafa00] font-extrabold text-[54px]">Alyssa Valadez</span>
                    <br/>
                        Licensed cosmetologist in California <br/>
                        Cutting Specialist, Color Creator, MUA <br/>
                        Let me make you look BOMB <br/>
                        Located in Bakersfield, Ca
                   </div>
                   <div className="items-center justify-center flex flex-col w-[50%]">
                    {/* <Image className="" id="alyssaSmoking" width={600} height={600} src={Alyssa}/> */}
                        <div className="frame">
                        <div className="border">
                            <div className="image">
                            <Image id="alyssaSmoking" src={Alyssa} width={500} height={500} />
                            </div>
                            <div className="textFrame">Alyssa Valadez</div>
                        </div>
                        </div>
                   </div>
                </div>
        </>
    )
}
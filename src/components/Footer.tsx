import Image from "next/image";
import Stars from "../../public/images/3stars.jpg";
import Twitter from "../../public/icons/twitter.png";
import Instagram from "../../public/icons/instagram.png";

export default function Footer() {
    return (
        <>
            <div className="rewardShowcase">
                <div className="child leftSide">
                    <Image alt="stars Icon" width={600} height={600} src={Stars}/>
                </div>
                <div className="child rightSide">
                    <h1 className="cutFree">3rd CUT FOR FREE</h1>
                    <h4 className="cutDescription">{`"Book 2 Haircut Appointments and the 3rd is on us!"`}</h4>
                    <br/>
                    <p className="discretion"><b>Customer must book a total of 2 haircut appointments with Alyssa Valadez within the year to be eligible for the cut. Limit to 1 time offer per year. Terms and conditions can be read down below.</b></p>
                </div>
            </div>
            <div className="footer">
                <div className="socialLinks">
                    <Image alt="Twitter Icon" width={60} height={40} src={Twitter}/>
                    <Image alt="Instagram Icon" width={40} height={40} src={Instagram}/>
                </div>
                <div className="sinbad">This was made by Team {`"Sinbad"`}</div>
            </div>
        </>
    )
};
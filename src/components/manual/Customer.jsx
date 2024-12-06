import CustomerImage from "../../assets/images/CustomerImage.png";
import CustomerLogoOne from "../../assets/images/CustomerLogoOne.png";
import CustomerLogoTwo from "../../assets/images/CustomerLogoTwo.png";
import CustomerLogoThree from "../../assets/images/CustomerLogoThree.png";
import CustomerLogoFour from "../../assets/images/CustomerLogoFour.png";
import CustomerLogoFive from "../../assets/images/CustomerLogoFive.png";
import CustomerLogoSix from "../../assets/images/CustomerLogoSix.png";
import CustomerRightIcon from "../../assets/images/CustomerRightIcon.png";
import { Link } from "react-router-dom";

export const Customer = () => {
  return (
    <div className="bg-[#F5F7FA] h-[388px]">
      <div className="max-w-[80%]  mx-auto flex items-center justify-between py-10 gap-9">
        <img
          src={CustomerImage}
          alt="CustomerImage"
          className="object-contain"
        />

        <div className="flex flex-col gap-3 mb-4">
          <div className="text-[#717171] text-base font-inter font-medium tracking-wide">
            As a call center manager, I’ve seen a huge transformation since we
            implemented this dialer application. Our operations are smoother,
            and our team's efficiency has skyrocketed. The platform is
            intuitive, easy to integrate, and the real-time analytics have
            provided us with invaluable insights. We've been able to handle more
            calls, track leads more effectively, and reduce downtime
            drastically. The support team has also been incredibly responsive
            whenever we've had questions. This solution has truly revolutionized
            our call center, and I couldn’t be happier with the results. It’s a
            game-changer!
          </div>

          <span className="text-[#0062FF] font-inter text-2xl font-semibold text-left max-w-3xl tracking-wider">
            Other Satisfied Clients
          </span>

          <p className="text-[#89939E] font-inter">
            Click on the logo to view our client testomony{" "}
          </p>

          <div className="flex items-center justify-between gap-5">
            <img src={CustomerLogoOne} alt="CustomerLogoOne" />
            <img src={CustomerLogoTwo} alt="CustomerLogoOne" />
            <img src={CustomerLogoThree} alt="CustomerLogoOne" />
            <img src={CustomerLogoFour} alt="CustomerLogoOne" />
            <img src={CustomerLogoFive} alt="CustomerLogoOne" />
            <img src={CustomerLogoSix} alt="CustomerLogoOne" />
            <Link className="flex items-center gap-2">
              <span className="text-[#0062FF] font-inter text-xl font-semibold text-left max-w-3xl tracking-wider">
                Meet all customers
              </span>
              <img src={CustomerRightIcon} alt="CustomerRightIcon" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

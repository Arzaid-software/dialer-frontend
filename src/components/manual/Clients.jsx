import ClientLogo1 from "../../assets/images/ClientLogo1.png";
import ClientLogo2 from "../../assets/images/ClientLogo2.png";
import ClientLogo3 from "../../assets/images/ClientLogo3.png";
import ClientLogo4 from "../../assets/images/ClientLogo4.png";
import ClientLogo5 from "../../assets/images/ClientLogo5.png";
import ClientLogo6 from "../../assets/images/ClientLogo6.png";
import ClientLogo7 from "../../assets/images/ClientLogo7.png";
import UserGroupLogo from "../../assets/images/UserGroupLogo.png";
import NetworkLogo from "../../assets/images/NetworkLogo.png";
import ClubGroupLogo from "../../assets/images/ClubGroupLogo.png";

export const Clients = () => {
  return (
    <div className="max-w-[80%] mx-auto flex flex-col p-6">
      <h3 className="text-3xl text-center font-semibold font-inter tracking-wide text-[#4D4D4D]">
        Our Clients
      </h3>
      <span className="text-[#717171] font-inter  text-center mt-2">
        We have been working with some Fortune 500+ clients
      </span>
      <div className="flex flex-row gap-4 items-center justify-between my-12">
        <img
          src={ClientLogo1}
          alt="Logo"
          className="w-12 h-auto object-contain"
        />
        <img
          src={ClientLogo2}
          alt="Logo"
          className="w-12 h-auto object-contain"
        />
        <img
          src={ClientLogo3}
          alt="Logo"
          className="w-12 h-auto object-contain"
        />
        <img
          src={ClientLogo5}
          alt="Logo"
          className="w-12 h-auto object-contain"
        />
        <img
          src={ClientLogo6}
          alt="Logo"
          className="w-12 h-auto object-contain"
        />
        <img
          src={ClientLogo7}
          alt="Logo"
          className="w-12 h-auto object-contain"
        />
        <img
          src={ClientLogo4}
          alt="Logo"
          className="w-12 h-auto object-contain"
        />
      </div>

      <h3 className="text-3xl text-center font-semibold font-inter tracking-wide text-[#4D4D4D]">
        Manage your entire call center
      </h3>
      <h3 className="text-3xl text-center font-semibold font-inter tracking-wide text-[#4D4D4D]">
        seamlessly in one platform
      </h3>
      <span className="text-[#717171] font-inter  text-center mt-2 mb-10">
        Who is Catdial suitable for?
      </span>

      <div className="flex flex-row items-center justify-between gap-5">
        <div className="flex flex-col items-center justify-center gap-4 px-5 py-12 rounded-md border border-black/10 hover:-translate-y-4 hover:border-teal-900 hover:bg-gray-100 duration-200  ">
          <img
            src={UserGroupLogo}
            alt="Logo"
            className="w-12 h-auto object-contain"
          />
          <div>
            <h3 className="text-xl text-center font-semibold font-inter tracking-wide text-[#4D4D4D]">
              Member
            </h3>
            <h3 className="text-xl text-center font-semibold font-inter tracking-wide text-[#4D4D4D]">
              Management
            </h3>
          </div>

          <div className="text-[#717171] font-inter  text-center ">
            Efficiently manage and communicate with your members, ensuring
            timely updates and seamless support through our advanced call center
            technology.
          </div>
        </div>

        <div className="flex flex-col items-center justify-center gap-4 px-5 p-12 rounded-md border border-black/10 hover:-translate-y-4 hover:border-teal-900 hover:bg-gray-100 duration-200  ">
          <img
            src={NetworkLogo}
            alt="Logo"
            className="w-12 h-auto object-contain"
          />
          <div>
            <h3 className="text-xl text-center font-semibold font-inter tracking-wide text-[#4D4D4D]">
              National
            </h3>
            <h3 className="text-xl text-center font-semibold font-inter tracking-wide text-[#4D4D4D]">
              Networks
            </h3>
          </div>

          <div className="text-[#717171] font-inter  text-center ">
            Support large-scale operations with real-time reporting, automated
            dialing, and effective communication strategies tailored to national
            associations
          </div>
        </div>

        <div className="flex flex-col items-center justify-center gap-4 px-5 py-12 rounded-md border border-black/10 hover:-translate-y-4 hover:border-teal-900 hover:bg-gray-100 duration-200  ">
          <img
            src={ClubGroupLogo}
            alt="Logo"
            className="w-12 h-auto object-contain"
          />
          <div>
            <h3 className="text-xl text-center font-semibold font-inter tracking-wide text-[#4D4D4D]">
              Clubs And
            </h3>
            <h3 className="text-xl text-center font-semibold font-inter tracking-wide text-[#4D4D4D]">
              Groups
            </h3>
          </div>

          <div className="text-[#717171] font-inter  text-center ">
            Easily manage interactions within your club or group, streamline
            outreach, and improve engagement with our intuitive call center
            platform.
          </div>
        </div>
      </div>
    </div>
  );
};

import UserStatLogo from "../../assets/images/UserStats.png";
import PhoneCallLogo from "../../assets/images/PhoneCallLogo.png";
import TwoUserLogo from "../../assets/images/TwoUserLogo.png";
import UserLogo from "../../assets/images/UserLogo.png";

export const CallCenterStats = () => {
  return (
    <div className="w-full mt-10 bg-[#F5F7FA]">
      <div className="max-w-[80%] h-[261.92px] mx-auto flex items-center justify-center gap-44">
        <div className="flex flex-col gap-2 ">
          <div className="flex flex-col ">
            <h1 className="text-[#4D4D4D] font-inter text-3xl font-semibold text-left max-w-3xl tracking-wider">
              Empowering Call Centers
            </h1>
            <h1 className="text-[#4D4D4D] font-inter text-3xl font-semibold text-left max-w-3xl tracking-wider">
              with{" "}
              <span className="text-[#0062FF]">smart dialer solution </span>
            </h1>
          </div>
          <span className="text-[#717171] text-sm font-inter tracking-wide ">
            We reached here with our hard work and dedication
          </span>
        </div>

        <div className="w-[450px] flex flex-col gap-10 h-[147.81px]">
          <div className="flex items-center justify-between">
            <div className="flex flex-row gap-4">
              <img
                src={UserStatLogo}
                alt="UserStatLogo"
                className="object-contain"
              />
              <div className="flex flex-col">
                <p className="text-[#4D4D4D] font-inter text-2xl font-bold text-left max-w-3xl tracking-wide">
                  2,245,341
                </p>
                <span className="text-[#717171] text-sm font-inter tracking-wide ">
                  Leads
                </span>
              </div>
            </div>
            <div className="flex flex-row gap-4">
              <img
                src={PhoneCallLogo}
                alt="UserStatLogo"
                className="object-contain"
              />
              <div className="flex flex-col">
                <p className="text-[#4D4D4D] font-inter text-2xl font-bold text-left max-w-3xl tracking-wide">
                  828,867
                </p>
                <span className="text-[#717171] text-sm font-inter tracking-wide ">
                  Callers
                </span>
              </div>
            </div>
          </div>

          <div className="flex items-center justify-between">
            <div className="flex flex-row gap-4">
              <img
                src={UserLogo}
                alt="UserStatLogo"
                className="object-contain"
              />
              <div className="flex flex-col">
                <p className="text-[#4D4D4D] font-inter text-2xl font-bold text-left max-w-3xl tracking-wide">
                46,328
                </p>
                <span className="text-[#717171] text-sm font-inter tracking-wide ">
                Admins
                </span>
              </div>
            </div>
            <div className="flex flex-row gap-4">
              <img
                src={TwoUserLogo}
                alt="UserStatLogo"
                className="object-contain"
              />
              <div className="flex flex-col">
                <p className="text-[#4D4D4D] font-inter text-2xl font-bold text-left max-w-3xl tracking-wide">
                1,926,436
                </p>
                <span className="text-[#717171] text-sm font-inter tracking-wide ">
                Subadmin
                </span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

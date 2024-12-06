import CommunityOne from "../../assets/images/CommunityOne.png";
import CommunityTwo from "../../assets/images/CommunityTwo.png";
import CommunityThree from "../../assets/images/CommunityThree.png";
import CustomerRightIcon from "../../assets/images/CustomerRightIcon.png";

export const CommunityUpdates = () => {
  return (
    <div className="max-w-[80%] mx-auto flex flex-col my-9">
      <h1 className="text-[#4D4D4D] text-center font-inter text-3xl font-semibold   tracking-wider">
        Caring is the new marketing
      </h1>
      <p className="text-[#717171] font-inter text-center my-2 max-w-2xl mx-auto">
        The Nextcent blog is the best place to read about the latest membership
        insights, trends and more. See who's joining the community, read about
        how our community are increasing their membership income and lot's
        more.​
      </p>

      <div className="flex items-center justify-center gap-10">
        <div className="mt-6 mb-20 relative">
          <img
            src={CommunityOne}
            alt="CommunityOne"
            className="object-contain relative"
          />
          <div className="absolute top-[65%] right-[7%] bg-[#F5F7FA] w-[282.6px] h-[157.05px] flex flex-col justify-center gap-3 items-center  shadow-lg z-10 rounded-lg border">
            <div className="text-[#717171] font-inter font-semibold tracking-wide max-w-[130px] text-center">
              Recent Updates in Call Center Solutions
            </div>

            <div className="flex items-center gap-2">
              <span className="text-[#1B59F8] font-inter text-semibold tracking-wide">
                Readmore
              </span>
              <img src={CustomerRightIcon} alt="CustomeRightIcon" />
            </div>
          </div>
        </div>

        <div className="mt-6 mb-20 relative">
          <img
            src={CommunityTwo}
            alt="CommunityTwo"
            className="object-contain relative"
          />

          <div className="absolute top-[65%] right-[7%] bg-[#F5F7FA] w-[282.6px] h-[157.05px] flex flex-col justify-center gap-3 items-center  shadow-lg z-10 rounded-lg border">
            <div className="text-[#717171] font-inter font-semibold tracking-wide max-w-[140px] text-center">
              New Features Enhancing Call Center Efficiency
            </div>

            <div className="flex items-center gap-2">
              <span className="text-[#1B59F8] font-inter text-semibold tracking-wide">
                Readmore
              </span>
              <img src={CustomerRightIcon} alt="CustomeRightIcon" />
            </div>
          </div>
        </div>

        <div className="mt-6 mb-20 relative">
          <img
            src={CommunityThree}
            alt="CommunityTwo"
            className="object-contain relative"
          />
          <div className="absolute top-[65%] right-[7%] bg-[#F5F7FA] w-[282.6px] h-[157.05px] flex flex-col justify-center gap-3 items-center  shadow-lg z-10 rounded-lg border">
            <div className="text-[#717171] font-inter font-semibold tracking-wide max-w-[190px] text-center">
              Exclusive Membership Benefits for Call Centers
            </div>

            <div className="flex items-center gap-2">
              <span className="text-[#1B59F8] font-inter text-semibold tracking-wide">
                Readmore
              </span>
              <img src={CustomerRightIcon} alt="CustomeRightIcon" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

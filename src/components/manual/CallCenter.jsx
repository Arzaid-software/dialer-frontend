import CallCenterImage from "../../assets/images/CallCenterImage.png";
import { Button } from "../ui/button";

export const CallCenter = () => {
  return (
    <div className="max-w-[80%] mx-auto flex items-center justify-between gap-9">
      <img src={CallCenterImage} alt="CallCenterImage" className="object-contain" />

      <div className="flex flex-col gap-4 ">
        <div className="flex flex-col gap-2">
          <h1 className="text-[#4D4D4D] font-inter text-2xl font-semibold text-left max-w-3xl tracking-wider">
            Three Years of Call Center
          </h1>
          <h1 className="text-[#4D4D4D] font-inter text-2xl font-semibold text-left max-w-3xl tracking-wider">
            Excellence
          </h1>
        </div>

        <span className="text-[#717171] text-base font-inter tracking-wide ">
          Leveraging three years of expertise to deliver cutting-edge solutions
          that enhance efficiency, streamline operations, and drive results for
          call centers worldwide.
        </span>

        <Button className="bg-[#1B59F8] hover:bg-[#1B59F8]/90 mt-3 transition-colors border text-md font-inter tracking-wide w-[24%] py-6">
          Learn More
        </Button>
      </div>
    </div>
  );
};

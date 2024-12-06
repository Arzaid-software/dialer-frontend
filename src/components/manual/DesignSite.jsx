import MobileImage from "../../assets/images/MobileImage.png";
import { Button } from "../ui/button";

export const DesignSite = () => {
  return (
    <div className="max-w-[80%] h-[386.37px] mx-auto flex items-center justify-between my-10 gap-9">
      <img src={MobileImage} alt="MobileImage" />

      <div className="flex flex-col gap-4 ">
        <div className="flex flex-col gap-2">
          <h1 className="text-[#4D4D4D] font-inter text-2xl font-semibold text-left max-w-3xl tracking-wider">
            How to design your site footer like
          </h1>
          <h1 className="text-[#4D4D4D] font-inter text-2xl font-semibold text-left max-w-3xl tracking-wider">
            we did
          </h1>
        </div>

        <span className="text-[#717171] text-base font-inter tracking-wide ">
          Donec a eros justo. Fusce egestas tristique ultrices. Nam tempor,
          augue nec tincidunt molestie, massa nunc varius arcu, at scelerisque
          elit erat a magna. Donec quis erat at libero ultrices mollis. In hac
          habitasse platea dictumst. Vivamus vehicula leo dui, at porta nisi
          facilisis finibus. In euismod augue vitae nisi ultricies, non aliquet
          urna tincidunt. Integer in nisi eget nulla commodo faucibus efficitur
          quis massa. Praesent felis est, finibus et nisi ac, hendrerit
          venenatis libero. Donec consectetur faucibus ipsum id gravida.
        </span>

        <Button className="bg-[#1B59F8] hover:bg-[#1B59F8]/90 mt-3 transition-colors border text-md font-inter tracking-wide w-[24%] py-6">
          Learn More
        </Button>
      </div>
    </div>
  );
};

import { Button } from "../ui/button";
import heroImage from '../../assets/images/illustration.png';

export const HeroSection = () => {
  return (
  

    <div className="bg-[#F5F7FA] w-full mx-auto md:h-[600px]">
      <div className="flex flex-row items-center justify-between md:w-[85%] mx-auto ">

        <div className="flex flex-col gap-4 mx-14 my-36">
          <div className="flex flex-col gap-2">
            <h1 className="text-[#4D4D4D] font-inter text-5xl font-semibold text-left max-w-3xl tracking-wider">
              Transform Your Call
            </h1>
            <h1 className="text-[#4D4D4D] font-inter text-5xl font-semibold text-left max-w-3xl tracking-wider">
              Center, Drive Results
            </h1>
          </div>

          <span className="text-[#717171] text-base font-inter tracking-wide ">
            Streamline operations and boost performance effortlessly.
          </span>

          <Button className="bg-[#1B59F8] hover:bg-[#1B59F8]/90 mt-3 transition-colors border text-md font-inter tracking-wide w-[24%] py-6">Register</Button>
        </div>

        <img 
          src={heroImage} 
          alt="heroImage"  
          className="w-96 h-auto object-contain mb-2 mr-24 "
        />
      </div>
    </div>
  );
};

import { Mail, Phone, Send } from "lucide-react";
import { Button } from "../ui/button";
import { Separator } from "../ui/separator";

export const ContactForm = () => {
  return (
    <div className="bg-[#1B59F8] w-full">
      <div className="max-w-[80%] h-[912.99px] mx-auto flex items-center justify-between">
        <div className="flex flex-col gap-8">
          <div className="w-30px">
            <h3 className="text-[#EEEEEE] font-inter font-bold text-4xl tracking-wide">
              Let’s discuss on something{" "}
              <span className="text-black">cool together</span>
            </h3>
          </div>

          <div className="flex gap-2 px-4">
            <Mail className="text-white" />
            <a className="text-[#FFFFFF] font-inter text-base">
              anayasoftware@gmaill.com
            </a>
          </div>

          <div className="bg-[#570A5780] w-[402.31px] px-4 h-[69.8px] rounded-lg border border-[#3849E7] flex items-center gap-2">
           <Phone className="text-white "/>
            <p className="text-white font-inter text-base tracking-wider">+123 456 789</p>
          </div>

        </div>

        <div>hyy</div>
      </div>
    </div>
  );
};

import { CallCenter } from "./CallCenter"
import { CallCenterStats } from "./CallCenterStats"
import { Clients } from "./Clients"
import { CommunityUpdates } from "./CommunityUpdates"
import { ContactForm } from "./ContactForm"
import { Customer } from "./Customer"
import { DesignSite } from "./DesignSite"
import { HeroSection } from "./HeroSection"


export const Home = () => {
  return (
    <div>
      <HeroSection />
      <Clients/>
      <CallCenter/>
      <CallCenterStats/>
      <DesignSite/>
      <Customer/>
      <CommunityUpdates/>
      <ContactForm/>


      
    </div>
  )
}

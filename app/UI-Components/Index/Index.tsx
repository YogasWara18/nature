import About from "./About/page";
import Expertise from "./Expertise/page";
import Hero from "./Hero/page";
import Paralex from "./Paralex/page";
import PricingPlans from "./PricingPlans/page";
import Services from "./Services/page";
import Testimonial from "./Testimonial/page";
import Faqs from "./Faq/page";

export default function Index() {
  return (
    <>
      <Hero />
      <About/>
      <Paralex/>
      <Services/>
      <Expertise/>
      <PricingPlans/>
      <Testimonial/>
      <Faqs/>
    </>
  );
}

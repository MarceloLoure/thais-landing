import { Hero } from "./sections/Hero";
import { ForWho } from "./sections/ForWho";
import { Benefits } from "./sections/Benefits";
import { About } from "./sections/About";
import { Purchase } from "./sections/Purchase";
import { Guarantee } from "./sections/Guarantee";
import { Testimonials } from "./sections/Testimonials";
import { WhatsappButton } from "./sections/WhatsappButton";

import { VideoSection } from "./sections/VideoSection";

function App() {
  return (
    <>
      <Hero />

      <VideoSection />
      <ForWho />
      <Benefits />
      <About />
      <Testimonials />
      <Guarantee />
      <Purchase />
      <WhatsappButton />
    </>
  );
}

export default App;

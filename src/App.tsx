import { Hero } from "./sections/Hero";
import { ForWho } from "./sections/ForWho";
import { Benefits } from "./sections/Benefits";
import { About } from "./sections/About";
import { Purchase } from "./sections/Purchase";
import { Guarantee } from "./sections/Guarantee";
import { Testimonials } from "./sections/Testimonials";
import { WhatsappButton } from "./sections/WhatsappButton";
import { VideoHighlight } from "./sections/VideoHighlight";

function App() {
  return (
    <>
      <Hero />
      <VideoHighlight />
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

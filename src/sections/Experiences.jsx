import { Timeline } from "../components/Timeline";
import { experiences } from "../constants";
const Experiences = () => {
  return (
    <section id="experience" className="w-full mt-10 md:mt-12">
      <Timeline data={experiences} />
    </section>
  );
};

export default Experiences;

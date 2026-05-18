import { Timeline } from "../components/Timeline";
import { experiences } from "../constants";
const Experiences = () => {
  return (
    <section id="experience">
      <Timeline data={experiences} />
    </section>
  );
};

export default Experiences;

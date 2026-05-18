import { resumeLink } from "../constants/index.js";

const Resume = () => {
  return (
    <section id="resume" className="pb-42">
      <div className="mx-auto max-w-4xl px-4">
        <h2 className="text-3xl font-bold text-white">Resume</h2>
        <p className="mt-3 text-neutral-300">Embedded resume preview (Click on popout to view in google drive)</p>

        <div className="mt-8 overflow-hidden rounded-xl bg-neutral-900/50 ring-1 ring-white/10">
          <iframe
            title="Resume"
            className="h-[115vh] w-full"
            src={resumeLink}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>
    </section>
  );
};

export default Resume;

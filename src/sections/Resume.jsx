import { resumeLink } from "../constants/index.js";

const Resume = () => {
  return (
    <section id="resume" className="pb-42">
      <div className="mx-auto max-w-4xl px-4">
        <h2 className="text-3xl font-bold text-white">Resume</h2>
        <p className="mt-3 text-neutral-300">
          Click below to open my resume in Google Drive
        </p>

        <div className="mt-8 overflow-hidden rounded-xl bg-neutral-900/50 ring-1 ring-white/10">
          <a
            href={resumeLink}
            target="_blank"
            rel="noreferrer"
            className="block"
          >
            <img
              src="/assets/socials/Fullstack_Resume_Chayan_image.jpg"
              alt="Resume preview"
              className="h-auto w-full"
              loading="lazy"
            />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Resume;

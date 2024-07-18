import { FaFacebookF, FaLinkedinIn, FaReact, FaGithub, FaNodeJs, FaInstagram } from "react-icons/fa";
import { SiTailwindcss, SiExpress, SiMongodb, SiJavascript } from "react-icons/si";

const Media = () => {
  return (
    <div className="flex flex-col gap-4 lg:gap-6 justify-between mb-10 lg:mb-0 xl:mb-0">
      <div className="mb-4 lg:mb-0">
        <h2 className="text-base uppercase font-titleFont mb-2 lg:mb-4">
          Find me in
        </h2>
        <div className="flex flex-wrap gap-2 lg:gap-3">
          <SocialLink href="https://www.facebook.com/sananali53/" icon={<FaFacebookF />}  />
          <SocialLink href="https://instagram.com/_exotic.sanan" icon={<FaInstagram />} />
          <SocialLink href="https://github.com/Sananali01" icon={<FaGithub />} />
          <SocialLink href="https://www.linkedin.com/in/sananali007/" icon={<FaLinkedinIn />} />
        </div>
      </div>
      <div>
        <h2 className="text-base uppercase font-titleFont mb-2 lg:mb-4">
          BEST SKILL ON
        </h2>
        <div className="flex flex-wrap gap-2 lg:gap-3">
          <SkillIcon icon={<SiJavascript />} />
          <SkillIcon icon={<FaReact />} />
          <SkillIcon icon={<FaNodeJs />} />
          <SkillIcon icon={<SiMongodb />} />
          <SkillIcon icon={<SiExpress />} />
          <SkillIcon icon={<SiTailwindcss />} />
        </div>
      </div>
    </div>
  );
};

// Helper component to render social media links
const SocialLink = ({ href, icon }) => (
  <a
    href={href}
    target="_blank"
    rel="noreferrer"
    className="w-12 h-12 lg:w-16 lg:h-16 bg-stone-800 bg-opacity-25 text-gray-200 text-lg lg:text-xl inline-flex items-center justify-center rounded-md shadow-shadowOne hover:bg-opacity-40 hover:-translate-y-1 transition-all hover:text-red-600 cursor-pointer duration-300"
  >
    {icon}
  </a>
);

// Helper component to render skill icons
const SkillIcon = ({ icon }) => (
  <span className="w-12 h-12 lg:w-16 lg:h-16 bg-stone-800 bg-opacity-25 text-gray-200 text-lg lg:text-xl inline-flex items-center justify-center rounded-md shadow-shadowOne hover:bg-opacity-40 hover:-translate-y-1 transition-all hover:text-red-600 cursor-pointer duration-300">
    {icon}
  </span>
);

export default Media;

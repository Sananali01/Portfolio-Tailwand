import { Link } from 'react-router-dom';
import { FaFacebookF, FaLinkedinIn, FaGithub, FaInstagram } from "react-icons/fa";
import logo from "../../assets/logo.png";
import { SectionWrapper } from "../../hoc";
import fanimation from '../../assets/animation.json';
import Lottie from "lottie-react";

const Footer = () => {
  return (
    <div className="w-full lg:ps-8 h-auto border-b-[1px] border-b-black flex lg:flex-row flex-col items-center justify-center gap-10">
      <div className=" w-full h-full flex lg:flex-col items-center gap-8 " id="social-footer">
        <Link to='/'><img className="w-32 lg:w-48 footer-logo" src={logo} alt="logo" /></Link> {/* Adjusted size for small and large screens */}
        <div className="w-full flex justify-center items-center gap-4 mt-4 " >
          <SocialLink href="https://www.facebook.com/sananali53/" icon={<FaFacebookF />} />
          <SocialLink href="https://instagram.com/_exotic.sanan" icon={<FaInstagram />} />
          <SocialLink href="https://github.com/Sananali01" icon={<FaGithub />} />
          <SocialLink href="https://www.linkedin.com/in/sananali007/" icon={<FaLinkedinIn />} />
        </div>
      </div>
      <div className="lg:ml-24">
        <Lottie animationData={fanimation} loop={true} />
      </div>
      <div className="w-full h-full lg:ml-48">
        <h3 className="text-xl uppercase text-design text-[#841F1F] font-bold tracking-wider">
          Quick Links
        </h3>
        <ul className='flex flex-col gap-4 font-medium text-secondary py-6 overflow-hidden '>
          <NavItem path='/about' label='About' />
          <NavItem path='/works' label='Works' />
          <NavItem path='/skills' label='Skills' />
          <NavItem path='/contact' label='Contact' />
        </ul>
      </div>
    </div>
  );
};

const NavItem = ({ path, label }) => (
  <li className='hover:text-[#841F1F] text-lg cursor-pointer'>
    <a href={path}>{label}</a>
  </li>
);

const SocialLink = ({ href, icon }) => (
  <a
    href={href}
    target="_blank"
    rel="noreferrer"
    className="w-12 h-12 lg:w-16 lg:h-16 bg-stone-800 bg-opacity-25 text-gray-200 text-xl lg:text-2xl inline-flex items-center justify-center rounded-md shadow-md hover:bg-opacity-40 hover:text-red-600 hover:-translate-y-1 transition-all cursor-pointer duration-300"
  >
    {icon}
  </a>
);

export default SectionWrapper(Footer, "");

import { Link, useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';
import menu from "../../assets/menu.svg"
import close from "../../assets/close.svg"
import logo from '../../assets/logo.png';
import { FaFacebookF, FaLinkedinIn, FaGithub, FaPhoneAlt, FaInstagram } from "react-icons/fa";
import { TfiEmail } from 'react-icons/tfi';
import { LuExternalLink } from "react-icons/lu";

const Navbar = () => {
    const [toggle, setToggle] = useState(false); // Define toggle state
    const [scrolled, setScrolled] = useState(false); // Define scrolled state

    const location = useLocation();
    const [active, setActive] = useState("");

    useEffect(() => {
        const handleScroll = () => {
            const scrollTop = window.scrollY;
            setScrolled(scrollTop > 100);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    useEffect(() => {
        setActive(location.pathname); // Set active link based on current pathname
    }, [location]);

    const toggleMenu = () => setToggle(!toggle); // Function to toggle menu visibility

    return (
        <nav className={`w-full flex items-center py-5 fixed top-0 z-20 transition-all duration-300 ${scrolled ? "bg-black shadow-lg" : "bg-transparent"}`}>
            <div className='flex w-full justify-between items-center max-w-7xl mx-auto px-4'>
                <Link to='/' className='flex items-center gap-2' onClick={() => { setActive(''); window.scrollTo(0, 0); }}>
                    <img src={logo} alt="logo" className='w-9 h-9 object-contain' />
                    <p className='text-white hover:text-[#841F1F] text-[18px] font-bold cursor-pointer flex'>
                        Sanan&nbsp;<span className='sm:block hidden'>Ali</span>
                    </p>
                </Link>
                <ul className='list-none hidden md:flex flex-row items-center gap-10'>
                    <NavItem path='/about' label='About' active={active} onClick={() => setActive('/about')} />
                    <NavItem path='/works' label='Works' active={active} onClick={() => setActive('/works')} />
                    <NavItem path='/skills' label='Skills' active={active} onClick={() => setActive('/skills')} />
                    <NavItem path='/contact' label='Contact' active={active} onClick={() => setActive('/contact')} />
                    <a href="https://drive.google.com/file/d/1NIGu7lXIq7CVcMLMk0zbRGHDV7PLt5XD/view?usp=drive_link" target='_blank' rel='noreferrer' className='text-secondary hover:text-[#841F1F] text-[18px] font-medium cursor-pointer flex items-center'>Resume &nbsp; <LuExternalLink /></a>
                </ul>
                <div className='md:hidden flex flex-1 justify-end items-center'>
                    <img src={toggle ? close : menu} alt="menu" className='w-[28px] h-[28px] object-contain cursor-pointer' onClick={toggleMenu} />
                </div>
            </div>

            <div className={`${!toggle ? 'hidden' : 'flex'} md:hidden absolute top-16 left-0 w-full bg-stone-900 py-4 px-8 flex-col gap-4`}>
                <ul className='list-none flex flex-col gap-4'>
                    <NavItem path='/about' label='About' active={active} onClick={toggleMenu} />
                    <NavItem path='/works' label='Works' active={active} onClick={toggleMenu} />
                    <NavItem path='/skills' label='Skills' active={active} onClick={toggleMenu} />
                    <NavItem path='/contact' label='Contact' active={active} onClick={toggleMenu} />
                    <a href="https://drive.google.com/file/d/1NIGu7lXIq7CVcMLMk0zbRGHDV7PLt5XD/view?usp=drive_link" target='_blank' rel='noreferrer' className='text-secondary text-[18px] font-medium cursor-pointer'>Resume</a>
                </ul>
                <div className="w-full flex justify-center items-center gap-4 mt-4">
                <SocialLink href="https://www.facebook.com/sananali53/" icon={<FaFacebookF />} />
          <SocialLink href="https://instagram.com/_exotic.sanan" icon={<FaInstagram />} />
          <SocialLink href="https://github.com/Sananali01" icon={<FaGithub />} />
          <SocialLink href="https://www.linkedin.com/in/sananali007/" icon={<FaLinkedinIn />} />
                </div>
                <div className='flex flex-col gap-4 mt-4'>
                    <ContactDetail icon={<FaPhoneAlt />} href="tel:+92-3116566223" text="Call Now" />
                    <ContactDetail icon={<TfiEmail />} href="mailto:sananali010@gmai;.com" text="sananali010@gmail.com" />
                </div>
            </div>
        </nav>
    );
};

// Helper component to render nav items with active styling
const NavItem = ({ path, label, active, onClick }) => (
    <li className={`${active === path ? 'text-[#841F1F]' : 'text-secondary'} hover:text-[#841F1F] text-[18px] font-medium cursor-pointer transition ease-out hover:scale-125`}
        onClick={onClick}>
        <Link to={path}>{label}</Link>
    </li>
);

// Helper component to render social media links #6D1213
const SocialLink = ({ href, icon }) => (
    <a href={href} target="_blank" rel="noreferrer" className="w-10 h-10 bg-black bg-opacity-25 text-gray-200 text-lg inline-flex items-center justify-center rounded-md shadow-md hover:bg-opacity-40 hover:-translate-y-1 transition-all hover:text-designColor cursor-pointer duration-300">
        {icon}
    </a>
);

// Helper component to render contact details
const ContactDetail = ({ icon, href, text }) => (
    <p className="text-gray-500 text-lg flex items-center gap-2">
        <span>{icon}</span>
        <span><a href={href} target="_blank" rel="noreferrer">{text}</a></span>
    </p>
);

export default Navbar;

import moment from "moment/moment";
import { FaPhoneAlt } from "react-icons/fa";
import { TfiEmail } from "react-icons/tfi";

const FooterBottom = () => {
  return (
    <div className="w-full pb-10">
      <p className=" text-gray-500 text-base flex items-center justify-center gap-2">
        <span>
          <FaPhoneAlt />
        </span>
        <span><a href="tel:+923116566223" target="_blank" rel="noreferrer">Call Now</a></span>
      </p>
      <p className=" text-gray-500 text-base flex items-center justify-center gap-2">
        <span>
          <TfiEmail />
        </span>
        <span>
        <a href="mailto:sananali010@gmail.com" target="_blank" rel="noreferrer">sananali010@gmail.com</a>
        </span>
      </p>
      <p className="text-center text-gray-500 text-base">
        © {moment().format('YYYY')}. All rights reserved by <a href="https://instagram.com/_exotic.sanan" target="_blank" rel="noreferrer" className="text-[#841F1F]">Sanan Ali</a>
      </p>
    </div>
  );
}

export default FooterBottom
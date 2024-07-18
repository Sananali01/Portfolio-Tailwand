import img from "../../../assets/pic.png";

const RightBanner = () => {
  return (
    <div className="w-full flex justify-center items-center relative ">
      <img
        className=" w-[900px] z-10"
        src={img}
        alt="bannerImg"
      />
      <div className="absolute bottom-0 w-[450px] h-[375px] bg-gradient-to-r from-[#841F1F3b] to-[#202327] shadow-shadowOne flex justify-center items-center"></div>
    </div>
  );
}

export default RightBanner
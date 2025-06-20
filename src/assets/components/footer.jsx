import logo from "../images/favicon.ico";
const Footer = () => {
  return (
    <div className="flex flex-col items-center justify-center bg-black p-8 gap-4">
      <div className="flex gap-2 items-center justify-center">
        <img src={logo} alt="NextStep Logo" className="w-8 h-8 mx-auto " />
        <h2 className="text-lg font-bold text-center  text-white">NextStep</h2>
      </div>
      <p className="text-white/60 text-sm">
        © 2024 NextStep. All rights reserved.
      </p>
    </div>
  );
};

export default Footer;

import logo from "../images/images.png";
import globe from "../assets/globe.png";
function Navbar() {
  return (
    <>
      <header className="flex border-b-2 border-[rgb(239,238,238)] w-auto h-[60px] mt-[15px] pl-[3px]">
        <div>
          <img className="w-16 h-auto ml-3 mr-6" src={logo} alt="Wix logo" />
        </div>
        <div className="flex mt-3 text-md">
          <ul className=" list-none font-[Arial] flex gap-7 ">
            <li>Product</li>
            <li>Solutions</li>
            <li>Resources</li>
            <li>Pricing</li>
          </ul>
          <div className="w-[1.2px] h-[23px] bg-[lightgrey] ml-[25px] mr-6"></div>
          <ul className="font-Arial flex text-[17px] gap-7">
            <li>Wixel</li>
            <li>Wix Studio</li>
            <li>Enterprise</li>
          </ul>
        </div>

        <div className="text-[17px] flex items-center ml-6 flex-auto justify-end mr-6">
          <img className="w-5 h-auto mr-3" src={globe} alt="globe" />
          <div className="w-[1.6px] h-[23px] pt-[3px] bg-[lightgray] "></div>
          <a className="cursor-pointer ml-5 underline font-[Arial]">Login</a>
          <button className="bg-[#166aea] text-white rounded-[42px] cursor-pointer leading-6 py-2 px-7.5 font-size: clamp(0.5rem, 1rem, 1rem) border-0 ml-5">
            Get Started
          </button>
        </div>
      </header>
    </>
  );
}

export default Navbar;

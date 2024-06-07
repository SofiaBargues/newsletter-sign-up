import { useState } from "react";
import mobile from "./assets/images/illustration-sign-up-mobile.svg";
import desktop from "./assets/images/illustration-sign-up-desktop.svg";
import icon from "./assets/images/icon-list.svg";
import viteLogo from "/vite.svg";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="md:bg-[#36384c] h-screen flex justify-center ">
      <div className="flex  flex-col bg-white rounded-xl md:  md:max-w-[1018px] md:flex-row-reverse max-w-[430px] text-[#172554] font-custom m-auto ">
        <img src={mobile} className="block md:hidden"></img>
        <img src={desktop} className="hidden md:block md:m-[18px]"></img>
        <div className="p-7 flex flex-col md:mx-10 gap-7 justify-center">
          <h1 className="text-[45px] font-bold mt-3 ">Stay updated!</h1>
          <p className="text-lg">
            Join 60,000+ product managers receiving monthly updates on:
          </p>
          <ul className="text-lg flex-col flex gap-3 leading-">
            <div className="flex flex-row gap-3 items-start">
              <img src={icon} className=""></img>
              <li>Product discovery and building what matters</li>
            </div>
            <div className="flex flex-row gap-3  items-start">
              <img src={icon} className=""></img>{" "}
              <li>Measuring to ensure updates are a success</li>
            </div>
            <div className="flex flex-row gap-3  items-start">
              <img src={icon} className=""></img>
              <li>And much more!</li>
            </div>
          </ul>
          <form className="flex flex-col gap-3">
            <label className="text-[14px] font-semibold  text-[#172554]">
              Email address
            </label>
            <input
              placeholder="email@company.com"
              className="h-14 placeholder:pl-4 rounded-lg border-2"
              type="email"
              id="email"
              name="email"
              required
            ></input>
            <button className="rounded-xl p-5 text-white font-bold bg-[#172554]">
              Subscribe to monthly newsletter
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default App;

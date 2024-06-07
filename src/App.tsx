import { useState } from "react";
import mobile from "./assets/images/illustration-sign-up-mobile.svg";
import icon from "./assets/images/icon-list.svg";
import viteLogo from "/vite.svg";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="flex flex-col border-red-500 border-2 max-w-[430px]  m-auto ">
      <img src={mobile}></img>
      <div className="p-7 flex flex-col gap-7">
        <h1 className="text-4xl font-bold">Stay updated!</h1>
        <p>Join 60,000+ product managers receiving monthly updates on:</p>
        <ul>
          <div className="flex flex-row gap-3 items-center">
            <img src={icon} className="h "></img>
            <li>Product discovery and building what matters</li>
          </div>
          <div className="flex flex-row gap-3  items-center">
            <img src={icon} className=""></img>{" "}
            <li>Measuring to ensure updates are a success</li>
          </div>
          <div className="flex flex-row gap-3  items-center">
            <img src={icon} className=""></img>
            <li>And much more!</li>
          </div>
        </ul>
        <form className="flex flex-col gap- 3">
          <label className="text-[14px] font-semibold">Email address</label>
          <input
            placeholder="email@company.com"
            className="W  border-2"
            type="email"
            id="email"
            name="email"
            required
          ></input>
        </form>
        <button className="rounded-xl p-4 text-white bg-slate-600">
          Subscribe to monthly newsletter
        </button>
      </div>
    </div>
  );
}

export default App;

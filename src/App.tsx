import { useState } from "react";
import mobile from "./assets/images/illustration-sign-up-mobile.svg";
import icon from "./assets/images/icon-list.svg";
import viteLogo from "/vite.svg";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="flex flex-col border-red-500 border-2 max-w-[430px]  m-auto ">
      <img src={mobile}></img>
      <div className="p-7 flex flex-col gap-9">
        <h1 className="text-5xl font-bold mt-3">Stay updated!</h1>
        <p className="text-lg">
          Join 60,000+ product managers receiving monthly updates on:
        </p>
        <ul className="text-lg flex-col flex gap-3">
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
          <label className="text-[14px] font-semibold">Email address</label>
          <input
            placeholder="email@company.com"
            className="h-16 placeholder:pl-4 rounded-lg border-2"
            type="email"
            id="email"
            name="email"
            required
          ></input>
          <button className="rounded-xl p-5 text-white bg-slate-600">
            Subscribe to monthly newsletter
          </button>
        </form>
      </div>
    </div>
  );
}

export default App;

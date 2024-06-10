import { useState } from "react";
import mobile from "./assets/images/illustration-sign-up-mobile.svg";
import desktop from "./assets/images/illustration-sign-up-desktop.svg";
import icon from "./assets/images/icon-list.svg";
import viteLogo from "/vite.svg";

function validateEmail(email: string) {
  return /\S+@\S+\.\S+/.test(email);
}

function Initial({ onSubmit, onEmail }) {
  const [error, setError] = useState(false);
  return (
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
        <form
          action="email"
          method="GET"
          className="flex flex-col gap-3"
          onSubmit={(event) => {
            event?.preventDefault();
            const data = new FormData(event.target);
            const email = data.get("email") as string;
            if (validateEmail(email)) {
              onEmail(email);
              onSubmit();
            } else {
              setError(true);
            }
          }}
        >
          <div className="flex flex-row justify-between">
            <label className="text-[14px] font-semibold  text-[#172554]">
              Email address
            </label>
            {error && (
              <div className="text-[#f3958d] font-bold text-xs">
                Valid email required
              </div>
            )}
          </div>
          <input
            placeholder="email@company.com"
            className={
              !error
                ? "pl-4 h-14 w-full  rounded-lg border-2"
                : "pl-4 h-14 bg-[#ffe8e6] border-spacing-1 border-[#f3958d] text-[#e07d74] placeholder:text-[#e07d74] w-full  rounded-lg border-2"
            }
            type="text"
            id="email"
            name="email"
            required
          ></input>
          <button
            type="submit"
            className="rounded-xl   p-5 text-white font-bold bg-[#172554] hover:bg-gradient-to-r from-[#ff5476] to-[#f96c42]  hover:shadow-2xl  hover:shadow-[#ff673f]"
          >
            Subscribe to monthly newsletter
          </button>
        </form>
      </div>
    </div>
  );
}

function Success({ onClick, email }) {
  return (
    <div className="flex flex-col h-screen md:gap-6 bg-white md:p-[51px] md:rounded-xl justify-around p-[31px] md:justify-around md:w-[406px] md:h-[420px]  max-w-[430px] text-[#172554] font-custom m-auto ">
      <span className="flex flex-col gap-5">
        <span>
          <img src={icon} className="h-[51px] "></img>
        </span>
        <h1 className="font-bold flex text-5xl">Thanks for subscribing!</h1>
        <p className="text-xs leading-5">
          A confirmation email has been sent to
          <span className="font-bold">{email}</span>. Please open it and click
          the button inside to confirm your subscription.
        </p>
      </span>
      <button
        onClick={onClick}
        type="button"
        className="h-[44px] w-[300px] text-white text-sm hover:bg-gradient-to-r from-[#ff5476] to-[#f96c42]  hover:shadow-2xl  hover:shadow-[#ff673f]  bg-[#232742]  rounded-md"
      >
        Dimiss message
      </button>
    </div>
  );
}

function App() {
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [email, setEmail] = useState("");

  return (
    <div className="md:bg-[#36384c] h-screen flex justify-center ">
      {isSubscribed ? (
        <Success
          email={email}
          onClick={() => {
            setIsSubscribed(false);
          }}
        />
      ) : (
        <Initial
          onEmail={(email: string) => {
            setEmail(email);
          }}
          onSubmit={() => {
            setIsSubscribed(true);
          }}
        />
      )}
    </div>
  );
}

export default App;

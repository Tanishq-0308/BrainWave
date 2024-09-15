import React, { useContext, useState } from "react";
import { SearchContext } from "../SearchContext";

function Header({ sidebar, resetMap, toggleScreen, openLayer }) {
  const [id, setId] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [load, setLoad] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [exportbar, setExportBar] = useState(false);
  const { setCountry } = useContext(SearchContext);
  const [inputValue, setInputValue] = useState("");
  const toggleExportBar = () => {
    setExportBar(!exportbar);
  };

  const handleLoad = () => {
    setLoad(!load);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Simple login validation
    if (id === "admin" && password === "admin1234") {
      setIsLoggedIn(true);
      setError("");
      setLoad(!load);
    } else {
      setError("Invalid ID or Password");
      setIsLoggedIn(false);
    }
    setId("");
    setPassword("");
  };

  const handleSearch = (e) => {
    e.preventDefault();
    setCountry(inputValue); // Update global country state
    setInputValue("");
  };
  const loadData = () => {
    setIsLoggedIn(!isLoggedIn);
  };
  return (
    <div
      className={`absolute  ${
        sidebar ? "w-[calc(100%-390px)]" : "w-[calc(100%-70px)]"
      } transition-all duration-500 right-0 top-0 text-3xl h-[80px] flex justify-between  text-white bg-blue-500 `}
    >
      <div className="flex items-center gap-8 mt-5 ml-14">
        <div className="cursor-pointer">
          <button className="flex flex-col items-center " onClick={openLayer}>
            <svg
              height="20px"
              viewBox="0 0 30 23"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M21.25 5.47143C21.25 7.96093 17.4427 12.3974 15.7708 14.2257C15.3698 14.6634 14.625 14.6634 14.2292 14.2257C12.5573 12.3974 8.75 7.96093 8.75 5.47143C8.75 2.44847 11.5469 0 15 0C18.4531 0 21.25 2.44847 21.25 5.47143ZM21.6667 9.13729C21.849 8.82268 22.0156 8.50808 22.1667 8.19803C22.1927 8.14332 22.2188 8.08404 22.2448 8.02933L28.2865 5.91371C29.1094 5.62646 30 6.15536 30 6.93048V19.2777C30 19.7245 29.6875 20.1258 29.2135 20.2945L21.6667 22.9344V9.13729ZM7.16667 6.30583C7.29167 6.94872 7.54167 7.59617 7.83333 8.19803C7.98437 8.50808 8.15104 8.82268 8.33333 9.13729V20.5999L1.71354 22.9207C0.890625 23.208 0 22.6791 0 21.904V9.55677C0 9.10993 0.3125 8.7087 0.786458 8.53999L7.17187 6.30583H7.16667ZM17.0729 15.1376C17.7969 14.3443 18.9323 13.0539 20 11.6268V22.9937L10 20.4905V11.6268C11.0677 13.0539 12.2031 14.3443 12.9271 15.1376C13.9948 16.3049 16.0052 16.3049 17.0729 15.1376ZM15 6.93048C15.5525 6.93048 16.0824 6.73833 16.4731 6.3963C16.8638 6.05427 17.0833 5.59037 17.0833 5.10667C17.0833 4.62297 16.8638 4.15907 16.4731 3.81704C16.0824 3.47501 15.5525 3.28286 15 3.28286C14.4475 3.28286 13.9176 3.47501 13.5269 3.81704C13.1362 4.15907 12.9167 4.62297 12.9167 5.10667C12.9167 5.59037 13.1362 6.05427 13.5269 6.3963C13.9176 6.73833 14.4475 6.93048 15 6.93048Z"
                fill="white"
              />
            </svg>
            <p className="text-[11px]">Base Map</p>
          </button>
        </div>
        <div onClick={handleLoad}>
          <button className="flex flex-col items-center justify-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              height="24px"
              fill="currentColor"
            >
              <path d="M21 9.5V12.5C21 14.9853 16.9706 17 12 17C7.02944 17 3 14.9853 3 12.5V9.5C3 11.9853 7.02944 14 12 14C16.9706 14 21 11.9853 21 9.5ZM3 14.5C3 16.9853 7.02944 19 12 19C16.9706 19 21 16.9853 21 14.5V17.5C21 19.9853 16.9706 22 12 22C7.02944 22 3 19.9853 3 17.5V14.5ZM12 12C7.02944 12 3 9.98528 3 7.5C3 5.01472 7.02944 3 12 3C16.9706 3 21 5.01472 21 7.5C21 9.98528 16.9706 12 12 12Z"></path>
            </svg>
            <p className="text-[11px]">Load Data</p>
          </button>
        </div>
        {load && (
          <div className="absolute text-black z-10 flex flex-col text-[16px] w-[35%] left-0 bg-white top-[80px] text-center p-5">
            <p className="text-[17px]">LOGIN</p>
            <p className="text-[14px]">Please login to load data</p>
            <form
              onSubmit={handleSubmit}
              className="flex flex-col items-center w-full gap-2 p-4"
            >
              <input
                type="text"
                name="email"
                id="email"
                value={id}
                onChange={(e) => setId(e.target.value)}
                placeholder="Email or UserID"
                className="bg-gray-200 w-[250px] px-5 text-[14px] rounded-3xl"
              />
              <input
                type="password"
                name="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Password"
                className="bg-gray-200 px-5 w-[250px] text-[14px] rounded-3xl"
              />
              <button
                type="submit"
                className="bg-blue-500 rounded-3xl w-[40%] text-white"
              >
                Login
              </button>
            </form>
          </div>
        )}

        {isLoggedIn && (
          <div className="w-[300px] h-[270px] flex flex-col gap-5 items-center bg-white absolute top-[80px] z-10 left-[380px] text-center text-black">
            <div className="flex border-b border-gray-300 w-full">
              <button className="bg-gray-200 w-[50%] text-[14px] active:bg-white border-r border-gray-300">
                KML
              </button>
              <button className="bg-gray-200 w-[50%] text-[14px] active:bg-white">
                Shapefile
              </button>
            </div>
            <p className="text-[14px]">Upload data</p>
            <div className="flex flex-col items-center">
              <svg
                className="h-[30px] text-blue-500"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                height="20px"
              >
                <path d="M4 19H20V12H22V20C22 20.5523 21.5523 21 21 21H3C2.44772 21 2 20.5523 2 20V12H4V19ZM14 9V15H10V9H5L12 2L19 9H14Z"></path>
              </svg>
              <p className="text-blue-500 text-[15px]">Click to upload file</p>
            </div>
            <button
              className="bg-blue-500 rounded-3xl text-[15px] px-5 text-white"
              onClick={loadData}
            >
              Load Data
            </button>
          </div>
        )}
        <div className=" px-1 ">
          <div>
            <form onSubmit={handleSearch} className="flex gap-5">
              <input
                id="countryInput"
                className="outline-none order-2 text-[18px] p-2 mb-2 bg-transparent"
                type="text"
                placeholder="Enter country"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
              />
              <button className="flex flex-col items-center" type="submit">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  height="23px"
                  fill="currentColor"
                >
                  <path d="M18.031 16.6168L22.3137 20.8995L20.8995 22.3137L16.6168 18.031C15.0769 19.263 13.124 20 11 20C6.032 20 2 15.968 2 11C2 6.032 6.032 2 11 2C15.968 2 20 6.032 20 11C20 13.124 19.263 15.0769 18.031 16.6168ZM16.0247 15.8748C17.2475 14.6146 18 12.8956 18 11C18 7.1325 14.8675 4 11 4C7.1325 4 4 7.1325 4 11C4 14.8675 7.1325 18 11 18C12.8956 18 14.6146 17.2475 15.8748 16.0247L16.0247 15.8748Z"></path>
                </svg>
                <p className="text-[11px]">Search</p>
              </button>
            </form>
          </div>
        </div>
      </div>
      <div className="text-black flex border text-xs px-3 items-center bg-white m-4 cursor-pointer">
        <div className="flex flex-col items-center gap-1 px-4 ">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            height="20px"
          >
            <path d="M4 19H20V12H22V20C22 20.5523 21.5523 21 21 21H3C2.44772 21 2 20.5523 2 20V12H4V19ZM14 9V15H10V9H5L12 2L19 9H14Z"></path>
          </svg>
          <p className="text-[11px]">Report</p>
        </div>
        <div
          className="flex flex-col items-center gap-1 px-4"
          onClick={resetMap}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            height="21px"
          >
            <path d="M12 4C9.25144 4 6.82508 5.38626 5.38443 7.5H8V9.5H2V3.5H4V5.99936C5.82381 3.57166 8.72764 2 12 2C17.5228 2 22 6.47715 22 12H20C20 7.58172 16.4183 4 12 4ZM4 12C4 16.4183 7.58172 20 12 20C14.7486 20 17.1749 18.6137 18.6156 16.5H16V14.5H22V20.5H20V18.0006C18.1762 20.4283 15.2724 22 12 22C6.47715 22 2 17.5228 2 12H4Z"></path>
          </svg>
          <p className="text-[11px]">Reset</p>
        </div>
        <div
          className="flex flex-col items-center gap-1 px-4"
          onClick={toggleScreen}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            height="21px"
          >
            <path d="M8 3V5H4V9H2V3H8ZM2 21V15H4V19H8V21H2ZM22 21H16V19H20V15H22V21ZM22 9H20V5H16V3H22V9Z"></path>
          </svg>
          <p className="text-[11px]">Fullscreen</p>
        </div>
        <div
          className="flex flex-col items-center gap-2 px-3 "
          onClick={toggleExportBar}
        >
          <svg
            height="18px"
            viewBox="0 0 22 17"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M11.7346 11.067L14.4476 8.70764C14.5191 8.64245 14.6063 8.59036 14.7035 8.55471C14.8008 8.51906 14.9059 8.50065 15.0123 8.50065C15.1186 8.50065 15.2238 8.51906 15.321 8.55471C15.4182 8.59036 15.5054 8.64245 15.5769 8.70764C15.8907 8.9845 15.8907 9.43621 15.5769 9.71429L12.7171 12.2036C12.5039 12.4008 12.2429 12.5586 11.951 12.6667C11.6591 12.7747 11.343 12.8305 11.0233 12.8305C10.7036 12.8305 10.3875 12.7747 10.0956 12.6667C9.80373 12.5586 9.54266 12.4008 9.32945 12.2036L6.46972 9.71429C6.31874 9.57645 6.23512 9.39704 6.23512 9.21096C6.23512 9.02489 6.31874 8.84547 6.46972 8.70764C6.5412 8.64245 6.62835 8.59036 6.72559 8.55471C6.82282 8.51906 6.92799 8.50065 7.03433 8.50065C7.14067 8.50065 7.24584 8.51906 7.34307 8.55471C7.44031 8.59036 7.52746 8.64245 7.59894 8.70764L10.268 11.0281V0.675143C10.268 0.302357 10.5965 0 11.0013 0C11.4061 0 11.7346 0.302357 11.7346 0.675143V11.067ZM4.66588 6.07143C4.32825 6.07153 4.00121 6.16907 3.74104 6.34725C3.48088 6.52544 3.30385 6.77313 3.24041 7.04771L1.49671 14.3334C1.47813 14.4111 1.46884 14.4905 1.46884 14.5714C1.46884 15.2417 2.11998 15.7857 2.92071 15.7857H19.0819C19.1777 15.7857 19.2725 15.7776 19.3664 15.7614C19.7458 15.6965 20.0788 15.5098 20.2926 15.2423C20.5064 14.9747 20.5836 14.648 20.5074 14.3334L18.7622 7.04771C18.6988 6.77354 18.5222 6.52616 18.2627 6.34803C18.0031 6.16989 17.6768 6.0721 17.3396 6.07143H4.66588ZM7.33497 4.85714V6.07143H14.6676V4.85714H17.344C18.7314 4.85714 19.9251 5.67436 20.1979 6.80971L21.9431 14.0954C22.0278 14.4461 22.0178 14.808 21.914 15.1551C21.8102 15.5023 21.6151 15.8262 21.3426 16.1037C21.0701 16.3811 20.727 16.6054 20.3377 16.7603C19.9484 16.9153 19.5226 16.9971 19.0907 17H2.91191C2.47931 16.9988 2.05242 16.9182 1.66207 16.7638C1.27172 16.6093 0.927663 16.3851 0.654741 16.1072C0.381818 15.8293 0.186847 15.5046 0.0839088 15.1567C-0.0190292 14.8088 -0.0273642 14.4463 0.059506 14.0954L1.80468 6.80971C2.07599 5.67436 3.27121 4.85714 4.65708 4.85714H7.33497Z"
              fill="black"
            />
          </svg>
          <p className="text-[11px]">Export Data</p>
        </div>
        <div
          className={` ${
            exportbar ? "flex" : "hidden"
          } absolute transition-all duration-500 bg-white top-[90px] z-10 text-[13px] flex flex-col gap-2 p-1 right-10`}
        >
          <div className=" border-b">Geojson</div>
          <div className=" border-b">CSV</div>
          <div className=" border-b">KML</div>
          <div>Shapefile</div>
        </div>
      </div>
    </div>
  );
}

export default Header;

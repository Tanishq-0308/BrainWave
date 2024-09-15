import { useState } from "react";
import OpenLayer from "./components/OpenLayer/OpenLayer";
import "./App.css";
import Header from "./components/Header/Header";
import Location from "./components/CurrentLoc/Location";
import Sidebar from "./components/SideBar/Sidebar";
import { SearchProvider } from "./components/SearchContext";

function App() {
  const [fullScreen, setFullScreen] = useState(false);
  const [resetMap, setResetMap] = useState(null);
  const [sidebar, setSideBar] = useState(true);
  const [toggleMap, SetToggleMap] = useState(false);
  const [location, setLocation] = useState(false);

  const toggleloc = () => {
    setLocation(!location);
  };
  const openLayer = () => {
    SetToggleMap(!toggleMap);
  };
  const toggleBar = () => {
    setSideBar(!sidebar);
  };
  const toggleScreen = () => {
    setFullScreen(!fullScreen);
  };

  return (
    <SearchProvider>
      <div className=" relative">
        {!fullScreen && (
          <div>
            <Header
              sidebar={sidebar}
              resetMap={resetMap}
              toggleScreen={toggleScreen}
              openLayer={openLayer}
            />
            <Sidebar sidebar={sidebar} toggleSideBar={toggleBar} />
            <Location toggleloc={toggleloc} />
          </div>
        )}
        <OpenLayer
          sidebar={sidebar}
          toggleMap={toggleMap}
          openLayer={openLayer}
          resetMap={setResetMap}
          fullscreen={fullScreen}
          toggleScreen={toggleScreen}
          location={location}
        />
      </div>
    </SearchProvider>
  );
}

export default App;

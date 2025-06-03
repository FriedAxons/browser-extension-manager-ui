import Topbar from "./components/Topbar";
import Filterbar from "./components/Filterbar";
import ExtensionsGrid from "./components/ExtensionsGrid";
import "./colormode.css";

const App = () => {
  return (
    <>
      <Topbar />
      <Filterbar />
      <ExtensionsGrid />
    </>
  );
};

export default App;

import "./App.css";
import { Outlet } from "react-router-dom";
import Nav from "./components/Nav";

function App() {
  return (
    <>
      {/* shows the Navbar, shows the page conditionally changing based on the URL*/}
      <Nav />
      <Outlet />
    </>
  );
}
export default App;

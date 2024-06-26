import { Link } from "react-router-dom";
import NavBar from "./NavBar";

export default function Nav() {
  return (
    <NavBar
      links={[
        <Link key={1} to="/">
          About
        </Link>,
        <Link key={2} to="/portfolio">
          Portfolio
        </Link>,
        <Link key={3} to="/contact">
          Contact
        </Link>,
        <Link key={4} to="/resume">
          Resume
        </Link>,
      ]}
    />
  );
}

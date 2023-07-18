import logo from "../../assets/logo.webp";
import style from "./NavBar.module.css";
import ColorModeSwitch from "../../ColorModeSwitch";
import SearchInput from "../SearchInput";
const NavBar = () => {
  return (
    <nav className={style.navbar}>
      <img className={style.logo} src={logo} alt="chafaa's logo" />
      <SearchInput />
      <ColorModeSwitch />
    </nav>
  );
};

export default NavBar;

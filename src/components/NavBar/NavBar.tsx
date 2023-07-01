import logo from "../../assets/logo.webp";
import style from "./NavBar.module.css";
import ColorModeSwitch from "../../ColorModeSwitch";
const NavBar = () => {
  return (
    <nav className={style.navbar}>
      <img className={style.logo} src={logo} alt="chafaa's logo" />
      <ColorModeSwitch />
    </nav>
  );
};

export default NavBar;

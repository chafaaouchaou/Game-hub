import logo from "../../assets/logo.webp";
import style from "./NavBar.module.css";

const NavBar = () => {
  return (
    <nav className={style.navbar}>
      <img className={style.logo} src={logo} alt="chafaa's logo" />
      <p>NavBar</p>
    </nav>
  );
};

export default NavBar;

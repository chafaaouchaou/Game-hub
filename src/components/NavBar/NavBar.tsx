import logo from "../../assets/logo.webp";
import style from "./NavBar.module.css";
import ColorModeSwitch from "../../ColorModeSwitch";
import SearchInput from "../SearchInput";

interface Props {
  onSearch: (search: string) => void;
}

const NavBar = ({ onSearch }: Props) => {
  return (
    <nav className={style.navbar}>
      <img className={style.logo} src={logo} alt="chafaa's logo" />
      <SearchInput onSearch={(event) => onSearch(event)} />
      <ColorModeSwitch />
    </nav>
  );
};

export default NavBar;

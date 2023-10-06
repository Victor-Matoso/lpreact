import styles from "./nav.module.css";
import logo from "../../assets/logo.svg";

const Nav = () => {
  return (
    <div className={styles.bar}>
      <div>
        <img src={logo} alt="logo do little pet" width={"72"} />
        little pet
      </div>
      <input type="text" placeholder="Buscar" />
    </div>
  );
};

export default Nav;

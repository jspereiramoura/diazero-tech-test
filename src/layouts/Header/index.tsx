import styles from "./Header.module.scss";
import Logo from "@assets/logo.svg?react";

function Header() {
  return (
    <header className={styles.header}>
      <Logo />
    </header>
  );
}

export default Header;

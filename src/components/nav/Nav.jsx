import styles from "./Nav.module.css";
function Nav() {
  return (
    <nav className={`${styles.nav} container`}>
      <a href="/">
        <img src="/images/logo.png" alt="company-logo" />
      </a>
      <ul>
        <a href="http://">HOME</a>
        <a href="http://">ABOUT</a>
        <a href="http://">CONTACT</a>
      </ul>
    </nav>
  );
}

export default Nav;

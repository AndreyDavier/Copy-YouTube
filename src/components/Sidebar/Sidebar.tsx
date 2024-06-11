import { NavLink } from "react-router-dom";
import styles from "./Sidebar.module.scss";
import Context from "../../context/Context";
import { useContext } from "react";
import cn from "classnames";

function Sidebar() {
  const { isNavOpen } = useContext(Context);

  return (
    <nav
      className={`${styles["navigator"]} ${
        isNavOpen === false ? styles["navigator--open"] : ""
      }`}
    >
      <NavLink
        className={({ isActive }) =>
          cn(styles["nav-link"], { [styles.active]: isActive })
        }
        id={styles["home"]}
        to="/"
      >
        <img src="/home.svg" alt="Home" />
        <span>Главаня</span>
      </NavLink>
      <NavLink
        className={({ isActive }) =>
          cn(styles["nav-link"], { [styles.active]: isActive })
        }
        id={styles["shorts"]}
        to="shorts"
      >
        <img src="/iconshape.svg" alt="Shorts" />
        <span>Shorts</span>
      </NavLink>
      <NavLink
        className={({ isActive }) =>
          cn(styles["nav-link"], { [styles.active]: isActive })
        }
        id={styles["subscriptions"]}
        to="subscriptions"
      >
        <img src="/subscription.svg" alt="Subscriptions" />
        <span>Подписки</span>
      </NavLink>
    </nav>
  );
}

export default Sidebar;

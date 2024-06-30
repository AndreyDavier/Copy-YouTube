import Button from "../Button/Button";
import styles from "./Header.module.scss";
import Input from "../Input/Input";
import Creation from "../Svg/Creation";
import { Link, useNavigate } from "react-router-dom";
import { useContext, useState } from "react";
import Context from "../../context/Context";

function Header() {
  const { navOpen, isNavOpen } = useContext(Context);
  const [focusInput, setFocusInput] = useState(false);
  const [query, setQuery] = useState("");
  const navigate = useNavigate()


  const getSearchVideos = async (value: string) => {
    navigate(`/results?query=${value}`)
  };

  return (
    <div id={styles["container"]}>
      <div id={styles["start"]}>
        <Button
          onClick={() => navOpen(!isNavOpen)}
          className={styles["header-button_small"]}
        >
          <img src="/sideBar.svg" alt="" />
        </Button>
        <Link to={`/home`} className={styles["header-logo"]}>
          <img src="/YuoTubeLogo.svg" alt="" />
        </Link>
      </div>
      <div id={styles["center"]}>
        <form id={styles["search-form"]}>
          {focusInput ? (
            <img
              className={styles["header-form_search"]}
              src="/iconlegacy.svg"
              alt=""
            />
          ) : (
            ""
          )}

          <Input
            onInput={(e) => setQuery((e.target as HTMLInputElement).value)}
            onBlur={() => setFocusInput(false)}
            onFocus={() => setFocusInput(true)}
            placeholder={"Введите запрос"}
            className={styles["header-search_input"]}
          ></Input>
          <img
            className={styles["header-from_tia-icon"]}
            src="/tia.png"
            alt=""
            width={19}
            height={11}
          />
        </form>
        <Button
          onClick={() => getSearchVideos(query)}
          className={styles["icon-legacy"]}
        >
          <img src="/iconlegacy.svg" alt="" />
        </Button>
        <div id={styles["voice-search-button"]}>
          <Button>
            <img src="/voice.svg" alt="" />
          </Button>
        </div>
      </div>
      <div id={styles["end"]}>
        <Button className={styles["header-button_small"]}>
          <Creation />
        </Button>

        <Button>
          <img src="/notification.svg" alt="" />
        </Button>

        <Button>
          <img id="img" alt="Фото профиля" height="32" width="32" src="" />
        </Button>
      </div>
    </div>
  );
}

export default Header;

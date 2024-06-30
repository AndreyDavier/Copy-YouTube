import { FC, FormEventHandler } from "react";
import styles from "./Input.module.scss";
import cl from "classnames";

interface Inputprops {
  placeholder?: string;
  className?: string;
  onFocus: () => void;
  onBlur: () => void;
  onInput: FormEventHandler<HTMLInputElement>;
}

const Input: FC<Inputprops> = ({
  placeholder,
  className,
  onFocus,
  onBlur,
  onInput,
}) => {
  return (
    <input
      onInput={onInput}
      onBlur={onBlur}
      onFocus={onFocus}
      className={cl(className) + " " + styles["search"]}
      type="text"
      placeholder={placeholder}
    />
  );
};

export default Input;

import { FC, FormEventHandler } from "react";
import styles from "./Input.module.scss";
import cl from "classnames";

interface Inputprops {
  placeholder?: string;
  className?: string;
  onFocus: () => void;
  onBlur: () => void;
  onInput: FormEventHandler<HTMLInputElement>;
  value: string;
}

const Input: FC<Inputprops> = ({
  placeholder,
  className,
  onFocus,
  onBlur,
  onInput,
  value
}) => {
  return (
    <input
      onInput={onInput}
      onBlur={onBlur}
      onFocus={onFocus}
      className={cl(className) + " " + styles["search"]}
      type="text"
      placeholder={placeholder}
      value={value}
    />
  );
};

export default Input;

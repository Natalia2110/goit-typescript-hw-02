import css from "./ErrorMessage.module.css";
import React from "react";
import { FC } from "react";

interface onErrorProps {
  onError: string;
}

const ErrorMessage: FC<onErrorProps> = ({ onError }) => {
  return (
    <div className={css["error-box"]}>
      <p className={css.text}>
        За вашим запитом &quot;{onError}&quot; не знайдено жодного зображення.
        Спробуйте, будь ласка, з іншим ключовим словом.
      </p>
    </div>
  );
};

export default ErrorMessage;

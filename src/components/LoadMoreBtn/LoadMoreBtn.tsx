import css from "./LoadMoreBtn.module.css";
import { FC } from "react";
// import React from "react";

interface LoadMoreBtnProps {
  onClickBtn: () => void;
}

const LoadMoreBtn: FC<LoadMoreBtnProps> = ({ onClickBtn }) => {
  return (
    <div className={css["load-box"]}>
      <button type="button" onClick={onClickBtn} className={css["load-btn"]}>
        Load more
      </button>
    </div>
  );
};

export default LoadMoreBtn;

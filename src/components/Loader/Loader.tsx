import css from "./Loader.module.css";
import { ColorRing } from "react-loader-spinner";
import { FC } from "react";
import React from "react";

const Loader: FC = () => {
  return (
    <div className={css.loader}>
      <ColorRing
        visible={true}
        height="100"
        width="100"
        ariaLabel="color-ring-loading"
        wrapperStyle={{}}
        wrapperClass="color-ring-wrapper"
        colors={["#add8e6", "#4073d1", "#f8f8ff", "#6495ed", "#727272d1"]}
      />
    </div>
  );
};

export default Loader;

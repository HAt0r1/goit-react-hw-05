import { TailSpin } from "react-loader-spinner";

import style from "./Fallback.module.css";

const Fallback = () => {
  return (
    <TailSpin color="#ea3a3a" visible={true} wrapperClass={style.loader} />
  );
};

export default Fallback;

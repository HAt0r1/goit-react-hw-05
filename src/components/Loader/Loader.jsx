import { TailSpin } from "react-loader-spinner";
import style from "./Loader.module.css";
const Loader = () => {
  return (
    <TailSpin color="#ea3a3a" visible={true} wrapperClass={style.loader} />
  );
};

export default Loader;

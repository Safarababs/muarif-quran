import axios from "axios";
import data from "../data";

const BackendCall = () => {
  function Backend() {
    axios.get(data.backend + "/").then((res) => {
      console.log(res);
    });
  }
  return Backend();
};

export default BackendCall;

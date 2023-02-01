import axios from "axios";
import { Global } from "../constants/Global";
import { URLS } from "../constants/Types";

const baseURL = "http://154.26.136.182:8001/USER/login/";

export default class AuthAPI {
  static Login({ email, pass }) {
    let userData = async (email, pass) => {
      let response = await axios
        .post(URLS.Authentication, {
          email: email,
          password: pass,
        })
        .catch((er) => console.log(er));
      if (response?.status == 202) {
        localStorage.setItem("user", JSON.stringify({ ...response.data.data }));
        Global.user = response.data.data;
        console.log(response.data.data);
        return response.data.data;
      }
      return null;
    };
    return userData(email, pass);
  }
}

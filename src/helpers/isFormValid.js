import validateEmail from "./validateEmail";
import validatePassword from "./validatePassword";

const isFormValid = (email, password) => {
    if (validateEmail(email) && validatePassword(password)) {
      return true;
    } else {
      return false;
    }
  };

  export default isFormValid;
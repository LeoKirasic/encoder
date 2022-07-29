const validatePassword = (password) => {
    if (password.length >= 6 && password.match(/\d/)) {
        return true;
    } else {
        return false;
    }
  };

export default validatePassword;
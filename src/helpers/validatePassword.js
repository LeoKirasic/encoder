const validatePassword = (password) => {
    const regex = /^(?=.*[0-9])[a-zA-Z0-9]{6,}$/;
    return regex.test(password);
  };

export default validatePassword;
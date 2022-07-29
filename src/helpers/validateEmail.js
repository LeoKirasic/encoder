const validateEmail = (email) => {
    const string = email.toLowerCase();

    const regex = /\S+@\S+\.\S+/;
    return regex.test(string);
  };

export default validateEmail;
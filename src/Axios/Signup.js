import axios from "axios";

export const SignupForm = async (
  name,
  email,
  password,
  cpassword,
  securityQuestion,
  securityAnswer
) => {
  await axios.post("/new", {
    name,
    email,
    password,
    cpassword,
    securityQuestion,
    securityAnswer,
  });
};

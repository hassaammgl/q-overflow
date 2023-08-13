import axios from "axios";

export const loginForm = async (email, password, cpassword) => {
  await axios.post(
    "/login",
    { email, password, cpassword },
    {
      headers: {
        "Content-Type": "application/json",
      },
      withCredentials: true,
    }
  );
};

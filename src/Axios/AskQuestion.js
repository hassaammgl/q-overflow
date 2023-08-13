import axios from "axios";

export const AskQuestion = async (title, details, tags) => {
  return await axios.post(
    "/new-question",
    { title, details, tags },
    {
      headers: {
        "Content-Type": "application/json",
      },
      withCredentials: true,
    }
  );
};

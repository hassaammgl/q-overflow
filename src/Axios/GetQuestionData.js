import axios from "axios";

export const getQuestion = async (qId) => {
  return await axios.get("/get-question", { qId });
};

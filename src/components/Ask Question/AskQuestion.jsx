import { useNavigate } from "react-router-dom";
import { AskQuestion as AskQuestionDb } from "../../Axios/AskQuestion";
import { toast } from "react-hot-toast";
import { useState } from "react";
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";

const AskQuestion = () => {
  const [title, setTitle] = useState("");
  const [details, setdetails] = useState("");
  const [tags, setTags] = useState([]);
  const [input, setInput] = useState("");
  const [tagsNum, setTagsNum] = useState(5);
  const navigate = useNavigate();

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      setTags([...tags, input]);
      setTagsNum(tagsNum - 1);
      e.target.value = "";
    } else {
      setInput(e.target.value);
    }
  };

  const handleClear = (index) => {
    tags.splice(index, 1);
    setTagsNum(tagsNum + 1);
    setTags([...tags]);
  };

  const handleAskQuestion = async (e) => {
    e.preventDefault();
    await AskQuestionDb(title, details, tags)
      .then((res) => {
        console.log({ res });
        if (res.data.message) {
          toast.success(res.data.message);
        }
        if (res.data.questionId) {
          navigate(`/question-details/${res.data.questionId}`);
        }
      })
      .catch((err) => {
        console.log({ err });
        if (err.response.data.message.message) {
          toast.error(err.response.data.message.message);
        } else if (err.response.data.message) {
          toast.error(err.response.data.message);
        }
        if (err.response.data.message.questionId) {
          navigate(`/question-details/${err.response.data.message.questionId}`);
        } else {
          toast.error("Internal Server Error");
        }
      });
  };

  return (
    <div className="ask-question">
      <div className="box">
        <form onSubmit={handleAskQuestion}>
          <h1>Ask Anything here...</h1>
          <div className="inputs">
            <input
              type="text"
              onChange={(e) => setTitle(e.target.value)}
              placeholder="Enter the title of your question here..."
            />
          </div>
          <div className="inputs">
            <textarea
              onChange={(e) => setdetails(e.target.value)}
              placeholder="Enter the details of your question here..."
            />
          </div>
          <div className="my-inputs">
            <div className="heading">
              Your tags left <span>{tagsNum}</span>
            </div>
            <div className="tags">
              {tags.map((tag, index) => (
                <span key={index} className="tag">
                  {tag}
                  <button onClick={() => handleClear(index)}>
                    <CloseRoundedIcon className="close-icon" />
                  </button>
                </span>
              ))}
            </div>
          </div>
          <div className="inputs">
            <input
              type="text"
              disabled={tagsNum === 0 ? true : false}
              onKeyDown={handleKeyDown}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Enter Tags name"
            />
          </div>
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default AskQuestion;

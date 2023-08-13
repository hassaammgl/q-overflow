import Avatar from "@mui/material/Avatar";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import ArrowDropUpIcon from "@mui/icons-material/ArrowDropUp";
import { getQuestion } from "../../Axios/GetQuestionData";
import img1 from "../../Assests/kid404.png";
import { toast } from "react-hot-toast";

const QuestionDetails = () => {
  const params = useParams();
  const { id } = params;

  const [foundState, setFoundState] = useState(true);
  const [questionData, setQuestionData] = useState();

  console.log(id);
  const GetQuestion = async () => {
    await getQuestion(id)
      .then((res) => {
        console.log({ res });
      })
      .catch((err) => {
        console.log({ err });
        if (err.response.data.message) {
          setFoundState(false);
          toast.error(err.response.data.message);
        }
      });
  };
  useEffect(() => {
    GetQuestion();
  }, []);

  return (
    <>
      {foundState === true ? (
        <div className="question-details">
          <div className="question-header">
            <div className="title">
              <h1>How are you and what is programming?</h1>
              <span>
                Asked on <span>12 Aug 2023 03:54</span>
              </span>
            </div>
            <Link to={"/ask-question"}>
              <button>Ask Question</button>
            </Link>
          </div>
          <div className="details">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quam
            maxime magnam quae rerum accusantium omnis, pariatur laborum at
            provident natus et sed quibusdam iste quis laudantium sequi
            accusamus quaerat atque Lorem ipsum, dolor sit amet consectetur
            adipisicing elit. Voluptate accusamus aliquid, eos impedit provident
            saepe reiciendis ullam tempore magnam quae rerum accusantium omnis,
            pariatur laborum at provident natus et sed quibusdam iste quis
            laudantium sequi accusamus quaerat atque Lorem ipsum, dolor sit amet
            consectetur adipisicing elit. Voluptate accusamus aliquid, eos
            impedit provident saepe reiciendis ullam tempore repellendus maxime.
            illo quas consequuntur repellendus!
          </div>
          <div className="tags">
            <Link to={"/"}>programming</Link>
            <Link to={"/"}>JavaScript</Link>
            <Link to={"/"}>C++</Link>
            <Link to={"/"}>C#</Link>
            <Link to={"/"}>Others</Link>
          </div>
          <div className="answer">
            <h3>
              <span>3</span> Answers
            </h3>
            <div>
              <aside>
                <button>
                  <ArrowDropUpIcon className="arrow" />
                </button>
                <span>1</span>
                <button>
                  <ArrowDropDownIcon className="arrow" />
                </button>
              </aside>
              <section>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugit
                cum dolores in! Ullam repellat possimus nobis dicta alias quia
                molestiae? Eveniet sint porro cumque quae repudiandae quisquam
                eaque dolores in! Ullam repellat possimus nobis dicta alias quia
                molestiae? Eveniet sint porro cumque quae repudiandae quisquam
                eaque dolores in! Ullam repellat possimus nobis dicta alias quia
                molestiae? Eveniet sint porro cumque quae repudiandae quisquam
                eaque odit officiis tenetur? Ullam, aperiam porro.
              </section>
            </div>
          </div>
          <div className="comments">
            <div className="head">
              <h2>Comments</h2>
              <button> Add Comment</button>
            </div>
            <div className="all-comments">
              <div className="comment">
                <aside>
                  <Avatar className="avatar">A</Avatar>
                </aside>
                <section>
                  <div className="head">
                    <div className="username">M HassaamMughal</div>
                    <div className="date">12 Aug 2020 10:01 pm</div>
                  </div>
                  <div className="comment-details">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Corrupti eligendi dolorem et debitis accusamus nihil quidem
                    delectus? Explicabo adipisci dolores ratione magnam aliquam
                    consequuntur voluptas excepturi illum, nesciunt dolorum
                    rerum facilis debitis consectetur accusamus, amet odio
                    commodi! Recusandae quia nisi ipsa enim dolore repellat
                    tenetur.
                  </div>
                </section>
              </div>
              <div className="comment">
                <aside>
                  <Avatar className="avatar">A</Avatar>
                </aside>
                <section>
                  <div className="head">
                    <div className="username">M HassaamMughal</div>
                    <div className="date">12 Aug 2020 10:01 pm</div>
                  </div>
                  <div className="comment-details">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Corrupti eligendi dolorem et debitis accusamus nihil quidem
                    delectus? Explicabo adipisci dolores ratione magnam aliquam
                    consequuntur voluptas excepturi illum, nesciunt dolorum
                    rerum facilis debitis consectetur accusamus, amet odio
                    commodi! Recusandae quia nisi ipsa enim dolore repellat
                    tenetur.
                  </div>
                </section>
              </div>
              <div className="comment">
                <aside>
                  <Avatar className="avatar">A</Avatar>
                </aside>
                <section>
                  <div className="head">
                    <div className="username">M HassaamMughal</div>
                    <div className="date">12 Aug 2020 10:01 pm</div>
                  </div>
                  <div className="comment-details">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Corrupti eligendi dolorem et debitis accusamus nihil quidem
                    delectus? Explicabo adipisci dolores ratione magnam aliquam
                    consequuntur voluptas excepturi illum, nesciunt dolorum
                    rerum facilis debitis consectetur accusamus, amet odio
                    commodi! Recusandae quia nisi ipsa enim dolore repellat
                    tenetur.
                  </div>
                </section>
              </div>
              <div className="comment">
                <aside>
                  <Avatar className="avatar">A</Avatar>
                </aside>
                <section>
                  <div className="head">
                    <div className="username">M HassaamMughal</div>
                    <div className="date">12 Aug 2020 10:01 pm</div>
                  </div>
                  <div className="comment-details">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Corrupti eligendi dolorem et debitis accusamus nihil quidem
                    delectus? Explicabo adipisci dolores ratione magnam aliquam
                    consequuntur voluptas excepturi illum, nesciunt dolorum
                    rerum facilis debitis consectetur accusamus, amet odio
                    commodi! Recusandae quia nisi ipsa enim dolore repellat
                    tenetur.
                  </div>
                </section>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="not-found">
          <div className="box">
            <aside className="boy">
              <img src={img1} />
            </aside>
            <aside className="text">
              <h1>OOP's </h1>
              <h2>404 Question not Found</h2>
              <p>
                Go to <Link to="/">Home</Link>
              </p>
            </aside>
          </div>
        </div>
      )}
    </>
  );
};

export default QuestionDetails;

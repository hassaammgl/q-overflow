import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Home = () => {
  // useEffect(() => {
  //   const div = document.querySelector(".home");
  //   const handleScroll = () => {
  //     const scrollTop = div.scrollTop;
  //     const scrollHeight = div.scrollHeight;
  //     const clientHeight = div.clientHeight;

  //     if (scrollTop + clientHeight >= scrollHeight) {
  //       loadmoreQuestions();
  //     }
  //   };

  //   window.addEventListener("scroll", handleScroll);

  //   return () => {
  //     window.removeEventListener("scroll", handleScroll);
  //   };
  // }, []);

  return (
    <div className="home">
      <div className="home-header">
        <div className="title">
          <h1>All Questions</h1>
        </div>
        <Link to={"/"}>
          <button>Ask Question</button>
        </Link>
      </div>
      <div className="questions">
        <div className="question">
          <div className="title">
            <h1>How are you and what is programming?</h1>
            <span>
              Asked on <span>12 Aug 2023 03:54</span>
            </span>
          </div>
          <div className="tags">
            <Link to={`/tag/${"programming"}`}>Programming</Link>
            <Link to={`/tag/${"JavaScript"}`}>JavaScript</Link>
            <Link to={`/tag/${"C++"}`}>C++</Link>
            <Link to={`/tag/${"C#"}`}>C#</Link>
            <Link to={`/tag/${"Others"}`}>Others</Link>
          </div>
        </div>
        <div className="question">
          <div className="title">
            <h1>How are you and what is programming?</h1>
            <span>
              Asked on <span>12 Aug 2023 03:54</span>
            </span>
          </div>
          <div className="tags">
            <Link to={`/tag/${"programming"}`}>Programming</Link>
            <Link to={`/tag/${"JavaScript"}`}>JavaScript</Link>
            <Link to={`/tag/${"C++"}`}>C++</Link>
            <Link to={`/tag/${"C#"}`}>C#</Link>
            <Link to={`/tag/${"Others"}`}>Others</Link>
          </div>
        </div>
        <div className="question">
          <div className="title">
            <h1>How are you and what is programming?</h1>
            <span>
              Asked on <span>12 Aug 2023 03:54</span>
            </span>
          </div>
          <div className="tags">
            <Link to={`/tag/${"programming"}`}>Programming</Link>
            <Link to={`/tag/${"JavaScript"}`}>JavaScript</Link>
            <Link to={`/tag/${"C++"}`}>C++</Link>
            <Link to={`/tag/${"C#"}`}>C#</Link>
            <Link to={`/tag/${"Others"}`}>Others</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;

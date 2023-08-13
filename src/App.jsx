import { Suspense, lazy } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
const AskQuestion = lazy(() => import("./components/Ask Question/AskQuestion"));
const Signup = lazy(() => import("./components/LoginSignUp/Signup"));
import PageNotFound from "./components/Page404/PageNotFound";
const Login = lazy(() => import("./components/LoginSignUp/Login"));
const Home = lazy(() => import("./components/Home/Home"));
import LoadingBar from "react-top-loading-bar";
import { Toaster } from "react-hot-toast";
import Header from "./components/Header";
import { useState } from "react";
import "./styles/App.scss";
import axios from "axios";
import Loader from "./loader/Loader";
import Footer from "./components/Footer";
const GotoSearchTag = lazy(() =>
  import("./components/Goto Tag and Search/GotoSearchTag")
);
const QuestionDetails = lazy(() =>
  import("./components/QuestionDetails/QuestionDetails")
);

axios.defaults.baseURL = "http://localhost:5002";

const App = () => {
  const [progress, setProgress] = useState(100);
  const getProgress = (progress) => {
    setProgress(progress);
  };
  return (
    <Router>
      <LoadingBar
        color="red"
        height={3}
        progress={progress}
        onLoaderFinished={() => getProgress(0)}
      />
      <Header />
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path="/" getProgress={getProgress} element={<Home />} />
          <Route path="/login" getProgress={getProgress} element={<Login />} />
          <Route
            path="/sign-up"
            getProgress={getProgress}
            element={<Signup />}
          />
          <Route
            path="/ask-question"
            getProgress={getProgress}
            element={<AskQuestion />}
          />
          <Route
            path="/question-details/:id"
            getProgress={getProgress}
            element={<QuestionDetails />}
          />
          <Route
            path="/tag/:tag"
            getProgress={getProgress}
            element={<GotoSearchTag />}
          />
          <Route
            path="/*"
            getProgress={getProgress}
            element={<PageNotFound />}
          />
        </Routes>
        <Toaster
          position="bottom-center"
          toastOptions={{
            duration: 3000,
            className: "toaster",
          }}
        />
      <Footer  />
      </Suspense>
    </Router>
  );
};

export default App;

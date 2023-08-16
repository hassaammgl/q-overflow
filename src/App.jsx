import { Suspense, lazy } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
const Signup = lazy(() => import("./components/LoginSignUp/Signup"));
import PageNotFound from "./components/Page404/PageNotFound";
const Login = lazy(() => import("./components/LoginSignUp/Login"));
import { Toaster } from "react-hot-toast";
import Header from "./components/Header";
import "./styles/App.scss";
import axios from "axios";
import Loader from "./loader/Loader";
import Footer from "./components/Footer";

const backend_Api = "http://localhost:5002";
axios.defaults.baseURL = backend_Api;

const App = () => {
  return (
    <Router>
      <Header />
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path="/login" element={<Login />} /> {/*Done*/}
          <Route path="/sign-up" element={<Signup />} /> {/*Done*/}
          <Route path="/*" element={<PageNotFound />} /> {/*Done*/}
        </Routes>
        <Toaster
          position="bottom-center"
          toastOptions={{
            duration: 3000,
            className: "toaster",
          }}
        />
        <Footer />
      </Suspense>
    </Router>
  );
};

export default App;

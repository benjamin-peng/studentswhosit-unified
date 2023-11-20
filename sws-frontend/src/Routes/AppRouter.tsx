import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { View as MainView } from "../Features/Main/View";
import { View as AboutView } from "../Features/AboutUs/View";
import { View as GetInvolvedView } from "../Features/GetInvolved/View";
import { View as SignUpView } from "../Features/SignUp/View";
import { View as LoginView } from "../Features/Login/View";
import { Placeholder } from "../Components/Container/Placeholder";

const AppRouter = () => {
  return (
    <Router>
      <Routes>
        <Route element={<MainView />} path="/" />
        <Route element={<SignUpView />} path="/signup" />
        <Route element={<LoginView />} path="/login" />
        <Route element={<AboutView />} path="/about" />
        <Route element={<Placeholder />} path="/book" />
        <Route element={<GetInvolvedView />} path="/getinvolved" />
      </Routes>
    </Router>
  );
};

export { AppRouter };

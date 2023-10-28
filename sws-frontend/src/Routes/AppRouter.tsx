import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { View as MainView } from "../Features/Main/View";
import { View as AboutView } from "../Features/Main/AboutUs";
import { View as GetInvolvedView } from "../Features/Main/GetInvolved";
import { View as SignUpView } from "../Features/Main/SignUp";
import { View as LoginView } from "../Features/Main/Login";
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

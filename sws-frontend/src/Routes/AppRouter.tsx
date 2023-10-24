import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { View as MainView } from "../Features/Main/View";
import { View as AboutView } from "../Features/Main/AboutUs";
import { Placeholder } from "../Components/Container/Placeholder";

const AppRouter = () => {
  return (
    <Router>
      <Routes>
        <Route element={<MainView />} path="/" />
        <Route element={<Placeholder />} path="/signup" />
        <Route element={<Placeholder />} path="/login" />
        <Route element={<AboutView />} path="/about" />
        <Route element={<Placeholder />} path="/book" />
        <Route element={<Placeholder />} path="/getinvolved" />
      </Routes>
    </Router>
  );
};

export { AppRouter };

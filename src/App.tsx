import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.scss";
import { useTitle } from "./hooks/usePageTitle";
import { Main } from "./pages";
import { PrivateRoute } from "./routes/privateRoute";

function App() {
  useTitle("Главная");

  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<PrivateRoute component={Main} />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;

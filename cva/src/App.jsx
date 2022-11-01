import { Route, Routes } from "react-router-dom";
import Home from "./pages/home";
import Main from "./components/main";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Main />}>
        <Route index element={<Home />} />
      </Route>
    </Routes>
  );
}

export default App;

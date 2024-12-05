import { Route, Routes } from "react-router-dom";
import { ChoosePlan } from "./components/manual/ChoosePlan";
import { Home } from "./components/manual/Home";
import { Navbar } from "./common/Navbar";

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/plan" element={<ChoosePlan />} />
      </Routes>
    </div>
  );
}

export default App;

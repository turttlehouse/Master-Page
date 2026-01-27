import { BrowserRouter, Routes, Route } from "react-router-dom";
import Editor from "./screen/Editor";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Editor />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;

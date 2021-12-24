import Navbar from "./UI/Navbar";
import { Routes, Route } from "react-router-dom";
import Feed from "./screens/Feed";
import NotFound from "./screens/NotFound";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="*" element={<NotFound />} />
        <Route path="/" element={<Feed />} />
      </Routes>
    </>
  );
}

export default App;

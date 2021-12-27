import Navbar from "./UI/Navbar";
import { Routes, Route } from "react-router-dom";
import Feed from "./screens/Feed";
import NotFound from "./screens/NotFound";
import Liked from "./screens/Liked";
import Settings from "./screens/Settings/Settings";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="*" element={<NotFound />} />
        <Route path="/" element={<Feed />} />
        <Route path="/liked" element={<Liked />} />
        <Route path="/settings/*" element={<Settings />} />
      </Routes>
    </>
  );
}

export default App;

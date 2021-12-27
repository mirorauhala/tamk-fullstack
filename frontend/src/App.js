import Navbar from "./UI/Navbar";
import { Routes, Route } from "react-router-dom";
import Feed from "./screens/Feed";
import NotFound from "./screens/NotFound";
import Liked from "./screens/Liked";
import Settings from "./screens/Settings/Settings";
import Profile from "./screens/Profile";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="*" element={<NotFound />} />
        <Route path="/" element={<Feed />} />
        <Route path="/liked" element={<Liked />} />
        <Route path="/settings/*" element={<Settings />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </>
  );
}

export default App;

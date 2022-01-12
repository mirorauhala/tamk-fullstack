import Navbar from "./UI/Navbar";
import { Routes, Route } from "react-router-dom";
import Feed from "./screens/Feed";
import NotFound from "./screens/NotFound";
import Liked from "./screens/Liked";
import Settings from "./screens/Settings/Settings";
import Profile from "./screens/Profile";
import New from "./screens/New";
import Photo from "./screens/Photo";
import { UserContext } from "./UserContext";
import axios from "axios";
import { useEffect, useState } from "react";

function App() {
  const [user, setUser] = useState([]);

  /**
   * Load authenticated user from server.
   * @returns {Promise<void>}
   */
  const reloadUser = async () => {
    const requestedUser = await axios.get(
      process.env.REACT_APP_BACKEND_ENDPOINT + "/api/me"
    );

    setUser(requestedUser.data);
  };

  // fetch user data every 10 seconds
  useEffect(() => {
    // load user immediately
    reloadUser();
    const intervalId = setInterval(reloadUser, 10000);

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  return (
    <UserContext.Provider value={{ user, reloadUser }}>
      <Navbar />
      <Routes>
        <Route path="*" element={<NotFound />} />
        <Route path="/" element={<Feed />} />
        <Route path="/liked" element={<Liked />} />
        <Route path="/new" element={<New />} />
        <Route path="/p/:photoId" element={<Photo />} />
        <Route path="/settings/*" element={<Settings />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </UserContext.Provider>
  );
}

export default App;

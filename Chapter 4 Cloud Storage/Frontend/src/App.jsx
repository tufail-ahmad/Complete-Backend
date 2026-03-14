import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import CreatePost from "./CreatePost";
import Feed from "./Feed";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/posts" element={<Feed />} />
        <Route path="/create-post" element={<CreatePost />} />
      </Routes>
    </Router>
  );
};

export default App;

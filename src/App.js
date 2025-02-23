import Home from "./pages/home/Home";
import TopBar from "./components/topbar/TopBar";
import Single from "./pages/single/Single";
import Write from "./pages/write/Write";
import Settings from "./pages/settings/Settings";
import Login from "./pages/login/Login";
import Signup from "./pages/signup/Signup";
import Post from "./components/post/Post";
import { BrowserRouter as Router,Routes,Route,Link} from "react-router-dom";
import SinglePost from "./components/singlePost/SinglePost";


function App() {
  const user = false;
  return (
    <Router>
      <TopBar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/signup" element={user ? <Home /> : <Signup />} /> {/* if user is signed up goes to home if not goes to signup page*/}
        <Route path="/login" element={user ? <Home /> : <Login />} />
        <Route path="/write" element={user ? <Write /> : <Signup />} />
        <Route path="/settings" element={user ? <Settings /> : <Signup />} />
        <Route path="/post/:postid" element={<Single />} />
        </Routes>
    </Router>
  );
}

export default App;

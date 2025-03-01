import Home from "./pages/home/Home";
import About from "./pages/about/About";
import TopBar from "./components/topbar/TopBar";
import Single from "./pages/single/Single";
import Write from "./pages/write/Write";
import Settings from "./pages/settings/Settings";
import Login from "./pages/login/Login";
import Signup from "./pages/signup/Signup";
import { BrowserRouter as Router,Routes,Route} from "react-router-dom";



function App() {
  const user = true;
  return (
    <Router>
      <TopBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
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

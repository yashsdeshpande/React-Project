import { Route, Routes } from "react-router";
import Home from "./Home";
import About from "./About";
import Login from "./Login";
import Navbar from "./Navbar";
import PageNotFound from "./PageNotFound";
import College from "./College";
import Student from "./Student";
import Details from "./Details";
import Department from "./Department";
import UserList from "./UserList";
import UserDetail from "./UserDetail";
import Register from "./Register";
import Profile from "./Profile";
function App() {
  return (
    <>
      {/* <Navbar /> */}
      <Routes>
        <Route element={<Navbar />}>
          <Route path="/" element={<Home />} />
          <Route path="/user/profile" element={<Profile />} />
          <Route path="/users/list?" element={<UserList />} />
          <Route path="/users/:id/:name?" element={<UserDetail />} />

          <Route path="user">
            <Route path="/user/about" element={<About />} />
          </Route>
        </Route>
        <Route path="/user/login" element={<Login />} />
        <Route path="/user/register" element={<Register />} />

        <Route path="/college" element={<College />}>
          <Route index element={<Student />} />
          <Route path="student" element={<Student />} />
          <Route path="department" element={<Department />} />
          <Route path="details" element={<Details />} />
        </Route>
        <Route path="/*" element={<PageNotFound />} />
      </Routes>
    </>
  );
}

export default App;

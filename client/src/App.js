import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import AdminLogin from "./routes/adminLogin";
import UserPage from "./routes/userPage";
import NewFeeds from "./routes/newFeeds";
import AdminBlogListPage from "./routes/adminBlogListPage";
import AdminBlogList from "./component/trang/admin/adminBlogList";
import Adminaddblogpage from "./routes/adminaddblogpage";
import AdminDashBoard from "./routes/adminDashboard";
import AdminAddUserPage from "./routes/adminadduserpage";
import AdminRegisterAccForUsersPage from "./routes/adminRegisterAccForUserPage";
import UserProfilePage from "./routes/userProfilePage";
import AdvProfilePage from "./routes/advProfilePage";
import UserBlogDetail from "./routes/userBlogDetail";
import CoachForm from "./routes/coachForm/coachForm";


function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path="/user/home" element={<UserPage />} />
          <Route exact path="/admin/home" element={<AdminLogin />} />
          <Route exact path="/admin/dashboard" element={<AdminDashBoard />} />
          <Route exact path="/admin/addblog" element={<Adminaddblogpage />} />
          <Route exact path="/user/blog" element={<NewFeeds />} />
          <Route exact path="/user/blog/:id" element={<UserBlogDetail />} />
          <Route
            exact
            path="/admin/bloglist"
            element={<AdminBlogListPage content={<AdminBlogList />} />}
          />
          <Route
            exact
            path="/admin/bloglist/:id"
            element={<AdvProfilePage />}
          />

          <Route
            exact
            path="/admin/registeraccforuser"
            element={<AdminRegisterAccForUsersPage />}
          />
          <Route exact path="/admin/adduser" element={<AdminAddUserPage />} />
          <Route
            exact
            path="/admin/userprofile/:id"
            element={<UserProfilePage />}
          />
          <Route exact path="coach/dashboard" element={<CoachForm />}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;

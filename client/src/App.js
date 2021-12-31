import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import AdminLogin from "./routes/adminLogin";
import UserPage from "./routes/userPage";
import NewFeeds from "./routes/newFeeds";

import AdminBlogList from "./component/trang/admin/adminBlogList";
import Adminaddblogpage from "./routes/adminaddblogpage";
import AdminDashBoard from "./routes/adminDashboard";
import AdminAddUserPage from "./routes/adminadduserpage";
import AdminRegisterAccForUsersPage from "./routes/adminRegisterAccForUserPage";
import UserProfilePage from "./routes/userProfilePage";
import AdvProfilePage from "./routes/advProfilePage";
import UserBlogDetail from "./routes/userBlogDetail";
import AdminForm from "./routes/adminForm/adminForm";
import SchedulePage from "./routes/schedulePage";
import CoachDashBoard from "./routes/coachDashboard";
import CoachForm from "./routes/coachForm/coachForm";
import UserDashBoard from "./routes/userForm/UserDashBoard";
import AdminRegisterAccForCoach from "./routes/adminRegisterAccForCoach";
import CoachProfilePage from "./routes/coachProfilePage";
import AdminAddCoach from "./component/dat/adminaddcoach";
import CoachUserTable from "./component/dat/coachUserTable";
import CoachComment from "./component/new28_12_21/CoachComment/coachComment";
function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path="/admin/home" element={<AdminLogin />} />
          <Route exact path="/admin/dashboard" element={<AdminDashBoard />} />
          <Route
            exact
            path="/admin/addblog"
            element={
              <AdminForm>
                {" "}
                <Adminaddblogpage />{" "}
              </AdminForm>
            }
          />

          <Route
            exact
            path="/admin/bloglist"
            // element={<AdminBlogListPage content={<AdminBlogList />} />}
            element={
              <AdminForm>
                {" "}
                <AdminBlogList />{" "}
              </AdminForm>
            }
          />
          <Route
            exact
            path="/admin/bloglist/:id"
            element={
              <AdminForm>
                {" "}
                <AdvProfilePage />{" "}
              </AdminForm>
            }
          />

          <Route
            exact
            path="/admin/registeraccforuser"
            // element={<AdminRegisterAccForUsersPage />}
            element={
              <AdminForm>
                {" "}
                <AdminRegisterAccForUsersPage />{" "}
              </AdminForm>
            }
          />

          <Route
            exact
            path="/admin/adduser"
            element={
              <AdminForm>
                {" "}
                <AdminAddUserPage />{" "}
              </AdminForm>
            }
          />
          <Route
            exact
            path="/admin/addcoach"
            element={
              <AdminForm>
                {" "}
                <AdminAddCoach />{" "}
              </AdminForm>
            }
          />

          <Route
            exact
            path="/admin/userprofile/:id"
            // element={<UserProfilePage />}
            element={
              <AdminForm>
                {" "}
                <UserProfilePage />{" "}
              </AdminForm>
            }
          />
          <Route
            exact
            path="/admin/coachprofile/:id"
            // element={<UserProfilePage />}
            element={
              <AdminForm>
                {" "}
                <CoachProfilePage />{" "}
              </AdminForm>
            }
          />

          <Route
            exact
            path="/admin/registeraccforcoach"
            // element={<AdminRegisterAccForUsersPage />}
            element={
              <AdminForm>
                {" "}
                <AdminRegisterAccForCoach />{" "}
              </AdminForm>
            }
          />
          {/* coach */}

          <Route
            exact
            path="coach/dashboard"
            element={<CoachDashBoard />}
          ></Route>
          <Route
            exact
            path="/coach/schedule"
            element={
              <CoachForm>
                {" "}
                <SchedulePage />{" "}
              </CoachForm>
            }
          ></Route>
          <Route
            exact
            path="/coach/userlist"
            element={
              <CoachForm>
                {" "}
                <CoachUserTable />{" "}
              </CoachForm>
            }
          ></Route>
          <Route
            exact
            path="/coach/userprofile/:id"
            // element={<UserProfilePage />}
            element={
              <CoachForm>
                {" "}
                <UserProfilePage>
                  <CoachComment></CoachComment>
                </UserProfilePage>
              </CoachForm>
            }
          />

          {/* user */}
          <Route exact path="/user/home" element={<UserPage />} />
          <Route
            exact
            path="user/dashboard"
            element={<UserDashBoard />}
          ></Route>

          <Route exact path="/user/blog" element={<NewFeeds />} />
          <Route exact path="/user/blog/:id" element={<UserBlogDetail />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;

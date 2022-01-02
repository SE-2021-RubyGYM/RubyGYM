import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import AdminAddUser from "./component/sub-sections/dat/adminadduser/adminadduser";
import AdminLogin from "./component/admin/adminPages/adminLogin";
import UserPage from "./component/user/userPages/userPage";
import NewFeeds from "./component/user/userPages/newFeeds";
import AdminRegisterAccForUsers from "./component/admin/adminPages/adminRegisterAccForUser";
import AdminBlogList from "./component/sub-sections/trang/admin/adminBlogList";
import AddBlog from "./component/sub-sections/new28_12_21/AddBlog/AddBlog";
import AdminDashBoard from "./component/admin/adminPages/adminDashboard";
import UserProfilePage from "./component/admin/adminPages/userProfilePage";
import AdvProfilePage from "./component/admin/adminPages/advProfilePage";
import UserBlogDetail from "./component/user/userPages/userBlogDetail";
import AdminForm from "./component/admin/adminForm/adminForm";
import CoachDashBoard from "./component/coach/coachPages/coachDashboard";
import CoachForm from "./component/coach/coachForm/coachForm";
import UserDashBoard from "./component/user/userForm/UserDashBoard";
import AdminRegisterAccForCoach from "./component/admin/adminPages/adminRegisterAccForCoach";
import CoachProfilePage from "./component/admin/adminPages/coachProfilePage";
import AdminAddCoach from "./component/sub-sections/dat/adminaddcoach";
import CoachUserTable from "./component/sub-sections/dat/coachUserTable";
import CoachComment from "./component/sub-sections/new28_12_21/CoachComment/coachComment";
import Schedule_coach from "./component/sub-sections/Hung/schedule";
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
                <AddBlog />
              </AdminForm>
            }
          />
          <Route
            exact
            path="/admin/bloglist"
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
                <AdvProfilePage />
              </AdminForm>
            }
          />

          <Route
            exact
            path="/admin/registeraccforuser"
            element={
              <AdminForm>
                <AdminRegisterAccForUsers />
              </AdminForm>
            }
          />
          <Route
            exact
            path="/admin/adduser"
            element={
              <AdminForm>
                <AdminAddUser />
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
                <CoachProfilePage />
              </AdminForm>
            }
          />

          <Route
            exact
            path="/admin/registeraccforcoach"
            element={
              <AdminForm>
                <AdminRegisterAccForCoach />
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
                <Schedule_coach />
              </CoachForm>
            }
          ></Route>
          <Route
            exact
            path="/coach/userlist"
            element={
              <CoachForm>
                <CoachUserTable />
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

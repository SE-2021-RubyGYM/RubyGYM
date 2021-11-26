
import { BrowserRouter as Router , Routes, Route, Link } from "react-router-dom";

import AdminLogin from "./routes/adminLogin";
import UserPage from "./routes/userPage";
import NewFeeds from "./routes/newFeeds";
import AdminBlogListPage from "./routes/adminBlogListPage";
import Adminaddblogpage from "./routes/adminaddblogpage";
import AdminRegisterAccForUserPage from "./routes/adminregisteraccforuserspage";
import AdminAddUserPage from "./routes/adminadduserpage";
function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path="/user/home" element={<UserPage/>}/>
          <Route exact path="/admin/home" element={<AdminLogin/>}/>
          <Route exact path="/admin/addblog"  element={<Adminaddblogpage/>}/>
          <Route exact path="/user/blog"  element={<NewFeeds/>}/>
          <Route exact path="/admin/bloglist" element={<AdminBlogListPage/>}/>
          <Route exact path="/admin/registeraccforuser" element={<AdminRegisterAccForUserPage/>}/>
          <Route exact path="/admin/adduser" element={<AdminAddUserPage/>}/>
        </Routes>
      </Router>
    </div>
  );
}


export default App;







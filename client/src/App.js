import reactDom from "react-dom";

import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import AdminLogin from "./routes/adminLogin";
import UserPage from "./routes/userPage";
import AdminAddBlog from "./routes/adminAddBlog";
import NewFeeds from "./routes/newFeeds";
function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path="/user/home" element={<UserPage/>}/>
          <Route exact path="/admin/home" element={<AdminLogin/>}/>
          <Route exact path="/admin/addblog"  element={<AdminAddBlog/>}/>
          <Route exact path="/user/blog"  element={<NewFeeds/>}/>
    
        </Routes>
      </Router>
      
             
    </div>
  );
}




export default App;

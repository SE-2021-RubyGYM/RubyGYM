// import Header from "../../Hung/header";
// import Slider from "../../dat/slider";
// import ContentIntro from "../../Hung/content";
// import ContentHlv from "../../tung/contentHlv";
// import Footer from "../../tung/footer";
// import PostManage from "../component/trang/postManager/Postmanage";
// import SC from "../../trang/SC";

import Header from "../../sub-sections/Hung/header";
import Slider from "../../sub-sections/dat/slider";
import ContentIntro from "../../sub-sections/Hung/content";
import ContentHlv from "../../sub-sections/tung/contentHlv";
import Footer from "../../sub-sections/tung/footer";
import PostManage from "../../sub-sections/trang/postManager/Postmanage";
import SC from "../../sub-sections/trang/SC";
export default function UserPage() {
  return (
    <>
      <Header />
      <Slider />
      <ContentIntro />
      {/* <PostManage/> */}
      <SC />
      <ContentHlv />
      <Footer />
    </>
  );
}

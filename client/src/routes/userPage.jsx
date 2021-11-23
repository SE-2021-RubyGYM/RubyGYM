
import Header from "../component/Hung/header";
import Slider from "../component/dat/slider";
import ContentIntro from "../component/Hung/content";
import ContentHlv from "../component/tung/contentHlv";
import Footer from "../component/tung/footer";
// import PostManage from "../component/trang/postManager/Postmanage";


export default function UserPage(){
    return(
        <>
            <Header/> 
            <Slider/>
            <ContentIntro/>
            {/* <PostManage/> */}
            <ContentHlv/>
            <Footer/>
        </>
    )
}
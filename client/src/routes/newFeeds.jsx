import NewFeed from "../component/tung/newfeed"
import Header from "../component/Hung/header"
import Footer from "../component/tung/footer"
export default function NewFeeds(){
    return(
        <div className="newFeeds">
        <Header/>
        <NewFeed/>
        <Footer/>
        </div>
    )
}
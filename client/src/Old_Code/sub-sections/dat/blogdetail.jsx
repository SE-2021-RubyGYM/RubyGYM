import { useState } from "react"

import AddBlog from "./addBlog"


export default function BlogDetail(props){
    const [title,setTitle]=useState(props.title)
    return(
        <div className="blog-detail">
            <div className="blog-detail-title">
                <h2>{title}</h2>
            </div>
            <AddBlog value={props.value} nameoftool='Thay đổi'/>
        </div>
    )
}
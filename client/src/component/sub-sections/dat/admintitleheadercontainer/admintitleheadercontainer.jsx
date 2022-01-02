
import './admintitleheadercontainerstyle.css'

export default function AdminTitleHeaderContainer(props){
    return(
        <div className="adminTitleHeaderContainer">
            <div>{props.title}</div>
        </div>
    )
}
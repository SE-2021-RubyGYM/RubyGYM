import { useState } from "react";
import { useEffect } from "react";



import './style.css'

export default function EventContent(){
  
    // const []
    
    
    const [data,setData]=useState(
        [
            {
                stt:0,
                col1:'dat',
                col2:10000,
                col3:'Click de xem chi tiet',
            },
            {
                stt:1,
                col1:'dat',
                col2:10000,
                col3:'Click de xem chi tiet',
            },
            {
                stt:2,
                col1:'dat',
                col2:10000,
                col3:'Click de xem chi tiet',
            },
            {
                stt:3,
                col1:'dat',
                col2:10000,
                col3:'Click de xem chi tiet',
            },
        ]
    )
    const [style,setStyle]=useState({
        blogList:{
            width:'80vw',
            margin:'auto',
        },
        textCenter:{
            textAlign:'center',fontSize:'24px',fontFamily:'Source Sans Pro',
        },
        blogListTools:{
            display:'flex',justifyContent:'space-between'
        },
        blogListToolsSearch:{
            display:'flex',justifyContent:'space-between',width:"40%"
        },
        chosePeople:{
            display:'flex',
            justifyContent:'space-between',
            width:'150px '
        },

    })

    return(
        <div className='blogList' style={style.blogList}>
            <div className="bloglistTitle">
                <div style={style.textCenter}>
                    Danh sách bài viết
                </div>
            </div>
            <div className='blogListTools' style={style.blogListTools}>
                <div className='blogListToolsSearch' style={style.blogListToolsSearch}>
                    <div style={style.chosePeople}>
                        <label htmlFor="">Người đăng</label>
                        <select name="" id="">
                            <option value="0">Tất cả</option>
                        </select>
                    </div>
                    <input type="text" placeholder="Mã bài viết" style={{height:'20px'}} />
                    <input type="submit" value='Tìm kiếm'/>
                   
                </div>
                <div className="addBlog" style={{height:'30px'}} >
                    <button style={{height:'100%',width:'100%'}}>Thêm bài viết</button>
                </div>
            </div>
            
            <table className='blogList-table'>
                <tr>
                    <th>STT</th>
                    <th>Ten</th>
                    <th>Luot tuong tac</th>
                    <th>Chi tiet</th>
                </tr>
                
                    {
                        data.map((element)=>{
                            return(
                                <tr>
                                    {
                                        Object.keys(element).map(function(key,index){
                                            if(key=='col3') return <td><button>{element[key]}</button></td>
                                            return <td>{element[key]}</td>
                                        })
                                    }
                                </tr>
                            )
                        })
                    }                
            </table>
           
        </div>
    )
}
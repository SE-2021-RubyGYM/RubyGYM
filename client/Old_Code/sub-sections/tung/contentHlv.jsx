import './style.css';

import { useState } from 'react';
const header_info = {
    h2 : 'Gặp những những chuyên gia thể hình hàng đầu',
    p  : 'Dù bạn yêu thích Yoga, đam mê bộ môn Dance đầy sôi động, hay môn võ MMA cực mạnh mẽ. Bạn sẽ luôn được hướng dẫn bởi những chuyên gia hàng đầu.'
}
    

const hlvinfo=[
    {
        name:'TIỂU PHƯƠNG',
        title:'CHUYÊN GIA THỂ HÌNH',
        des:[
            'Chứng nhận từ Học Viện Y Học Thể Thao Quốc Gia (NASM) Hoa Kỳ',
            'Hơn 10 năm kinh nghiệm thay đổi thể hình, từng trực tiếp huấn luyện cho nhiều ngôi sao',
            'Gặt hái nhiều thành tích về Marathon: hoàn thành đường chạy 42km trong 5 tiếng tại giải giải Danang International Marathon 2015, 42km địa hình trong 10 tiếng giải Vietnam Mountain Marathon 2015 diễn ra ở Sapa (Lào Cai), chặng 42km trong 6 tiếng tại giải Lăng Cô Marathon.'
        ],
        urlImg:'https://www.cfyc.com.vn/images_server/themes/celebration/img/home/new-home/trainer-1.jpg?v=0.1',
    },
    {
        name:'RODRIGO',
        title:'HLV GROUPX',
        des:['19 năm kinh nghiệm huấn luyện các lớp thể dục nhóm GroupX',
             'Cử nhân ngành Giáo dục thể chất và thể thao',
             'Chứng chỉ Les Mills Quốc tế',
             'Giảng dạy các bộ môn: RPM, BodyPump, Core Fit, Step & Core, Cycling, HiiT Cycle, Bums N Tums, Shape Up, TRX' ],
        urlImg:"https://www.cfyc.com.vn/images_server/themes/celebration/img/group-fitness-services/trainers/trainer-4.png",

        
    },
    {
        name:'BRAD TRAN',
        title:'CHUYÊN GIA THỂ HÌNH',
        des:[
            'Chứng nhận từ Học Viện Y Học Thể Thao Quốc Gia (NASM) Hoa Kỳ',
            'Hạng 3 cuộc thi Musclecontest Vietnam 2018 Hạng 8 Men Physique Musclecontest Philippines.'
           
        ],
        urlImg:'https://www.cfyc.com.vn/images_server/themes/celebration/img/home/new-home/trainer-3.jpg?v=0.1',

    },
    {
        name:'NETO AMORIM',
        title:'HLV GROUPX',
        des:['HLV quốc tế kỳ cựu Lesmills Brazil các bộ môn: Bodycombat, Bodypump, Bodystep, RPM, BodyAttack, Bodybalance, BodyVive, PowerJump.',
            '19 năm kinh nghiệm. HLV Zumbaa tại California Fitness & Yoga Centers.',
            'Tham gia vô số buổi trình diễn Aerobic, Dance & Rhythm, Hip Hop tại Brazil.',
            'Choreographer các chương trình tại Việt Nam và Châu Á (PowerX, Pop Dance, Killer Cycle, Pop Kids).'
            ],    
        urlImg:'https://www.cfyc.com.vn/images_server/themes/celebration/img/group-fitness-services/trainers/trainer-1.jpg',

    },
]


export default function ContentHlv(){
    return(

        <div className="hlv">
            <div className="header_text_center">
                        <h2>{header_info.h2}</h2>
                            <div className="container_paragraph">
                                <p>{header_info.p}</p>
                                <div className="short-red-line">
                                </div>
                            </div>
                        
                    </div>
            <div className="container">
                {
                    hlvinfo.map((element,index)=>{
                        return(
                            <div className="section">
                                <img src={element.urlImg} alt="" />
                                <div className="des">
                                    <div className="name">{element.name}</div>
                                    <br/>
                                    <div className="title">{element.title}</div>
                                    <br/>
                                    <ul>
                                    {
                                        
                                        element.des.map((element1,index1)=>{
                                        
                                            return (
                                                
                                                <li key={index1} style={{textAlign:''}}>{element1}</li>
                                            )
                                        })
                                    }
                                    </ul>
                                </div>
                            </div>                           
                        )
                    })
                }
            </div>
        </div>
    )
}
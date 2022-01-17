import React from "react";
import "./schedule.css";
import { useState, useEffect } from "react";
import axios from "axios"
import {
  Inject,
  ScheduleComponent,
  Day,
  Week,
  WorkWeek,
  Month,
  Agenda,
  ResourcesDirective,
  ResourceDirective,
  GroupModel
} from "@syncfusion/ej2-react-schedule";

function CoachSchedule() {
  const [data, setData, ] = useState([
    {
      Id: 1,
      Subject: 'Learning',
      StartTime: new Date(2022, 0, 17, 1, 0),
      EndTime: new Date(2022, 0, 17, 2, 0),
      userId: 1
    },
    {
      Id: 2,
      Subject: 'Singing',
      StartTime: new Date(2022, 0, 18, 3, 0),
      EndTime: new Date(2022, 0, 18, 4, 0),
      userId: 2
    },
    {
      Id: 3,
      Subject: 'Dancing',
      StartTime: new Date(2022, 0, 19, 1, 0),
      EndTime: new Date(2022, 0, 19, 3, 0),
      userId: 3
    }
  ]);
  const [resourceDataSource, setResourceDataSource] = useState([
    {Name: 'Tung', Id:1, Color:'#ea7a57'},
    {Name: 'Son', Id:2, Color:'#357CD2'},
    {Name: 'Trang', Id:3, Color:'#7fa900'}
  ])
  // const [groupData, setGroupDate] = useState(
  //   {resources:['Resource']}
  // )
  
  useEffect(() => {
    
    axios({
      method: "get",
      url: "http://localhost:5000/api/calendars",
      headers: {
        authorization: "Bearer " + localStorage.getItem("accessToken"),
      },
    })
      .then((res) => {
        if (res.status == 200) {
          setData(res.data.result);
          console.log(res.data.result);
        }
      })
      .catch((err) => {
        console.log("failed author");
      });
  }, []);



  return (
    <>
      <div className="schedule_bg">
        <div className="schedule_table">
          <ScheduleComponent  height = '100%' eventSettings={{ dataSource: data }}
          view={['Day', 'Week', 'Month', 'TimelineDay', 'TimelineWeek']}  >
            <ResourcesDirective>
              <ResourceDirective field="userId" title='Customer Name' 
              name='Resource' textField="Name" idField="Id" colorField="Color" dataSource={resourceDataSource}>
              </ResourceDirective>
            </ResourcesDirective>
            <Inject services={[Day, Week, WorkWeek, Month, Agenda]} />
          </ScheduleComponent>
        </div>
      </div>
      <button onClick={() => console.log(data)}>Confirm</button>
    </>
  );
}
export default CoachSchedule;

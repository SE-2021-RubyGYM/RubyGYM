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
  var stringToColour = function(str) {
    var hash = 0;
    for (var i = 0; i < str.length; i++) {
      hash = str.charCodeAt(i) + ((hash << 5) - hash);
    }
    var colour = '#';
    for (var i = 0; i < 3; i++) {
      var value = (hash >> (i * 8)) & 0xFF;
      colour += ('00' + value.toString(16)).substr(-2);
    }
    return colour;
  }
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
  ] );
  const [resourceDataSource, setResourceDataSource] = useState([
    {Name: 'Tung', Id:"6197bf691de54733bfca8997", Color:'#ea7a57'},
    {Name: 'Son', Id:"2", Color:'#357CD2'},
    {Name: 'Trang', Id:"3", Color:'#7fa900'}
  ])
  const [groupData, setGroupDate] = useState(
    {resources:['Resource']}
  )
  
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
    axios({
      method: "get",
      url: "http://localhost:5000/api/users/get_by_coach",
      headers: {
        authorization: "Bearer " + localStorage.getItem("accessToken"),
      },
    })
      .then((res) => {
        if (res.status == 200) {
          let tempSource = res.data.result;
          tempSource.forEach(element => {
            element.color = stringToColour(element.name);
          });
          setResourceDataSource(tempSource);
        
        }
      })
      .catch((err) => {
        console.log(err.message);
      });

  }, []);
  const uploadData = (data) =>{
    axios({
      method: "post",
      url: "http://localhost:5000/api/calendars/refresh_calendars",
      headers: {
        authorization: "Bearer " + localStorage.getItem("accessToken"),
      },
      data: data
    })
      .then((res) => {
        if (res.status == 200) {
          
          console.log(data)
        }
      })
      .catch((err) => {
        console.log(err.message);
      });
  }


  return (
    <>
      <div className="schedule_bg">
        <div className="schedule_table">
          <ScheduleComponent  height = '100%' 
          eventSettings={{ 
                dataSource: data, 
                fields : {
                  subject: {name: "subject"},
                  description: {name:"description"},
                  startTime: {name: "startTime"},
                  endTime: {name: "endTime"},
                  id: {name: "ID"},
                  isAllDay: {name: "isAllDay"}               
              }}}>
            <ResourcesDirective>
              <ResourceDirective field="userId" title='Customer Name' 
              name='Resources' textField="name" idField="_id" colorField="color" 
              dataSource={resourceDataSource }>
              </ResourceDirective>
            </ResourcesDirective>
            <Inject services={[Day, Week, WorkWeek, Month, Agenda]} />
          </ScheduleComponent>
        </div>
      </div>
      <button onClick={() => uploadData(data)}>
      Confirm</button>
    </>
  );
}
export default CoachSchedule;

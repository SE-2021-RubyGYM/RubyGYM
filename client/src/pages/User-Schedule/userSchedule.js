import React from "react";
import "./schedule.css";
import { useState, useEffect } from "react";
import axios from "axios";
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
  GroupModel,
} from "@syncfusion/ej2-react-schedule";

import { BackEndBaseURL } from "../../app/backend";

function UserSchedule() {
  var stringToColour = function (str) {
    var hash = 0;
    for (var i = 0; i < str.length; i++) {
      hash = str.charCodeAt(i) + ((hash << 5) - hash);
    }
    var colour = "#";
    for (var i = 0; i < 3; i++) {
      var value = (hash >> (i * 8)) & 0xff;
      colour += ("00" + value.toString(16)).substr(-2);
    }
    return colour;
  };
  const [data, setData] = useState([]);
  const [resourceDataSource, setResourceDataSource] = useState([
    { name: "Tung", _id: "6197bf691de54733bfca8997", color: "#ea7a57" },
    { name: "Son", _id: "2", color: "#357CD2" },
    { name: "Trang", _id: "3", color: "#7fa900" },
  ]);

  useEffect(() => {
    axios({
      method: "get",
      url: BackEndBaseURL + "/api/calendars/my_calendars",
      headers: {
        authorization: "Bearer " + localStorage.getItem("accessToken"),
      },
    })
      .then((res) => {
        if (res.status == 200) {
          setData(res.data.result);
        }
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, []);

  return (
    <>
      <div className="schedule_titlebar">
        {/* <div className="title">
          Ruby Gym & Fitness Schedule
        </div> */}
      </div>
      <div className="schedule_table">
        <ScheduleComponent
          height="100%"
          eventSettings={{
            dataSource: data,
            fields: {
              subject: { name: "subject" },
              description: { name: "description" },
              startTime: { name: "startTime" },
              endTime: { name: "endTime" },
              id: "ID",
              isAllDay: { name: "isAllDay" },
              recurrenceRule: { name: "recurrenceRule" },
              recurrenceID: { name: "recurrenceID" },
              recurrenceException: { name: "recurrenceException" },
            },
          }}
        >
          <ResourcesDirective>
            <ResourceDirective
              field="userId"
              title="Customer Name"
              name="Resources"
              textField="name"
              idField="_id"
              colorField="color"
              dataSource={resourceDataSource}
            ></ResourceDirective>
          </ResourcesDirective>
          <Inject services={[Day, Week, WorkWeek, Month, Agenda]} />
        </ScheduleComponent>
      </div>
    </>
  );
}
export default UserSchedule;

import React from "react";
import "./schedule.css";
import { useState, useEffect } from "react";
import { Notification2 } from "../../components/Notification/Notification";
import { toast } from "react-toastify";
import { element } from "prop-types";

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

function CoachSchedule() {
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
  const [data, setData] = useState([
    {
      ID: 1,
      subject: "Learning",
      startTime: new Date(2022, 0, 17, 1, 0),
      endTime: new Date(2022, 0, 17, 2, 0),
      userId: "6197bf691de54733bfca8997",
    },
    {
      ID: 2,
      subject: "Singing",
      startTime: new Date(2022, 0, 18, 3, 0),
      endTime: new Date(2022, 0, 18, 4, 0),
      userId: "6197bf691de54733bfca8997",
    },
    {
      ID: 3,
      subject: "Dancing",
      startTime: new Date(2022, 0, 19, 1, 0),
      endTime: new Date(2022, 0, 19, 3, 0),
      userId: "6197bf691de54733bfca8997",
    },
  ]);
  const [resourceDataSource, setResourceDataSource] = useState([
    { name: "Tung", _id: "6197bf691de54733bfca8997", color: "#ea7a57" },
    { name: "Son", _id: "2", color: "#357CD2" },
    { name: "Trang", _id: "3", color: "#7fa900" },
  ]);
  const [groupData, setGroupDate] = useState({ resources: ["Resource"] });

  useEffect(() => {
    axios({
      method: "get",
      url: BackEndBaseURL +"/api/calendars",
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
        console.log("failed author");
      });
    axios({
      method: "get",
      url: BackEndBaseURL +"/api/users/get_by_coach",
      headers: {
        authorization: "Bearer " + localStorage.getItem("accessToken"),
      },
    })
      .then((res) => {
        if (res.status == 200) {
          let tempSource = res.data.result;
          tempSource.forEach((element) => {
            element.color = stringToColour(element.name);
          });
          setResourceDataSource(tempSource);
        }
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, []);
  const uploadData = (data) => {
    axios({
      method: "post",
      url: BackEndBaseURL +"/api/calendars/refresh_calendars",
      headers: {
        authorization: "Bearer " + localStorage.getItem("accessToken"),
      },
      data: data,
    })
      .then((res) => {
        if (res.status == 200) {
          // var newData1= new Date(data.endTime);
          // var newData2= new Date(data.startTime);
          // console.log("hh");
          // console.log(data.startTime.getTime());
          // console.log(newData1);
          // console.log((newData2.getTime() - newData1.getTime())/1000/60);
          // console.log(data.endTime - data.startTime);
          // console.log(data.endHour - data.startHour);
          const notificationTypes = ["success", "error"];
          let mes = "T???o lich th??nh c??ng";
          let notificationName = "success";
          let msg = { success: mes, error: mes };
          toast(
            <Notification2
              type={notificationName}
              withIcon
              msg={msg[notificationName]}
            />,
            {
              autoClose: 4000,
              closeButton: false,
              hideProgressBar: true,
            }
          );
        } else {
          let mes = "L???i h??? th???ng";
          let notificationName = "error";
          let msg = { success: mes, error: mes };
          toast(
            <Notification2
              type={notificationName}
              withIcon
              msg={msg[notificationName]}
            />,
            {
              autoClose: 4000,
              closeButton: false,
              hideProgressBar: true,
            }
          );
        }
      })
      .catch((err) => {
        let mes = "L???i h??? th???ng";
        let notificationName = "error";
        let msg = { success: mes, error: mes };
        toast(
          <Notification2
            type={notificationName}
            withIcon
            msg={msg[notificationName]}
          />,
          {
            autoClose: 4000,
            closeButton: false,
            hideProgressBar: true,
          }
        );
      });
  };

  const workHourData = {
    highlight: true,
    start: '05:00',
    end: '20:00'
};

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
          startHour='05:00'
          endHour='20:00'
          workHours={workHourData}
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
      <div className="confirm-modification">
        <button
          onClick={() => {
            uploadData(data);
          }}
        >
          L??u 
        </button>
      </div>
    </>
  );
}
export default CoachSchedule;

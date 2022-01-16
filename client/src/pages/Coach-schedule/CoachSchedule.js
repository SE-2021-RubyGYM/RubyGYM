import React from "react";
import "./schedule.css";
import { useState } from "react";
import {
  Inject,
  ScheduleComponent,
  Day,
  Week,
  WorkWeek,
  Month,
  Agenda,
} from "@syncfusion/ej2-react-schedule";

function CoachSchedule() {
  const [data, setData] = useState([]);
  return (
    <div className="schedule_bg">
      <div className="schedule_table">
        <ScheduleComponent eventSettings={{ dataSource: data }}>
          <Inject services={[Day, Week, WorkWeek, Month, Agenda]} />
        </ScheduleComponent>
      </div>
      <button onClick={() => console.log(data)}>CLike me</button>
    </div>
  );
}
export default CoachSchedule;

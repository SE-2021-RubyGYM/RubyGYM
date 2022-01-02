import React from "react";
import "./schedule.css";

import {
  Inject,
  ScheduleComponent,
  Day,
  Week,
  WorkWeek,
  Month,
  Agenda,
} from "@syncfusion/ej2-react-schedule";

function Schedule_coach() {
  return (
    <div className="schedule_bg">
      <div className="schedule_table">
        <ScheduleComponent>
          <Inject services={[Day, Week, WorkWeek, Month, Agenda]} />
        </ScheduleComponent>
      </div>
    </div>
  );
}
export default Schedule_coach;

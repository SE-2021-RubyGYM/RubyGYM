import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import {
  Col,
  Row,
  Progress,
  Button, 
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  UncontrolledDropdown,
} from "reactstrap";
import Widget from "../../components/Widget/Widget.js";
import ApexActivityChart from "./components/ActivityChart.js";


import meal1 from "../../assets/dashboard/meal-1.svg";
import meal2 from "../../assets/dashboard/meal-2.svg";
import meal3 from "../../assets/dashboard/meal-3.svg";
import upgradeImage from "../../assets/dashboard/upgradeImage.svg";
import heartRed from "../../assets/dashboard/heartRed.svg";
import heartTeal from "../../assets/dashboard/heartTeal.svg";
import heartViolet from "../../assets/dashboard/heartViolet.svg";
import heartYellow from "../../assets/dashboard/heartYellow.svg";
import gymIcon from "../../assets/dashboard/gymIcon.svg";
import therapyIcon from "../../assets/dashboard/therapyIcon.svg";
import user from "../../assets/user.svg";
import statsPie from "../../assets/dashboard/statsPie.svg";
import axios from "axios";
import { useEffect } from "react";
import s from "./Dashboard.module.scss";
import { BackEndBaseURL } from "../../app/backend.js";

const Dashboard = () => {



  const [checkboxes, setCheckboxes] = useState([true, false]);

  const toggleCheckbox = (id) => {
    setCheckboxes((checkboxes) =>
      checkboxes.map((checkbox, index) => (index === id ? !checkbox : checkbox))
    );
  };

  const meals = [meal1, meal2, meal3];

  return (
    <div>
          <Widget className="widget-p-lg">
            <div className="d-flex">
              <img className={s.image} src={user} alt="..." />
              <div className={s.userInfo}>
                <p className="headline-3">Christina Karey</p>
                <p className="body-3 muted">Brasil</p>
              </div>
            </div>
            <div className={s.userParams}>
              <div className="d-flex flex-column">
                <p className="headline-3">63 kg</p>
                <p className="body-3 muted">Weight</p>
              </div>
              <div className="d-flex flex-column">
                <p className="headline-3">175 sm</p>
                <p className="body-3 muted">Height</p>
              </div>
              <div className="d-flex flex-column">
                <p className="headline-3">28 y.</p>
                <p className="body-3 muted">Age</p>
              </div>
            </div>
            <div className={s.goals}>
              <div className={s.goalsTitle}>
                <p className="headline-3">Your Goals</p>
                <UncontrolledDropdown>
                  <DropdownToggle caret>&nbsp; Weekly &nbsp;</DropdownToggle>
                  <DropdownMenu>
                    <DropdownItem>Daily</DropdownItem>
                    <DropdownItem>Weekly</DropdownItem>
                    <DropdownItem>Monthly</DropdownItem>
                  </DropdownMenu>
                </UncontrolledDropdown>
              </div>
              <div className="d-flex flex-column mt-3">
                <div className={s.activity}>
                  <p className="body-2">Sleep</p>
                  <p className="body-2">
                    92<span className="body-3 muted"> / 160</span>
                  </p>
                </div>
                <Progress
                  color="secondary-red"
                  className="progress-xs"
                  value={60}
                />
              </div>
              <div className="d-flex flex-column mt-3">
                <div className={s.activity}>
                  <p className="body-2">Sport</p>
                  <p className="body-2">
                    40<span className="body-3 muted"> / 50</span>
                  </p>
                </div>
                <Progress
                  color="secondary-yellow"
                  className="progress-xs"
                  value={80}
                />
              </div>
              <div className="d-flex flex-column mt-3">
                <div className={s.activity}>
                  <p className="body-2">Water</p>
                  <p className="body-2">
                    25<span className="body-3 muted"> / 40</span>
                  </p>
                </div>
                <Progress
                  color="secondary-cyan"
                  className="progress-xs"
                  value={40}
                />
              </div>
            </div>
            <p className="headline-3">Appointments</p>
            <div className={`mt-3 ${s.widgetBlock}`}>
              <div className={s.widgetBody}>
                <div className="d-flex">
                  <img className="img-fluid mr-2" src={gymIcon} alt="..." />
                  <div className="d-flex flex-column">
                    <p className="body-2">02.11 , 12:00 - 13:00</p>
                    <p className="body-3 muted">Yoga, Airplace Gym</p>
                  </div>
                </div>
                <div className="checkbox checkbox-primary">
                  <input
                    id="checkbox0"
                    type="checkbox"
                    className="styled"
                    checked={checkboxes[0]}
                    onChange={() => toggleCheckbox(0)}
                  />
                  <label htmlFor="checkbox0" />
                </div>
              </div>
            </div>
            <div className={`mt-3 ${s.widgetBlock}`}>
              <div className={s.widgetBody}>
                <div className="d-flex">
                  <img className="img-fluid mr-2" src={therapyIcon} alt="..." />
                  <div className="d-flex flex-column">
                    <p className="body-2">03.11 , 16:00 - 17:30</p>
                    <p className="body-3 muted">Therapy</p>
                  </div>
                </div>
                <div className="checkbox checkbox-primary">
                  <input
                    id="checkbox1"
                    type="checkbox"
                    className="styled"
                    checked={checkboxes[1]}
                    onChange={() => toggleCheckbox(1)}
                  />
                  <label htmlFor="checkbox1" />
                </div>
              </div>
            </div>
            
          </Widget>
        
    </div>
  );
};

export default Dashboard;

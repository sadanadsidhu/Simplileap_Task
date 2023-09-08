import React from "react";
import "./TaskTodo.css";
import { TbAlertOctagonFilled } from "react-icons/tb";
const TaskTodo = () => {
  return (
    <div className="todo-task-list">
      <div className="todo-list-bar">
        <div className="todo">
          <h3 className="task">Task To Do</h3>
        </div>
        <div className="view-al">
          <p>View All</p>
        </div>
      </div>
      <div className="date">
        <div className="meeting">
          <p className="nove">30 Nov 2021</p>
          <TbAlertOctagonFilled className="alert" />
          <p className="partner">Metting with partners</p>
        </div>
      </div>
      <div className="date">
        <div className="meeting">
          <p className="nove">30 Nov 2021</p>
          <TbAlertOctagonFilled className="alert" />
          <p className="partner">Metting with partners</p>
        </div>
      </div>
      <div className="date">
        <div className="meeting">
          <p className="nove">30 Nov 2021</p>
          <TbAlertOctagonFilled className="alert" />
          <p className="partner">Metting with partners</p>
        </div>
      </div>
      <div className="date">
        <div className="meeting">
          <p className="nove">30 Nov 2021</p>
          <TbAlertOctagonFilled className="alert" />
          <p className="partner">Metting with partners</p>
        </div>
      </div>
      <div className="date">
        <div className="meeting">
          <p className="nove">30 Nov 2021</p>
          <TbAlertOctagonFilled className="alert" />
          <p className="partner">Metting with partners</p>
        </div>
      </div>
      <div className="date">
        <div className="meeting">
          <p className="nove">30 Nov 2021</p>
          <TbAlertOctagonFilled className="alert" />
          <p className="partner">Metting with partners</p>
        </div>
      </div>
      
      <input className="input" type="text" placeholder="Add new Task"/>
      <img className="im" src="Icon3.png" alt="" />
    </div>
  );
};

export default TaskTodo;

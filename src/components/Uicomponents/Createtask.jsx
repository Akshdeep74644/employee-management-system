import React, { useState, useContext } from "react";
import {AuthContext} from '../../Context/AuthProvider'

function Createtask() {

    const [userdata, setUserData] = useContext(AuthContext)

  const [title, setTitle] = useState("");
  const [date, setDate] = useState("");
  const [asignto, setAsignto] = useState("");
  const [category, setCategory] = useState("");
  const [description, setDescription] = useState("");
  const [newtask, setNewTask] = useState({});


  const handletaskSubmit = (e) => {
    e.preventDefault();

    const newTaskdetails = { title, date, asignto, category, description,newTask:true, active:false, complete:false, failed:false };
    setNewTask(newTaskdetails);

    const employeeData = userdata;
    console.log(employeeData);
    
    employeeData.forEach((elem) => {
        if(asignto == elem.name){
            console.log(elem)
            elem.tasks.push(newtask)
            elem.taskcount.newTask = elem.taskcount.newTask + 1;
        }
    });

    setUserData(employeeData)
    console.log(employeeData);
  };
  return (
    <>
      <div className="w-full h-[70%] px-10 rounded-3xl mt-10 text-[#f9f9f9] bg-zinc-900">
        <form
          onSubmit={(e) => {
            handletaskSubmit(e);
          }}
          className="flex flex-row justify-between items-center w-full  h-full "
        >
          <div className="w-1/2 flex flex-col gap-7">
            <div className="flex gap-3 flex-col">
              <h2 className="text-2xl">Task Title</h2>
              <input
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                className="w-[70%] py-2 px-3 outline-none border-[1px]  border-[#f9f9f9] rounded-md bg-transparent"
                placeholder="Enter task title"
              />
            </div>
            <div className="flex gap-3 flex-col">
              <h2 className="text-2xl">Date</h2>
              <input
                value={date}
                onChange={(e) => setDate(e.target.value)}
                className="w-[70%] py-2 px-3 outline-none border-[1px]  border-[#f9f9f9] rounded-md bg-transparent"
                type="date"
              />
            </div>
            <div className="flex gap-3 flex-col">
              <h2 className="text-2xl">Asign to</h2>
              <select
                value={asignto}
                onChange={(e) => setAsignto(e.target.value)}
                className="w-[70%] py-2 px-3 outline-none border-[1px]  border-[#f9f9f9] rounded-md bg-transparent"
              >
                <option value="Select" selected>
                  Select
                </option>
                <option value="Akshdeep Singh">Akshdeep Singh</option>
                <option value="Jaspreet Singh">Jaspreet Singh</option>
              </select>
            </div>
            <div className="flex gap-3 flex-col">
              <h2 className="text-2xl">Category</h2>
              <input
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                className="w-[70%] py-2 px-3 outline-none border-[1px]  border-[#f9f9f9] rounded-md bg-transparent"
                type="text"
                placeholder="Enter the task category"
              />
            </div>
          </div>
          <div className="w-1/2 flex flex-col gap-5">
            <div className="flex gap-3 flex-col">
              <h2 className="text-2xl">Description</h2>
              <textarea
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                className="w-[100%] py-2 px-3 outline-none border-[1px]  border-[#f9f9f9] rounded-md bg-transparent"
                placeholder="Describe the task..."
                rows={12}
              ></textarea>
            </div>
            <button className="bg-green-600 w-full py-5 rounded-lg text-2xl">
              Create it
            </button>
          </div>
        </form>
      </div>
    </>
  );
}

export default Createtask;

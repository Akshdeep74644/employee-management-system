 import React from 'react';
 import Header from '../Uicomponents/Header';
 import Taskstatus from '../Uicomponents/Taskstatus';
 import Tasklist from '../Tasklist/Tasklist';
 import Credit from '../Uicomponents/Credit';
 
 function EmployeeDashboard(props) {
   return (
     <>
     <div className='w-full h-screen p-10'>
      <Header changeUser={props.changeUser}  headername={props.employeedata.name} />
      <Taskstatus employeeTaskStatusData={props.employeedata} />
      <Tasklist employeeTaskListData={props.employeedata} />
      <Credit panel="Empolyee Dashboard" />
     </div>
     </>
   )
 }
 
 export default EmployeeDashboard
 
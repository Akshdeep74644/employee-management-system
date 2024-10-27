const Employees = [
  {
    id: 1,
    name: "Akshdeep Singh",
    email: "aksh@aksh.com",
    password: "123",
    taskcount: {
      active: 1,
      newTask: 1,
      completed: 1,
      failed: 1
    },
    tasks: [
      {
        id: 1001, // Unique task ID for employee 1
        active: true,
        newTask: false,
        completed: false,
        failed: false,
        title: "Task 1 for Employee 1",
        description: "Detailed description of task 1",
        date: "2024-10-01", // Replace with actual date format
        category: "Development",
      },
      // Add more tasks with unique IDs (1002, 1003, etc.)
      {
        id: 1002,
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        title: "Task 2 for Employee 1",
        description: "Another detailed description",
        date: "2024-10-02",
        category: "Testing",
      },
      {
        id: 1003,
        active: false,
        newTask: false,
        completed: false,
        failed: true,
        title: "Task 3 for Employee 1",
        description: "Another detailed description",
        date: "2024-10-03",
        category: "Design",
      },
      {
        id: 1004,
        active: false,
        newTask: true,
        completed: false,
        failed: false,
        title: "Task 4 for Employee 1",
        description: "Another detailed description",
        date: "2024-10-04",
        category: "Producntion",
      },
    ],
  },
  {
    id: 1,
    name: "Jaspreet Singh",
    email: "jassy@jassy.com",
    password: "123",
    taskcount: {
      active: 1,
      newTask: 1,
      completed: 1,
      failed: 1
    },
    tasks: [
      {
        id: 1001, // Unique task ID for employee 1
        active: true,
        newTask: false,
        completed: false,
        failed: false,
        title: "Task 1 for Employee 1",
        description: "Detailed description of task 1",
        date: "2024-10-01", // Replace with actual date format
        category: "Development",
      },
      // Add more tasks with unique IDs (1002, 1003, etc.)
      {
        id: 1002,
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        title: "Task 2 for Employee 1",
        description: "Another detailed description",
        date: "2024-10-02",
        category: "Testing",
      },
      {
        id: 1003,
        active: false,
        newTask: false,
        completed: false,
        failed: true,
        title: "Task 3 for Employee 1",
        description: "Another detailed description",
        date: "2024-10-03",
        category: "Design",
      },
      {
        id: 1004,
        active: false,
        newTask: true,
        completed: false,
        failed: false,
        title: "Task 4 for Employee 1",
        description: "Another detailed description",
        date: "2024-10-04",
        category: "Producntion",
      },
    ],
  },

];

const Manager = [
  {
    id: 1,
    name: "Manager",
    email: "admin@123.com",
    password: "123",
  },
];

export const setLocalStorage = () => {
  localStorage.setItem("employee", JSON.stringify(Employees));
  localStorage.setItem("admin", JSON.stringify(Manager));
};

export const getLocalStorage = () => {
  const employeedata = JSON.parse(localStorage.getItem("employee"));
  const managerdata = JSON.parse(localStorage.getItem("admin"));

  return {employeedata, managerdata}
};

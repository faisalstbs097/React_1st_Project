localStorage.clear()
const employees = [
  {
    id: 1,
    firstName: "John",
    email: "employee1@example.com",
    password: "123",
    tasks: [
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        taskTitle: "Prepare Report",
        taskDescription: "Prepare the monthly sales report",
        taskDate: "2024-12-20",
        category: "Sales",
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        taskTitle: "Team Meeting",
        taskDescription: "Attend the weekly team meeting",
        taskDate: "2024-12-15",
        category: "Meetings",
      },
      {
        active: true,
        newTask: false,
        completed: false,
        failed: false,
        taskTitle: "Client Follow-Up",
        taskDescription: "Follow up with client regarding project updates",
        taskDate: "2024-12-18",
        category: "Client Relations",
      },
    ],
    taskCount: {
      active: 2,
      new: 1,
      completed: 1,
      failed: 0,
    },
  },
  {
    id: 2,
    firstName: "Emma",
    email: "employee2@example.com",
    password: "123",
    tasks: [
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        taskTitle: "Update Inventory",
        taskDescription: "Check and update inventory levels",
        taskDate: "2024-12-17",
        category: "Inventory",
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        taskTitle: "Monthly Audit",
        taskDescription: "Complete the financial audit for November",
        taskDate: "2024-12-14",
        category: "Finance",
      },
      {
        active: false,
        newTask: true,
        completed: false,
        failed: false,
        taskTitle: "Onboard New Hire",
        taskDescription: "Conduct onboarding for the new marketing assistant",
        taskDate: "2024-12-19",
        category: "HR",
      },
    ],
    taskCount: {
      active: 1,
      new: 2,
      completed: 1,
      failed: 0,
    },
  },
  {
    id: 3,
    firstName: "Sophia",
    email: "employee3@example.com",
    password: "123",
    tasks: [
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        taskTitle: "Design Brochure",
        taskDescription: "Create a brochure for the upcoming product launch",
        taskDate: "2024-12-21",
        category: "Design",
      },
      {
        active: false,
        newTask: false,
        completed: false,
        failed: true,
        taskTitle: "Fix Bug #123",
        taskDescription: "Resolve the critical issue in the payment system",
        taskDate: "2024-12-16",
        category: "Development",
      },
    ],
    taskCount: {
      active: 1,
      new: 1,
      completed: 0,
      failed: 1,
    },
  },
  {
    id: 4,
    firstName: "Liam",
    email: "employee4@example.com",
    password: "123",
    tasks: [
      {
        active: true,
        newTask: false,
        completed: false,
        failed: false,
        taskTitle: "Plan Webinar",
        taskDescription: "Organize a webinar for the company's new software",
        taskDate: "2024-12-23",
        category: "Marketing",
      },
      {
        active: false,
        newTask: true,
        completed: false,
        failed: false,
        taskTitle: "Research Competitors",
        taskDescription: "Gather data on competitors' new product features",
        taskDate: "2024-12-20",
        category: "Research",
      },
    ],
    taskCount: {
      active: 1,
      new: 1,
      completed: 0,
      failed: 0,
    },
  },
  {
    id: 5,
    firstName: "Olivia",
    email: "employee5@example.com",
    password: "123",
    tasks: [
      {
        active: false,
        newTask: true,
        completed: false,
        failed: false,
        taskTitle: "Prepare Presentation",
        taskDescription: "Create slides for the quarterly review meeting",
        taskDate: "2024-12-18",
        category: "Management",
      },
      {
        active: true,
        newTask: false,
        completed: false,
        failed: false,
        taskTitle: "Schedule Meeting",
        taskDescription: "Set up a meeting with the operations team",
        taskDate: "2024-12-19",
        category: "Coordination",
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        taskTitle: "Submit Timesheet",
        taskDescription: "Submit timesheet for December",
        taskDate: "2024-12-14",
        category: "HR",
      },
    ],
    taskCount: {
      active: 1,
      new: 1,
      completed: 1,
      failed: 0,
    },
  },
];

const admin = [
  {
    id: 1,
    email: "admin@example.com",
    password: "123",
  },
];


  export const setLocalStorage = () => {
    localStorage.setItem('employees', JSON.stringify(employees)); // Remove extra space and colon
    localStorage.setItem('admin', JSON.stringify(admin));  
    
    // Remove extra space and colon
  };
  
  export const getLocalStorage = () => {
    const employees = JSON.parse(localStorage.getItem('employees')); // Use matching key
    const admin = JSON.parse(localStorage.getItem('admin'));         // Use matching key
  
    return{employees, admin};
  };

  
 
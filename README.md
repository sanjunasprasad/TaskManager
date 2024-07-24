
# Task Manager App

This task management application allows users to create, update, and manage tasks within different columns with drag-and-drop functionality. It includes user authentication with email and Google login, and ensures that all tasks have server-side validation. The application features a clean, intuitive user interface built with React, and a robust back end using Node.js and Express, with data stored in a MongoDB database. Additionally, it includes error handling and basic security measures.


## Features

- Login Page:
  Form for user login.
  Option for Google login.
- Sign Up Page:
  Form for user registration.
- Dashboard:
  Display columns and tasks.
  Drag-and-drop interface for moving tasks between columns.
  Buttons for creating new tasks .
- Task Details Modal:
  Display and edit task details.
  Options to update or delete tasks.



## Deployment

- Deployment of frontend: Vercel
- Deployment of backend: AWS ec2





### Server developement tools,libraries and technologies used

Node.js and express.js

MongoDB and mongoose (Database and Schema modeling)

CORS (To securely communicate with resources from other domain)

JWT (JSON Web Token) Facilitates secure authentication by encoding user information in a token that can be verified and trusted, allowing for stateless and scalable authentication processes.

RESTful API handling CRUD operations for tasks.

Error Handling Middlewares - Handle and control the errors more efficiently.

Auth Middlewares - Enhance security by verifying user authentication and authorization before allowing access to specific routes or resources.


MVC Architecture Divides software into Model (data), View (user interface), and Controller (logic) components to enhance modularity and maintainability in application development.


### Client developement tools,libraries and technologies used

React + Create-reat-app

Tailwind CSS

Drag-and-drop functionality using react-beautiful-dnd.

Formik and Yup: Leveraged for form handling and validation, improving user input control and data integrity.

Sweetalert-(For showing pop-ups , custom messages to the user.)

axiosInstance -Improved, efficienct and reliable in fetching data from APIs




### Optimization Techniques Used

Component Separation: Enhances reusability and facilitates easier loading by breaking down components into smaller, manageable pieces.

Protected Routes: Ensures that only authenticated users can access certain parts of the application, improving security and user experience by preventing unauthorized access to sensitive information or functionality.


## Installation of frontend and backend using git clone
step 1.clone project from github by using following link 
- frontend: 
git clone https://github.com/sanjunasprasad/TaskManager_frontend.git
- backend: 
git clone https://github.com/sanjunasprasad/TaskManager_backend.git

step 2.In the project directory terminal, Install dependencies using :
Front-End
cd client
npm install

Back-End
cd server
npm install

stpe 3.
Start the development server using `npm start`





## Installation via github repository file download
step 1. download project via this link:
frontend:
https://github.com/sanjunasprasad/TaskManager_frontend
backend:
https://github.com/sanjunasprasad/TaskManager_backend


step 2. unzip the file, and  open project in vs code.
Backend and frontend are in seperate folders
  
step 3. Install dependencies using npm install
In the project directory terminal, you can run: 
cd server
`npm install`
`npm start`

step 4. In the project directory terminal, you can run: 
cd client
`npm install`
`npm start`

step 5. by following all these steps , site will be running  locally in your machine


## Active Link
https://task-manager-pink-six.vercel.app/
    


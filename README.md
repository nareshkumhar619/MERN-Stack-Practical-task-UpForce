<h1 align="center">UpForce System (MERN)</h1>

# Features
#### CRUD operations with pagination support.
####  Search API for user information.
####  Export to CSV functionality.
####  Responsive design for both mobile and desktop.
#### Multiple routing (List view, Add form page, Edit form page, View details page).
#### Form field validation.
#### Proper notification handling for success and failure.

<br>

## Installation


Step 1 :  Clone the repository in your local system
Step 2 :  Open terminal `VSCode / GitBash / powershell`
Step 3 :  Type `cd backend`
Step 4 :  npm install / npm i
```

## Start the Backend server 

node index.js

nodemon start

nodemon index.js

<br>

##  MVC Structure

```
├── index.js
├── configs
|    └── db.js
├── models
|    └── user.model.js
├── routes
|    └── user.route.js
|    └── exportCSV.route.js
├── middleware
|    └── 
├──controllers
|    └── user.controller.js
|    └── exportCSV.controller.js
```

Note: 

- Before doing anything first create `.env` file and put `port` , `mongoURl`.
- `port` is for listening the server.
- `mongoURl` is for running database and store your data in database so put your mongo link.

<br>

## Endpoints

<table>
    <thead>
        <tr>
            <th>METHOD</th>
            <th>ENDPOINT</th>
            <th>DESCRIPTION</th>
            <th>STATUS CODE</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>POST</td>
            <td>/api/user</td>
            <td>This endpoint should allow users to add the data.</td>
            <td>200</td>
        </tr>
        <tr>
            <td>GET</td>
            <td>/api/user/page/:page</td>
            <td>This endpoint should allow users to view the data according the page.</td>
            <td>200</td>
        </tr>
        <tr>
            <td>GET</td>
            <td>/api/user/:id</td>
            <td>This endpoint should allow users to view the single data according to their choice.</td>
            <td>200</td>
        </tr>
        <tr>
            <td>PATCH</td>
            <td>/api/user/:id</td>
            <td>This endpoint should allow users to edit own data by their id.</td>
            <td>200</td>
        </tr>
        <tr>
            <td>DELETE</td>
            <td>/api/user/:id</td>
            <td>This endpoint should allow users to delete own data by their id.</td>
            <td>200</td>
        </tr>
        <tr>
            <td>GET</td>
            <td>/api/export-csv</td>
            <td>This endpoint should allow users to download the content all data</td>
            <td>200</td>
        </tr>
    </tbody>
</table>

<br>


## Backend Deployed Link 

<br>

<a href="https://upforce-backend.onrender.com"><strong>Render</strong></a>

<br>

<details>
<summary>Frontend Docs</summary>

<br>

# UpForce Frontend System

<br>

##  Folder Structure

```
├── public
|    └── favicon.ico
|    └── index.html
|    └── logo192.png
|    └── logo512.png
|    └── manifest.json
├── src
|    └── components
|    |      └── ActionMenu.jsx  
|    |      └── Navbar.jsx  
|    |      └── SingleUserCard.jsx  
|    |      └── Skelton.jsx  
|    |      └── StatusMenu.jsx  
|    |      └── UserCard.jsx  
|    |      └── UserUpdateModal.jsx  
|    └── customHook
|    |      └── UseToast.jsx       
|    └── pages
|    |      └── AddDetails.jsx  
|    |      └── Home.jsx  
|    |      └── SingleView.jsx  
|    └── routes
|    |      └── AllRoutes.jsx  
|    └── styles
|    |      └── AddDetails.css  
|    |      └── Home.css  
|    |      └── Navbar.css
|    |      └──ActionMenu.css
|    └── App.css
|    └── App.js
|    └── App.test.js
|    └── index.css
|    └── index.js
|    └── logo.svg
|    └── reportWebVital.js
|    └── setupTests.js
├── styles
|    └── index.css
|    └── product.css


<br>

## Installation

```js
Step 1 :  Clone the repository in your local system
Step 2 :  Open terminal `VSCode / GitBash / powershell`
Step 3 :  Type `cd frontend`
Step 4 :  npm install / npm i
```

## Start the Frontend 
 npm start
```

<br>

Note : `You can use any one of them.`

<br>

## API endpoints with Base Url

<br>

### BaseUrl : `https://upforce-backend.onrender.com`

<br>

## Frontend Deployed Link

<br>

<a href="https://mern-stack-practical-task-up-force.vercel.app/"><strong>Vercel</strong></a>

<br>
</details>
```
# ScreenShots

![Home Page](https://github.com/nareshkumhar619/MERN-Stack-Practical-task-UpForce/blob/main/frontend/assets/Screenshot%20(7).png)

![Single User View](https://github.com/nareshkumhar619/MERN-Stack-Practical-task-UpForce/blob/main/frontend/assets/Screenshot%20(9).png)

![Download CSV of User Data](https://github.com/nareshkumhar619/MERN-Stack-Practical-task-UpForce/blob/main/frontend/assets/Screenshot%20(11).png)

![User Update](https://github.com/nareshkumhar619/MERN-Stack-Practical-task-UpForce/blob/main/frontend/assets/Screenshot%20(10).png)

![Add New User](https://github.com/nareshkumhar619/MERN-Stack-Practical-task-UpForce/blob/main/frontend/assets/Screenshot%20(8).png)




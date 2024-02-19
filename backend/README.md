# UpForce Backend System

## About

<br>

This is a simple application that displays information about users like their name, email, profile, mobile number etc. You can also view particular user's information and also update that and delete that. Also you can change status and pagination also available.

<br>

## Clone Repository

```
https://github.com/sainRaghuveer/UpForce-assignment.git
```

## Installation

```js
Step 1 :  Clone the repository in your local system
Step 2 :  Open terminal `VSCode / GitBash / powershell`
Step 3 :  Type `cd backend`
Step 4 :  npm install / npm i
```

## Start the Backend server 

```js
npm run server

npm run start

node index.js

nodemon start

nodemon index.js
```

Note : You can use any of them 

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

## Schema Design

<br>

<h3><strong>User Schema</strong><h3>

```js
{
    firstName:{
        type:String,
        required:true,
    },
    lastName:{
        type:String,
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    mobile:{
        type:String,
        required:true,
        unique:true
    },
    gender:{
        type:String,
    },
    status:{
        type:String,
        default:"active"
    },
    profile:{
        type:String,
        default:"https://img.freepik.com/premium-vector/avatar-profile-icon_188544-4755.jpg"
    },
    location:{
        type:String,
    }
}
```

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

## Presentation Video Link

<br>

<a href="">UpForce Backend Presentation</a>

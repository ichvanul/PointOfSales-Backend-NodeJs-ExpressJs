<p align="center">
<a href="https://nodejs.org/">
  <img src="https://cdn-images-1.medium.com/max/871/1*d2zLEjERsrs1Rzk_95QU9A.png">
</a>
</p>

<h1 align="center">
Point of Sales Backend RESTFulAPI
</h1>

<p align="center">
<img src="https://img.shields.io/badge/Node.js-v12.14.1-blue">
<img src="https://img.shields.io/badge/Express.js-v4.17.1-brightgreen">
<img src="https://img.shields.io/badge/Bcrypt-v4.0.1-red"
</p>

## Table of Contents

- [Introduction](#introduction)
- [How To Install](#how-to-install)
- [List of Endpoints](#list-of-endpoints)
- [Related Project](#related-project)
- [Contact](#contact)

## Introduction

PointOfSales-RESTfulAPI is a PointOfSales systems with restful api. The main features are:

- Login and Register with JWT.
- User, Menu, Category database.
- CRUD User, Menu, and Category.
- File Image Upload on Menu.
- Search menu by name.
- Sort menu by name and category.
- Menu page pagination.
- Allowed CORS.
- Reporting on income today, yearly, and orders weekly.
- Redis with default port 6379.

The PointOfSales-RESTfulAPI is written in Node Js with Express framework, it uses MySQL as data storage back-end and has a simple but intuitive user interface.

## How to Install

1. Clone this repository

   ```
   $ git clone https://https://github.com/ichvanul/PointOfSales-Backend-NodeJs-ExpressJs.git
   ```

2. Create a database and import file to database sql.

3. Install all depedencies on the package.json

   ```
   $ npm install
   ```

4. Create `.env` file with environment variable in line with following:

   ```
   SERVER_PORT = 1000
   DB_HOST = "localhost"
   DB_USER = "your-user"
   DB_PASS = "your-password"
   DB_NAME = "your-database"
   PRIVATE_KEY = "your-private-key"
   URL = "http://localhost:1000/"
   ```

5. Run
   ```
   $ npm start
   ```

## List of Endpoints

**USERS**

- **[GET]** /api/v1/users

  Get all users

- **[GET]** /api/v1/users/:id_user

  Get user detail

- **[PATCH]** /api/v1/users/:id_user

  Update user data

- **[DELETE]** /v1/users/:id_user

  Delete user

- **[POST]** /api/v1/users/register

  Register

  **Sample Data**

  ```
  name: your-name
  email: your-email
  password: your-password
  ```

- **[POST]** /api/v1/users/login

  Login user

  **Sample Data**

  ```
  email: your-email
  password: your-password
  ```

- **[POST]** /api/v1/users/logout

  Logout user

**CATEGORY**

- **[GET]** /api/v1/category

  Get all category

- **[GET]** /api/v1/category/:id_category

  Get category detail

- **[PATCH]** /api/v1/category/:id_category

  Update category data

  **Sample Data**

  ```
  name: your-name-category
  ```

- **[DELETE]** /v1/category/:id_category

  Delete category

- **[POST]** /api/v1/category

  Insert category

  **Sample Data**

  ```
  name: your-name-category
  ```

**MENU**

- **[GET]** /api/v1/menu

  Get all menu

- **[GET]** /api/v1/book/:id_menu

  Get menu detail

- **[PATCH]** /api/v1/book/:id_menu

  Update menu data

- **[DELETE]** /v1/book/:id_menu

  Delete menu

- **[POST]** /api/v1/menu

  Insert menu

## Related Project

- [`PointOfSales-Frontend-VueJs`](https://github.com/ichvanul/PointOfSales-VueJs.git)

## Contact

If you want to contact me you can reach me at <ichvanulyp@gmail.com>.

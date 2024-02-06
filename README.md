# Developing Bit by Bit 

A website that stores code snippets and step-by-step instructions on how to develop certain features. 

## Motivation

After following tutorials on MERN Full Stack development, I realised I had a problem. Developing certain programs like (MERN Full stack web app) require numerous similar steps. Keeping a reference to common code snippets as well as steps to reproduce certain features will make development of personal projects faster in the future. Additionally, if it is a website that is deployed online, it can be accessed from anywhere. 

(Currently not deployed online)

## Run Locally

Clone the project

```bash
  git clone https://github.com/EugeneOYZ1203n/Developing-Bit-by-Bit.git
```

Go to the project directory (Use 2 Terminals)

```bash
  cd my-project
```

Install dependencies

```bash
  npm install
```

Start the server (Using Terminal 1)

```bash
  cd server
  npm run dev
```

Start the client (Using Terminal 2)

```bash
  cd client
  npm run dev
```

Create a .env file in /server and include the following constants:
```
ADMIN_USERNAME=admin
ADMIN_PASSWORD=admin
ADMIN_ID=1

GUEST_USERNAME=guest
GUEST_PASSWORD=guest
GUEST_ID=2

JWT_SECRET=some_long_secret

MONGO_URI=mongoDB_URI

PORT=5000
```

Modify the config.js file in /client/src/api/config.js to change the API URL

## Showcase

![](https://github.com/EugeneOYZ1203n/Developing-Bit-by-Bit/blob/main/1-ProtectedRoutes.gif)

Protected Route for Content page. Redirects users without token to the login page. 

![](https://github.com/EugeneOYZ1203n/Developing-Bit-by-Bit/blob/main/2-LoginPage.gif)

Login Page sends a GET Request to express api to receive a token and access rest of the website. Token is used to call all other API Requests

![](https://github.com/EugeneOYZ1203n/Developing-Bit-by-Bit/blob/main/3-ReadRequest.gif)

Data from MongoDB is sent from backend to frontend every time the data in MongoDB is updated (Create / Update / Delete requests) and when the page loads using React Query

![](https://github.com/EugeneOYZ1203n/Developing-Bit-by-Bit/blob/main/4-Resizable.gif)

UI is resizable, with hidden scrollbars on both the side bar and main content panel. 

![](https://github.com/EugeneOYZ1203n/Developing-Bit-by-Bit/blob/main/5-Sidebar.gif)

Sidebar has navigation to all content items, with accordion menus for each chapter. There is also a search bar that accepts search terms separated by "," (e.g "CSS, Back End" filters for content containing "CSS" or "Back End"). 

![](https://github.com/EugeneOYZ1203n/Developing-Bit-by-Bit/blob/main/6-AddingUpdatingFunctionality.gif)

On the Sidebar, there is an add button to create content items and add it to MongoDB. Beside the title of every content item, there is also a edit button to edit the content of that item. 

![](https://github.com/EugeneOYZ1203n/Developing-Bit-by-Bit/blob/main/7-DeleteFunctionality.gif)

There is also a delete button beside all content items which triggers a Confirmation popup. It will delete the content item from MongoDB and update the page. 

![](https://github.com/EugeneOYZ1203n/Developing-Bit-by-Bit/blob/main/8-AdminVSGuest.gif)

The login API also provides an isAdmin variable which is used to toggle the display of add, edit, delete buttons. This isAdmin variable changes depending on the username and password sent to the backend. Invalid usernames and passwords will lead to an error message as well. 
Moreover, if a user who is not an Admin manages to enable the buttons or makes calls to the API, the token they use will be checked on the server as well, preventing them from using it.

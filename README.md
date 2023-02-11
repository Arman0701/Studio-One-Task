# Studio One Task (3rd stage)
## News web application
---

## Introduction
#### This project is for demonstration purposes. It is a small website with a simple user interface. The project is based on ReactJS, Redux-Toolkit, and JSON-Server is used as a server. In addition to the mentioned, SASS, react-router-dom, react-spring (animations) and reactjs-popup (modals) were also used as additional tools.

---
### Screenshots

<img src="https://github.com/Arman0701/Studio-One-Task/blob/main/screenshots/homepage.png" alt="homePage"  />

<img src="https://github.com/Arman0701/Studio-One-Task/blob/main/screenshots/loginpage.png" alt="newsPage" />

<img src="https://github.com/Arman0701/Studio-One-Task/blob/main/screenshots/newspage.png" alt="loginPage" />

<img src="https://github.com/Arman0701/Studio-One-Task/blob/main/screenshots/registerpage.png" alt="registerPage" />

<img src="https://github.com/Arman0701/Studio-One-Task/blob/main/screenshots/profilepage.png" alt="profilePage" />


---
#### In order to familiarize yourself with this project and analyze it in a more convenient way, I suggest you perform a few simple steps, after which the project will be completely installed on your computer.

---

## Getting started

#### Follow these few simple steps to install the project

1. If you already have Visual Studio Code installed on your computer, you can skip this step. Alternatively, to install it, visit the official website. 

> * [Download Visual Studio Code](https://code.visualstudio.com/download)

2. After installation, make a new empty directory and open that in VS Code.Then open Terminal and type the following commands there․

```bash
cd your/new/directory

git clone https://github.com/Arman0701/Studio-One-Task.git
```

3. After project loading you need to initialize it. For that type this command in your teminal.
```bash
npm install
```

4. After waiting for npm to install the relevant necessary files, enter the following command․
```bash
npm start
```
5. Then you need to open another terminal window and enter the following in it.
```bash
npm run server
```

> The last 2 commands were necessary for the successful launch of the project. The first one starts the frontend part (ReactJS), and the last one starts the local server as a backend based on JSON-server.


#### After this steps you have a working project with local backend on your computer.

> P.S. The application can be compiled with warnings, but they do not interfere with his work․ Seriously though, thanks for understanding.

--- 

## Project in details

#### Let us try to highlight the key points of the project structure. 

	- Folder Structure
	- Routing in React
	- State management and asynchronous operations with Redux-toolkit
	- Routes in database
	- Features

---
#### Folder Structure

#### I think it's worth starting the discussion with the contents of the src folder, since everything outside of that has a standard structure․

	|- components
	|	|- Header
	|	|- Routes Wrapper
	|- helpers
	|	|- any functions for help
	|- hocs 
	|	|- PrivateRoute.jsx
	|- pages
	|	|- LoginPage
	|	|- MainPage
	|	|	|- Controls
	|	|	|- Paginate
	|	|- NewsPage
	|	|	|- Article
	|	|	|- SearchAndFilter
	|	|- ProfilePage
	|	|	|- DeleteAccountModal
	|	|	|- EditPostModal
	|	|	|- NewPostModal
	|	|- RegisterPage
	|- redux-store
	|	|- store.js
	|	|- mainPageSlice.js
	|	|- newsSlice.js
	|	|- userSlice.js
	|- sass
	|	|- variables.scss

#### As you can notice some folders have nested folders which in turn contain other folders. Although there are folders inside the general components folder as well. I have structured the folders so that the content of each page is the same as the component system inside React.
---

### Routing in React

#### Routing in React application is very simple in my oppinion. It has only 4 tracks. Only one of them is private. It is the user's personal page from where he gets some additional features. For that you need to open an account first and then log in.

---


### State management and asynchronous operations with Redux-toolkit

#### As you know redux-toolkit is a special tool for data management and manipulation. It gives an opportunity to divide all the data of the program into sections and work with them in parts, thus optimizing the work of the program. Redux-toolkit features the ability to mutate data to modify it, and the ability to send and handle asynchronous requests conveniently. Behind all this is the Immer library, which makes working with Redux-toolkit easier, more convenient and more optimal.

#### For asynchronous operations, I used the combination of the createAsyncThunk function and extraReducers. CreateAsyncThunk allows you to create and then send an asynchronous request. And with the help of extraReducer, it is possible to follow the progress of that request and there is an opportunity to take certain actions or change the data for its various states.

--- 

### Routes in database

#### Database is also very simple. It has only 2 rotes, one for users data and one for all newsfeed in this project.

---

### Feaatures

* account creation
* private profile page
* creating, deleting and editing articles
* publishing the articles that user has created on general news feed
* deletion of account, implies deletion of all user data, deletion of all articles ever created by him
* pagination (without styling)
* search and filtering
* simple and intuitive user interface
* pages transition (animated routes)
* acception of HTTP methods 

#### For demonstration use this data to login.
	username: admin12345
	password: admin12345

--- 

## Epilogue

#### I tried to write as clean, neat and understandable code as possible. I agree that there will be parts where the code could have been written differently, but some constructs that have similar logic or are close to each other in the way they work, I've specifically written differently to show that I'm familiar with the tools provided and can handle the same problem. solve in different ways.

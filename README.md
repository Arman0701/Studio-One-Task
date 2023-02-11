# Studio One Task (3th stage)
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
	npm i
	#or
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
# SQL_Animation
## Purpose
The purpose of this project is to create a web app to visualize the animation of various SQL query. The web app can be used as SQL teaching tool. This project is created under the guidance and supervision of [Dr. Gang Qian](http://cs2.uco.edu/~gqian/) at University of Central Oklahoma.
## Configuration and Running App
* [ANTLR](https://www.antlr.org/) Tool and JavaScript Runtime is the only dependency you need for configuring the app but the JavaScript Runtime and files created by ANTLR Tool are already included in this repository. Therefore, you do not need to install anything in order to run the app. Simply, download the repository and open the index.html file in your browser to run the app. If you are using Google Chrome, you might face "Cross origin requests are only supported for HTTP" error but your app should be able to run app in Firefox without any problems. The "Cross Origin" error can be solved by running simple web sever and making the app available over server. A simple server like [Web Server for Chrome](https://chrome.google.com/webstore/detail/web-server-for-chrome/ofhbbkphhbklhfoeikjpcbhemlocgigb?hl=en) can be used to solve the problem. You can check out [this](https://stackoverflow.com/questions/20041656/xmlhttprequest-cannot-load-file-cross-origin-requests-are-only-supported-for-ht/20578692) stackoverflow thread for more information about the issue and solutions.
First, you need to install ANTLR Tool and Java Target, and JavaScript Runtime from [here](https://www.antlr.org/download.html). You can also download JavaScript Runtime using npm with the following command.
```
npm install antlr4
```
The antlr4 folder in this repository is actually the JavaScript Runtime engine for our app. 



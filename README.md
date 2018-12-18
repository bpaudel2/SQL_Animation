# SQL_Animation
## Purpose
The purpose of this project is to create a web app to visualize the animation of various SQL query. The web app can be used as SQL teaching tool. This project is created under the guidance and supervision of [Dr. Gang Qian](http://cs2.uco.edu/~gqian/) at University of Central Oklahoma.
## Configuration and Running App
* [ANTLR](https://www.antlr.org/) Tool and JavaScript Runtime is the only dependency you need for configuring the app but the JavaScript Runtime and files created by ANTLR Tool are already included in this repository. Therefore, you do not need to install anything in order to run the app. Simply, download the repository and open the index.html file in your browser to run the app. If you are using Google Chrome, you might face "Cross origin requests are only supported for HTTP" error but your app should be able to run app in Firefox without any problems. The "Cross Origin" error can be solved by running simple web sever and making the app available over server. A simple server like [Web Server for Chrome](https://chrome.google.com/webstore/detail/web-server-for-chrome/ofhbbkphhbklhfoeikjpcbhemlocgigb?hl=en) can be used to solve the problem. You can check out [this](https://stackoverflow.com/questions/20041656/xmlhttprequest-cannot-load-file-cross-origin-requests-are-only-supported-for-ht/20578692) stackoverflow thread for more information about the issue and solutions.

If you want to build the project on your own from the scratch, please keep reading below.

First, you need to install ANTLR Tool and Java Target, and JavaScript Runtime from [here](https://www.antlr.org/download.html). You can also download JavaScript Runtime using npm with the following command.
```
npm install antlr4
```
The antlr4 folder in this repository is actually the JavaScript Runtime engine for our app. Once you install antlr-4.7.1-complete.jar (ANTLR Tool) and JavaScript Runtime, please follow instructions for specific machine below. The only requirement for the ANTLR Tool is that you have to have at least least Java 1.7 installed on your machine in order run it.
### For Linux/Mac OS
```
sudo cp antlr-4.7.1-complete.jar /usr/local/lib/   //Copying ANTLR Tool to your local library
export CLASSPATH = ".:/usr/local/lib/antlr-4.7.1-complete.jar:$CLASSPATH"  //Adding ANTLR Tool to your .bash_profle or .profile
// The following line creates alias antlr4 for ANTLR Tool in order to simplify the use of tool
alias antlr4='java -Xmx500M -cp "/usr/local/lib/antlr-4.7.1-complete.jar:$CLASSPATH" org.antlr.v4.Tool'
```
### For Windows
```
// 1. Copy antlr-4.7.1-complete.jar in C:\Program Files\Java\libs (or wherever you prefer)
// 2. Create or append to the CLASSPATH variable the location of antlr
// you can do to that by pressing WIN + R and typing sysdm.cpl, then selecting Advanced (tab) > Environment variables > System Variables
// CLASSPATH -> .;C:\Program Files\Java\libs\antlr-4.7.1-complete.jar;%CLASSPATH%
// 3. Add aliases
// create antlr4.bat  
java org.antlr.v4.Tool %*
// create grun.bat  
java org.antlr.v4.gui.TestRig %*
// put them in the system PATH or any of the directories included in your PATH
```
Now, you can use antlr4 command in your terminal or command line in order to generate Parser using your grammer. PlSqlLexer.g4 and PlSqlParser.g4 are grammar in our case. We borrowed these grammar form [here](https://github.com/antlr/grammars-v4/tree/master/plsql). The following command generates files like PlSqlLexer.js, PlSqlLexer.tokens, PlSqlLexer.interp,PlSqlParser.tokens, PlSqlParser.interp, PlSqlParser.js and PlSqlParserListener.js

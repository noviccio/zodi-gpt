
## Zodi GPT

A ChatGPT clone and with the OpenAI API! Functionalities include conversation memory and the ability to switch between conversations like the real site. This project was made with React.js, Node.js, Javascript, and CSS. (In the future I'm going to use AWS)

## Project Status

As of now, this project can only be run locally. A static site is currently up and running on Github Pages, but I'm working on creating a backend server using AWS right now. I'm also trying to take out this scrollbar in the middle of the screen. 

Visit the site: https://noviccio.github.io/zodi-gpt

## Project Screen Shot(s)

#### Example:   

[ PRETEND SCREEN SHOT IS HERE ]

[ PRETEND OTHER SCREEN SHOT IS HERE ]

## Installation and Setup Instructions 

Clone down this repository. Here are all the dependencies:   "cors": "^2.8.5", "dotenv": "^16.3.1", "express": "^4.18.2", "nodemon": "^3.0.1",

Installation:

`npm install`  

To Run Test Suite:  

`npm test`  

To Start Site:

`npm start:frontend`  

Then, 

`npm start:backend`

To Visit App, Look Up:

`localhost:3000`  

## Reflection

This was a 3 week long side project built over the summer going into my Junior year. Project goals included using technologies learned up until this point and familiarizing myself with documentation for new features. I really wanted to learn how to use the API of a widely used site.   

Originally I wanted to build a simpler version of the ChatGPT UI, and maintain the same functionality. I read alot of documentation on the OpenAI API, and how message data is pulled through the API to get a response back. 

One of the main challenges I've ran into is deploying this app globally. This is what I'm currently working on. I need to set up a backend server, and hook it up to my react frontend. 

At the end of the day, the technologies implemented in this project are React, and a significant amount of VanillaJS, and CSS. I learned how work with JSON, as well. I chose to use the `create-react-app` boilerplate to minimize initial setup and invest more time in diving into weird technological rabbit holes. 

# To-do list project

**Hello!** :wave: This is my project to showcase my CRUD capabilities and to staple my understanding of:
- DOM Manipulation
- Webpack
- HTML, CSS & JS
- Local Storage
- Firestore (Future update)

## Getting Started :heavy_check_mark:

If this is your first time here, then go ahead and create a project. This will then display on the left-hand side for you to select. Select your project, and add some tasks! The beauty of this project is that all of the information is stored locally to the browser, so next time you come back, all your projects and tasks will be here ready and waiting for you (you can see this with a simple page refresh :smile:).

## About the project... :bulb:

The project is currently complete for Local Storage support. During the project I tried to add Firebase support for Firestore Cloud Storage, due to the time this project has taken (100+ hours so far) I have decided to move forward without Firestore for the time being so that I can continue my studies for Full Stack development and have a working portfolio project available for viewing. :raised_hands:

I have decided to leave the files up for view, so if you are interested in my current progress of adding Firestore support, then feel free to take a look through the source code. As time goes on I plan to add to this project bit by bit so that I can then have a project that can showcase my ability in vanilla JavaScript.

### As it stands, current working implementation of Firestore is as follows:

- Import tasks and projects from Firestore.
- Projects display the correct tasks associated with them.
- New projects can be declared and added into the Firestore.
- Ability to switch between LocalStorage and Firestore and render projects and tasks respective of their storage location.

### To be implemented

- Declare new tasks relevant to the chosen task and posted to Firestore.
- Delete projects and tasks from Firestore.
- When switching between storage locations, functions are corrected to their respective databases for CRUD.

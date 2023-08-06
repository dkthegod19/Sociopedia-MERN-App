
                                                    Sociopedia

Sociopedia is a social media application developed from scratch using MERN stack technologies (MongoDB, Express.js, React, Node.js). 
The app allows users to register, create a profile, and connect with friends and family by sharing images and posts about their thoughts and experiences.

Key functionalities of Sociopedia include:

Registration and Profile Creation: Users can register on the app with complete validation and upload their profile image. 
This allows them to create a personalized profile for signing in and using the app.

Home Page: The app's home page features a clean design with various widgets displaying user information for the currently signed-in user.

Post Creation: Users can make posts on the home page and add images to their posts. They can also edit the posts they have created.

Posts Feed: The home page displays a feed of the user's own posts as well as posts from other users. Users can like, comment, and read comments on the posts.

Friend List: Users can add other users as friends and defriend them. The friend list is updated accordingly for both users.

User Profiles: Users can visit other users' profiles to view their posts and friend list.

Dark and Light Mode: The app includes a navbar with an option to toggle between dark and light mode.

Responsiveness: Sociopedia is designed to be responsive, allowing users to access the site on smaller screens with modified adjustments.

The working of the app relies on APIs created from scratch, which retrieve information from the backend database. The app's frontend is built using React, React Router for navigation, Formik and Yup for form creation and validation, and Redux Toolkit for state management, with data stored in local storage using Redux Persist and image uploads managed with React Dropzone.

The backend of the app is built using Node.js as the runtime, Express.js as the backend framework, Mongoose for database management, JSON Web Token for web authentication, and Multer for file uploading.


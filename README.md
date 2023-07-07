# Daily-Blog-WebApp
This is a daily blog web app , where user can upload they daily blogs in forms of text and narrate their experiences , this was made using NodeJs ,express and EJS . 

Installation
Follow these steps to set up the project locally:

Clone the repository:
git clone https://github.com/your-username/daily-blog-web-app.git

Navigate to the project directory:
cd daily-blog-web-app

Install dependencies:
npm install

Set up environment variables:
Create a new file named .env in the root directory.
Copy the content from .env.example into .env.
Customize the environment variables as per your requirements (e.g., database connection details, session secret).

Start the application:
npm start
Open a web browser and visit http://localhost:3000 to access the web app.

Folder Structure
The project structure is organized as follows:

app.js: Entry point of the application where Express is configured.
controllers/: Contains the controllers that handle the application's logic.
models/: Contains the data models for the application.
public/: Static files (CSS, JavaScript, images) are stored here.
routes/: Defines the application routes and maps them to controllers.
views/: Contains the EJS templates for rendering the web pages.
middlewares/: Custom middleware functions used in the application.
uploads/: Directory for storing uploaded images.
utils/: Utility functions used throughout the application.
config/: Configuration files, such as database connection settings.
README.md: Documentation and instructions for the project.
Dependencies
The main dependencies used in this project are:

express: Web framework for Node.js.
ejs: Templating engine for rendering dynamic content.
mongoose: Object Data Modeling (ODM) library for MongoDB.
express-session: Session middleware for Express.
connect-mongo: MongoDB session store for Express.
dotenv: Module to load environment variables from a .env file.
multer: Middleware for handling file uploads.
slugify: Library for generating URL-friendly slugs.
moment: Date and time manipulation library.

# React Blog Project

React project emulating a blogging website.

## Start json-server to watch the database file
The data is stored in db.json and can be accessed by starting JSON server in the developement mode to mimick a database.

While in developement mode and with local-developemen server running, open a new terminal in the CLI.
In new terminal run: `npx json-server --watch data/db.json --port8000`

JOSN server watches our db.json file and wraps it up in API endpoints. Now the website can fetch and post data from and to db.json


## From create-react-app
### Available Scripts

In the project directory, you can run:

#### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

#### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

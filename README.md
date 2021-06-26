# Nasa Metorite Data Visualizer

React app, that allows a user to explore Nasa Meteorite Data and to add their any favorites they want to their own favorites list. This list can persist through page refreshes as well in other tabs, because it saves the favorites using the HTML5 LocalStorage API. Internal state management is handled using React Hooks

It has Responsive CSS styling, going from 2 column to single column layout on smaller screens. Material UI and custom CSS is used for this. It displays a popup when the user adds a new item to their list for a more friendly experience.



## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

## Learn More
For any info about the Webpack and Babel implementation - 
You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

.

## Documentation
### Client Side Framework
I went with React as I'm very passionate about improving at it and using the skills I've already aquired to build cool things.
To learn React, check out the [React documentation](https://reactjs.org/)

React Hooks was used for internal state managment, I prefer these to traditional class based components when possible. [React Hooks](https://reactjs.org/docs/hooks-intro.html)

### Styling
To explore something new for styling I implemented Material UI to assist with styling and responsiveness [Material UI](https://material-ui.com/) - for any component I implemented, search their docs for relevent details. I found their DataGrid component to be helpful for displaying this dataset, as it was intended to be used for large amount of data like this Nasa data - a super charged table with native filterability for all data columns. I also experimented with overriding their default styling, using their hooks api, which is a Javascript solution for applying CSS [Styling](https://material-ui.com/styles/basics/) and their Grid component(not to be confused with DataGrid) this is for layout, [Grid](https://material-ui.com/components/grid/)

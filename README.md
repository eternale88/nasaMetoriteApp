# Nasa Metorite Data Visualizer

React app, that allows a user to explore Nasa Meteorite Data and to add any favorite meteors they want to their own favorites list. This list can persist through page refreshes as well as in other tabs, because it saves the favorites using the HTML5 LocalStorage API. Internal state management is handled using React Hooks

It has Responsive CSS styling, going from 2 column to single column layout on smaller screens. Material UI and custom CSS is used for this. It displays a popup when the user adds a new item to their list for a more friendly experience.

It uses Axios to fetch the data from Nasa Api as this provides a common way to fetch and post data, the native fetch api would have worked just as well, but I felt this is a common tool for teams to use so I went with it.

For testing we use the React Testing Library which uses Jest for Unit Testing. Their are 4 test suites for each component(Header, MeteorTable, FavoritesTable, and the App component) -  I've implenented some integration testing by letting the app load and fetch relevant data and then capture the user clicking on some DataTable locations which would be the flow for them adding a favorite to the favorites list. For further more robust integration testing I would consider going with some custom html el table that would enable me to add custom HTML attributes. I think I might be able to query the state of the table and simulate more user interactions. The DataGrid component has so many nested elements that obscure the ability to do this. I think unit testing and integration testing with components kind of flows together and it's more about seeing whether you are testing enough from the user perspective for Integration, and more checking expected values and that each individual component renders for Unit testing.

For type checking I went with React prop-types to check the data type of values being passed to components (https://www.npmjs.com/package/prop-types)



## Running the app

Once you clone the app from this repo, cd into the root directory and run `npm intall package.json`
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

## Documentation
### Client Side Framework
I went with React as I'm very passionate about improving at it and using the skills I've already aquired to build cool things.
To learn React, check out the [React documentation](https://reactjs.org/)

React Hooks was used for internal state managment, I prefer these to traditional class based components when possible. [React Hooks](https://reactjs.org/docs/hooks-intro.html)

### Styling
To explore something new for styling I implemented Material UI to assist with styling and responsiveness [Material UI](https://material-ui.com/) - for any component I implemented, search their docs for relevent details. I found their DataGrid component to be helpful for displaying this dataset, as it was intended to be used for large amount of data like this Nasa data - a super charged table with native filterability for all data columns. I also experimented with overriding their default styling, using their hooks api, which is a Javascript solution for applying CSS [Styling](https://material-ui.com/styles/basics/) and their Grid component(not to be confused with DataGrid) this is for layout, [Grid](https://material-ui.com/components/grid/)

### Storage
[HTML5 Local Storage API](https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage)
The localStorage read-only property of the window interface allows you to access a Storage object for the Document's origin; the stored data is saved across browser sessions.

localStorage is similar to sessionStorage, except that while localStorage data has no expiration time, sessionStorage data gets cleared when the page session ends — that is, when the page is closed. (localStorage data for a document loaded in a "private browsing" or "incognito" session is cleared when the last "private" tab is closed.)

### Type Checking
(https://www.npmjs.com/package/prop-types) Typescript would be another way to go.

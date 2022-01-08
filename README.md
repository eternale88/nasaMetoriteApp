# Nasa Metorite Data Visualizer

# FYI - 2022 Improvements - UPDATED WITH Context Api for Global State Management - tests also updated to reflect this, and updated type checking with prop-types

React app, that allows a user to explore Nasa Meteorite Data through a Table with dynamic filtering for each column( sorting, filtering, showing and hiding) - and the ability to add any meteors they want to their own favorites table that they can explore more through the advanced filtering mentioned earlier. This list can persist through page refreshes as well as in other tabs, because it saves the favorites using the HTML5 LocalStorage API. Internal state management is handled using React Hooks.

It has Responsive CSS styling, going from 2 column to a single column layout on smaller screens. Material UI and custom CSS is used for this. It displays a popup when the user adds a new item to their list for a more friendly user experience.

It uses Axios to fetch the data from Nasa Api as this provides a common way to fetch and post data, the native fetch api would have worked just as well, but I felt this is a common tool for teams to use so I went with it.

For testing we use the React Testing Library which uses Jest for Unit Testing. I had tried this out to test expected values of some Javascript Functions for an Algorithm course I did on Udemy. I wanted to try to write unit tests for these React components, and to try and see how to write a basic integration test. 

Their are 4 test suites - 1 for each component(Header, MeteorTable, FavoritesTable, and the App component) -  I've implemented some integration testing by letting the app load and fetch relevant data and then capture the user clicking on some DataTable locations which would be the flow for them adding a favorite to the favorites list. For further more robust integration testing I would consider going with some custom html table (or the basic material ui table compnent) that would enable me to add more custom HTML attributes. I think I might be able to query the state of the table and simulate more user interactions. The DataGrid component has so many nested elements that obscure the ability to do this. I think unit testing and integration testing with components kind of flows together and it's more about seeing whether you are testing enough from the user perspective for Integration, and more checking expected values and that each individual component renders for Unit testing. I've read that Cypress is popular for Integration tests as well.

For type checking I went with React prop-types to check the data type of values being passed to components (https://www.npmjs.com/package/prop-types)

**added context api for global state, this cleaned up app.js alot, and now most state is stored in the context file and can be accessed anywhere in the app with less prop drilling

## Running the app

Once you clone the app from this repo, cd into the root directory `nasa-metorite-app` and run `npm intall package.json`
In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test` please read this

Launches the test runner in the interactive watch mode.\

When you run these it triggers Jest Watch mode which watches for saved changes and reruns tests, but since you won't have made any changes it won't immediately notice the tests and might say something like this:
`No tests found related to files changed since last commit.`
`Press a to run all tests, or run Jest with --watchAll.`

`Watch Usage`
 `› Press a to run all tests.`
 `› Press f to run only failed tests.`
 `› Press q to quit watch mode.`
 `› Press p to filter by a filename regex pattern.`
 `› Press t to filter by a test name regex pattern.`
 `› Press Enter to trigger a test run.`

In that case please press the `a` key on your keyboard to run all tests and it should pick them up and run them. 

Do not run Jest with `--watchAll` as it says, this is configured with an npm script already. `npm test` is what you want so just press `a` - thanks.


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

I also thought it was great that they already have robust testing on their end according to the docs (https://material-ui.com/guides/testing/#testing)

### Storage
[HTML5 Local Storage API](https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage)
The localStorage read-only property of the window interface allows you to access a Storage object for the Document's origin; the stored data is saved across browser sessions.

localStorage is similar to sessionStorage, except that while localStorage data has no expiration time, sessionStorage data gets cleared when the page session ends — that is, when the page is closed. (localStorage data for a document loaded in a "private browsing" or "incognito" session is cleared when the last "private" tab is closed.)

### Type Checking
(https://www.npmjs.com/package/prop-types) Typescript would be another way to go.

### NASA Meteorite Landings API
[Meteorite Landings API Docs](https://data.nasa.gov/Earth-Science/Meteorite-Landings-API/c2vx-j9ed)
API using comprehensive data set from The Meteoritical Society that contains information on all of the known meteorite landings.


### React Context API
[Context API Docs](https://reactjs.org/docs/context.html)
Context provides a way to pass data through the component tree without having to pass props down manually at every level.


This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.


## Server Side Rendering

* It does not handle rendering images correctly when using imports, which need Webpack in order to work (and which complicates the process a lot)
* It does not handle page header metadata, which is essential for SEO and social sharing purposes (among other things)
* So while this is a good example of using ReactDOMServer.renderToString() and ReactDOM.hydrate to get this basic server-side rendering, it’s not enough for real world usage.

### `npm run build`
### `node server/index.js`
Open [http://localhost:8080](http://localhost:8080) to view it in the browser.
# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

External utility libraries used –

moment.js for automatically updating the time difference of comment of user from the real time.

How to integrate and use the widget in different websites?

steps

Ø  First you have to copy all the files in src folder and icons from the public folder from the cloned repository and paste it to the respective src folder and public folder of the application you want to use the comment widget.

 

Ø  Then Install the node package module of -moment.js in the Application where you want to use comment widget.

 

Ø  Then you can import the comments.js in the required js folder of your application and use the comment widget.

             

Key design decisions 

·       comments.js: Responsible for rendering a list of individual comments and reply.     

·       comment.js: Decide whether users can edit or delete, reply their comments and implement   corresponding functionality. Also, functionality of sorting of comments   
        based on likes and time difference calculation of user’s comment is implemented in this js file.  
.       used random function for different users in different time . Coz we get the user data from service side . But we don’t have any api to call . 

Challenges faced -

·       Displaying the time difference of users comment from the real time.

·       Retaining the data after reloading of page.

User experience and accessibility -

·       Users can leave, edit, and interact with comments on the website.

·       Comments are sorted (descending order) based on no of likes, so user can see the most liked comments easily .

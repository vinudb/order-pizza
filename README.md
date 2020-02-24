# LIVE URL : https://order-pizza-vinay.herokuapp.com/

# To view the output in the development mode, follow the steps as given below:
1) In the console, navigate to the project folder.
2) Run command "npm install". This will install all the dependencies and creates a node-modules folder.
   This process takes around 5-8 mins to complete.
3) Run command "npm start". Runs the app in the development mode.
   Opens the application in the browser
4) Run command "npm test" to run all the unit test cases

# Highlights
- UI is not responsive. It is designed only for the desktop view
- Used Redux for the centralized state management
- Used react-redux to connect the class component with the redux store
- Used redux-thunk as the middleware to create action generator functions and also to get access to the dispatch and getstate methods
- Used scss preprocessor have utilized it's features
- Used jest and enzyme for writing unit test cases

# Features
- Complete app is controlled by the workGroup data set in the workflow directory.
- No data is hardcoded or assumed
- All the rules, minimum order, max order value, serving size configurable or not, basic color schemes for text and buttons, pizza types and it's title/cost/serving size are configured in the workGroup object
- All the rules, constraints are made applicable to one workgroup and are slighly changed for another workgroup to demo the configurability.

# NOTE: 
- This project could have also been done using usual state/setState/props methods OR context-api. I have good understanding of both the concepts.
- More focus is given on the configurable nature of the application.
- Unit tests for actions, reducers and few components are written.
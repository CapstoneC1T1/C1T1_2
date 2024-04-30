# CS 639 README file

#### Partner: Capital One

#### Team Name: C1T1

#### Team Member: Alexis Liu, Hriday Gupta, Joshua Kim, Yifan Yang

#### Link to repository

https://github.com/CapstoneC1T1/C1T1_2

### Set-up steps:

1. Clone the repository
2. Navigate to the express-api directory: Run `npm install`. Run `npm run dev`
3. Navigate to the my-app directory: Run `npm install react-modal` and `npm install recharts`. Run `npm install`. Run `npm start`

**Note**: To setup and run everything you want locally. You would need to create your own MongoDB database as well, and also pass the username and password into express-api/index.js.

### Overview of how the code works

By running the commands from the setup steps, it will run the NextJS server on localhost port 3000. The frontend is responsible for displaying all functionalities. In order to store and retrieve data, the frontend communicates with our backend server. This backend server is connected to our database which is able to store all of the necessary information for our banking application. 

### What works

Transaction page:

- Add transactions
- Categorize transactions (with filtering and pie chart)
- Add notes to transactions

Easy mode page:

- Add transactions
- Deposit Money

### What doesn’t work

- Pay Now button in the home page
- Savings account
- Money transfer button between checking and saving account

### What we would work on next

- Improve the home page:

  ​	Create saving accounts, transfer money between two accounts by just clicking on the button

- Personalized education page

- More analytical functionalities

- Deploy the app on AWS

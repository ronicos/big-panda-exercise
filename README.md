This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).

## instructions:
- npm i
- npm start

### note
In order to be able to make requests, 
I added 'cors' module in the server project:

- npm i -S cors
- open index.js file
- add the following code: "const cors = require('cors');"
- add the following code, before the endpoints: "app.use(cors());"
- npm start

import App from './app.js';
import SignUp from './SignUp.js';
import Witness from './Witness.js';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom'

ReactDOM.render((
  <BrowserRouter>
    <App />
  </BrowserRouter>
), document.getElementById('root'))


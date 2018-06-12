import React from 'react';
import ReactDOM from 'react-dom';
import 'semantic-ui-css/semantic.min.css';
import App from './Components/App'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux';
import { Store } from './Store';
import registerServiceWorker from './registerServiceWorker';



ReactDOM.render(
<Provider store={Store}>
  <BrowserRouter>
    <App />
  </BrowserRouter>
</Provider>,
 document.getElementById('root'));
registerServiceWorker();

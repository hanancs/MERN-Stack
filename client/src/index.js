import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';

import { reducers } from './reducers';
import App from './App';
import './index.css';

const store = createStore(reducers, compose(applyMiddleware(thunk)));

debugger;

const Footer = () => (
  <footer className="footer">
    <p>&copy; MEM.IO 2021</p>
  </footer>
);

ReactDOM.render(
  <Provider store={store}>
    <App />,
    <Footer/>
  </Provider>,
  document.getElementById('root'),
);

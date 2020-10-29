

import React      from 'react';
import ReactDOM   from 'react-dom';

import App        from './App';
import TodisStore from './Model';

import * as SWork from './serviceWorkerRegistration';

import {
  BrowserRouter
} from 'react-router-dom';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <TodisStore>
        <App/>
      </TodisStore>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

SWork.register();

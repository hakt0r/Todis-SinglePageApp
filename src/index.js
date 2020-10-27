import React      from 'react';
import ReactDOM   from 'react-dom';
import App        from './App';
import TodisStore from './Model';
import * as serviceWorkerRegistration from './serviceWorkerRegistration';

import { BrowserRouter } from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css';

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

serviceWorkerRegistration.register();

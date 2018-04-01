import * as React from 'react';
import ReactDOM from 'react-dom';
import { AppContainer } from 'react-hot-loader';

import Main from './components/main/main.component';

const render = () => {
  ReactDOM.render(
    (
      <AppContainer warnings={false}>
        <Main />
      </AppContainer>
    ),
    document.getElementById('app')
  );
};

render();

if (module.hot) {
  module.hot.accept('./components/main/main.component.jsx', () => render());
}

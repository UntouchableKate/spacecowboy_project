import React from 'react';
import ReactDOM from 'react-dom';
import './sass/styles.scss';
import App from './Components/App/App';
import SimpleReactLightbox from 'simple-react-lightbox'


ReactDOM.render(
  <React.StrictMode>
    <SimpleReactLightbox>
    <App />
    </SimpleReactLightbox>
  </React.StrictMode>,
  document.getElementById('root')
);


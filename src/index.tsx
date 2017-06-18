import * as React from 'react';
import * as ReactDOM from 'react-dom';
import ShowPromo from './ShowPromo/ShowPromo';
import registerServiceWorker from './registerServiceWorker';
import './index.css';

const showImage = require('./images/tile.jpg');
const showName = 'Home and Away';

ReactDOM.render(
  <ShowPromo img={showImage} showName={showName}/>,
  document.getElementById('root') as HTMLElement
);
registerServiceWorker();

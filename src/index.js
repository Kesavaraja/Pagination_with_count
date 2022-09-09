import react from 'react';
import ReactDOM from 'react-dom/client';
import PaginationApp from './lib/components/paginationApp.js';
import * as style from './assets/styles.css';

ReactDOM.render(
    <React.StrictMode>
      <PaginationApp />
    </React.StrictMode>,
    document.getElementById('root')
  );
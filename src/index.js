import react from 'react';
import ReactDOM from 'react-dom/client';
import PaginationApp from './lib/components/paginationApp.js';
import * as style from './assets/styles.css';

const container = document.getElementById('root');

// Create a root.
const root = ReactDOM.createRoot(container);

// Initial render
root.render(<PaginationApp />);

// During an update, there is no need to pass the container again
root.render(<PaginationApp />);
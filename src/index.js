import React from 'react';
import ReactDOM from 'react-dom/client';
import PaginationComponent from './lib/components/PaginationComponent.js';
import * as style from './lib/styles.css';

const container = document.getElementById('root');

// Create a root.
const root = ReactDOM.createRoot(container);

// Initial render
root.render(<PaginationComponent />);

// During an update, there is no need to pass the container again
root.render(<PaginationComponent />);
export default PaginationComponent;
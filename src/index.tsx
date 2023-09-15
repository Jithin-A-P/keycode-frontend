import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import '@styles/global.css';

import App from './App';
import reportWebVitals from './reportWebVitals';

const root = createRoot(document.getElementById('root') as HTMLElement);
root.render(
    <App />
);

reportWebVitals();
